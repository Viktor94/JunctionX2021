import { Card, CardContent, CircularProgress } from '@mui/material'
import { PatientPageBase } from 'components/page/PatientPageBase'
import { api } from 'lib/api/api'
import React from 'react'
import { useQuery } from 'react-query'
import { PatientForm } from './components/PatientForm'

export const PatientFomePage: React.FC = () => {
  const { data } = useQuery(['patient', 1], async () => {
    const res = await api.questions.getAllQuestions()
    res.data.push({ id: 123, description: 'In general, would you say your health is?', questionType: 'NUMERIC' })
    res.data.push({ id: 1234, description: 'Comments', questionType: 'TEXT' })
    return res
  })

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
      <PatientForm questions={data.data} />
    </PatientPageBase>
  )
}
