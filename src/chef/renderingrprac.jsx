import React from "react";
import ReactDOM from "react-dom";

export default function RenderingPrac(){
    let x=[2,1];
    function cnt(){
        if(x.length===0)return "no unread message"
        else if(x.length===1)return"1 unread message"
        else return `${x.length} unread messages`
    }
    return(
        <div>
            
             <h1>{cnt()}</h1>
            
        </div>    
    )
}