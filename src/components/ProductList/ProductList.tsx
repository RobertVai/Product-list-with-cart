import React from "react";
import type { ProductType } from "../../types/product";
import ProductCard from "../ProductCard/ProductCard";

type ProductListProps = {
  products: ProductType[];
  addToCart: (product: ProductType) => void;
};
const ProductList = ({ products, addToCart }: ProductListProps) => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
