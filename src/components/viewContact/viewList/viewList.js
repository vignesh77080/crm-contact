import React from 'react';

import classes from './viewList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { splitFunction } from '../ultilities/ultilityFunctions';


let viewList = (props) =>{

    let joinClasses = [props.msgIconDisabled === null ? classes.disabled : null, "MessageIcon" ]

    return (
        <li onClick={props.clicked}>
            {props.svg ? <div className={classes.svg}>
                <FontAwesomeIcon title={"Edit Contact"} onClick={props.clickedEdit} className={"editIcon"} icon={faEdit} />
                <FontAwesomeIcon title={"Message"} onClick={props.clickedMessage} className={joinClasses.join(' ')} icon={faEnvelope} />
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