import React from 'react';
import Navigation from '../../components/Navigation';
import imgAvatar from '../../static/img/boy.svg';

const Home = () => (
  <div className="home-wrapper">
    <Navigation />
    <div className="home text--center">
      <div className="center">
        <img className="avatar" src={imgAvatar} alt="Buy" />
        <h1 className="text--large margin-top--lg">
          Hi, I’m Prashant. Nice to meet you.
        </h1>
        <p className="text--normal color-white margin-bottom--md text--center margin-top--md ">
          I design and code beautifully simple things, and I love what I do.
        </p>
        <a href="#section-about" className="home__btn btn btn-primary">
          More about me
        </a>
      </div>
    </div>
  </div>
);

export default Home;
