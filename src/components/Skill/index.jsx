import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ imgSrc, heading }) => (
  <div className="slider-item">
    <img src={imgSrc} className="grow" alt="Skills" />
    <div className="heading">
      <p>{heading}</p>
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
