import React from 'react';
import GlobalStyle from '@/styles/GlobalStyle';
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
)
