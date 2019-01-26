import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'
import './navbar.css'

const Navbar = ({ items = [] }) => (
  <nav className="navbar">
    <ul className="list">
      {items.map(item => <li key={uuid()} className="list__item">{item}</li>)}
    </ul>
  </nav>
)

Navbar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string)
}

export default Navbar
