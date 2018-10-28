import React from 'react';

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

export default Card;
