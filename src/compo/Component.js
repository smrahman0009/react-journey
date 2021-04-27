import React,{useState} from 'react';
import StateEx from './StateEx';
import PropEx from './PropEx';
import DestEx from './DestEx';

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
            {/* -----------------__State__Example__-------------- */}
            {/* <StateEx/> */}
            {/* -------------------__End__State__Example__------------- */}
            {/* ----------------__Prop__Example__-------------- */}
            {
                // usName.map((president)=>{
                //     const {firstName,lastName} = president

                //     return (
                //         <PropEx firstName={firstName} lastName={lastName}/>
                //     )

                // })
            }
           {/* --------------------__End_Prop__Example__------------------- */}
            {
               
                <DestEx/>
            }
        </div>
        
    )
};

export default Component;
