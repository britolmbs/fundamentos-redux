import React, { useState } from 'react'
import './App.css';
import Media from './components/Media';
import Intervalo from './components/intervalo';
import Soma from './components/Soma'
import Sorteio from './components/Sorteio';
import { useState } from 'react';

function App() {

  const [min, setMin] = useState(1)
  const [max, setMax] = useState(10)
  
  return (
    <div className="App">
      <h1>Exercicio React-Redux(Simples)</h1>
      <div className='linha'>
      <Intervalo min={min} max={max}
      onMinChanged={setMin} onMaxChanged={setMax}
      ></Intervalo>
      </div>
      <div className='linha'>
      <Media min={min} max={max}></Media>
      <Soma min={min} max={max}></Soma>
      <Sorteio min={min} max={max}></Sorteio>
      </div>
     
    </div>
  );
}

export default App;
