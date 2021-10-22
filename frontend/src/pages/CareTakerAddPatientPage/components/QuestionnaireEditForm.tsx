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

const QUESTIONS = [
  { label: 'Shortness of breath or difficulty breathing' },
  { label: 'Ankle swelling' },
  { label: 'Problems with memory, attention, or concentration' },
  { label: 'Frequent headaches or migraines' },
  { label: 'Numbness or tingling' },
  { label: 'Dizziness, vertigo or problems with balance or equilibrium' },
  { label: 'Tremors (shaking of fingers or hands), or weakness in arms or legs' },
  { label: 'Frequent cough' },
  { label: 'Frequent or severe heartburn, indigestion, or stomach pain' },
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
