import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductsList from "./pages/ProductsList";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
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