import { Box, Stack, styled } from '@mui/material'
import React from 'react'

interface NumericAnswerProps {
  question: string
  answer: number
}

export const NumericAnswer: React.FC<NumericAnswerProps> = ({ question, answer }) => {
  return (
    <Box display="grid" gridTemplateColumns="auto 1fr">
      <span>{question}</span>
      <Stack direction="row" spacing={2} justifySelf="flex-end">
        <Answer isActive={answer === 0}>1</Answer>
        <Answer isActive={answer === 1}>2</Answer>
        <Answer isActive={answer === 2}>3</Answer>
        <Answer isActive={answer === 3}>4</Answer>
        <Answer isActive={answer === 4}>5</Answer>
      </Stack>
    </Box>
  )
}

const Answer = styled('span')<{ isActive: boolean }>`
  font-weight: ${(props) => (props.isActive ? 800 : 300)};
  opacity: ${(props) => (props.isActive ? 1 : 0.7)};
`
