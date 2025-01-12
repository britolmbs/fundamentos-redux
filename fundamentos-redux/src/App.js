import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Intervalo from './components/intervalo';

function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux(Simples)</h1>
      <div className='linha'>
      <Intervalo></Intervalo>
      </div>
      <div className='linha'>
      <Card title="Card 2" green />
      <Card title="Card 3" blue />
      <Card title="Card 4" purple />
      </div>
     
    </div>
  );
}

export default App;
