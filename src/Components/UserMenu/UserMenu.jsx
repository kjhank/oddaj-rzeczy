import React, {Component} from 'react';
import './UserMenu.scss';

class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: this.props.style
    };
  }

  render() {
    return (
      <div className="user-menu" style={this.state.style}>
        <ul>
          <li>
            <a href="/">Profil</a>
          </li>
          <li>
            <a href="/">Ustawienia</a>
          </li>
          <li>
            <a href="/">Moje zbiórki</a>
          </li>
          <li>
            <a href="/">Wyloguj</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserMenu;
