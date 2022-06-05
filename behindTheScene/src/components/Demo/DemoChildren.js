import React from 'react';

function DemoChild(props) {
    console.log('DemoChild running');
    return <p>{props.Children}</p>;
}

export default DemoChild;