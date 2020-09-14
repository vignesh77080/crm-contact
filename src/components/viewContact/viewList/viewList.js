import React, { useState } from 'react';

import classes from './viewList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { splitFunction } from '../ultilities/ultilityFunctions';
import MessageCount from '../../Message/MessageCount/MessageCount';

let viewList = (props) =>{

    let joinClasses = [props.msgIconDisabled === null ? classes.disabled : null, "MessageIcon" ];
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setstate] = useState({
        msgClicked : true
    });

    let clickedMessage = ()=>{
        setstate({
            msgClicked : false
        })
        props.clickedMessage();
    }
    return (
        <li onClick={props.clicked}>
            {props.svg ? <div className={classes.svg}>
                <FontAwesomeIcon title={"Edit Contact"} onClick={props.clickedEdit} className={"editIcon"} icon={faEdit} />
                <FontAwesomeIcon title={"Message"} onClick={clickedMessage} className={joinClasses.join(' ')} icon={faEnvelope} />
                {props.count > 0 && state.msgClicked ? <MessageCount count={props.count}/> : null}
            </div> : null}
            <div className={classes.basicInfo}>
                <span 
                    style={{
                        background : `#${props.bgColor}`
                    }}
                    className={classes.twoLetters}>{splitFunction(props.fullname)}</span>
                <p className={classes.name}> 
                    {props.fullname} 
                    <span> {props.email} </span>
                </p>
            </div>
            <div className={classes.company}>
                {props.company}
            </div>
        </li>
    ) ;
};

export default viewList;