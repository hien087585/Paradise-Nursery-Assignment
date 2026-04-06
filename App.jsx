import { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div>
      {!showProductList ? (
        <div className="landing-page">
          <div className="overlay">
            <h1>Welcome to Paradise Nursery</h1>

            <p>
              Paradise Nursery is your trusted destination for beautiful indoor
              plants, flowering plants, and gardening essentials.
            </p>

            <button
              className="get-started-btn"
              onClick={() => setShowProductList(true)}
            >
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
