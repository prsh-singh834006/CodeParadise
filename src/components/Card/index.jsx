import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ date, heading, content, place }) => (
  <div class="resume-item mb-4">
    <span class="date">
      <span class="icon-calendar" /> {date}
    </span>
    <h3>{heading}</h3>
    <p>{content}</p>
    <span class="school">{place}</span>
  </div>
);

Card.propTypes = {
  /** @type {String} Describes the date */
  date: PropTypes.string,
  /** @type {String} Heading for the card */
  heading: PropTypes.string,
  /** @type {String} Content */
  content: PropTypes.string,
  /** @type {String} Place */
  place: PropTypes.string,
};

Card.defaultProps = {
  date: '',
  heading: '',
  content: '',
  place: '',
};

export default Card;
