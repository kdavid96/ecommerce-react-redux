import styled from 'styled-components';
import breakpoint from '../breakpoints';
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

export const TopWrapper = styled.section`
    width: 100%;
    height: 5vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #FFF;
    display: flex;
    flex-direction: row;
    z-index: 2000;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    box-shadow:  0 0 15px 2px gray;
`;

export const HamburgerMenu = styled.span`
    display: none;
    font-weight: bolt;
    font-size: 2rem;
    @media only screen and ${breakpoint.device.sm}{
        display: block;
    }
`;

export const Logo = styled.a`
    font-family: 'Nunito';
    font-size: 1.7rem;
    font-weight: 800;
    padding-top: .2em;
    padding-left: 2em;
    color: #291B46;
`;

export const IconsDiv = styled.div`
    display: flex;
    right: 5%;
    position: relative;
`;

export const CartCount = styled.p`
    position: relative;
    right: 10%;
    top: -15%;
    background-color: red;
    border: 4px solid red;
    padding: 0;
    margin: auto;
    border-radius: 50%;
    font-size: 10;
    width: 25%;
    height: 30%;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    padding-bottom: 5px;
    padding-left: 2px;
    padding-right: 2px;
`;

export const Cart = styled(AiOutlineShoppingCart)`
    font-size: 2rem;
    padding-top: .5rem;
    padding-right: .5rem;
    cursor: pointer;
    color: #291B46;
`;

export const User = styled(AiOutlineUser)`
    font-size: 2rem;
    padding-top: .5rem;
    cursor: pointer;
    color: #291B46;
`;