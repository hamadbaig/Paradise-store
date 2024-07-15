import styles from "./Home.module.css";
import Link from "next/link";
const ProductCard = ({ name, price, imageUrl }) => {
  return (
    <>
      <div className={styles.card}>
        <Link
          className={styles.link}
          href={{
            pathname: `/product`,
            query: { name, price, imageUrl },
          }}
          scroll={false}
        >
          <div className={styles.cardpic}>
            <img src={imageUrl} className={styles.logoimg} />
          </div>
          <h3>{name}</h3>
          <h3 className={styles.price}>{price}</h3>
        </Link>
      </div>
    </>
  );
};
export default ProductCard;
