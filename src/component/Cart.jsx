import { useContext, useEffect, useReducer, useState } from 'react';
import { CartContext } from '../App';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export default function Cart(){
    const [cartItems,setCart]=useContext(CartContext);

    return(
        <div>
            {cartItems.map(item=>{
                return(
                    <div>
                        <h1>{item.name}</h1>
                        <p>{item.detail.size+', '+item.detail.sauce+', '+item.detail.dough+', '+item.detail.other}</p>                       
                        <div>
                            <strong>{item.count}</strong>
                            <strong>{`$${item.count*item.price}`}</strong>
                            <RemoveCircleOutlineIcon/>
                            <span>remove</span>           
                        </div>
                    </div>
                )
            })}
            {console.log(cartItems)}
            
        </div>
    )
}

