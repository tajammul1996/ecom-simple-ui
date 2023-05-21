"use client"
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";


const ProductCard = ({ product }) => {
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
      <button className={styles.addToCart} onClick={() => console.log(product)}>Add to cart</button>
    </div>
  );
};

export default ProductCard;