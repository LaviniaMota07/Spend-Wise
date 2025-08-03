//No momento sem utilizar

import React from 'react';
import {
  Chart as ChartJS,
  Tooltip,
  Title,
  LinearScale,
  CategoryScale,
} from 'chart.js';
import { MatrixController, MatrixElement } from 'chartjs-chart-matrix';
import { Chart } from 'react-chartjs-2';

ChartJS.register(MatrixController, MatrixElement, LinearScale, CategoryScale, Tooltip, Title);

const Heatmap = () => {
  const semanas = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];
  const categorias = ['Alimentacao', 'Transporte', 'Lazer', 'Contas', 'Outros'];

  // Dados fake: [categoriaIndex, semanaIndex, valor]
  const dados = [
    [0, 0, 200], [0, 1, 300], [0, 2, 100], [0, 3, 50],
    [1, 0, 100], [1, 1, 250], [1, 2, 80], [1, 3, 90],
    [2, 0, 50], [2, 1, 60], [2, 2, 30], [2, 3, 70],
    [3, 0, 300], [3, 1, 350], [3, 2, 400], [3, 3, 300],
    [4, 0, 0], [4, 1, 20], [4, 2, 10], [4, 3, 5],
  ];

  const matrixData = dados.map(([catIndex, semIndex, value]) => ({
    x: semanas[semIndex],
    y: categorias[catIndex],
    v: value,
  }));

  const data = {
    datasets: [
      {
        label: 'Gastos por Categoria/Semana',
        data: matrixData,
        backgroundColor: ctx => {
          const value = ctx.raw.v;
          const alpha = Math.min(1, value / 400);
          return `rgba(59, 130, 246, ${alpha})`; // azul com opacidade
        },
        borderWidth: 1,
        width: () => 50,
        height: () => 40,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          title: ctx => `Semana: ${ctx[0].raw.x}`,
          label: ctx => `${ctx.raw.y}: R$ ${ctx.raw.v}`,
        },
      },
      title: {
        display: true,
        text: 'Heatmap de Gastos por Categoria (Semanal)',
        color: '#fff',
        font: { size: 18 },
      },
    },
    scales: {
      x: {
        type: 'category',
        labels: semanas,
        ticks: { color: '#fff' },
        grid: { display: false },
      },
      y: {
        type: 'category',
        labels: categorias,
        ticks: { color: '#fff' },
        grid: { display: false },
      },
    },
  };

  return (
    <div style={{ maxWidth: '100%', padding: '1rem' }}>
      <Chart type='matrix' data={data} options={options} />
    </div>
  );
};

export default Heatmap;