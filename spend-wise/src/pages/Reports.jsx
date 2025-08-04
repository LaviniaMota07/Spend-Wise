import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, LineElement, PointElement, Tooltip, Legend } from 'chart.js';
import BarChart from '../components/Charts/BarChart';
import DoughnutChart from '../components/Charts/PieChart';
import LineChart from '../components/Charts/LineChart';
import '../styles/reports.css';


export default function Reports() {
  return (
    <div className="reports-container">
      <h1 className="reports-title">Relatórios Financeiros</h1>

      <div className="charts">
        <BarChart />
        <DoughnutChart />
        <LineChart />
      </div>
    </div>
  );
}
