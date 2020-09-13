import * as actionTypes from '../Action/actionTypes';

let contactArr = [
    {
        id : 1,
        FullName : 'vignesh',
        Email : 'vignesh.yes97@gmail.com',
        CompanyName : 'Accenture',
        PhoneNumber : '7708021641',
        Address : 'Coimatore',
        logged : true,
        messages : []
    },
    {
        id : 2,
        FullName : 'person',
        Email : 'person2.@gmail.com',
        CompanyName : 'AnyCompany',
        PhoneNumber : '0987654321',
        Address : '',
        logged : false,
        messages : []
    },
    {
        id :3, 
        FullName : 'testing',
        Email : 'testing.yes97@gmail.com',
        CompanyName : '',
        PhoneNumber : '8989898989',
        Address : 'something !!!',
        logged : false,
        messages : []
    },
    {
        id :4,
        FullName : 'kenau reeves',
        Email : 'kenau.reeves@gmail.com',
        CompanyName : 'High Table',
        PhoneNumber : '789789789',
        Address : 'something !!!',
        logged : false,
        messages : []
    },
    {
        id : 5,
        FullName : 'Jacks Sparrow',
        Email : 'jacks@gmail.com',
        CompanyName : 'Black Pearl',
        PhoneNumber : '9090909090',
        Address : '',
        logged : false,
        messages : []
    }
]

let initialState = {
    contactArr : [ ...contactArr  ],
    previewContact : null,
    openMsgModal : false,
    toPerson : null,
    bgColor : []
}

let rootReducer = (state = initialState, action) => {

    switch(action.type){

        case (actionTypes.ONSUBMIT_ADDCONTACT):
            let newContactObj = {};
            for(let i in action.value){
                newContactObj[i] = action.value[i].value
            }
            newContactObj.id = state.contactArr.length + 1;
            newContactObj.logged = false;
            newContactObj.messages = [];
            return {
                ...state,
                contactArr : [
                    ...state.contactArr,
                    newContactObj
                ]
            }

        case (actionTypes.ONSUBMIT_EDITCONTACT):
            let Contacteditted = {};
            for(let i in action.value.items){
                Contacteditted[i] = action.value.items[i].value
            }
            let newContactedit = [ ...state.contactArr ];
            newContactedit[action.value.id-1] = {...newContactedit[action.value.id-1], ...Contacteditted}
            return {
                ...state,
                contactArr : newContactedit,
                previewContact : newContactedit[action.value.id-1],
            }

        case (actionTypes.ONVIEWCONTACT):
            return {
                ...state,
                previewContact : state.contactArr[action.value]
            }

        case (actionTypes.ONCHANGE_LOGUSER):
            return {
                ...state,
                contactArr : action.value
            }

        case (actionTypes.ONCLICK_MSGBOX):
            return {
                ...state,
                toPerson : action.value, 
                openMsgModal : !state.openMsgModal
            }
        
        case (actionTypes.ONADD_MSGUSER):
            return{
                ...state,
                contactArr : action.value
            }

        case (actionTypes.RANDOM_BGCOLOR):
            let bgColor = [ ...state.bgColor, action.value]
            return{
                ...state,
                bgColor : bgColor
            }
        default:
            return state
    }

}

export default rootReducer;