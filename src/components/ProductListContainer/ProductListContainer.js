import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import { collection, getDocs } from "firebase/firestore";
import db from '../../utils/firebaseConfig';

const ProductListContainer = () => {

    const { categoryId } = useParams();
    const [loader, setLoader] = useState(false);
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const productSnapshot = await getDocs(collection(db, "products"));
        const productList = productSnapshot.docs.map((doc)=>{
          let product = doc.data();
          product.id = doc.id;
          return product;
        })
        return productList;
      }

    async function getProductsAsync() {
        try{
            const data = await getProducts();
            filterByCategory(data);
        } catch(err){
            console.log(err);
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
        setLoader(true);
        getProductsAsync();
    }, [categoryId]);

    return(
        <>
            {
                loader
                ?
                <Loading/>
                :
                <ItemList items={products}/>
            }
        </>
        
    )
}

export default ProductListContainer;