import React, {Component} from 'react';
import './Header.scss';
import TopNav from '../TopNav/TopNav';
import LoginBtns from '../LoginBtns/LoginBtns';
import HeroSection from '../HeroSection/HeroSection';

class Header extends Component {
  render() {
    return (
      <header className={this.props.className}>
        <LoginBtns loggedIn={false} />
        <TopNav />
      </header>
    );
  }
}

export default Header;
