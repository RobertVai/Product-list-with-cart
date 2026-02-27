import React from "react";
import styles from "./ProductList.module.css";
import type { ProductType } from "../../types/product";
import type { CartType } from "../../types/cart";
import ProductCard from "../ProductCard/ProductCard";

type ProductListProps = {
  products: ProductType[];
  cart: CartType[];
  addToCart: (product: ProductType) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};
const ProductList = ({
  products,
  cart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
}: ProductListProps) => {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cart={cart}
          addToCart={addToCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      ))}
    </div>
  );
};

export default ProductList;
