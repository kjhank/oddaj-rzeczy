import React, {Component} from 'react';
import './Header.scss';
import TopNav from '../TopNav/TopNav';
import LoginBtns from '../LoginBtns/LoginBtns';

class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <LoginBtns loggedIn={true}/>
        <TopNav />
      </header>
    );
  }
}

export default Header;
