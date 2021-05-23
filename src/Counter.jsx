import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/ducks/counter";

const Counter=()=>{
    
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
    const handleIncrement=()=>{
       dispatch(increment()) 
    }
    const hadndleDecrement=()=>{
       dispatch(decrement())
    }
    return (
        <div style={{ backgroundColor: "grey", margin: "10px" }}>
          <h2>{`Count: ${count}`}</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={handleIncrement}> Increment </button>
            <button onClick={hadndleDecrement}> Decrement </button>
          </div>
        </div>
      );
}

export default Counter;