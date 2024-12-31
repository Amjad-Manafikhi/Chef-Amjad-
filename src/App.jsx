
import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/navbar.jsx'
import Base from './components/base.jsx'
import Footer from './components/footer.jsx'
import PlaceCards from './components/placecards.jsx'
import pCards from './components/data.js'
import ChefNav from './chef/chefnav.jsx'
import ChefMain from './chef/chefmain.jsx'
import StateTest from './chef/statetest.jsx'
import Form from './chef/form.jsx'
import RenderingPrac from './chef/renderingrprac.jsx'
import GetRecipe from './chef/getrecipe.jsx'
import pads from "./pads.js"
import { BiFontSize } from 'react-icons/bi'
import ClaudeRecipe from './chef/clauderecipe.jsx'
import "./pad.css"
import "./index.css"
import "./chef/chefmain.css"
import "./chef/chefnav.css"
import "./chef/getrecipe.css"
import "./placeCards.css"
import { VITE_HF_API_TOKEN } from './chef/env.js'



export default function App() {
  
  const elementPCards = pCards.map((pcard) => (
    <PlaceCards
      key={pcard.id}
      img={pcard.img}
      title={pcard.title}
      country={pcard.country}
      googleMapsLink={pcard.googleMapsLink}
      dates={pcard.dates}
      text={pcard.text}
    />
  ));
  const [p,setP]=React.useState(pads);

  function toggle(id){
    setP((pa) => pa.map((prev) => {
      
      
        return prev.id===id ? {...prev,on:!prev.on}: prev 
    }
      
 
    
  )
)
  }
  
  const butArr = p.map((prev) => {
    
    return(
  
      <button onClick={()=> toggle(prev.id)} key={prev.id} color={prev.color} style={{backgroundColor:prev.color}} className={prev.on ? "on" :undefined}>amjad</button>)}

    )   


    const [isRecipeShown , setIsRecipeShown]=React.useState(false);
    const [arrSize , setArrSize]=React.useState(0);

    function handleGetRecipe(){
        setIsRecipeShown(true);
      }
      function ingNumber(number,result){
        
        number=Math.min(number,3);
        setArrSize(number);
        setAiResponse(result);
      }
      
      const [aiResponse , setAiResponse] =React.useState();
    
      

 
  return (
    <div className="cardContainer" >
      <ChefNav />
      <div className='page'>
        <ChefMain size={arrSize} handle={ingNumber} arrSize={arrSize} isRecipeShown={isRecipeShown} handleGetRecipe={handleGetRecipe}/>
        
        
        
      </div>
      
      
      

      


    </div>
    
  );
}

