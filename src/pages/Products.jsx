import '../css/Products.css'
import { useSelector, useDispatch } from 'react-redux';
import products from '../components/products.json';

const inrement = () => {
	return { type: "INCREMENT" }
}
const remove = () => {
	return { type: "REMOVE" }
}

const Products = () => {
	const value = useSelector((state) => state.productCounter)
	const dispatch = useDispatch()

	const handleIncrementProducts = () => {
		dispatch(
			inrement()
		)
	}
	const handleRemoveProducts = () => {
		dispatch(
			remove()
		)
	}

	return (
		<div>
			<h1>Products</h1>
			<div className="nav-bar">
				<h2>Корзина: {value}</h2>
				<button onClick={handleRemoveProducts}>Очистить</button>
			</div>
			<div className='cart-products'>
				{products.map(product => (
					<div key={product._id} className='cart-product'>
						<h2>{product.name}</h2>
						<h3>{product.price}</h3>
						<button onClick={handleIncrementProducts}>В Корзину</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default Products;