import React from 'react';
import FeedbackForm from '../components/FeedbackForm';

export default function Contacts() {
  return (
    <main>
      <div className="main-container">
        <div className="contacts">
          <h1>Контакты</h1>
          <div className="contact__with__us">
            <div className="address">
              <div className="companys-address">
                <h4>Адрес</h4>
                <p>
                  Тураевское шоссе дом 17, д. Островцы,<br />
                  Раменский район, МО, Россия
                </p>
              </div>

              <div className="working-time">
                <h4>Рабочее время</h4>
                <div className="time">
                  <span>
                    <div>Пн - Пт</div>
                    <div>8:00 до 22:00</div>
                  </span>

                  <span>
                    <div>Сб - Вс</div>
                    <div>8:00 до 20:00</div>
                  </span>
                </div>
              </div>

              <div className="contact__email">
                <h4>Email</h4>
                <span>okoprom@gmail.com</span>
              </div>

              <div className="phone__number">
                <h4>Телефон</h4>
                <span>+7 (800) 707-31-01</span>
              </div>

              <div className="masege">
                <h4>Мессенджеры</h4>
                <div className="masege__btn">
                  <button>Whatsapp</button>
                  <button>Telegram</button>
                </div>
              </div>

              <div className="social-media">
                <h4>Мы в социальных сетях</h4>
                <div className="social__media__btns">
                  <button>
                    <img src="/images/insta.svg" alt="instagram" />
                  </button>
                  <button>
                    <img src="/images/youtube.svg" alt="youtube" />
                  </button>
                </div>
              </div>
            </div>

            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2256.5255751189507!2d37.94482067673278!3d55.55804737301266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414abbd1df2a9401%3A0xa211f6afb46cf181!2z0KLRg9GA0LDQtdCy0YHQutC-0LUg0YguLCAxNywg0JvRi9GC0LrQsNGA0LjQvdC-LCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCDQoNC-0YHRgdC40Y8sIDE0MDEyMw!5e0!3m2!1sru!2s!4v1768140956992!5m2!1sru!2s"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="map"
              >
              </iframe>
            </div>
          </div>
        </div>

        <div className="legal-info">
          <h1>Юридическая информация</h1>
          <div className="legal__info">
            <div className="production">
              <h4>Производство</h4>
              <div className="production__info">
                <div>
                  <span className="span-1">
                    Наименование <br />
                    компании
                  </span>
                  <span className="span-2">
                    Общество с ограниченной
                    <br />
                    ответственностью «Окопром»
                  </span>
                </div>
                <div>
                  <span className="span-1">ОГРН</span>
                  <span className="span-2">1205000045821</span>
                </div>
                <div>
                  <span className="span-1">ИНН</span>
                  <span className="span-2">5032318518</span>
                </div>
                <div>
                  <span className="span-1">Адрес производства</span>
                  <span className="span-2">
                    Россия, Московская область,<br />
                    д. Островцы, Тураевская улица,<br />
                    дом 58
                  </span>
                </div>
                <div>
                  <span className="span-1">Почтовый адрес</span>
                  <span className="span-2">
                    143072, Московская обл., р-н <br />Одинцовский, п.
                    ВНИИССОК, ул<br />Дружбы, д.4
                  </span>
                </div>
              </div>
            </div>

            <div className="sells">
              <h4>Продажи</h4>
              <div className="sells__info">
                <div>
                  <span className="span-1">
                    Наименование <br />
                    компании
                  </span>
                  <span className="span-2">
                    Общество с ограниченной
                    <br />
                    ответственностью «Сином Групп»
                  </span>
                </div>
                <div>
                  <span className="span-1">ОГРН</span>
                  <span className="span-2">1177746129010</span>
                </div>
                <div>
                  <span className="span-1">ИНН</span>
                  <span className="span-2">7726396387</span>
                </div>
                <div>
                  <span className="span-1">Адрес производства</span>
                  <span className="span-2">
                    Россия, Московская область, <br />д. Островцы, Тураевская
                    улица, <br />
                    дом 58
                  </span>
                </div>
                <div>
                  <span className="span-1">Почтовый адрес</span>
                  <span className="span-2">
                    115191, г. Москва, пер. Духовской, <br />
                    д. 17, пом. 1
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FeedbackForm />
      </div>
    </main>
  );
}
