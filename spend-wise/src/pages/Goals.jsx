import React from 'react'
import '../styles/goals.css'
import { FaPlus } from 'react-icons/fa'
import GoalsLineChart from '../components/Charts/GoalsLineChart';
import GoalsBarChart from '../components/Charts/GoalsBarChart';
import GoalsPieChart from '../components/Charts/GroupedBarChart';
import GoalsGaugeChart from '../components/Charts/GoalsDoughnutChart';

function Goals() {
  return (
    <div className="goals-page">
      <h1 className="title">SPEND WISE</h1>
      <section className="goals-section">
        <div className="charts-container">
          <h2 className="section-title">Visualização das metas</h2>
         <div className="goals-charts">
          <div className="goalschart-row">
            <div className="goalschart-box"><GoalsLineChart title="Evolução Econômica" /></div>
            <div className="goalschart-box"><GoalsBarChart title="Metas por Categoria" /></div>
            <div className="goalschart-box"><GoalsPieChart title="Distribuição das Economias" /></div>
          </div>
          <div className="goalschart-row">
            <div className="goalschart-box"><GoalsGaugeChart title="Percentual Total Atingido" /></div>
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Goals
