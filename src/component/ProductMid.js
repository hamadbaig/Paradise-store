import React from 'react';
import ProductCard from './products/ProductCard';
import styles from './ProductMid.module.css';
// const products = [
//   {
//     name: 'Majestic Roses',
//     image: '/red-roses.jpg',
//     price: 'AED 379',
//     discount: '20% OFF',
//     delivery: 'Earliest Delivery: Today',
//     reviews: '105',
//   },
//   {
//     name: 'Majestic Roses',
//     image: '/flower1.jpg',
//     price: 'AED 379',
//     discount: '20% OFF',
//     delivery: 'Earliest Delivery: Today',
//     reviews: '105',
//   },
//   {
//     name: 'Majestic ',
//     image: '/flower1.jpg',
//     price: 'AED 379',
//     discount: '20% OFF',
//     delivery: 'Earliest Delivery: Today',
//     reviews: '105',
//   },
//   {
//     name: ' Roses',
//     image: '/flower1.jpg',
//     price: 'AED 379',
//     discount: '20% OFF',
//     delivery: 'Earliest Delivery: Today',
//     reviews: '105',
//   },
  // Add more products here
// ];
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


const ProductMid = () => {
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
        {products.map((product, {index}) => (
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

export default ProductMid;
