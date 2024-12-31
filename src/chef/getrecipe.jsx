import React from "react";
import ReactDOM from "react-dom";
import "./getrecipe.css"
import  ClaudeRecipe from "./clauderecipe"


export default function GetRecipe(props){

    console.log("GetRecipe");

    return(
        <div>

            <div className="submitContainer">
                <div className="submitDiv">
                    <h3>Ready for a recipe?</h3>
                    <p className="submitPara">Generate a recipe from your list of ingredients.</p>
                </div >    
                <button className="submitButton" onClick={() => props.handle()}>Get a recipe</button>
            </div>
                {props.isRecipeShown && <ClaudeRecipe ingredients={props.ingredients} />}

            
        </div>
    )
}