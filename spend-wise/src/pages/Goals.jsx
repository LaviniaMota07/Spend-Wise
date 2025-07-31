import React from 'react'
import '../styles/goals.css'
import { FaPlus } from 'react-icons/fa'
import DoughnutChart from "../components/DoughnutChart";
import LineChart from "../components/LineChart";

function Goals() {
  return (
    <div className="goals-page">
      <h1 className="goals-title">Metas Financeiras</h1>

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
            <input type="number" placeholder="Valor economizado (R$)" />
            <input type="date" />
            <textarea placeholder="Descrição (opcional)" rows="3" />
            <button type="submit" className="save-goal-btn">
              <FaPlus /> Salvar Meta
            </button>
          </form>
        </div>

        <div className="charts-container">
          <h2 className="section-title">Visualização das metas</h2>
          <div className="charts">
            <div className="chart-box">
              <DoughnutChart title="Metas por Categoria" />
            </div>
            <div className="chart-box">
              <LineChart title="Progresso ao Longo do Tempo" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Goals
