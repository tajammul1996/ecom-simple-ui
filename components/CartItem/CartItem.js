"use client";
import { BASE_URL } from "@/helpers/constants";
import { ToastContainer, toast } from "react-toastify";

import styles from "./styles.module.css";

const CartItem = ({ item, fetchCartItems }) => {
  console.log("Cart item", item);

  const onRemoveItem = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/api/cart/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const responseJson = await response.json();

      fetchCartItems();

      toast("Item removed from the cart!");
      console.log(responseJson);
    } catch (e) {
      console.log(e);
    }
  };

  const onQuantityUpdate = async (id, quantity) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/api/cart/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          quantity,
        }),
      });

      const responseJson = await response.json();

      fetchCartItems();

      // toast("Item removed from the cart!");
      console.log(responseJson);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.imageContainer}>
        <img src={item.product.images[0]} alt={item.name} />
      </div>
      <div className={styles.itemDetails}>
        <span className={styles.name}>{item.product.name}</span>
        <span className={styles.price}>Rs. {item.product.price}</span>
        <span className={styles.description}>{item.product.description}</span>
        <span>
          Quantity -{" "}
          <button onClick={() => onQuantityUpdate(item.id, item.quantity + 1)}>inc</button>
          {item.quantity}
          <button onClick={() => onQuantityUpdate(item.id, item.quantity - 1)}>dec</button>
        </span>
      </div>

      <button onClick={() => onRemoveItem(item.id)}>❌</button>
      <ToastContainer />
    </div>
  );
};

export default CartItem;
