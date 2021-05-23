import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Counter from "./Counter";
import {useSelector } from 'react-redux';

function App() {
  const count = useSelector((state)=>state.counter.count)
  return (
      <div>
        <h1>Counter {count}</h1>
      <Counter/>
      </div>
  );
}

export default App;
