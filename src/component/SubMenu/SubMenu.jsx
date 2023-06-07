
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Menu from './menu.json'
import FoodCard from "./FoodCard";

export default function SubMenu(){
    const {id}=useParams();
    
    return(
        <div>
            <section style={{backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToPQKJnSeYuqXyXj6YGNqjpEUFUXISjPWHKQ&usqp=CAU')`}}>
                <Link className="my-[500px]"to='/'>Back To Homepage</Link>
                <div className="text-center">
                    <h1>{Menu[id].heading}</h1>
                    <img className="mx-auto h-[200px] rounded-xl" src={Menu[id].headingImage} alt='img'/>
                </div>
            </section>
            <section>
                {Menu[id].items.map(foodItem=>{
                   return (<FoodCard food={foodItem}/>);
                })}
            </section>
        </div>
    );
    
}