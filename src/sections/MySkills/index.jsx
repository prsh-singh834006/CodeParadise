import React from 'react';
import Skill from '../../components/Skill';
import ReactJsLogo from '../../static/img/reactjs.png';
import Html5Logo from '../../static/img/html5.png';
import NestJsLogo from '../../static/img/nestjs.svg';
import TypeScriptLogo from '../../static/img/typescript.svg';
import GraphQlLogo from '../../static/img/graphql.png';
import FirebaseLogo from '../../static/img/firebase.png';
import MultiDeviceImg from '../../static/img/multidevice.png';
import NodeJsLogo from '../../static/img/node.png';

const skills = [
  {
    title: 'ReactJS',
    logo: ReactJsLogo,
  },
  {
    title: 'NestJS',
    logo: NestJsLogo,
  },
  {
    title: 'Typescript',
    logo: TypeScriptLogo,
  },
  {
    title: 'HTML 5',
    logo: Html5Logo,
  },
  {
    title: 'Graphql',
    logo: GraphQlLogo,
  },
  {
    title: 'Firebase',
    logo: FirebaseLogo,
  },
  {
    title: 'React Native',
    logo: ReactJsLogo,
  },
];

const MySkills = () => (
  <div className="section-skills" id="section-myskills">
    <h2>Technologies i have worked with</h2>
    <div className="container">
      <p>
        Since beginning my journey as a freelance developer nearly 2 years ago,
        I've done remote work for agencies, consulted for startups, and
        collaborated with talented people to create digital products for both
        business and consumer use. I'm quietly confident, naturally curious, and
        perpetually working on improving my chops one design problem at a time.
      </p>
      <hr />
    </div>
    <div className="section">
      <div className="margin-bottom--lg container">
        <div className="columns is-vcentered is-multiline">
          <div className="column is-6">
            <div className="columns is-multiline">
              <div className="column is-12">
                <h1>Web Development</h1>
                <p>
                  Since beginning my journey as a freelance developer nearly 2
                  years ago, I've done remote work for agencies, consulted for
                  startups, and collaborated with talented people to create
                  digital products for both business and consumer use. I'm
                  quietly confident, naturally curious, and perpetually working
                  on improving my chops one design problem at a time.
                </p>
                <ul className="logos">
                  <li>
                    <img src={TypeScriptLogo} />
                  </li>
                  <li>
                    <img src={NodeJsLogo} />
                  </li>
                  <li>
                    <img src={FirebaseLogo} />
                  </li>
                </ul>
              </div>
              {/* {skills.map(item => (
                <Skill heading={item.title} logo={item.logo} />
              ))} */}
            </div>
          </div>
          <div className="column is-6">
            <img
              data-aos="fade-left"
              src={MultiDeviceImg}
              style={{ width: '100%' }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div className="section" />
  </div>
);

export default MySkills;
