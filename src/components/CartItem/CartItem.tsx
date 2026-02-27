import React from "react";
import type { CartType } from "../../types/cart";

type CartItemProps = {
  item: CartType;
};
const CartItem = ({ item }: CartItemProps) => {
  return (
    <div>
      <p>
        {item.title} x {item.quantity}
      </p>
      <p>{item.quantity * item.price}</p>
    </div>
  );
};

export default CartItem;
