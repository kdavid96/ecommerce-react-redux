import styled from "styled-components";
import Carousel from 'react-material-ui-carousel';


export const HomeContainer = styled.div`
    position: relative;
    min-height: 87vh;
    margin: 0;
    padding: 0;
`;

export const HomeTitle = styled.h2`
    background-color: #291B46;
    color: white;
    padding: 15px;
    margin: 0;
`;

export const StyledCarousel = styled(Carousel)`
    margin: 0;
`;