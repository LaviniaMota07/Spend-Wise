import React from 'react'
import './styles/main.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  )
}

export default App
