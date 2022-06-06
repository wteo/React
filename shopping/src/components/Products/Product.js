import React, { useContext } from 'react';

import styles from './Product.module.css';
import AuthContext from '../../store/auth-context';

function Product (props) {

    const context = useContext(AuthContext);

    const onAddItemHandler = () => {
        context.onAddItem(props);
    }

    return (
        <div className={styles.item}>
            <div className={styles.outline}>
                <h3>{props.title}</h3>
                <h3>${props.price.toFixed(2)}</h3>
                <button 
                type="submit" 
                onClick={onAddItemHandler}
                >Add to Cart
                </button>
            </div>
            <br/>
            <div className={styles.description}>
                <img src={props.imageLink} alt="dress" />
                <p>{props.description}</p>
            </div>
            <br/>
        </div>
    );
}

export default Product;