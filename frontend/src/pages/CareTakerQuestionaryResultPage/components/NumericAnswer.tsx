import { Box, Stack, styled } from '@mui/material'
import { Question } from 'lib/api/generated/generatedApi'
import React from 'react'

interface NumericAnswerProps {
  question: Question
  answer: number
}

export const NumericAnswer: React.FC<NumericAnswerProps> = ({ question, answer }) => {
  return (
    <Box display="grid" gridTemplateColumns="auto 1fr">
      <span>{question.description}</span>
      <Stack direction="row" spacing={2} justifySelf="flex-end">
        <Answer isActive={answer === 0}>{(question as any).numericLabels[0]}</Answer>
        <Answer isActive={answer === 1}>{(question as any).numericLabels[1]}</Answer>
        <Answer isActive={answer === 2}>{(question as any).numericLabels[2]}</Answer>
        <Answer isActive={answer === 3}>{(question as any).numericLabels[3]}</Answer>
        <Answer isActive={answer === 4}>{(question as any).numericLabels[4]}</Answer>
      </Stack>
    </Box>
  )
}

const Answer = styled('span')<{ isActive: boolean }>`
  font-weight: ${(props) => (props.isActive ? 800 : 300)};
  opacity: ${(props) => (props.isActive ? 1 : 0.7)};
`
