import React from 'react';
import { connect } from 'react-redux';

import Backdrop from '../../components/Backdrop/Backdrop';
import Input from '../../components/Input/Input';
import classes from './Messaging.module.css';
import Message from '../../components/Message/Message';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { findLogged } from '../../components/viewContact/ultilities/ultilityFunctions';
import * as action from '../hoc/store/Action/action';

class Messaging extends React.Component{

    state = {
        inputElement : {
            elementType : "input",
            elementProps : {
                type : "text",
                autoComplete : "off",
                name : 'messageBox',
                placeholder : "Please enter the message here"
            },
            value : '' 
        },
        errorMsg : true
    }

    onHandleChange = (e) => {
        let newMessage = { ...this.state.inputElement }
        let target = e.target;
        newMessage.value = target.value;
        if(newMessage.value !== ""){
            this.setState({
                inputElement : newMessage,
                errorMsg : false
            })
        }else{
            newMessage.value = "";
            this.setState({
                inputElement : newMessage,
                errorMsg : true
            })
        }
    }

    onclickSendButton = () =>{
        
        let message = { ...this.state.inputElement};
        let contact = [...this.props.contactArr];
        if(message !== ""){
            let messageFrom = {
                id : Date.now(),
                From : findLogged(this.props.contactArr),
                To: this.props.toPerson.FullName,
                message :  message.value
            }
            contact.map((items)=>{
                if(items.FullName === messageFrom.From){
                    return items.messages.push(messageFrom)
                }
                if(items.FullName === messageFrom.To){
                    return items.messages.push(messageFrom)
                }
                return items
            })
            message.value = '';
            this.setState({
                inputElement : message,
                errorMsg : true
            })
            return this.props.onAddMsg(contact)

        }else{
            return false;
        }
    }

    render(){

        let message = null;
        if(this.props.openMsgModal){
            message = (
                <div>
                    <Backdrop clicked={this.props.onCloseMsg} show={this.props.openMsgModal} />
                    <div className={classes.messagingWrap}>
                        <div className={classes.message}>
                            <Message 
                                contactArr={this.props.contactArr}
                                toPerson={this.props.toPerson} /> 
                        </div>
                        <div className={classes.messageBox}>
                            <Input  
                                elementProps = {this.state.inputElement.elementProps}
                                changed = { (e) => this.onHandleChange(e) }
                                value = {this.state.inputElement.value} />
                            <FontAwesomeIcon 
                                onClick={() => this.onclickSendButton()}
                                className={["sendIcon", this.state.errorMsg ? classes.disabled : null].join(' ')} 
                                icon={faPaperPlane} />
                        </div>
                    </div>
                </div>
            )
        }
        
        return message
    }
}

let mapPropsToState = state =>{
    return{
        contactArr : state.contactArr,
        openMsgModal : state.openMsgModal,
        toPerson : state.toPerson
    }
}

let mapEventToDispatch = dispatch =>{
    return{
        onCloseMsg : () => (dispatch(action.onClickMessIcon())),
        onAddMsg : (contactArr) => (dispatch(action.onAddContactMsg(contactArr)))
    }
}

export default connect(mapPropsToState, mapEventToDispatch)(Messaging);