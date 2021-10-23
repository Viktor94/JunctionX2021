import { Box, Card, Stack, Typography, AppBar, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

interface CareTakerPageBaseProps {
  title: React.ReactNode
  action?: React.ReactNode
}

export const CareTakerPageBase: React.FC<CareTakerPageBaseProps> = ({ children, title, action }) => {
  return (
    <div>
      {/* <CareTakerAside /> */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box display="flex" justifyContent="space-between" width="100%" alignItems="center" m="0px 60px 0px 40px">
              <Link style={{ display: 'inline-flex' }} to="/admin">
                <img src="/assets/logo.png" alt="logo" width="150" height="75" />
              </Link>
              <Typography color="inherit">Dr. Suresh H Advani</Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
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
