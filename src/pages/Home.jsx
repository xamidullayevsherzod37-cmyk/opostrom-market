import React from 'react';
import { Link } from 'react-router-dom';
import FeedbackForm from '../components/FeedbackForm';

export default function Home() {
  return (
    <main>
      <div className="main-container">
        <div className="product-wrapper">
          <div className="product-card">
            <div className="product-left">
              <h1 className="product-title">
                Новый зверь<br />
                для всех типов кабелей
              </h1>

              <div className="product-info">
                <div className="row">
                  <span>Диаметр обработки</span>
                  <span>от 1,5 до 130мм</span>
                </div>
                <div className="row">
                  <span>Размеры</span>
                  <span>90×68×120 см</span>
                </div>
                <div className="row">
                  <span>Мощность</span>
                  <span>3 кВт 380 В</span>
                </div>
              </div>

              <div className="product-price">209 000 ₽</div>

              <Link to="/product/new-beast" className="product-btn">Подробнее</Link>
            </div>
            <div className="product-right">
              <img
                src="/images/procesing-cabe.svg"
                alt="Machine"
                className="product-right-img" 
              />
            </div>
          </div>
        </div>

        <div className="processing">
          <h1 className="processing-intro">
            Сепараторы, конвейеры, шнековые
            <br />
            транспортеры и линии для переработки
          </h1>
          <h5 className="processing-info">
            Мы на связи всегда и разберемся с любыми вопросами
            возникшими во
            время <br />эксплуатации нашего оборудования.
          </h5>
          <div className="boxes">
            <Link to="/catalog/cable-cutting-machines">
              <h3>Станки<br />для разделки кабеля</h3>
              <img src="/images/procesing-cabe.svg" alt="processing-cable" />
            </Link>

            <a href="#">
              <h3>Сепараторы</h3>
              <img src="/images/Сепараторы.svg" alt="Сепараторы" />
            </a>

            <a href="#">
              <h3>
                Станок для разделки <br />
                теплообменников
              </h3>
              <img
                src="/images/Станок для разделки теплообменников.svg"
                alt="Станок для разделки теплообменников" 
              />
            </a>

            <a href="#">
              <h3>Разделка радиаторов</h3>
              <img
                src="/images/Разделка радиаторов.svg"
                alt="Разделка радиаторов" 
              />
            </a>

            <a href="#">
              <h3>Запасные части</h3>
              <img src="/images/Запасные части.svg" alt="Запасные части" />
            </a>

            <a href="#">
              <h3>Другое</h3>
              <img src="/images/Другое.svg" alt="Другое" />
            </a>
          </div>
        </div>

        <div className="your-grow">
          <h1>
            Ваша рост – наш interest, ведь тогда нам <br />будет к
            чему
            стремиться
          </h1>
          <div className="our-benefits">
            <a href="#">
              <img src="/images/Всегда на связи.svg" alt="Всегда на связи" />
              <div>
                <h4>Всегда на связи</h4>
                <h6>
                  Консультируем при покупке<br />и в
                  дальнейшем при
                  эксплуатации<br />нашего оборудования
                </h6>
              </div>
            </a>

            <a href="#">
              <img src="/images/Опыт в сфере.svg" alt="Опыт в сфере" />
              <div>
                <h4>Опыт в сфере</h4>
                <h6>
                  Большой опыт в переработке
                  вторсырья<br />позволяет глубоко
                  изучать проблемы<br />и находить лучшие
                  решения
                </h6>
              </div>
            </a>

            <a href="#">
              <img
                src="/images/Наличие запчастей.svg"
                alt="Наличие запчастей" 
              />
              <div>
                <h4>Наличие запчастей</h4>
                <h6>
                  Преимуществом производства своими силами
                  является замена любых
                  комплектующих иремонт при поломке
                </h6>
              </div>
            </a>

            <a href="#">
              <img
                src="/images/Доставка по всей России.svg"
                alt="Доставка по всей России" 
              />
              <div>
                <h4>Доставка по всей России</h4>
                <h6>
                  Отправим товар транспортной компаниейили
                  почтовым
                  отправлением(оплата при получении)
                </h6>
              </div>
            </a>

            <a href="#">
              <img src="/images/Аренда станков.svg" alt="Аренда станков" />
              <div>
                <h4>Аренда станков</h4>
                <h6>
                  Станки можно брать на
                  временное<br />использование с залогом
                </h6>
              </div>
            </a>

            <a href="#">
              <img src="/images/Гарантия на всё.svg" alt="Гарантия на всё" />
              <div>
                <h4>Гарантия на всё</h4>
                <h6>
                  Предоставляется гарантия сроком<br />до 1
                  года со дня
                  приобретения товара
                </h6>
              </div>
            </a>
          </div>
        </div>

        <div className="we">
          <div className="info">
            <h1>Почему именно мы?</h1>
            <h3>
              За долгое время работы в этой области у нас более
              одной тысячи
              клиентов в базе в том числе и представленные выше. В
              основном это
              компании по переработке вторсырья.
            </h3>
            <h4>
              Мы уже прошли тот путь который вам предстоит пройти
              после
              приобретения нашей продукции и лучше подскажем: что
              вам лучше
              подойдет, чего надо избегать и как более эффективно
              использовать
              то что есть.
            </h4>
          </div>
          <div className="sponsors">
            <a href="#">
              <img src="/images/iif-ru.svg" alt="ииф ру" />
            </a>
            <a href="#">
              <img src="/images/МОСКАБЕЛЬМЕТ.svg" alt="МОСКАБЕЛЬМЕТ" />
            </a>
            <a href="#">
              <img src="/images/olimpiskiy.svg" alt="olimpiskiy" />
            </a>
            <a href="#">
              <img src="/images/Logo-VTM-1-_1_ 2.svg" alt="втм" />
            </a>
            <a href="#">
              <img src="/images/умз.svg" alt="умз" />
            </a>
            <a href="#">
              <img src="/images/вторчермет.svg" alt="вторчермет" />
            </a>
          </div>
        </div>

        <FeedbackForm />
      </div>
    </main>
  );
}
