import React from "react";
import type { CartType } from "../../types/cart";
import CartItem from "../CartItem/CartItem";

type CartProps = {
  cart: CartType[];
  removeItem: (id: number) => void;
};
const Cart = ({ cart, removeItem }: CartProps) => {
  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} removeItem={removeItem} />
      ))}
    </div>
  );
};

export default Cart;
