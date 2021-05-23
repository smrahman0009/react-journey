import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Counter from "./Counter";
import { Provider } from 'react-redux';

function App() {
  return (
    <Router>
      <Counter/>
     </Router>
  );
}

export default App;
