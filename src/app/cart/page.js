"use client";
import styles from "./cart.module.css";
import { FaTimes } from "react-icons/fa";
import React, { useState } from "react";

const cart = () => {
  const [products, setProducts] = useState([
    {
      name: "Pink Gypso Beauty Arrangement",
      price: "AED 249",
      imageUrl: "/flower1.jpg",
      quantity: 2,
    },
    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
      quantity: 3,
    },
    {
      name: "Pink Gypso Beauty Arrangement",
      price: "AED 249",
      imageUrl: "/flower1.jpg",
      quantity: 1,
    },
    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
      quantity: 5,
    },
  ]);

  const handleIncrement = (index) => {
    const newProducts = [...products];
    newProducts[index].quantity += 1;
    setProducts(newProducts);
  };

  const handleDecrement = (index) => {
    const newProducts = [...products];
    if (newProducts[index].quantity > 0) {
      newProducts[index].quantity -= 1;
      setProducts(newProducts);
    }
    const handleRemove = (index) => {
      const newProducts = products.filter((_, i) => i !== index);
      setProducts(newProducts);
    };
  };
  return (
    <>
      <div className={styles.CartMain}>
        <div> {"  "}</div>
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
        <div>Delivery Date</div>
        <div>Delete</div>
      </div>
      {products.map((product, index) => (
        <div className={styles.CartMain2} key={index}>
          <div className={styles.cartImage}>
            <img src={product.imageUrl} alt={product.name} />
          </div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>
            <button onClick={() => handleDecrement(index)}>-</button>
            {product.quantity}
            <button onClick={() => handleIncrement(index)}>+</button>
          </div>
          <div>
            {parseFloat(product.price.replace("AED ", "")) * product.quantity}
          </div>
          <div>Delivery Date</div>
          <div>
            <FaTimes
              className={styles.icon}
              onClick={() => handleRemove(index)}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default cart;
