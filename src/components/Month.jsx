import React from 'react';
import Produce from './produce';
import PropTypes from 'prop-types';

function Month(props){
  return (
    <div>
      <h3>{props.month}</h3>
      <ul>
        {props.selection.map((produce, index) =>
          <Produce produce = {produce}
            key={index}/>
        )}
      </ul>
    </div>
  );
}

Month.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.arrayOf(PropTypes.string)
}

export default Month;
