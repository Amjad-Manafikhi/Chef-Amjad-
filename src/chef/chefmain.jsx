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
    const [unvalid,setUnvalid]=React.useState("e.g. flour");
    
    
    function handleNewingredient(formData){
        let ingredientName=formData.get("ingredient");
        if(ingredientName.length===0||ingredientName==="you can't submit an empty label"){setFormClass({borderColor:"rgb(200, 0, 0)"}) ;setUnvalid("you can't submit an empty label"); }
        else {
            setFormClass({borderColor:"black"})
            setUnvalid("e.g. flour");
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
                    placeholder={unvalid}
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