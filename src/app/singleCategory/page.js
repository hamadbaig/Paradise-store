"use client";
import React from "react";
// import { Link } from 'react-router-dom';
import ProductTop from "@/component/products/ProductTop";
import ProductMid from "@/component/ProductMid";
import { useRouter, useSearchParams } from "next/navigation";

const singleCategory = () => {

  const searchParams = useSearchParams();
  const search = searchParams.get("query");
  return (
    <>
      <ProductTop />
      <ProductMid 
      find={search}/>
    </>
  );
};

export default singleCategory;
