import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './navbar'
import Logo from './logo'
import Hamburger from './hamburger'
import './header.css'


class Header extends React.PureComponent {
  items = [
    'Головна',
    'Про нас',
    'Контакти',
  ]

  state = {
    isNavBarOpen: true
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateState);
    window.addEventListener('orientationchange', this.updateState);
  }
  
  componentDidUpdate() {
    const body = document.querySelector('body');
    if (!this.isWider500 && this.state.isNavBarOpen) {
      body.style.overflowY = 'hidden';
      body.style.maxHeight = '100vh';
    } else {
      body.style.overflowY = 'auto';
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
    window.removeEventListener('orientationchange');
  }

  handleHambClick = () => {
    this.setState((prevState) => ({ isNavBarOpen: !prevState.isNavBarOpen }));
  }

  updateState = () => {
    this.setState({ isNavBarOpen: this.isWider500 });
  }

  get isWider500() {
    return window.innerWidth >= 500;
  }

  render() {
    return (
      <header className="header">
        <Logo />
        <Hamburger isOpen={this.state.isNavBarOpen} onClick={this.handleHambClick}/>
        {this.state.isNavBarOpen && <Navbar items={this.items} />}
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
