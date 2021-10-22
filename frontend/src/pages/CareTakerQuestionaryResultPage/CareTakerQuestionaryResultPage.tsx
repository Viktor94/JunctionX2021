import { Card, Stack } from '@mui/material'
import { BreadCrumbActiveItem, BreadCrumbDivider, BreadCrumbItem, Breadcrumbs } from 'components/page/Breadcrumbs'
import { CareTakerPageBase } from 'components/page/CaretakerPageBase'
import { PATIENTS } from 'pages/CareTakerHomePage/components/PatientList'
import React from 'react'
import { useParams } from 'react-router'

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
        <Card>{questionary.date}</Card>
      </Stack>
    </CareTakerPageBase>
  )
}
