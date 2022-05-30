import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail'
import { producto } from '../../utils/productsMock'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(producto);
            },2000);
        });
    };

    async function getItemAsync(){
        try{
            const data = await getItem();
            setItem(data);
        } catch(err){
            console.log(err);
        } finally{
            console.log('Finally');
        }
    }

    useEffect(() => {
        getItemAsync();
    }, []);

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