import React from "react";
import styles from "./AddsOn.module.css";
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
    </>
  );
}

export default AddOn;
