import { Link } from 'react-router-dom';

export default function Final(){
    return(
        <div className="p-[20px]">
            <Link className="text-red-950 text-lg" to='/'>Back To Homepage</Link>
            <div className='text-center p-[50px]'>
                <h1 className="text-orange-500 text-3xl md:text-5xl my-[20px]">THANK YOU FOR PURCHASE</h1>
                <p className="text-red-950 text-base font-thin">Your order will be ready in 15 minutes</p>
            </div>
        </div>
    );
}  