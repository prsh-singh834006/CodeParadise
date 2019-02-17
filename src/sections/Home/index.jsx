import React from 'react';
import Navigation from '../../components/Navigation';

const Home = () => (
  <div className="home text-center">
    <Navigation />
    <div className="center">
      <h1 className="text--large">
        Howdy, I am <strong>Prashant</strong>
      </h1>
      <p className="text--normal color-white">
        Work hard for what you want because it won't come to you without a
        fight. You have to be strong and courageous and know that you can do
        anything you put your mind to. If somebody puts you down or criticizes
        you, just keep on believing in yourself and turn it into something
        positive.
      </p>
      <a href="#section-about" className="btn btn-primary px-4 py-3">
        More about me
      </a>
    </div>
  </div>
);

export default Home;
