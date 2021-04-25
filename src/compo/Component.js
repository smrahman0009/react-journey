import React,{useState} from 'react';
import StateEx from './StateEx';
import PropEx from './PropEx';

const Component = ()=>{
    const usName = [
        {
            firstName:"Joe",
            lastName:"Biden"
        },
        {
            firstName:"Barak",
            lastName:"Obama"
        },
        {
            firstName:"Tom",
            lastName:"Honks"
        },
        {
            firstName:"Ronald",
            lastName:"Regan"
        }
    ]
   return (
        <div>
            <h2>React Examples</h2>
            <StateEx/>
            <br/>
            {
                usName.map((president)=>{
                    const {firstName,lastName} = president

                    return (
                        <PropEx firstName={firstName} lastName={lastName}/>
                    )
                })
            }
            {/* <PropEx firstName="Tom" lastName="Hanks"/>
            <PropEx firstName="Barak" lastName="Obama"/>
            <PropEx firstName="Joe" lastName="Biden"/>
            <PropEx firstName="Ronald" lastName="regan"/> */}
        </div>
        
    )
};

export default Component;
