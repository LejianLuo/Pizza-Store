import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <div>
            <h1 className="text-center text-amber-900 text-4xl mt-[30px]">MENU</h1>
            <div className='flex flex-wrap justify-center gap-x-[20px] lg:grid grid-rows-2 grid-cols-3 justify-items-center lg:w-[950px] mx-auto mb-[30px]'>
                {menuList.map(item=>{return (<MenuItem title={item.title} url={item.url} id={item.id}/>)})}
            </div>
        </div>
    );
}
function MenuItem({title,url,id}){
    return(
        <Link to={`/menu/${id}`}>
            <div className="w-[300px] h-[400px] flex flex-col items-center justify-around rounded-3xl my-[10px] hover:border-zinc-500 hover:border-2"  style={{backgroundImage:`url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/job267-eye-01-03.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=506f456d3399a0a99bdb762d55c706ef')`}} >
                <h1 className='text-2xl text-red-950'>{title}</h1>
                <img src={url} alt={title} className='w-[220px] h-[200px] rounded-xl '/>    
                <button className='bg-orange-500 w-[50px] h-[50px] rounded-full'><LocalPizzaOutlinedIcon className="-rotate-90"/></button>
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
        url:"https://images.themodernproper.com/billowy-turkey/production/posts/2022/HomemadePoutineRecipe_Shot8_78.jpg?w=960&h=720&q=82&fm=jpg&fit=crop&dm=1667570349&s=5114ab356816ecbca4ab2eff55ac4b13",
        id:'sides'
    },
    {
        title:"DRINKS",
        url:"https://www.freepnglogos.com/uploads/coca-cola-png/can-coca-cola-fearoftheblackwolf-deviantart-26.png",
        id:'drinks'
    }
]