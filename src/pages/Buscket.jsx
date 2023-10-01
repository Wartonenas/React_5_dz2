import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux-store/productsSlice";

const Buscket = () => {
  const cartItems = useSelector((state) => state.products.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  return (
    <div>
      <h2>Buscket</h2>
      {cartItems.length === 0 ? (
        <p>пусто</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item._id}>
              <h3>{item.name}</h3>
              <h4>{item.price}</h4>
              <p>Количество: {item.quantity}</p>
              <button onClick={() => handleIncreaseQuantity(item._id)}>+</button>
              <button onClick={() => handleDecreaseQuantity(item._id)}>-</button>
              <button onClick={() => handleRemoveFromCart(item._id)}>Удалить</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Buscket;