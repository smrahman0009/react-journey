import logo from './logo.svg';
import React, { useEffect } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Counter from "./Counter";
import {useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux/ducks/user';

function App() {
  const count = useSelector((state)=>state.counter.count)
  const voterList = ["Talha Chowdhury","Anik Sarkar","Imam Azam","Sudipta Ranjan"]


  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUser())
  },[dispatch])

  const user = useSelector((state)=>(state.user.user))
  console.log(user)
  return (
      <div>
        <h1>Total Vote{count}</h1>
        {
          voterList.map(voter=>{
            return  <Counter name={voter}/>
          })
        }
       
      </div>
  );
}

export default App;
