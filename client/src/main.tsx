import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Booking from './components/Booking';
import Ticket from './components/Ticket';
import LoginDemo from './components/LoginDemo';
import { getTicketByPnr } from './lib/api';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/booking',
        element: <Booking />,
      },
      {
        path: '/tickets/:pnr',
        element: <Ticket />,
        loader: async ({ params }) => {
          const ticket = await getTicketByPnr(params?.pnr || '');
          return ticket ? ticket : params?.pnr || '';
        },
      },
    ],
  },
  {
    path: '/login-demo',
    element: <LoginDemo />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
