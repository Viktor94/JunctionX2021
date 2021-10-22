import { lightBlue as primary } from '@mui/material/colors'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontSize: 16,
  },
  palette: {
    primary: { ...primary, contrastText: '#fff' },
  },
  shape: {
    borderRadius: 4,
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
