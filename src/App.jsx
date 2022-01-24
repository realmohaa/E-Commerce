import React, {useState} from 'react';
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductsList from "./pages/ProductsList";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/components/Navbar";
import BurgerMenu from './pages/components/BurgerMenu';

const App = () => {
  const [isToggled, setIsToggled] = useState(false);
  const toggle = () => {
    setIsToggled(!isToggled)  
  }

  return (
    <BrowserRouter>
    <BurgerMenu isToggled={isToggled} toggle={toggle}/>
    <Navbar toggle={toggle}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<ProductsList />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Product" element={<Product />}/>
        <Route path="/Cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;