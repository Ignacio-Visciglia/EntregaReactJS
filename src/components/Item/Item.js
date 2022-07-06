import './Item.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Item = ({ item }) => {

    const { id, image, title, price } = item;

    return (
        <Card className='card'>
            <CardContent className='cardContent'>
                <div className='item'>
                    <figure>
                        <img src={`/${image}`} alt=""/>
                        <Button 
                        className='card-btn-details'>
                            <Link className='link' to={`/item/${id}`}>Detail</Link>
                        </Button>
                    </figure>
                    <figcaption>
                        <p className='price'>${price}</p>
                        <p className='tittle'>{title}</p>
                    </figcaption>
                </div>
            </CardContent>
        </Card>
    )
}

export default Item;