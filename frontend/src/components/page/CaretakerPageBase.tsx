import { Box, Card, Stack, Typography } from '@mui/material'
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
      <Box ml={`${CARE_TAKER_ASIDE_WIDTH}px`}>
        <Card style={{ borderRadius: 0, height: 80 }}>
          <Box p={2} height="100%" display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="h6">{title}</Typography>
            <Box>{action}</Box>
          </Box>
        </Card>
        <Stack spacing={4} p={3}>
          <main>{children}</main>
        </Stack>
      </Box>
    </div>
  )
}
