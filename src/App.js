import React, {useEffect, useState} from 'react'
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
import Cart from './components/Cart';
import Checkout from './pages/Checkout';




function App() {
  
  const [checkoutProduct, setCheckoutProduct] = useState([]);
  const fetchCarData = async () => {
    try {
      const response = await fetch('https://codexplained.se/cars.php');
      const data = await response.json();

      //setCheckoutProduct(data) // fyller i data i useState
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCarData();
  }, []);

  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/products/:id" element={<Product setCheckoutProduct={setCheckoutProduct} checkoutProduct={checkoutProduct}/>} />
          <Route path="/checkout" element={<Checkout setCheckoutProduct={setCheckoutProduct} checkoutProduct={checkoutProduct} />} />
            
        </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;