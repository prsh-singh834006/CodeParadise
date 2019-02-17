import React, { Component } from 'react';
import Home from './sections/Home';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Resume from './sections/Resume';
import About from './sections/About';
import MySkills from './sections/MySkills';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Home />
        <About />
        <MySkills />
        <div className="section-3 text-center">
          <h1 className="color-white">
            “Virtually nothing is impossible in this world if you just put your
            mind to it and maintain a positive attitude.” —Lou Holtz
          </h1>
        </div>
        <Resume />
        <ContactMe />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
