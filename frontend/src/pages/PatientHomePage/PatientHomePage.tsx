import { Stack, Typography } from '@mui/material'
import { PatientPageBase } from 'components/page/PatientPageBase'
import React from 'react'
import { FollowUpItem } from './components/FollowUpItem'

export const PatientHomePage: React.FC = () => {
  return (
    <PatientPageBase>
      <Stack spacing={1}>
        <Typography variant="h6">Active follow-up</Typography>
        <FollowUpItem title="Second follow-up" deadline="2021. 10. 24." />
      </Stack>
    </PatientPageBase>
  )
}
