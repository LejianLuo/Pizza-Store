import Ingredient from "./Ingredient.json"
import { createContext, useState } from "react";
import IngredientGroup from "./IngredientGroup";
import Preset from "./Preset.json"
import { useParams } from "react-router-dom";
import CostomizePageTitle from "./CostomizePageTitle";

export const PizzaContext=createContext();

export default function CustomizePage(){
    const {id}=useParams();
    const [customPizza,setCustom]=useState(Preset[id]);
    
    return(
        <>
        <PizzaContext.Provider value={[customPizza,setCustom]}>
            <CostomizePageTitle pizzaName={id}/>
            <CustSelect options={Ingredient}/>
        </PizzaContext.Provider> 
        </>

    );
}

function CustSelect({options}){


    const [selected,optSelect]=useState({type:"Size",content:options.Size});
    let optionList=[];
    for(let key in options){
        optionList.push({type:key,content:options[key]});
    }

    const select=(option)=>{
        let newOption={
            type: option.type,
            content:option.content
        }
        optSelect(newOption)
    }

    return (

        <div className="flex">
            {optionList.map(option=>{
            return(
                <div> 
                    {option.type===selected.type ? (<button className="bg-green-500" onClick={()=>select(option)}>{option.type}</button>) : 
                    (<button onClick={()=>select(option)} >{option.type}</button>)}
                </div>
            );
            })}
            <section>
                <IngredientGroup options={selected.content}/>
            </section>
        </div>
    );
}


