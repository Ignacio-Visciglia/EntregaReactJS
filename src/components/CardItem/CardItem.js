import './CardItem.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const CardItem = ({title, price, image}) => {
    return (
        <Card>
            <CardContent>
                <div className='card-item'>
                    <figure>
                        <img src={`./${image}`} alt=""/>
                    </figure>
                    <figcaption>
                        <p id="descripcion">{title}</p>
                        <p id="precio">${price}</p>
                        <Button variant='contained'>ADD TO CART</Button>
                    </figcaption>
                </div>
            </CardContent>
        </Card>
    );
};

export default CardItem;