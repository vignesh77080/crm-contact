import React from 'react';

import classes from './viewContact.module.css';
import { splitFunction } from '../ultilities/ultilityFunctions';

let viewContact = (props) =>{

 const { FullName, Email, CompanyName, PhoneNumber, Address } = props.items

    return (
        <div className={classes.viewContactitems}>
            <div className={classes.basicInfo}>
                <span 
                    style={{
                        background : `#${props.bgColorIndex}`
                    }}
                    className={classes.twoLetters}>{splitFunction(FullName)}</span>
                <p className={classes.name}> 
                    {FullName} 
                </p>
            </div>
            <div className={classes.personInfo}>
                <div>
                    <span>FullName:</span> <span>{FullName}</span>
                </div>
                <div>
                    <span>Email:</span> <span>{Email}</span>
                </div>
                <div>
                    <span>Phone:</span> <span>{PhoneNumber}</span>
                </div>
                <div>
                    <span>Company:</span> <span>{CompanyName ? CompanyName : "No information provided"}</span>
                </div>
                <div>
                    <span>Address</span> <span>{Address ? Address : "No information provided"}</span>
                </div>
            </div>
        </div>
    )

};

export default viewContact;