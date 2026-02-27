import React from "react";
import type { CartType } from "../../types/cart";

type CartItemProps = {
  item: CartType;
  removeItem: (id: number) => void;
};
const CartItem = ({ item, removeItem }: CartItemProps) => {
  return (
    <div>
      <p>
        {item.title} x {item.quantity}
      </p>
      <p>{item.quantity * item.price}</p>
      <button onClick={() => removeItem(item.id)}>X</button>
    </div>
  );
};

export default CartItem;
