import './Resumo.css';
import ResumoChart from "./Charts/ResumoChart";

function Resumo() {
  return (
    <section className="resumo">
      <h2>SPEND WISE</h2>
      <h3>Resumo Financeiro</h3>

      <div className="cards">
        <div className="card destaque">Receitas: R$ 2.000</div>
        <div className="card">Despesas: R$ 1.500</div>
        <div className="card">Saldo: R$ 500</div>
      </div>

      <div className="grafico">
        <ResumoChart />
      </div>
    </section>
  );
}

export default Resumo;
