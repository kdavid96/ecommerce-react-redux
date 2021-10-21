import React, { useParams } from 'react';

const ProductPage = () => {
    const { idFromPath } = useParams();
    return (
        <div>{idFromPath}</div>
    )
}

export default ProductPage
