import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import Button from '../../UI/Button'
import { useContext,useRef } from 'react';

import CartContext from '../../../Store/cartContext';


const MealItemForm = ({id, addTocartHandler}) => {
  const Inputref =useRef()


  const onFormSubmit=(event)=>{

    event.preventDefault();
    addTocartHandler(parseInt(Inputref.current.value));
  
  }
 
  return (
    <form className={classes.form} onSubmit={onFormSubmit}>
      <Input
        ref={Inputref}
        label='Amount'
        input={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <Button name="+ add"  />
    </form>
  );
};

export default MealItemForm;
