import React, { useState, useReducer } from "react";

import Scale from "./components/Scale";

function App2() {

    const profile = {
        name    : "Name",
        height  : "Height",
        weight  : "Weight"
    }

    const defaultData = {
        height  : 150,
        weight  : 50
    }

    const scaleReducer = (state, action) => {
        if (action.type === "INCREMENT_HEIGHT") {
            return {
                height: state.height + 1,
                weight: state.weight
            }
        }
        if (action.type === "DECREMENT_HEIGHT") {
            return {
                height: state.height - 1,
                weight: state.weight
            }
        }
        if (action.type === "INCREMENT_WEIGHT") {
            return {
                height: state.height,
                weight: state.weight + 1
            }
        }
        if (action.type === "DECREMENT_WEIGHT") {
            return {
                height: state.height,
                weight: state.weight - 1
            }
        }
        if (action.type === "RESET") {
            return {
                height: defaultData.height,
                weight: defaultData.weight
            }
        }
        return {
            height: defaultData.height,
            weight: defaultData.weight
        }
    };

    const [scaleState, dispatchScale] = useReducer(scaleReducer, { 
        height: defaultData.height,
        weight: defaultData.weight
    })

    const [enteredName, setEnteredName] = useState("");

    const nameHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const incrementHeight = (event) => {
        event.preventDefault();
        dispatchScale({type: "INCREMENT_HEIGHT"});
    };

    const decrementHeight = (event) => {
        event.preventDefault();
        dispatchScale({type: "DECREMENT_HEIGHT"});
        
    };

    const incrementWeight = (event) => {
        event.preventDefault();
        dispatchScale({type: "INCREMENT_WEIGHT"});
    };

    const decrementWeight = (event) => {
        event.preventDefault();
        dispatchScale({type: "DECREMENT_WEIGHT"});
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const data = {
            name: enteredName,
            height: scaleState.height,
            weight: scaleState.weight
        }
        console.log(data)
        setEnteredName("");
        dispatchScale({type: "RESET"});
    }

    return (
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <label>{profile.name}</label>
                <input 
                    type="text"
                    onChange={nameHandler}
                    value={enteredName}
                />
                <br/>
                <Scale 
                    data={profile.height} 
                    onIncrement={incrementHeight}
                    onDecrement={decrementHeight}
                    num={scaleState.height}
                />
                <Scale 
                    data={profile.weight} 
                    onIncrement={incrementWeight}
                    onDecrement={decrementWeight}
                    num={scaleState.weight}
                />
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    );
}

export default App2;