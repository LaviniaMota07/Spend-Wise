import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

function GraficoPizzaCategoria() {
  const dados = {
    labels: ['Alimentação', 'Transporte', 'Lazer', 'Saúde', 'Outros'],
    datasets: [
      {
        label: 'Despesas por categoria',
        data: [300, 100, 150, 50, 80],
        backgroundColor: [
          '#38bdf8', '#0ea5e9', '#22d3ee', '#06b6d4', '#0284c7'
        ],
        borderWidth: 1,
      },
    ],
  }

  const opcoes = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'white'
        }
      },
    },
  }

  return (
    <div className="grafico-pizza">
      <h2>Distribuição por Categoria</h2>
      <Pie data={dados} options={opcoes} />
    </div>
  )
}

export default GraficoPizzaCategoria
