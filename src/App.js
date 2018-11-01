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
        <div className="section-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-xl-3">
                <div class="section-heading">
                  <h2>
                  </h2>
                </div>
              </div>
              <div className="col-lg-9 col-xl-9">
                <Skill heading="ReactJS" percent="85" />
                <Skill heading="HTML5" percent="99" />
                <Skill heading="Python" percent="60" />
                <Skill heading="MySQL" percent="70" />
                <Skill heading="MongoDB" percent="70" />
              </div>
            </div>
          </div>
        </div>
        <Resume />
        <ContactMe />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
