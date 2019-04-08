import React, {Component} from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import NumbersSection from './Components/NumbersSection/NumbersSection';
import EasySteps from './Components/EasySteps/EasySteps';
import AboutSection from './Components/AboutSection/AboutSection';
import WhoGetsHelpSection from './Components/WhoGetsHelpSection/WhoGetsHelpSection';
import ContactSection from './Components/ContactSection/ContactSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="main-header" />
        <HeroSection
          className="top-section hero-section"
          heading="Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce"
          buttons={[
            {text: 'oddaj rzeczy', href: '#'},
            {text: 'zorganizuj zbiórkę', href: '#'}
          ]}
        />
        <NumbersSection
          className="mid-section numbers-section"
          bags={10}
          orgs={5}
          rallies={7}
        />
        <EasySteps
          className="mid-section easysteps-section"
          heading="Wystarczą 4 proste kroki"
          steps={[
            {
              icon: 'x.png',
              heading: 'Wybierz rzeczy',
              content: 'ubrania, zabawki, sprzęt i inne'
            },
            {
              icon: 'y.png',
              heading: 'Spakuj je',
              content: 'skorzystaj z worków na śmieci'
            },
            {
              icon: 'z.png',
              heading: 'Zdecyduj komu chcesz pomóc',
              content: 'Wybierz zaufane miejsce'
            },
            {
              icon: 'w.png',
              heading: 'Zamów kuriera',
              content: 'kurier przyjedzie w dogodnym terminie'
            }
          ]}
          buttonText="załóż konto"
        />
        <AboutSection
          className="mid-section about-section"
          heading="O nas"
          text="Bacon ipsum dolor amet bacon ham hock pancetta doner, brisket kevin shoulder swine drumstick fatback andouille sausage salami frankfurter hamburger."
          signature="signature.svg"
          signatureAlt="podpis"
          aboutPicture="about.jpg"
          aboutPictureAlt="ludzie"
        />
        <WhoGetsHelpSection
          className="mid-section whogetshelp-section"
          heading="Komu pomagamy?"
          buttonOne="Fundacjom"
          buttonTwo="Organizacjom pozarządowym"
          buttonThree="Lokalnym zbiórkom"
          whoTextOne="W naszej bazie znajdziesz listę zweryfikowanych fundacji, z którymi współpracujemy. Możesz sprawdzić, czym się zajmują, komu pomagają i czego potrzebują."
          whoOne={[
            {
              name: 'Fundacja "dbam o zdrowie"',
              goal: 'Pomoc osobom znajdującym się w trudnej sytuacji życiowej',
              items: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
            },
            {
              name: 'Fundacja "Dla dzieci"',
              goal: 'Pomoc dzieciom z ubogich rodzin',
              items: 'ubrania, meble, zabawki'
            },
            {
              name: 'Fundacja "bez domu"',
              goal: 'Pomoc dla osób nieposiadających miejsca zamieszkania',
              items: 'ubrania, jedzenie, ciepłe koce'
            }
          ]}
        />
        <ContactSection className="bottom-section contact-section" heading="Skontaktuj się z nami" subheading="Formularz kontaktowy" name="imię" email="email" msg="Wiadomość" send="wyślij"/>
      </div>
    );
  }
}

export default App;
