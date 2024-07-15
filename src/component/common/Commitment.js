import React from "react";
import ProductCard from "../products/ProductCard";
import styles from "./Commitment.module.css";
import { TiTick } from "react-icons/ti";
import Link from "next/link";

const Commitment = () => {
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
  ];

  return (
    <>
      <div className={styles.commit}>
        <div>
          <span className={styles.circle}>
            <TiTick className={styles.icon} />
          </span>
          Delivering Emotions Since 1994
        </div>
        <div>
          <span className={styles.circle}>
            <TiTick className={styles.icon} />
          </span>
          We Deliver, On Time - Every Time!{" "}
        </div>
        <div>
          <span className={styles.circle}>
            <TiTick className={styles.icon} />
          </span>
          100% Secure Payment
        </div>
        <div>
          <span className={styles.circle}>
            <TiTick className={styles.icon} />
          </span>
          100% Smile Guaranteed{" "}
        </div>
      </div>
      <div className={styles.seller}>
        <div>
          <h2>Leading UAE Florist for Gift and Flower Delivery</h2>
          <p>
            10,000+ Flowers & Gifts at Your Command! With 24/7 Delivery and
            One-Hour Express Service, Surprise Them Anytime!
          </p>
        </div>
        <div className={styles.heading2}>
          <h2>Our Best Selling Product</h2>
          <div>View All</div>
        </div>
        <div className={styles.prod}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
      <div className={styles.seller}>
        <div>
          <h2>Leading UAE Florist for Gift and Flower Delivery</h2>
          <p>
            10,000+ Flowers & Gifts at Your Command! With 24/7 Delivery and
            One-Hour Express Service, Surprise Them Anytime!
          </p>
        </div>
        <div className={styles.heading2}>
          <h2>Jully special</h2>
          <div>View All</div>
        </div>
        <div className={styles.prod}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Commitment;
