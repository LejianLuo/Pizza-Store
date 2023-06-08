
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Menu from './menu.json'
import FoodCard from "./FoodCard";

export default function SubMenu(){
    const {id}=useParams();
    
    return(
        <div>
            <section className='p-[20px] relative z-0' style={{backgroundImage:`url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/job267-eye-01-03.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=506f456d3399a0a99bdb762d55c706ef')`}}>
                <Link className="text-red-950 text-lg" to='/'>Back To Homepage</Link>
                <div className="text-center h-[220px]">
                    <h1 className=" my-[25px] text-red-950 text-3xl">{Menu[id].heading}</h1>
                    <img className="mx-auto h-[300px] w-[400px] rounded-full z-0 -bottom-[100px]" src={Menu[id].headingImage} alt='img'/>
                </div>
            </section>
            <section className='relative z-10 bg-white py-[50px]'>
                {Menu[id].items.map(foodItem=>{
                   return (<FoodCard food={foodItem}/>);
                })}
            </section>
        </div>
    );
    
}