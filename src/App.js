import Homapge from "./component/Homepage/Homepage";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Slider from "./component/Slider";
import { Route,Routes} from "react-router-dom";
import SubMenu from "./component/SubMenu/SubMenu";
import CustomizePage from "./component/CustomizeFood/CustomizePage";
import Cart from "./component/Cart"
import { createContext, useState } from "react";



export const CartContext=createContext();
function App() {
  const [cartItems, setCart]=useState([]);
  
  return (
    <div className="App">
      <Header/>
      <CartContext.Provider value={[cartItems, setCart]}>
        <Routes>
          <Route path='/' element={<Homapge/>}/>
          <Route path='/menu/:id' element={<SubMenu/>}/>
          <Route path="/pizza/:id" element={<CustomizePage/>}/>
        </Routes>
        <Cart/>
      </CartContext.Provider>
      <Slider/>
      <Footer/>

    </div>
  );
}

export default App;
