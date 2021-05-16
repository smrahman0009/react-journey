import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Component from './compo/Component';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
         <div className="container-fluid" style={{backgroundColor:"#a9f1df",}}>
            <div className="row" style={{backgroundColor:"#1eae98"}}>
               <Component/>
            </div>
          </div>
      </div>
    </Router>
  );
}

export default App;
