import React from 'react'
import { FormLabel, OutlinedInput, OutlinedInputProps, Stack } from '@mui/material'

interface TextFieldProps extends OutlinedInputProps {}

export const TextField: React.FC<TextFieldProps> = ({ label, id, ...rest }) => {
  return (
    <Stack spacing={1}>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <OutlinedInput id={id} {...rest} />
    </Stack>
  )
}
