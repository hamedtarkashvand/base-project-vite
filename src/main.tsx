import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from '@mui/material/styles'
import App from './App.tsx'
import './index.css'
import {theme} from './providers/thems'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <ThemeProvider theme={theme} />
      <App />
    </>
  </React.StrictMode>,
)
