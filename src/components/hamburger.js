import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import './hamburger.css'

const HamburgerBtn = ({ isOpen, onClick }) => (
  <div onClick={onClick} className={cn("hamburger", { "hamburger_open": isOpen })}>
    <div className={cn("hamburger-line", { "hamburger-line_crossline1": isOpen })} />
    <div className="hamburger-line" style={{opacity: isOpen ? 0 : 1}} />
    <div className={cn("hamburger-line", { "hamburger-line_crossline2": isOpen })} />
  </div>
)

HamburgerBtn.propTypes = {
  isOpen: PropTypes.boolean,
  onClick: PropTypes.func
}

HamburgerBtn.defaultProps = {
  isOpen: false,
  onClick: () => alert('Clicked')
}

export default HamburgerBtn
