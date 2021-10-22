import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontSize: 16,
  },
  palette: {
    primary: { main: '#0c6e3e' },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiOutlinedInput: {
      // styleOverrides: { input: { border: 'solid 1px black' } },
    },
    MuiFormHelperText: {
      styleOverrides: { root: { fontSize: '16px' } },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
    },
    MuiButtonBase: {
      // defaultProps: { disableRipple: true },
    },
  },
})

export const ThemeProvider: React.FC = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}
