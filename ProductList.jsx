import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './CartSlice';
import { Link } from 'react-router-dom';

const plants = [
  {
    id: 1,
    name: 'Snake Plant',
    price: 15,
    image: 'https://via.placeholder.com/150',
    category: 'Air Purifying'
  },
  {
    id: 2,
    name: 'Spider Plant',
    price: 12,
    image: 'https://via.placeholder.com/150',
    category: 'Air Purifying'
  },
  {
    id: 3,
    name: 'Peace Lily',
    price: 18,
    image: 'https://via.placeholder.com/150',
    category: 'Air Purifying'
  },
  {
    id: 4,
    name: 'Aloe Vera',
    price: 10,
    image: 'https://via.placeholder.com/150',
    category: 'Medicinal'
  },
  {
    id: 5,
    name: 'Lavender',
    price: 14,
    image: 'https://via.placeholder.com/150',
    category: 'Medicinal'
  },
  {
    id: 6,
    name: 'Mint Plant',
    price: 8,
    image: 'https://via.placeholder.com/150',
    category: 'Medicinal'
  },
  {
    id: 7,
    name: 'Rose Plant',
    price: 20,
    image: 'https://via.placeholder.com/150',
    category: 'Flowering'
  },
  {
    id: 8,
    name: 'Orchid',
    price: 25,
    image: 'https://via.placeholder.com/150',
    category: 'Flowering'
  },
  ];
  function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const isAdded = (id) => {
    return cartItems.some(item => item.id === id);
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/plants"> Plants</Link> |
        <Link to="/cart"> Cart ({totalItems})</Link>
      </nav>

      <h1>Our Plants</h1>

      {['Air Purifying', 'Medicinal', 'Flowering'].map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {plants
              .filter(plant => plant.category === category)
              .map(plant => (
                <div key={plant.id} style={{ border: '1px solid gray', padding: '10px' }}>
                  <img src={plant.image} alt={plant.name} width="150" />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button
                    onClick={() => dispatch(addToCart(plant))}
                    disabled={isAdded(plant.id)}
                  >
                    {isAdded(plant.id) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
