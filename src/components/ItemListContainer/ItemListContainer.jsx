import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {

  /* const [loader, setLoader] = useState(false); */
  const [products, setProducts] = useState([]);

    const items = [
      {
      id: 1,
      title: "Stainless Tumbler",
      price: 1500,
      image: "1D9SA-ACCESORIES-StainlessTumbler.jpeg",
      stock: 5,
      description: ''
      },
      {
      id: 2,
      title: "Cloth Face Mask",
      price: 500,
      image: "2D9SA-ACCESORIES-ClothFaceMask.jpeg",
      stock: 6,
      description: ''
      },
      {
      id: 3,
      title: "Women's Boyfriend Tee",
      price: 2000,
      image: "3D9SA-CLOTHES-Women'sBoyfriendTee.jpeg",
      stock: 3,
      description: ''
      },
      {
      id: 4,
      title: "Kids Premium Tee",
      price: 5000,
      image: "4D9SA-CLOTHES-KidsPremiumTee.jpeg",
      stock: 8,
      description: '',
      }
    ];

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