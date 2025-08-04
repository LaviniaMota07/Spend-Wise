// src/App.jsx
import React from 'react'
import './styles/main.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Reports from './pages/Reports'
import RegisterExpense from "./pages/RegisterExpense";
import Goals from './pages/Goals'
import ConfigPage from './pages/ConfigPage'
import RegisterGoals from './pages/RegisterGoals'
import Particulas from './components/Particulas'
import ExpenseList from './pages/ExpenseList'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app-container" style={{ position: 'relative', overflow: 'hidden' }}>
      <Particulas />
      <Header />
<    div className="main-content" style={{ position: 'relative', zIndex: 1 }}>
        <Sidebar />
        
        <div className="route-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/relatorios" element={<Reports />} />
            <Route path="/registrar" element={<RegisterExpense />} />
            <Route path="/metas" element={<Goals />} />
            <Route path="/configuracao" element={<ConfigPage />} />
            <Route path="/registrar-meta" element={<RegisterGoals />} />
            <Route path="/lista-despesas" element={<ExpenseList />} />
          </Routes>
        </div>
        
      </div>
    </div>
  )
}

export default App
