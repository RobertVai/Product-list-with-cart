import React from "react";
import type { ProductType } from "../../types/product";

type ProductCardProps = {
  product: ProductType;
  addToCart: (product: ProductType) => void;
};
const ProductCard = ({ product, addToCart }: ProductCardProps) => {
  return (
    <div>
      <p>{product.title}</p>
      <button onClick={() => addToCart(product)}>ADD</button>
    </div>
  );
};

export default ProductCard;
