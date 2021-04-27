import React,{useState} from 'react';

const employee = {
    name:"donald",
    age:"13",
    height:"68",
    address:{
        country:"USA",
        city:"CAL",
        zone:{
            name:"garden_",
            area:"garden_aera"
        }
    }
}

export default function DestEx(){
    const {city:employeeCity} =  employee.address
  return(
      <div>
          <p>{employeeCity}</p>
      </div>
  );
};