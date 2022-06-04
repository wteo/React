import React from 'react';

import RemoveButton from './RemoveButton';

function Cart(props) {

    console.log(props.item);

    let sum = 0;

    for (let item of props.item) {
        sum = sum + item.price;
    }

    return (
        <React.Fragment>
            <h3>Your Cart</h3>
            {props.item.length === 0 && <p>Add Items here.</p>}
            <ul>
                {
                    props.item.map(item => {
                        return (
                            <React.Fragment>
                                <li key={item.id}>
                                    {item.title} - {item.price.toFixed(2)}
                                    <RemoveButton 
                                    id={item.id}
                                    onRemoveItem={props.onRemoveItem}
                                    />
                                </li>
                            </React.Fragment>
                        );
                    })
                }
            </ul>
            {props.item.length > 0 && <h3>Total: {sum.toFixed(2)}</h3>}
        </React.Fragment>
    );
}

export default Cart;