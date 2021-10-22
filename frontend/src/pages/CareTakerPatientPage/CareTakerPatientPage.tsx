import { Typography } from '@mui/material'
import { CareTakerPageBase } from 'components/page/CaretakerPageBase'
import React from 'react'
import { useParams } from 'react-router'

export const CareTakerPatientPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <CareTakerPageBase title="Patients">
      <Typography>Patient {id}</Typography>
    </CareTakerPageBase>
  )
}
