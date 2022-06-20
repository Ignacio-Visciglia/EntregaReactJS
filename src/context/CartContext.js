import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart){
            setTotalPrice(totalPrice + product.price * product.quantity);
            return setCartListItems(cartListItems => [...cartListItems, product])
        }
    }

    const clearCart = () => {
        setCartListItems([]);
        setTotalPrice(0);
    }

    const removeItem = (item) => {
        setTotalPrice(totalPrice - item.price * item.quantity);
        return setCartListItems(cartListItems.filter(cartItem => cartItem.id !== item.id));
    }

    const showTotalItems = () => {
        return cartListItems.reduce((acc, current) => acc += current.quantity, 0)
    }

    const data = {
        cartListItems,
        addProductToCart,
        clearCart,
        removeItem,
        totalPrice,
        showTotalItems,
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext};
export default CartProvider;