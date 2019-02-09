import React from 'react'
import GasBoilerUrl from '../images/gas-boiler.jpg'
import SolidHeatingUrl from '../images/solid_heating.png'
import './about.css'
import './utils.css'

const About = () => (
  <section className="about align_center section">
    <h3>Про нас</h3>
    <div className="about-item gas-heating">
      <p className="about-item__desc">
        Встановлюємо газове опалення. Надаємо гарантію та сервіс.
      </p>
      <div className="about-item__image-container">
        <img className="about-item__image float_right" width="500" src={GasBoilerUrl} />
      </div>
    </div>
    <div className="about-item">
      <div className="about-item__image-container">
        <img className="about-item__image float_left" width="500" src={SolidHeatingUrl} />
      </div>
      <p className="about-item__desc text_black">
        Надаємо консультації щодо встановлення твердопаливних котлів.<br/>
        Проводимо монтаж та сервіс.
      </p>
    </div>
  </section>
)

export default About
