import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { CareTakerAside, CARE_TAKER_ASIDE_WIDTH } from './CareTakerAside'

interface CareTakerPageBaseProps {
  title: React.ReactNode
  action?: React.ReactNode
}

export const CareTakerPageBase: React.FC<CareTakerPageBaseProps> = ({ children, title, action }) => {
  return (
    <div>
      <CareTakerAside />
      <Stack spacing={4} p={3} ml={`${CARE_TAKER_ASIDE_WIDTH}px`}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h4">
            <strong>{title}</strong>
          </Typography>
          <Box>{action}</Box>
        </Box>
        <main>{children}</main>
      </Stack>
    </div>
  )
}
