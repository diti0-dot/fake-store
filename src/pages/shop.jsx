import { useDebugValue, useEffect, useState } from 'react';
export default function Shop({addCart, setAddCart }){
     const [products, setProducts] = useState([]);


 async function getData() {
  const url = "https://fakestoreapi.com/products";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const product = await response.json();
    setProducts(product)
  } catch (error) {
    console.error(error.message);
  }
}


useEffect(() => {
    getData();
  }, []);

    const addToCart = (product) => {
    const existingItem = addCart.find(item => item.id === product.id);
    
    if (existingItem) {
      const updatedCart = addCart.map(item =>
        item.id === product.id
          ? { ...item, numberOfUnits: (item.numberOfUnits || 1) + 1 }
          : item
      );
      setAddCart(updatedCart);
    } else {
      setAddCart([...addCart, { ...product, numberOfUnits: 1 }]);
    }
  };

  return (
    <div className="shop-container">
      <h1 className="shop-title">Our Collection</h1>
      <div className="card-container">
        {products.map(product => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} />
            <div className="card-content">
              <h3>{product.title}</h3>
              <p className="price">${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}