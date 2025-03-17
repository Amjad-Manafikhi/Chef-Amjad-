import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import { getRecipeFromMistral } from "./ai";

export default function ClaudeRecipe(props) {
    const [response, setResponse] = useState("");
    const ingredients=props.ingredients;
     

    useEffect(() => {
       
        setResponse(undefined)
        async function fetchRecipe() {
            
            const result = await getRecipeFromMistral(ingredients);
            setResponse(result); // Set the response state
        }
        
        if (ingredients && ingredients.length > 0) {
            fetchRecipe();
        }
    }, [ingredients]); // Re-run the effect when `ingredients` changes0


   React.useEffect( () => {
        if(props.ref!==null) props.ref.current.scrollIntoView({behavior:"smooth"});    
   },[response])
        


    


   /* const [starWarsData,setStarWarsData]=React.useState({});
    const [count ,setCount]=React.useState(1);
    React.useEffect(()=>{ 
        let s="";
        fetch()
        .then(res =>res.json)
        .then(data => setAnswer)
    }, [count]);


    React.useEffect( () => {
        function handleWidth(){
            setWidth(this.window.innerWidth);
        } 
        window.addEventListener('resize',handleWidth)
         return () => {
         window.removeEventListener("resize", handleResize);
         };
    },[window,innerWidth])*/


    

    return (
        <section ref= {props.ref} >
            {response ? (
                <ReactMarkdown >{response}</ReactMarkdown>
            ) : (
                <p>Loading recipe...</p>
            )}
        </section>
    );
}
