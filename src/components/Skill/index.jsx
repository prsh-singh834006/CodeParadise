import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ heading, logo }) => (
  <div className="column is-centered is-6" data-aos="zoom-in-down">
    <div className="image">
      <img className="text--center" src={logo} alt="reactjs" />
    </div>
    <h1>{heading}</h1>
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
  logo: '',
};

export default Skill;
