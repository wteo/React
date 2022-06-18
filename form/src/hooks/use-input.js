import { useReducer } from 'react';

const initialInputState = {
    value: '',
    isTouched: false
};
    

const inputStateReduce = (state, action) => {
    if (action.type === 'INPUT') {
        return { value: action.value, isTouched: state.isTouched };
    }
    if (action.type === 'BLUR') {
        return { isTouched: true };
    }
    if (action.type === 'RESET') {
        return initialInputState;
    }
    return initialInputState;
};

const useInput = (validateValue) => {
    
    const [inputState, dispatch] = useReducer(inputStateReduce, initialInputState);

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = event => {
        dispatch({ type: 'INPUT', value: event.target.value});
      };
    
    const inputBlurHandler = event => {
        dispatch({ type: 'BLUR', value: event.target.value});
      };
    
    const reset = () => {
        dispatch({ type: 'RESET', value: event.target.value});
    };

    return {
        value: inputState.value, 
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;