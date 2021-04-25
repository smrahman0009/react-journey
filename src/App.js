import logo from './logo.svg';
import React from 'react';
import Component from './compo/Component';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Component/>
      </header>
    </div>
  );
}

export default App;
