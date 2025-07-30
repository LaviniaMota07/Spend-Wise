import React from 'react'
import '../styles/sidebar.css'
import { FaHome, FaChartPie, FaMoneyBillWave, FaCog, FaBullseye } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="src/assets/foto-perfil.png" className="foto-perfil"/>
      </div>
      <nav className="nav-menu">
        <ul>
          <li className="active"><FaHome /> <span><Link to="/" className="sidebar-link">Início</Link></span></li>
          <li><FaMoneyBillWave /> <span>Registrar Despesa</span></li>
          <li><FaChartPie /> <span><Link to="/relatorios" className="sidebar-link">Relatórios</Link></span></li>
          <li><FaBullseye /> <span>Metas</span></li>
          <li><FaCog /> <span>Configurações</span></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
