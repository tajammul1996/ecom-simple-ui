"use client";
import React, { useContext } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { BASE_URL } from "../../helpers/constants";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";

const ProductCard = ({ product }) => {
  const data = useContext(AuthContext);
  console.log(data);
  const addToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/api/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          product: {
            id: product.id,
            quantity: 1,
          },
        }),
      });

      const responseJson = await response.json();
      toast(responseJson.message);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.productCard}>
      <Image
        src={product.images[0]}
        className={styles.productImage}
        alt={product.name}
        width={200}
        height={200}
      />

      <h4 className={styles.productName}>{product.name}</h4>
      <p className={styles.productPrice}>Rs. {product.price}</p>
      {data.isUserLoggedIn && (
        <button className={styles.addToCart} onClick={addToCart}>
          Add to cart
        </button>
      )}

      <ToastContainer />
    </div>
  );
};

export default ProductCard;
