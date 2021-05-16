import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const TodoCard=(props)=>{
  const {todo} = props
  const {id,title,completed} = todo;
  let history = useHistory();
  return(
    <div className="card text-center" onClick={()=>history.push(`/todo/${id}`)}>
      <div className="card-body">
      <div className="card-title">{`${title}`}</div>
      <p className="btn btn-success">{`completed: ${completed}`}</p>
      </div>
    </div>
  
  )
}

export default TodoCard;