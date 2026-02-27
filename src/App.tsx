import "./App.css";
import { useState } from "react";
import type { ProductType } from "./types/product";
import type { CartType } from "./types/cart";
import { products } from "./data/products";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";

function App() {
  const [cart, setCart] = useState<CartType[]>([]);

  const addToCart = (product: ProductType) => {
    setCart((prev) => {
      const findItem = prev.find((i) => i.id === product.id);
      const updatedCart = findItem
        ? prev.map((i) =>
            i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
          )
        : [...prev, { ...product, quantity: 1 }];
      return updatedCart;
    });
  };

  const removeItem = (id: number) => {
    setCart((prev) => {
      return prev.filter((i) => i.id !== id);
    });
  };

  const increaseQuantity = (id: number) => {};

  const decreaseQuantity = (id: number) => {};
  return (
    <>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeItem={removeItem} />
    </>
  );
}

export default App;
