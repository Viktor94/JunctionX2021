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

export const BooleanQuestion: React.FC<BooleanQuestionProps> = ({ question, addAnswer }) => {
  const [value, setValue] = useState<boolean | null>(null)

  return (
    <Stack spacing={1}>
      <span>{question.description}</span>
      <Stack direction="row">
        <QuestionButton
          selected={value === true}
          onClick={() => {
            addAnswer(question, { yesNoResponse: true })
            setValue(true)
          }}
        >
          Yes
        </QuestionButton>
        <QuestionButton
          selected={value === false}
          onClick={() => {
            addAnswer(question, { yesNoResponse: true })
            setValue(false)
          }}
        >
          No
        </QuestionButton>
      </Stack>
    </Stack>
  )
}
