import React from 'react'
import '../styles/sidebar.css'
import { FaHome, FaChartPie, FaMoneyBillWave, FaCog, FaBullseye, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <FaUserCircle className="foto-perfil" />
      </div>
      <nav className="nav-menu">
        <ul>
          <li className="active"><FaHome /> <span><Link to="/" className="sidebar-link">Início</Link></span></li>
          <li><FaMoneyBillWave /> <span><Link to="/registrar" className="sidebar-link">Registrar Despesas</Link></span></li>
          <li><FaChartPie /> <span><Link to="/relatorios" className="sidebar-link">Relatórios</Link></span></li>
          <li><FaBullseye /> <span><Link to="/registrar metas" className="sidebar-link">Metas</Link></span></li>
          <li><FaCog /> <span>Configurações</span></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
