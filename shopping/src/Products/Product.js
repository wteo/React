import React from 'react';

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
        <React.Fragment>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.price.toFixed(2)}</p>
            <button 
                type="submit" 
                onClick={addItemHandler}
            >Add to Cart
            </button>
        </React.Fragment>
    );
}

export default Product;