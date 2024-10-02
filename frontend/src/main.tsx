import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/routes.tsx';
import './main.css';
import { Toaster } from 'react-hot-toast';
import { AuthContextProvider } from './context/AuthContext.tsx';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <AuthContextProvider>
    <StrictMode>
      <Toaster />
      <RouterProvider router={router} />
    </StrictMode>
  </AuthContextProvider>
);
