import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef } from 'react';
/*
guide
https://www.youtube.com/watch?v=x4bom6Udk_4
https://www.youtube.com/watch?v=3yfswsnD2sw&t=430s
*/

export default function Slider(){
    const slider=useRef();
    const left=()=>{
        slider.current.scrollLeft=slider.current.scrollLeft-310;
        
    }
    const right=()=>{
        slider.current.scrollLeft=slider.current.scrollLeft+310;
    }
    return (
        <>
            <h1 className="text-center text-amber-900 md:text-4xl text-2xl mt-[30px]">RECOMMENDATION</h1>
            <div className="flex items-center justify-center overflow-hidden max-w-[1200px] mt-[30px] mx-auto">
                <ArrowBackIosIcon onClick={left}/>
                <div ref={slider} className='grid grid-flow-col overflow-hidden scroll-smooth gap-x-[10px]'>
                    {sliderList.map(item=>{
                        return (<SliderItem listItem={item}/>);
                    })}
                </div>
                <ArrowForwardIosIcon onClick={right}/>
            </div>
        </>
    );
}

function SliderItem({listItem}){
    return (
        <div className='w-[300px] h-[230px] rounded-3xl bg-gray-200'>
            <img className='h-[180px] w-[300px] rounded'src={listItem.image} alt='img'/>
            <h1 className='text-amber-900 text-lg p-[10px]'>{listItem.text}</h1>
        </div>
    );
}
const sliderList=[
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScDvbOQqg7Dp6-C98UTp_YwfvwilAxycVjbw&usqp=CAU',
        text:'COUPON'
    },
    {
        image:'https://st.depositphotos.com/1636803/1824/i/950/depositphotos_18240683-stock-photo-gift-card.jpg',
        text:'GIFT CARD'
    },
    {
        image:'https://storage.pizzapizza.ca/phx2/ppl_images/just_for_you/en/GameNight.png?cache_key=12',
        text:'GAME NIGHT'
    },
    {
        image:'https://storage.pizzapizza.ca/phx2/ppl_images/just_for_you/en/MovieNight.png?cache_key=12',
        text:'MOVIE NIGHT'
    },
    {
        image:'https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza.jpg',
        text:'VEGGIE PIZZA'
    },
    {
        image:'https://shewearsmanyhats.com/wp-content/uploads/2014/08/fried-pickles-3.jpg',
        text:'SIDES'
    },
    {
        image:'https://www.thecountrycook.net/wp-content/uploads/2022/05/thumbnail-Smoked-Pepperoni-Pizza-scaled.jpg',
        text:'ALL MEAT PIZZA'
    },
    {
        image:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/2/19/1/FN_Air-Fryer-Chicken-Wings-H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1550611553388.jpeg',
        text:'WINGS'
    },
]