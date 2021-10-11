import styled from 'styled-components';
import Button from '@mui/material/Button';

export const ErrorContainer = styled.div`
    min-height: 850px;
    background-color: #D84C7E;
`;

export const Image = styled.div`
    background-image: url("https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 35vh;
    width: 65vw;
    top: 25vh;
    position: relative;
    margin: 0 auto;
`;

export const RedirectButton = styled(Button)`
    position: relative;
    top: -20vh;
    background-color: white !important;
    color: #291B46 !important;
    font-weight: bold !important;
    width: 15% !important;
`;