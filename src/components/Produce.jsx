import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  var produceStyles = {
    padding: '10px',

  }
  return (
    <div style={produceStyles}>
      <li>{props.produce}</li>
    </div>
  );
}

Produce.propTypes = {
  produce: PropTypes.string.isRequired
};


export default Produce;
