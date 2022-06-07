import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import getProducts from '../../functions/getProducts';

const ProductListContainer = () => {

    const { categoryId } = useParams();

    const [loader, setLoader] = useState(false);
    const [products, setProducts] = useState([]);

    async function getProductsAsincrono() {
        try{
            const data = await getProducts();
            filterByCategory(data);
        } catch(err){
            console.log("Catch Async");
        } finally{
            setLoader(false);
        }
    }

    const filterByCategory = (array) => {
        setProducts([]);
        return array.map( (item) => {
            if(item.category == categoryId) {
                return setProducts(products => [...products, item])
            }
        })
    }

    useEffect( () => {
        setLoader(true)
        getProductsAsincrono();
    }, [categoryId]);

    return(
        <>
            {
                (loader)
                ?
                (<Loading/>)
                :
                <ItemList items={products}/>
            }
        </>
        
    )
}

export default ProductListContainer;