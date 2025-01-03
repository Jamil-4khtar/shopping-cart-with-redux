export const ADD_ITEM = "ADD_ITEM"
export const REMOVE_ITEM = "REMOVE_ITEM"
export const UPDATE_QUANTITY = "UPDATE_QUANTITY"

const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const existingItem = state.cart.find((item) => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map((item) => 
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                }
            } else {
                return {
                    ...state, 
                    cart: [...state.cart, { ...action.payload, quantity: 1 }]
                }
            }
    
        case REMOVE_ITEM:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            };
        case UPDATE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item) => 
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                )
            }
        default:
            return state
    }
}

export default cartReducer