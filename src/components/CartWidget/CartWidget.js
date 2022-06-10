import './CartWidget.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useContext } from 'react';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../context/CartContext';
import Button from '@mui/material/Button';


const CartWidget = () => {

    const { cartListItems, clearCart, removeItem } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div className='cart-container-icon'>
            <ShoppingCartIcon 
                color={'primary'} 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <div className='container-item-list-cart'>
                    {cartListItems.length === 0 && (
                        <>
                            <p>No hay productos agregados al carrito</p>
                        </>
                    )}
                    {cartListItems.map( (item) => {
                        return(
                        <div className='item-cart-prod' key={item.id}>
                            <div className='cart-prod__image'>
                                <img src={`/${item.image}`} alt="prod carrito" />
                            </div>
                            <div className='cart-prod__quantity'>
                                <p>x{item.quantity}</p>
                            </div>
                            <div className='cart-prod__info'>
                                <p>{item.title}</p>
                                <span>$ {item.price * item.quantity}</span>
                            </div>
                            <div className='cart-prod__action'>
                                <button>
                                    <DeleteIcon onClick={ () => {removeItem(item)}}/>
                                </button>
                            </div>
                            <div>
                                <Button onClick={clearCart}>
                                    Empty Cart
                                </Button>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget;