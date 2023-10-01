import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux-store/productsSlice';
import '../css/Products.css';
import { Link } from 'react-router-dom';

const Products = () => {
  const cartCount = useSelector((state) => state.products.cartCount);
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  const handleAddToCart = (productId) => {
    dispatch(addToCart(productId));
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="nav-bar">
        <Link to="/buscket">Корзина: {cartCount}</Link>
      </div>
      <div className='cart-products'>
        {products.map(product => (
          <div key={product._id} className='cart-product'>
            <h2 className='title'>{product.name}</h2>
            <h3>{product.price}</h3>
            <button onClick={() => handleAddToCart(product._id)}>В Корзину</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;