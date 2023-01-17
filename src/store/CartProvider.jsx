import CartContext from "./cart-context.jsx";
import {useReducer} from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + 1
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        localStorage.setItem('cart', JSON.stringify({items: updatedItems, totalAmount: updatedTotalAmount}));
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === 'REMOVE_QTY') {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {...existingItem, amount: existingItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        localStorage.setItem('cart', JSON.stringify({items: updatedItems, totalAmount: updatedTotalAmount}));
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price * existingItem.amount;
        const updatedItems = state.items.filter(item => item.id !== action.id);
        localStorage.setItem('cart', JSON.stringify({items: updatedItems, totalAmount: updatedTotalAmount}));
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === 'CLEAR') {
        localStorage.removeItem('cart');
        return defaultCartState;
    }

    return defaultCartState;
}

const CartProvider = (props) => {

    let [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState, () => {
        const localData = localStorage.getItem('cart');
        return localData ? JSON.parse(localData) : defaultCartState;
    });

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item});
    };
    const removeItemQtyFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE_QTY', id: id});
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id});
    }
    const clearCartHandler = () => {
        dispatchCartAction({type: 'CLEAR'});
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItemQty: removeItemQtyFromCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler
    }
    return (<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>);
};

export default CartProvider;