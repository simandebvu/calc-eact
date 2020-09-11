import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel(props) {
  const { clickHandler } = props;
  const handleClick = buttonName => clickHandler(buttonName);
  // eslint-disable-next-line max-len
  const renderButton = (i, w, c) => <Button name={i} wide={w} color={c} clickHandler={handleClick} />;
  return (
    <div>
      <div className="calcRow">
        {renderButton('AC', false, '#e0e0e0')}
        {renderButton('+/-', false, '#e0e0e0')}
        {renderButton('%', false, '#e0e0e0')}
        {renderButton('/', false)}
      </div>
      <div className="calcRow">
        {renderButton('7', false, '#e0e0e0')}
        {renderButton('8', false, '#e0e0e0')}
        {renderButton('9', false, '#e0e0e0')}
        {renderButton('X', false)}
      </div>
      <div className="calcRow">
        {renderButton('4', false, '#e0e0e0')}
        {renderButton('5', false, '#e0e0e0')}
        {renderButton('6', false, '#e0e0e0')}
        {renderButton('-', false)}
      </div>
      <div className="calcRow">
        {renderButton('1', false, '#e0e0e0')}
        {renderButton('2', false, '#e0e0e0')}
        {renderButton('3', false, '#e0e0e0')}
        {renderButton('+', false)}
      </div>
      <div className="calcRow">
        {renderButton('0', true, '#e0e0e0')}
        {renderButton('.', false, '#e0e0e0')}
        {renderButton('=', false)}
      </div>

    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
