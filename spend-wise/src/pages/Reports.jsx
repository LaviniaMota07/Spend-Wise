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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Gráfico 1 */}
            <div className="bg-[#1f2937] p-4 rounded-2xl shadow-lg flex flex-col items-center" style={{ height: "300px" }}>
            <h3 className="mb-2 text-center">Gastos por Mês</h3>
            <div className="w-full h-full">
                <Bar
                data={barData}
                options={{ maintainAspectRatio: false, responsive: true }}
                />
            </div>
            </div>

            {/* Gráfico 2 */}
            <div className="bg-[#1f2937] p-4 rounded-2xl shadow-lg flex flex-col items-center" style={{ height: "300px" }}>
            <h3 className="mb-2 text-center">Distribuição por Categoria</h3>
            <div className="w-full h-full">
                <Doughnut
                data={doughnutData}
                options={{ maintainAspectRatio: false, responsive: true }}
                />
            </div>
            </div>

            {/* Gráfico 3 */}
            <div className="bg-[#1f2937] p-4 rounded-2xl shadow-lg flex flex-col items-center md:col-span-3" style={{ height: "300px" }}>
            <h3 className="mb-2 text-center">Evolução Semanal do Saldo</h3>
            <div className="w-full h-full">
                <Line
                data={lineData}
                options={{ maintainAspectRatio: false, responsive: true }}
                />
            </div>
            </div>
        </div>
        </div>
  );
}