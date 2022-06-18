import { useEffect, useState } from 'react';

import useInput from '../hooks/use-input';

const BasicForm = (props) => {

  const [formIsValid, setFormIsValid] = useState(false);

  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset
  } = useInput(value => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset
  } = useInput(value => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInput(value => value.includes('@'));

  useEffect(() => {
    if (firstNameIsValid && lastNameIsValid && emailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [firstNameIsValid, lastNameIsValid, emailIsValid]);

  const submitFormHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log({
      name: `${enteredFirstName} ${enteredLastName}`,
      email: enteredEmail
    });
    
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const valid = 'form-control';
  const invalid = 'form-control invalid';

  const firstNameInputClasses = firstNameInputHasError ? invalid : valid;
  const lastNameInputClasses = lastNameInputHasError ? invalid : valid;
  const emailInputClasses = emailInputHasError ? invalid : valid;



  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='firstName'>First Name</label>
          <input 
            type='text' 
            id='firstName'
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName} 
          />
          {firstNameInputHasError && <p className="error-text">Must enter first name</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='lastName'>Last Name</label>
          <input 
            type='text' 
            id='lastName' 
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName} 
          />
          {lastNameInputHasError && <p className="error-text">Must enter last name</p>}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor='email'>E-Mail Address</label>
          <input 
            type='email' 
            id='email'
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail} 
          />
          {emailInputHasError && <p className="error-text">Please enter a valid email.</p>}
        </div>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
