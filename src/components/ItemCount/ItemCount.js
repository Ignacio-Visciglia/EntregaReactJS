import './ItemCount.scss';
import Button from '@mui/material/Button';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const ItemCount = ({ id, image, title, price, stock, quantity, onAdd, setQuantity }) => {

    const { addProductToCart } = useContext(CartContext);

    const handleIncrease = () => {
        if (quantity < stock){
            setQuantity(quantity + 1);
        }
    }
    const handleDecrease = () => {
        if(quantity > 1 ){
            setQuantity(quantity - 1);
        }       
    }

    return(
        <>
            <div className='countItem'>
                <Button onClick={handleDecrease}>-</Button>
                <p>{quantity}</p>
                <Button onClick={handleIncrease}>+</Button>
            </div>
            <Button onClick={() => {onAdd(quantity); addProductToCart({id, image, title, price, stock, quantity})}} variant='outlined'>ADD TO CART</Button>
        </>
    );
};

export default ItemCount;