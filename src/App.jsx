import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Shop from './pages/shop'
import Cart from './pages/cart'
import Home from './pages/home'

function App() {
  const [addCart, setAddCart] = useState([]);

  return (
    <>
      <BrowserRouter>
        <nav className='navbar'>
          <div className='nav-container'>
            <div className='nav-links'>
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/cart" className='cart-link'>
                Cart ({addCart.length})
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addCart={addCart} setAddCart={setAddCart}/>} />
          <Route path="/cart" element={<Cart addCart={addCart} setAddCart={setAddCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App