import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import MainLayout from './components/layout/MainLayout.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainLayout/>
  </React.StrictMode>,
)
