import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useContext, useReducer } from 'react';
import { CartContext } from '../../App';
import { PizzaContext } from "./CustomizePage"

export default function CostomizePageTitle({pizzaName}){
    const [pizzaCount,dispatch]=useReducer(pizzaNumReducer,1);
    const [cartItems,setCart]=useContext(CartContext);
    const [customPizza,setCustom]=useContext(PizzaContext);


    function addToCart(){
        let newItem={};
        newItem.name=pizzaName;
        newItem.price=customPizza.price*pizzaCount;
        newItem.detail=customPizza;
        newItem.count=pizzaCount;
        setCart([...cartItems,newItem]);
    }   
    

    return (
        <div >
            <h1>{pizzaName}</h1>
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRS1xGXkNmNYh-l-aTDbjcx00wOgkh2agXBkvkRlfQg75CQyiat" alt='img'/>
            <div className='flex'>
                <div className='flex'>
                    <RemoveCircleOutlineIcon onClick={()=>dispatch({type:'remove'})}/>
                    <h1>{pizzaCount}</h1>
                    <AddCircleOutlineIcon onClick={()=>dispatch({type:'add'})}/>
                </div>
                <h1>{customPizza.price*pizzaCount}</h1>
            </div>
            <button onClick={addToCart}>ADD TO CART</button>
        </div>
    )
}
function pizzaNumReducer(count,{type}){
    switch(type){
        case 'remove':{
            if(count>1)
                return --count;
                
            else
                return count;
        }
        case 'add':
            return ++count;
        default:
            return count;
    }

}