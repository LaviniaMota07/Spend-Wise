// src/pages/RegisterGoalPage.jsx
import React from 'react';
import '../styles/goals.css';
import { FaPlus } from 'react-icons/fa';

function RegisterGoalPage() {
  return (
    <div className="goals-page">
      <h1 className="title">SPEND WISE</h1>
      <h2 className="goals-title">Registrar Nova Meta</h2>

      <section className="goals-section">
        <div className="form-container">
          <h2 className="section-title">Registrar nova meta</h2>
          <form className="goal-form">
            <input type="text" placeholder="Nome da meta" />
            <select>
              <option value="">Escolha a categoria</option>
              <option value="viagem">Viagem</option>
              <option value="educacao">Educação</option>
              <option value="emergencia">Emergência</option>
              <option value="investimento">Investimento</option>
            </select>
            <input type="number" placeholder="Valor desejado (R$)" />
            <input type="number" placeholder="Saldo disponível (R$)" />
            <input type="number" placeholder="Valor destinado à meta (R$)" />
            <input type="number" placeholder="Valor economizado (R$)" />
            <input type="date" />
            <textarea placeholder="Descrição (opcional)" rows="3" />
            <button type="submit" className="save-goal-btn">
              <FaPlus /> Salvar Meta
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default RegisterGoalPage;
