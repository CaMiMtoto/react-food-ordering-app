import React, {useContext} from 'react';
import Modal from "../UI/Modal.jsx";
import CartContext from "../../store/cart-context.jsx";
import {IconExclamationCircle} from "@tabler/icons";
import CartItem from "./CartItem.jsx";


const Cart = () => {
    let cartCtx = useContext(CartContext);
    let items = cartCtx.items;
    // const cartItems = ;
    let totalAmount = items.reduce((sum, item) => sum + item.amount * item.price, 0).toLocaleString();
    const hasItems = cartCtx.items.length > 0;
    const cartItemQtyRemoveHandler = (id) => {
        cartCtx.removeItemQty(id);
    }
    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item);
    }
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const clearCartHandler = () => {
        cartCtx.clearCart();
    }


    return (
        <Modal
            id="cartModal"
            title="Your Cart">
            {
                hasItems &&
                <div>
                    <div className="list-group mb-4">
                        {
                            items.map(item =>
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                                    onQtyRemove={cartItemQtyRemoveHandler.bind(null, item.id)}
                                    onAdd={cartItemAddHandler.bind(null, item)}
                                />
                            )
                        }
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <span className="text-dark fw-bold h6">Total Amount:</span>
                        <span className="fw-bold">${totalAmount}</span>
                    </div>
                    <div className="d-flex gap-2 justify-content-end">
                        <button type="type" className="btn btn-success px-3 rounded-pill btn-sm">Order Now</button>
                        <button onClick={clearCartHandler} type="type"
                                className="btn btn-danger px-3 rounded-pill btn-sm">
                            Clear Cart
                        </button>
                        <button type="button" data-bs-dismiss="modal"
                                className="btn btn-outline-success px-3 rounded-pill btn-sm">Close
                        </button>
                    </div>
                </div>
            }

            {
                !hasItems &&
                <div className="alert alert-danger mb-4">
                    <h5 className="mb-0">
                        <IconExclamationCircle/>
                        Your cart is empty
                    </h5>
                </div>
            }


        </Modal>
    );
};
export default Cart;



