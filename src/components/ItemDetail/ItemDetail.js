import './ItemDetail.scss';

const ItemDetail = ({ item }) => {

    const { title, price, image, id } = item;
    
    return(
        <div className="itemDetail">
            <figure>
                <img src={`/${image}`} alt=""/>
            </figure>
            <figcaption>
                <p>{title}</p>
                <p>${price}</p>
                <span>3 cuotas sin interes de ${price / 3}</span>
            </figcaption>
        </div>
    )
};

export default ItemDetail;