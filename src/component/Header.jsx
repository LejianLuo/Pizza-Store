
import HouseIcon from '@mui/icons-material/House';


export default function Header(){
    return(
        <div className='flex justify-between items-center sticky top-0 mx-auto bg-white z-30'>
            <h1 className=' text-5xl text-orange-400'>PIZZA STORE</h1>
            <h1>GIFT CARDS</h1>
            <h1>COUPONS</h1>
            <div className='flex items-center'>
                <HouseIcon/>
                <div>
                    <p>1234 Navaho Rd</p>
                    <p>(123)-456-789</p>
                </div>
            </div>
        </div>
    );
}