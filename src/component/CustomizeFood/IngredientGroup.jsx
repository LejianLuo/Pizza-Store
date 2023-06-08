import { PizzaContext } from "./CustomizePage"
import { useContext, useEffect, useState } from "react"

export default function IngredientGroup({options}){
    
    return(
        <div className='flex flex-wrap justify-center my-[100px] lg:w-[800px] md:w-[600px] w-[330px] mx-auto gap-[10px]'>
            {options.map(choice=>{
                    if(typeof choice === 'string')
                        return(<h1 className='lg:w-[800px] md:w-[600px] w-[330px] h-[50px] text-center p-[50px] text-xl text-green-600 font-thin'>{choice}</h1>)
                    else
                        return(<IngredientCard name={choice.name} image={choice.image} />)
            })}
        </div>
    )
}


function IngredientCard({name,image}){
    const [customPizza,setCustom]=useContext(PizzaContext);
    const [isActive,setActive]=useState();
    
    useEffect(()=>{setActive(inOptionGroup(customPizza,name))},[customPizza, name])

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

    function selectIngredient(name){
        //multi-select inactive->active
        if(!customPizza.other.includes(name) && !inOptionGroup(optionGroup,name)){
            let newPizza={...customPizza}
            newPizza.other.push(name);
            setCustom(newPizza);
        }
        //multi-select active->inactive
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
    const active="w-[250px] h-[150px] border-green-600 border-2 duration-500 flex flex-col justify-center items-center rounded-xl";
    const inactive="w-[220px] h-[150px] border-0 duration-500  flex flex-col justify-center items-center rounded-xl";
    function setActiveState(){
        if(isActive)
            return active;
        else
            return inactive;
    }


    return(
        <div onClick={()=>{selectIngredient(name)}} className={setActiveState()}  style={{backgroundImage:`url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/job267-eye-01-03.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=506f456d3399a0a99bdb762d55c706ef')`}}>
            <h1>{name}</h1>
            <img className='w-[100px] h-[100px] border-4 border-grey-500 rounded-full' src={image} alt='img'/>
        </div>

    )
}

const optionGroup={
    sizeGroup:["Small","Medium","Large"],
    doughGroup:["Regular Dough","Thin Dough","Thick Dough"],
    sauceGroup:["Italian Sauce","Buffalo Sauce","Hot Sauce"]
}

