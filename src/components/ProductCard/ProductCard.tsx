import React from "react";
import type { ProductType } from "../../types/product";
import type { CartType } from "../../types/cart";

type ProductCardProps = {
  product: ProductType;
  cart: CartType[];
  addToCart: (product: ProductType) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};

const ProductCard = ({
  product,
  cart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
}: ProductCardProps) => {
  const cartCheck = cart.find((i) => i.id === product.id);
  const checkQuantity = cartCheck ? cartCheck.quantity : 0;
  return (
    <div>
      <p>{product.title}</p>
      {checkQuantity === 0 ? (
        <button onClick={() => addToCart(product)}>ADD</button>
      ) : (
        <div>
          <button onClick={() => decreaseQuantity(product.id)}>-</button>
          <span>{checkQuantity}</span>
          <button onClick={() => increaseQuantity(product.id)}>+</button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
