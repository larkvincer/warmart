import React from 'react'
import './office.css'
import './utils.css'

const API_KEY = 'AIzaSyDG4wijlW19SBYL9zmKCqOQSwDYmVD6pZw'
const ADDRESS = "Yevropeiska+Square,+3,+Ivano-Frankivs'k,+Ivano-Frankivs'ka+oblast"

const Office = () => (
  <section className="office align_center">
    <h3>Наш офіс на карті</h3>
    <div className="map">
      <iframe
        width="100%"
        height="450"
        frameBorder="0"
        src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}
      &q=${ADDRESS}`}
        allowFullScreen
      />
    </div>
  </section>
)

export default Office
