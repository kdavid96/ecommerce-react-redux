import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import Product from './Product';
import { ProductWrapper, ProductList } from './style';

const Products = ({ products }) => {
    const category = useSelector(state => state.category);
    const dispatch = useDispatch();
    return (
        <ProductWrapper>
            <h2>{category}</h2>
            <ProductList>
                {category === 'HOME' ? products.map((product) => { return <Product id={product.id} name={product.name} brand={product.brand} price={product.price} image={product.image}/>})
                :
                products.map((product) => {if( product.type.toUpperCase() === category) return <Product id={product.id} name={product.name} brand={product.brand} price={product.price} image={product.image}/>})}
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
