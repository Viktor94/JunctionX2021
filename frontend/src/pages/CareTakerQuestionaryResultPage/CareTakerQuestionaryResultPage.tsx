import { Card, CardContent, Stack, CircularProgress, Divider } from '@mui/material'
import { BreadCrumbActiveItem, BreadCrumbDivider, BreadCrumbItem, Breadcrumbs } from 'components/page/Breadcrumbs'
import { CareTakerPageBase } from 'components/page/CaretakerPageBase'
//import { PATIENTS } from 'pages/CareTakerHomePage/components/PatientList'
import React from 'react'
import { useParams } from 'react-router'
import { BooleanAnswer } from './components/BooleanAnswer'
import { useQuery } from 'react-query'
import { api } from 'lib/api/api'
import { NumericAnswer } from './components/NumericAnswer'
import { Stat } from 'components/Stat'

export const CareTakerQuestionaryResultPage: React.FC = () => {
  const { id, questionaryId } = useParams<{ id: string; questionaryId: string }>()
  const { data, status } = useQuery('patients', () => api.users.getAllPatients())

  if (!data) {
    return <CircularProgress />
  }
  const patient = data.data.find((patient) => patient.id === Number.parseInt(id))!
  const questionary = patient.carePlanFormList?.find((result) => result.id === Number.parseInt(questionaryId))!

  if (!questionary) {
    return null
  }

  return (
    <CareTakerPageBase
      title={
        <Breadcrumbs>
          <BreadCrumbActiveItem to={`/admin`}>Patients</BreadCrumbActiveItem>
          <BreadCrumbDivider />
          <BreadCrumbActiveItem to={`/admin/${patient.id}`}>{patient.fullName}</BreadCrumbActiveItem>
          <BreadCrumbDivider />
          <BreadCrumbItem>{new Date(questionary.dateOfSubmit!).toLocaleDateString()}</BreadCrumbItem>
        </Breadcrumbs>
      }
    >
      <Stack spacing={1}>
        <Card>
          <CardContent>
            <Stack spacing={6}>
              {!!questionary.weight && <Stat label="Weight" value={questionary.weight} />}
              <Stack direction="row" spacing={4}>
                {!!questionary.systolic && <Stat label="Systolic" value={questionary.systolic} />}
                {!!questionary.diastolic && <Stat label="Diastolic" value={questionary.diastolic} />}
                {!!questionary.pulse && <Stat label="Pulse" value={questionary.pulse} />}
              </Stack>
              <Stack spacing={4} divider={<Divider />}>
                {questionary.answers?.map((answer) => {
                  switch (answer.question!.questionType) {
                    case 'YES_NO':
                      return (
                        <BooleanAnswer question={answer.question?.description ?? ''} answer={answer.yesNoResponse!} />
                      )
                    case 'NUMERIC':
                      return <NumericAnswer question={answer.question!} answer={answer.numericResponse!} />
                    default:
                      return null
                  }
                })}
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </CareTakerPageBase>
  )
}
