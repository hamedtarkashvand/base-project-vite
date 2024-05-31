import {CacheProvider} from '@emotion/react'
import rtlPlugin from 'stylis-plugin-rtl'
import {prefixer} from 'stylis'
import createCache from '@emotion/cache'

import {createTheme, ThemeProvider} from '@mui/material/styles'

const theme = createTheme({
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
})

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

function Rtl(props: any) {
  return (
    <>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </CacheProvider>
    </>
  )
}

export default Rtl
