import './ItemDetail.scss';

const ItemDetail = ({ item }) => {

    const { title, price, image } = item;

    return(
        <div className="itemDetail">
            <figure>
                <img src={`./${image}`} alt=""/>
            </figure>
            <figcaption>
                <p>{title}</p>
                <p>${price}</p>
            </figcaption>
        </div>
    )
};

export default ItemDetail;