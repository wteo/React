import { useSelector, useDispatch, connect } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {

  // Suscription
  const counter = useSelector(state => state.counter);

  // Dispatch
  const dispatch = useDispatch();

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
