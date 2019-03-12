import React from 'react'
import MailIconUrl from '../images/baseline-mail_outline-24px.svg'
import PhoneIconUrl from '../images/outline-phone-24px.svg'
import './contacts.css'
import './utils.css'

const Contacts = () => (
  <section className="section contacts">
    <h3 className="align_center">Контакти</h3>
    <div className="contacts-container">
      <article className="contacts__item background_orange">
        <img alt="mail" className="contacts__icon" src={MailIconUrl} />
        <h4 className="uppercase inline">Пошта:</h4>
        <div className="contacts__mail">skmp@ukr.net</div>
      </article>
      <article className="contacts__item background_black">
        <img alt="phone" className="contacts__icon" src={PhoneIconUrl} />
        <h4 className="uppercase inline">Телефони:</h4>
        <div className="contacts__phone-number">+38 093 224 8686</div>
        <div className="contacts__phone-number">+38 095 273 8686</div>
        <div className="contacts__phone-number">+38 096 226 8686</div>
      </article>
    </div>
  </section>
)

export default Contacts;
