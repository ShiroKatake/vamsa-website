'use client';
import {ReactNode} from 'react';
import {ThemeProvider} from 'styled-components';
import {colors} from '@/styles/colors';
import GlobalStyle from '@/styles/global';
import {NavBar} from '@/components/NavBar/NavBar';

export function ClientLayout({children}: {children: ReactNode}) {
  return (
    <ThemeProvider theme={{colors}}>
      <GlobalStyle />
      <NavBar />
      {children}
    </ThemeProvider>
  );
}
