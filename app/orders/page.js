import CartItem from "@/components/CartItem/CartItem";

import styles from "./page.module.css";

const cartItems = [];
export default function Orders() {
  return (
    <div className={styles.cart}>
      {cartItems.length > 0 ? (
        <div>
          <h1>My orders</h1>
          {cartItems.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <h2>Your order history is empty!</h2>
      )}
    </div>
  );
}
