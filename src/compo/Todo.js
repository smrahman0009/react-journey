import React,{useEffect,useState}from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
const Todo=()=>{
    const {id} = useParams();
    const [todoDtls,settodoDtls]=useState();
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res)=>{
            const responseTodos = res.data;
            settodoDtls(responseTodos);
        })
    },[])
    console.log(todoDtls);
    return(
        <div>
            {`This is todo page & id ${id}`}
        </div>
    )
}

export default Todo;