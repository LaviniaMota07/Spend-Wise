import React from 'react'
import '../styles/dashboard.css'
import Header from './Header'
import Resumo from './Resumo'
import ListaTransacoes from './ListaTransacoes'

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <div className="conteudo">
        <Resumo />
        <ListaTransacoes />
      </div>
    </div>
  )
}

export default Dashboard
