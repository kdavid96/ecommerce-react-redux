import React, { useParams } from 'react';
import { ProductContainer, BrandDisplay, ProductPrice, ProductButton } from './style.js';

const ProductPage = () => {
    
    const { idFromPath } = useParams();
    return (
        <ProductContainer>
            <BrandDisplay><span>name</span><span>brand</span></BrandDisplay>
            <ProductPrice>price</ProductPrice>
            <ProductButton>See More</ProductButton>
        </ProductContainer>
    )
}

export default ProductPage
