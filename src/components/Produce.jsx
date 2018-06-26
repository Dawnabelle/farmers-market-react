import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  return (
    <div>
      <li>{props.produce}</li>
    </div>
  );
}

Produce.propTypes = {
  produce: PropTypes.string.isRequired
};


export default Produce;
