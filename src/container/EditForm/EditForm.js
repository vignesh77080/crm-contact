import React from 'react';
import {connect} from 'react-redux';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Backdrop from '../../components/Backdrop/Backdrop';
import classes from './EditForm.module.css';
import * as actionTypes from '../hoc/store/Action/action';

class EditContact extends React.Component {

    state = {
        contactForm : {
            FullName : {
                elementType : "input",
                elementProps : {
                    type : "text",
                    autoComplete : "off",
                    name : 'FullName'
                },
                label : "Full Name",
                styleClass : false,
                value : this.props.item["FullName"] ,
                validation : {
                    minLenght : 5,
                    isRequired : true,
                },
                touched : true,
                IsValid : true
            },
            Email : {
                elementType : "input",
                elementProps : {
                    type : "text",
                    name : "Email",
                    autoComplete : "off",
                },
                label : "Email ID",
                styleClass : true,
                value : this.props.item["Email"],
                validation : {
                    isRequired : true,
                    regexExp : /^([\w\-.]+)@((([\w-]+\.)+)([a-zA-Z]{2,4}))$/
                },
                touched : true,
                IsValid : true
            },
            PhoneNumber : {
                elementType : "input",
                elementProps : {
                    type : "text",
                    name : "PhoneNumber",
                    autoComplete : "off"
                },
                value : this.props.item["PhoneNumber"],
                label : "Phone Number",
                styleClass : true,
                validation : {
                    isRequired : true,
                    regexExp : /^\d{10}$/
                },
                touched : true,
                IsValid : true
            },
            CompanyName : {
                elementType : "input",
                elementProps : {
                    type : "text",
                    name : "CompanyName",
                    autoComplete : "off",
                },
                label : "Company Name",
                styleClass : true,
                value : this.props.item["CompanyName"] ,
                validation : {
                    isRequired : false,
                },
                touched : true,
                IsValid : true
            },
            Address : {
                elementType : "input",
                elementProps : {
                    type : "text",
                    name: "Address",
                    autoComplete : "off",
                },
                validation : {
                    isRequired : false,
                },
                value : this.props.item["Address"],
                label : "Address",
                styleClass : true,
                touched : true,
                IsValid : true
            }
        },
        formValid : true,
        errMsg : false
    }

    checkValidity(value, validation){
        let retBool = true;

        if(validation.isRequired){
            retBool =  value.trim() !== "" && retBool
        }

        if(validation.minLenght){
            retBool = value.length >= validation.minLenght && retBool
        }

        if(validation.regexExp){
            retBool = validation.regexExp.test(value) && retBool;
        }

        return retBool;

    }

    onHandleChangeEdit = (event, items) =>{
        let newContact = { ...this.state.contactForm };
        let updatingContact = { ...newContact[items] };
        updatingContact.value = event.target.value;
        updatingContact.touched = false
        if(updatingContact.value.length > 0){
            updatingContact.touched = true
        }
        updatingContact.IsValid = this.checkValidity(updatingContact.value, updatingContact.validation);
        newContact[items] = updatingContact;
        let formValid = true;
        for(let i in newContact){
            formValid = newContact[i].IsValid && formValid
        }
        this.setState({
            contactForm : newContact,
            formValid : !formValid,
            errMsg : false
        })
    }

    onclearValues = () => {
        this.props.close();
        let newform = { ...this.state.contactForm }
        for(let i in newform){
            newform[i].value = ''
        }
        this.setState({
            contactForm : newform
        })
    }

    onSubmitEditForm = (e, items, id) =>{
        e.preventDefault();
        let repeated = this.props.contactArr.filter(item=>item.FullName === items.FullName.value);
        if(repeated.length > 0){
            this.setState({
                formValid : !this.state.formValid,
                errMsg : true
            })
        }else{
            let data = {
                items,
                id
            }
            this.props.onSubmitEditContact(data);
            this.props.close();
        }
    }

    render(){
        
        let form = (
                <div className={classes.addForm}>
                    <form onSubmit={(e) =>this.onSubmitEditForm(e, this.state.contactForm, this.props.item.id)}>
                        {Object.keys(this.state.contactForm).map((items)=>(
                            <Input 
                                key = { items }
                                styleClass = { this.state.contactForm[items].touched}
                                label = {this.state.contactForm[items].label}
                                invalid = { !this.state.contactForm[items].IsValid }
                                elementProps = {this.state.contactForm[items].elementProps}
                                changed = { (e) => this.onHandleChangeEdit(e, items) }
                                value = {this.state.contactForm[items].value} />
                        ))}
                        <Button disabled={this.state.formValid}> Edit Contact </Button>
                        {this.state.errMsg ? <span className={classes.errmsg}>This FullName already exits</span> : null}
                    </form>
                    <Button clicked={this.onclearValues} disabled={false}> Close </Button>
                </div>
            )

        return (
            <div className={classes.addFormWrap}>
                <Backdrop clicked={this.props.close} show={this.props.show}/>
                {form}
            </div>
        )
    }

};

let mapPropsToState = state => {
    return{
        contactArr : state.contactArr,
    }
}

let mapDispatchToProps = dispatch => {
    return{
        onSubmitEditContact : (data) => (dispatch(actionTypes.onSubmitEditForm(data)))
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(EditContact);
