import React from 'react';
import Card from '../../components/Card';

const Resume = () => (
  <section class="site-section bg-light section-resume" id="section-resume">
    <div class="container">
      <div class="row">
        <div class="col-md-12 mb-5">
          <div class="section-heading text-center">
            <h2>
              My <strong>Resume</strong>
            </h2>
          </div>
        </div>
        <div class="col-md-6">
          <h2 class="mb-5">Education</h2>
          <Card
            date="March 2013 - May 2017"
            heading="GIET Institute of engineering and technology"
            content="Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic."
            place="GIET Gunupur"
          />
        </div>
        <div class="col-md-6">
          <h2 class="mb-5">Experience</h2>
          <div class="resume-item mb-4">
            <span class="date">
              <span class="icon-calendar" /> May 2017 - Present
            </span>
            <h3>Full Stack Developer</h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <span class="school">Tata Consultancy Servics</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
