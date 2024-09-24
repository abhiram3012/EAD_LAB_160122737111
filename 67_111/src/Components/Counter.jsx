import { useState } from 'react';

const Counter = () => {
  // Declare a state variable 'count' and a setter 'setCount'
  const [count, setCount] = useState(0);

  // Function to increment count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement count
  const decrement = () => {
    setCount(count - 1);
  };

  // Function to reset count to 0
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Counter: {count}</h1>
      <div style={{ marginTop: '20px' }}>
        <button onClick={increment} style={buttonStyle}>
          Increment
        </button>
        <button onClick={decrement} style={buttonStyle}>
          Decrement
        </button>
        <button onClick={reset} style={buttonStyle}>
          Reset
        </button>
      </div>
    </div>
  );
};

// Inline button style
const buttonStyle = {
  margin: '0 10px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
};

export default Counter;
