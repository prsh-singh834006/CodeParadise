import React from 'react';
import Skill from '../../components/Skill';
import ReactJsLogo from '../../static/img/reactjs.png';
import Html5Logo from '../../static/img/html5.png';
import NestJsLogo from '../../static/img/nestjs.svg';
import TypeScriptLogo from '../../static/img/typescript.svg';
import GraphQlLogo from '../../static/img/graphql.png';
import FirebaseLogo from '../../static/img/firebase.png';
import NodeJSLogo from '../../static/img/nodejs.svg';
import SassLogo from '../../static/img/sass.svg';

const MySkills = () => (
  <div className="section-skills" id="section-myskills">
    <h2>Technologies i have worked with</h2>
    <div className="section">
      <div className="margin-bottom--lg container">
        <div className="columns is-vcentered is-variable is-4">
          <div className="column is-centered">
            <div className="image">
              <img className="text--center" src={ReactJsLogo} alt="reactjs" />
            </div>
            <h1>ReactJS</h1>
          </div>
          <div className="column">
            <div className="image">
              <img className="is-centered" src={NestJsLogo} alt="reactjs" />
            </div>
            <h1>NestJS</h1>
          </div>
          <div className="column">
            <div className="image">
              <img className="is-centered" src={TypeScriptLogo} alt="reactjs" />
            </div>
            <h1>Typescript</h1>
          </div>
          <div className="column">
            <div className="image">
              <img className="is-centered" src={Html5Logo} alt="reactjs" />
            </div>
            <h1>ReactJS</h1>
          </div>
        </div>
        <div className="columns is-vcentered">
          <div className="column is-centered">
            <div className="image">
              <img className="text--center" src={GraphQlLogo} alt="reactjs" />
            </div>
            <h1>GraphQL</h1>
          </div>
          <div className="column">
            <div className="image">
              <img className="is-centered" src={FirebaseLogo} alt="reactjs" />
            </div>
            <h1>Firebase</h1>
          </div>
          <div className="column">
            <div className="image">
              <img className="is-centered" src={ReactJsLogo} alt="reactjs" />
            </div>
            <h1>React native</h1>
          </div>
          <div className="column">
            <div className="image">
              <img className="is-centered" src={SassLogo} alt="reactjs" />
            </div>
            <h1>Sass</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MySkills;
