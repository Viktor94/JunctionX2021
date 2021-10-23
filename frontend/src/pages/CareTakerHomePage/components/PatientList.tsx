import { Box, CardContent, Chip, Stack, Typography } from '@mui/material'
import { LinkCard } from 'components/LinkCard'
import React from 'react'

export interface QuestionnaryResult {
  id: string
  date: string
  answers: {
    questionId: string
    answer: boolean
  }[]
}

interface Patient {
  id: string
  name: string
  email: string
  canceryType: string
  priority: 'HIGH' | 'NORMAL'
  yearOfDiagnosis: number
  questionnaryResults: QuestionnaryResult[]
}

export const PATIENTS: Patient[] = [
  {
    id: '1',
    name: 'Test Patient 1',
    email: 'example@example.com',
    priority: 'HIGH',
    canceryType: 'Small cell lung cancer',
    yearOfDiagnosis: 2021,
    questionnaryResults: [{ id: '1', date: '2021. 10. 22.', answers: [] }],
  },
  {
    id: '2',
    email: 'example@example.com',
    name: 'Test Patient 2',
    priority: 'NORMAL',
    questionnaryResults: [{ id: '1', date: '2021. 10. 22.', answers: [] }],
    canceryType: 'Small cell lung cancer',
    yearOfDiagnosis: 2021,
  },
  {
    id: '3',
    email: 'example@example.com',
    name: 'Test Patient 3',
    priority: 'NORMAL',
    questionnaryResults: [{ id: '1', date: '2021. 10. 22.', answers: [] }],
    canceryType: 'Small cell lung cancer',
    yearOfDiagnosis: 2021,
  },
]

export const PatientList: React.FC = () => {
  const importantPatients = PATIENTS.filter((patient) => patient.priority === 'HIGH')
  const restPatients = PATIENTS.filter((patient) => patient.priority !== 'HIGH')

  return (
    <Stack spacing={6}>
      <Stack spacing={3}>
        <Typography variant="h6">Patients waiting for review</Typography>
        <Stack spacing={1}>
          <PatientListHeader />
          <Stack spacing={2}>
            {importantPatients.map((patient) => (
              <PatientCard key={patient.id} patient={patient} />
            ))}
          </Stack>
        </Stack>
      </Stack>
      <Stack spacing={3}>
        <Typography variant="h6">Other patients</Typography>
        <Stack spacing={1}>
          <PatientListHeader />
          <Stack spacing={2}>
            {restPatients.map((patient) => (
              <PatientCard key={patient.id} patient={patient} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

const PatientListGrid: React.FC = ({ children }) => {
  return (
    <Box alignItems="center" display="grid" gridTemplateColumns="150px 100px auto" gap="32px">
      {children}
    </Box>
  )
}

const PatientListHeader: React.FC = () => {
  return (
    <Box pl="16px" pr="16px" style={{ opacity: 0.7 }}>
      <PatientListGrid>
        <Typography>Name</Typography>
        <Typography>Status</Typography>
        <Typography>Last follow-up result</Typography>
      </PatientListGrid>
    </Box>
  )
}

const PatientCard: React.FC<{ patient: Patient }> = ({ patient }) => {
  const priorityToColor: Record<Patient['priority'], string> = {
    NORMAL: '#38913c',
    HIGH: '#ff7043',
  }

  const lastQuestionnaryResult = patient.questionnaryResults[patient.questionnaryResults.length - 1]

  return (
    <LinkCard to={`/admin/${patient.id}`}>
      <CardContent>
        <PatientListGrid>
          <Typography>{patient.name}</Typography>
          <Chip
            style={{
              backgroundColor: priorityToColor[patient.priority],
              pointerEvents: 'none',
              color: '#fff',
            }}
            label={patient.priority}
          />
          <Typography>{lastQuestionnaryResult?.date}</Typography>
        </PatientListGrid>
      </CardContent>
    </LinkCard>
  )
}
