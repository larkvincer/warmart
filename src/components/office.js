import React from 'react'
import LocationIconUrl from '../images/baseline-location_on-24px.svg'
import './office.css'
import './utils.css'

const API_KEY = 'AIzaSyDG4wijlW19SBYL9zmKCqOQSwDYmVD6pZw'
const ADDRESS = "Pobutova+St,+4,+Ivano-Frankivs'k,+Ivano-Frankivs'ka+oblast,+76000"

const Office = () => (
  <section className="office align_center section">
    <h3>Наш офіс на карті</h3>
    <div className="office-container">
      <article className="address">
        <img className="address-icon" src={LocationIconUrl} alt="location icon" />
        <h4 className="address-title">Адреса:</h4>
        <div>
          м. Івано-Франківськ, вулиця <strong>Побутова 4</strong>
        </div>
      </article>
      <article className="map">
        <iframe
          title="Office location"
          width="100%"
          height="450"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}
          &q=${ADDRESS}`}
          allowFullScreen
        />
      </article>
    </div>
  </section>
)

export default Office
