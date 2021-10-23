import { Card, CardContent, CircularProgress } from '@mui/material'
import { PatientPageBase } from 'components/page/PatientPageBase'
import { api } from 'lib/api/api'
import React from 'react'
import { useQuery } from 'react-query'
import { PatientForm } from './components/PatientForm'

export const PatientFomePage: React.FC = () => {
  const { data } = useQuery(['patient', 1], () => api.users.getPatient(1))

  if (!data) {
    return (
      <PatientPageBase>
        <Card>
          <CardContent>
            <CircularProgress />
          </CardContent>
        </Card>
      </PatientPageBase>
    )
  }

  return (
    <PatientPageBase>
      <PatientForm questions={data.data.questions!} />
    </PatientPageBase>
  )
}
