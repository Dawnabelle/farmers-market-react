import React from 'react';
import PropTypes from 'prop-types';

function Day(props){
  var dayStyles = {
    backgroundColor: '#f88379',
    width: '500px',
    padding: '20px 20px 20px 20px',
    margin: 'auto',
    marginTop: '20px'
  }

  return(
    <div style={dayStyles}>
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
