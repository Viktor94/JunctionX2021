import { PatientLogInPage } from 'pages/PatientLogInPage'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CareTakerHomePage } from './pages/CareTakerHomePage'
import { PatientHomePage } from './pages/PatientHomePage'
import { PatientSignUpPage } from './pages/PatientSignUpPage'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <PatientHomePage />} />
        <Route path="/signup" exact render={() => <PatientSignUpPage />} />
        <Route path="/login" exact render={() => <PatientLogInPage />} />
        <Route path="/admin" render={() => <CareTakerHomePage />} />
      </Switch>
    </BrowserRouter>
  )
}
