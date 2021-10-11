import styled from 'styled-components';
import Button from '@mui/material/Button';

export const Wrapper = styled.section`
    width: 100%;
    position: sticky;
    top: 5vh;
    left: 0;
    background: white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
    z-index: 2000;
`;

export const SearchBar = styled.div`
    display: inline;
    position: relative;
    width: 25%;
`;

export const SearchButton = styled(Button)`
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600 !important;
    padding-left: 1em;
    padding-right: 1em;
    margin-top: 1em !important;
    background-color: rgb(226, 149, 120) !important;
    border: 0;
    color: rgb(255, 255, 255) !important;
    &:hover{
        background-color: rgb(255, 221, 210) !important;
        color: rgb(0, 255, 255) !important;
    }
`;

export const SearchInput = styled.input`
    font-family: 'Nunito';
    margin-right: 5px;
    padding: 15px 15px 15px 15px;
    border: 0;
    border-radius: 15px;
`;

export const NavContainer = styled.ul`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding: 0;
    margin: 0;
    border-bottom: 4px solid #291B46;
`;

export const NavLink = styled.li`
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    list-style-type: none;
    color: #291B46;
    font-size: 1em;
    font-weight: 700;
    font-family: 'Nunito';
    text-align: center;
    height: 7vh;
    background-color: transparent;
    box-sizing: border-box;
    border-top: 6px solid transparent;
    margin-bottom: 5px;
    font-weight: 700;
    &:hover{
        cursor: pointer;
        border-top: 6px solid rgb(72,0,72,0.8);
        transition: border-top .5s ease-in-out;
    }
`;