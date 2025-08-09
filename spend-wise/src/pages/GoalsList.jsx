// src/pages/GoalListPage.jsx
import React, { useState } from 'react';
import '../styles/GoalsList.css';
import { FaTrash } from 'react-icons/fa';

function GoalListPage() {
  const [goals, setGoals] = useState([
    { id: 1, name: 'Viagem para Europa', category: 'Viagem', value: 15000 },
    { id: 2, name: 'Curso de Programação', category: 'Educação', value: 2000 },
    { id: 3, name: 'Reserva de Emergência', category: 'Emergência', value: 5000 }
  ]);

  const handleDelete = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <div className="goal-list-page">
      <h2 className="section-title">Lista de Metas</h2>
      {goals.length > 0 ? (
        <ul className="goal-list">
          {goals.map(goal => (
            <li key={goal.id} className="goal-item">
              <div>
                <strong>{goal.name}</strong> <br />
                <span>Categoria: {goal.category}</span> <br />
                <span>Valor: R$ {goal.value.toLocaleString()}</span>
              </div>
              <button 
                className="delete-btn"
                onClick={() => handleDelete(goal.id)}
              >
                <FaTrash /> Excluir
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-goals">Nenhuma meta registrada.</p>
      )}
    </div>
  );
}

export default GoalListPage;
