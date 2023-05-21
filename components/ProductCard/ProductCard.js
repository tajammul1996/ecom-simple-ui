"use client"
import React from "react";
import styles from "./styles.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <img
        src={product.images[0]}
        className={styles.productImage}
        alt={product.name}
      />

      <h4 className={styles.productName}>{product.name}</h4>
      <p className={styles.productPrice}>Rs. {product.price}</p>
      <button className={styles.addToCart} onClick={() => console.log(product)}>Add to cart</button>
    </div>
  );
};

export default ProductCard;