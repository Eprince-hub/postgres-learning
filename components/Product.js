import React from 'react';
import styles from '../styles/Home.module.css';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className={styles.productWrapper}>
      <div>
        <img className={styles.small} src={product.image} alt={product.name} />

        <h3>{product.name}</h3>
        <div>${product.price}</div>
        <div>
          <button className={styles.buttonStyle} onClick={() => onAdd(product)}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
