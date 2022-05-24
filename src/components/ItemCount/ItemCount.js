import './ItemCount.scss';
import Button from '@mui/material/Button';
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
const [count, setCount] = useState(initial);

    return(
        <>
            <div className='countItem'>
                <Button onClick={() => {
                if(count > 0){
                    setCount(count - 1)}
                }}>-</Button>
                <p>{count}</p>
                <Button onClick={() => {
                if(count < stock){
                    setCount(count + 1)
                }}}>+</Button>
            </div>
            <Button onClick={onAdd => {if(count != 0){console.log(`Cantidad de items a comprar: ${count}`)}} } variant='contained'>ADD TO CART</Button>
        </>
    );
};

export default ItemCount;