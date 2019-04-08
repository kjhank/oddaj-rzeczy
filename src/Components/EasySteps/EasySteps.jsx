import React, {Component} from 'react';
import './EasySteps.scss';

class EasySteps extends Component {
  render() {
    return (
      <section className={this.props.className}>
        <h2>{this.props.heading}</h2>
        {this.props.steps.map((elem, idx) => (
          <div key={idx}>
            <img src={elem.icon} alt={elem.heading} />
            <h3>{elem.heading}</h3>
            <span>{elem.content}</span>
          </div>
        ))}
        <a href="/">{this.props.buttonText}</a>
      </section>
    );
  }
}

export default EasySteps;
