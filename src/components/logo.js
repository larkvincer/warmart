import React from 'react'
import WarmartIcon from '../images/warmart-icon.svg'
import './logo.css'

const Logo = () => (
  <div className="logo">
    <img alt="warmart logo" src={WarmartIcon} />
    <h1 className="logo__company-name">Вомарт</h1>
    <h3 className="logo__company-desc">Опалення Сантехніка Гарантія Сервіс</h3>
  </div>
)

export default Logo;
