import React from 'react'
import './office.css'

const API_KEY = 'AIzaSyDG4wijlW19SBYL9zmKCqOQSwDYmVD6pZw'
const ADDRESS = "Yevropeiska+Square,+3,+Ivano-Frankivs'k,+Ivano-Frankivs'ka+oblast"

const Office = () => (
  <section>
    <h3>Наш офіс на карті</h3>
    <iframe
      width="600"
      height="450"
      frameborder="0"
      src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}
      &q=${ADDRESS}`}
      allowfullscreen
    />
  </section>
)

export default Office
