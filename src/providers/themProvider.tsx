import {CacheProvider} from '@emotion/react'
import rtlPlugin from 'stylis-plugin-rtl'
import {prefixer} from 'stylis'
import createCache from '@emotion/cache'

import {ThemeProvider as MuiThemProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import {theme} from './theme'

type TypeThemeProvider = {
  children: React.ReactNode
}

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

function ThemeProvider(props: TypeThemeProvider) {
  return (
    <>
      <CacheProvider value={cacheRtl}>
        <MuiThemProvider theme={theme}>
          <CssBaseline />
          {props.children}
        </MuiThemProvider>
      </CacheProvider>
    </>
  )
}

export default ThemeProvider
