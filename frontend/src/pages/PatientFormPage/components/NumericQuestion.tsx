import { Stack, styled } from '@mui/material'
import { Question } from 'lib/api/generated/generatedApi'
import React, { useState } from 'react'
import { transparentize } from 'polished'
import { QuestionButton } from './QuestionButton'
import { AddAnswerFn } from './PatientForm'

interface BooleanQuestionProps {
  question: Question
  addAnswer: AddAnswerFn
}

export const NumericQuestion: React.FC<BooleanQuestionProps> = ({ question, addAnswer }) => {
  const [value, setValue] = useState<number | null>(null)

  return (
    <Stack spacing={1}>
      <span>{question.description}</span>
      <Stack direction="row">
        {new Array(5).fill(true).map((_, i) => (
          <QuestionButton
            style={{ width: 150 }}
            selected={value === i}
            onClick={() => {
              addAnswer(question, { numericResponse: i })
              setValue(i)
            }}
          >
            {(question as any).numericLabels[i] ?? i + 1}
          </QuestionButton>
        ))}
      </Stack>
    </Stack>
  )
}
