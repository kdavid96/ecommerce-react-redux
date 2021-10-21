import * as actionTypes from '../types/shopping-types';

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            name: 'Camera',
            brand: 'Nikon',
            price: '420',
            image: './camera.png',
            type: 'Electronics',
            inventory: 10,
        },
        {
            id: 2,
            name: 'Controller',
            brand: 'Xbox',
            price: '60',
            image: './controller.png',
            type: 'Electronics',
            inventory: 10,
        },
        {
            id: 3,
            name: 'Car Model',
            brand: 'Ford',
            price: '50',
            image: './carmodel.png',
            type: 'Accessories',
            inventory: 10,
        },
        {
            id: 4,
            name: 'Camera',
            brand: 'Polaroid',
            price: '100',
            image: './polaroid.png',
            type: 'Electronics',
            inventory: 10,
        },
        {
            id: 5,
            name: 'Shoes',
            brand: 'Nike',
            price: '150',
            image: './shoes.png',
            type: 'Shoes',
            inventory: 10,
        },
        {
            id: 6,
            name: 'Headphones',
            brand: 'Sony',
            price: '120',
            image: './headphones.png',
            type: 'Electronics',
            inventory: 10,
        },
        {
            id: 7,
            name: 'Hat',
            brand: 'Grand Tethon',
            price: '50',
            image: './hat.jpg',
            type: 'Clothes',
            inventory: 10,
        }
    ],
    cart: [],
    currentItem: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            const item = state.products.find(prod => prod.id === action.payload.id);
            const inCart = state.cart.find((item) => 
                item.id === action.payload.id ? true : false
            );
            return {
                ...state,
                products: state.products.map(item => item.id === action.payload.id ? { ...item, inventory: item.inventory - 1} : item), 
                cart: inCart ? state.cart.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1, r: action.payload.r, g: action.payload.g, b: action.payload.b} : item) : [...state.cart, { ...item, qty: 1, r: action.payload.r, g: action.payload.g, b: action.payload.b}]
            };
        case actionTypes.ADD_IN_CART:
            return {
                ...state,
                products: state.products.map(item => item.id === action.payload.id ? { ...item, inventory: item.inventory -1  } : item),
                cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1, r: action.payload.r, g: action.payload.g, b: action.payload.b} : item)
            };
        case actionTypes.REMOVE_FROM_CART:
            const tempCartRemove = state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty - 1, r: action.payload.r, g: action.payload.g, b: action.payload.b} : item)
            return {
                ...state,
                products: state.products.map(item => item.id === action.payload.id ? {...item, inventory: item.invetory - 1} : item),
                cart: tempCartRemove.filter(item => item.qty > 0)
            };
        case actionTypes.DELETE_FROM_CART:
            const itemRemoved = state.cart.filter(item => item.id === action.payload.id)
            const tempProductsState = state.products.map(item => item.id === action.payload.id ? {...item, inventory: item.inventory + itemRemoved.qty} : item)
            const tempCartDelete = state.cart.map(item => item.id === action.payload.id ? {...item, qty: 0, r: action.payload.r, g: action.payload.g, b: action.payload.b} : item)
            return {
                ...state,
                cart: tempCartDelete.filter(item => item.qty > 0)
            }
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty, r: action.payload.r, g: action.payload.g, b: action.payload.b} : item)
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }
        default:
            return state
    }
}

export default shopReducer;