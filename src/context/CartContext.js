import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cartListItems, setCartListItems] = useState([])

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart){
            return setCartListItems(cartListItems => [...cartListItems, product])
        }
    }

    const clearCart = () => {
        setCartListItems([]);
    }

    const removeItem = (item) => {
        return setCartListItems(cartListItems.filter(cartItem => cartItem.id !== item.id));
    }

    const data = {
        cartListItems,
        addProductToCart,
        clearCart,
        removeItem
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext};
export default CartProvider;