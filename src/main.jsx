import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import router from './router/Router';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './context/AuthProvider';
import { ThemeProvider } from './context/ThemeProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
 <ThemeProvider>
 <RouterProvider router={router} />
 <Toaster />
 </ThemeProvider>
  </AuthProvider>
  </StrictMode>,
)
