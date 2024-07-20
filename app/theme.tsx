'use client';

import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from 'react';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F4B303',
    },
    secondary: {
      main: '#1b1b1a',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f4f4f4',
    },
  },
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}