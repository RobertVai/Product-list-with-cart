import React from "react";
import type { CartType } from "../../types/cart";
import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css";

type CartProps = {
  cart: CartType[];
  removeItem: (id: number) => void;
};
const Cart = ({ cart, removeItem }: CartProps) => {
  return (
    <div className={styles.cart}>
      {cart.length === 0 && (
        <div>
          <strong>Your Cart</strong>
          <div className={styles.imageContainer}>
            <img
              src="./images/illustration-empty-cart.svg"
              alt=""
              className={styles.cartImage}
            />
            <p>Your added items will appear here</p>
          </div>
        </div>
      )}
      {cart.map((item) => (
        <CartItem key={item.id} item={item} removeItem={removeItem} />
      ))}
    </div>
  );
};

export default Cart;
