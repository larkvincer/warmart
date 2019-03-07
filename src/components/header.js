import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './navbar'
import Logo from './logo'
import Hamburger from './hamburger'
import './header.css'


class Header extends React.PureComponent {
  currentScrollOffset = 0;

  items = [
    { title: 'Головна', classSelector: '.header' },
    { title: 'Про нас', classSelector: '.about' },
    { title: 'Контакти', classSelector: '.contacts' },
    { title: 'Наш офіс', classSelector: '.office' },
  ]

  state = {
    isNavBarOpen: false
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateState);
    window.addEventListener('orientationchange', this.updateState);
  }

  get isMobileNavbarOpen() {
    return !this.isWider500 && this.state.isNavBarOpen;
  }
  componentDidUpdate() {
    if (!this.isMobileNavbarOpen) {
      window.scroll(0, this.currentScrollOffset);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
    window.removeEventListener('orientationchange');
  }

  handleHambClick = () => {
    if (!this.state.isNavBarOpen) {
      this.currentScrollOffset = window.scrollY;
    }
    this.setState((prevState) => ({ isNavBarOpen: !prevState.isNavBarOpen }));
  }

  updateState = () => {
    this.setState({ isNavBarOpen: this.isWider500 });
  }

  get isWider500() {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 500;
    }
  }

  get shouldRenderNavbar() {
    return this.isWider500 || this.isMobileNavbarOpen;
  }

  setCurrentScrollOffset = (offset) => {
    this.currentScrollOffset = offset;
    this.handleHambClick();
  }

  render() {
    return (
      <>
        <Hamburger isOpen={this.isMobileNavbarOpen} onClick={this.handleHambClick}/>
        <header className="header">
          <Logo />
          {this.shouldRenderNavbar && <Navbar
            setCurrentScrollOffset={this.setCurrentScrollOffset}
            isWider500={this.isWider500}
            items={this.items}
          />}
        </header>
      </>
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
