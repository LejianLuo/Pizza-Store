import { PizzaContext } from "./CustomizePage"
import { useContext, useEffect, useState } from "react"

export default function IngredientGroup({options}){

    return(
        <div>
            {
                options.map(choice=>{
                    if(typeof choice === 'string')
                        return(<h1>{choice}</h1>)
                    else
                        return(<IngredientCard name={choice.name} image={choice.image} />)
                })
            }
        </div>
    )
}


function IngredientCard({name,image}){
    const [customPizza,setCustom]=useContext(PizzaContext);
    const [isActive,setActive]=useState();

    //loop through either option group or custom pizza, determine if name is present in option group
    function inOptionGroup(optionGroup,name){
        for(let index in optionGroup){
            if(typeof optionGroup[index] == "object" &&  optionGroup[index].includes(name))
                return true;
            else if(typeof  optionGroup[index] == "string" &&  optionGroup[index] === name)
                return true;
        }
        return false;
    }

    useEffect(()=>{setActive(inOptionGroup(customPizza,name))},[customPizza, name])

    function selectIngredient(name){
        //multi-select
        if(!customPizza.other.includes(name) && !inOptionGroup(optionGroup,name)){
            let newPizza={...customPizza}
            newPizza.other.push(name);
            setCustom(newPizza);
        }
        //multi-select
        else if(customPizza.other.includes(name)){
            let newPizza={...customPizza}
            newPizza.other=customPizza.other.filter(ingredient=>ingredient !== name);
            setCustom(newPizza);
        }
        //mutually-exclusive-select
        else if(inOptionGroup(optionGroup,name)){
            if(optionGroup.sizeGroup.includes(name)){
                let newPizza={...customPizza};
                newPizza.size=name;
                setCustom(newPizza);
            }
            else if(optionGroup.doughGroup.includes(name)){
                let newPizza={...customPizza};
                newPizza.dough=name;
                setCustom(newPizza);
            }
            else if(optionGroup.sauceGroup.includes(name)){
                let newPizza={...customPizza};
                newPizza.sauce=name;
                setCustom(newPizza);
            }

        }

    }

    //set css by active status
    const active="w-[200px] border-green-300 border-[5px] duration-1000";
    const inactive="w-[100px] border-0 duration-1000";
    function setActiveState(){
        if(isActive)
            return active;
        else
            return inactive;
    }


    return(
        <div onClick={()=>{selectIngredient(name)}} className={setActiveState()}>
            <h1>{name}</h1>
            <img src={image} alt='img'/>
        </div>
    )
}

const optionGroup={
    sizeGroup:["Small","Medium","Large"],
    doughGroup:["Regular Dough","Thin Dough","Thick Dough"],
    sauceGroup:["Italian Sauce","Buffalo Sauce","Hot Sauce"]
}

