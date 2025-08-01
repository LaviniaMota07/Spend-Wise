import React from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const percentage = 65; // valor de exemplo

const data = [
  { value: percentage },
  { value: 100 - percentage }
];

const COLORS = ['#32CD32', '#444'];

function GoalsGaugeChart({ title }) {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <h3 style={{ color: '#fff', textAlign: 'center', marginBottom: '1rem' }}>{title}</h3>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            startAngle={180}
            endAngle={0}
            innerRadius={70}
            outerRadius={100}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div style={{
        textAlign: 'center',
        marginTop: '-60px',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#fff'
      }}>
        {percentage}%
      </div>
    </div>
  );
}

export default GoalsGaugeChart;