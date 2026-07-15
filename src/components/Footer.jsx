import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <Link to="/" className="footer-logo">
            <img src="/images/Logo.svg" alt="okoprom" />
          </Link>
          <p className="footer-text">
            Тураевское шоссе дом 17, д. Островцы, Раменский район, МО, Россия
          </p>
          <div className="footer-links">
            <a href="tel:+78007073101" className="footer-phone">+7 (800) 707-31-01</a>
            <a href="mailto:okoprom@gmail.com" className="footer-email">okoprom@gmail.com</a>
          </div>
          <div className="footer-social-btns">
            <a href="#" className="btn-dark">Whatsapp</a>
            <a href="#" className="btn-dark">Telegram</a>
          </div>
        </div>

        <div className="footer-nav">
          <div className="footer-col">
            <h4 class="footer-title">Наша продукция</h4>
            <ul className="footer-list">
              <li><Link to="/catalog/cable-cutting-machines">Станки для разделки кабеля</Link></li>
              <li><a href="#">Сепараторы</a></li>
              <li><a href="#">Станок для разделки теплообменников</a></li>
              <li><a href="#">Разделка радиаторов</a></li>
              <li><a href="#">Запасные части</a></li>
              <li><a href="#">Другое</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 class="footer-title">Информация</h4>
            <ul className="footer-list">
              <li><Link to="/delivery">Доставка и оплата</Link></li>
              <li><Link to="/guarantee">Гарантия</Link></li>
              <li><a href="#">Служба контроля качества</a></li>
              <li><a href="#">Наше производство</a></li>
              <li><Link to="/about">О компании</Link></li>
              <li><Link to="/contacts">Контакты</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-social-icons">
          <a href="#"><img src="/images/insta.svg" alt="insta" /></a>
          <a href="#"><img src="/images/youtube.svg" alt="yt" /></a>
          <span className="social-text">Подписывайтесь на нас в социальных сетях</span>
        </div>
        <div className="footer-copy">
          <span>Интернет магазин "Окопром" © 2021 Все права защищены</span>
          <a href="#" className="policy">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}
