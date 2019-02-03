import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'
import './navbar.css'

function redirectToSection(classSelector, setCurrentScrollOffset, isWider500) {
  return function() {
    const el = document.querySelector(classSelector);
    if (el) {
      if (!isWider500) {
        setCurrentScrollOffset(el.offsetTop);
      } else {
        el.scrollIntoView();
      }
    }
  }
}

const Navbar = ({ items = [], setCurrentScrollOffset, isWider500 }) => (
  <nav className="navbar">
    <ul className="list">
      {items.map(item =>
        <li
          key={uuid()}
          className="list__item"
          onClick={redirectToSection(item.classSelector, setCurrentScrollOffset, isWider500)}
        >
          {item.title}
        </li>)}
    </ul>
  </nav>
)

Navbar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    tilte: PropTypes.string,
    classSelector: PropTypes.string,
  })),
  setCurrentScrollOffset: PropTypes.func,
  isWider500: PropTypes.bool
}

export default Navbar
