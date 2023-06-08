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
    const active='bg-green-600 text-white lg:w-[200px] md:w-[150px] w-[90px] h-[90px] rounded-full'
    const inactive='lg:w-[200px] md:w-[150px] w-[90px] h-[90px] text-gray-500'

    const [selected,optSelect]=useState({type:"Size",content:options.Size});

    //get the keys from object
    let optionList=[];
    for(let key in options){
        optionList.push({type:key,content:options[key]});
    }

    //select an option
    const select=(option)=>{
        let newOption={
            type: option.type,
            content:option.content
        }
        optSelect(newOption)
    }

    return (
        <>
            <div className="mt-[30px] flex justify-center bg-gray-200 w-fit h-fit mx-auto items-center justify-around rounded-full border-green-500 border-2">
                {optionList.map(option=>{
                return(
                    <div> 
                        {option.type===selected.type ? (<button className={active} onClick={()=>select(option)}>{option.type}</button>) : 
                        (<button className={inactive} onClick={()=>select(option)} >{option.type}</button>)}
                    </div>
                );
                })}
            </div>

            <section>
                <IngredientGroup options={selected.content}/>
            </section>
        </>
    );
}


