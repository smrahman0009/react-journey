import React from "react";
import { useDispatch} from "react-redux";
import { decrement, increment } from "./redux/ducks/counter";

const Counter=()=>{
    
    const dispatch = useDispatch()
    const handleIncrement=()=>{
       dispatch(increment()) 
    }
    const hadndleDecrement=()=>{
       dispatch(decrement())
    }
    return (
        <div style={{ backgroundColor: "grey", margin: "10px" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={handleIncrement}> Increment </button>
            <button onClick={hadndleDecrement}> Decrement </button>
          </div>
        </div>
      );
}

export default Counter;