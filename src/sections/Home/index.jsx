import React from 'react';
import Navigation from '../../components/Navigation';

const Home = () => (
  <div className="home-wrapper">
    <Navigation />
    <div className="home text--center">
      <div className="center">
        <h1 className="text--large">
          Howdy, I am <strong>Prashant</strong>
        </h1>
        <p className="text--normal color-white margin-bottom--md text--center margin-top--md ">
          I design and code beautifully simple things, and I love what I do.
        </p>
        <a href="#section-about" className="btn btn-primary">
          More about me
        </a>
      </div>
    </div>
  </div>
);

export default Home;
