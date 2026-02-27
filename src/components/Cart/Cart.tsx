import React from "react";
import type { CartType } from "../../types/cart";
import CartItem from "../CartItem/CartItem";

type CartProps = {
  cart: CartType[];
};
const Cart = ({ cart }: CartProps) => {
  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart;
