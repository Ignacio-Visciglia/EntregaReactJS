import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import items from '../../utils/productsMock';
import { useParams, useNavigate } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(productFilter === undefined){
            navigate('/NotFound');
        } else {
            setItem(productFilter);
        }
    }, [id]);

    const productFilter = items.find( (item) => {
        return item.id == id;
    })

    return(
        <>
            <div>
                Contenedor Item
            </div>
            <ItemDetail item={item}/>
        </>
        
    )
};

export default ItemDetailContainer;