import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import db from '../../utils/firebaseConfig';
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { id } = useParams();

    const getProduct = async () => {
        const docRef = doc(db, 'products', id);
        const docSnapshot = await getDoc(docRef);
        let product = docSnapshot.data();
        product.id = docSnapshot.id;
        return product;
    }

    async function getProductAsincrono() {
        try{
            const data = await getProduct();
            setItem(data);
        } catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getProductAsincrono();
    }, [id]);

    return(
            <ItemDetail item={item}/>
    )
};

export default ItemDetailContainer;