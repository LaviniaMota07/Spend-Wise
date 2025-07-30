// src/pages/Reports.jsx
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, LineElement, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

export default function Reports() {
  const barData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
    datasets: [
      {
        label: 'Despesas (R$)',
        data: [1200, 950, 800, 1300],
        backgroundColor: '#4f46e5',
      },
    ],
  };

  const doughnutData = {
    labels: ['Alimentação', 'Transporte', 'Lazer', 'Contas'],
    datasets: [
      {
        label: 'Categorias',
        data: [500, 300, 200, 600],
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
      },
    ],
  };

  const lineData = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
    datasets: [
      {
        label: 'Saldo Semanal',
        data: [300, 450, 200, 500],
        borderColor: '#22d3ee',
        backgroundColor: '#22d3ee30',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-semibold mb-6">Relatórios Financeiros</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#1f2937] p-4 rounded-2xl shadow-lg">
          <h3 className="mb-2">Gastos por Mês</h3>
          <Bar data={barData} />
        </div>

        <div className="bg-[#1f2937] p-4 rounded-2xl shadow-lg">
          <h3 className="mb-2">Distribuição por Categoria</h3>
          <Doughnut data={doughnutData} />
        </div>

        <div className="bg-[#1f2937] p-4 rounded-2xl shadow-lg col-span-1 md:col-span-2">
          <h3 className="mb-2">Evolução Semanal do Saldo</h3>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
}