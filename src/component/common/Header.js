"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { MdCardGiftcard } from "react-icons/md";
import { IoIosCall, IoMdContact, IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineCorporateFare } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isContentVisible2, setIsContentVisible2] = useState(false);

  const handleToggle = () => {
    setIsContentVisible(!isContentVisible);
  };
  const handleToggle2 = () => {
    setIsContentVisible2(!isContentVisible2);
  };
  return (
    <>
      <div className={styles.topbaar}>
        <div>
          <text>AED</text>
        </div>
        <div>
          <text>Call Us +971 43387676</text>
        </div>
        <div>
          <text>العربية</text>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="/Paradiselogo2.png" className={styles.logoimg} />
        </div>
        {/* <div></div> */}
        <div className={styles.multitimes2}>
          <div>
            <FaCartShopping className={styles.icon} />
            <text>Cart</text>
          </div>
          <div>
            <IoMdHelpCircleOutline className={styles.icon} />
            <text>Help</text>
          </div>
          <div>
            <MdOutlineCorporateFare className={styles.icon} />
            <text>Corporate</text>
          </div>
          <div>
            <FaCartShopping className={styles.icon} />
            <text>Cart</text>
          </div>
          <div>
            <IoMdContact className={styles.icon} />
            <text>Account</text>
          </div>
        </div>
        <div className={styles.toggleicon}>
          <div className={styles.times}>
            {isContentVisible ? (
              <FaTimes className={styles.icon} onClick={handleToggle} />
            ) : (
              <FaBars className={styles.icon} onClick={handleToggle} />
            )}
            <div className={styles.multitimes}>
              {/* <FaTimes className={styles.icon} /> */}
              {/* <IoIosCall className={styles.icon} /> */}
              <FaSearch className={styles.icon} />
              <MdCardGiftcard className={styles.icon} />
              <FaCartShopping className={styles.icon} />
              <BsThreeDotsVertical
                className={styles.icon}
                onClick={handleToggle2}
              />
            </div>
          </div>
        </div>
        {isContentVisible2 && (
          <div className={styles.contentdiv}>
            <div className={styles.drawer}>
              <a className={styles.options} href="/">
                HOME
              </a>
            </div>
            <div className={styles.drawer}>
              <a className={styles.options} href="/Aboutus">
                ABOUT
              </a>
            </div>
            <div className={styles.drawer}>
              <a className={styles.options} href="/Work">
                WORK
              </a>
            </div>
            <div className={styles.drawer}>
              <a className={styles.options} href="/Contact">
                CONTACT
              </a>
            </div>
          </div>
        )}
        {isContentVisible && (
          <div className={styles.contentdiv}>
            <div className={styles.profile}>
              <div className={styles.prologo}>
                <IoMdContact className={styles.icon2} />
                <p className={styles.text}>Hi Guest</p>
              </div>
              <div className={styles.protext}>
                <div className={styles.text}>
                  <text>Login</text>
                </div>
                <div className={styles.text}>
                  <text>Track order</text>
                </div>
                <div className={styles.text}>
                  <text>Help center</text>
                </div>
              </div>
            </div>
            <div className={styles.drawer}>
              <a className={styles.options} href="/">
                HOME
              </a>
            </div>
            <div className={styles.drawer}>
              <a className={styles.options} href="/Aboutus">
                ABOUT
              </a>
            </div>
            <div className={styles.drawer}>
              <a className={styles.options} href="/Work">
                WORK
              </a>
            </div>
            <div className={styles.drawer}>
              <a className={styles.options} href="/Contact">
                CONTACT
              </a>
            </div>
          </div>
        )}
      </div>
      <div className={styles.headerbot}>
        <div>
          Anniversery{" "}
          <span>
            <RiArrowDropDownLine />
          </span>
        </div>
        <div>
          Birthday{" "}
          <span>
            <RiArrowDropDownLine />
          </span>
        </div>
        <div>
          Flowers
          <span>
            <RiArrowDropDownLine />
          </span>
        </div>
        <div>
          Cake
          <span>
            <RiArrowDropDownLine />
          </span>
        </div>
        <div>
          Personalised
          <span>
            <RiArrowDropDownLine />
          </span>
        </div>
        <div>
          Hamper
          <span>
            <RiArrowDropDownLine />
          </span>
        </div>
        <div>
          More Gift
          <span>
            <RiArrowDropDownLine />
          </span>
        </div>
        <div>
          Brands
          <span>
            <RiArrowDropDownLine />
          </span>
        </div>
        <div>
          Ocassion
          <span>
            <RiArrowDropDownLine />
          </span>
        </div>
        <div>
          Global
          <span>
            <RiArrowDropDownLine />
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
