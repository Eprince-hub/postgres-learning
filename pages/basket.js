import styles from '../styles/Home.module.css';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;

  console.log('Guessing this is the cart items');
  console.log(cartItems);
  // This will be for calculating the Basket items and totals

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;

  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <div className={styles.cartItems}>
      <aside className={`${styles.cartItemsBox} ${styles.col1}`}>
        <h2>Cart Items</h2>

        <div>{cartItems.length === 0 && <div> Cart Is Empty</div>}</div>

        {cartItems.map((item) => (
          <div key={item.id} className={styles.row}>
            <div className={styles.col2}>{item.name}</div>
            <div className={styles.col2}>
              <button
                onClick={() => {
                  onAdd(item);
                  console.log('You clicked me: ');
                }}
                className={`${styles.buttonStyle} ${styles.add}`}
              >
                +
              </button>
              <button
                onClick={() => onRemove(item)}
                className={`${styles.buttonStyle} ${styles.remove}`}
              >
                -
              </button>
            </div>

            <div className={`${styles.col2} ${styles.textRight}`}>
              {item.qty} X ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr />
            {/* Showing items total price prices */}
            <div className={styles.row}>
              <div className={styles.col2}>Items Price</div>
              <div className={`${styles.col1} ${styles.textRight}`}>
                ${itemsPrice.toFixed(2)}
              </div>
            </div>
            {/* showing the items  Tax*/}
            <div className={styles.row}>
              <div className={styles.col2}>Tax Price</div>
              <div className={`${styles.col1} ${styles.textRight}`}>
                ${taxPrice.toFixed(2)}
              </div>
            </div>

            {/* showing the items  Shipping*/}
            <div className={styles.row}>
              <div className={styles.col2}>Shipping Price</div>
              <div className={`${styles.col1} ${styles.textRight}`}>
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            {/* Complete Total Price Payable */}
            <div className={styles.row}>
              <div className={styles.col2}>
                <strong>Total Price</strong>
              </div>
              <div className={`${styles.col1} ${styles.textRight}`}>
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
          </>
        )}

        <hr />

        <div className={styles.row}>
          {cartItems.length ? (
            <button
              className={styles.buttonStyle}
              onClick={() => alert('implemented Checkout')}
            >
              Checkout
            </button>
          ) : (
            ' '
          )}
        </div>
      </aside>
    </div>
  );
}
