import styles from "./Modal.module.css";
import type { CartType } from "../../types/cart";

type ModalProps = {
  cart: CartType[];
  totalPrice: number;
  closeModal: () => void;
  clearCart: () => void;
};

const Modal = ({ cart, totalPrice, closeModal, clearCart }: ModalProps) => {
  const handleNewOrder = () => {
    clearCart();
    closeModal();
  };
  return (
    <div className={styles.backdrop} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        <div className={styles.icon}>✓</div>

        <h2 className={styles.title}>Order Confirmed</h2>
        <p className={styles.subtitle}>We hope you enjoy your food!</p>

        <div className={styles.card}>
          {cart.map((item) => (
            <div className={styles.itemRow} key={item.id}>
              <img className={styles.thumb} src={item.image} alt={item.title} />

              <div className={styles.itemInfo}>
                <p className={styles.itemName}>{item.title}</p>
                <div className={styles.itemMeta}>
                  <span className={styles.qty}>{item.quantity}x</span>
                  <span>@ ${item.price.toFixed(2)}</span>
                </div>
              </div>

              <div className={styles.priceRight}>
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}

          <div className={styles.totalRow}>
            <p className={styles.totalLabel}>Order Total</p>
            <p className={styles.totalValue}>${totalPrice.toFixed(2)}</p>
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.primaryBtn} onClick={handleNewOrder}>
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
