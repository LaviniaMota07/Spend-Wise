import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList
} from 'recharts';

const data = [
  { name: 'Viagem', progresso: 70 },
  { name: 'Educação', progresso: 45 },
  { name: 'Emergência', progresso: 90 },
  { name: 'Investimento', progresso: 60 }
];

function GoalsHorizontalBarChart({ title }) {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <h3 style={{ color: '#fff', textAlign: 'center', marginBottom: '1rem' }}>{title}</h3>
      <ResponsiveContainer>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis type="number" stroke="#ccc" />
          <YAxis type="category" dataKey="name" stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="progresso" fill="#00BFFF">
            <LabelList dataKey="progresso" position="right" fill="#fff" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GoalsHorizontalBarChart;