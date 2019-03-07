import React from 'react'
import GasBoilerUrl from '../images/gas-boiler.jpg'
import SolidHeatingUrl from '../images/solid_heating.png'
import ConditionerUrl from '../images/conditioner.jpg'
import './about.css'
import './utils.css'

const About = () => (
  <section className="about align_center section">
    <h3>Про нас</h3>
    <div className="about-item gas-heating">
      <p className="about-item__desc">
        Встановлюємо індивідуальне опалення. Надаємо гарантію та сервіс.
      </p>
      <div className="about-item__image-container">
        <img alt="gas boiler" className="about-item__image float_right" width="500" src={GasBoilerUrl} />
      </div>
    </div>
    <div className="about-item">
      <div className="about-item__image-container">
        <img alt="solid heating" className="about-item__image float_left" width="500" src={SolidHeatingUrl} />
      </div>
      <p className="about-item__desc text_black">
        Надаємо консультації щодо встановлення твердопаливних котлів.<br/>
        Проводимо монтаж та сервіс.
      </p>
    </div>
    <div className="about-item about-item_conditioner direction_column">
      <div>
        <img alt="conditioner" className="about-item__image" width="500" src={ConditionerUrl} />
      </div>
      <p className="text_black flex-justify_center about-item__desc">
        Встановлюємо кондиціонери.
      </p>
    </div>
  </section>
)

export default About
