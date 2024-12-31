import React from "react"
import ReactDOM from "react-dom"
import marker from "../../public/marker.png"


export default function PlaceCards(props){
     
    return(
        <div className="container">
            <img className="basic" src={props.img.src} alt={props.img.a} />
            <div className="informContainter">
                <img className="marker" src={marker} alt="marker" width="50px"/>
                <h4>{props.country}</h4>
                <a href={props.googleMapsLink}> Vist on Google Maps</a>
                <h1>{props.title}</h1>
                <h3>{props.dates}</h3>
                <p>{props.text}</p>

            </div>
        </div>


    )
}
