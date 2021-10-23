import { Card, CardContent, Link, List, ListItemButton, Stack, Typography } from '@mui/material'
import { Breadcrumbs, BreadCrumbActiveItem, BreadCrumbDivider, BreadCrumbItem } from 'components/page/Breadcrumbs'
import { CareTakerPageBase } from 'components/page/CaretakerPageBase'
import { Stat } from 'components/Stat'
import React from 'react'
import { useParams } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'
import { useQuery } from 'react-query'
import { api } from 'lib/api/api'
import { CircularProgress } from '@mui/material'
import { fixString } from 'pages/CareTakerAddPatientPage/components/AddPatientForm'

export const CareTakerPatientPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const { data, status } = useQuery('patients', () => api.users.getAllPatients());

  if(!data) {
    return <CircularProgress/>
  }
  const patient = data.data.find((patient) => patient.id === Number.parseInt(id))!

  const questionnaryResults = [{ id: '1', date: '2021. 10. 22.', answers: [] }, { id: '2', date: '2022. 12. 22.', answers: [] }];

  return (
    <CareTakerPageBase
      title={
        <Breadcrumbs>
          <BreadCrumbActiveItem to={`/admin`}>Patients</BreadCrumbActiveItem>
          <BreadCrumbDivider />
          <BreadCrumbItem>{patient.fullName}</BreadCrumbItem>
        </Breadcrumbs>
      }
    >
      <Card>
        <CardContent>
          <Stack spacing={6}>
            <Stack spacing={1}>
              <Typography variant="h6">General</Typography>
              <Stack direction="row">
              <Stack flex={1}>
                <Stat label="Email address" value={patient.email!} />
                <Stat label="Phone number" value={patient.phoneNumber!} />
              </Stack>
              <Stack flex={1}>
                <Stat label="Relative email address" value={patient.relativeEmail!} />
                <Stat label="Relative phone number" value={patient.relativePhoneNumber!} />
              </Stack>
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <Typography variant="h6">Treatment summary</Typography>
              <Stack direction="row" spacing={6}>
                <Stat label="Type of cancer" value={fixString(patient.cancerType!)} />
                <Stat label="Year of diagnosis" value="dummy year 1999" />
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <Typography variant="h6">Follow-up questionnaires</Typography>
              <List>
                {questionnaryResults.map((questionary) => (
                  <ListItemButton key={questionary.id} component={RouterLink} to={`/admin/${patient.id}/${questionary.id}`}>
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
