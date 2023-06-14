import Homapge from "./component/Homepage/Homepage";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Slider from "./component/Slider";
import { Route,Routes, useLocation} from "react-router-dom";
import SubMenu from "./component/SubMenu/SubMenu";
import CustomizePage from "./component/CustomizeFood/CustomizePage";
import Cart from "./component/Cart"
import { createContext, useEffect, useState } from "react";
import Checkout from "./component/Checkout/CheckoutPage";
import Final from "./component/Checkout/FinalPage"


export const CartContext=createContext();
function App() {
  const [cartItems, setCart]=useState([]);
  const location=useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <div className="App  font-verdana font-bold">
      <Header/>
      <CartContext.Provider value={[cartItems, setCart]}>
        <Routes>
          <Route path='/' element={<Homapge/>}/>
          <Route path='/menu/:id' element={<SubMenu/>}/>
          <Route path="/pizza/:id" element={<CustomizePage/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/final' element={<Final/>}/>
        </Routes>
        <Cart/>
      </CartContext.Provider>
      <Slider/>
      <Footer/>

    </div>
  );
}

export default App;
