import React from "react";
import type { CartType } from "../../types/cart";
import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css";

type CartProps = {
  cart: CartType[];
  removeItem: (id: number) => void;
  totalPrice: number;
  totalItems: number;
};
const Cart = ({ cart, removeItem, totalPrice, totalItems }: CartProps) => {
  return (
    <div className={styles.cart}>
      <h1>Your Cart({totalItems})</h1>
      {cart.length === 0 && (
        <div>
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

      {cart.length > 0 && (
        <div className={styles.cartTotal}>
          <div className={styles.orderTotal}>
            <p>Order total:</p>
            <strong className={styles.totalPrice}>${totalPrice}</strong>
          </div>
          <div className={styles.delivery}>
            <img src="images\icon-carbon-neutral.svg" alt="" />
            <p>
              This is <b className={styles.carbon}>carbon-neutral</b> delivery
            </p>
          </div>
          <button className={styles.confirmOrder}>Confirm Order</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
