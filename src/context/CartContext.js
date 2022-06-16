import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    

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
        /* console.log(totalItems)
        setTotalPrice(totalPrice - item.price * item.quantity); */
        /* setTotalItems(totalItems - item.quantity) */
        /* setTotalItems(0) */
        return setCartListItems(cartListItems.filter(cartItem => cartItem.id !== item.id));
    }
    

    const showTotalItems = () => {
        /* setTotalItems(0) */
        console.log('totalItemsDesdeShowTotalItems: ', totalItems)
        cartListItems.map( ( item ) => {
            return setTotalItems(totalItems + item.quantity)
        })
    }

    const data = {
        cartListItems,
        addProductToCart,
        clearCart,
        removeItem,
        totalPrice,
        showTotalItems,
        totalItems
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext};
export default CartProvider;