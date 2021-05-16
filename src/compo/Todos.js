import React,{useEffect,useState} from 'react';
import axios from "axios";
import Todo from './Todo';
import TodoCard from './TodoCard';

const Todos=()=>{
    const [todos,setTodos]=useState();
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res)=>{
            const responseTodos = res.data;
            setTodos(responseTodos);
        })
    },[])
    console.log(todos)
    return(
        <>
            {
                todos ? 
                (
                    todos.slice(0,10).map((todo)=>{
                       return (
                           <div className="col-md-3 col-md-4 col-sm-6">
                                <TodoCard todo={todo}/>
                           </div>
                       )
                    })
                )
                :
                (
                    <h1>Not render yet</h1>
                )
            }
        </>
    )
}

export default Todos;