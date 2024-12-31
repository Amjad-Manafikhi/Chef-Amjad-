import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import { getRecipeFromMistral } from "./ai";

export default function ClaudeRecipe({ ingredients }) {
    const [response, setResponse] = useState("");
    console.log(ingredients);

    useEffect(() => {
        async function fetchRecipe() {
            console.log("Fetching recipe...");
            const result = await getRecipeFromMistral(ingredients);
            setResponse(result); // Set the response state
        }
        
        if (ingredients && ingredients.length > 0) {
            fetchRecipe();
        }
    }, [ingredients]); // Re-run the effect when `ingredients` changes

    return (
        <section>
            {response ? (
                <ReactMarkdown>{response}</ReactMarkdown>
            ) : (
                <p>Loading recipe...</p>
            )}
        </section>
    );
}
