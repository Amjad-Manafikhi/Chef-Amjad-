import React from "react"
import ReactDOM from "react-dom"
import maillogo from "./mail-01.png"
import Linkedinlogo from "./LinkedIn-1.png"



export default function Cards(props){
        let image=props.image;
        let name=props.name;
        let number=props.number;
        let email=props.email
        let age=props.age;
    return(
        <div className="container">
            <img src ={image} />
            <h2>{name !="amjad" && name}</h2>
            <p>{number}</p>
            <p>{email}</p>
            <p>{age}</p>
        </div>
    )
}