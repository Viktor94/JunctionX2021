import { Card, CardContent, Chip, Link, List, ListItemButton, Stack, Typography } from '@mui/material'
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
import { priorityToColor } from 'pages/CareTakerHomePage/components/PatientList'
import { Box } from '@mui/system'
import { LineChart, CartesianGrid, YAxis, XAxis, Tooltip, Legend, Line } from 'recharts'

export const CareTakerPatientPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  const { data, status } = useQuery('patients', () => api.users.getAllPatients())

  if (!data) {
    return <CircularProgress />
  }
  const patient = data.data.find((patient) => patient.id === Number.parseInt(id))!

  const carePlamFormList = patient.carePlanFormList
  console.log(carePlamFormList)

  const userHealthData = carePlamFormList?.map((data) => ({
    date: new Date(data.dateOfSubmit!).toLocaleDateString(),
    Diastolic: data.diastolic,
    Systolic: data.systolic,
    Weight: data.weight,
  }))

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
      <Stack spacing={4}>
        <Card>
          <CardContent>
            <Stack spacing={6}>
              <Stack spacing={1}>
                <Typography variant="h6">General</Typography>
                <Stat
                  label="Status"
                  value={
                    <Chip
                      style={{
                        backgroundColor: priorityToColor[patient.priority!],
                        pointerEvents: 'none',
                        color: '#fff',
                      }}
                      label={patient.priority}
                    />
                  }
                />
                <Stack direction="row" spacing={6}>
                  <Stat label="Date of Birth  " value={patient.dateOfBirth!} />
                  <Stat label="Email address" value={patient.email!} />
                  <Stat label="Phone number" value={patient.phoneNumber!} />
                </Stack>
              </Stack>
              <Stack spacing={1}>
                <Typography variant="h6">Treatment summary</Typography>
                <Stack direction="row" spacing={6}>
                  <Stat label="Type of cancer" value={fixString(patient.cancerType!)} />
                  <Stat label="Year of diagnosis" value="2018" />
                </Stack>
              </Stack>
              <Stack spacing={1}>
                <Typography variant="h6">Health data</Typography>
                <LineChart
                  width={70 * 14}
                  height={250}
                  data={userHealthData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis tickCount={45} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Diastolic" stroke="#2832b8" />
                  <Line type="monotone" dataKey="Systolic" stroke="#c21a1a" />
                  <Line type="monotone" dataKey="Weight" stroke="#babd19" />
                </LineChart>
              </Stack>
              <Stack spacing={1}>
                <Typography variant="h6">Follow-up questionnaires</Typography>
                <List>
                  {patient.carePlanFormList?.map((questionary) => (
                    <ListItemButton
                      key={questionary.id}
                      component={RouterLink}
                      to={`/admin/${patient.id}/${questionary.id}`}
                    >
                      <Typography>
                        <Link>{new Date(questionary.dateOfSubmit!).toLocaleDateString()}</Link>
                      </Typography>
                    </ListItemButton>
                  ))}
                </List>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Card></Card>
      </Stack>
    </CareTakerPageBase>
  )
}
