import React from 'react';
import { connect, useSelector } from 'react-redux';
import Product from './Product';
import { ProductWrapper, ProductList, CategoryHeader } from './style';

const Products = ({ products }) => {
    const category = useSelector(state => state.category);
    return (
        <ProductWrapper>
            <CategoryHeader>{category.toUpperCase()}</CategoryHeader>
            <ProductList>
                {category === 'HOME' ? products.map((product) => { return <Product id={product.id} name={product.name} brand={product.brand} price={product.price} image={product.image}/>})
                :
                products.map((product) => {
                    if( product.type.toUpperCase() === category) return <Product id={product.id} name={product.name} brand={product.brand} price={product.price} image={product.image}/>
                    else return '';
                })}
            </ProductList>
        </ProductWrapper>
    )
}

const mapStateToProps = state =>{
    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps)(Products)
