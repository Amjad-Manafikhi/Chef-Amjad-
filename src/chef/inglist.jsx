
import AddIng from "./adding"

export default function IngList(props){
    
    console.log("IngList")
    const elementsIng= props.ingredients.map(
        (name ,index) => <AddIng key={index} ingName={name}/>
    )


    return(
        <div>

            {elementsIng.length > 0 && <h2>Ingredients on hand:</h2>}
            <ul>
                {elementsIng}
            </ul>
        </div>

    )
}