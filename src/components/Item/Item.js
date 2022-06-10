import './Item.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { ThemeContext } from '../../context/ThemeContext';


const Item = ({ item }) => {

    const { id, image, title, price, stock } = item;
    const [quantity, setQuantity] = useState(1)
    
    const { darkTheme } = useContext(ThemeContext);

    const onAdd = (count) => {
        console.log(`Cantidad de items a comprar: ${count}`)
    }

    return (
        <Card className={darkTheme ? 'darkMode' : 'lightMode'}>
            <CardContent>
                <div className='item'>
                    <figure>
                        <img src={`/${image}`} alt=""/>
                        <Button variant={'outlined'} className='card-btn-details'>
                            <Link to={`/item/${id}`}>Detail</Link>
                        </Button>
                    </figure>
                    <figcaption>
                        <p>{title}</p>
                        <p>${price}</p>
                        <ItemCount  id={id}
                                    image={image}
                                    title={title}
                                    price={price}
                                    stock={stock}
                                    quantity={quantity}
                                    setQuantity={setQuantity}
                                    onAdd={onAdd}
                                    />
                    </figcaption>
                </div>
            </CardContent>
        </Card>
    );
};

export default Item;