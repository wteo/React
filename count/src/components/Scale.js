import React from "react";

function Scale(props) {

    return (
        <React.Fragment>
            <label>{props.data}</label>
            <button onClick={props.onIncrement}>+</button>
            <span>{props.num}</span>
            <button onClick={props.onDecrement}>-</button>
            <br/>
        </React.Fragment>
    );
}

export default Scale;