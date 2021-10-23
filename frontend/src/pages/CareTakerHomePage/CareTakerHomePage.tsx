import { Button, Card, CardContent, Stack, Typography } from '@mui/material'
import { BreadCrumbItem } from 'components/page/Breadcrumbs'
import { CareTakerPageBase } from 'components/page/CaretakerPageBase'
import React from 'react'
import { Link } from 'react-router-dom'
import { PatientList } from './components/PatientList'

export const CareTakerHomePage: React.FC = () => {
  return (
    <CareTakerPageBase
      title={<BreadCrumbItem>Patients</BreadCrumbItem>}
      action={
        <Button variant="contained" size="large" component={Link} to="/admin/add">
          Add patient
        </Button>
      }
    >
      <Stack spacing={8}>
        <PatientList />
        <Card>
          <CardContent>
            <Stack spacing={1}>
              <Typography variant="h6">Latest publications</Typography>
              <div
                className="rg-plugin"
                data-publications="true"
                data-height="350"
                data-width="100%"
                data-theme="light"
                data-type="department"
                data-installationId="617448bab0ad2e5d751ebaed"
              />
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </CareTakerPageBase>
  )
}
