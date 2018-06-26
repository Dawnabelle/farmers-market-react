import React from 'react';
import PropTypes from 'prop-types';

function Day(props){
  return(
    <div>
      <h3>{props.weekday}</h3>
      <h5>{props.location} - Booth: {props.booth}</h5>
      <h5>{props.hours}</h5>
    </div>
  );
}

Day.propTypes = {
  weekday: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Day;
