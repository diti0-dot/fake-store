import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import imgWeb from '../assets/img_web.jpeg';
export default function Home(){

const navigate = useNavigate();
const handleNavigation = () => {
    navigate('/shop');
  };

    return(
        <>
    <div className="hero-section">
  <div className="hero-background">
    <img 
        src={imgWeb}
      alt="Fashion background" 
      className="hero-image"
    />
    <div className="hero-overlay"></div>
  </div>
  <div className="hero-content">
    <h1 className="hero-title">Welcome to Our Store</h1>
    <p className="hero-subtitle">Discover the latest trends in fashion</p>
    <div className="hero-highlight">
      <h2 className="new-arrivals-text">20+ New Styles Arrived</h2>
      <p className="arrivals-description">Fresh looks for every occasion</p>
    </div>
    <button className="shop-now-btn" onClick={handleNavigation}>Shop Now</button>
  </div>
</div>
        </>
    )
}