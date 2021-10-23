import { CardContent, Stack, Typography } from '@mui/material'
import { LinkCard } from 'components/LinkCard'
import { Stat } from 'components/Stat'
import React from 'react'

interface FollowUpItemProps {
  title: string
  deadline: string
}

export const FollowUpItem: React.FC<FollowUpItemProps> = ({ title, deadline }) => {
  return (
    <LinkCard to="/form">
      <CardContent>
        <Stack direction="row" spacing={4} alignItems="center" justifyContent="space-between">
          <Typography>{title}</Typography>
          <Stat value={deadline} label="Deadline"></Stat>
        </Stack>
      </CardContent>
    </LinkCard>
  )
}
