import { Link } from "react-router-dom";
import { useContext} from 'react';
import { CartContext } from '../../App';

export default function FoodCard({food}){
    const [cartItems,setCart]=useContext(CartContext);

    function addToCart(){
        let newItem={};
        newItem.name=food.name;
        newItem.price=food.price;
        newItem.isPizza=false;
        setCart([...cartItems,newItem]);
    }   
    
    return(
        <div className="flex flex-col md:grid grid-rows-1 grid-cols-3 md:w-[650px] lg:w-[800px] w-[300px] md:h-[200px] mx-auto bg-slate-200 mb-[20px] rounded-2xl">
           <img className='col-span-1 h-[150px] w-[150px] rounded-2xl self-center justify-self-center' src={food.image} alt="img"/>
           <article className='col-start-2 col-end-4 bg-slate-100 rounded-xl p-[20px] text-red-950'>
                <h1 className=" mb-[10px] text-xl">{food.name}</h1>
                <p className='mb-[30px] text-xs font-thin'>{food.description}</p>
                <div className='flex justify-around items-baseline'>
                    {food.customizable ? (<h1>Starting from ${food.price}</h1>) : (<h1>Price: ${food.price}</h1>)}
                    {food.customizable ? ( <Link to={`/pizza/${food.name}`} className='text-gray-100 bg-orange-700 px-[30px] p-[10px] rounded-xl'>Customize</Link>) : (<button className='text-gray-100 bg-orange-700 px-[30px] p-[10px] rounded-xl' onClick={addToCart}>Add</button>)}
                </div>
           </article>
        </div>
    );
    
}