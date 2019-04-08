import React, {Component} from 'react';
import './LandingSection.scss';

class LandingSection extends Component {
  render() {
    return (
      <section className={this.props.className}>
        <h2>{this.props.heading}</h2>
      </section>
    );
  }
}

export default LandingSection;
