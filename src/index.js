import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App />
    ),
  },
  {
    path: '/Signin',
    element: (
      <App withooutQuery />
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
