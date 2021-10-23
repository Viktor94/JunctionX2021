import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Divider,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  TextField as MUITextField,
  CircularProgress
} from '@mui/material'
import { DatePicker } from '@mui/lab'
import { FormControl } from 'components/form/FormControl'
import { TextField } from 'components/form/TextField'
import React, { FormEvent, useState } from 'react'
import { QuestionnaireEditForm } from './QuestionnaireEditForm'
import { api } from 'lib/api/api'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router'
import { Question } from 'lib/api/generated/generatedApi'

const axios = require('axios').default;

interface AddPatientFormProps {}

const YEARS = new Array(12).fill(true).map((_, i) => 2010 + i)

export const fixString = (cancerType: string) => {

  if(cancerType === null) return ""

  cancerType = cancerType.replaceAll("_", " ")
  cancerType = cancerType.substring(0,1).concat(cancerType.substring(1).toLowerCase());
  return cancerType
} 

export const AddPatientForm: React.FC<AddPatientFormProps> = () => {
  const [isQuestionniareFormOpen, setIsQuestionniareFormOpen] = useState(false)
  const [date, setDate] = useState(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const history = useHistory();
  const [selectedCancerType, setSelectedCancerType] = useState("");
  
  const { data, status } = useQuery('cancerTypes', () => api.data.getAllCancerType());
  
  if(!data) {
    return <CircularProgress />
  }

  const submitHandler = (event:any) => {
    event.preventDefault();
    const elements = event.currentTarget.elements;

    const patient = {
      fullName: elements.fullName.value,
      email: elements.email.value,
      phoneNumber: elements.phoneNumber.value,
      relativeName: elements.relativeName.value,
      relativePhoneNumber: elements.relativePhoneNumber.value,
      relativeEmail: elements.relativeEmail.value,
      dateOfBirth: date,
      cancerType: elements.cancerType.value,
      priority: 'LOW',
      caretTakerList: [],
      carePlanFormList: [],
      questions: questions
    }

    axios.post('http://localhost:8080/users', patient)
    .then(function (res: any) {
      if(res.status === 200) {
        history.push("/admin");
      }
    }).catch(function (err: any) {
      console.log(err)
    })    
  }

  return (
    <>
      <QuestionnaireEditForm
        isOpen={isQuestionniareFormOpen}
        onClose={() => {
          setIsQuestionniareFormOpen(false)
        }}
        onChange={setQuestions}
      />
      <form onSubmit={submitHandler}>
        <Stack spacing={4}>
          <Typography variant="h5">General Information</Typography>
          <Stack direction="row" spacing={4}>
            <Stack flex={1} spacing={3}>
              <TextField id="name" label="Patient Name" name="fullName"/>
              <TextField id="email" label="Patient Email" name="email"/>
              <TextField id="phone" label="Patient Phone" name="phoneNumber"/>
              <DatePicker 
                renderInput={(params) => <MUITextField {...params}/>} 
                label="Date of Birth" value={date} 
                onChange={(newValue) => {setDate(newValue)}}
                />
            </Stack>
            <Stack flex={1} spacing={3}>
              <TextField id="relativeName" label="Relative Name" name="relativeName"/>
              <TextField id="relativeEmail" label="Relative Email" name="relativeEmail"/>
              <TextField id="relativePhoneNumber" label="Relative Phone" name="relativePhoneNumber"/>
            </Stack>
          </Stack>
          <Divider />
          <Typography variant="h5">Treatment Summary</Typography>
          <FormControl>
            <FormLabel>Type of cancer</FormLabel>
            <Select 
              value={selectedCancerType} 
              displayEmpty={true}
              renderValue={(value) => fixString(value) || "Select one"}
              name="cancerType" 
              onChange={(event) => setSelectedCancerType(event.target.value as any)}> 
              {data.data.map((type) => (
                <MenuItem key={type} value={type}>
                  {fixString(type)}
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
          <Toogleable label="Had surgery">
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
          </Toogleable>
          <Toogleable label="Radiation">
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
          </Toogleable>
          <Toogleable label="Systemic Therapy (chemotherapy, hormonal therapy, other)">
            <Stack>
              <FormControlLabel control={<Checkbox />} label="Carboplatin" />
              <FormControlLabel control={<Checkbox />} label="Cisplatin " />
              <FormControlLabel control={<Checkbox />} label="Etoposide" />
              <FormControlLabel control={<Checkbox />} label="Paclitaxel" />
              <FormControlLabel control={<Checkbox />} label="Vincristine" />
            </Stack>
          </Toogleable>
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

          <Button type="submit" variant="contained" size="large">
            Save Patient
          </Button>
        </Stack>
      </form>
    </>
  )
}

interface ToogleAbleProps {
  label: string
}

const Toogleable: React.FC<ToogleAbleProps> = ({ children, label }) => {
  const [checked, setChecked] = useState(false)

  return (
    <Stack spacing={1}>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked)
            }}
          />
        }
        label={label}
      />
      <Collapse in={checked} unmountOnExit>
        <Box pl={5} borderLeft="solid 1px #0000001f">
          {children}
        </Box>
      </Collapse>
    </Stack>
  )
}
