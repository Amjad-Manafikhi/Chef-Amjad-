import React from "react"
import ReactDOM from "react-dom"
import "./chefmain.css"
import AddIng from  "./adding.jsx"
import GetRecipe from  "./getrecipe.jsx"
import IngList from  "./inglist.jsx"
//import { getRecipeFromMistral } from "./ai"


export default function ChefMain (props) {
    
    const [formClass,setFormClass]=React.useState();
    const [ingredients,setIngredients]=React.useState([]);
    
    
    function handleNewingredient(formData){
        let ingredientName=formData.get("ingredient");
        if(ingredientName.length===0){setFormClass({borderColor:"red"}) }
        else {
            setFormClass({borderColor:"black"})
        setIngredients(() => [...ingredients,ingredientName]);
        props.handle(ingredients.length+1/*,getRecipeFromMistral(ingredients)*/)
        }
        
    }

    
    
    
    
    return (
        <main>
            <form action={handleNewingredient} >
                <input 
                    style={formClass}
                    aria-label="Add ingredient"
                    type="text"
                    placeholder="e.g. flour"
                    name="ingredient"
                     pattern=".*\S.*"
                     
                    />
                <button className="addButton" >+ <span>Add ingredient</span></button>
            </form>
            <IngList ingredients={ingredients}/>
            {props.arrSize >2 && <GetRecipe handle={props.handleGetRecipe} isRecipeShown={props.isRecipeShown} ingredients={ingredients}/>}
             

             


          
        
        </main>


    )

}