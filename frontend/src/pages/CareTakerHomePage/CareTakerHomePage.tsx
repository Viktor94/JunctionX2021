import { Button } from '@mui/material'
import { CareTakerPageBase } from 'components/page/CaretakerPageBase'
import React from 'react'
import { Link } from 'react-router-dom'
import { PatientList } from './components/PatientList'

export const CareTakerHomePage: React.FC = () => {
  return (
    <CareTakerPageBase
      title="Patients"
      action={
        <Button variant="contained" size="large" component={Link} to="/admin/add">
          Add patient
        </Button>
      }
    >
      <PatientList />
    </CareTakerPageBase>
  )
}
