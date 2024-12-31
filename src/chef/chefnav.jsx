import React from "react"
import ReactDOM from "react-dom"
import chefClaudeLogo from "../../public/chef-claude-icon.png"
import "./chefnav.css"
export default function ChefNav(){
    console.log("Nav");
    return (
        <div className="navTitle">
            <img src={chefClaudeLogo}/>
            <h1>Chef Amjad</h1>
        </div>


    )
}