import { createContext } from "react";

const CartContext = createContext({
    isCartOpen:false,
    items:[],
    addItemToCart : (item)=>{},
    removeItemFronCart :(id) =>{},
    totalAmount : 0,

});

export default CartContext;