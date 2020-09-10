import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { answer } = props;
  return (
    <div className="calcResults display">
      <p className="answer">{answer}</p>
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
