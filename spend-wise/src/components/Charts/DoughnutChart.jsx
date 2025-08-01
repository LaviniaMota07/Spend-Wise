import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
  const data = {
    labels: ["Alimentação", "Transporte", "Lazer", "Contas"],
    datasets: [
      {
        data: [30, 20, 25, 25],
        backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"],
      },
    ],
  };

  return (
    <div className="bg-[#1f2937] p-4 rounded-2xl shadow-lg h-[300px] w-full max-w-full">
      <h2 className="chart-title">Distribuição por Categoria</h2>
      <div className="h-[220px]">
        <Doughnut data={data} />
      </div>
    </div>
  );
}
