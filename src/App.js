import React, { Component } from 'react';
import Main from './sections/Main';
import pic1 from './static/img/section-2-img.png';
import Skill from './components/Skill';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Resume from './sections/Resume';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Main />
        <div className="section-about" id="section-about">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-xl-6">
                <img src={pic1} alt="No found" style={{ width: '100%' }} />
              </div>
              <div className="col-lg-6 col-xl-6" style={{ padding: '3rem' }}>
                <h3 className="section-heading">
                  About <span style={{ fontWeight: '800' }}>Me</span>
                </h3>
                <p>
                  Successful people maintain a positive focus in life no matter
                  what is going on around them. They stay focused on their past
                  successes rather than their past failures, and on the next
                  action steps they need to take to get them closer to the
                  fulfillment of their goals rather than all the other
                  distractions that life presents to them.
                </p>
              </div>
            </div>
          </div>
        </div>
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
                    My <strong>Skills</strong>
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
