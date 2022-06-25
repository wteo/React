import { useSelector, useDispatch, connect } from 'react-redux';
// useSelector - allows you to select a specific data in the store
// connect - used for class-based components
// useDispatch - dispatches an action

import classes from './Counter.module.css';

const Counter = () => {

  // Dispatch
  const dispatch = useDispatch();

  // Suscription
  const counter = useSelector(state => state.counter);
  // need to pass a function within the paramenter of useSelector
  // with useSelector(), React-Redux automatically sets up a suscription to the store for this component

  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
