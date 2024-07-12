"use client";
import React, { Fragment } from "react";
import Footer from "@/component/common/Footer";
import Header from "@/component/common/Header";
import Home from "@/component/products/Home";
import Commitment from "@/component/common/Commitment";
const App = () => {
  return (
    <Fragment>
      <section id="home" className="app">
        <Header />
        <Home />
        <Commitment />
        <Footer />
      </section>
    </Fragment>
  );
};

export default App;
