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
    <h2>
      Technologies i have{' '}
      <strong className="color-secondary">worked with</strong>
    </h2>
    <div className="section">
      <div className="margin-bottom--lg container">
        <div className="columns is-vcentered">
          <div className="column is-centered">
            <img className="text--center" src={ReactJsLogo} alt="reactjs" />
          </div>
          <div className="column">
            <img className="is-centered" src={NestJsLogo} alt="reactjs" />
          </div>
          <div className="column">
            <img className="is-centered" src={TypeScriptLogo} alt="reactjs" />
          </div>
          <div className="column">
            <img className="is-centered" src={Html5Logo} alt="reactjs" />
          </div>
        </div>
        <div className="columns is-vcentered">
          <div className="column is-centered">
            <img className="text--center" src={GraphQlLogo} alt="reactjs" />
          </div>
          <div className="column">
            <img className="is-centered" src={MySqlLogo} alt="reactjs" />
          </div>
          <div className="column">
            <img className="is-centered" src={NodeJSLogo} alt="reactjs" />
          </div>
          <div className="column">
            <img className="is-centered" src={SassLogo} alt="reactjs" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MySkills;
