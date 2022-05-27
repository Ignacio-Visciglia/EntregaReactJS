import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList'
import items from '../../utils/productsMock'

const ItemListContainer = ({greeting}) => {

  /* const [loader, setLoader] = useState(false); */
  const [products, setProducts] = useState([]);

    const getProducts = () => {
        return new Promise( (resolve, reject) =>{
            setTimeout( () => {
                resolve(items);
            }, 2000);
        });
    };

    //Funciones asincronas. Reemplaza el bloque then-catch-finally
    async function getProductsAsincrono() {
        try{
            const data = await getProducts();
            console.log("Try productos asincrono", data);
            setProducts(data);
        } catch(err){
            console.log("Catch Async");
        } finally{
            console.log("Finally Async")
        }
    }

    useEffect( () => {
    /* abro el Loader
    setLoader(true);
    getProducts()
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
    })
    */
    getProductsAsincrono();
    }, []);
    //Esto lo hace en Fase Montaje de su ciclo de vida

    return(
      <>
        <div>{greeting}</div>
        <ItemList items={products}/>
      </>
    )
};

export default ItemListContainer;