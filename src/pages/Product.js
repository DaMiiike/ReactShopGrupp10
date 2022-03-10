import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function Product(props) {
  const [product, setProduct] = useState({});
  const params = useParams();

  const handleAddBtn = () => {
      const newCheckoutProduct = product;
      props.addCheckout(newCheckoutProduct)
  }


  const fetchCarData = async () => {
    try {
      const response = await fetch('https://codexplained.se/cars.php?id=' + params.id);
      const data = await response.json();
      console.log(data);

      setProduct(data)
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCarData();
  }, []);
  
  return (
    <div>
      <h1>Product</h1>
      <h2>{product.title}</h2>
      <p>Pris: {product.price} € - Antal i lager: {product.storage} st</p>
      <p>{product.description}</p>
      <img src={product.url} alt='car'/>
      <p>Article number: {params.id}</p>
      <button onClick={handleAddBtn}>Buy</button>
    </div>
  )
}

export default Product

