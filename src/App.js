import React, {Component} from 'react';
// import logo from "./logo.svg";
// import './App.css';
import './App.scss';
import Header from './Components/Header/Header';
// import LandingSection from './Components/LandingSection/LandingSection';
import HeroSection from './Components/HeroSection/HeroSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HeroSection
          className="top-section intro-section"
          heading="Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce"
          buttons={[{text: 'oddaj rzeczy', href: '#'}, {text: 'zorganizuj zbiórkę', href: '#'}]}
        />
      </div>
    );
  }
}

export default App;
