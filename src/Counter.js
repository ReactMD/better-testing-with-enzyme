import React from 'react';

class Counter extends React.Component {
  state = {
    value: 0
  };

  onIncrement = () => this.setState(({ value }) => ({ value: value + 1 }));

  onDecrement = () => this.setState(({ value }) => ({ value: value - 1 }));
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h3 className='value'>{this.state.value}</h3>
        <Button onClick={this.onIncrement}>Increment +</Button>
        <Button onClick={this.onDecrement}>Decrement -</Button>
      </div>
    );
  }
}

function Button({ onClick, children }) {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
}
export default Counter;
