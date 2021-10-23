import { Box, AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const PatientPageBase: React.FC = ({ children }) => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box display="flex" justifyContent="space-between" width="100%" alignItems="center" m="0px 60px 0px 40px">
              <img src="assets/logo.png" alt="logo" width="150" height="75"/>
              <Typography color="inherit">Esteban Kovacs</Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box m="30px auto 30px auto" maxWidth="70rem">
        {children}
      </Box>
    </div>
  )
}
