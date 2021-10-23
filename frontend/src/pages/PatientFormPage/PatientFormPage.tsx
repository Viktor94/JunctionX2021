import { Stack, Typography } from '@mui/material'
import { PatientPageBase } from 'components/page/PatientPageBase'
import React from 'react'

export const PatientFomePage: React.FC = () => {
  return (
    <PatientPageBase>
      <Stack spacing={1}>
        <Typography variant="h6">Form</Typography>
      </Stack>
    </PatientPageBase>
  )
}
