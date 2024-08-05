"use client"
import React, { useState, useEffect } from 'react';
import ProductCard from './products/ProductCard';
import styles from './ProductMid.module.css';

const ProductCategory = ({ find }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/getProductsByCategories', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ categoryId: [find] }), // Assuming find is a single category ID
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (find) {
      fetchProducts();
    }
  }, [find]);

  return (
    <div className={styles.container}>
      <h1>Flower Shop</h1>
      <div className={styles.breadcrumb}>
        Home › Flower Delivery Dubai
      </div>
      <div className={styles.reviews}>
        <span>4.9</span>
        <a href="#reviews">7704 Reviews</a>
      </div>
      <div className={styles.filters}>
        <div className={styles.filterOptions}>
          <select>
            <option>Gift Type</option>
            {/* Add more options as needed */}
          </select>
          <select>
            <option>Occasion</option>
            {/* Add more options as needed */}
          </select>
          <select>
            <option>Delivery City</option>
            {/* Add more options as needed */}
          </select>
          <select>
            <option>Price</option>
            {/* Add more options as needed */}
          </select>
          <select>
            <option>Delivery Date</option>
            {/* Add more options as needed */}
          </select>
          <select>
            <option>Sort By</option>
            <option>Recommended</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
      <div className={styles.productList}>
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
      <div className={styles.whatsapp}>
        <a href="https://wa.me/03347573726" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-whatsapp-icon.png" alt="WhatsApp" />
        </a>
      </div>
    </div>
  );
};

export default ProductCategory;
