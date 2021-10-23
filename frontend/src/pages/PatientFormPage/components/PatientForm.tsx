import {
  Box,
  Stack,
  Typography,
  Button,
  Card,
  CardContent,
  Step,
  StepLabel,
  Stepper,
  Dialog,
  DialogContent,
  InputAdornment,
} from '@mui/material'
import { TextField } from 'components/form/TextField'
import produce from 'immer'
import { api } from 'lib/api/api'
import { Question, StatusReport } from 'lib/api/generated/generatedApi'
import { PATIENT_USER_ID } from 'lib/constants'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import illustrationImg from '../media/illustration.svg'
import { BooleanQuestion } from './BooleanQuestion'
import { NumericQuestion } from './NumericQuestion'
import { ResultDialog } from './ResultDialog'

interface PatientFormProps {
  questions: Question[]
}

type Phase = 'intro' | 'health-problems' | 'numeric-data' | 'general-health' | 'other'

export const PatientForm: React.FC<PatientFormProps> = ({ questions }) => {
  const yesNoQuestions = questions.filter((question) => question.questionType === 'YES_NO')
  const numericQuestions = questions.filter((question) => question.questionType === 'NUMERIC')
  const [value, setValue] = useState<{
    answers: { question: Question; yesNoResponse: boolean }[]
    pulse: number
    weight: number
    systolic: number
    diastolic: number
  }>({
    answers: [],
    pulse: 0,
    weight: 0,
    systolic: 0,
    diastolic: 0,
  })

  const phases: Phase[] = ['intro', 'health-problems', 'general-health', 'numeric-data', 'other']
  const [phaseIndex, setPhaseIndex] = useState(0)
  const [response, setResponse] = useState<null | StatusReport[]>(null)
  const phase = phases[phaseIndex]
  const history = useHistory()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [phaseIndex])

  const next = () => {
    setPhaseIndex((index) => index + 1)
  }

  const addAnswer = (question: Question, val: any) => {
    setValue((value) =>
      produce(value, (draft) => {
        const index = draft.answers.findIndex((answer) => answer.question.id === question.id)
        if (index !== -1) {
          draft.answers[index] = { question, ...val }
        } else {
          draft.answers.push({ question, ...val })
        }
      })
    )
  }

  const submit = async () => {
    const response = await api.carePlanForm.submitForm(PATIENT_USER_ID, value)
    setResponse(response.data)
  }

  return (
    <Stack direction="row" spacing={4}>
      {response !== null && (
        <ResultDialog
          reports={response}
          open={true}
          onClose={() => {
            history.push('/')
          }}
        ></ResultDialog>
      )}
      <div>
        <Box position="sticky" top="15px">
          {phase !== 'intro' && (
            <Stepper orientation="vertical" activeStep={phaseIndex - 1}>
              <Step>
                <StepLabel>Health Problems</StepLabel>
              </Step>
              <Step>
                <StepLabel>Mental Health</StepLabel>
              </Step>
              <Step>
                <StepLabel>Numeric data</StepLabel>
              </Step>
              <Step>
                <StepLabel>Other</StepLabel>
              </Step>
            </Stepper>
          )}
        </Box>
      </div>
      <Card style={{ flex: 1 }}>
        <CardContent>
          <Stack spacing={6}>
            {phase === 'intro' && <IntroPhase next={next} addAnswer={addAnswer} />}
            {phase === 'health-problems' && (
              <HealthProblemsPhase questions={yesNoQuestions} next={next} addAnswer={addAnswer} />
            )}
            {phase === 'general-health' && (
              <GeneralHealthPhase questions={numericQuestions} next={next} addAnswer={addAnswer} />
            )}
            {phase === 'numeric-data' && (
              <NumericDataPhase
                next={next}
                setData={(key, val) => {
                  setValue((value) =>
                    produce(value, (draft) => {
                      ;(draft as any)[key] = val
                    })
                  )
                }}
                addAnswer={addAnswer}
              />
            )}
            {phase === 'other' && <OtherPhase questions={numericQuestions} next={submit} addAnswer={addAnswer} />}
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  )
}

export type AddAnswerFn = (question: Question, value: any) => void

interface PhaseProps {
  next: VoidFunction
  addAnswer: AddAnswerFn
}

const IntroPhase: React.FC<PhaseProps> = ({ next }) => {
  return (
    <Box>
      <Stack spacing={4} textAlign="center" alignItems="center">
        <Box display="inline-block" width="300px" height="212px" component="img" src={illustrationImg} alt="" />
        <Typography>
          This survey will take around <strong>20 minutes</strong> to complete.
        </Typography>
        <Typography>
          There are no right or wrong answers, so please respond by giving the answer that best describes your
          situation.
        </Typography>
        <Button onClick={next} fullWidth size="large" variant="contained">
          Start survey
        </Button>
      </Stack>
    </Box>
  )
}

const HealthProblemsPhase: React.FC<PhaseProps & { questions: Question[] }> = ({ next, questions, addAnswer }) => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <Typography variant="h6">Have you experienced any of the following problems in the past month?</Typography>
        <Stack spacing={4}>
          {questions.map((question) => (
            <QuestionBase addAnswer={addAnswer} key={question.id} question={question} />
          ))}
        </Stack>
      </Stack>
      <Button onClick={next} fullWidth size="large" variant="contained">
        Next step
      </Button>
    </Stack>
  )
}

const GeneralHealthPhase: React.FC<PhaseProps & { questions: Question[] }> = ({ next, questions, addAnswer }) => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <Stack spacing={4}>
          {questions.map((question) => (
            <QuestionBase addAnswer={addAnswer} key={question.id} question={question} />
          ))}
        </Stack>
      </Stack>
      <Button onClick={next} fullWidth size="large" variant="contained">
        Next step
      </Button>
    </Stack>
  )
}

const NumericDataPhase: React.FC<PhaseProps & { setData: (key: string, value: string | number) => void }> = ({
  next,
  setData,
}) => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <Stack spacing={4}>
          <Stack direction="row" spacing={4}>
            <Box flex={1}>
              <TextField
                label="Weight"
                type="number"
                endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                onChange={(e) => {
                  setData('weight', parseInt(e.target.value))
                }}
              />
            </Box>
            <Box flex={1} />
            <Box flex={1} />
          </Stack>
          <Stack direction="row" spacing={4}>
            <Box flex={1}>
              <TextField
                label="Systolic"
                type="number"
                onChange={(e) => {
                  setData('systolic', parseInt(e.target.value))
                }}
              />
            </Box>
            <Box flex={1}>
              <TextField
                label="Diastolic"
                type="number"
                onChange={(e) => {
                  setData('diastolic', parseInt(e.target.value))
                }}
              />
            </Box>
            <Box flex={1}>
              <TextField
                label="Pulse"
                type="number"
                onChange={(e) => {
                  setData('pulse', parseInt(e.target.value))
                }}
              />
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <Button onClick={next} fullWidth size="large" variant="contained">
        Next step
      </Button>
    </Stack>
  )
}

const OtherPhase: React.FC<PhaseProps & { questions: Question[] }> = ({ next, questions, addAnswer }) => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <Stack spacing={4}>
          <TextField multiline label="If you have any other comments feel free to write them here" rows={5} />
        </Stack>
      </Stack>
      <Button onClick={next} fullWidth size="large" variant="contained">
        Submit
      </Button>
    </Stack>
  )
}

const QuestionBase: React.FC<{ question: Question; addAnswer: AddAnswerFn }> = ({ question, addAnswer }) => {
  switch (question.questionType) {
    case 'YES_NO':
      return <BooleanQuestion question={question} addAnswer={addAnswer} />
    case 'NUMERIC':
      return <NumericQuestion question={question} addAnswer={addAnswer} />

    default:
      return null
  }
}
