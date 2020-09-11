import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      // eslint-disable-next-line react/no-unused-state
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const dataObj = this.state;
    this.setState(calculate(dataObj, buttonName));
  }

  render() {
    const data = this.state;
    return (
      <div id="calcDisplay">
        <Display answer={data.next || data.total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
