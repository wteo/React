import React from 'react';
import './Card.css';

function Card(props) {
    const classes = `card ${props.className}`; 
    // "props.className" allows to add-on any class value found within the children element that are wrapped within the card element
    return <div className={classes}>{props.children}</div>; 
    // "props.children" allows you to wrap this element around others, acting as a shell
}

export default Card;

// Why do we do this?
// To reduce duplications and keep the codes clean