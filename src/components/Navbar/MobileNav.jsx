import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { categoryChange } from '../../actions';
import { Wrapper, MobileNavContainer, NavLink } from './style.js';

const Navbar = ({isOpen}) => {
    const dispatch = useDispatch();
    return (
        <Wrapper style={{display: isOpen ? 'block' : 'none'}}>
            <MobileNavContainer>
                <Link style={{textDecoration: "none"}} to="/" onClick={() => dispatch(categoryChange('HOME'))}><NavLink>HOME</NavLink></Link>
                <Link style={{textDecoration: "none"}} to="/electronics" onClick={() => dispatch(categoryChange('ELECTRONICS'))}><NavLink>ELECTRONICS</NavLink></Link>
                <Link style={{textDecoration: "none"}} to="/clothes" onClick={() => dispatch(categoryChange('CLOTHES'))}><NavLink>CLOTHES</NavLink></Link>
                <Link style={{textDecoration: "none"}} to="/shoes" onClick={() => dispatch(categoryChange('SHOES'))}><NavLink>SHOES</NavLink></Link>
                <Link style={{textDecoration: "none"}} to="/accessories" onClick={() => dispatch(categoryChange('ACCESSORIES'))}><NavLink>ACCESSORIES</NavLink></Link>
                <Link style={{textDecoration: "none"}} to="/delivery" onClick={() => dispatch(categoryChange('DELIVERY'))}><NavLink>DELIVERY INFO</NavLink></Link>
                <Link style={{textDecoration: "none"}} to="/returns" onClick={() => dispatch(categoryChange('RETURNS'))}><NavLink>RETURNS POLICY</NavLink></Link>
            </MobileNavContainer>
        </Wrapper>
    )
}

export default Navbar
