import React from 'react';
import { Link } from 'react-router-dom';
import FeedbackForm from '../components/FeedbackForm';

export default function CableCuttingMachines() {
  const machinesList = [
    { id: 1, name: 'S2-3 Автоматический мини', weight: '13 кг', engine: '180 Вт', diameter: 'от 1,5 до 25мм', price: '34 990 ₽', img: '/images/S2-3.svg' },
    { id: 2, name: 'SG-006-1 Станок для разделки кабеля (Автоматический)', weight: '13 кг', engine: '180 Вт', diameter: 'от 1,5 до 25мм', price: '34 990 ₽', img: '/images/procesing-cabe.svg' },
    { id: 3, name: 'SG-006-1 Станок для разделки кабеля (Автоматический)', weight: '13 кг', engine: '180 Вт', diameter: 'от 1,5 до 25мм', price: '34 990 ₽', img: '/images/SG-006-1.svg' },
    { id: 4, name: 'SG-006-1 Станок для разделки кабеля (Автоматический)', weight: '13 кг', engine: '180 Вт', diameter: 'от 1,5 до 25мм', price: '34 990 ₽', img: '/images/procesing-cabe.svg' },
    { id: 5, name: 'SG-006-1 Станок для разделки кабеля (Автоматический)', weight: '13 кг', engine: '180 Вт', diameter: 'от 1,5 до 25мм', price: '34 990 ₽', img: '/images/SG-006-1.svg' },
    { id: 6, name: 'S2-3 Автоматический мини', weight: '13 кг', engine: '180 Вт', diameter: 'от 1,5 до 25мм', price: '34 990 ₽', img: '/images/S2-3.svg' },
    { id: 7, name: 'S2-3 Автоматический mini', weight: '13 кг', engine: '180 Вт', diameter: 'от 1,5 до 25мм', price: '34 990 ₽', img: '/images/S2-3.svg' }
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

        <div className="cable-stripping">
          <div className="products-info">
            <h1>Станки для разделки кабеля</h1>
            <h6>64 товара</h6>
          </div>

          <div className="cable-stripping-products">
            <div className="hamburgers-menu">
              <div className="cable__stripping">
                <Link to="/catalog">
                  <span>Вся продукция</span>
                  <img src="/images/hamburger-menu-dark.svg" alt="menu" />
                </Link>

                <a href="#" className="discount">
                  <span>Скидки</span>
                  <img src="/images/discount.svg" alt="discount" />
                </a>

                <Link className="active" to="/catalog/cable-cutting-machines">
                  Станки для разделки кабеля
                </Link>

                <a href="#">Сепараторы / Дробилки для кабеля</a>
                <a href="#">Запасные части</a>
                <a href="#">Станки для разделки теплообменников</a>
                <a href="#">Разделка радиаторов</a>
                <a href="#">Другое</a>
              </div>
            </div>

            <div className="cable__stripping__cards">
              <div className="cable__stripping__btns">
                <button className="cable__stripping__btn">Автоматические</button>
                <button className="cable__stripping__btn">Подходящие для брони</button>
                <button className="cable__stripping__btn">С прессовым валом</button>
                <button className="cable__stripping__btn">Цена</button>
                <button className="cable__stripping__btn">Диапазон обработки</button>
              </div>

              <div className="product__cards">
                {machinesList.map((machine, idx) => (
                  <div className="cards" key={idx}>
                    <img src={machine.img} alt={machine.name} className="product-img" />
                    <span className="aвтоматический-мини">{machine.name}</span>
                    <div className="about__info">
                      <div className="info__img">
                        <span>Вес</span>
                        <span>{machine.weight}</span>
                      </div>
                      <div className="info__img">
                        <span>Двигатель</span>
                        <span>{machine.engine}</span>
                      </div>
                      <div className="info__img">
                        <span>Диам. обраб.</span>
                        <span>{machine.diameter}</span>
                      </div>
                    </div>
                    <span className="price">{machine.price}</span>
                    <Link to="/product/new-beast" className="buy">Купить</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <FeedbackForm />
      </div>
    </main>
  );
}
