import { Box } from '@mui/material'
import React from 'react'

interface AuthPageBaseProps {}

export const AuthPageBase: React.FC<AuthPageBaseProps> = ({ children }) => {
  return (
    <Box width="100vw" height="100vh" display="flex" justifyContent="center" alignItems="center">
      <Box width="600px">{children}</Box>
    </Box>
  )
}
