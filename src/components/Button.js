import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name, wide, color } = props;
  const width = wide ? '50%' : '25%';
  const btnStyle = {
    width,
    background: color,
  };
  return (
    <button type="submit" className="button" style={btnStyle}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

Button.propTypes = {
  wide: PropTypes.bool.isRequired,
};

Button.propTypes = {
  color: PropTypes.string,
};

Button.defaultProps = {
  color: '#f5913e',
};

export default Button;
