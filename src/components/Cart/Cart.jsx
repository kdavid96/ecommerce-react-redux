import { CartContainer, CartElements, CartFooter, CartHeader, CartInfo, CartIsEmpty, CartSum, CheckoutButton, EmptyText, HomeButton } from './style';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import ProductInCart from '../Products/ProductCart';
import { categoryChange } from '../../actions';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

function Cart({cart}) {
    const [cartSum, setCartSum] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        let sum = 0;
        cart.map((item) => sum += (parseInt(item.price) * item.qty));
        setCartSum(sum);
    }, [cart]);
    return (
        <CartContainer>
            <CartHeader>Your Cart</CartHeader>
            <CartInfo>
                <CartElements style={{height: '50vh', position: cart.length > 0 ? 'relative' : '', left: cart.length > 0 ? '-10vw' : '0'}}>
                    {cart.length > 0 ? cart.map((item) => {
                        return <ProductInCart item={item}/>;
                    }) : <CartIsEmpty>
                            <EmptyText>Your cart is empty!</EmptyText>
                            <Link style={{textDecoration: "none", display: "flex", alignItems: 'center', justifyContent: 'center'}} to="/" onClick={() => dispatch(categoryChange('HOME'))}><HomeButton>HOME</HomeButton></Link>
                        </CartIsEmpty>}
                </CartElements>
                    {cart.length > 0 ? 
                    <CartFooter>
                    <CartSum>
                        <p>Summary: {cartSum}$</p>
                        <p>Shipping: 5$</p>
                    </CartSum>
                    <CheckoutButton>Checkout</CheckoutButton>
                    </CartFooter>
                    : ''}
            </CartInfo>
        </CartContainer>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart);
