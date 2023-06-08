
import HouseIcon from '@mui/icons-material/House';
import { Link } from 'react-router-dom';


export default function Header(){
    return(
        <>
            <div className='lg:flex justify-between items-center sticky top-0 mx-auto bg-white z-30 border-b-2 hidden'>
                <h1 className='m-[20px] text-5xl text-orange-400'><Link to='/'>PIZZA STORE</Link></h1>
                <h1 className='text-amber-900 text-lg'>GIFT CARDS</h1>
                <h1 className='text-amber-900 text-lg'>COUPONS</h1>
                <div className='flex items-center m-[20px]'>
                    <HouseIcon/>
                    <div className='font-thin text-xs'>
                        <p>1234 Navaho Rd</p>
                        <p>(123)-456-789</p>
                    </div>
                </div>
            </div>
            <h1 className='text-3xl text-orange-400 sticky top-0 text-center bg-white z-30 border-b-2 lg:hidden'><Link to='/'>PIZZA STORE</Link></h1>
        </>
    );
}