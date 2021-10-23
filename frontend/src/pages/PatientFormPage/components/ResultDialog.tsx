import { Dialog, DialogContent, DialogTitle, Stack, Typography } from '@mui/material'
import { StatusReport } from 'lib/api/generated/generatedApi'
import React from 'react'

interface ResultDialogProps {
  open: boolean
  reports: StatusReport[]
  onClose: VoidFunction
}

const colorByPriority: Record<string, string> = {
  LOW: '#0c6e3e',
  MEDIUM: '#aa6506',
  HIGH: '#aa3006',
}

export const ResultDialog: React.FC<ResultDialogProps> = ({ open, reports, onClose }) => {
  const report = reports[0]

  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={open}
      onClose={onClose}
      PaperProps={{ style: { textAlign: 'center', color: '#fff', backgroundColor: colorByPriority[report.urgency!] } }}
    >
      <DialogTitle>Thank you!</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Typography>Based on your result the following action is requried:</Typography>
          <Typography>
            <strong>{report.message}</strong>
          </Typography>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}
