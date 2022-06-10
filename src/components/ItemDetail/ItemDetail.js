import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { CartContext } from '../../context/CartContext'

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
            <figure>
                <img src={`/${image}`} alt=""/>
            </figure>
            <figcaption>
                <p>{title}</p>
                <p>${price}</p>
                <span>3 cuotas sin interes de ${price / 3}</span>
                {!showButton ? 
                <ItemCount 
                    stock={stock}
                    onAdd={onAdd}
                />
                :
                <Button> <Link to='/cart'>Go to Cart</Link></Button>}
            </figcaption>
        </div>
    )
};

export default ItemDetail;