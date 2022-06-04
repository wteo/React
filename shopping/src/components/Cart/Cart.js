import React from 'react';

import RemoveButton from './RemoveButton';
import styles from './Cart.module.css';

function Cart(props) {
    
    let sum = 0;

    for (let item of props.item) {
        sum = sum + item.price;
    }

    return (
        <React.Fragment>
            <h1>Your Cart</h1>
            {props.item.length === 0 && <p>Add Items here.</p>}
            <ul className={styles.list}>
                {props.item.map(item => {
                    return (
                        <li key={item.id}>
                            {item.title} - ${item.price.toFixed(2)}
                            <RemoveButton id={item.id} onRemoveItem={props.onRemoveItem} />
                        </li>
                    );
                })}
            </ul>
            {props.item.length > 0 && <h3>Total: ${sum.toFixed(2)}</h3>}
        </React.Fragment>
    );
}

export default Cart;