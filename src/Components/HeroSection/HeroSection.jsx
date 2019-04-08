import React, {Component} from 'react';
import './HeroSection.scss';

class HeroSection extends Component {
  render() {
    return (
      <section className={this.props.className}>
        <h2>{this.props.heading}</h2>
        {this.props.buttons.map((elem, idx) => <a key={idx} className="box-button" href={elem.href}>{elem.text}</a>)}
      </section>
    );
  }
}

export default HeroSection;
