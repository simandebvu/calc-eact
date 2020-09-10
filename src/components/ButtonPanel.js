import React from 'react';
import Button from './Button';

const renderButton = (i, w, c) => <Button name={i} wide={w} color={c} />;

function ButtonPanel() {
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

export default ButtonPanel;
