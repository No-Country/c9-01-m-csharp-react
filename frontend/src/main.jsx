import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// importacion de redux
import { Provider } from 'react-redux'
import store from './store'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home'
import ErrorPage from './Components/ErrorPage'
import Library from './pages/Library'
import Category from './Components/Category'
import Profile from "./pages/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/library",
    element: <Library/>,
    errorElement:<ErrorPage/>,
  },

  {
    path: "/library/:categoryName",
    element: <Category/>,
    errorElement:<ErrorPage/>,
  },
  {
    path: 'perfil',
    element: <Profile />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
