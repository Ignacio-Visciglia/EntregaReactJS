import './CardItem.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ItemCount from '../ItemCount/ItemCount'

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
                        <ItemCount stock={5} initial={1}/>
                    </figcaption>
                </div>
            </CardContent>
        </Card>
    );
};

export default CardItem;