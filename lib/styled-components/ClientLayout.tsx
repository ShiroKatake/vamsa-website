'use client';

import {ReactNode} from 'react';
import {ThemeProvider} from 'styled-components';
import {colors} from '@/styles/colors';
import GlobalStyle from '@/styles/global';

export function ClientLayout({children}: {children: ReactNode}) {
  return (
    <ThemeProvider theme={{colors}}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
