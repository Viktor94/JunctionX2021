import { Box, Card, Stack, Typography } from '@mui/material'
import React from 'react'

interface CareTakerPageBaseProps {
  title: React.ReactNode
  action?: React.ReactNode
}

export const CareTakerPageBase: React.FC<CareTakerPageBaseProps> = ({ children, title, action }) => {
  return (
    <div>
      {/* <CareTakerAside /> */}
      <Box ml={`${0}px`}>
        <Card style={{ borderRadius: 0, height: 80 }}>
          <Box
            p={2}
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            maxWidth="70rem"
            ml="auto"
            mr="auto"
            pl={3}
            pr={3}
          >
            <Typography variant="h6">{title}</Typography>
            <Box>{action}</Box>
          </Box>
        </Card>
        <Stack spacing={4} p={3} maxWidth="70rem" ml="auto" mr="auto">
          <main>{children}</main>
        </Stack>
      </Box>
    </div>
  )
}
