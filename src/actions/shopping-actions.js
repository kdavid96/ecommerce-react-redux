import * as actionTypes from '../types/shopping-types';


export const addToCart = (itemID, color1, color2, color3) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
            r: color1,
            g: color2,
            b: color3
        }
    }
}

export const removeFromCart = (itemID) =>{
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}

export const adjustQty = (itemID, value) =>{
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value
        }
    }
}

export const loadCurrentItem = (item) => {
    return{
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
}