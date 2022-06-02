import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import items from '../../utils/productsMock';

const ProductListContainer = () => {

    const { categoryId } = useParams();

    const [products, setProducts] = useState([]);


    const getProducts = () => {
        return new Promise( (resolve, reject) =>{
            setTimeout( () => {
                resolve(items);
            }, 2000);
        });
    };

    async function getProductsAsincrono() {
        try{
            const data = await getProducts();
            filterByCategory(data);
        } catch(err){
            console.log("Catch Async");
        } finally{
            console.log("Finally Async")
        }
    }

    const filterByCategory = (array) => {
        return array.map( (item) => {
            if(item.category == categoryId) {
                return setProducts(products => [...products, item])
            }
        })
    }

    useEffect( () => {
        setProducts([]);
        getProductsAsincrono();
    }, [categoryId]);

    return(
        <ItemList items={products}/>
    )
}

export default ProductListContainer;