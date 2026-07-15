import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src="/images/Logo.svg" alt="logo" className="logo-img" />
          </Link>

          <div className="header-left-links">
            <div className="top-contact">
              <a href="mailto:okoprom@gmail.com" className="email">okoprom@gmail.com</a>
              <a href="tel:+78007073101" className="phone">+7 (800) 707-31-01</a>
            </div>
            <div className="delivery">
              <Link to="/delivery" className="delivery-payment">Доставка и оплата</Link>
              <Link to="/guarantee" className="guarantee">Гарантия</Link>
            </div>
          </div>

          <button className="burger-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      <nav className={`nav-bar ${isMenuOpen ? 'mobile-open' : ''}`}>
        <section className="nav-container">
          <div className="nav-catalogs">
            <Link 
              to="/catalog" 
              className={`card ${location.pathname === '/catalog' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Каталог
            </Link>
            <a href="#" className="product" onClick={closeMenu}>Наше производство</a>
            <Link 
              to="/about" 
              className={`about ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              О компании
            </Link>
            <Link 
              to="/contacts" 
              className={`connect ${location.pathname === '/contacts' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Контакты
            </Link>
          </div>

          <div className="nav-shop">
            <a href="#" className="search" onClick={closeMenu}>
              <img src="/images/Search.svg" alt="Search" />
            </a>
            <a href="#" className="shop" onClick={closeMenu}>
              <img src="/images/shop.svg" alt="Shop" />
            </a>
            <a href="#" className="ask" onClick={closeMenu}>Запросить консультацию</a>
          </div>
        </section>
      </nav>
    </header>
  );
}
