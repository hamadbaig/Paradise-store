"use client";
import styles from "./product.module.css";
import { IoMdStar } from "react-icons/io";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ProductCard from "@/component/products/ProductCard";
const product = () => {
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

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [message, setMessage] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className={styles.main}>
      <div className={styles.demoimg}></div>
      <div className={styles.mainimg}>
        <img src="/flower1.jpg"></img>
        <div className={styles.nameprice}>
          <div>
            <h2>Roses and Cake</h2>
          </div>
          <div>
            <div className={styles.starreview}>
              <div className={styles.star}>
                5{" "}
                <span>
                  <IoMdStar className={styles.icon} />
                </span>
              </div>
              <div className={styles.review}>36 reviews</div>
            </div>
            <div className={styles.starreview}>
              <span> </span>
              <div className={styles.review2}>
                <div>
                  <span>AED</span>179
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form className={styles.form}>
        <label className={styles.label} htmlFor="select">
          Deliver to:
        </label>
        <div className={styles.inputdiv}>
          <select
            id="select"
            value={selectedOption}
            onChange={handleSelectChange}
            className={styles.label}
          >
            <option value="">choose an option</option>
            <option value="option1">Pakistan</option>
            <option value="option2">Oman</option>
            <option value="option3">America</option>
          </select>
        </div>
        <label className={styles.label} htmlFor="date">
          Select date:
        </label>
        <div className={styles.inputdiv}>
          <DatePicker
            id="date"
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="yyyy/MM/dd"
            value="Select date to delevier"
            className={styles.label}
          />
        </div>
        <label className={styles.label} htmlFor="message">
          Message:
        </label>
        <div className={styles.inputdiv}>
          <textarea
            id="message"
            value="Enter Message"
            onChange={handleMessageChange}
            className={styles.label}
          />
        </div>
      </form>
      <div className={styles.seller}>
        <div className={styles.heading2}>
          <h2>Jully special</h2>
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
      <div className={styles.tab}>
        <div className={styles.add}>Add To Cart</div>
        <div className={styles.buy}>Buy Now</div>
      </div>
    </div>
  );
};

export default product;
