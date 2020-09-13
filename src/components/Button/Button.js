import React from 'react';
import classes from './Button.module.css'

let Button = (props) =>{
    return (
        <button 
            onClick={props.clicked}
            disabled ={props.disabled}
            className={classes.button}> {props.children} </button>
    )
};

export default Button;