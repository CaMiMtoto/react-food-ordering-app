import React from 'react';
import {IconPlus, IconMinus, IconTrash} from "@tabler/icons";

function CartItem({item, onRemove, onAdd, onQtyRemove}) {

    return (
        <div className="list-group-item" key={item.id}>
            <div className="d-flex justify-content-between align-items-center mb-1">
                <h4 className="fw-bold mb-0">
                    {item.name}
                </h4>
                <button type="button" onClick={() => onRemove(item.id)}
                        className="btn btn-sm tw-bg-red-100 tw-text-red-500 rounded-circle tw-h-8 tw-w-8 d-flex justify-content-center align-items-center hover:tw-bg-red-500 hover:tw-text-gray-50 ">
                    <IconTrash className="tw-h-4 tw-w-4"/>
                </button>
            </div>
            <div className="d-flex gap-2 align-items-center justify-content-between">
                <div className="d-flex gap-2 align-items-center">
                    <span className="h5 fw-bold text-danger mb-0">${item.price}</span>
                    <span className="px-3  rounded-1 fw-bold"> x {item.amount}</span>
                </div>

                <div className="btn-group">
                    <button type="button" onClick={() => onQtyRemove(item.id)}
                            className="btn btn-sm btn-outline-secondary tw-rounded-l-full">
                        <IconMinus className="tw-h-5 tw-w-5"/>
                    </button>
                    <button type="button" onClick={() => onAdd(item)}
                            className="btn btn-sm btn-outline-secondary  tw-rounded-r-full">
                        <IconPlus className="tw-h-5 tw-w-5"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;