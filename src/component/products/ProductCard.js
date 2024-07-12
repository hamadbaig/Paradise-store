import styles from "./Home.module.css";
const ProductCard = () => {
  return (
    <>
      <div className={styles.card}>
        <img src="/flower1.jpg" className={styles.logoimg} />
        <h3>Pink Gypso Beauty Arrangement</h3>
        <h3>AED 249</h3>
      </div>
    </>
  );
};
export default ProductCard;
