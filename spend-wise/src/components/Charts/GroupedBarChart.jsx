import React from "react";
import {
Chart as ChartJS,
BarElement,
CategoryScale,
LinearScale,
Legend,
Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function MetasComparadas() {
const metas = [
{ nome: "Viagem", ideal: 1000, atingido: 700 },
{ nome: "Estudos", ideal: 500, atingido: 300 },
{ nome: "Reserva", ideal: 2000, atingido: 1500 },
];

const labels = metas.map((meta) => meta.nome);

const data = {
labels,
datasets: [
{
label: "Ideal",
data: metas.map((meta) => meta.ideal),
backgroundColor: "#64748b", // cinza azulado
},
{
label: "Atingido",
data: metas.map((meta) => meta.atingido),
backgroundColor: "#38bdf8", // azul cyan
},
],
};

const options = {
responsive: true,
plugins: {
legend: {
labels: {
color: "white",
},
},
},
scales: {
x: {
ticks: { color: "white" },
grid: { color: "#334155" },
},
y: {
beginAtZero: true,
ticks: { color: "white" },
grid: { color: "#334155" },
},
},
};

return (
<div className="bg-zinc-800 p-4 rounded-xl shadow-lg mt-4">
<h2 className="text-white text-lg font-semibold mb-2">
Progresso por Meta
</h2>
<Bar data={data} options={options} />
</div>
);
}
