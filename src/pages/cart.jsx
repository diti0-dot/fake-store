export default function Cart({ addCart, setAddCart }) {

  function updateCart(action, id) {
    const updatedCart = addCart
      .map(item => {
        if (item.id === id) {
          const numberOfUnits = action === "add"
            ? (item.numberOfUnits || 1) + 1
            : Math.max((item.numberOfUnits || 1) - 1, 0);
          return { ...item, numberOfUnits };
        }
        return item;
      })
      .filter(item => item.numberOfUnits > 0);
    setAddCart(updatedCart);
  }

  function removeItem(id) {
    setAddCart(addCart.filter(item => item.id !== id));
  }

  if (addCart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Add some items from the shop to see them here!</p>
      </div>
    );
  }

  const total = addCart.reduce(
    (acc, item) => acc + Number(item.price) * (item.numberOfUnits || 1),
    0
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Shopping Cart</h1>
      {addCart.map((item) => (
        <div key={`${item.id}-${item.title}`} className="cart-item"> {/* Unique key */}
          <img src={item.image} alt={item.title} className="cart-item-image" />
          <div className="cart-item-info">
            <h3>{item.title}</h3>
            <p className="cart-item-price">${item.price}</p>
          </div>
          <div className="quantity-controls">
            <button 
              onClick={() => updateCart("minus", item.id)} 
              disabled={(item.numberOfUnits || 1) <= 1}
              className="quantity-btn"
            >
              -
            </button>
            <div className="quantity-number">{item.numberOfUnits || 1}</div>
            <button 
              onClick={() => updateCart("add", item.id)}
              className="quantity-btn"
            >
              +
            </button>
          </div>
          <button 
            onClick={() => removeItem(item.id)}
            className="remove-btn"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="cart-total">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}