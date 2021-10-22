import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material'
import { FormControl } from 'components/form/FormControl'
import { TextField } from 'components/form/TextField'
import React, { useState } from 'react'
import { QuestionnaireEditForm } from './QuestionnaireEditForm'

interface AddPatientFormProps {}

const CANCER_TYPES = [
  {
    id: 1,
    name: 'Small cell lung cancer',
    questionnaireQuestions: [],
  },
]

const YEARS = new Array(12).fill(true).map((_, i) => 2010 + i)

export const AddPatientForm: React.FC<AddPatientFormProps> = () => {
  const [isQuestionniareFormOpen, setIsQuestionniareFormOpen] = useState(false)

  return (
    <>
      <QuestionnaireEditForm
        isOpen={isQuestionniareFormOpen}
        onClose={() => {
          setIsQuestionniareFormOpen(false)
        }}
      />
      <form>
        <Stack spacing={4}>
          <Typography variant="h5">General Information</Typography>
          <TextField id="name" label="Patient Name" />
          <TextField id="email" label="Patient Email" />
          <TextField id="phone" label="Patient Phone" />
          <Divider />
          <Typography variant="h5">Treatment Summary</Typography>
          <FormControl>
            <FormLabel>Type of cancer</FormLabel>
            <Select value={CANCER_TYPES[0].id}>
              {CANCER_TYPES.map((type) => (
                <MenuItem key={type.id} value={type.id}>
                  {type.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Year of diagnosis</FormLabel>
            <Select value={2021}>
              {YEARS.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Stack spacing={1}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Had surgery" />
            <Box pl={5} borderLeft="solid 1px #0000001f">
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Year of surgery</FormLabel>
                  <Select value={2021}>
                    {YEARS.map((year) => (
                      <MenuItem key={year} value={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField id="phone" label="Surgical procedure/location/findings" multiline rows={3} />
              </Stack>
            </Box>
          </Stack>
          <Stack spacing={1}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Radiation" />
            <Box pl={5} borderLeft="solid 1px #0000001f">
              <Stack spacing={4}>
                <TextField id="phone" label="Body area treated" />
                <FormControl>
                  <FormLabel>End year</FormLabel>
                  <Select value={2021}>
                    {YEARS.map((year) => (
                      <MenuItem key={year} value={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
            </Box>
          </Stack>
          <Stack spacing={1}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Systemic Therapy (chemotherapy, hormonal therapy, other)"
            />
            <Box pl={5} borderLeft="solid 1px #0000001f">
              <Stack>
                <FormControlLabel control={<Checkbox />} label="Carboplatin" />
                <FormControlLabel control={<Checkbox />} label="Cisplatin " />
                <FormControlLabel control={<Checkbox />} label="Etoposide" />
                <FormControlLabel control={<Checkbox />} label="Paclitaxel" />
                <FormControlLabel control={<Checkbox />} label="Vincristine" />
              </Stack>
            </Box>
          </Stack>
          <Divider />
          <Typography variant="h5">Follow-up care plan</Typography>
          <FormControl>
            <FormLabel>Follow-up questionnaire</FormLabel>
            <FormHelperText>Questionnaire is selected based on type of cancer.</FormHelperText>
            <div>
              <Button
                size="large"
                variant="outlined"
                onClick={() => {
                  setIsQuestionniareFormOpen(true)
                }}
              >
                Customize
              </Button>
            </div>
          </FormControl>
        </Stack>
      </form>
    </>
  )
}
