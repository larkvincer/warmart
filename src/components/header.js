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
    window.addEventListener('resize', () => this.setState({ isNavBarOpen: this.shouldShowNavBar }));
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
  }

  handleHambClick = () => {
    this.setState((prevState) => ({ isNavBarOpen: !prevState.isNavBarOpen }));
  }

  get shouldShowNavBar() {
    const isWider500 = window.innerWidth >= 500;
    return isWider500 || !isWider500 && this.state.isNavBarOpen;
  }

  render() {
    return (
      <header className="header">
        <Logo />
        <Hamburger isOpen={this.state.isNavBarOpen} onClick={this.handleHambClick}/>
        {this.shouldShowNavBar && <Navbar items={this.items} />}
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
