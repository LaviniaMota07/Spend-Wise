import React from "react";
import {
  FaUtensils,
  FaBus,
  FaGamepad,
  FaBolt,
  FaQuestion,
  FaMoneyBillWave,
} from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const transacoes = [
  { id: 1, descricao: "Supermercado", valor: -150.0, data: "2025-07-28" },
  { id: 2, descricao: "Salário", valor: 3500.0, data: "2025-07-25" },
  { id: 3, descricao: "Netflix", valor: -39.9, data: "2025-07-22" },
];


const iconesCategoria = {
  Supermercado: <FaUtensils />,
  Salário: <FaMoneyBillWave />,
  Netflix: <FaGamepad />,
};


const coresFundoCategoria = {
  Supermercado: "#4ade80",
  Salário: "#38bdf8",       
  Netflix: "#f87171",     
};

export default function Transacoes() {
  const navigate = useNavigate();

  return (
    <div className="bg-zinc-900 min-h-screen p-6 text-white">
      <button
        onClick={() => navigate("/")}
        className="flex items-center mb-6 text-zinc-300 hover:text-white"
      >
        <ArrowLeft className="mr-2" /> Voltar
      </button>

      <h1 className="text-2xl font-bold mb-4">Minhas Transações</h1>

      <div className="bg-zinc-800 p-4 rounded-xl shadow">
        <ul className="space-y-3">
          {transacoes.map((transacao) => {
            const icone = iconesCategoria[transacao.descricao] || <FaQuestion />;
            const corFundo =
              coresFundoCategoria[transacao.descricao] || "#334155";

            return (
              <li
                key={transacao.id}
                className="flex items-center bg-zinc-700 p-3 rounded-lg"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full text-white text-lg mr-4"
                  style={{ backgroundColor: corFundo }}
                >
                  {icone}
                </div>

                <div className="flex-1">
                  <p className="font-medium">{transacao.descricao}</p>
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
    </div>
  );
}
