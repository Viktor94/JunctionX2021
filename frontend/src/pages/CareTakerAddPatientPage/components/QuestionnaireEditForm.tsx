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
import React from 'react'
import { useQuery } from 'react-query'
import { CircularProgress } from '@mui/material'
import { api } from 'lib/api/api'
import { Question } from 'lib/api/generated/generatedApi'

interface QuestionnaireEditFormProps {
  isOpen: boolean
  onClose: VoidFunction
  onChange: (value: Question[]) => void
}

export const QuestionnaireEditForm: React.FC<QuestionnaireEditFormProps> = ({ isOpen, onClose, onChange }) => {
  const { data, status } = useQuery('questions', () => api.questions.getAllQuestions())

  if (status === 'loading') {
    return <CircularProgress />
  }

  const onCheckHandler = (question: Question) => {
    console.log("adding in question", question);
  }

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>Customize questionnaire</DialogTitle>
      <DialogContent style={{ backgroundColor: '#e8edf0' }}>
        <Box pt={2} pb={2}>
          <Stack spacing={2}>
            {data?.data.map((question) => (
              <Card key={question.id}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <Checkbox defaultChecked />
                    <Typography>{question.description}</Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="contained">Save</Button>
      </DialogActions>
    </Dialog>
  )
}
