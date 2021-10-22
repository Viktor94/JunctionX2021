import { Card, CardContent } from '@mui/material'
import { CareTakerPageBase } from 'components/page/CaretakerPageBase'
import React from 'react'
import { AddPatientForm } from './components/AddPatientForm'

export const CareTakerAddPatientPage: React.FC = () => {
  return (
    <CareTakerPageBase title="Add Patient">
      <Card>
        <CardContent>
          <AddPatientForm />
        </CardContent>
      </Card>
    </CareTakerPageBase>
  )
}
