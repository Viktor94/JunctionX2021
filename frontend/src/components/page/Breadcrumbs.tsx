import { Link, Stack } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

export const Breadcrumbs: React.FC = ({ children }) => {
  return (
    <Stack direction="row" spacing={2}>
      {children}
    </Stack>
  )
}

export const BreadCrumbActiveItem: React.FC<{ to: string }> = ({ children, to }) => {
  return (
    <Link component={RouterLink} to={to}>
      {children}
    </Link>
  )
}

export const BreadCrumbItem: React.FC = ({ children }) => {
  return <strong>{children}</strong>
}

export const BreadCrumbDivider: React.FC = () => {
  return <span>›</span>
}
