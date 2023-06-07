import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
/*
guide
https://www.youtube.com/watch?v=x4bom6Udk_4
https://www.youtube.com/watch?v=3yfswsnD2sw&t=430s
*/

export default function Slider(){
    const left=()=>{
        let slider=document.getElementById('slider');
        slider.scrollLeft=slider.scrollLeft-350;
    }
    const right=()=>{
        let slider=document.getElementById('slider');
        slider.scrollLeft=slider.scrollLeft+350;
    }
    return (
        <div className="flex items-center justify-center overflow-hidden">
            <ArrowBackIcon onClick={left}/>
            <div id='slider'className='grid grid-flow-col overflow-hidden scroll-smooth'>
                {sliderList.map(item=>{
                    return (<SliderItem listItem={item}/>);
                })}
            </div>
            <ArrowForwardIcon onClick={right}/>
        </div>
    );
}

function SliderItem({listItem}){
    return (
        <div className='w-[350px] h-[200px]'>
            <img className='h-[180px]'src={listItem.image} alt='img'/>
            <h1>{listItem.text}</h1>
        </div>
    );
}
const sliderList=[
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScDvbOQqg7Dp6-C98UTp_YwfvwilAxycVjbw&usqp=CAU',
        text:'COUPON'
    },
    {
        image:'https://www.homeworkhelpglobal.com/wp-content/uploads/2020/12/gift-card.png',
        text:'GIFT CARD'
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScDvbOQqg7Dp6-C98UTp_YwfvwilAxycVjbw&usqp=CAU',
        text:'COUPON'
    },
    {
        image:'https://www.homeworkhelpglobal.com/wp-content/uploads/2020/12/gift-card.png',
        text:'GIFT CARD'
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScDvbOQqg7Dp6-C98UTp_YwfvwilAxycVjbw&usqp=CAU',
        text:'COUPON'
    },
    {
        image:'https://www.homeworkhelpglobal.com/wp-content/uploads/2020/12/gift-card.png',
        text:'GIFT CARD'
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScDvbOQqg7Dp6-C98UTp_YwfvwilAxycVjbw&usqp=CAU',
        text:'COUPON'
    },
    {
        image:'https://www.homeworkhelpglobal.com/wp-content/uploads/2020/12/gift-card.png',
        text:'GIFT CARD'
    },
]