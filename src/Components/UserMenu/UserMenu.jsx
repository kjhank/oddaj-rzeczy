import React, {Component} from 'react';
import './UserMenu.scss';

class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: this.props.menuVisible
    };
  }

  render() {
    return (
      <div className="user-menu">
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
