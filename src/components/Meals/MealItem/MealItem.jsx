import React, {useContext, useReducer, useRef} from 'react';
import meal from '../../../assets/gnocchi-1d16725.jpg';
import {IconPlus} from "@tabler/icons";
import CartContext from "../../../store/cart-context.jsx";

function MealItem(props) {
    const price = `$${props.price.toFixed(2)}`;
    const qtyRef = useRef();

    let cartCtx = useContext(CartContext);

    const submitHandler = event => {
        event.preventDefault();

        const qty = qtyRef.current.value;
        if (qty.trim().length === 0 || +qty < 1 || +qty > 5) {
            return;
        }

        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: +qty,
            price: props.price
        });

    }
    return (<div className="d-flex justify-content-center flex-column align-item-center">
            <img src={meal} className="card-img-top tw-h-44 tw-object-cover rounded-top-3" alt=""/>
            <div className="align-self-center text-center mt-3">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                    {props.description}
                </p>
                <h6 className="mb-3 text-danger fw-bold">{price}</h6>
                <div className="d-flex gap-2">
                    <input type="number" min={1} max={5} defaultValue={1} ref={qtyRef}
                           className="form-control form-control-sm px-3 rounded-pill tw-w-16"/>
                    <button onClick={submitHandler} type="button" className="btn btn-primary rounded-pill btn-sm px-3">
                        Add
                    </button>
                </div>
            </div>

        </div>

    );
}


export default MealItem;