import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const GraficoPercentualMeta = ({ valorAtual = 750, valorMeta = 1200 }) => {
  const atingido = Math.min(valorAtual, valorMeta)
  const restante = Math.max(valorMeta - atingido, 0)
  const percentual = ((atingido / valorMeta) * 100).toFixed(0)

  const data = {
    labels: ['Atingido', 'Restante'],
    datasets: [
      {
        data: [atingido, restante],
        backgroundColor: ['#38bdf8', '#4b5563'], // azul e cinza escuro
        borderColor: ['#0ea5e9', '#374151'],
        borderWidth: 2,
      },
    ],
  }

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        labels: { color: '#fff' },
      },
    },
  }

  return (
    <div className="bg-zinc-800 p-4 rounded-xl shadow mt-4 flex flex-col items-center">
      <h2 className="text-lg font-semibold text-white mb-2">Meta Concluída</h2>
      <div className="relative w-32 h-32">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">{percentual}%</span>
        </div>
      </div>
    </div>
  )
}

export default GraficoPercentualMeta