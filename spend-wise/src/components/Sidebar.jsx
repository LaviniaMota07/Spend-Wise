import React from 'react'
import '../styles/sidebar.css'
import { FaHome, FaChartPie, FaMoneyBillWave, FaCog, FaBullseye, FaUserCircle } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="logo">
        <FaUserCircle className="foto-perfil" />
      </div>
      <nav className="nav-menu">
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <FaHome />
            <span>
              <Link to="/" className="sidebar-link">Início</Link>
            </span>
          </li>
          <li className={location.pathname === '/registrar' ? 'active' : ''}>
            <FaMoneyBillWave />
            <span>
              <Link to="/registrar" className="sidebar-link">Registrar Despesas</Link>
            </span>
          </li>
          <li className={location.pathname === '/relatorios' ? 'active' : ''}>
            <FaChartPie />
            <span>
              <Link to="/relatorios" className="sidebar-link">Relatórios</Link>
            </span>
          </li>
          <li className={location.pathname === '/registrar metas' ? 'active' : ''}>
            <FaBullseye />
            <span>
              <Link to="/registrar metas" className="sidebar-link">Metas</Link>
            </span>
          </li>
          <li className={location.pathname === '/configuracoes' ? 'active' : ''}>
            <FaCog />
            <span><Link to="/configuracao" className="sidebar-link">Configurações</Link></span>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
