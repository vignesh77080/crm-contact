import React from 'react';

import classes from './MessageCount.module.css';

let MessageCount = (props) => {
    return (
        <span className={classes.Count}>{props.count}</span>
    )
};

export default MessageCount;