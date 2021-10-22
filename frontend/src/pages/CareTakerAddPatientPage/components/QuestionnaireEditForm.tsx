import { Dialog, DialogContent, Typography } from '@mui/material'
import React from 'react'

interface QuestionnaireEditFormProps {
  isOpen: boolean
  onClose: VoidFunction
}

export const QuestionnaireEditForm: React.FC<QuestionnaireEditFormProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogContent>
        <Typography>Customize questionnaire</Typography>
      </DialogContent>
    </Dialog>
  )
}
