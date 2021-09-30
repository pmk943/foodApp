import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../Store/cartContext'


const HeaderCartButton = (props) => {
const {onClickingCart,items} =useContext(CartContext)
console.log("--items",items)
const total = items.reduce((acc,item)=>acc+item.amount,0)

  return (
    <button className={classes.button} onClick={onClickingCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default HeaderCartButton;
