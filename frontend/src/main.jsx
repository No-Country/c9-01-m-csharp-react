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
import PersonalData from "./Components/PersonalData.jsx";
import PersonalObjectives from "./Components/PersonalObjectives.jsx";
import PersonalRead from "./Components/PersonalRead.jsx";
import PersonalFavourites from "./Components/PersonalFavourites.jsx";

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
  },
  {
    path: '/perfil/datos',
    element: <PersonalData />,
    errorElement: <ErrorPage />
  },
  {
    path: '/perfil/objetivos',
    element: <PersonalObjectives />,
    errorElement: <ErrorPage />
  },
  {
    path: '/perfil/leidos',
    element: <PersonalRead />,
    errorElement: <ErrorPage />
  },
  {
    path: '/perfil/favoritos',
    element: <PersonalFavourites />,
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
