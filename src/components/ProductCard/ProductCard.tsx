import React from "react";
import styles from "./ProductCard.module.css";
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
      <img src={product.image} alt="" className={styles.image} />
      {checkQuantity === 0 ? (
        <button className={styles.addButton} onClick={() => addToCart(product)}>
          <img src="images\icon-add-to-cart.svg" alt="" />
          Add to Cart
        </button>
      ) : (
        <div className={styles.counter}>
          <button
            className={styles.quantityButton}
            onClick={() => decreaseQuantity(product.id)}
          >
            <img
              src="images\icon-decrement-quantity.svg"
              alt=""
              className={styles.changeQuantity}
            />
          </button>
          <p>{checkQuantity}</p>
          <button
            className={styles.quantityButton}
            onClick={() => increaseQuantity(product.id)}
          >
            <img
              src="images\icon-increment-quantity.svg"
              alt=""
              className={styles.changeQuantity}
            />
          </button>
        </div>
      )}
      <div className={styles.dessertInfo}>
        <p className={styles.category}>{product.category}</p>
        <strong className={styles.title}>{product.title}</strong>
        <p className={styles.price}>${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
