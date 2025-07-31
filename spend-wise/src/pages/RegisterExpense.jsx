import React, { useState } from "react";
import "../styles/RegisterExpense.css";

const RegisterExpense = () => {
  const [form, setForm] = useState({
    nome: "",
    valor: "",
    categoria: "",
    data: "",
    observacoes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Despesa registrada:", form);
    // Para integrar com o backend
  };

  return (
    <div className="register-expense-container">
      <h2 className="title">Registrar Despesa</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="nome" value={form.nome} onChange={handleChange} required />
        </label>
        <label>
          Valor (R$):
          <input type="number" name="valor" value={form.valor} onChange={handleChange} required />
        </label>
        <label>
          Categoria:
          <select name="categoria" value={form.categoria} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Transporte">Transporte</option>
            <option value="Moradia">Moradia</option>
            <option value="Lazer">Lazer</option>
            <option value="Outros">Outros</option>
          </select>
        </label>
        <label>
          Data:
          <input type="date" name="data" value={form.data} onChange={handleChange} required />
        </label>
        <label>
          Observações:
          <textarea name="observacoes" value={form.observacoes} onChange={handleChange} />
        </label>
        <button type="submit" className="submit-btn">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterExpense;
