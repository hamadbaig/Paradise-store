import React from "react";
import styles from "./AddOnCard.module.css";
const AddOnCard = ({ name, price, imageUrl }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardpic}>
          <img src={imageUrl} className={styles.logoimg} />
        </div>
        <h3>{name}</h3>

        <h3 className={styles.price}>{price}</h3>
        <div className={styles.btnDiv}>
          <button className={styles.button}>+ ADD</button>
        </div>
      </div>
    </>
  );
};

export default AddOnCard;
