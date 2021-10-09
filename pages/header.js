import styles from '../styles/Home.module.css';

export default function Header(props) {
  const { countCartItems } = props;
  return (
    <header className={`${styles.row} ${styles.block} ${styles.center}`}>
      <div>
        <a href="#/">
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart
          {countCartItems ? (
            <button className={`{${styles.buttonStyle} ${styles.badge}}`}>
              {' '}
              {countCartItems}
            </button>
          ) : (
            ' '
          )}
        </a>{' '}
        <a href="#/signin">Signin</a>
      </div>
    </header>
  );
}
