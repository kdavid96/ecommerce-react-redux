import styled from 'styled-components';
import Button from '@mui/material/Button';

export const ProductWrapper = styled.section`
    width: 100%;
    height: auto;
    position: relative;
    background: white;
    display: flex;
    flex-direction: column;
    min-height: 850px;
`;

export const CounterButton = styled(Button)`
    width: 50px !important;
    font-size: 1.5rem !important;
    font-weight: 600 !important;
    background-color: rgb(131, 197, 190) !important;
    border-radius: 15px !important;
    color: rgb(2, 31, 62) !important;

    &:hover{
        background-color: rgb(0, 109, 119) !important;
    }
`;

export const ProductList = styled.div`
    position: relative;
    width: 70%;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    vertical-align: center;
    box-sizing: border-box;
`;

export const Card = styled.div`
    width: 100%;
    height: 25vw;
    text-align: center;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 25px;
    background-color: black;
    opacity: 1;
    transition: width 2s ease-in-out;
    &:hover{
        //width: 50vw;
        transition: width 2s ease-in-out;
    }

    &:nth-last-child(1){
        margin-bottom: 15px;
    }
`;

export const ProductImage = styled.div`
    position: relative;
    width: 25vw;
    height: 25vw;
    background-image: ${props => `url(${props.img})`};
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
    z-index: 1000;
`;

export const TextContainer = styled.div`
    cursor: pointer;
    width: 100%;
    height: 100%;
    background-color: ${props => `rgb(${props.bgcolor1}, ${props.bgcolor2}, ${props.bgcolor3})`};
    border-radius: 5px;
    color: white;
    left: 15%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
`;

export const ProductInfoContainer = styled.div`
    position: relative;
    top: -30vh;
    z-index: 1000;
    grid-row-start: row1-start;
    grid-row-end: 3;
    grid-column-start: 2;
`;

export const BrandDisplay = styled.p`
    position: relative;
    font-weight: 800;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

export const ProductPrice = styled.p`
    position: relative;
    width: 100%;
    font-weight: 800;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

export const ProductButton = styled(Button)`
    height: 75%;
    background-color: white !important;
    top: 70% !important;
    color: #291B46 !important;
    font-weight: 600 !important;
    border: 0;
    transition: border .5s ease-in-out;
    box-sizing: border-box;
    border: 2px solid transparent !important;

    &:nth-child(1){
        margin-right: 5px;
    }

    &:hover{
        border: 2px solid #291B46 !important;
        transition: border .5s ease-in-out;
    }
`;

export const ProductContainer = styled.div`
    width: 70%;
    position: relative;
    left: 15%;
`;

export const CartItem = styled.div`
    position: relative;
    width: 75vw;
    height: 20vh;
    background-color: ${props => `rgb(${props.r}, ${props.g}, ${props.b})`};
    border-radius: 25px;
    left: 12.5vw;
    margin-bottom: 10vh;
    display: flex;
    flex-direction: row;
    color: white;
`;

export const CartImage = styled.div`
    position: relative;
    left: 0;
    padding: 0;
    margin: 0;
    background-image: ${props => `url(${props.img})`};
    background-repeat: no-repeat;
    background-size: contain;
    width: 50%;
    height: 100%;
    border-radius: 25px;
`;

export const RemoveButton = styled.div`
`;

export const QtyDisplay = styled.input`
    height:25px;
    width: 35%;
    text-align: center;
    font-size: 26px;
    border:1px solid #ddd;
    border-radius:4px;
    margin-right: 15px;
    margin-left: 15px;
`;

export const QtyButton = styled(Button)`
    background-color: grey !important;
    color: black !important;
    width: inherit;
    width: 35%;
`;

export const QtyContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    vertical-align: center;
    justify-content: center;
    height: 15%;
    position: relative;
    top: 45%;
    margin-right: 25px;
`;

export const Placeholder = styled.span`
    width: 15px;
`;