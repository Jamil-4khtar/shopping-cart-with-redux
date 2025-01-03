import { useSelector, useDispatch } from "react-redux"
import "../styles/Cart.css"
import { REMOVE_ITEM, UPDATE_QUANTITY } from "../redux/reducers/cartReducer";

function Cart() {
    const { cart } = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();


    const handleUpdate = (id, quantity) => {
        if (quantity > 0) {
            dispatch({type: UPDATE_QUANTITY, payload: {id, quantity}})
        } else {
            dispatch({type: REMOVE_ITEM, payload: id})
        }
    }

    return (
        <div className="cart-container">
            <h2 className="cart-title">Shopping Cart</h2>
            {
                cart.length > 0 ?
                    cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} className="item-image" />
                            <div className="item-details">
                                <h3 className="item-name">{item.title}</h3>
                                <p className="item-price">Price: <strong>${item.price}</strong></p>
                            </div>
                            <div className="item-actions">
                                <button className="increase-btn" onClick={() => handleUpdate(item.id, item.quantity + 1)}>+</button>
                                <p className="item-quantity"><strong>{item.quantity}</strong></p>
                                <button className="decrease-btn" onClick={() => handleUpdate(item.id, item.quantity - 1)}>-</button>
                            </div>
                        </div>
                    ))
                    : <p className="empty-cart">Cart is empty</p>
            }
            <div className="cart-total">
                <h3>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
            </div>
        </div >
    );
}

export default Cart