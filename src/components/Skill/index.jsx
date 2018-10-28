import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ heading, percent }) => (
  <div className="skill">
    <h3>{heading}</h3>
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        style={{ width: `${percent}%` }}
        aria-valuenow={percent}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <span>{percent}%</span>
      </div>
    </div>
  </div>
);

Skill.propTypes = {
  /** @type {String} */
  heading: PropTypes.string,
  /** @type {String} */
  percent: PropTypes.string,
};

Skill.defaultProps = {
  heading: '',
  percent: '85',
};
export default Skill;
