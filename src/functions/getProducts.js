import items from '../utils/productsMock';

const getProducts = () => {
    return new Promise( (resolve, reject) =>{
        setTimeout( () => {
            resolve(items);
        }, 2000);
    });
};

export default getProducts;