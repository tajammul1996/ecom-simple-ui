"use client";
import { BASE_URL } from "@/helpers/constants";
import { ToastContainer, toast } from "react-toastify";

import styles from "./styles.module.css";

const CartItem = ({ item, fetchCartItems }) => {
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
      // console.log(responseJson);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.cartitem}>
      <img className={styles.itemimage} src={item.product.images[0]} alt={item.name} />
      <h2 className={styles.itemname}>{item.product.name}</h2>
      <p className={styles.itemdescription}>INR {item.product.price}</p>
      <div className={styles.itemquantity}>
        <button onClick={() => onQuantityUpdate(item.id, item.quantity - 1)}>-</button>
        <span> {item.quantity} </span>
        <button onClick={() => onQuantityUpdate(item.id, item.quantity + 1)}>+</button>
      </div>
      <button className={styles.itemremove} onClick={() => onRemoveItem(item.id)}>
        Remove item
      </button>
    </div>
  );
};

export default CartItem;
