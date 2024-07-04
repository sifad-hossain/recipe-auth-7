import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./App"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import Root from './layout/Root';
import AuthProvider from './Components/authProvider/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <App></App>
      },
      {
        path: 'signIn',
        element: <SignIn></SignIn>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
