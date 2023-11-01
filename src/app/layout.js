'use client'

import './globals.css'
import { Comic_Neue } from 'next/font/google'
import { Container } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const comicNeue = Comic_Neue({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <html>
        <body className={comicNeue.className + ' bg-gray-800'}>
          <Container maxWidth="lg">
            {children}
          </Container>
        </body>
      </html>
    </ThemeProvider>
  )
}


