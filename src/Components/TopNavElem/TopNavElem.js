import React, {Component} from 'react';
import './TopNavElem.scss';

class TopNavElem extends Component {
  render() {
    return (
      <li>
        <a href={this.props.href}>{this.props.text}</a>
      </li>
    );
  }
}

export default TopNavElem;
