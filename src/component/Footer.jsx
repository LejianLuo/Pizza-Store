import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function Footer(){
    return(
        <div className='flex justify-between items-baseline max-w-[1000px] mx-auto my-[50px]'>
            <ul>
                <li><h1>PIZZA STORE</h1></li>
                <li>Accessibility</li>
                <li>Guarantee Policy</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
                <li>
                    <div className='flex justify-between items-center'>
                        <FacebookIcon/>
                        <InstagramIcon/>
                        <TwitterIcon/>
                    </div>
                </li>
            </ul>

            <ul>
                <li><h1>ABOUT US</h1></li>
                <li>First Store</li>
                <li>Our Food</li>
                <li>Our Quality</li>
                <li>Nutrition</li>
                <li>Menu FAQ</li>
            </ul>

            <ul>
                <li><h1>FRANCHISING</h1></li>
                <li>Your Store</li>
                <li>Franchising Basics</li>
                <li>Franchise Opportunities</li>
                <li>Meet The Teams</li>
                <li>Get Answers</li>
                <li>Contact Us</li>
            </ul>

            <ul>
                <li><h1>COMPANY</h1></li>
                <li>Our Company</li>
                <li>Leadership Team</li>
                <li>Come Work Here</li>
                <li>Community</li>
                <li>Slices For Smiles</li>
                <li>Environment</li>
                <li>News</li>
                <li>Investors</li>
            </ul>

            
            <ul>
                <li><h1>FOR YOU</h1></li>
                <li>Intro</li>
                <li>Contact Us</li>
                <li>Loyalty Program</li>
                <li>Gift Cards</li>
                <li>School Lunch Program</li>
                <li>Corporate Catering</li>
                <li>Contests</li>
                <li>Customer Satisfaction Survey</li>
            </ul>
        </div>
    );
}