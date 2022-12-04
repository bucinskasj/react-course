import React, {useContext, useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import styles from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBthIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);


  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setBthIsHighlighted(true);

    const timer = setTimeout(() => {
      setBthIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [items]);
  
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;