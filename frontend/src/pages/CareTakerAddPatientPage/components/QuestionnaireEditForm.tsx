import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { CircularProgress } from '@mui/material'
import { api } from 'lib/api/api'
import { Question } from 'lib/api/generated/generatedApi'
import { da } from 'date-fns/locale'

interface QuestionnaireEditFormProps {
  isOpen: boolean
  onClose: VoidFunction
  onChange: (value: Question[]) => void
}

export const QuestionnaireEditForm: React.FC<QuestionnaireEditFormProps> = (props) => {

  const { data, status } = useQuery('questions', () => api.questions.getAllQuestions())

  if (!data) {
    return <CircularProgress />
  }

  return <QuestionnaireEditFormInner data={data?.data} {...props}/>
}

const QuestionnaireEditFormInner: React.FC<QuestionnaireEditFormProps & {data:Question[]}> = ({data, isOpen, onClose, onChange }) => {
  
  const [questions, setQuestions] = useState(data);

  const onCheckHandler = (isChecked: boolean, question: Question) => {
    if(isChecked) {
      setQuestions([...questions, question])
    } else {
      setQuestions(questions.filter(q => q.id !== question.id))
    }
  }

  const onSaveHandler = () => {
    onChange(questions)
    onClose()
  }

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>Customize questionnaire</DialogTitle>
      <DialogContent style={{ backgroundColor: '#e8edf0' }}>
        <Box pt={2} pb={2}>
          <Stack spacing={2}>
            {data.map((question) => (
              <Card key={question.id}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <Checkbox defaultChecked onChange={(event) => onCheckHandler(event.target.checked, question)}/>
                    <Typography>{question.description}</Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={() => onSaveHandler()}>Save</Button>
      </DialogActions>
    </Dialog>
  )
}
