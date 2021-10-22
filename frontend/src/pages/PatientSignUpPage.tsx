import { Button, Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import { AuthPageBase } from 'components/page/AuthPageBase'
import { TextField } from 'components/form/TextField'

export const PatientSignUpPage: React.FC = () => {
  return (
    <AuthPageBase>
      <Card>
        <CardContent>
          <Stack spacing={4}>
            <Typography variant="h4">Sign up</Typography>
            <Typography>
              Hello, <strong>{'Exapmle Name'}</strong>. Add a password to complete your registration with the email
              address <strong>{'expamle@example.com'}.</strong>
            </Typography>
            <TextField id="password" autoFocus label="Password" type="password" />
            <Button size="large" variant="contained">
              Sign up
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </AuthPageBase>
  )
}
