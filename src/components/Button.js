import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    name, wide, color, clickHandler,
  } = props;
  const width = wide ? '50%' : '25%';
  const btnStyle = {
    width,
    background: color,
  };
  const handleClick = () => { clickHandler(name); };
  return (
    <button type="submit" className="button" style={btnStyle} onClick={handleClick}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: '#f5913e',
};

export default Button;
