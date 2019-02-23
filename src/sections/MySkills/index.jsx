import React from 'react';
import Slider from 'nuka-carousel';
import Skill from '../../components/Skill';
import ReactJsLogo from '../../static/img/reactjs.png';
import Html5Logo from '../../static/img/html5.png';
import NestJsLogo from '../../static/img/nestjs.svg';
import TypeScriptLogo from '../../static/img/typescript.svg';

const settings = {
  speed: 500,
  slidesToShow: 6,
};

const MySkills = () => (
  <div className="section-skills" id="section-myskills">
    <h2>
      Technologies i have{' '}
      <strong className="color-secondary">worked with</strong>
    </h2>
    <div>
      <div className="margin-bottom--lg">
        <Slider {...settings} renderBottomCenterControls={null}>
          <Skill imgSrc={ReactJsLogo} heading="ReactJS" />
          <Skill imgSrc={Html5Logo} heading="HTML 5" />
          <Skill imgSrc={NestJsLogo} heading="Nest JS" />
          <Skill imgSrc={TypeScriptLogo} heading="TypeScript" />
          <Skill imgSrc={ReactJsLogo} heading="ReactJS" />
          <Skill imgSrc={Html5Logo} heading="HTML 5" />
          <Skill imgSrc={NestJsLogo} heading="Nest JS" />
          <Skill imgSrc={TypeScriptLogo} heading="TypeScript" />
          <Skill imgSrc={ReactJsLogo} heading="ReactJS" />
          <Skill imgSrc={Html5Logo} heading="HTML 5" />
          <Skill imgSrc={NestJsLogo} heading="Nest JS" />
          <Skill imgSrc={TypeScriptLogo} heading="TypeScript" />
        </Slider>
      </div>
    </div>
  </div>
);

export default MySkills;
