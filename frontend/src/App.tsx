import { ThemeProvider } from 'lib/theme'
import React from 'react'
import { Router } from './Router'

interface AppProps {}

export const App: React.FC<AppProps> = () => {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  )
}
