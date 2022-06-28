import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import classes from './Auth.module.css';
import { authActions } from '../store/auth';

const Auth = () => {

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const emailIsValid = enteredEmail.includes('@');
  const passWordIsValid = enteredPassword.length > 5 && enteredPassword.length < 13;
  const [formIsValid, setFormIsValid] = useState(null);

  useEffect(() => {
    if (emailIsValid && passWordIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [emailIsValid, passWordIsValid]);

  const [emailIsTouched, setEmailIsTouched] = useState(null);
  const [passwordIsTouched, setPasswordIsTouched] = useState(null);

  const emailHasError = emailIsTouched && !emailIsValid;
  const passwordHasError = passwordIsTouched && !passWordIsValid;

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      dispatch(authActions.login());
    }
    setEmailIsTouched(true);
    setPasswordIsTouched(true);
    setEnteredEmail('');
    setEnteredPassword('');
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input 
              type='email' 
              id='email' 
              onChange={emailHandler}
              value={enteredEmail}
            />
            { emailHasError && <p>Please enter a valid email.</p> }
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input 
              type='password' 
              id='password' 
              onChange={passwordHandler} 
              value={enteredPassword}
            />
            { passwordHasError && <p>Password must be between 6 to 12 characters length.</p>}
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
