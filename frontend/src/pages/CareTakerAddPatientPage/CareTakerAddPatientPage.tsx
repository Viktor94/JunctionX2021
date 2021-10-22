import { Card, CardContent } from '@mui/material'
import { BreadCrumbActiveItem, BreadCrumbDivider, BreadCrumbItem, Breadcrumbs } from 'components/page/Breadcrumbs'
import { CareTakerPageBase } from 'components/page/CaretakerPageBase'
import React from 'react'
import { AddPatientForm } from './components/AddPatientForm'

export const CareTakerAddPatientPage: React.FC = () => {
  return (
    <CareTakerPageBase
      title={
        <Breadcrumbs>
          <BreadCrumbActiveItem to="/admin">Patients</BreadCrumbActiveItem>
          <BreadCrumbDivider />
          <BreadCrumbItem>Add Patient</BreadCrumbItem>
        </Breadcrumbs>
      }
    >
      <Card>
        <CardContent>
          <AddPatientForm />
        </CardContent>
      </Card>
    </CareTakerPageBase>
  )
}
