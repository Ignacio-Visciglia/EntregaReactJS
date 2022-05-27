import './ItemCount.scss';
import Button from '@mui/material/Button';
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
const [count, setCount] = useState(initial);

const handleIncrease = () => {
    if (count < stock){
        setCount(count + 1)
    }
}
const handleDecrease = () => {
    if(count > initial ){
        setCount(count - 1)
    }       
}

    return(
        <>
            <div className='countItem'>
                <Button onClick={handleDecrease}>-</Button>
                <p>{count}</p>
                <Button onClick={handleIncrease}>+</Button>
            </div>
            <Button onClick={() => {onAdd(count)}} variant='contained'>ADD TO CART</Button>
        </>
    );
};

export default ItemCount;