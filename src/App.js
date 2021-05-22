import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Component from './compo/Component';
import './App.css';
import {useSelector} from "react-redux";

function App() {
  const counter = useSelector(state=>state.counter);
  return (
    <Router>
      <div className="App">
        <h1>
          counter: {counter}
        </h1>
      </div>
    </Router>
  );
}

export default App;
