import { useContext,useEffect, useState} from 'react';
import { CartContext } from '../../App';
import {CartItem} from '../Cart'
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Checkout(){
    const [cartItems,setCart]=useContext(CartContext);
    const [totalPrice,setTotalPice]=useState(0);

    function removeItem(cartIndex){
        setCart(cartItems.filter((item,arrayIndex)=>{
            if(arrayIndex!==cartIndex)
                return item;
            else{
                return;
            } 
        }))
    }

    function clearCart(){
        setCart([]);
    }

    useEffect(()=>{
        let price=0;
        cartItems.forEach(item=>{price=price+item.price})
        setTotalPice(price);        
    },[cartItems]);

    return(
        <>
            <div class=' mx-[30px] md:mx-[80px]'>
                <div className='flex justify-around h-[100px] items-center'>
                    <Link className="text-red-950 text-xs md:text-base lg:text-lg"to='/'>Back To Homepage</Link>
                    <h1 className='text-red-950 text-base md:text-2xl lg:text-4xl'>Review Cart</h1>
                    <h1 className='text-red-950 text-xs md:text-base lg:text-lg'>Total Price: ${totalPrice}</h1>
                </div>
                <section>
                    {cartItems.map((item,index)=>{
                        return(
                            <CartItem key={index} item={item} cartIndex={index} remove={removeItem}/>
                        )
                    })}
                </section>
            </div>
            <div className='mx-[80px]'>
                <h1 className='text-center text-red-950 text-base md:text-2xl lg:text-4xl my-[50px]'>Payment Option</h1>
                <section className='mx-[10px] md:mx-[20px] lg:mx-[80px] flex flex-wrap gap-[5px] md:grid grid-row-2 grid-col-3 md:gap-[20px]'>
                    <TextField className='row-start-1 row-end-2 col-start-1 col-end-2' label="Name on card" variant="standard" />
                    <TextField className='row-start-1 row-end-2 col-start-3 col-end-4' label="Phone" variant="standard" />

                    <TextField className='row-start-1 row-end-2 col-start-2 col-end-3' label="Card number" variant="standard" />
                    <TextField className='w-[100px]' label="CVV" variant="standard" />
                    <TextField className='w-[150px]' label="Expiration date" variant="standard" />
                </section>
                <div className="text-center block my-[100px]">
                    <Link onClick={clearCart} className='text-gray-100 bg-orange-700 px-[50px] md:px-[150px] p-[10px] rounded' to="/final">Pay</Link>
                </div>
            </div>
        </>
    );
}