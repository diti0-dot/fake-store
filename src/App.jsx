import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Shop from './pages/shop'
import Cart from './pages/cart'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>

     <nav className='navbar'>
        <Link to="/">Home</Link> |{" "}
        <Link to="/shop">Shop</Link> |{" "}
        <Link to="/cart">Cart</Link>
    </nav>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}></Route>
         <Route path="cart" element={<Cart />} />
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
