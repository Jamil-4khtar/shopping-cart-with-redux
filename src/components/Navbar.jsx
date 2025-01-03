import { useSelector } from 'react-redux';
import '../styles/Navbar.css'


const Navbar = () => {
    const cartItems = useSelector((state) => state.cartReducer.cart);

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h4>Redux Shopping Cart</h4>
            </div>
            <ul className="navbar-links">
                <li>
                    Home
                </li>
                <li>
                    Products
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Cart ({cartItems.length})
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;