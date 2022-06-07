import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const ItemDetail = ({ item }) => {

    const { id, image, title, price, stock } = item;
    const [quantity, setQuantity] = useState(1);
    const [showButton, setShowButton] = useState(false);

    const onAdd = (count) => {
        console.log(`Cantidad de items a comprar: ${count}`)
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
                    quantity={quantity}
                    setQuantity={setQuantity}
                    setShowButton={setShowButton}
                    onAdd={onAdd}
                />
                :
                <Button> <Link to='/cart'>Go to Cart</Link></Button>}
                
            </figcaption>
        </div>
    )
};

export default ItemDetail;