import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../Store/cart-context';

const HeaderCartButton = props => {
   const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
   const cartCtx = useContext(CartContext);


   const {items} = cartCtx;

   const numberOfCartItems = items.reduce((curNumber, item) => {
     return curNumber + item.amount;
   }, 0);
     

   const btnClasses = `${classes.button} ${btnIsHighlighted ?  classes.bump : ''}` 
   useEffect(()=> {
     if (cartCtx.items.length === 0) {
       return;
     }
     const timer = setBtnIsHighlighted(true);
     setTimeout(() => {
       setBtnIsHighlighted(false);
     }, 300);

     return () => {
       clearTimeout(timer);
     };
   }, [items]); 

    return <button className={btnClasses} onClick={props.Clicks}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
};

export default HeaderCartButton;