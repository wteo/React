import React from 'react';

import Product from './Product';

function Products (props) {

    return (
        <React.Fragment>
            <Product
                onAddItem={props.onAddItem}
                title={props.data[0].title}
                description={props.data[0].description}
                price={props.data[0].price}
            />
            <Product 
                onAddItem={props.onAddItem}
                title={props.data[1].title}
                description={props.data[1].description}
                price={props.data[1].price}
            />
            <Product 
                onAddItem={props.onAddItem}
                title={props.data[2].title}
                description={props.data[2].description}
                price={props.data[2].price}
            />
        </React.Fragment>
    );
};

export default Products;