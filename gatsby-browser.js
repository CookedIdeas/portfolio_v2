import React from 'react';
import { GlobalProvider } from './src/2_context/GlobalContext';
import './src/99_styles/main.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const wrapRootElement = ({ element }) => (
  <QueryClientProvider client={queryClient}>
    <GlobalProvider>{element}</GlobalProvider>
  </QueryClientProvider>
);
