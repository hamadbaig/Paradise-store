import React from "react";
import styles from "./AddsOn.module.css";
import { FaTimes } from "react-icons/fa";
import AddOnCard from "./AddOnCard";
function AddOn() {
  const products = [
    {
      name: "Pink Gypso Beauty Arrangement",
      price: "AED 249",
      imageUrl: "/flower1.jpg",
    },

    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
    },
    {
      name: "Pink Gypso Beauty Arrangement",
      price: "AED 249",
      imageUrl: "/flower1.jpg",
    },

    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
    },
    {
      name: "Pink Gypso Beauty Arrangement",
      price: "AED 249",
      imageUrl: "/flower1.jpg",
    },

    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
    },
    {
      name: "Pink Gypso Beauty Arrangement",
      price: "AED 249",
      imageUrl: "/flower1.jpg",
    },

    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
    },
    {
      name: "Pink Gypso Beauty Arrangement",
      price: "AED 249",
      imageUrl: "/flower1.jpg",
    },

    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
    },
    {
      name: "Pink Gypso Beauty Arrangement",
      price: "AED 249",
      imageUrl: "/flower1.jpg",
    },

    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
    },
  ];
  return (
    <>
      <div className={styles.divIcon}>
        <FaTimes className={styles.icon} />
      </div>
      <div className={styles.top}>
        Add on something to make it extra special
      </div>
      <div className={styles.Card}>
        {products.map((product, index) => (
          <AddOnCard
            key={index}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}{" "}
      </div>
      <div className={styles.bottom}>bottom</div>
      <div className={styles.divButton}>
        <button className={styles.button2}> Continue Without Add On</button>
      </div>
    </>
  );
}

export default AddOn;
