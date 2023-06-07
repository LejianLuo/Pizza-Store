import { Link } from "react-router-dom";

export default function FoodCard({food}){

    
    return(
        <div className="grid grid-rows-1 grid-cols-3">
           <img className='col-span-1' src={food.image} alt="img"/>
           <article className='col-start-2 col-end-3'>
                <h1>{food.name}</h1>
                <p>{food.description}</p>
                <div className='flex'>
                    {food.customizable ? (<h1>Starting from ${food.price}</h1>) : (<h1>${food.price}</h1>)}
                    {food.customizable ? ( <Link to={`/pizza/${food.name}`}>Customize</Link>) : (<button>Add</button>)}
                </div>
           </article>
        </div>
    );
    
}