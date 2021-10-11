import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { categoryChange } from '../../actions';
import { TopWrapper, Logo, IconsDiv, Cart, User, CartCount } from './style';


const Topbar = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qty;
        });
        setCartCount(count);
    }, [cart, cartCount])

    return (
        <TopWrapper>
            <Link style={{textDecoration: "none", top: ".5vh", position: "relative"}} to="/" onClick={() => dispatch(categoryChange('HOME'))}><Logo>E-commerce site</Logo></Link>
            <IconsDiv>
                <Link style={{textDecoration: "none", display: "inherit"}} to="/cart" onClick={() => dispatch(categoryChange('CART'))}><Cart />{cartCount > 0 ? <CartCount>{cartCount}</CartCount> : ''}</Link>
                <Link style={{textDecoration: "none"}} to="/user" onClick={() => dispatch(categoryChange('USER'))}><User /></Link>
            </IconsDiv>
        </TopWrapper>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Topbar);