import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../store/actions/actions";

const Cart = () => {
  const cartItems = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  return (
    <div>
      <main className="cart">
        {cartItems.length <= 0 && <p>No item in the cart</p>}
        <ul>
          {cartItems.map((cartItem) => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price}(
                {cartItem.quantity} {cartItem.style})
              </div>
              <div>
                <button onClick={() => dispatch(removeProduct(cartItem.id))}>
                  Remove from cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
export default Cart;
