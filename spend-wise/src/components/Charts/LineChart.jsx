import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function LineChart() {
  const data = {
    labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
    datasets: [
      {
        label: "Saldo Semanal",
        data: [300, 450, 200, 500],
        borderColor: "#06b6d4",
        backgroundColor: "#06b6d4",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-[#1f2937] p-4 rounded-2xl shadow-lg h-[300px] w-full max-w-full">
      <h2 className="chart-title">Evolução Semanal do Saldo</h2>
      <div className="h-[220px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
