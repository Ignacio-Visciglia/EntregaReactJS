import { useContext } from "react";
import { Container, Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartListItems, totalPrice, removeItem } = useContext(CartContext);

    return(
        <Container className='container-general'> 
        <h2>Checkout</h2>
        <div className='cart-section'>
            {cartListItems.length === 0 && (
                        <>
                            <p>The Cart is empty</p>
                            <Button className='btn-custom'>
                                <Link to='/'>Check out our products</Link>
                            </Button>
                        </>
                    )}
            {cartListItems.map( (item) => {
                const {id, title, image, price, quantity} = item
                return(
                    <div className='cart-table__content' key={id}>
                        <div className='cart-table__content-img'>
                            <img src={`/${image}`} />
                        </div>
                        <div className='cart-table__content-title'>
                            <p>{title}</p>
                        </div>
                        <div className='cart-table__content-price'>
                            <p>$ {price}</p>
                        </div>
                        <div className='cart-table__content-quantity'>
                            <p>{quantity}</p>
                        </div>
                        <div className='cart-table__content-price'>
                            <Button className='btn-delete' onClick={() => {removeItem(item)}}>
                                <Delete />
                            </Button>
                        </div>
                    </div>
                )
            })}
            <div className='cart-footer'>
                <div className='cart-checkout-details'>
                    <div className='cart-checkout__total'>
                        <p>Total</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <Button className='btn-custom'>Completar Compra</Button>
                </div>
            </div>
        </div>
    </Container>
    )
}

export default Cart