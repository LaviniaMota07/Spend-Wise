import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { categoria: 'Viagem', valor: 1500 },
  { categoria: 'Estudos', valor: 800 },
  { categoria: 'Reserva', valor: 2000 },
  { categoria: 'Lazer', valor: 500 },
];

const GoalsBarChart = () => (
  <div className="chart-card">
    <h3 className="chart-title">Metas por Categoria</h3>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid stroke="#334155" />
        <XAxis dataKey="categoria" stroke="#f1f5f9" />
        <YAxis stroke="#f1f5f9" />
        <Tooltip />
        <Bar dataKey="valor" fill="#22d3ee" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default GoalsBarChart;