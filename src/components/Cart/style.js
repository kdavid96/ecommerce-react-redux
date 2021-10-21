import { Button, Paper } from '@mui/material';

import styled from 'styled-components';

export const CartContainer = styled.div`
    position: relative;
    min-height: 87vh;
    margin: 0;
    padding: 0;
`;

export const CartHeader = styled.h2`
    background-color: #291B46;
    color: white;
    padding: 15px;
    margin: 0;
`;

export const CartElements = styled.div`
    margin-top: 30px;
`;

export const CartSum = styled.div`
    text-align: right;
    width: 15vw;
    position: relative;
    font-size: 1.3rem;
    font-weight: 600;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: space-around;
    height: 65%;
`;

export const CartInfo = styled.div`
    display: flex;
    justify-content: space-around;
    min-height: 70vh;
`;

export const CartFooter = styled(Paper)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    width: 175px;
    position: fixed;
    padding: 25px;
    border-radius: 25px !important;
    background-color: #c8c8c8;
    font-family:  'Nunito' !important;
    height: 155px;
    margin-top: 30px;
    left: 80%;
`;

export const CheckoutButton = styled(Button)`
    height: 75%;
    background-color: #291B46 !important;
    color: white !important;
    font-weight: 600 !important;
    border: 0;
    transition: border .5s ease-in-out;
    box-sizing: border-box;
    border: 2px solid transparent !important;
    max-height: 25%;
    top: -15px !important;
    position: relative;

    &:nth-child(1){
        margin-right: 5px;
    }

    &:hover{
        border: 2px solid #493279 !important;
        transition: border .5s ease-in-out;
    }
`;

export const CartIsEmpty = styled.div`
    width: 55vw;
    height: 50vh;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    font-size: 2rem;
    flex-direction: column;
`;

export const EmptyText = styled.div`
    text-align: center;
`;

export const HomeButton = styled(Button)`
    height: 75%;
    background-color: whitesmoke !important;
    color: #291B46 !important;
    font-weight: 600 !important;
    border: 0;
    transition: border .5s ease-in-out;
    box-sizing: border-box;
    border: 2px solid transparent !important;
    position: relative;

    &:nth-child(1){
        margin-right: 5px;
    }

    &:hover{
        border: 2px solid #291B46 !important;
        transition: border .5s ease-in-out;
    }
`;