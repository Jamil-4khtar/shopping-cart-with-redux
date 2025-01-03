import '../styles/ProductList.css';
import { useSelector, useDispatch } from "react-redux";
import { ADD_ITEM } from '../redux/reducers/cartReducer';


function ProductList() {
    const {products, loading, error} = useSelector((state) => state.fetchReducer)
    const dispatch = useDispatch();

    const addToCart = (item) => {
        dispatch({type: ADD_ITEM, payload: item})
    }

    return (
        <div className="product-list">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {products && products.map((item) => (
                <div key={item.id} className="product-item">
                    <img src={item.image} alt={item.title} className="product-image" />
                    <h2 className="product-title">{item.title}</h2>
                    <p className="product-description">{item.description}</p>
                    <p><strong>Category:</strong> {item.category}</p>
                    <p><strong>Price:</strong> ${item.price}</p>
                    <p><strong>Rating:</strong> {item.rating.rate} ({item.rating.count} reviews)</p>
                    <button className="add-to-cart-button" onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
            ))}
        </div>
    )
}

export default ProductList