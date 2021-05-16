import React,{useState} from 'react';
import {Switch,Route} from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Todos from './Todos';
import Todo from './Todo';

const Component=()=>{
   return (
        <>
            <Switch>
                <Route exact path="/" children={<Todos/>}/>
                <Route path="/todo/:id" children={<Todo/>}/>
            </Switch>
        </>
    )
};

export default Component;
