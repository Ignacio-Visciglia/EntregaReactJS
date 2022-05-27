import './Item.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ItemCount from '../ItemCount/ItemCount'

const Item = ({ image, title, price, stock }) => {

    /* const {image, title, price, stock} = item; */

    const onAdd = (count) => {
        console.log(`Cantidad de items a comprar: ${count}`)
    }

    return (
        <Card>
            <CardContent>
                <div className='item'>
                    <figure>
                        <img src={`./${image}`} alt=""/>
                    </figure>
                    <figcaption>
                        <p id="descripcion">{title}</p>
                        <p id="precio">${price}</p>
                        <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                    </figcaption>
                </div>
            </CardContent>
        </Card>
    );
};

export default Item;