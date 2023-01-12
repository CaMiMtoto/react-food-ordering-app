import React, {useContext} from 'react';
import Modal from "../UI/Modal.jsx";
import CartContext from "../../store/cart-context.jsx";
import {IconExclamationCircle, IconPlus,IconMinus} from "@tabler/icons";


const Cart = (props) => {
    let cartCtx = useContext(CartContext);
    let items = cartCtx.items;
    // const cartItems = ;
    let totalAmount = items.reduce((sum, item) => sum + item.amount * item.price, 0).toFixed(2);
    const hasItems = cartCtx.items.length > 0;
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
                                <div className="list-group-item" key={item.id}>
                                    <h4 className="fw-bold">{item.name}</h4>
                                    <div className="d-flex gap-2 align-items-center justify-content-between">
                                        <div className="d-flex gap-2 align-items-center">
                                            <span className="h5 fw-bold text-danger mb-0">${item.price}</span>
                                            <span className="px-3  rounded-1 fw-bold"> x {item.amount}</span>
                                        </div>

                                        <div className="btn-group">
                                            <button className="btn btn-sm btn-outline-primary">
                                                <IconMinus className="tw-h-5 tw-w-5"/>
                                            </button>
                                            <button className="btn btn-sm btn-outline-primary ">
                                                <IconPlus className="tw-h-5 tw-w-5"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <span className="text-dark fw-bold h6">Total Amount:</span>
                        <span className="fw-bold">${totalAmount}</span>
                    </div>
                    <div className="d-flex gap-2 justify-content-end">
                        <button type="type" className="btn btn-success px-3 rounded-pill btn-sm">Order Now</button>
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



