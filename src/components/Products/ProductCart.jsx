import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, addToCart } from '../../actions/shopping-actions';
import { CartItem, BrandDisplay, ProductPrice, QtyContainer, CartImage, Placeholder, QtyDisplay, QtyButton } from './style.js';


const Product = ({ item }) => {

    return (
        <CartItem r={item.r} g={item.g} b={item.b}>
            <CartImage img={item.image}/>
            <BrandDisplay>{item.name}<Placeholder/>{item.brand}</BrandDisplay>
            <ProductPrice>{item.price}</ProductPrice>
            <QtyContainer>
                <QtyButton onClick={() => removeFromCart(item.id)}>-</QtyButton>
                <QtyDisplay type="text" value={item.qty} disabled style={{color: 'black'}}/>
                <QtyButton onClick={() => addToCart(item.id)}>+</QtyButton>
            </QtyContainer>
        </CartItem>
    )
}


const mapDispatchToProps = dispatch =>{
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(null, mapDispatchToProps)(Product)
