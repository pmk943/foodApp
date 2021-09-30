import { useContext } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart'


import CartContext from './Store/cartContext'



function App() {
  const {isCartOpen,items,totalAmount} = useContext(CartContext)
  console.log(items,totalAmount)
  return (
    <>
      {isCartOpen && <Cart />}
      <Header />
        <main>
          <Meals />
        </main>
      
    </>
  );
}

export default App;
