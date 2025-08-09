// src/pages/ListaDespesas.jsx
import React from 'react'
import '../styles/ExpenseList.css'

const despesasExemplo = [
  { id: 1, categoria: 'Alimentação', valor: 120.5, data: '2025-08-01' },
  { id: 2, categoria: 'Transporte', valor: 45.9, data: '2025-08-02' },
  { id: 3, categoria: 'Saúde', valor: 89.0, data: '2025-08-03' },
]

function ListaDespesas() {
  return (
    <div className="lista-despesas">
      <h1 class="title">SPEND WISE</h1>
      <h2>Lista de Despesas</h2>
      <table>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Valor (R$)</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {despesasExemplo.map((despesa) => (
            <tr key={despesa.id}>
              <td>{despesa.categoria}</td>
              <td>{despesa.valor.toFixed(2)}</td>
              <td>{despesa.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListaDespesas
