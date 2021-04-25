import React,{useState} from 'react';

const StateEx = (props)=>{
    let [count,setCount] = useState(0)
   return (
        <>
            <p>This is State: {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
};

export default StateEx;