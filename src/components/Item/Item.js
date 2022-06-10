import './Item.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { ThemeContext } from '../../context/ThemeContext';
import { CartContext } from '../../context/CartContext'


const Item = ({ item }) => {

    const { id, image, title, price, stock } = item;
    
    const { darkTheme } = useContext(ThemeContext);
    const { addProductToCart } = useContext(CartContext);

    const onAdd = (quantity) => {
        addProductToCart({ id, image, title, price, quantity });
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
                        <ItemCount  stock={stock}
                                    onAdd={onAdd}
                                    />
                    </figcaption>
                </div>
            </CardContent>
        </Card>
    );
};

export default Item;