import React, {Component} from 'react';
import './Footer.scss';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';

class Footer extends Component {
  render() {
    return (
      <footer>{this.props.copy} <a href={this.props.fburl}><img src={facebook} alt="facebook icon"/></a><a href={this.props.igurl}><img src={instagram} alt="instagram icon"/></a></footer>
    );
  }
}

export default Footer;
