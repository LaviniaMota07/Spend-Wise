import './Resumo.css';

function Resumo({ titulo, valor }) {
  return (
    <div className="resumo-card">
      <h3>{titulo}</h3>
      <p>R$ {valor.toFixed(2)}</p>
    </div>
  );
}

export default Resumo;
