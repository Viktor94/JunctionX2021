import { Card, CardProps, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

interface LinkCardProps extends CardProps {
  to: string
}

export const LinkCard: React.FC<LinkCardProps> = (props) => {
  return <Root component={Link} {...props} />
}

const Root = styled(Card)`
  text-decoration: none;
  transition: all ${(props) => props.theme.transitions.duration.shortest}ms;

  &:hover,
  &:focus {
    background-color: #fafafa;
  }
` as typeof Card
