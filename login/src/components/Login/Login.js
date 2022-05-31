import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

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

  const { isValid: emailIsValid } = emailState;
  const { isValid : passwordIsValid } = passwordState;
  // use object destructuring to ensure validity of email and password only run once in useEffect()
  // This is to ensure that we only pass specific properties instead of the entire object as an dependency

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking for validity");
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    }; 
  }, [emailIsValid, passwordIsValid]
  );


  const emailChangeHandler = (event) => {
    dispatchEmail({type: "USER_INPUT", val: event.target.value}); 

    // setFormIsValid(
    //   event.target.value.includes("@") && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchpassword({ type : "PASSWORD_INPUT", val: event.target.value });
  
    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
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
