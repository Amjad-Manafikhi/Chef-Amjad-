import React from "react";
import ReactDOM from "react-dom";
import { PiPassword } from "react-icons/pi";

export default function Form(){
    function signUp(formData){
        let data=Object.fromEntries(formData);
        data.check=formData.getAll("check");
            
    }
    return(
        <section>
            
            <form action={signUp}>
                <label htmlFor="email">Email:   </label>
                <input id="email" type="email" name="email" placeholder="amjad@gmail.com" />
               
               
                <br />
                
                <label htmlFor="Password">Password:</label>
                <input id="Password" name="password" type="password"  />
                <input type="submit" />

               
                <textarea name="description" id="description" placeholder="this is"></textarea>
                
                
                
                <label htmlFor="amjad">
                    <input id="amjad" type="radio" defaultChecked={true} name="zxcv" value="1"/>
                    amjad
                </label>
                <label htmlFor="asdf">
                    <input id="asdf" type="radio" name="zxcv" value='2'/>
                        asdf
                </label>
                <label htmlFor="qwer">
                    <input id="qwer" type="radio" name="zxcv" value='3'/>
                    qwer
                </label>

                <label htmlFor="check">hi</label>
                <input type="checkbox" id="check" name="check" />
                <label htmlFor="check2">hello</label>
                <input type="checkbox" id="check2" name="check" />


                <label htmlFor="favColor"></label>
                <select id="favColor" name="favColor" defaultValue="choose color"required> 
                    <option disabled >choose color</option>
                    <option value="red">Red</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                    <option value="black">black</option>
                    <option value="white">white</option>
                    <option value="purple">purple</option>
                </select>
            </form>

        </section>


    )

}