import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/routes.tsx';
import './main.css'
import { AuthContextProvider } from './context/AuthContext.tsx';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthContextProvider>
        <Toaster />
        <RouterProvider router={router} />
      </AuthContextProvider>
  </StrictMode>
);
