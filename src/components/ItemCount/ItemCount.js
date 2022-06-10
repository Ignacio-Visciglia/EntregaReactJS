import './ItemCount.scss';
import Button from '@mui/material/Button';
import { useState } from 'react';

const ItemCount = ({ stock, onAdd}) => {

    const [quantity, setQuantity] = useState(1);

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
            <Button onClick={() => {onAdd(quantity)}} variant='outlined'>ADD TO CART</Button>
        </>
    );
};

export default ItemCount;