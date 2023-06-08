import { useContext, useEffect, useRef, useState} from 'react';
import { CartContext } from '../App';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Link } from 'react-router-dom';

export default function Cart(){
    const [cartItems,setCart]=useContext(CartContext);
    const [totalPrice,setTotalPice]=useState(0);

    const shown='lg:w-[300px] w-screen h-[400px] overflow-y-auto overflow-x-hidden bg-gray-300 duration-500 ';
    const hidden='w-0 h-0 duration-500';
    const upArrow='-rotate-90 inline-block duration-500 mr-[10px] cursor-pointer'
    const downArrow='rotate-90 inline-block duration-500 mr-[10px] cursor-pointer'

    const cart=useRef();
    const arrow=useRef();
   
    function showCart(){
        if(cart.current.className===hidden){
            cart.current.className=shown;
            arrow.current.className=downArrow;
            console.log(arrow)
        }
        else if(cart.current.className===shown){
            cart.current.className=hidden;
            arrow.current.className=upArrow;
            console.log(arrow)
        }
    }

    function removeItem(cartIndex){
        setCart(cartItems.filter((item,arrayIndex)=>{
            if(arrayIndex!==cartIndex)
                return item;
            else{
                return;
            } 
        }))
    }

    useEffect(()=>{
        let price=0;
        cartItems.forEach(item=>{price=price+item.price})
        setTotalPice(price);        
    },[cartItems]);

    return(
        <div className="fixed bottom-0 lg:right-[200px] z-10 bg-white rounded-2xl border-orange-600 border-1">

            <div onClick={showCart} className='lg:w-[300px] w-screen h-[30px] flex justify-between bg-orange-600 text-slate-100 rounded border-orange-600 cursor-pointer'>
                {totalPrice===0 ? (<strong className='ml-[10px]'>Empty Cart</strong>) : (<strong className='ml-[10px]'>Total: ${totalPrice}</strong>)}
                <strong ref={arrow} className={upArrow}>{">"}</strong>
            </div>

            <section ref={cart} className={hidden}>
                {cartItems.map((item,index)=>{
                    return(
                        <CartItem key={index} item={item} cartIndex={index} remove={removeItem}/>
                    )
                })}
                {totalPrice>0 && <div className="sticky bottom-0 bg-orange-500 text-center text-slate-100 h-[30px] mt-[5px]">
                    <Link  to="/checkout">CHECKOUT</Link>
                </div>}
            </section>
        </div>
    )
}   

export function CartItem({item,cartIndex,remove}){

    return(
    <div>
        {item.isPizza && 
        <div className="bg-slate-100 border-2 rounded-xl text-center text-red-950 font-thin">
            <h1 className="font-bold mb-[15px]">{item.name}</h1>
            <p className='text-xs mb-[15px]'>{item.detail.size+', '+item.detail.sauce+', '+item.detail.dough+', '+item.detail.other}</p>                       
            <div className="flex justify-around">
                <strong>Count: {item.count}</strong>
                <strong>Price: ${item.price}</strong>
                <div className='cursor-pointer' onClick={()=>{remove(cartIndex)}}>
                    <RemoveCircleOutlineIcon/>
                    <span>remove</span>           
                </div>
            </div>
        </div>} 
        {!item.isPizza && 
        <div className="bg-slate-100 border-2 rounded-xl text-center text-red-950 font-thin">
            <h1 className="font-bold mb-[15px]">{item.name}</h1>                      
            <div className="flex justify-center">
                <strong className='mr-[20px]'>Price: ${item.price}</strong>
                <div className='cursor-pointer' onClick={()=>{remove(cartIndex)}}>
                    <RemoveCircleOutlineIcon/>
                    <span>remove</span>         
                </div>  
            </div>
        </div>
        }
    </div>
    )
}