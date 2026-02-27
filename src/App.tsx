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

  const increaseQuantity = (id: number) => {
    setCart((prev) => {
      return prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i))
        .filter((i) => i.quantity > 0);
    });
  };

  const decreaseQuantity = (id: number) => {
    setCart((prev) => {
      return prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0);
    });
  };
  return (
    <div className="page">
      <h1 className="title">Desserts</h1>

      <div className="layout">
        <div className="products">
          <ProductList
            products={products}
            addToCart={addToCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            cart={cart}
          />
        </div>

        <aside className="cart">
          <Cart cart={cart} removeItem={removeItem} />
        </aside>
      </div>
    </div>
  );
}
export default App;
