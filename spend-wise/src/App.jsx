import './App.css';
import Header from './components/Header';
import Resumo from './components/Resumo';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Resumo />
        {/* Em breve: outros componentes aqui */}
      </main>
    </div>
  );
}

export default App;
