import { Box, Stack, styled } from '@mui/material'
import React from 'react'

interface BooleanAnswerProps {
  question: string
  answer: boolean
}

export const BooleanAnswer: React.FC<BooleanAnswerProps> = ({ question, answer }) => {
  return (
    <Box display="grid" gridTemplateColumns="auto 1fr">
      <span>{question}</span>
      <Stack direction="row" spacing={2} justifySelf="flex-end">
        <Answer isActive={answer === true}>Yes</Answer>
        <Answer isActive={answer === false}>No</Answer>
      </Stack>
    </Box>
  )
}

const Answer = styled('span')<{ isActive: boolean }>`
  font-weight: ${(props) => (props.isActive ? 800 : 300)};
  opacity: ${(props) => (props.isActive ? 1 : 0.7)};
`
