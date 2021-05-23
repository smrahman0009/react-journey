import React from "react";
import { useDispatch} from "react-redux";
import { decrement, increment } from "./redux/ducks/counter";

const Counter=(props)=>{
    const {name} = props
    const [vote,setVote] = React.useState(0)
    const dispatch = useDispatch()
    const handleIncrement=()=>{
       dispatch(increment())
        setVote(vote+1)
    }
    const hadndleDecrement=()=>{
       dispatch(decrement())
       setVote(vote-1)
    }
    return (
        <div style={{ backgroundColor: "grey", margin: "10px",alignItems:"center"}}>
            <h1 style={{marginLeft:"30%"}}>{name}</h1>
            <h2 style={{marginLeft:"30%"}}>vote:{vote}</h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={handleIncrement}> Increment </button>
            <button onClick={hadndleDecrement}> Decrement </button>
          </div>
        </div>
      );
}

export default Counter;