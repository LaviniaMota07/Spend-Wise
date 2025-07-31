# React + Vite

# Spend Wise – Organização Financeira Inteligente

Spend Wise é uma aplicação moderna de controle financeiro pessoal, criada com React e Vite, com foco em **visualização clara de dados**, **estilo escuro elegante** e **experiência simples e rápida**.

<img src="https://user-images.githubusercontent.com/00000000/your-preview-image.png" alt="Spend Wise Preview" width="100%">

---

## 🚀 Funcionalidades (MVP)

- ✅ Interface escura, moderna e responsiva
- ✅ Resumo financeiro com receitas, despesas e saldo
- ✅ Componentes reutilizáveis com organização modular
- 🔜 Cadastro e login de usuários
- 🔜 Relatórios com gráficos (Chart.js)
- 🔜 Histórico de transações e metas financeiras

---

## 🛠️ Tecnologias Utilizadas

- **React** — Biblioteca JavaScript para interfaces
- **Vite** — Build tool moderno e super rápido
- **CSS** — Estilização por componente
- **Chart.js** — Visualização de dados
- **Git/GitHub** — Versionamento e colaboração

---

## 📂 Estrutura de Pastas

```bash
spend-wise/
│
├── public/
│   └── index.html                 # HTML principal onde o React é injetado
│
├── src/                           # Código-fonte da aplicação
│
│   ├── assets/                    # Arquivos estáticos como imagens e ícones
│   │   ├── foto-perfil.png        # Imagem de perfil usada na UI
│   │   └── react.svg              # Ícone do React usado como decoração
│
│   ├── components/                # Componentes reutilizáveis da interface
│   │   ├── BarChart.jsx           # Gráfico de barras (ex: comparativo de gastos)
│   │   ├── DoughnutChart.jsx      # Gráfico de rosca (ex: despesas por categoria)
│   │   ├── Header.css             # Estilo específico para o cabeçalho (Header.jsx)
│   │   ├── Header.jsx             # Componente do cabeçalho superior
│   │   ├── LineChart.jsx          # Gráfico de linha (ex: evolução dos gastos)
│   │   ├── ListaTransacoes.jsx    # Lista de transações (receitas/despesas)
│   │   ├── Navbar.jsx             # Menu de navegação lateral ou superior
│   │   ├── Resumo.css             # Estilos dos cartões de resumo
│   │   ├── Resumo.jsx             # Cartões que mostram Receita, Despesa e Saldo
│   │   └── Sidebar.jsx            # Barra lateral com links e ícones de navegação
│
│   ├── pages/                     # Páginas completas (ligadas às rotas principais)
│   │   ├── Dashboard.jsx          # Tela principal com resumo, gráficos e transações
│   │   ├── RegisterExpense.jsx    # Página para cadastrar novas despesas
│   │   └── Reports.jsx            # Tela de relatórios (análises mais detalhadas)
│
│   ├── styles/                    # Estilos globais e por seção/página
│   │   ├── App.css                # Estilos globais do componente App
│   │   ├── dashboard.css          # Estilo específico da tela Dashboard
│   │   ├── main.css               # Estilo global base (reset, fontes, tema geral)
│   │   ├── RegisterExpense.css    # Estilo da página de cadastro de despesas
│   │   ├── reports.css            # Estilo da tela de relatórios
│   │   └── sidebar.css            # Estilos específicos para a Sidebar
│
│   ├── App.jsx                    # Componente principal com as rotas e layout
│   └── main.jsx                   # Ponto de entrada da aplicação React
│
├── .gitignore                     # Arquivos/pastas que o Git deve ignorar
├── package.json                   # Lista de dependências e scripts do projeto
├── package-lock.json              # Travamento exato das versões das dependências
├── vite.config.js (se houver)     # Configurações do Vite (build, alias, etc.)
└── README.md                      # Documentação e instruções do projeto


