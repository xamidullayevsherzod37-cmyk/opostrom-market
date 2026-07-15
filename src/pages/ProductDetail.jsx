import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FeedbackForm from '../components/FeedbackForm';

export default function ProductDetail() {
  const [activeTab, setActiveTab] = useState('description');

  const relatedProducts = [
    { id: 1, name: 'SG-006-1 Станок для разделки кабеля (Автоматический)', weight: '13 кг', engine: '180 Вт', diameter: 'от 1,5 до 25мм', price: '34 990 ₽', img: '/images/procesing-cabe.svg' },
    { id: 2, name: 'SG-006-1 Станок для разделки кабеля (Автоматический)', weight: '13 кг', engine: '180 Вт', diameter: 'от 1,5 до 25мм', price: '34 990 ₽', img: '/images/procesing-cabe.svg' },
    { id: 3, name: 'SG-006-1 Станок для разделки кабеля (Автоматический)', weight: '13 кг', engine: '180 Вт', diameter: 'от 1,5 до 25мм', price: '34 990 ₽', img: '/images/SG-006-1.svg' },
    { id: 4, name: 'S2-3 Автоматический мини', weight: '13 кг', engine: '180 Вт', diameter: 'от 1,5 до 25мм', price: '34 990 ₽', img: '/images/S2-3.svg' }
  ];

  const partsList = [
    { name: 'Звездочка для цепи', price: '600 ₽', img: '/images/Звездочка для цепи.svg' },
    { name: 'Кнопка Стопа аварийная', price: '500 ₽', img: '/images/Кнопка Стопа аварийная.svg' },
    { name: 'Рукоятка', price: '200 ₽', img: '/images/Рукоятка.svg' },
    { name: 'Нож дисковый', price: '400 ₽', img: '/images/Нож дисковый.svg' }
  ];

  return (
    <main>
      <div className="main-container">
        <div className="product__wrapper">
          <div className="product__info">
            <h1 className="product__name">
              SG-006-1 Станок для разделки кабеля (Автоматический)
            </h1>
            <div className="product__iformation">
              <div className="row__info">
                <span>Диаметр обработки</span>
                <span>от 1,5 до 130мм </span>
              </div>
              <div className="row__info">
                <span>Размеры</span>
                <span>90*68*120 см</span>
              </div>
              <div className="row__info">
                <span>Мощность</span>
                <span>3 кВт 380 В</span>
              </div>
            </div>
            <div className="price__product">209 000 ₽</div>
            <div className="product__btns">
              <button className="class__product">Проконсультироваться</button>
              <button className="add__product">Добавить в корзину</button>
            </div>
          </div>

          <div className="product__right">
            <div className="product__img">
              <img src="/images/procesing-cabe.svg" alt="product-right-img" />
            </div>
            <div className="tel__phone">
              <span>Связаться со специалистом</span>
              <div className="phone-nomber">
                <a href="tel:+78007073101">+7 (800) 707-31-01</a>
                <a href="tel:+79636566626">+7 (963) 656-66-26</a>
              </div>
            </div>
          </div>
        </div>

        <section className="product-tabs">
          <ul className="tabs__list">
            <li>
              <button 
                onClick={() => setActiveTab('description')} 
                className={`tabs__link ${activeTab === 'description' ? 'active' : ''}`}
              >
                Описание
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('specs')} 
                className={`tabs__link ${activeTab === 'specs' ? 'active' : ''}`}
              >
                Характеристики
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('video')} 
                className={`tabs__link ${activeTab === 'video' ? 'active' : ''}`}
              >
                Видео
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('parts')} 
                className={`tabs__link ${activeTab === 'parts' ? 'active' : ''}`}
              >
                Запасные части
              </button>
            </li>
          </ul>
        </section>

        <div>
          {activeTab === 'description' && (
            <div className="product__description">
              <section className="description">
                <h2>Описание</h2>
                <div className="text__about__product">
                  <p>
                    Универсальность этого станка состоит в том
                    что на нем можно
                    разделать не только обычные кабеля в пвх
                    изоляции, но и
                    бронированные кабеля до 45 мм диаметром. Это
                    возможно за счет
                    редуктора и небольшого оборота двигателя,
                    ведь бронированные
                    кабеля тяжелее прорезаются и нужно больше
                    силы на то что бы
                    протянуть кабель через отверстие. На станках
                    же с ременной
                    передачей и быстрой скоростью работы
                    бронированный кабель
                    просто-напросто застрянет в станке.
                  </p>
                  <p>
                    На станке 7 отверстий первые два не только
                    режут кабель но и
                    давят. Остальные отверстия режут кабель с
                    Двух сторон, что
                    облегчает работу оператора.
                  </p>
                  <p>
                    У станка есть амортизационные пружины
                    которые давят на верхний
                    вал. Во время работы, пропуская кабель через
                    отверстия верхние
                    валы приподнимается и прорезает изоляцию.
                    Двумя барашками
                    сверху можно регулировать силу давления и
                    настроиться под
                    определенную глубину изоляции кабеля.
                  </p>
                  <p>
                    Установлены сменные дисковые ножи которые в
                    случае
                    необходимости можно легко заменить. Так же
                    легко заменить
                    ремни станка, это основные расходные
                    материалы в работе со
                    станком
                  </p>
                  <p>
                    На нем есть три кнопки: Аварийный Стоп
                    (сверху) - нужен для
                    мгновенной остановки двигателя в случае если
                    застрял кабель
                    или перчатку оператора затянуло в отверстие,
                    кнопка старта и
                    кнопка стоп. Последние два нужно
                    использовать в обычном
                    режиме, Аварийный же только в крайнем случае
                    иначе это привет
                    к его быстрому износу.
                  </p>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="product__description">
              <section className="specs">
                <h2>Характеристики</h2>
                <div className="specs__row">
                  <div className="spec">
                    <span className="spec-1">Диапазон входа</span>
                    <span className="spec-2">1-45 мм</span>
                  </div>
                  <div className="spec">
                    <span className="spec-1">Размеры изделия</span>
                    <span className="spec-2">63х37х48 см</span>
                  </div>
                  <div className="spec">
                    <span className="spec-1">Вес изделия</span>
                    <span className="spec-2">77 кг</span>
                  </div>
                  <div className="spec">
                    <span className="spec-1">Среднее производство</span>
                    <span className="spec-2">Свыше 500 кг</span>
                  </div>
                  <div className="spec">
                    <span className="spec-1">Мощность двигателя</span>
                    <span className="spec-2">1,5 кВт</span>
                  </div>
                  <div className="spec">
                    <span className="spec-1">Напряжение</span>
                    <span className="spec-2">220 Вольт</span>
                  </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'video' && (
            <div className="video">
              <h2>Видео</h2>
              <iframe
                width="100%"
                height="415px"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=y5O4OBPtlljor0CG"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {activeTab === 'parts' && (
            <div className="parts">
              <h2>Запасные части</h2>
              <div className="parts-card">
                {partsList.map((part, idx) => (
                  <div className="part__card" key={idx}>
                    <div className="part__img">
                      <img src={part.img} alt={part.name} />
                    </div>
                    <div className="star">{part.name}</div>
                    <div className="price__card">{part.price}</div>
                    <a href="#" className="buy">Купить</a>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="right__card">
            <a href="#">
              <div className="img__card">
                <img src="/images/Доставка по всей России.svg" alt="Доставка по всей России" />
              </div>
              <div>
                <h4>Доставка по всей России</h4>
                <h6>Отправим товар транспортной компаниейили почтовым отправлением(оплата при получении)</h6>
              </div>
            </a>
            <a href="#">
              <img src="/images/Гарантия на всё.svg" alt="Гарантия на всё" />
              <div>
                <h4>Гарантия на всё</h4>
                <h6>Предоставляется гарантия сроком до 1 года со дня приобретения товара</h6>
              </div>
            </a>
          </div>
        </div>

        <div className="product__card__name">
          <h2>С этим товаром также смотрят</h2>
          <div className="products__card">
            {relatedProducts.map((prod, idx) => (
              <div className="card" key={idx}>
                <img src={prod.img} alt={prod.name} className="product-img" />
                <span className="aвтоматический-мини">{prod.name}</span>
                <div className="about__info">
                  <div className="info__img">
                    <span>Вес</span>
                    <span>{prod.weight}</span>
                  </div>
                  <div className="info__img">
                    <span>Двигатель</span>
                    <span>{prod.engine}</span>
                  </div>
                  <div className="info__img">
                    <span>Диам. обраб.</span>
                    <span>{prod.diameter}</span>
                  </div>
                </div>
                <span className="price">{prod.price}</span>
                <Link to="/product/new-beast" className="buy">Купить</Link>
              </div>
            ))}
          </div>
        </div>

        <FeedbackForm />
      </div>
    </main>
  );
}
