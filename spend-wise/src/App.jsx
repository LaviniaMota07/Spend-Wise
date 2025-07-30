// src/App.jsx
import React from 'react'
import './styles/main.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Reports from './pages/Reports'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          
        </Routes>
      </div>
    </div>
  )
}

export default App
