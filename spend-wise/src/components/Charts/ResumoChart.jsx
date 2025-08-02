import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  Title
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip, Title);

const ResumoChart = () => {
  const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Receitas',
        data: [2000, 1500, 1800, 300, 509, 345, 789, 800, 110, 220, 330, 220], 
        backgroundColor: '#5ED8F1', // 
      },
      {
        label: 'Despesas',
        data: [1000, 900, 1400, 770, 1110, 2070, 220, 690, 770, 990, 660, 1000], 
        backgroundColor: '#d65839ff',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#fff',
        },
      },
      title: {
        display: true,
        text: 'Receitas e Despesas Mensais',
        color: '#fff',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#fff',
        },
      },
      y: {
        ticks: {
          color: '#fff',
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', padding: '1rem', height: '370px', display: 'flex', justifyContent: 'center', alignItems: 'center'} }>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ResumoChart;
