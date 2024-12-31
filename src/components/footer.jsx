import React from "react"
import ReactDOM from "react-dom"
import Linkedinlogo from "./LinkedIn-1.png"
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";


export default function Footer(){
    return(
        <div className="footer">
            
            <FaTwitterSquare color="grey" className="footericon" size={40}/>
            <FaFacebookSquare color="grey" className="footericon" size={40}/>
            <FaInstagramSquare color="grey" className="footericon" size={40}/>
            <FaSquareGithub color="grey" className="footericon" size={40} />

        </div>

    )
}