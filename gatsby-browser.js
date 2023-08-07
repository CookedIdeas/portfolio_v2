import React from 'react';
import { GlobalProvider } from './src/2_context/GlobalContext';
import './src/99_styles/base/global.scss';
import './src/99_styles/pages/homePage_introduction.scss';

export const wrapRootElement = ({ element }) => (
  <GlobalProvider>{element}</GlobalProvider>
);
