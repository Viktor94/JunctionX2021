import { Box, CardContent, Chip, CircularProgress, Stack, Typography } from '@mui/material'
import { LinkCard } from 'components/LinkCard'
import { api } from 'lib/api/api'
import React from 'react'
import { useQuery } from 'react-query'
import { Patient } from '../../../lib/api/generated/generatedApi'

export interface QuestionnaryResult {
  id: string
  date: string
  answers: {
    questionId: string
    answer: boolean
  }[]
}

export const PatientList: React.FC = () => {
  const { data, status } = useQuery('patients', () => api.users.getAllPatients())

  if (!data) {
    return <CircularProgress />
  }

  const importantPatients = data?.data.filter((patient) => patient.priority === 'HIGH')
  const mediumPrioPatients = data?.data.filter((patient) => patient.priority === 'MEDIUM')
  const lowPrioPatients = data?.data.filter((patient) => patient.priority === 'LOW')

  return (
    <Stack spacing={6}>
      <Stack spacing={3}>
        <Typography style={{ fontWeight: 600 }}>Patients waiting for review</Typography>
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
        <Typography style={{ fontWeight: 600 }}>Medium priority patients</Typography>
        <Stack spacing={1}>
          <PatientListHeader />
          <Stack spacing={2}>
            {mediumPrioPatients.map((patient) => (
              <PatientCard key={patient.id} patient={patient} />
            ))}
          </Stack>
        </Stack>
      </Stack>
      <Stack spacing={3}>
        <Typography style={{ fontWeight: 600 }}>Low priority patients</Typography>
        <Stack spacing={1}>
          <PatientListHeader />
          <Stack spacing={2}>
            {lowPrioPatients.map((patient) => (
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
    <Box alignItems="center" display="grid" gridTemplateColumns="200px 100px auto" gap="40px">
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

export const priorityToColor: Record<string, string> = {
  LOW: '#38913c',
  HIGH: '#ff7043',
  MEDIUM: '#ebba34',
}
const PatientCard: React.FC<{ patient: Patient }> = ({ patient }) => {
  const lastQuestionnaryResult = patient.carePlanFormList?.[0]

  return (
    <LinkCard to={`/admin/${patient.id}`}>
      <CardContent>
        <PatientListGrid>
          <Typography>{patient.fullName}</Typography>
          <Chip
            style={{
              backgroundColor: priorityToColor[patient.priority!],
              pointerEvents: 'none',
              color: '#fff',
            }}
            label={patient.priority}
          />
          {lastQuestionnaryResult && lastQuestionnaryResult.dateOfSubmit && (
            <Typography>{new Date(lastQuestionnaryResult.dateOfSubmit).toLocaleDateString()}</Typography>
          )}
        </PatientListGrid>
      </CardContent>
    </LinkCard>
  )
}
