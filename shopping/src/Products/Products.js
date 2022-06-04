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
                imageLink={props.data[0].imageLink}
            />
            <Product 
                onAddItem={props.onAddItem}
                title={props.data[1].title}
                description={props.data[1].description}
                price={props.data[1].price}
                imageLink={props.data[1].imageLink}
            />
            <Product 
                onAddItem={props.onAddItem}
                title={props.data[2].title}
                description={props.data[2].description}
                price={props.data[2].price}
                imageLink={props.data[2].imageLink}
            />
        </React.Fragment>
    );
};

export default Products;