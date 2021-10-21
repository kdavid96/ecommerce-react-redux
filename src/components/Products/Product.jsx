import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ColorThief from 'colorthief';
import { addToCart } from '../../actions/shopping-actions';
import { Card, BrandDisplay, ProductPrice, ProductButton, TextContainer, ProductImage, ProductInfoContainer } from './style.js';

const Product = ({id, brand, name, price, image, addToCart}) => {
    const [color, setColor] = useState("undefined");
    useEffect(() => {
        const colorThief = new ColorThief();
        const img = new Image();
        img.src = image;        
        img.addEventListener('load', () => setColor(colorThief.getColor(img)));
    });

    const goToProductPage = () => {
        console.log(`/products/${id}`);
    }

    return (
        <Card>
            {
            color === "undefined" ?
            <TextContainer bgcolor1={201} bgcolor2={207} bgcolor3={212}>
                <ProductImage img={image}/>
                <ProductInfoContainer bgcolor={color}>
                    <BrandDisplay>{brand}<br/>{name}</BrandDisplay>
                    <ProductPrice>{price}$</ProductPrice>
                    <ProductButton onClick={() => addToCart(id)}>Add to cart</ProductButton>
                </ProductInfoContainer>
            </TextContainer>
            : 
            <TextContainer bgcolor1={color[0]} bgcolor2={color[1]} bgcolor3={color[2]}>
                <ProductImage img={image}/>
                <ProductInfoContainer bgcolor={color}>
                    <BrandDisplay>{brand}<br/>{name}</BrandDisplay>
                    <ProductPrice>$ {price}</ProductPrice>
                    {/*<ProductButton onClick={() => goToProductPage()}>See More</ProductButton>*/}
                    <ProductButton onClick={() => addToCart(id, color[0], color[1], color[2])}>Add to cart</ProductButton>
                </ProductInfoContainer>
            </TextContainer>
            }
        </Card>
    )
}


const mapDispatchToProps = dispatch =>{
    return {
        addToCart: (id, color1, color2, color3) => dispatch(addToCart(id, color1, color2, color3))
    }
}

export default connect(null, mapDispatchToProps)(Product)
