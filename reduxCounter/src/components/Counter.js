import { useSelector, connect } from 'react-redux';
// useSelector - allows you to select a specific data in the store
// connect - used for class-based components

import classes from './Counter.module.css';

const Counter = () => {

  // Suscription
  const counter = useSelector(state => state.counter);
  // need to pass a function within the paramenter of useSelector
  // with useSelector(), React-Redux automatically sets up a suscription to the store for this component

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
