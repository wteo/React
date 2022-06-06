import React, { useContext } from 'react';

import AuthContext from '../../store/auth-context';

function RemoveButton(props) {

    const context = useContext(AuthContext);

    const removeItemHandler = () => {
        context.onRemoveItem(props.id);
    }

    return <button type="submit" onClick={removeItemHandler}>Remove</button>;
}

export default RemoveButton