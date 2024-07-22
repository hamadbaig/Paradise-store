"use client";
import styles from "./product.module.css";
import { IoMdStar } from "react-icons/io";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ProductCard from "@/component/products/ProductCard";
import AddOn from "@/component/common/AddOn";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

  const products = [
    {
      name: "Pink Gypso Beauty Arrangement",
      price: "AED 249",
      imageUrl: "/flower1.jpg",
      imageUrl2: "/floral-basket.jpg",
      imageUrl3: "/red-roses.jpg",
    },

    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
      imageUrl2:"/red-roses.jpg",
      imageUrl3: "/flower1.jpg",
    },
    {
      name: "Pink Gypso Beauty Arrangement",
      price: "AED 249",
      imageUrl: "/flower1.jpg",
      imageUrl2: "/floral-basket.jpg",
      imageUrl3: "/red-roses.jpg",
    },

    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
      imageUrl2: "/red-roses.jpg",
      imageUrl3: "/flower1.jpg",
    },
    {
      name: "Pink Gypso Beauty Arrangement",
      price: "AED 249",
      imageUrl: "/flower1.jpg",
      imageUrl2: "/floral-basket.jpg",
      imageUrl3: "/red-roses.jpg",
    },

    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
      imageUrl2: "/red-roses.jpg",
      imageUrl3: "/flower1.jpg",
    },
    {
      name: "Pink Gypso Beauty Arrangement",
      price: "AED 249",
      imageUrl: "/flower1.jpg",
      imageUrl2: "/floral-basket.jpg",
      imageUrl3: "/red-roses.jpg",
    },

    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
      imageUrl2: "/red-roses.jpg",
      imageUrl3: "/flower1.jpg",
    },
    {
      name: "Pink Gypso Beauty Arrangement",
      price: "AED 249",
      imageUrl: "/flower1.jpg",
      imageUrl2: "/floral-basket.jpg",
      imageUrl3: "/red-roses.jpg",
    },

    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
      imageUrl2:"/red-roses.jpg",
      imageUrl3: "/flower1.jpg",
    },
    {
      name: "Pink Gypso Beauty Arrangement",
      price: "AED 249",
      imageUrl: "/flower1.jpg",
      imageUrl2: "/floral-basket.jpg",
      imageUrl3: "/red-roses.jpg",


    },

    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
      imageUrl2: "/red-roses.jpg",
      imageUrl3: "/flower1.jpg",
    },
  ];
  const options = {
    option1: ["07:00 - 09:00"],
    option2: [
      "08:00 - 13:00",
      "12:00 - 17:00",
      "14:00 - 19:00",
      "16:00 - 21:00",
      "19:00 - 23:00",
    ],
    option3: [
      "08:00 - 13:00",
      "12:00 - 17:00",
      "14:00 - 19:00",
      "16:00 - 21:00",
      "19:00 - 23:00",
    ],
    option4: ["19:00 - 23:00"],
  };

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [message, setMessage] = useState("");
  const [subOptions, setSubOptions] = useState([]);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isAddOnOpen, setIsAddOnOpen] = useState(false);
  const [mainImage, setMainImage] = useState('/flower1.jpg');

  const handleImageClick = (newImage) => {
    setMainImage(newImage);
  };
  const isDisabled = !selectedTime;

  const handleSelectCity = (e) => {
    setSelectedCity(e.target.value);
    setSelectedTime("");
    setSelectedOption("");
    setSelectedDate("");
    setMessage("");
  };

  const handleSelectTime = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSelectChange = (e) => {
    const selected = e.target.value;
    setSelectedOption(selected);
    setSelectedTime(""); // Reset the sub-option when main option changes
    setSubOptions(options[selected] || []);
  };

  const handleCart = (event) => {
    event.preventDefault();
    setIsAddOnOpen(true);
  };

  const closeCart = (event) => {
    event.preventDefault();
    setIsAddOnOpen(false);
  };

  const handleFocus = () => {
    setIsDatePickerOpen(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsDatePickerOpen(false);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
 
  return (
    <>
      <div className={styles.main}>
        <div className={styles.sliderImage}>
         <div onClick={() => handleImageClick('/flower1.jpg')}><img src= "/flower1.jpg"/></div> 
          <div onClick={() => handleImageClick('/floral-basket.jpg')}><img src="/floral-basket.jpg"/></div>
         <div onClick={() => handleImageClick('/red-roses.jpg')}><img src="/red-roses.jpg"/></div> 

        </div>
        <div className={styles.mainimg}>
          <img src={mainImage} alt="Main Product" />
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
            <div className={styles.inputdiv}>
              <select
                id="select"
                value={selectedCity}
                onChange={handleSelectCity}
                className={styles.label}
              >
                <option value="">choose Country</option>
                <option value="option1">Pakistan</option>
                <option value="option2">Oman</option>
                <option value="option3">America</option>
              </select>
            </div>
            <div className={styles.inputdiv}>
              <DatePicker
                id="date"
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy/MM/dd"
                className={styles.label}
                minDate={new Date()} // Only allows present and future dates
                showPopperArrow={true} // Optional: hide the popper arrow
                placeholderText="Select a date"
                disabled={!selectedCity}
                onFocus={handleFocus}
                // onBlur={handleBlur}
                popperClassName={styles.customDatePickerPopper}
              />
              {isDatePickerOpen && (
                <div className={styles.datePickerOverlay}>
                  <DatePicker
                    id="popupDate"
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="yyyy/MM/dd"
                    inline
                    className={styles.popupDatePicker}
                    minDate={new Date()} // Only allows present and future dates
                  />
                </div>
              )}
            </div>
            <div className={styles.inputdiv}>
              <select
                id="select"
                value={selectedOption}
                onChange={handleSelectChange}
                className={styles.label}
                disabled={!selectedDate}
              >
                <option value="">select </option>
                <option value="option1">Morning Delivery</option>
                <option value="option2">Standard Delivery</option>
                <option value="option3">Fixed Time Deliver</option>
                <option value="option4">Midnight Delivery</option>
              </select>
            </div>
            <div className={styles.inputdiv}>
              <select
                id="select"
                value={selectedTime}
                onChange={handleSelectTime}
                className={styles.label}
                disabled={!selectedOption}
              >
                <option value="">Select time</option>
                {subOptions.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.inputdiv}>
              <textarea
                id="message"
                placeholder="Enter Message"
                onChange={handleMessageChange}
                className={styles.label}
                disabled={!selectedTime}
              />
            </div>
            
            {/* <div className={styles.tab2} >
            <div className={styles.add}  onClick={handleCart} >
                {" "}
                Add to cart
              </div>
              <Link className={styles.link} href="/cart" scroll={false}>
                <div className={styles.buy}>Buy Now</div>
              </Link>
            </div> */}
             <div className={styles.tab2}>
      <div 
        className={`${styles.add} ${isDisabled ? styles.disabled : ''}`} 
        onClick={isDisabled ? null : handleCart}
        style={isDisabled ? { pointerEvents: 'none' } : {}}
      >
        Add to cart
      </div>
      <Link 
        className={`${styles.link} ${isDisabled ? styles.disabled : ''}`} 
        href={isDisabled ? '#' : '/cart'} 
        scroll={false}
        style={isDisabled ? { pointerEvents: 'none' } : {}}
      >
        <div className={styles.buy}>Buy Now</div>
      </Link>
    </div>
          </form>
          <div className="description">
            <h2>Description</h2>
            <div className="productdetails">
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
            <div className="deliveryinformation">
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
            <div className="deliveryinformation">
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
                imageUrl2={product.imageUrl2}
                imageUrl3={product.imageUrl3}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.tab}>
        <div className={styles.add} onClick={handleCart}>
          Add To Cart
        </div>
        <Link className={styles.link} href="/cart" scroll={false}>
          <div className={styles.buy}>Buy Now</div>
        </Link>
      </div>
      {isAddOnOpen && (
        <>
          <div className={styles.backdrop} />
          <section className={styles.AddOn}>
            <div className={styles.top}>
              <h2>Add on something to make it extra special</h2>
              <FaTimes className={styles.icon} onClick={closeCart} />
            </div>

            <AddOn />
            <div className={styles.bottom}>
              <h2>Bottom</h2>
              <Link className={styles.link} href="/" scroll={false}>
                <button className={styles.button2}>
                  {" "}
                  Continue Without Add On
                </button>
              </Link>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Product;
