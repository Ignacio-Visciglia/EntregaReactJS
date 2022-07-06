import './ItemListContainer.scss'
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import { collection, getDocs } from "firebase/firestore";
import db from '../../utils/firebaseConfig';

const ItemListContainer = ({greeting}) => {

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
        setProducts(data);
      } catch(err){
        console.log(err);
      } finally{
        setLoader(false);
      }
  }

    useEffect( () => {
      setLoader(true);
      getProductsAsync();
    }, []);

    return(
      <>
        {
          loader
          ?
          <Loading/>
          :
          <div className='itemListContainer'>
            <h2>{greeting}</h2>
            <ItemList items={products}/>
          </div>
        }
      </>
    )
};

export default ItemListContainer;