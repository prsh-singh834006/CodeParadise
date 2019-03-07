import React from 'react';
import Skill from '../../components/Skill';
import ReactJsLogo from '../../static/img/reactjs.png';
import Html5Logo from '../../static/img/html5.png';
import NestJsLogo from '../../static/img/nestjs.svg';
import TypeScriptLogo from '../../static/img/typescript.svg';
import GraphQlLogo from '../../static/img/graphql.png';
import MySqlLogo from '../../static/img/mysql.svg';
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
            <p>ReactJS is a javascript library</p>
          </div>
          <div className="column">
            <div className="image">
              <img className="is-centered" src={NestJsLogo} alt="reactjs" />
            </div>
            <h1>ReactJS</h1>
            <p>ReactJS is a javascript library</p>
          </div>
          <div className="column">
            <div className="image">
              <img className="is-centered" src={TypeScriptLogo} alt="reactjs" />
            </div>
            <h1>ReactJS</h1>
            <p>ReactJS is a javascript library</p>
          </div>
          <div className="column">
            <div className="image">
              <img className="is-centered" src={Html5Logo} alt="reactjs" />
            </div>
            <h1>ReactJS</h1>
            <p>ReactJS is a javascript library</p>
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
              <img className="is-centered" src={MySqlLogo} alt="reactjs" />
            </div>
            <h1>My SQL</h1>
          </div>
          <div className="column">
            <div className="image">
              <img className="is-centered" src={NodeJSLogo} alt="reactjs" />
            </div>
            <h1>Node JS</h1>
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
