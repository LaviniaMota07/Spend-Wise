import React, { useState } from 'react'
import '../styles/sidebar.css'
import { FaHome, FaChartPie, FaMoneyBillWave, FaCog, FaBullseye, FaUserCircle, FaPlusCircle, FaList, FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="top-section">
        <div className="logo">
          <FaUserCircle className="foto-perfil" />
          {isOpen && <span className="logo-text"></span>}
        </div>
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>

      <nav className="nav-menu">
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <FaHome />
            {isOpen && <Link to="/" className="sidebar-link">Início</Link>}
          </li>

          <li className={location.pathname === '/registrar' ? 'active' : ''}>
            <FaMoneyBillWave />
            {isOpen && <Link to="/registrar" className="sidebar-link">Registrar Despesas</Link>}
          </li>

          <li className={location.pathname === '/registrar-meta' ? 'active' : ''}>
            <FaPlusCircle />
            {isOpen && <Link to="/registrar-meta" className="sidebar-link">Registrar Meta</Link>}
          </li>

          <li className={location.pathname === '/relatorios' ? 'active' : ''}>
            <FaChartPie />
            {isOpen && <Link to="/relatorios" className="sidebar-link">Relatórios</Link>}
          </li>

          <li className={location.pathname === '/lista-despesas' ? 'active' : ''}>
            <FaList />
            {isOpen && <Link to="/lista-despesas" className="sidebar-link">Lista de Despesas</Link>}
          </li>

          <li className={location.pathname === '/metas' ? 'active' : ''}>
            <FaBullseye />
            {isOpen && <Link to="/metas" className="sidebar-link">Visualizar Metas</Link>}
          </li>

          <li className={location.pathname === '/goal-list' ? 'active' : ''}>
            <FaBullseye />
            {isOpen && <Link to="/goal-list" className="sidebar-link">Lista de Metas</Link>}
          </li>

          <li className={location.pathname === '/configuracoes' ? 'active' : ''}>
            <FaCog />
            {isOpen && <Link to="/configuracao" className="sidebar-link">Configurações</Link>}
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar;
