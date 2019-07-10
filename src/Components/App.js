import React from 'react';
import GlobalStyles from '../Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Theme from "../Styles/Theme";
import { directive } from '@babel/types';

export default () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    Hello
  </ThemeProvider>
);
