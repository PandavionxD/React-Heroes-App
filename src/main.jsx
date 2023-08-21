import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { HeroProvider } from './context/HeroContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <HeroProvider >
  <RouterProvider router={router} >
  </RouterProvider>
    </HeroProvider>
)
