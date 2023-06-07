import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <div>
            <h1 className="text-center text-4xl">Menu</h1>
            <div className='grid grid-rows-2 grid-cols-3 justify-items-center w-[950px] mx-auto'>
                {menuList.map(item=>{return (<MenuItem title={item.title} url={item.url} id={item.id}/>)})}
            </div>
        </div>
    );
}
function MenuItem({title,url,id}){
    return(
        <Link to={`/menu/${id}`}>
            <div className="w-[300px] h-[400px] flex flex-col items-center justify-between bg-slate-600">
                <h1>{title}</h1>
                <img src={url} alt={title}/>    
                <button><LocalPizzaOutlinedIcon className="-rotate-90"/></button>
            </div>
        </Link>
    );

}

const menuList=[
    {
        title:'ALL MEAT PIZZA',
        url:"https://a1pizzas.ca/wp-content/uploads/2021/01/All-Meat-Pizza-1.png",
        id:'meat'
    },
    {
        title:'VEGGIE PIZZA',
        url:"https://www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-featured-image-3.png",
        id:'veggie'
    },
    {
        title:"CHICKEN SANDWICH",
        url:"https://www.pngkey.com/png/full/244-2445883_spicy-crispy-chicken-sandwich.png",
        id:'chicken'
    },
    {
        title:"WINGS",
        url:"https://www.fatburgercanada.com/wp-content/uploads/2015/07/12-Buffalos-Wings-No-Background.png",
        id:'wings'
    },
    {
        title:"SIDES",
        url:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTzDMy24RBT0REq8g4E6qX7T5uNT2h9DeD02APWvCrvOiS9v3VH",
        id:'sides'
    },
    {
        title:"DRINKS",
        url:"https://www.freepnglogos.com/uploads/coca-cola-png/can-coca-cola-fearoftheblackwolf-deviantart-26.png",
        id:'drinks'
    }
]