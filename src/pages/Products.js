import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import AppContext from "../context/AppContext";

function Products() {
  const { products } = useContext(AppContext);
  const { addItem } = useCart();

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => {
        return (
          <article
            key={product.id}
            onClick={() => {
              // console.log(product.id);
            }}
          >
            <div>
              <Link to={`/products/${product.id}`}>
                <p>
                  {product.title} - {product.price} -{" "}
                  <img src={product.url} alt="car" />
                </p>
              </Link>
              <button onClick={() => addItem(product)}>add to cart</button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Products;
