import React from 'react';

import classes from './Message.module.css';

let Message = (props) =>{

    let findLogged = props.contactArr.filter(items =>(
        items.logged === true
    ));

    let messageArr = null;
    if(findLogged.length > 0){
        findLogged.map(items =>(
            messageArr = items.messages.filter(items => (
                (items.To === props.toPerson.FullName) 
                || (items.From === props.toPerson.FullName)
            ))
        ))
    }

    let styleUnlogged = {
        alignSelf : "flex-start",
        textAlign : "left"
    }

    return(
        <ul className={classes.messageChat}>
            {messageArr.length > 0 ? messageArr.map((items, index)=>{
                return <li 
                    style={items.From === props.toPerson.FullName ? styleUnlogged : null }
                    key={index}>{items.message}</li>
            }) : <li className={classes.nonLi}> No messages to display </li>}
        </ul>
    )
};

export default Message;