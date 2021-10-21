import { BrandDisplay, CartImage, CartItem, DeleteButton, Placeholder, ProductPrice, QtyButton, QtyContainer, QtyDisplay } from './style.js';
import { addInCart, addToCart, deleteFromCart, removeFromCart } from '../../actions/shopping-actions';
import { connect, useDispatch } from 'react-redux';

import React from 'react';

const ProductInCart = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <CartItem>
            <CartImage img={item.image}/>
            <BrandDisplay>{item.name}<Placeholder/>{item.brand}</BrandDisplay>
            <ProductPrice>{item.price}$</ProductPrice>
            <QtyContainer>
                <QtyButton onClick={() => dispatch(removeFromCart(item.id, item.r, item.g, item.b))}>-</QtyButton>
                <QtyDisplay type="text" value={item.qty} disabled style={{color: 'black'}}/>
                <QtyButton onClick={() => dispatch(addInCart(item.id, item.r, item.g, item.b))}>+</QtyButton>
            </QtyContainer>
            <DeleteButton onClick={() => dispatch(deleteFromCart(item.id))}>🗑</DeleteButton>
        </CartItem>
    )
}


const mapDispatchToProps = dispatch =>{
    return {
        removeFromCart: (id, r, g, b) => dispatch(removeFromCart(id, r, g, b)),
        addToCart: (id, r, g, b) => {dispatch(addToCart(id, r, g, b))},
        deleteFromCart: (id, r, g, b) => {dispatch(deleteFromCart(id, r, g, b))}
    }
}

export default connect(null, mapDispatchToProps)(ProductInCart)
