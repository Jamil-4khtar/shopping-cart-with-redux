import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../reducers/fetchReducer";


export default function fetchProducts() {
    return async (dispatch) => {
        dispatch({type: FETCH_REQUEST})

        try {
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            dispatch({type: FETCH_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: FETCH_FAILURE, payload: error.message})
        }

    }
}