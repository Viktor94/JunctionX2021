import { Card, CardContent, Stack, CircularProgress } from '@mui/material'
import { BreadCrumbActiveItem, BreadCrumbDivider, BreadCrumbItem, Breadcrumbs } from 'components/page/Breadcrumbs'
import { CareTakerPageBase } from 'components/page/CaretakerPageBase'
//import { PATIENTS } from 'pages/CareTakerHomePage/components/PatientList'
import React from 'react'
import { useParams } from 'react-router'
import { BooleanAnswer } from './components/BooleanAnswer'
import { useQuery } from 'react-query'
import { api } from 'lib/api/api'

export const CareTakerQuestionaryResultPage: React.FC = () => {
  const { id, questionaryId } = useParams<{ id: string; questionaryId: string }>()
  const { data, status } = useQuery('patients', () => api.users.getAllPatients());

  if(!data) {
    return <CircularProgress/>
  }
  const patient = data.data.find((patient) => patient.id === Number.parseInt(id))!
  //const questionary = patient.questionnaryResults.find((result) => result.id === questionaryId)!
  const questionary = {date: "asd"};

  return (
    <CareTakerPageBase
      title={
        <Breadcrumbs>
          <BreadCrumbActiveItem to={`/admin`}>Patients</BreadCrumbActiveItem>
          <BreadCrumbDivider />
          <BreadCrumbActiveItem to={`/admin/${patient.id}`}>{patient.fullName}</BreadCrumbActiveItem>
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
