import React from 'react';
import Skill from '../../components/Skill';

const MySkills = () => (
  <div className="section-4" id="section-myskills">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-xl-3">
          <div class="section-heading">
            <h2>
              My <strong>Skills</strong>
            </h2>
          </div>
        </div>
        <div className="col-lg-9 col-xl-9">
          <Skill heading="ReactJS" percent="85" />
          <Skill heading="HTML5" percent="99" />
          <Skill heading="Python" percent="60" />
          <Skill heading="MySQL" percent="70" />
        </div>
      </div>
    </div>
  </div>
);

export default MySkills;
