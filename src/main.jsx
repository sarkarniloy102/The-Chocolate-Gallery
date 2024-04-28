import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Router';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className='bg-white'>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </AuthProvider>

  </React.StrictMode>,
)
