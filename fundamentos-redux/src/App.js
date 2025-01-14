import React, { useState } from 'react'
import './App.css';
import Media from './components/Media';
import Intervalo from './components/intervalo';
import Soma from './components/Soma'
import Sorteio from './components/Sorteio';
import { useState } from 'react';

function App() {


  
  return (
    <div className="App">
      <h1>Exercicio React-Redux(Simples)</h1>
      <div className='linha'>
      <Intervalo></Intervalo>
      </div>
      <div className='linha'>
      <Media></Media>
      <Soma></Soma>
      <Sorteio></Sorteio>
      </div>
     
    </div>
  );
}

export default App;
