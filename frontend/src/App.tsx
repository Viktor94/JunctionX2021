import { CssBaseline } from '@mui/material'
import { ThemeProvider } from 'lib/theme'
import React from 'react'
import { Router } from './Router'
import { QueryClientProvider, QueryClient } from 'react-query';


interface AppProps {}

const queryCliet = new QueryClient();

export const App: React.FC<AppProps> = () => {
  return (
    <QueryClientProvider client={queryCliet}>
    <ThemeProvider>
      <CssBaseline />
      <Router />
    </ThemeProvider>
    </QueryClientProvider>
  )
}
