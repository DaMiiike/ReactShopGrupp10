import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "react-use-cart";

function CartItem({ item, deleteItem }) {
  const { updateItemQuantity, removeItem } = useCart();

  console.log(item);

  return (
    <div>
      <section className="cart-section" key={item.id}>
        <div className="cart-body">
          <img className="cart-img" src={item.url} alt={item.title}></img>

          <div className="cart-items">
            <h3>{item.title}</h3>
            <h4>{item.quantity * item.price} SEK</h4>
            <button
              className="plusBtn"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            {item.quantity}
            <button
              className="minusBtn"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              {" "}
              -
            </button>
          </div>
          <button onClick={() => removeItem(item.id)} className="cart-trash">
            <FaTrash />
          </button>
        </div>
      </section>
    </div>
  );
}

export default CartItem;
