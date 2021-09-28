import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import Button from '../../UI/Button'

const MealItemForm = (props) => {

  const onButtonSubmit=(event)=>{
    event.preventDefault()
    console.log("button is clicked")
  }
  return (
    <form className={classes.form}>
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <Button name="+ add" onButtonClick={onButtonSubmit} />
    </form>
  );
};

export default MealItemForm;
