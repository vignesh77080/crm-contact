import * as actionTypes from './actionTypes';

export const onSubmitAddForm = (value) => {
    return {
        type : actionTypes.ONSUBMIT_ADDCONTACT,
        value : value
    }
}

export const onviewContact = (value) => {
    return {
        type : actionTypes.ONVIEWCONTACT,
        value : value
    }
}

export const onSubmitEditForm = (value) => {
    return {
        type : actionTypes.ONSUBMIT_EDITCONTACT,
        value : value
    }
}

export const onclickLogUser = value =>{
    return {
        type : actionTypes.ONCHANGE_LOGUSER,
        value : value
    }
}

export const onClickMessIcon = value =>{
    return {
        type : actionTypes.ONCLICK_MSGBOX,
        value : value
    }
}

export const onAddContactMsg = value =>{
    return {
        type : actionTypes.ONADD_MSGUSER,
        value : value
    }
}

export const onGenerateColor = value =>{
    return {
        type : actionTypes.RANDOM_BGCOLOR,
        value : value
    }
}