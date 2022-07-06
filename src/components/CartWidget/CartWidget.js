import './CartWidget.scss'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useContext } from 'react';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../context/CartContext';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const CartWidget = () => {

    const { cartListItems, clearCart, removeItem, showTotalItems } = useContext(CartContext)
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
            {
                (cartListItems.length === 0)
                ?
                <div className='emptyCartIcon'>
                    <ShoppingCartIcon/>
                </div>
                :
                <>
                    <div className='fullCart'>
                        <p className='showTotalItems'>{showTotalItems()}</p>
                        <ShoppingCartIcon 
                            className='fullCartIcon'
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        />
                    </div>
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
                            <div className='subContainer-item-list-cart'>
                                {cartListItems.map( (item) => {
                                    return(
                                    <div className='item-cart-prod' key={item.id}>
                                        <div className='cart-prod__image'>
                                            <img src={`/${item.image}`} alt="prod carrito" />
                                        </div>
                                        <div className='cart-prod__quantity'>
                                            <p>x{item.quantity}</p>
                                        </div>
                                        <div className='cart-prod__tittle'>
                                            <p>{item.title}</p>
                                        </div>
                                        <div className='cart-prod__price'>
                                            <span>$ {item.price * item.quantity}</span>
                                        </div>
                                        <div className='cart-prod__action'>
                                            <Button>
                                                <DeleteIcon className='DeleteIcon' onClick={ () => {removeItem(item)}}/>
                                            </Button>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                            <Button variant='outlined'> 
                                <Link to='/cart'>Go to Cart</Link>
                            </Button>
                            <div className='emptyCartAndTotal'>
                                {cartListItems.length > 1 &&
                                <div>
                                    <Button onClick={clearCart}>
                                        Empty Cart
                                    </Button>
                                </div>
                                }
                            </div>
                        </div>
                    </Menu>
                </>
            }
        </div>
    )
}

export default CartWidget;