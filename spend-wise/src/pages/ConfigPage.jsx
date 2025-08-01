import React from 'react';
import '../styles/ConfigPage.css';

const ConfigPage = () => {
  return (
    <div className="page">
      <h1 className="page-title">Configurações</h1>

      <div className="config-section">
        <h2>Preferências</h2>
        <div className="config-item">
          <label>Tema</label>
          <select>
            <option>Escuro</option>
            <option>Claro</option>
          </select>
        </div>

        <div className="config-item">
          <label>Idioma</label>
          <select>
            <option>Português</option>
            <option>Inglês</option>
          </select>
        </div>
      </div>

      <div className="config-section">
        <h2>Conta</h2>
        <div className="config-item">
          <label>Email</label>
          <input type="email" value="usuario@email.com" disabled />
        </div>
        <div className="config-item">
          <button className="danger-button">Sair</button>
        </div>
      </div>
    </div>
  );
};

export default ConfigPage;
