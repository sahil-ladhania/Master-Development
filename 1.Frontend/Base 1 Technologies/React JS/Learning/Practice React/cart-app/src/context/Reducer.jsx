
export const cartReducer = (state , action) => {
    console.log(state);
    console.log(action.type);
    console.log(action.payload);
    switch(action.type){
        // Add To Cart
        case 'ADD_TO_CART':
            return {
                ...state,
                cart : [...state.cart , {...action.payload , qty : 1}]
            }
        // Remove From Cart
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart : state.cart.filter((item) => item.id !== action.payload.id)
            }
        default :
            return state;
    }
}

export const productReducer = (state , action) => {
    console.log(state);
    console.log(action.type);
    console.log(action.payload);
    switch (action.type) {
        // Sort By Price(Ascending Order and Descending Order)
        case 'SORT_BY_PRICE':
            return {
                ...state,
                sort : action.payload
            };
        // Filter By Stock
        case 'FILTER_BY_STOCK':
            return {
                ...state,
                byStock : !state.byStock
            };
        // Filter By Delivery
        case 'FILTER_BY_DELIVERY':
            return {
                ...state,
                byFastDelivery : !state.byFastDelivery,
            };
        //     Filter By Search
        case 'FILTER_BY_SEARCH':
            return {
                ...state,
                searchQuery : action.payload
            };
        // Create Filters
        case 'CLEAR_FILTERS':
            return {
                byStock : false,
                byFastDelivery: false,
                searchQuery : ""
            };
        default:
            return state;
    }
}