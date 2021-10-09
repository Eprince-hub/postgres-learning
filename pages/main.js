import styles from '../styles/Home.module.css';
import Product from './product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className={`${styles.block} ${styles.col2}`}>
      <h2>Products</h2>
      <div className={styles.productMainDisplay}>
        <div className={styles.row}>
          {products.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </main>
  );
}
