import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const PATIENTS = [
  { id: 1, name: 'Test Patient 1' },
  { id: 2, name: 'Test Patient 2' },
  { id: 3, name: 'Test Patient 3' },
]

export const PatientList: React.FC = () => {
  return (
    <Stack spacing={2}>
      {PATIENTS.map((patient) => (
        <Card key={patient.id} component={Link} to={`/admin/${patient.id}`} style={{ textDecoration: 'none' }}>
          <CardContent>
            <Typography>{patient.name}</Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  )
}
