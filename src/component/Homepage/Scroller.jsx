import {  useEffect, useReducer,  useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";
/*
guides for scrollers
https://www.youtube.com/watch?v=SK9AlIbexOE
https://www.youtube.com/watch?v=XJSOgV4VELk&t=469s  
https://www.youtube.com/watch?v=tXlZCW26bto&t=583s
*/
function scrollerReducer(index,{type,ads,indexId}){
    switch(type){
        case('left'):
            if(index>0)
                index--;
            else    
                index=ads.length-1
            return index;
        case('right'):
            if(index<ads.length-1)
                return ++index;
            else
                index=0;
            return index;
        case('dot'):
            index=indexId;
            return index;
        default:
            return index;
    }
}


export default function Scroller(){
    const [index,dispatch]=new useReducer(scrollerReducer,0);

    return(
        <>
        <div className="flex items-center justify-center">
            <div className='text-center'>
                <ArrowBackIosIcon onClick={()=>{dispatch({type:'left',ads:ads})}}/>
            </div>
            <div className="overflow-hidden">
                {ads[index]}
            </div>
            <div className='text-center'>
                <ArrowForwardIosIcon onClick={()=>{dispatch({type:'right',ads:ads})}}/>
            </div>
        </div>
        <div className="justify-center flex">
            {ads.map((ad,adIndex)=>(<Dot index={index} dispatch={dispatch} dotIndex={adIndex}/>))}
        </div>
        </>
    );
}

function Dot({index,dispatch,dotIndex}){
    const dotInactive="text-gray-300 text-7xl hover:text-orange-400 cursor-pointer"
    const dotActive="text-7xl text-orange-400 cursor-pointer"
    const [dotState,setActive]=useState(dotInactive);
    
    useEffect(()=>{
        if(index===dotIndex)
        setActive(dotActive)
        else
        setActive(dotInactive)
    },[dotIndex, index])

    return(<h1 onClick={()=>{
        dispatch({type:'dot',indexId: dotIndex})}} className={dotState}>.</h1>)
}


const adOne=(
    <div key={1} className="flex md:flex-row flex-col justify-center animate-fadeIn" >
        <img className="lg:w-[550px] w-[350px] md:h-[360px] h-[200px]" src="https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*" alt="ad1"/>
        <div className="lg:w-[550px] w-[350px] p-[30px] text-red-950 bg-gray-200">
            <h1 className="lg:text-5xl text-2xl">UL TIMATE PEPPERONI</h1>
            <h5 className='my-[10px] text-sm font-thin'> sed condimentum turpis pulvinar porttitor. Nulla dapibus leo enim, at fringilla enim porta eget.</h5>
            <h1 className="lg:text-5xl text-2xl my-[10px]">$14</h1>
            <button className='text-gray-100 bg-orange-700 p-[20px] mt-[20px] rounded-xl'><Link to='/pizza/PEPPERONI'>Order Now</Link></button>
        </div>
    </div>
);
const adTwo=(
    <div key={2} className="flex md:flex-row flex-col justify-center animate-fadeIn" >
        <img className="lg:w-[550px] w-[350px] md:h-[360px] h-[200px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg" alt="ad2"/>
        <div className="lg:w-[550px] w-[350px] p-[30px] text-red-950 bg-gray-200">
            <h1 className="lg:text-5xl text-2xl">SUPREME</h1>
            <h5 className='my-[10px] text-sm font-thin'> sed condimentum turpis pulvinar porttitor. Nulla dapibus leo enim, at fringilla enim porta eget.</h5>
            <h1 className="lg:text-5xl text-2xl my-[10px]">$16</h1>
            <button className='text-gray-100 bg-orange-700 p-[20px] mt-[20px] rounded-xl'><Link to='/pizza/HAWAII PIZZA'>Order Now</Link></button>
        </div>
    </div>
);
const adThree=(
    <div key={3} className="flex md:flex-row flex-col justify-center animate-fadeIn" >
        <img className="lg:w-[550px] w-[350px] md:h-[360px] h-[200px]" src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-05-Fried-Chicken-Sandwich%2Fchicken-sandwich-4" alt="ad3"/>
        <div className="lg:w-[550px] w-[350px] p-[30px] text-red-950 bg-gray-200">
            <h1 className="lg:text-5xl text-2xl">CHICKEN SANDWICH</h1>
            <h5 className='my-[10px] text-sm font-thin'> sed condimentum turpis pulvinar porttitor. Nulla dapibus leo enim, at fringilla enim porta eget.</h5>
            <h1 className="lg:text-5xl text-2xl my-[10px]">$10</h1>
            <button className='text-gray-100 bg-orange-700 p-[20px] mt-[20px] rounded-xl'><Link to='/menu/chicken'>Order Now</Link></button>
        </div>
    </div>
);
const adFour=(
    <div key={4} className="flex md:flex-row flex-col justify-center animate-fadeIn" >
        <img className="lg:w-[550px] w-[350px] md:h-[360px] h-[200px]" src="https://hips.hearstapps.com/hmg-prod/images/poutine-1672765911.jpg?crop=1xw:0.8439122908251587xh;center,top&resize=1200:*" alt="ad4"/>
        <div className="lg:w-[550px] w-[350px] p-[30px] text-red-950 bg-gray-200">
            <h1 className="lg:text-5xl text-2xl">POUTINE</h1>
            <h5 className='my-[10px] text-sm font-thin'> sed condimentum turpis pulvinar porttitor. Nulla dapibus leo enim, at fringilla enim porta eget.</h5>
            <h1 className="lg:text-5xl text-2xl my-[10px]">$7</h1>
            <button className='text-gray-100 bg-orange-700 p-[20px] mt-[20px] rounded-xl'><Link to='/menu/sides'>Order Now</Link></button>
        </div>
    </div>
);
const ads=[adOne,adTwo,adThree,adFour];


