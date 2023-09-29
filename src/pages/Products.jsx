import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { increment, remove, fetchProduct} from '../redux-store/productsCounter'
import '../css/Products.css'

const Products = () => {
	const value = useSelector((state) => state.product.productCounter)
	const products = useSelector((state) => state.product.productsList)
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(fetchProduct())
	}, [dispatch])

	const handleIncrementProducts = () => {
		dispatch(
			increment()
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
					<div key={product.id} className='cart-product'>
						<h2 className='title'>{product.title}</h2>
						<h3>${product.price}</h3>
						<button onClick={handleIncrementProducts}>В Корзину</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default Products;