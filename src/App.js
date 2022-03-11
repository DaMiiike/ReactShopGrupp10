import React, {useState} from 'react'
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./components/Cart";
import ContextProvider from "./context/ContextProvider";
import { CartProvider, useCart } from "react-use-cart";
import Checkout from './pages/Checkout';

function App() {
  const [checkoutProduct, setCheckoutProduct] = useState([]);
  const [quantity, setQuantity] = useState(1)

  const addCheckout = (newCheckoutProduct) => {
    setCheckoutProduct([
      ...checkoutProduct,
      {...newCheckoutProduct, qty: +1}
    ])
  }

  return (
    <div className="App">
      <CartProvider>
        <ContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/products/:id" element={<Product addCheckout={addCheckout}/>} />
              <Route path="/checkout" element={<Checkout addCheckout={addCheckout} checkoutProduct={checkoutProduct}/>} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </ContextProvider>
      </CartProvider>





    </div>
  );
}

export default App;
