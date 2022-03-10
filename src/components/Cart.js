import React from "react";
import "../components/Cart.css";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartItem from "./CartItems.js";
import { useCart } from "react-use-cart";

function Cart({ setItems, open, setOpen, sum, deleteAll }) {
  const { items, emptyCart } = useCart();

  return (
    <>
      <div className={`cart-container ${open && "open"}`}>
        <div className="cart-header">
          <h2>ORDER SUMMARY</h2>
          <div className="closeBtn" onClick={() => setOpen(!open)}>
            <FaWindowClose />
          </div>
        </div>
        {/* <div>{isEmpty && <h3 className="empty">Cart is empty</h3>}</div> */}
        <div className="product-cart-container">
          {items.map((item) => (
            <CartItem key={item.id} items={items} item={item} />
          ))}
        </div>

        <div className="cart-footer">
          <h3>TOTAL: {sum} SEK</h3>
          <Link to="/checkout">
            <button className="cart-checkout">Checkout</button>
          </Link>
        </div>
        <button className="cart-delete" onClick={() => emptyCart()}>
          Remove all
        </button>
      </div>
    </>
  );
}

export default Cart;
