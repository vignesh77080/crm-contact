(this["webpackJsonpcrm-contact"]=this["webpackJsonpcrm-contact"]||[]).push([[0],[,,,function(e,t,a){e.exports={rootContainer:"ParentContainer_rootContainer__2o32V",addcontact:"ParentContainer_addcontact__ouC8V",viewcontactList:"ParentContainer_viewcontactList__4xSTB",contactWrap:"ParentContainer_contactWrap__2046U",previewcontact:"ParentContainer_previewcontact__3qoth",selectText:"ParentContainer_selectText__1cVe5",active:"ParentContainer_active__3wfIw",listUl:"ParentContainer_listUl__1WuST"}},,,,,,,,,function(e,t,a){e.exports={svg:"viewList_svg__SX9Bm",basicInfo:"viewList_basicInfo__1wbXs",messagesCount:"viewList_messagesCount__18Nb-",company:"viewList_company__15_Sv",name:"viewList_name__2ZOIC",twoLetters:"viewList_twoLetters__1N4gG",disabled:"viewList_disabled__2C2Or"}},function(e,t,a){e.exports={viewContactitems:"viewContact_viewContactitems__2C9uW",basicInfo:"viewContact_basicInfo__3ZL78",name:"viewContact_name__3ijzY",twoLetters:"viewContact_twoLetters__3ap6l",personInfo:"viewContact_personInfo__V0vA0"}},function(e,t,a){e.exports={messagingWrap:"Messaging_messagingWrap__oIpGH",message:"Messaging_message__3uGil",messageBox:"Messaging_messageBox__QqdhC",disabled:"Messaging_disabled__3apUP"}},,,,function(e,t,a){e.exports={inputWrap:"Input_inputWrap__JXHB0",styleClass:"Input_styleClass__vnZ8W",hasError:"Input_hasError__1wWEb",error:"Input_error__1ntJq"}},function(e,t,a){e.exports={loggedUser:"LoggedUser_loggedUser__3mL9b"}},,function(e,t,a){e.exports={addForm:"AddContact_addForm__3nTSO",addFormWrap:"AddContact_addFormWrap__1Bodn"}},function(e,t,a){e.exports={addForm:"EditForm_addForm__1kFwE",addFormWrap:"EditForm_addFormWrap__14Hn_"}},,,,function(e,t,a){e.exports={messageChat:"Message_messageChat__1KvsN",nonLi:"Message_nonLi__20Pif"}},,function(e,t,a){},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3uj83"}},,function(e,t,a){e.exports=a(45)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),l=a.n(r),s=(a(36),a(37),a(4)),c=a(5),i=a(7),m=a(6),u=a(3),d=a.n(u),p=a(28),v=a.n(p),g=function(e){return o.a.createElement("button",{onClick:e.clicked,disabled:e.disabled,className:v.a.button}," ",e.children," ")},h=a(1),f=a(18),C=a.n(f),E=function(e){var t=[e.styleClass?C.a.styleClass:null];return e.invalid&&e.styleClass&&t.push(C.a.hasError),o.a.createElement("div",{className:C.a.inputWrap},o.a.createElement("input",Object.assign({className:t.join(" ")},e.elementProps,{value:e.value,onChange:e.changed})),o.a.createElement("label",null," ",e.label," "))},b=a(29),_=a.n(b),N=function(e){return e.show?o.a.createElement("div",{onClick:e.clicked,className:_.a.Backdrop}):null},y=a(21),O=a.n(y),F=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={contactForm:{FullName:{elementType:"input",elementProps:{type:"text",autoComplete:"off",name:"FullName"},label:"Full Name",styleClass:!1,value:"",validation:{minLenght:5,isRequired:!0},touched:!1,IsValid:!1},Email:{elementType:"input",elementProps:{type:"text",name:"Email",autoComplete:"off"},label:"Email ID",styleClass:!1,value:"",validation:{isRequired:!0,regexExp:/^([\w\-.]+)@((([\w-]+\.)+)([a-zA-Z]{2,4}))$/},touched:!1,IsValid:!1},PhoneNumber:{elementType:"input",elementProps:{type:"text",name:"PhoneNumber",autoComplete:"off"},value:"",label:"Phone Number",styleClass:!1,validation:{isRequired:!0,regexExp:/^\d{10}$/},touched:!1,IsValid:!1},CompanyName:{elementType:"input",elementProps:{type:"text",name:"CompanyName",autoComplete:"off"},label:"Company Name",styleClass:!1,value:"",validation:{isRequired:!1},touched:!1,IsValid:!0},Address:{elementType:"input",elementProps:{type:"text",name:"Address",autoComplete:"off"},validation:{isRequired:!1},value:"",label:"Address",styleClass:!1,touched:!1,IsValid:!0}},formValid:!1},e.onHandleChange=function(t,a){var n=Object(h.a)({},e.state.contactForm),o=Object(h.a)({},n[a]);o.value=t.target.value,o.touched=!1,o.value.length>0&&(o.touched=!0),o.IsValid=e.checkValidity(o.value,o.validation),n[a]=o;var r=!0;for(var l in n)r=n[l].IsValid&&r;e.setState({contactForm:n,formValid:r})},e.onHandleChangeEdit=function(t,a){var n=Object(h.a)({},e.state.contactForm),o=Object(h.a)({},n[a]);o.value=t.target.value,o.touched=!1,o.value.length>0&&(o.touched=!0),o.IsValid=e.checkValidity(o.value,o.validation),n[a]=o;var r=!0;for(var l in n)r=n[l].IsValid&&r;e.setState({contactForm:n,formValid:r})},e.onclearValues=function(){e.props.close();var t=Object(h.a)({},e.state.contactForm);for(var a in t)t[a].value="";e.setState({contactForm:t})},e}return Object(c.a)(a,[{key:"checkValidity",value:function(e,t){var a=!0;return t.isRequired&&(a=""!==e.trim()&&a),t.minLenght&&(a=e.length>=t.minLenght&&a),t.regexExp&&(a=t.regexExp.test(e)&&a),a}},{key:"render",value:function(){var e=this,t=o.a.createElement("div",{className:O.a.addForm},o.a.createElement("form",{onSubmit:function(t){return e.props.submit(t,e.state.contactForm)}},Object.keys(this.state.contactForm).map((function(t){return o.a.createElement(E,{key:t,styleClass:e.state.contactForm[t].touched,label:e.state.contactForm[t].label,invalid:!e.state.contactForm[t].IsValid,elementProps:e.state.contactForm[t].elementProps,changed:function(a){return e.onHandleChange(a,t)},value:e.state.contactForm[t].value})})),o.a.createElement(g,{disabled:!this.state.formValid}," Add Contact ")),o.a.createElement(g,{clicked:this.onclearValues,disabled:!1}," Close "));return o.a.createElement("div",{className:O.a.addFormWrap},o.a.createElement(N,{clicked:this.props.close,show:this.props.show}),t)}}]),a}(o.a.Component),w=a(22),A=a.n(w),k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={contactForm:{FullName:{elementType:"input",elementProps:{type:"text",autoComplete:"off",name:"FullName"},label:"Full Name",styleClass:!1,value:e.props.item.FullName,validation:{minLenght:5,isRequired:!0},touched:!0,IsValid:!0},Email:{elementType:"input",elementProps:{type:"text",name:"Email",autoComplete:"off"},label:"Email ID",styleClass:!0,value:e.props.item.Email,validation:{isRequired:!0,regexExp:/^([\w\-.]+)@((([\w-]+\.)+)([a-zA-Z]{2,4}))$/},touched:!0,IsValid:!0},PhoneNumber:{elementType:"input",elementProps:{type:"text",name:"PhoneNumber",autoComplete:"off"},value:e.props.item.PhoneNumber,label:"Phone Number",styleClass:!0,validation:{isRequired:!0,regexExp:/^\d{10}$/},touched:!0,IsValid:!0},CompanyName:{elementType:"input",elementProps:{type:"text",name:"CompanyName",autoComplete:"off"},label:"Company Name",styleClass:!0,value:e.props.item.CompanyName,validation:{isRequired:!1},touched:!0,IsValid:!0},Address:{elementType:"input",elementProps:{type:"text",name:"Address",autoComplete:"off"},validation:{isRequired:!1},value:e.props.item.Address,label:"Address",styleClass:!0,touched:!0,IsValid:!0}},formValid:!0},e.onHandleChangeEdit=function(t,a){var n=Object(h.a)({},e.state.contactForm),o=Object(h.a)({},n[a]);o.value=t.target.value,o.touched=!1,o.value.length>0&&(o.touched=!0),o.IsValid=e.checkValidity(o.value,o.validation),n[a]=o;var r=!0;for(var l in n)r=n[l].IsValid&&r;e.setState({contactForm:n,formValid:r})},e.onclearValues=function(){e.props.close();var t=Object(h.a)({},e.state.contactForm);for(var a in t)t[a].value="";e.setState({contactForm:t})},e}return Object(c.a)(a,[{key:"checkValidity",value:function(e,t){var a=!0;return t.isRequired&&(a=""!==e.trim()&&a),t.minLenght&&(a=e.length>=t.minLenght&&a),t.regexExp&&(a=t.regexExp.test(e)&&a),a}},{key:"render",value:function(){var e=this,t=o.a.createElement("div",{className:A.a.addForm},o.a.createElement("form",{onSubmit:function(t){return e.props.submitEdit(t,e.state.contactForm,e.props.item.id)}},Object.keys(this.state.contactForm).map((function(t){return o.a.createElement(E,{key:t,styleClass:e.state.contactForm[t].touched,label:e.state.contactForm[t].label,invalid:!e.state.contactForm[t].IsValid,elementProps:e.state.contactForm[t].elementProps,changed:function(a){return e.onHandleChangeEdit(a,t)},value:e.state.contactForm[t].value})})),o.a.createElement(g,{disabled:!this.state.formValid}," Edit Contact ")),o.a.createElement(g,{clicked:this.onclearValues,disabled:!1}," Close "));return o.a.createElement("div",{className:A.a.addFormWrap},o.a.createElement(N,{clicked:this.props.close,show:this.props.show}),t)}}]),a}(o.a.Component),j=a(12),I=a.n(j),S=a(8),x=a(9),P=function(e){var t=e.trim().split(" ");return t[0][0]+(t.length>1?t[1][0]:t[0][e.length-1])},M=function(){return Math.floor(16777216*Math.random()).toString(16)},V=function(e){var t=e.filter((function(e){return!0===e.logged}));return t.length>0?t[0].FullName:null},T=function(e){var t=[null===e.msgIconDisabled?I.a.disabled:null,"MessageIcon"];return o.a.createElement("li",{onClick:e.clicked},e.svg?o.a.createElement("div",{className:I.a.svg},o.a.createElement(S.a,{title:"Edit Contact",onClick:e.clickedEdit,className:"editIcon",icon:x.c}),o.a.createElement(S.a,{title:"Message",onClick:e.clickedMessage,className:t.join(" "),icon:x.d})):null,o.a.createElement("div",{className:I.a.basicInfo},o.a.createElement("span",{style:{background:"#".concat(e.bgColor)},className:I.a.twoLetters},P(e.fullname)),o.a.createElement("p",{className:I.a.name},e.fullname,o.a.createElement("span",null," ",e.email," "))),o.a.createElement("div",{className:I.a.company},e.company))},L=a(13),D=a.n(L),B=function(e){var t=e.items,a=t.FullName,n=t.Email,r=t.CompanyName,l=t.PhoneNumber,s=t.Address;return o.a.createElement("div",{className:D.a.viewContactitems},o.a.createElement("div",{className:D.a.basicInfo},o.a.createElement("span",{style:{background:"#".concat(e.bgColorIndex)},className:D.a.twoLetters},P(a)),o.a.createElement("p",{className:D.a.name},a)),o.a.createElement("div",{className:D.a.personInfo},o.a.createElement("div",null,o.a.createElement("span",null,"FullName:")," ",o.a.createElement("span",null,a)),o.a.createElement("div",null,o.a.createElement("span",null,"Email:")," ",o.a.createElement("span",null,n)),o.a.createElement("div",null,o.a.createElement("span",null,"Phone:")," ",o.a.createElement("span",null,l)),o.a.createElement("div",null,o.a.createElement("span",null,"Company:")," ",o.a.createElement("span",null,r||"No information provided")),o.a.createElement("div",null,o.a.createElement("span",null,"Address")," ",o.a.createElement("span",null,s||"No information provided"))))},R=function(e){return{type:"ONCLICK_MSGBOX",value:e}},U=a(10),W=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={addForm:!1,editForm:!1,editItem:null,bgColorIndex:null},e.onShowAddform=function(){e.setState({addForm:!e.state.addForm})},e.onSubmitAddForm=function(t,a){t.preventDefault(),e.props.onSubmitAddContact(a),e.props.onRandomColors(M()),e.setState({addForm:!e.state.addForm})},e.onviewContact=function(t,a){var n=t.target;document.querySelectorAll("."+d.a.viewcontactList+" ."+d.a.active).forEach((function(e){return e.classList.remove(d.a.active)})),n.closest("li").classList.add(d.a.active),e.props.onViewspecific(a),e.setState({bgColorIndex:e.props.bgColor[a]})},e.onhandleClickEdit=function(t){e.setState({editForm:!e.state.editForm,editItem:t})},e.onCloseEditForm=function(){e.setState({editForm:!1})},e.onSubmitEditForm=function(t,a,n){t.preventDefault();var o={items:a,id:n};e.props.onSubmitEditContact(o),e.setState({editForm:!e.state.editForm})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.contactArr.map((function(t){return e.props.onRandomColors(M())}))}},{key:"render",value:function(){var e=this,t=null,a=null,n=null,r=null;return a=o.a.createElement("p",{className:d.a.selectText}," Select the contact to view here "),this.state.addForm&&(t=o.a.createElement(F,{submit:this.onSubmitAddForm,close:this.onShowAddform,show:this.state.addForm})),this.state.editForm&&(r=o.a.createElement(k,{submitEdit:this.onSubmitEditForm,close:this.onCloseEditForm,item:this.state.editItem,show:this.state.editForm})),this.props.contactArr.length>0&&(n=o.a.createElement("div",{className:d.a.viewcontactList},o.a.createElement("ul",{className:d.a.listUl},o.a.createElement("li",null,o.a.createElement("div",null," + "),o.a.createElement("div",null," Basic Info "),o.a.createElement("div",null," Company ")),this.props.contactArr.map((function(t,a){return!0!==t.logged&&o.a.createElement(T,{clickedEdit:function(){return e.onhandleClickEdit(t)},clickedMessage:function(){return e.props.onClickMessageIcon(t)},clicked:function(t){return e.onviewContact(t,a)},msgIconDisabled:V(e.props.contactArr),svg:!0,key:t.id,bgColor:e.props.bgColor[a],fullname:t.FullName,email:t.Email,company:t.CompanyName})}))))),this.props.previewContact&&(a=o.a.createElement(B,{bgColorIndex:null!==this.state.bgColorIndex?this.state.bgColorIndex:M(),items:this.props.previewContact})),o.a.createElement("div",{className:d.a.rootContainer},o.a.createElement("div",{className:d.a.addcontact},o.a.createElement(g,{clicked:function(){return e.onShowAddform()},disabled:!1}," + Add Contact "),t,r),o.a.createElement("div",{className:d.a.contactWrap},n,this.props.contactArr.length>0?o.a.createElement("div",{className:d.a.previewcontact},a):null))}}]),a}(o.a.Component),q=Object(U.b)((function(e){return{contactArr:e.contactArr,previewContact:e.previewContact,bgColor:e.bgColor}}),(function(e){return{onSubmitAddContact:function(t){return e({type:"ONSUBMIT_ADDCONTACT",value:t})},onSubmitEditContact:function(t){return e({type:"ONSUBMIT_EDITCONTACT",value:t})},onViewspecific:function(t){return e({type:"ONVIEWCONTACT",value:t})},onClickMessageIcon:function(t){return e(R(t))},onRandomColors:function(t){return e({type:"RANDOM_BGCOLOR",value:t})}}}))(W),H=a(11),G=a(19),J=a.n(G),X=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={showDrop:!1,loggedUser:""},e.onHandleClick=function(){e.setState({showDrop:!e.state.showDrop})},e.onClickChange=function(t){var a=Object(H.a)(e.props.contactArr).map((function(e){if(!0===e.logged){var t=Object(h.a)({},e);return t.logged=!1,t}return e}));a[t.id-1].logged=!0,e.props.onClickChangeUser(a),document.querySelector("."+J.a.loggedUser+" p span:first-child").innerHTML=t.FullName,e.setState({showDrop:!e.state.showDrop})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=V(this.props.contactArr);null!==e?this.setState({loggedUser:e}):this.setState({loggedUser:"Select contact"})}},{key:"render",value:function(){var e=this,t=null;return this.state.showDrop&&(t=o.a.createElement("ul",null,this.props.contactArr.map((function(t,a){return!0!==t.logged&&o.a.createElement(T,{clicked:function(){return e.onClickChange(t)},key:t.id,svg:!1,bgColor:e.props.bgColor[a],fullname:t.FullName})})))),o.a.createElement("div",{className:J.a.loggedUser},this.props.contactArr.length>0?o.a.createElement("p",{onClick:function(){return e.onHandleClick()}},o.a.createElement("span",null,this.state.loggedUser),o.a.createElement("span",null,o.a.createElement(S.a,{className:J.a.downArrow,icon:x.b}))):null,t)}}]),a}(o.a.Component),Z=Object(U.b)((function(e){return{contactArr:e.contactArr,bgColor:e.bgColor}}),(function(e){return{onClickChangeUser:function(t){return e({type:"ONCHANGE_LOGUSER",value:t})}}}))(X),$=a(14),z=a.n($),K=a(26),Q=a.n(K),Y=function(e){var t=e.contactArr.filter((function(e){return!0===e.logged})),a=null;t.length>0&&t.map((function(t){return a=t.messages.filter((function(t){return t.To===e.toPerson||t.From===e.toPerson}))}));var n={alignSelf:"flex-start",textAlign:"left"};return o.a.createElement("ul",{className:Q.a.messageChat},a.length>0?a.map((function(t,a){return o.a.createElement("li",{style:t.From===e.toPerson?n:null,key:a},t.message)})):o.a.createElement("li",{className:Q.a.nonLi}," No messages to display "))},ee=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={inputElement:{elementType:"input",elementProps:{type:"text",autoComplete:"off",name:"messageBox",placeholder:"Please enter the message here"},value:""},errorMsg:!0},e.onHandleChange=function(t){var a=Object(h.a)({},e.state.inputElement),n=t.target;a.value=n.value,""!==a.value?e.setState({inputElement:a,errorMsg:!1}):(a.value="",e.setState({inputElement:a,errorMsg:!0}))},e.onclickSendButton=function(){var t=Object(h.a)({},e.state.inputElement),a=Object(H.a)(e.props.contactArr);if(""!==t){var n={id:Date.now(),From:V(e.props.contactArr),To:e.props.toPerson.FullName,message:t.value};return a.map((function(e){return e.FullName===n.From||e.FullName===n.To?e.messages.push(n):e})),t.value="",e.setState({inputElement:t,errorMsg:!0}),e.props.onAddMsg(a)}return!1},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=null;return this.props.openMsgModal&&(t=o.a.createElement("div",null,o.a.createElement(N,{clicked:this.props.onCloseMsg,show:this.props.openMsgModal}),o.a.createElement("div",{className:z.a.messagingWrap},o.a.createElement("div",{className:z.a.message},o.a.createElement(Y,{contactArr:this.props.contactArr,toPerson:this.props.toPerson.FullName})),o.a.createElement("div",{className:z.a.messageBox},o.a.createElement(E,{elementProps:this.state.inputElement.elementProps,changed:function(t){return e.onHandleChange(t)},value:this.state.inputElement.value}),o.a.createElement(S.a,{onClick:function(){return e.onclickSendButton()},className:["sendIcon",this.state.errorMsg?z.a.disabled:null].join(" "),icon:x.e}))))),t}}]),a}(o.a.Component),te=Object(U.b)((function(e){return{contactArr:e.contactArr,openMsgModal:e.openMsgModal,toPerson:e.toPerson}}),(function(e){return{onCloseMsg:function(){return e(R())},onAddMsg:function(t){return e({type:"ONADD_MSGUSER",value:t})}}}))(ee);var ae=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(Z,null),o.a.createElement("div",{className:"heading"},o.a.createElement("span",null,o.a.createElement(S.a,{icon:x.a})),o.a.createElement("p",null,"Contacts",o.a.createElement("span",null," Welcome to CRM contact page "))),o.a.createElement(q,null),o.a.createElement(te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=a(17),oe={contactArr:[].concat([{id:1,FullName:"vignesh",Email:"vignesh.yes97@gmail.com",CompanyName:"Accenture",PhoneNumber:"7708021641",Address:"Coimatore",logged:!0,messages:[]},{id:2,FullName:"person",Email:"person2.@gmail.com",CompanyName:"AnyCompany",PhoneNumber:"0987654321",Address:"",logged:!1,messages:[]},{id:3,FullName:"testing",Email:"testing.yes97@gmail.com",CompanyName:"",PhoneNumber:"8989898989",Address:"something !!!",logged:!1,messages:[]},{id:4,FullName:"kenau reeves",Email:"kenau.reeves@gmail.com",CompanyName:"High Table",PhoneNumber:"789789789",Address:"something !!!",logged:!1,messages:[]},{id:5,FullName:"Jacks Sparrow",Email:"jacks@gmail.com",CompanyName:"Black Pearl",PhoneNumber:"9090909090",Address:"",logged:!1,messages:[]}]),previewContact:null,openMsgModal:!1,toPerson:null,bgColor:[]},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ONSUBMIT_ADDCONTACT":var a={};for(var n in t.value)a[n]=t.value[n].value;return a.id=e.contactArr.length+1,a.logged=!1,a.messages=[],Object(h.a)(Object(h.a)({},e),{},{contactArr:[].concat(Object(H.a)(e.contactArr),[a])});case"ONSUBMIT_EDITCONTACT":var o={};for(var r in t.value.items)o[r]=t.value.items[r].value;var l=Object(H.a)(e.contactArr);return l[t.value.id-1]=Object(h.a)(Object(h.a)({},l[t.value.id-1]),o),Object(h.a)(Object(h.a)({},e),{},{contactArr:l,previewContact:l[t.value.id-1]});case"ONVIEWCONTACT":return Object(h.a)(Object(h.a)({},e),{},{previewContact:e.contactArr[t.value]});case"ONCHANGE_LOGUSER":return Object(h.a)(Object(h.a)({},e),{},{contactArr:t.value});case"ONCLICK_MSGBOX":return Object(h.a)(Object(h.a)({},e),{},{toPerson:t.value,openMsgModal:!e.openMsgModal});case"ONADD_MSGUSER":return Object(h.a)(Object(h.a)({},e),{},{contactArr:t.value});case"RANDOM_BGCOLOR":var s=[].concat(Object(H.a)(e.bgColor),[t.value]);return Object(h.a)(Object(h.a)({},e),{},{bgColor:s});default:return e}},le=Object(ne.b)(re);l.a.render(o.a.createElement(U.a,{store:le}," ",o.a.createElement(ae,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.f944efee.chunk.js.map