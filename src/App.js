import React, { Component } from 'react';
import Home from './sections/Home';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Resume from './sections/Resume';
import About from './sections/About';
import MySkills from './sections/MySkills';
import Langauge from './components/Langauge';
import Projects from './sections/Projects';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Home />
        <About />
        <div className="section-3 text-center is-hidden-mobile">
          <h1 className="color-white">
            “Virtually nothing is impossible in this world if you just put your
            mind to it and maintain a positive attitude.” —Lou Holtz
          </h1>
        </div>
        <Langauge />
        <MySkills />
        <Projects />
        <Resume />
        {/* <ContactMe /> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
