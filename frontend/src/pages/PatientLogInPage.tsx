import { Button, Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import { AuthPageBase } from 'components/page/AuthPageBase'
import { TextField } from 'components/form/TextField'

export const PatientLogInPage: React.FC = () => {
  return (
    <AuthPageBase>
      <Card>
        <CardContent>
          <Stack spacing={4}>
            <Typography variant="h4">Log in</Typography>
            <TextField id="email" autoFocus label="Email address" type="email" />
            <TextField id="password" label="Password" type="password" />
            <Button size="large" variant="contained">
              Log in
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </AuthPageBase>
  )
}
