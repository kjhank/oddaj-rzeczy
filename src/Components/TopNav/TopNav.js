import React, {Component} from 'react';
import './TopNav.scss';
import TopNavElem from '../TopNavElem/TopNavElem';

class TopNav extends Component {
  render() {
    return (
      <ul>
        <TopNavElem href="#" text="Start" />
        <TopNavElem href="#" text="O co chodzi?" />
        <TopNavElem href="#" text="O nas" />
        <TopNavElem href="#" text="Fundacje i organizacje" />
        <TopNavElem href="#" text="Kontakt" />
      </ul>
    );
  }
}

export default TopNav;
