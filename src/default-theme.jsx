import { createMuiTheme } from '@material-ui/core'

export const DEFAULT_THEME = {
  palette: {
    primary: {
      main: '#356a9d'
    },
    info: {
      main: '#7f88b8'
    },
    success: {
      main: '#5ba36f'
    },
    warning: {
      main: '#d99337'
    },
    danger: {
      main: '#f44336'
    },
  },
  typography: {
    fontFamily: '"Fira Sans", sans-serif'
  },
  custom: {
    lightShade: '#ECF2F1',
    lightAccent: '#8F8183',
    mainBrand: '#7F88B8',
    darkShade: '#356A9D',
    darkAccent: '#8C6C72'
  },
}

const defaultTheme = createMuiTheme(DEFAULT_THEME)

export default  defaultTheme