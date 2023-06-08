import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useContext, useReducer } from 'react';
import { CartContext } from '../../App';
import { PizzaContext } from "./CustomizePage"
import { Link } from 'react-router-dom';

export default function CostomizePageTitle({pizzaName}){
    const [pizzaCount,dispatch]=useReducer(pizzaNumReducer,1);
    const [cartItems,setCart]=useContext(CartContext);
    const [customPizza,setCustom]=useContext(PizzaContext);


    function addToCart(){
        let newItem={};
        newItem.name=pizzaName;
        newItem.price=customPizza.price*pizzaCount;
        newItem.detail={...customPizza};
        newItem.detail.other=[...customPizza.other];
        newItem.count=pizzaCount;
        newItem.isPizza=true;
        setCart([...cartItems,newItem]);
    }   

    return (
        <div className='p-[20px]'  style={{backgroundImage:`url('https://www.kingsframingandartgallery.com/media/catalog/product/cache/bf2ffa7ce88e2fc231b3030e2652dbad/w/h/whiite-sq.jpg')`}}>
             <Link className="text-red-950 text-lg" to='/'>Back To Homepage</Link>
             <div className='flex flex-col text-center items-center'>
                <h1 className=" my-[25px] text-red-950 text-3xl">{pizzaName}</h1>
                <img  className="h-[300px] rounded-full" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRS1xGXkNmNYh-l-aTDbjcx00wOgkh2agXBkvkRlfQg75CQyiat" alt='img'/>
                <div className='flex flex-col items-center my-[25px]'>
                    <div className='flex text-red-950 text-3xl items-center'>
                        <RemoveCircleOutlineIcon onClick={()=>dispatch({type:'remove'})}/>
                        <h1  className='mx-[5px]'>{pizzaCount}</h1>
                        <AddCircleOutlineIcon onClick={()=>dispatch({type:'add'})}/>
                        <h1 className='mx-[30px]'>${customPizza.price*pizzaCount}</h1>
                    </div>
                    <button onClick={addToCart} className='text-gray-100 bg-orange-700 px-[35px] p-[10px] rounded mt-[20px]'>ADD TO CART</button>
                </div>
            </div>
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