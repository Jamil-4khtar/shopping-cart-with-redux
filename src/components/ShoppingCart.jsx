import { useSelector, useDispatch } from 'react-redux'
import fetchProducts from '../redux/actionCreator.js/fetchProducts'
import { useEffect } from 'react'
import ProductList from './ProductList'
import Cart from './Cart'
import Navbar from './Navbar'


function ShoppingCart() {
    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.fetchReducer)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    console.log(products)


return (
    <div>
        <Navbar/>
        <Cart/>
        <h2>Products</h2>
        <ProductList/>
    </div>
)
}

export default ShoppingCart