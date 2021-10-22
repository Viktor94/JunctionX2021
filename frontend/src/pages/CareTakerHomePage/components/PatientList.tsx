import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

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
    questionnaryResults: [],
    canceryType: 'Small cell lung cancer',
    yearOfDiagnosis: 2021,
  },
  {
    id: '3',
    email: 'example@example.com',
    name: 'Test Patient 3',
    priority: 'NORMAL',
    questionnaryResults: [],
    canceryType: 'Small cell lung cancer',
    yearOfDiagnosis: 2021,
  },
]

export const PatientList: React.FC = () => {
  const importantPatients = PATIENTS.filter((patient) => patient.priority === 'HIGH')
  const restPatients = PATIENTS.filter((patient) => patient.priority !== 'HIGH')

  return (
    <Stack spacing={4}>
      <Stack spacing={1}>
        <Typography variant="h6">Patients waiting for review</Typography>
        <Stack spacing={2}>
          {importantPatients.map((patient) => (
            <PatientCard key={patient.id} patient={patient} />
          ))}
        </Stack>
      </Stack>
      <Stack spacing={1}>
        <Typography variant="h6">Other patients</Typography>
        <Stack spacing={2}>
          {restPatients.map((patient) => (
            <PatientCard key={patient.id} patient={patient} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

const PatientCard: React.FC<{ patient: Patient }> = ({ patient }) => {
  return (
    <Card component={Link} to={`/admin/${patient.id}`} style={{ textDecoration: 'none' }}>
      <CardContent>
        <Typography>{patient.name}</Typography>
      </CardContent>
    </Card>
  )
}
