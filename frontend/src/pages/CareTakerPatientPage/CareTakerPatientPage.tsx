import { Card, CardContent, Link, List, ListItemButton, Stack, Typography } from '@mui/material'
import { Breadcrumbs, BreadCrumbActiveItem, BreadCrumbDivider, BreadCrumbItem } from 'components/page/Breadcrumbs'
import { CareTakerPageBase } from 'components/page/CaretakerPageBase'
import { Stat } from 'components/Stat'
import { PATIENTS } from 'pages/CareTakerHomePage/components/PatientList'
import React from 'react'
import { useParams } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'

export const CareTakerPatientPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const patient = PATIENTS.find((patient) => patient.id === id)!

  return (
    <CareTakerPageBase
      title={
        <Breadcrumbs>
          <BreadCrumbActiveItem to={`/admin`}>Patients</BreadCrumbActiveItem>
          <BreadCrumbDivider />
          <BreadCrumbItem>{patient.name}</BreadCrumbItem>
        </Breadcrumbs>
      }
    >
      <Card>
        <CardContent>
          <Stack spacing={6}>
            <Stack spacing={1}>
              <Typography variant="h6">General</Typography>
              <Stat label="Email address" value={patient.email} />
            </Stack>
            <Stack spacing={1}>
              <Typography variant="h6">Treatment summary</Typography>
              <Stack direction="row" spacing={6}>
                <Stat label="Type of cancer" value={patient.canceryType} />
                <Stat label="Year of diagnosis" value={patient.yearOfDiagnosis} />
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <Typography variant="h6">Follow-up questionnaires</Typography>
              <List>
                {patient.questionnaryResults.map((questionary) => (
                  <ListItemButton component={RouterLink} to={`/admin/${patient.id}/${questionary.id}`}>
                    <Typography>
                      <Link>{questionary.date}</Link>
                    </Typography>
                  </ListItemButton>
                ))}
              </List>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </CareTakerPageBase>
  )
}
