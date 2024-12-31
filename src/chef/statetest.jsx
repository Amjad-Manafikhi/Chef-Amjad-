import React from "react";
import ReactDOM from "react-dom";

export default function StateTest(){
    let isgo=0;
    const [value,setValue]=React.useState([]);
    function change(){
        setValue(value => [...value,"test"]);
        
        
        
    }
   
    

    return(
        <div>
            <button onClick={change}>yes</button>
        </div>
    )
}