import React from 'react';
import Button from './Button';

const renderButton = i => <Button name={i} />;

function ButtonPanel() {
  return (
    <div>
      <div className="calcRow">
        {renderButton('AC')}
        {renderButton('+/-')}
        {renderButton('%')}
        {renderButton('/')}
      </div>
      <div className="calcRow">
        {renderButton('7')}
        {renderButton('8')}
        {renderButton('9')}
        {renderButton('X')}
      </div>
      <div className="calcRow">
        {renderButton('4')}
        {renderButton('5')}
        {renderButton('6')}
        {renderButton('-')}
      </div>
      <div className="calcRow">
        {renderButton('1')}
        {renderButton('2')}
        {renderButton('3')}
        {renderButton('+')}
      </div>
      <div className="calcRow">
        {renderButton('0')}
        {renderButton('.')}
        {renderButton('=')}
      </div>

    </div>
  );
}

export default ButtonPanel;
