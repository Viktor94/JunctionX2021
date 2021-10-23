import { CircularProgress, Stack, Typography, Alert, Collapse, Button } from '@mui/material'
import { PatientPageBase } from 'components/page/PatientPageBase'
import React, { useState } from 'react'
import { FollowUpItem } from './components/FollowUpItem'
import { useQuery } from 'react-query'
import { api } from '../../lib/api/api'

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
      </Stack>
    </PatientPageBase>
  )
}
