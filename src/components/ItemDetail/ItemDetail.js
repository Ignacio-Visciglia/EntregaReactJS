import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {

    const { id, image, title, price, stock } = item;
    
    const [showButton, setShowButton] = useState(false);
    const { addProductToCart } = useContext(CartContext);

    const onAdd = (quantity) => {
        addProductToCart({ id, image, title, price, quantity });
        setShowButton(true);
    }

    return(
        <div className="itemDetail">
            <div className='img'>
                <img src={`/${image}`} alt=""/>
            </div>
            <div className='data'>
                <p>{title}</p>
                <p>${price}</p>
                <span>3 payments of ${(price / 3).toFixed(2)}</span>
                {!showButton ? 
                <ItemCount 
                    stock={stock}
                    onAdd={onAdd}
                />
                :
                <Button variant='outlined'> 
                    <Link to='/cart'>Go to Cart</Link>
                </Button>}
            </div>
        </div>
    )
}

export default ItemDetail;