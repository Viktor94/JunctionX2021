import { CircularProgress, Stack, Typography, Alert, Collapse, Button } from '@mui/material'
import { PatientPageBase } from 'components/page/PatientPageBase'
import React, { useState } from 'react'
import { FollowUpItem } from './components/FollowUpItem'
import { useQuery } from 'react-query'
import { api } from '../../lib/api/api'
import { LineChart, CartesianGrid, YAxis, XAxis, Tooltip, Legend, Line } from 'recharts'
import { Stat } from 'components/Stat'


export const PatientHomePage: React.FC = () => {
  const { data } = useQuery('risk-factors', async () => {
    const response = await api.prevention.riskFactors()
    if (response.data.length === 0) {
      return null
    }
    const randomRiskFactor = Math.floor(Math.random() * response.data.length)

    return response.data[randomRiskFactor]
  })

  const [checked, setChecked] = useState(true)

  const { data: test } = useQuery('bloodpressure', () => api.users.getPatient(1))

  if (!test) {
    return <CircularProgress />
  }
  const carePlamFormList = test.data.carePlanFormList;
  console.log(carePlamFormList);

  const userValues = carePlamFormList?.map(data => ({
    date: new Date(data.dateOfSubmit!).toLocaleDateString(),
    diastolic: data.diastolic,
    systolic: data.systolic,
    weight: data.weight
  }))

  console.log(userValues);
  if (!data && data !== null) {
    return <CircularProgress />
  }


  return (
    <PatientPageBase>
      <Stack spacing={4}>
        {data && (
          <Stack spacing={1}>
            <Typography variant="h6">Risk Factors and Prevention:</Typography>
            <Alert
              severity="info"
              onClick={() => {
                setChecked(!checked)
              }}
            >
              <Typography variant="h6">{data.riskFactor}</Typography>
              <Collapse in={checked} timeout="auto" unmountOnExit>
                <Typography style={{ lineHeight: 1.7 }} variant="body1">
                  {data.prevention}
                </Typography>
              </Collapse>
            </Alert>
          </Stack>
        )}
        <Stack spacing={1}>
          <Typography variant="h6">Active follow-up</Typography>
          <FollowUpItem title="Second follow-up" deadline="2021. 10. 24." />
        </Stack>
        <Stack spacing={1}></Stack>
        <Stack spacing={1}>
          <Typography variant="h6">Health data</Typography>
          <LineChart width={70 * 16} height={250} data={userValues} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis tickCount={45} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="diastolic" stroke="#2832b8" />
            <Line type="monotone" dataKey="systolic" stroke="#c21a1a" />
            <Line type="monotone" dataKey="weight" stroke="#babd19" />
          </LineChart>
        </Stack>
        <Stack spacing={1}>
          <Typography variant="h6">Care Team Contact Information</Typography>
          <Stack direction="row">
            <Stack flex={1} >
              <Stat label="Team members " value="Dr. Ashok Vaid" />
              <Stat label="" value="Dr. Suresh H Advani" />
              <Stat label="" value="Dr. PP Bapsy" />
              <Stat label="" value="Dr. Vinod Raina" />
            </Stack>
            <Stack flex={1} spacing={3}>
              <Stat label="Department phone number  " value="+36 30 6669999" />
              <Stat label="Email address  " value="oncology_4@superclinic.net" />
            </Stack>
          </Stack>
        </Stack>
      </Stack>


    </PatientPageBase>
  )
}
