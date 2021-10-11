const categoryReducer = (state = 'HOME', action) => {
    switch(action.type){
        case 'ELECTRONICS':
            return state = 'ELECTRONICS';
        case 'CLOTHES':
            return state = 'CLOTHES';
        case 'SHOES':
            return state = 'SHOES';
        case 'ACCESSORIES':
            return state = 'ACCESSORIES';
        case 'DELIVERY':
            return state = 'DELIVERY';
        case 'RETURNS':
            return state = 'RETURNS';
        case 'HOME':
            return state = 'HOME';
        case 'CART':
            return state = 'CART';
        case 'USER':
            return state = 'USER';
        default:
            return state;
    }
}

export default categoryReducer;