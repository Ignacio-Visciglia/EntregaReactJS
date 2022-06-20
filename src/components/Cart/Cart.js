import { useState, useContext } from "react";
import { Container, Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";
import Modal from '../Modal/Modal'
import {addDoc, collection} from 'firebase/firestore';
import db from '../../utils/firebaseConfig';
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cartListItems, totalPrice, removeItem, clearCart } = useContext(CartContext);
    const [showModal, setShowModal] = useState(false)
    const [date, setDate] = useState('');
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map((item)=>{
            return{
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity
            }
        }),
        purchaseDate: date,
        total: totalPrice
    })
    const [success, setSuccess] = useState ();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setDate(new Date().toString());
        setOrder({...order, buyer: formValue});
        saveData({...order, buyer: formValue});
    }

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name] : e.target.value})
    }

    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, 'orders');
        const orderDoc = await addDoc(orderFirebase, newOrder);
        setSuccess(orderDoc.id);
    }
    const endOfPurchase = () => {
        navigate('/');
        clearCart();
    }

    return(
        <Container className='container-general'>
            {console.log(date)}
        <h2>Checkout</h2>
        <div className='cart-section'>
            {cartListItems.length === 0 ? 
                <>
                    <p>The Cart is empty</p>
                    <Button className='btn-custom'>
                        <Link to='/'>Check out our products</Link>
                    </Button>
                </>
            :
            <>
                {cartListItems.map( (item) => {
                    const {id, title, image, price, quantity} = item
                    return(
                        <div className='cart-table__content' key={id}>
                            <div className='cart-table__content-img'>
                                <img src={`/${image}`} />
                            </div>
                            <div className='cart-table__content-title'>
                                <p>{title}</p>
                            </div>
                            <div className='cart-table__content-price'>
                                <p>$ {price}</p>
                            </div>
                            <div className='cart-table__content-quantity'>
                                <p>{quantity}</p>
                            </div>
                            <div className='cart-table__content-price'>
                                <Button className='btn-delete' onClick={() => {removeItem(item)}}>
                                    <Delete />
                                </Button>
                            </div>
                        </div>
                    )
                })}
                <div className='cart-footer'>
                    <div className='cart-checkout-details'>
                        <div className='cart-checkout__total'>
                            <p>Total</p>
                            <span>$ {totalPrice}</span>
                        </div>
                        <Button className='btn-custom' onClick={() => setShowModal(true)}>Completar Compra</Button>
                    </div>
                </div>
                <Modal title={success ? 'Your purchase' : 'Contact Form'} open={showModal} handleClose={() => setShowModal(false)}>
                    {success ? 
                    (<div>
                        order generated successfully
                        order id: {success}
                        order date: {date}
                        <Button onClick={endOfPurchase}>Accept</Button>
                    </div>) 
                    : 
                    (<form onSubmit={handleSubmit}>
                        <input 
                            type='text'
                            name='name'
                            placeholder='Name'
                            onChange={handleChange}
                            value={formValue.name}
                        />
                        <input 
                            type='number'
                            name='phone'
                            placeholder='Phone number'
                            onChange={handleChange}
                            value={formValue.phone}
                        />
                        <input 
                            type='mail'
                            name='email'
                            placeholder='Mail'
                            onChange={handleChange}
                            value={formValue.email}
                        />
                        <button type='submit'>Submit</button>
                    </form>)}
                </Modal>
            </>
            }
        </div>
    </Container>
    )
}

export default Cart