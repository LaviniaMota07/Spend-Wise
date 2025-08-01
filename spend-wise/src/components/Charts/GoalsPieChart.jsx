import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { nome: 'Atingido', valor: 60 },
  { nome: 'Restante', valor: 40 },
];

const cores = ['#4ade80', '#334155'];

const GoalsPieChart = () => (
  <div className="chart-card">
    <h3 className="chart-title">Progresso das Metas</h3>
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          dataKey="valor"
          nameKey="nome"
          outerRadius={80}
          innerRadius={50}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={cores[index % cores.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default GoalsPieChart;
