import React from 'react';
import { connect } from 'react-redux';
import ProductCart from '../Products/ProductCart';
import { CartContainer, CartHeader, CartElements, CartIsEmpty, EmptyText } from './style';

function Cart({cart}) {
    return (
        <CartContainer>
            <CartHeader>Your Cart</CartHeader>
            <CartElements>
                {cart.length > 0 ? cart.map((item) => {
                    return <ProductCart item={item}/>;
                }) : <CartIsEmpty>
                        <EmptyText>Ooops, your cart is empty!</EmptyText>
                    </CartIsEmpty>}
            </CartElements>
        </CartContainer>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart);
