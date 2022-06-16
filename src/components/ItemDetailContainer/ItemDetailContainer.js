import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
/* import items from '../../utils/productsMock'; */
import { useParams, /* useNavigate */ } from 'react-router-dom';
import db from '../../utils/firebaseConfig';
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { id } = useParams();
    /* const navigate = useNavigate(); */

    useEffect(() => {
        /* if(productFilter === undefined){
            navigate('/NotFound');
        } else {
            setItem(productFilter);
        }
         */
        getProductAsincrono();
    }, [id]);

    const getProduct = async () => {
        const docRef = doc(db, 'products', id);
        const docSnapshot = await getDoc(docRef);
        let product = docSnapshot.data();
        product.id = docSnapshot.id
        return product;
    }
    async function getProductAsincrono() {
        try{
            const data = await getProduct();
            setItem(data);
        } catch(err){
            console.log("Catch Async");
        }
    }
    /* const productFilter = items.find( (item) => {
        return item.id == id;
    }) */

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