import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function Product({setCheckoutProduct, checkoutProduct}) {
  const [product, setProduct] = useState({});
  const params = useParams();
  const fetchCarData = async () => {
    try {
      const response = await fetch('https://codexplained.se/cars.php?id=' + params.id);
      const data = await response.json();

      setProduct(data)
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCarData();
  }, []);
  

  const addProductCheckout = (id) => {
    console.log(id)
    setCheckoutProduct(checkoutProduct.map((product) => product.id === id
    ? {...product, cart: true}
    : product
    ))
    
  }

  return (
    <div>
      <h1>från Product {params.id}</h1>
      <h2>{product.title}</h2>
      <p>Pris: {product.price} - Antal i lager: {product.storage} st</p>
      <p>{product.description}</p>
      <img src={product.url}/>
      <button onClick={addProductCheckout}>Buy</button>
    </div>
  )
}

export default Product