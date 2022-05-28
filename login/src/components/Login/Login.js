import React, { useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// won't need any data that's generated inside of the component function. 
// Hence, this reducer function can be created outside of this component function.
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value   : action.val,
      isValid : action.val.includes("@")    
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value   : state.value,
      isValid : state.value.includes("@")
    };
  }
  return {
    value   : "",
    isValid : false
  };
};

const passwordReducer = (state, action) => {
  if (action.type === "PASSWORD_INPUT") {
    return {
      value   : action.val,
      isValid : action.val.trim().length > 6
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value   : state.value,
      isValid : state.value.trim().length > 6
    };
  }
  return {
    value   : "",
    isValid : false 
  };
};
// This reducer function accepts two parameters.
// The first showing the last state snapshot.
// The second, the action that was dispatched.
// returns a new state which can be an object.

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value   : "",
    isValid : null
  });

  const [passwordState, dispatchpassword] = useReducer(passwordReducer, {
    value   : "",
    isValid : null
  });

  /*

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking for validity");
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    }; 
  }, [enteredEmail, enteredPassword]);

  */

  const emailChangeHandler = (event) => {
    dispatchEmail({type: "USER_INPUT", val: event.target.value}); // the key "type" is an identifier and "val" is a payload, which stores user's input data

    setFormIsValid(
      event.target.value.includes("@") && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchpassword({ type : "PASSWORD_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: "INPUT_BLUR"});
  };

  const validatePasswordHandler = () => {
    dispatchEmail({ type : "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
