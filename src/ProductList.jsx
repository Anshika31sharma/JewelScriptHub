import React, { useState, useEffect } from 'react';
import './index.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [flippedCard, setFlippedCard] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/jhumkas/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCardClick = productId => {
    setFlippedCard(productId === flippedCard ? null : productId);
  };

  return (
    <div>
      <h1 className="text-6xl font-extrabold text-center my-8">House of Jhumkas</h1>
      <div className="product-container">
        {products.map(product => (
          <div
            key={product.id}
            className={`product-card ${product.className} ${flippedCard === product.id ? 'flipped' : ''}`}
            onClick={() => handleCardClick(product.id)}
          >
            <div className="product-inner">
              <div className="product-front">
                <img src={product.src} alt={product.title} className="product-image" />
                <div className="product-info">
                  <h2 className="product-title">{product.name}</h2>
                  <img src={product.image_url} alt={product.title} className="product-image" />
                  <p className="product-price">Price: ${product.price}</p>
                </div>
              </div>
              <div className="product-back">
                <p className="product-description">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
