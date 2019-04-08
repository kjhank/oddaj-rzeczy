import React, {Component} from 'react';
import TopNavElem from '../TopNavElem/TopNavElem';
import UserMenu from '../UserMenu/UserMenu';
import './LoginBtns.scss';

class LoginBtns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.loggedIn,
      username: 'Andrzej',
      menuStyle: {display: 'none'}
    };
  }

  openMenu = e => {
    this.setState({menuStyle: {display: 'block'}})
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <div>
          Witaj, {this.state.username}
          <button onClick={this.openMenu}>cog</button>
          <UserMenu style={this.state.menuStyle}/>
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
