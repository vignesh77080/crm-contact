import React from 'react';

import { connect } from 'react-redux';
import ViewList from '../../components/viewContact/viewList/viewList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import classes from './LoggedUser.module.css';
import { findLogged } from '../../components/viewContact/ultilities/ultilityFunctions';
import * as actionTypes from '../hoc/store/Action/action';

class LoggedUser extends React.Component{

    state = {
        showDrop : false,
        loggedUser : ""
    }

    onHandleClick = () =>{
        this.setState({
            showDrop : !this.state.showDrop
        })
    }

    componentDidMount(){
        
        let user = findLogged(this.props.contactArr);
        if(user !== null){
            this.setState({
                loggedUser : user
            })
        }else{
            this.setState({
                loggedUser : "Select contact"
            })
        }

    }

    onClickChange = (items) => {

        let makefalse = [ ...this.props.contactArr ];
        let checkLogExits= makefalse.map(items=>{
            if(items.logged === true){
                let change = { ...items}
                change.logged = false
                return change
            }else{
                return items
            }
        })
        checkLogExits[items.id - 1].logged = true;
        this.props.onClickChangeUser(checkLogExits)
        document.querySelector('.'+classes.loggedUser+' p span:first-child').innerHTML =  items.FullName;
        this.setState({
            showDrop : !this.state.showDrop
        })
    }

    render(){

        let listitems = null;
        if(this.state.showDrop){
            listitems = (
                <ul>
                    {this.props.contactArr.map((items, index) =>{
                        if(items.logged !== true){
                            return (<ViewList 
                                clicked = {() => this.onClickChange(items)}
                                key={items.id}
                                svg = {false}
                                bgColor={this.props.bgColor[index]}
                                fullname = {items.FullName}
                            />)
                        }
                        return false;
                    })}
                </ul>
            )
        }

        return(
            <div className={classes.loggedUser}>
                {this.props.contactArr.length > 0 ? 
                <p onClick={() => this.onHandleClick()}>
                    <span>{this.state.loggedUser}</span>
                    <span><FontAwesomeIcon className={classes.downArrow} icon={faCaretDown}/></span>
                </p> : null}
                {listitems}
            </div>
        )
    }
};

let mapPropsToState = state => {
    return{
        contactArr : state.contactArr,
        bgColor : state.bgColor
    }
}

let mapDispatchToProps = dispatch => {
    return{
        onClickChangeUser : (items) => (dispatch(actionTypes.onclickLogUser(items))),
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(LoggedUser);