import React, {Component} from 'react';
import './ContactSection.scss';
import Footer from '../Footer/Footer'

class ContactSection extends Component {
  render() {
    return (
      <section className={this.props.className}>
        <h2>{this.props.heading}</h2>
        <form>
          <h4>{this.props.subheading}</h4>
          <input type="text" placeholder={this.props.name}/>
          <input type="email" placeholder={this.props.email}/>
          <textarea placeholder={this.props.msg}/>
          <input type="submit" value={this.props.send}/>
        </form>
        <Footer copy="Copyright 2015 &copy; by Anna Dadej" fburl="https://facebook.com" igurl="https://instagram.com"/>
      </section>
    );
  }
}

export default ContactSection;
