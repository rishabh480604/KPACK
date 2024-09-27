import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout.jsx';
import Home from './components/home/Home.jsx';
import Services from './components/services/Services.jsx';
import MarketPlace from './components/marketPlace/MarketPlace.jsx';
import Login from './components/login/Login.jsx';
import Drone from './components/drone/Drone.jsx';


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="drone" element={< Drone/>} />
      <Route path="service" element={<Services />} />
      <Route path="marketplace" element={<MarketPlace />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
