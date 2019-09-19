import React from 'react';

// class Counter extends React.Component {
//   state = {
//     count: 0
//   };

//   addOne = () => this.setState(({ count }) => ({ count: count + 1 }));

//   subtractOne = () => this.setState(({ count }) => ({ count: count - 1 }));

//   render() {
//     return (
//       <div>
//         <h1>Counter</h1>
//         <h3>{this.state.count}</h3>
//         <Button onClick={this.addOne}>Add +</Button>
//         <Button onClick={this.subtractOne}>Subtract -</Button>
//       </div>
//     );
//   }
// }

function Button({ onClick, children }) {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);

  const addOne = () => setCount(count => count + 1);
  const subtractOne = () => setCount(count => count - 1);

  return (
    <div>
      <h1>Counter</h1>
      <h3>{count}</h3>
      <Button onClick={addOne}>Add +</Button>
      <Button onClick={subtractOne}>Subtract -</Button>
    </div>
  );
}

export default Counter;
