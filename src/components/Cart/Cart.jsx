import React from 'react';
import Modal from "../UI/Modal.jsx";
import './cart.css';

const Cart = (props) => {
    const cartItems = <ul className="cart-items">{
        [
            {
                id: 'c1',
                name: 'Sushi',
                amount: 2,
                price: 12.99
            },
            {
                id: 'c2',
                name: 'Schnitzel',
                amount: 1,
                price: 9.99
            }
        ].map(item => <li key={item.id}>{item.name}</li>)
    }</ul>;
    console.log(cartItems)
    return (
        <Modal>
            {cartItems}
            <div className="total">
                <span className="text-dark">Total Amount</span>
                <span>34.63</span>
            </div>
            <div className="actions">
                <button type="button" className="btn btn-secondary">Close</button>
                <button type="type" className="btn btn-primary">Order Now</button>
            </div>
        </Modal>
    );
};
export default Cart;



