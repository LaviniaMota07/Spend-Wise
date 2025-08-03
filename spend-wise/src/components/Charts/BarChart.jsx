import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart() {
  const data = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Junho","Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    datasets: [
      {
        label: "Despesas (R$)",
        data: [1200, 950, 800, 1300, 1000, 900, 1100, 1250, 850, 950, 1000, 1150],
        backgroundColor: "#6366f1",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-[#1f2937] p-4 rounded-2xl shadow-lg h-[300px] w-full max-w-full">
      <h2 className="chart-title">Gastos por Mês</h2>
      <div className="h-[220px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
