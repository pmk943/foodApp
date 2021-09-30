import React,{useReducer} from 'react'
import CartContext from './cartContext'
const intialState ={ 
    isCartOpen: false,
    items:[],
    totalAmount:0
}

const reducer = (state,action) =>{

    switch (action.type){
        case "ADD_ITEM" :
             const updatedItem = state.items.concat(action.payload)
            //console.log("inside ADDITEm",state.items.concat({}))
            console.log("----",updatedItem)
            return {...state,items:updatedItem}
        case "TOGGLE_CART":
            return {...state,isCartOpen:!state.isCartOpen}
             
        default:
            return intialState;
    }
}

function CartProvider({children}) {
    const [state , dispatch] =useReducer(reducer,intialState)
    console.log("state",state)

    const addItemToCart = (item) =>{

            dispatch({type:"ADD_ITEM" ,payload:item})
    }

    const removeItemFronCart = () =>{

    }

    const onClickingCart = () =>{
        console.log("function called")
        dispatch({type:'TOGGLE_CART'})
    }

    const cartContext={
        isCartOpen:state.isCartOpen,
        items:state.items,
        addItemToCart : addItemToCart,
        removeItemFronCart : removeItemFronCart,
        onClickingCart : onClickingCart,
        totalAmount : state.totalAmount,
    
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider; 
