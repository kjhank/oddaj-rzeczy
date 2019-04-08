import React, {Component} from 'react';
import './AboutSection.scss';

class AboutSection extends Component {
  render() {
    return (
      <section className={this.props.className}>
        <div>
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
          <img src={this.props.signature} alt={this.props.signatureAlt}/>
        </div>
        <img src={this.props.aboutPicture} alt={this.props.aboutPictureAlt}/>
      </section>
    );
  }
}

export default AboutSection;
