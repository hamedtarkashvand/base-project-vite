import {createTheme} from '@mui/material/styles'
import IranSans from '../assets/fonts/IRANSans.woff'
import IranSans2 from '../assets/fonts/IRANSans.woff2'

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#2563EB',
    },
    secondary: {
      main: '#4F46E5 ',
    },
    info: {
      main: '#0284C7',
    },
    success: {
      main: '#16A34A',
    },
    error: {
      main: '#DC2626',
    },
    warning: {
      main: '#F59E0B',
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'IRANSans',
    },
    fontFamily: 'IRANSans',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family:'IRANSans';
          src: url(${IranSans}) format('woff'),
          url(${IranSans2}) format('woff2');
          font-weight: normal;
          font-style: normal;
        }
     `,
    },
  },
})
