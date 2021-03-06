// import Cookie from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Basket from './basket';
import Header from './header';
import Main from './main';

export default function Home(props) {
  const [cartItems, setCartItems] = useState([]);
  const products = props.productsData;

  // function to add the product
  function onAdd(product) {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }

  // function to remove the products
  function onRemove(product) {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x,
        ),
      );
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <div className={styles.mainContainer}>
          <Header countCartItems={cartItems.length}> </Header>
          <div className={styles.cartFlex}>
            <div className={styles.row}>
              <Main onAdd={onAdd} products={products} />
            </div>
            <div>
              <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
            </div>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

// Getting the server side props

export async function getServerSideProps() {
  const { getProducts } = await import('../util/database');

  const productsData = await getProducts();

  // console.log(productsData);

  return {
    props: {
      productsData,
    },
  };
}
