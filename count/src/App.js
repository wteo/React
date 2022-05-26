import React, { useReducer } from 'react';

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement"
};

function reducer(state, action) {
  if (action.type === ACTIONS.INCREMENT) return { count: state.count + 1 };
  if (action.type === ACTIONS.DECREMENT) return { count: state.count - 1 };
  return state;
}

function App () {

  const [state, dispatch] = useReducer(reducer, { count: 0 }) // key-pair count: 0 is the same as passing a value in the useState() parameter

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  return (
  <React.Fragment>
    <button onClick={decrement}>-</button>
    <span>{state.count}</span>
    <button onClick={increment}>+</button>
  </React.Fragment>);
}

export default App;