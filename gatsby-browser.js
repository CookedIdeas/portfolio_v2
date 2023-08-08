import React from 'react';
import { GlobalProvider } from './src/2_context/GlobalContext';
import './src/99_styles/main.scss';

export const wrapRootElement = ({ element }) => (
  <GlobalProvider>{element}</GlobalProvider>
);
