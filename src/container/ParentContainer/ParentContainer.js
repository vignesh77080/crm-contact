import React from 'react';

import classes from './ParentContainer.module.css';
import Button from '../../components/Button/Button';
import AddContact from '../AddContact/AddContact';
import EditContact from '../EditForm/EditForm';
import ViewList from '../../components/viewContact/viewList/viewList';
import ViewContact from '../../components/viewContact/viewcontact/viewContact';
import * as actionTypes from '../hoc/store/Action/action';
import { findLogged } from '../../components/viewContact/ultilities/ultilityFunctions';
import { connect } from 'react-redux';
import { randomColor } from '../../components/viewContact/ultilities/ultilityFunctions';

class ParentContainer extends React.Component{

    state = {
        addForm : false,
        editForm : false,
        editItem : null,
        bgColorIndex : null
    }

    componentDidMount(){
        this.props.contactArr.map(items =>(
            this.props.onRandomColors(randomColor())
        ))
    }

    onShowAddform = ()=>{
        this.setState({
            addForm : !this.state.addForm
        })
    }

    onSubmitAddForm = (e, items) => {
        e.preventDefault();
        this.props.onSubmitAddContact(items);
        this.props.onRandomColors(randomColor())
        this.setState({
            addForm : !this.state.addForm
        })
    }

    onviewContact = (e, index) =>{
        let target = e.target;
        document.querySelectorAll("."+classes.viewcontactList+" ."+classes.active).forEach(
            items => items.classList.remove(classes.active)
        );
        target.closest('li').classList.add(classes.active);
        this.props.onViewspecific(index)
        this.setState({
            bgColorIndex : this.props.bgColor[index]
        })
    }

    onhandleClickEdit = (items) =>{
        this.setState({
            editForm : !this.state.editForm,
            editItem : items
        })
    }

    onCloseEditForm =() =>{
        this.setState({
            editForm : false
        })
    }

    onSubmitEditForm = (e, items, id) =>{
        e.preventDefault();
        let data = {
            items,
            id
        }
        this.props.onSubmitEditContact(data)
        this.setState({
            editForm : !this.state.editForm
        })
    }

    render(){

        let showAddContact = null, viewContact = null, 
            viewContactList =null, showEditContact = null;

        viewContact = (
            <p className={classes.selectText}> Select the contact to view here </p>
        )

        if(this.state.addForm){
            showAddContact = (
                <AddContact 
                    submit={this.onSubmitAddForm}
                    close={this.onShowAddform} 
                    show={this.state.addForm}  />
            )
        }

        if(this.state.editForm){
            showEditContact = (
                <EditContact 
                    submitEdit={this.onSubmitEditForm}
                    close={this.onCloseEditForm} 
                    item = {this.state.editItem}
                    show={this.state.editForm}  />
            )
        }

        if(this.props.contactArr.length > 0){
            viewContactList = (
                <div className={classes.viewcontactList}>
                    <ul className={classes.listUl}>
                        <li>
                            <div> + </div>
                            <div> Basic Info </div>
                            <div> Company </div>
                        </li>
                        {this.props.contactArr.map((items, index) =>{
                            if(items.logged !== true){
                                return (<ViewList 
                                clickedEdit = {() =>this.onhandleClickEdit(items) }
                                clickedMessage = {() => this.props.onClickMessageIcon(items)}
                                clicked={(e) =>this.onviewContact(e, index)}
                                msgIconDisabled = {findLogged(this.props.contactArr)}
                                svg = {true}
                                key={items.id}
                                bgColor={this.props.bgColor[index]}
                                fullname = {items.FullName}
                                email = {items.Email}
                                company = {items.CompanyName} />)
                            } 
                            return false;
                        })}
                    </ul>
                </div>
            )
        }

        if(this.props.previewContact){
            viewContact = (
                <ViewContact
                    bgColorIndex={this.state.bgColorIndex !== null ? this.state.bgColorIndex : randomColor()}
                    items={this.props.previewContact} />
            )
        }

        return(
            <div className={classes.rootContainer}>
                <div className={classes.addcontact}>
                    <Button 
                        clicked={()=>this.onShowAddform()} 
                        disabled={false}> + Add Contact </Button>
                    {showAddContact}
                    {showEditContact}
                </div>
                <div className={classes.contactWrap}>
                    {viewContactList}
                    {this.props.contactArr.length > 0 ? <div className={classes.previewcontact}>
                        {viewContact}
                    </div> : null}
                </div>
            </div>
        )
    }
};

let mapPropsToState = state => {
    return{
        contactArr : state.contactArr,
        previewContact : state.previewContact,
        bgColor : state.bgColor
    }
}

let mapDispatchToProps = dispatch => {
    return{
        onSubmitAddContact : (items) => (dispatch(actionTypes.onSubmitAddForm(items))),
        onSubmitEditContact : (data) => (dispatch(actionTypes.onSubmitEditForm(data))),
        onViewspecific : (items) => (dispatch(actionTypes.onviewContact(items))),
        onClickMessageIcon : (items) => (dispatch(actionTypes.onClickMessIcon(items))),
        onRandomColors : (items) => (dispatch(actionTypes.onGenerateColor(items)))
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(ParentContainer);