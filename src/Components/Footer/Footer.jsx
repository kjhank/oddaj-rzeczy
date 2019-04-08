import React, {Component} from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer>{this.props.copy} <a href={this.props.fburl}>fb</a><a href={this.props.igurl}>ig</a></footer>
    );
  }
}

export default Footer;
