import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
/* import getProducts from '../../functions/getProducts'; */
//FireStore
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

    //Funciones asincronas. Reemplaza el bloque then-catch-finally
    async function getProductsAsincrono() {
        try{
            const data = await getProducts();
            setProducts(data);
        } catch(err){
            console.log("Catch Async");
        } finally{
            setLoader(false);
        }
    }

    useEffect( () => {
    //Abro el Loader
    setLoader(true);
    /* getProducts()
    .then( (response) => {
    console.log('Then:', response);
    })
    .catch( (err) => {
    console.log(`Catch`);
    })
    .finally( () => {
    setLoader(false);
    Cierro el loader. Lo cierro en finally porque sino debería llamarlo tanto en then como en catch, ya que podria ir por cualquiera, en cambio finally siempre se ejecuta.
    console.log(`Finally`);
    }) */
   
    
    /* getProducts(); */
    getProductsAsincrono();
    }, []);
    //Esto lo hace en Fase Montaje de su ciclo de vida

    return(
      <>
        {
            (loader)
            ?
            (<Loading/>)
            :
            <>
            <div>{greeting}</div>
            <ItemList items={products}/>
            </>
        }
      </>
    )
};

export default ItemListContainer;