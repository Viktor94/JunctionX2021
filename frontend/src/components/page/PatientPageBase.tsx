import { Box, AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const PatientPageBase: React.FC = ({ children }) => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Box display="flex" justifyContent="flex-end" width="100%">
              <Typography color="inherit">Test Patient</Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box m="30px auto 30px auto" maxWidth="60rem">
        {children}
      </Box>
    </div>
  )
}
