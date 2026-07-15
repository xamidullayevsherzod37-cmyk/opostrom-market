import React, { useState } from 'react';

export default function FeedbackForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Спасибо за заявку, ${name || 'клиент'}! Мы свяжемся с вами в ближайшее время.`);
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <section className="feedback">
      <div className="feedback__container">
        <div className="feedback__info">
          <h2 className="feedback__title">
            Будем рады ответить на все интересующие вопросы
          </h2>
          <p className="feedback__subtitle">
            Оставьте заявку и мы вам вскоре позвоним <br />
            и проконсультируем по всем интересующим вопросам
          </p>
        </div>

        <form className="feedback__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              className="form-input"
              placeholder="Ваше имя" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-input"
              placeholder="+7 (___) __ __"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-input"
              placeholder="E-mail (необязательно)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-submit">Отправить</button>
        </form>
      </div>
    </section>
  );
}
