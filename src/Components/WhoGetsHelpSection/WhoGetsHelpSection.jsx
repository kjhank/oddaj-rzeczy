import React, {Component} from 'react';
import './WhoGetsHelpSection.scss';

class WhoGetsHelpSection extends Component {
  render() {
    return (
      <section className={this.props.className}>
        <h2>{this.props.heading}</h2>
        <nav>
          <button>{this.props.buttonOne}</button>
          <button>{this.props.buttonTwo}</button>
          <button>{this.props.buttonThree}</button>
        </nav>
        <div>
          <p>{this.props.whoTextOne}</p>
          <ul>
            {this.props.whoOne.map((elem, idx) => (
              <li key={idx}>
                <h4>{elem.name}</h4>
                <div className="goals">Cel i misja: {elem.goal}</div>
                <div className="items">{elem.items}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default WhoGetsHelpSection;
