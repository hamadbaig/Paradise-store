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
    <>
      <div className={styles.main}>
        <div className={styles.mainimg}>
          <img src="/flower1.jpg"></img>
        </div>
        <div className={styles.nameprice}>
          <h2>Roses and Cake</h2>
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
          <div class="description">
            <h2>Description</h2>
            <div class="productdetails">
              <h3>Product Details</h3>
              <ul className={styles.para}>
                <li>3 Red rose</li>
                <li>3 Limonium</li>
                <li>6 Ruscus</li>
                <li>Beautifully Wrapped</li>
                <li>Chocolate Fudge Cake</li>
                <li>Weight: Half Kg</li>
                <li>Portions: 4</li>
              </ul>
            </div>
            <div class="deliveryinformation">
              <h3>Delivery Information</h3>
              <ul className={styles.para}>
                <li>
                  All orders are delivered via Ferns N Petals
                  temperature-controlled delivery vans.
                </li>
                <li>
                  Your cake will arrive beautifully fresh for your occasion. We
                  recommend that the cake(s) are stored in refrigerator before
                  consumption.
                </li>
                <li>
                  We recommend you to open the box upon handover and before
                  leaving of our delivery executive.
                </li>
              </ul>
            </div>
            <div class="deliveryinformation">
              <h3>Care Instructor</h3>
              <ul className={styles.para}>
                <li>Upon receiving the cake, refrigerate it immediately.</li>
                <li>
                  Fondant cakes should be stored in an air conditioned
                  environment before consumption.
                </li>
                <li>
                  Slice and serve the cake at room temperature and make sure it
                  is not exposed to heat.
                </li>
                <li>The cake should be consumed within 48 hours.</li>
                <li>Enjoy your cake!</li>
              </ul>
            </div>
            <div className={styles.tab2}>
              <div className={styles.add}>Add To Cart</div>
              <div className={styles.buy}>Buy Now</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.seller}>
        <div className={styles.heading2}>
          <h2>What others are Watching</h2>
        </div>
        <div className={styles.prodContainer}>
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
      </div>
      <div className={styles.tab}>
        <div className={styles.add}>Add To Cart</div>
        <div className={styles.buy}>Buy Now</div>
      </div>
    </>
  );
};

export default product;
