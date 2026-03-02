import React from "react";
import type { CartType } from "../../types/cart";
import styles from "./CartItem.module.css";

type CartItemProps = {
  item: CartType;
  removeItem: (id: number) => void;
};
const CartItem = ({ item, removeItem }: CartItemProps) => {
  return (
    <div className={styles.cartProduct}>
      <div className={styles.cartInfo}>
        <strong className={styles.dessertTitle}>{item.title}</strong>
        <div className={styles.finalInfo}>
          <strong className={styles.dessertQuantity}>{item.quantity}x</strong>
          <p className={styles.dessertPrice}>@${item.price}</p>
          <strong className={styles.dessertTotalPrice}>
            ${item.quantity * item.price}
          </strong>
        </div>
      </div>

      <button
        className={styles.removeButton}
        onClick={() => removeItem(item.id)}
      >
        <img src="images\icon-remove-item.svg" alt="" />
      </button>
    </div>
  );
};

export default CartItem;
