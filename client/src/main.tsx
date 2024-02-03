import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Booking from './components/Booking';
import Ticket from './components/Ticket';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path:"/booking",
    element: <Booking />
  },
  {
    path: "/tickets/:ticketId",
    element: <Ticket />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
