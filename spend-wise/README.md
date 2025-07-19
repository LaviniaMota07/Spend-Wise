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
- **CSS Modules** — Estilização por componente
- **Chart.js** — Visualização de dados
- **Git/GitHub** — Versionamento e colaboração

---

## 📂 Estrutura de Pastas

```bash
spend-wise/
│
├── public/                           # Arquivos públicos acessíveis diretamente
│   └── index.html                    # HTML principal onde o app é montado
│
├── src/                              # Código-fonte da aplicação
│
│   ├── assets/                       # Imagens, ícones, SVGs e logos
│   │   └── react.svg                 # Exemplo de asset usado na interface
│
│   ├── components/                   # Componentes reutilizáveis da interface
│   │   ├── Header.jsx               # Cabeçalho da página
│   │   ├── Header.css               # Estilos específicos do Header
│   │   ├── Navbar.jsx               # Menu de navegação lateral ou superior
│   │   ├── Resumo.jsx               # Cartões de resumo (Receita, Despesa, Saldo)
│   │   ├── Resumo.css               # Estilos dos cartões de resumo
│   │   └── ...                      # Outros componentes pequenos e modulares
│
│   ├── pages/                        # Páginas completas do app (rotas)
│   │   ├── Dashboard.jsx            # Página principal com resumo e gráficos
│   │   ├── Relatorios.jsx           # Página de relatórios com visualização de dados
│   │   ├── Login.jsx                # Tela de login do usuário
│   │   ├── Cadastro.jsx             # Tela de cadastro de usuário
│   │   └── ...                      # Outras páginas futuras (ex: Perfil, Configurações)
│
│   ├── styles/                       # Estilos globais e centralizados
│   │   ├── main.css                 # CSS global da aplicação
│   │   ├── App.css                  # Estilos do componente App
│   │   └── variables.css            # Variáveis de cor, fonte, dark/light mode (opcional)
│
│   ├── services/                     # Requisições a APIs e lógica externa
│   │   ├── api.js                   # Configuração de instância do axios ou fetch
│   │   ├── authService.js          # Login, logout e autenticação
│   │   └── gastoService.js         # CRUD de receitas e despesas
│
│   ├── hooks/                        # Custom React Hooks (lógica reutilizável)
│   │   └── useAuth.js              # Verifica login, redireciona etc.
│
│   ├── context/                      # Context API para estado global
│   │   └── AuthContext.jsx         # Provedor de autenticação
│
│   ├── utils/                        # Funções utilitárias
│   │   └── formatCurrency.js       # Formata números como R$ 1.000,00
│
│   ├── App.jsx                       # Componente principal com as rotas
│   ├── main.jsx                      # Ponto de entrada da aplicação (ReactDOM)
│
├── .gitignore                        # Arquivos e pastas ignorados pelo Git
├── package.json                      # Dependências e scripts do projeto
├── vite.config.js                    # Configuração do Vite
├── README.md                         # Descrição e instruções do projeto
└── LICENSE (opcional)                # Licença do projeto (MIT, etc)

