import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 300 },
  { name: 'Feb', value: 400 },
  { name: 'Mar', value: 450 },
  { name: 'Abr', value: 600 },
  { name: 'Mai', value: 750 },
  { name: 'Jun', value: 800 },
  { name: 'Jul', value: 820 },
  { name: 'Ago', value: 900 },
  { name: 'Set', value: 950 },
  { name: 'Out', value: 1000 },
  { name: 'Nov', value: 1050 },
  { name: 'Dez', value: 1100 },
];

const GoalsLineChart = () => (
  <div className="chart-card">
    <h3 className="chart-title">Evolução da Economia</h3>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid stroke="#334155" />
        <XAxis dataKey="name" interval={0} angle={-30} textAnchor="end" />
        <YAxis stroke="#f1f5f9" />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#38bdf8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default GoalsLineChart;
