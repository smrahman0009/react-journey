import React,{useState} from 'react';

const PropEx = (props)=>{
    const {firstName,lastName,middleName} = props
   return (
        <> 
            <p>{`This is Prop: ${firstName} ${lastName}`}</p>
        </>
        
    )
};

export default PropEx;