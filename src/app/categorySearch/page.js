"use client";
import React from "react";
// import { Link } from 'react-router-dom';
import ProductMid from "@/component/ProductCategory";
import { useRouter, useSearchParams } from "next/navigation";
import ProductCategory from "@/component/ProductCategory";

const categorySearch = () => {

  const searchParams = useSearchParams();
  const search = searchParams.get("category");
  console.log(search,"catttttt")
  return (
    <>
      <ProductCategory 
      find={search}/>
    </>
  );
};

export default categorySearch;
