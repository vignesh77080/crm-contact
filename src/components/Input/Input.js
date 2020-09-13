import React from 'react';

import classes from './Input.module.css';

let Input = (props) => {

    let inputClasses =[props.styleClass ? classes.styleClass : null]
    if(props.invalid && props.styleClass){
        inputClasses.push(classes.hasError)
    }
    
    return (
        <div className={classes.inputWrap}>
            <input 
                className={inputClasses.join(' ')}
                {...props.elementProps}
                value={props.value}
                onChange={props.changed} />
            <label> {props.label} </label>
        </div>
    )
};

export default Input;