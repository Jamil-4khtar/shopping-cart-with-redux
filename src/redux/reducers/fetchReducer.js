export const FETCH_REQUEST = "FETCH_REQUEST"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"



const initialState = {
    products : [],
    loading: false,
    error: null
}

export default function fetchReducer(state=initialState, action) {
    switch (action.type) {
        case FETCH_REQUEST: 
            return {...state, loading: true, error: null}
        case FETCH_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: null
            }
        case FETCH_FAILURE:
            return {
                ...state,
                products: [],
                loading: false,
                error: action.payload
            }
    
        default:
            return state
    }
}