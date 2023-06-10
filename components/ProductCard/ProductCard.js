"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { BASE_URL } from "../../helpers/constants";
import { ToastContainer, toast } from "react-toastify";

const ProductCard = ({ product }) => {
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
      <button className={styles.addToCart} onClick={addToCart}>
        Add to cart
      </button>

      <ToastContainer />
    </div>
  );
};

export default ProductCard;
