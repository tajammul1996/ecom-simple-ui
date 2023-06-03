import styles from "./styles.module.css";

const CartItem = ({ item }) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.imageContainer}>
        <img src={item.images[0]} alt={item.name} />
      </div>
      <div className={styles.itemDetails}>
        <span className={styles.name}>{item.name}</span>
        <span className={styles.price}>Rs. {item.price}</span>
        <span className={styles.description}>{item.description}</span>
      </div>
    </div>
  )
}

export default CartItem;