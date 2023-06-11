"use client";

import CartItem from "@/components/CartItem/CartItem";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../helpers/constants";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState("");

  const fetchCartItems = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/api/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const responseJson = await response.json();
      setCartItems(responseJson.data);
    } catch (e) {
      console.log(e);
      setError(e.message || "Something went wrong.");
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  const getTotalAmount = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total = total + item.quantity * item.product.price;
    });

    return total.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
  };

  return (
    <div className={styles.cart}>
      {cartItems.length > 0 ? (
        <>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <CartItem item={item} key={item.id} fetchCartItems={fetchCartItems} />
            ))}
          </div>
          <div className={styles.totalAmount}>Total amount: {getTotalAmount()}</div>
        </>
      ) : (
        <h2>Cart is empty</h2>
      )}
    </div>
  );
}
