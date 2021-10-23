import { Card, CardContent, Stack } from '@mui/material'
import { BreadCrumbActiveItem, BreadCrumbDivider, BreadCrumbItem, Breadcrumbs } from 'components/page/Breadcrumbs'
import { CareTakerPageBase } from 'components/page/CaretakerPageBase'
import { PATIENTS } from 'pages/CareTakerHomePage/components/PatientList'
import React from 'react'
import { useParams } from 'react-router'
import { BooleanAnswer } from './components/BooleanAnswer'

export const CareTakerQuestionaryResultPage: React.FC = () => {
  const { id, questionaryId } = useParams<{ id: string; questionaryId: string }>()
  const patient = PATIENTS.find((patient) => patient.id === id)!
  const questionary = patient.questionnaryResults.find((result) => result.id === questionaryId)!

  return (
    <CareTakerPageBase
      title={
        <Breadcrumbs>
          <BreadCrumbActiveItem to={`/admin`}>Patients</BreadCrumbActiveItem>
          <BreadCrumbDivider />
          <BreadCrumbActiveItem to={`/admin/${patient.id}`}>{patient.name}</BreadCrumbActiveItem>
          <BreadCrumbDivider />
          <BreadCrumbItem>{questionary.date}</BreadCrumbItem>
        </Breadcrumbs>
      }
    >
      <Stack spacing={1}>
        <Card>
          <CardContent>
            <Stack spacing={4}>
              <BooleanAnswer question="Shortness of breath or difficulty breathing" answer={true} />
              <BooleanAnswer question="Ankle swelling" answer={true} />
              <BooleanAnswer question="Problems with memory, attention, or concentration" answer={false} />
              <BooleanAnswer question="Frequent headaches or migraines" answer={false} />
              <BooleanAnswer question="Numbness or tingling" answer={true} />
              <BooleanAnswer question="Dizziness, vertigo or problems with balance or equilibrium " answer={true} />
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </CareTakerPageBase>
  )
}
