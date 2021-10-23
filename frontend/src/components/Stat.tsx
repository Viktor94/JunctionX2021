import { styled, Typography } from '@mui/material'
import React from 'react'

interface StatProps {
  label: string
  value: any
}

export const Stat: React.FC<StatProps> = ({ label, value }) => {
  return (
    <div>
      <Label component="dl">{label}</Label>
      <Value component="dd">
        <strong>{value}</strong>
      </Value>
    </div>
  )
}

const Label = styled(Typography)`
  opacity: 0.8;
` as typeof Typography

const Value = styled(Typography)`` as typeof Typography
