import { CareTakerAddPatientPage } from 'pages/CareTakerAddPatientPage/CareTakerAddPatientPage'
import { CareTakerPatientPage } from 'pages/CareTakerPatientPage/CareTakerPatientPage'
import { CareTakerQuestionaryResultPage } from 'pages/CareTakerQuestionaryResultPage/CareTakerQuestionaryResultPage'
import { PatientFomePage } from 'pages/PatientFormPage/PatientFormPage'
import { PatientLogInPage } from 'pages/PatientLogInPage'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CareTakerHomePage } from './pages/CareTakerHomePage/CareTakerHomePage'
import { PatientHomePage } from './pages/PatientHomePage/PatientHomePage'
import { PatientSignUpPage } from './pages/PatientSignUpPage'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <PatientHomePage />} />
        <Route path="/follow-up" exact render={() => <PatientFomePage />} />
        <Route path="/signup" exact render={() => <PatientSignUpPage />} />
        <Route path="/login" exact render={() => <PatientLogInPage />} />
        <Route path="/admin" exact render={() => <CareTakerHomePage />} />
        <Route path="/admin/add" exact render={() => <CareTakerAddPatientPage />} />
        <Route path="/admin/:id/:questionaryId" render={() => <CareTakerQuestionaryResultPage />} />
        <Route path="/admin/:id" render={() => <CareTakerPatientPage />} />
      </Switch>
    </BrowserRouter>
  )
}
