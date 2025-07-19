import Navbar from './components/Navbar';
import Header from './components/Header';
import Resumo from './components/Resumo';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Header />
        <Resumo />
      </main>
    </div>
  );
}

export default App;
