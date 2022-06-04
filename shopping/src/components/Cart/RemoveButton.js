import React from 'react';

function RemoveButton(props) {

    const removeItemHandler = (event) => {
        event.preventDefault();
        props.onRemoveItem(props.id)
    }
    
    return <button type="submit" onClick={removeItemHandler}>Remove</button>;
}

export default RemoveButton