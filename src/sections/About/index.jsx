import React from 'react';
import pic1 from '../../static/img/section-2-img.png';

const About = () => (
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
            Successful people maintain a positive focus in life no matter what
            is going on around them. They stay focused on their past successes
            rather than their past failures, and on the next action steps they
            need to take to get them closer to the fulfillment of their goals
            rather than all the other distractions that life presents to them.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
