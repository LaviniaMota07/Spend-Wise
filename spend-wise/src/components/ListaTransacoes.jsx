import React from "react";
import '../styles/ListaTransacoes.css';

import {
  FaUtensils,
  FaBus,
  FaGamepad,
  FaBolt,
  FaQuestion,
  FaMoneyBillWave,
} from "react-icons/fa";

const transacoes = [
  { id: 1, descricao: "Supermercado", valor: -150.0, data: "2025-07-28" },
  { id: 2, descricao: "Salário", valor: 3500.0, data: "2025-07-25" },
  { id: 3, descricao: "Netflix", valor: -39.9, data: "2025-07-22" },
];

// Define ícones por categoria
const iconesCategoria = {
  Supermercado: <FaUtensils />,
  Salário: <FaMoneyBillWave />,
  Netflix: <FaGamepad />,
};

// Define cores de fundo harmoniosas por categoria
const coresFundoCategoria = {
  Supermercado: "#4ade80", 
  Salário: "#38bdf8",       
  Netflix: "#f87171",       
};

export default function ListaTransacoes() {
  return (
    <div className="bg-zinc-800 p-4 rounded-xl shadow mt-4">
      <h2 className="text-xl font-semibold mb-4 text-white">Últimas Transações</h2>
      <ul className="space-y-2">
        {transacoes.map((transacao) => {
          const icone = iconesCategoria[transacao.descricao] || <FaQuestion />;
          const corFundo =
            coresFundoCategoria[transacao.descricao] || "#2A2F45"; 

          return (
            <li
              key={transacao.id}
              className="flex items-center gap-3 bg-zinc-700 p-3 rounded-lg"
            >
              <div
                className="icon-wrapper"
                style={{ backgroundColor: corFundo }}
              >
                {React.cloneElement(icone, { size: 16 })}
              </div>

              <div className="flex-1">
                <p className="text-white font-medium">{transacao.descricao}</p>
                <span className="text-sm text-zinc-400">{transacao.data}</span>
              </div>

              <p
                className={`font-bold ${
                  transacao.valor < 0 ? "text-red-400" : "text-green-400"
                }`}
              >
                R$ {Math.abs(transacao.valor).toFixed(2)}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
