import { Stack } from '@mui/material'
import React from 'react'

interface FormControlProps {}

export const FormControl: React.FC<FormControlProps> = ({ children }) => {
  return <Stack spacing={1}>{children}</Stack>
}
