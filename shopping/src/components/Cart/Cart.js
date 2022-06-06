import React, { useContext } from 'react';

import RemoveButton from './RemoveButton';
import AuthContext from '../../store/auth-context';
import styles from './Cart.module.css';

function Cart() {

    const context = useContext(AuthContext);

    let sum = 0;

    for (let item of context.list) {
        sum = sum + item.price;
    }

    return (
        <React.Fragment>
            <h1>Your Cart</h1>
            {context.list.length === 0 && <p>Add Items here.</p>}
            <ul className={styles.list}>
                {context.list.map(item => {
                    return (
                        <li key={item.id}>
                            {item.title} - ${item.price.toFixed(2)}
                            <RemoveButton id={item.id}/>
                        </li>
                    );
                })}
            </ul>
            {context.list.length > 0 && <h3>Total: ${sum.toFixed(2)}</h3>}
        </React.Fragment>
    );
}

export default Cart;