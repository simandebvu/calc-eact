import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { answer } = props;
  return (
    <div className="calcResults">
      <h2>{answer}</h2>
    </div>
  );
}

Display.propTypes = {
  answer: PropTypes.string,
};

Display.defaultProps = {
  answer: '0',
};
export default Display;
