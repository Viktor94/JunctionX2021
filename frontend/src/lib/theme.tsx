import { lightBlue as primary } from '@mui/material/colors'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary,
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
    },
    MuiButtonBase: {
      defaultProps: { disableRipple: true },
    },
  },
})

export const ThemeProvider: React.FC = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}
