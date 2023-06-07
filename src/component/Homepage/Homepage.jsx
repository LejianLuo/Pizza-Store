import Scroller from "./Scroller";
import Menu from "./Menu";
import { useContext, useReducer } from 'react';
import { CartContext } from '../../App';

export default function Homapge(){

    return(
        <>
            <Scroller/>
            <Menu/>
        </>
    );
}