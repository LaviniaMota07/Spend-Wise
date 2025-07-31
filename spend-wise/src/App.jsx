// src/App.jsx
import React from 'react'
import './styles/main.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Reports from './pages/Reports'
import RegisterExpense from "./pages/RegisterExpense";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        
        <div className="route-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/relatorios" element={<Reports />} />
            <Route path="/registrar" element={<RegisterExpense />} />
          </Routes>
        </div>
        
      </div>
    </div>
  )
}

export default App
