import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { categoryChange } from '../../actions';
import {Wrapper, NavContainer, NavLink} from './style.js';

const search = () =>{
    console.log("kereses " + document.getElementById("search-input").value);
    document.getElementById("search-input").value="";
}

const Navbar = () => {
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <NavContainer>
                <Link style={{textDecoration: "none"}} to="/" onClick={() => dispatch(categoryChange('HOME'))}><NavLink>HOME</NavLink></Link>
                <Link style={{textDecoration: "none"}} to="/electronics" onClick={() => dispatch(categoryChange('ELECTRONICS'))}><NavLink>ELECTRONICS</NavLink></Link>
                <Link style={{textDecoration: "none"}} to="/clothes" onClick={() => dispatch(categoryChange('CLOTHES'))}><NavLink>CLOTHES</NavLink></Link>
                <Link style={{textDecoration: "none"}} to="/shoes" onClick={() => dispatch(categoryChange('SHOES'))}><NavLink>SHOES</NavLink></Link>
                <Link style={{textDecoration: "none"}} to="/accessories" onClick={() => dispatch(categoryChange('ACCESSORIES'))}><NavLink>ACCESSORIES</NavLink></Link>
                <Link style={{textDecoration: "none"}} to="/delivery" onClick={() => dispatch(categoryChange('DELIVERY'))}><NavLink>DELIVERY INFO</NavLink></Link>
                <Link style={{textDecoration: "none"}} to="/returns" onClick={() => dispatch(categoryChange('RETURNS'))}><NavLink>RETURNS POLICY</NavLink></Link>
            </NavContainer>
        </Wrapper>
    )
}

export default Navbar
