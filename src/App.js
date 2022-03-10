import React, {useState} from 'react'
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from './components/Cart'
import Checkout from './pages/Checkout';



function App() {
  const [checkoutProduct, setCheckoutProduct] = useState([]);

  const addCheckout = (newCheckoutProduct) => {
    setCheckoutProduct([
      ...checkoutProduct,
      newCheckoutProduct
    ])
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/products/:id" element={<Product addCheckout={addCheckout}/>} />
        <Route path="/checkout" element={<Checkout addCheckout={addCheckout} checkoutProduct={checkoutProduct}/>} />
        
    </Routes>
    {/* <Checkout addCheckout={addCheckout}/> for testing purposes */}
    <Footer />
  </BrowserRouter>
     
    </div>
  );
}

export default App;