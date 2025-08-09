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

  const receitas = [2000, 2500, 2200, 2600, 2800, 2400, 3000, 3200, 2900, 3100, 3300, 3500];
  const despesas = [1800, 2000, 2100, 1900, 2200, 2000, 2500, 2700, 2600, 2400, 2600, 2700];
  const saldo = receitas.map((r, i) => r - despesas[i]);
  const data = {
    labels,
    datasets: [
      {
        label: 'Receitas',
        data: receitas, 
        backgroundColor: '#5ED8F1',
      },
      {
        label: 'Despesas',
        data: despesas, 
        backgroundColor: '#6525ccff',
      },
      {
        label: 'Saldo',
        data: saldo,
        backgroundColor: '#3978d6ff',
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
