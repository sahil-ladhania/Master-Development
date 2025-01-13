
// Cuisine Initial State
export const cuisineInitialState = {
    cuisines : [],
    loading: false,
    error: null,
}
// Cuisine Reducer
export const cuisineReducer = (state , action) => {
    switch (action.type) {
        case 'FETCH_LOADING':
            return {
                ...state,
                loading: true,
                error: null,
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                cuisines: action.payload,
                loading: false,
                error: null,
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

// Top Brands Initial State
export const topBrandsInitialState = {
    topBrands : [],
    loading: false,
    error: null,
}
// Top Brands Reducer
export const topBrandsReducer = (state , action) => {
    switch (action.type) {
        case 'FETCH_LOADING':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                topBrands: action.payload,
                loading: false,
                error: null,
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

// Online Restaurants Initial State
export const onlineRestaurantsInitialState = {
    onlineRestaurants : [],
    loading: false,
    error: null,
}
// Online Restaurants Reducer
export const onlineRestaurantsReducer = (state , action) => {
    switch (action.type) {
        case 'FETCH_LOADING':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                onlineRestaurants: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}