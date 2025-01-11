import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux(Simples)</h1>
      <div className='linha'>
      <Card title="Card 1" red />
      <Card title="Card 2" green />
      </div>
      <div className='linha'>
      <Card title="Card 3" blue />
      <Card title="Card 4" purple />
      </div>
     
    </div>
  );
}

export default App;
