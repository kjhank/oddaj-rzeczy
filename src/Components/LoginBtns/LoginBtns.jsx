import React, {Component} from 'react';
import TopNavElem from '../TopNavElem/TopNavElem';
import UserMenu from '../UserMenu/UserMenu';
import './LoginBtns.scss';
import cog from '../../assets/cog.png';

class LoginBtns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.loggedIn,
      username: 'Andrzej',
      menuVisible: true
    };
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu = e => {
    e.preventDefault();
    this.setState({menuVisible: !this.state.menuVisible});
  };

  render() {
    if (this.state.loggedIn) {
      return (
        <div>
          Witaj, {this.state.username}
          <a href="/" onClick={this.openMenu}>
            <img src={cog} alt="koło zębate" />
          </a>
          {this.state.menuVisible ? <UserMenu /> : null}
        </div>
      );
    } else {
      return (
        <ul>
          <TopNavElem href="#" text="Zaloguj" />
          <TopNavElem href="#" text="Załóż konto" />
        </ul>
      );
    }
  }
}

export default LoginBtns;
