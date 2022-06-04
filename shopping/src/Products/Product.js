import React from 'react';

import styles from './Product.module.css';

function Product (props) {

    const item = {
        title           : props.title,
        description     : props.description,
        price           : props.price,
    };

    const addItemHandler = (event) => {
        event.preventDefault();
        props.onAddItem(item);
    }

    return (
        <div className={styles.item}>
            <div className={styles.outline}>
                <h3>{props.title}</h3>
                <h3>${props.price.toFixed(2)}</h3>
                <button 
                type="submit" 
                onClick={addItemHandler}
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