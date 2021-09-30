import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../Store/cartContext';
import { useContext } from 'react';

const MealItem = (props) => {
  const {addItemToCart} =useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`;

  const addTocartHandler = (amount) => {
      addItemToCart({amount:amount,id:props.id,price:props.price,name:props.name})
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} addTocartHandler={addTocartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
