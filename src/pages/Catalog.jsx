import React from 'react';
import { Link } from 'react-router-dom';
import FeedbackForm from '../components/FeedbackForm';

export default function Catalog() {
  const productsList = [
    { id: 1, name: 'S2-3 Автоматический mini', weight: '13 кг', engine: '180 Вт', diameter: 'от 1,5 до 25мм', price: '34 990 ₽', img: '/images/S2-3.svg' },
    { id: 2, name: 'SG-006-1 Станок для разделки кабеля (Автоматический)', weight: '13 кг', engine: '180 Вт', diameter: 'от 1,5 до 25мм', price: '34 990 ₽', img: '/images/procesing-cabe.svg' },
    { id: 3, name: 'SG-006-1 Станок для разделки кабеля (Автоматический)', weight: '13 кг', engine: '180 Вт', diameter: 'от 1,5 до 25мм', price: '34 990 ₽', img: '/images/SG-006-1.svg' },
    { id: 4, name: 'SG-006-1 Станок для разделки кабеля (Автоматический)', weight: '13 кг', engine: '180 Вт', diameter: 'от 1,5 до 25мм', price: '34 990 ₽', img: '/images/procesing-cabe.svg' },
    { id: 5, name: 'SG-006-1 Станок для разделки кабеля (Автоматический)', weight: '13 кг', engine: '180 Вт', diameter: 'от 1,5 до 25мм', price: '34 990 ₽', img: '/images/SG-006-1.svg' },
    { id: 6, name: 'S2-3 Автоматический mini', weight: '13 кг', engine: '180 Вт', diameter: 'от 1,5 до 25мм', price: '34 990 ₽', img: '/images/S2-3.svg' },
    { id: 7, name: 'S2-3 Автоматический mini', weight: '13 кг', engine: '180 Вт', diameter: 'от 1,5 до 25мм', price: '34 990 ₽', img: '/images/S2-3.svg' },
    { id: 8, name: 'SG-006-1 Станок для разделки кабеля (Автоматический)', weight: '13 кг', engine: '180 Вт', diameter: 'от 1,5 до 25мм', price: '34 990 ₽', img: '/images/procesing-cabe.svg' },
    { id: 9, name: 'SG-006-1 Станок для разделки кабеля (Автоматический)', weight: '13 кг', engine: '180 Вт', diameter: 'от 1,5 до 25мм', price: '34 990 ₽', img: '/images/SG-006-1.svg' }
  ];

  return (
    <main>
      <div className="main-container">
        <div className="our-benefits">
          <a href="#">
            <img src="/images/Всегда на связи.svg" alt="Всегда на связи" />
            <div>
              <h4>Всегда на связи</h4>
              <h6>Консультируем при покупке<br />и в дальнейшем при эксплуатации<br />нашего оборудования</h6>
            </div>
          </a>

          <a href="#">
            <img src="/images/Доставка по всей России.svg" alt="Доставка по всей России" />
            <div>
              <h4>Доставка по всей России</h4>
              <h6>Отправим товар транспортной компаниейили почтовым отправлением(оплата при получении)</h6>
            </div>
          </a>

          <a href="#">
            <img src="/images/Гарантия на всё.svg" alt="Гарантия на всё" />
            <div>
              <h4>Гарантия на всё</h4>
              <h6>Предоставляется гарантия сроком<br />до 1 года со дня приобретения товара</h6>
            </div>
          </a>
        </div>

        <div className="products">
          <div className="all-products">
            <div className="products-info">
              <h1>Вся продукция</h1>
              <h6>126 товара</h6>
            </div>

            <div className="cataog-products">
              <div className="hamburger-menu">
                <div className="hamburger__menu">
                  <Link to="/catalog" className="menu">Вся продукция
                    <img src="/images/hamburger-menu.svg" alt="menu" />
                  </Link>
                  <a href="#" className="discount">Скидки
                    <img src="/images/discount.svg" alt="discount" />
                  </a>
                  <Link to="/catalog/cable-cutting-machines">Станки для разделки кабеля</Link>
                  <a href="#">Сепараторы / Дробилки для кабеля</a>
                  <a href="#">Запасные части</a>
                  <a href="#">Станки для разделки теплообменников</a>
                  <a href="#">Разделка радиаторов</a>
                  <a href="#">Другое</a>
                </div>
              </div>

              <div className="product__cards">
                {productsList.map((product, idx) => (
                  <div className="cards" key={idx}>
                    <img src={product.img} alt={product.name} className="product-img" />
                    <span className="aвтоматический-мини">{product.name}</span>
                    <div className="about__info">
                      <div className="info__img">
                        <span>Вес</span>
                        <span>{product.weight}</span>
                      </div>
                      <div className="info__img">
                        <span>Двигатель</span>
                        <span>{product.engine}</span>
                      </div>
                      <div className="info__img">
                        <span>Диам. обраб.</span>
                        <span>{product.diameter}</span>
                      </div>
                    </div>
                    <span className="price">{product.price}</span>
                    <Link to="/product/new-beast" className="buy">Купить</Link>
                  </div>
                ))}
                <button className="show">Показать ещё</button>
              </div>
            </div>
          </div>
        </div>

        <FeedbackForm />
      </div>
    </main>
  );
}
