import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <div className={styles.Footer}>
        <div className={styles.Footermain}>
          <div className={styles.signupcontainer}>
            <p className={styles.signuptitle}>
              SIGN UP FOR EMAIL OFFERS & UPDATES
            </p>
            <form className={styles.signupform}>
              <div className={styles.inputcontainer}>
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.emailinput}
                />
              </div>
              <button type="submit" className={styles.submitbutton}>
                SUBMIT
              </button>
            </form>
          </div>
          <div className={styles.signupcontainer}>
            <p className={styles.signuptitle}>
              SIGN UP FOR EMAIL OFFERS & UPDATES
            </p>
            <form className={styles.signupform}>
              <div className={styles.inputcontainer}>
                {/* <i
                  className={`${styles.fa} ${styles.faenvelope} ${styles.icon}`}
                ></i> */}
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.emailinput}
                />
              </div>
              <button type="submit" className={styles.submitbutton}>
                SUBMIT
              </button>
            </form>
          </div>
          <div className={styles.signupcontainer}>
            <p className={styles.signuptitle}>
              SIGN UP FOR EMAIL OFFERS & UPDATES
            </p>
            <form className={styles.signupform}>
              <div className={styles.inputcontainer}>
                {/* <i
                  className={`${styles.fa} ${styles.faenvelope} ${styles.icon}`}
                ></i> */}
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.emailinput}
                />
              </div>
              <button type="submit" className={styles.submitbutton}>
                SUBMIT
              </button>
            </form>
          </div>
        </div>
        <div className={styles.Footersecond}>
          <div>Anniversery </div>
          <div>Birthday</div>
          <div>Flowers</div>
          <div>Cake</div>
          <div>Personalised</div>
          <div>Hamper</div>
          <div>More Gift</div>
          <div>Brands</div>
          <div>Ocassion</div>
          <div>Global</div>
          <div>Hamper</div>
          <div>More Gift</div>
          <div>Brands</div>
          <div>Ocassion</div>
          <div>Global</div>
        </div>
        <p className={styles.signuptitle}>
          Copyright © 2024 www.paradise.com.All rights reserved
        </p>
      </div>
    </>
  );
};
export default Footer;
