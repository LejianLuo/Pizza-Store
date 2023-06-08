import Scroller from "./Scroller";
import Menu from "./Menu";
import { useContext, useReducer } from 'react';
import { CartContext } from '../../App';

export default function Homapge(){

    return(
        <>
            <h1 className='text-center text-amber-900 text-4xl my-[35px]'>FEATURED SPECIALS</h1>
            <Scroller/>
            <Menu/>
        </>
    );
}