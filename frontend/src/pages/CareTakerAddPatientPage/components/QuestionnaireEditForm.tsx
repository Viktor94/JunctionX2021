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

interface QuestionnaireEditFormProps {
  isOpen: boolean
  onClose: VoidFunction
}

export const QUESTIONS = [
  { id: 1, label: 'Shortness of breath or difficulty breathing' },
  { id: 2, label: 'Ankle swelling' },
  { id: 3, label: 'Problems with memory, attention, or concentration' },
  { id: 4, label: 'Frequent headaches or migraines' },
  { id: 5, label: 'Numbness or tingling' },
  { id: 6, label: 'Dizziness, vertigo or problems with balance or equilibrium' },
  { id: 7, label: 'Tremors (shaking of fingers or hands), or weakness in arms or legs' },
  { id: 8, label: 'Frequent cough' },
  { id: 9, label: 'Frequent or severe heartburn, indigestion, or stomach pain' },
]

export const QuestionnaireEditForm: React.FC<QuestionnaireEditFormProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>Customize questionnaire</DialogTitle>
      <DialogContent style={{ backgroundColor: '#eeeeee' }}>
        <Box pt={2} pb={2}>
          <Stack spacing={2}>
            {QUESTIONS.map((question) => (
              <Card key={question.label}>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <Checkbox defaultChecked />
                    <Typography>{question.label}</Typography>
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
