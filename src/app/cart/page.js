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
      time: "07:00 - 09:00 Hrs",
      date: "Tue, 23 Jul, 2024",
      method: " Morning Delivery:AED 59"
    },
    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
      quantity: 3,
      time: "07:00 - 09:00 Hrs",
      date: "Tue, 23 Jul, 2024",
      method: " Morning Delivery:AED 59"
    },
    {
      name: "Pink Gypso Beauty Arrangement",
      price: "AED 249",
      imageUrl: "/flower1.jpg",
      quantity: 1,
      time: "07:00 - 09:00 Hrs",
      date: "Tue, 23 Jul, 2024",
      method: " Morning Delivery:AED 59"
    },
    {
      name: "Mixed Floral Basket",
      price: "AED 319",
      imageUrl: "/floral-basket.jpg",
      quantity: 5,
      time: "07:00 - 09:00 Hrs",
      date: "Tue, 23 Jul, 2024",
      method: " Morning Delivery:AED 59"
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
      {products.map((product, index) => (
        <div>
        <div className={styles.CartMain2} key={index}>
          <div className={styles.cartImage}>
            <img src={product.imageUrl} alt={product.name} />
            <div>Delete</div>
          </div>
          <div>
          <div>{product.name}</div>
          <div>{product.price} {"  "}</div>
          <div>
           <div className={styles.deliver}> QTY : {product.quantity}</div>

           <div>Delivery ON:</div>
           <div className={styles.deliver}>{product.time} | {product.date} | {product.method}</div>
          </div>
          </div>
          {/* <div>
            {parseFloat(product.price.replace("AED ", "")) * product.quantity}
          </div> */}
          <div className={styles.change}>Change </div>
          
        </div>
         <div className={styles.formContainer}>
         <h2>Select Delivery Address</h2>
         <form>
           <div className={styles.formGroup}>
             <label htmlFor="name">Name</label>
             <input type="text" id="name" name="name" required />
           </div>
           <div className={styles.formGroup}>
             <label htmlFor="city">Recipient's City</label>
             <input type="text" id="city" name="city"  required />
           </div>
           <div className={styles.formGroup}>
             <label htmlFor="address">Recipient's Address</label>
             <input type="text" id="address" name="address"  required />
           </div>
           <div className={styles.formGroup}>
             <label htmlFor="landmark">Landmark</label>
             <input type="text" id="landmark" name="landmark" />
           </div>
           <div className={styles.formGroup}>
             <label htmlFor="mobile">Recipient's Mobile</label>
             <input type="text" id="mobile" name="mobile" required />
           </div>
           <div className={styles.formGroup}>
             <label htmlFor="email">Recipient's Email (optional)</label>
             <input type="email" id="email" name="email"  />
           </div>
           <div className={styles.formGroup}>
             <label>Address Type</label>
             <div className={styles.radioGroup}>
               <label>
                 <input type="radio" name="addressType" value="home" /> Home
               </label>
               <label>
                 <input type="radio" name="addressType" value="office" /> Office
               </label>
               <label>
                 <input type="radio" name="addressType" value="other" /> Other
               </label>
             </div>
           </div>
           <button type="submit" className={styles.submitButton}>Save and Deliver Here</button>
           <button type="button" className={styles.cancelButton}>Cancel</button>
         </form>
       </div>
         </div>
         
      ))}
      
      </div>
    </>
  );
};

export default cart;
