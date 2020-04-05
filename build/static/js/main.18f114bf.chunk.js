(this["webpackJsonpreact-pack"]=this["webpackJsonpreact-pack"]||[]).push([[0],{1:function(t,e,n){t.exports={form:"ContactForm_form__2jOTu",labelItem:"ContactForm_labelItem__2vpma",textName:"ContactForm_textName__Ii_Mz",submitBtn:"ContactForm_submitBtn__1p5tL"}},10:function(t,e,n){t.exports={sectionTitle:"SectionTitle_sectionTitle__2M-bu"}},11:function(t,e,n){t.exports={contactList:"ContactsList_contactList__2GZ6n",contactItem:"ContactsList_contactItem__1XRpz"}},12:function(t,e,n){t.exports={contactInfo:"ContactItem_contactInfo__1Tws8",deleteBtn:"ContactItem_deleteBtn__3jw_g"}},15:function(t,e,n){t.exports={filterInput:"Filter_filterInput__3nFqP"}},16:function(t,e,n){t.exports={container:"App_container__15GfT"}},18:function(t,e,n){t.exports=n(31)},31:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(14),o=n.n(r),l=n(17),i=n(4),s=n(6),m=n(7),u=n(8),d=n(9),f=n(2),p=n.n(f),h=n(10),b=n.n(h),C=function(t){var e=t.title,n=t.children;return c.a.createElement("section",{className:b.a.sectionTitle},c.a.createElement("h2",{className:b.a.sectionTitle},e),n)},_=n(5),v=n(1),I=n.n(v),E=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=p.a.generate(),t.numberInputId=p.a.generate(),t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(_.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),(0,t.props.onAddContact)(Object(i.a)({},t.state)),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(m.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{className:I.a.form,onSubmit:this.handleSubmit},c.a.createElement("label",{className:I.a.labelItem,htmlFor:this.nameInputId},c.a.createElement("p",{className:I.a.textName},"Name"),c.a.createElement("input",{className:I.a.inputName,type:"text",name:"name",value:e,onChange:this.handleChange,id:this.nameInputId})),c.a.createElement("label",{className:I.a.labelItem,htmlFor:this.numberInputId},c.a.createElement("p",{className:I.a.textName},"Number"),c.a.createElement("input",{type:"phone",name:"number",value:n,onChange:this.handleChange,id:this.numberInputId})),c.a.createElement("button",{className:I.a.submitBtn,type:"submit"},"Add Contact"))}}]),n}(a.Component),N=n(15),g=n.n(N),y=function(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("input",{type:"text",value:e,onChange:n,className:g.a.filterInput,placeholder:"Type name to filter contacts..."})},S=n(11),O=n.n(S),j=n(12),x=n.n(j),F=function(t){var e=t.contact,n=t.onDeleteContact,a=e.name,r=e.number;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:x.a.contactInfo},a," : ",r),c.a.createElement("button",{onClick:function(){return n(e.id)},className:x.a.deleteBtn,type:"button"},"Delete"))},k=function(t){var e=t.contacts,n=t.onDeleteContact;return c.a.createElement("ul",{className:O.a.contactList},e.map((function(t){return c.a.createElement("li",{key:t.id,className:O.a.contactItem},c.a.createElement(F,{contact:t,onDeleteContact:n}))})))},T=n(16),w=n.n(T),D=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleAddContact=function(e){t.state.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is already in contacts")):t.addContactToState(e)},t.addContactToState=function(e){var n=e.number,a=e.name,c=Number(n);if(c&&""!==a){var r=Object(i.a)({},e,{id:p.a.generate()});t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[r])}}))}else c||""!==a?c?""===a&&alert("Please, enter a name"):alert("Please, enter a correct number"):alert("Please, enter name and number")},t.handleDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleChangeFilter=function(e){t.setState({filter:e.target.value})},t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");if(t){var e=JSON.parse(t);this.setState({contacts:e})}}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(e,n);return c.a.createElement("div",{className:w.a.container},c.a.createElement(C,{title:"Phonebook"},c.a.createElement(E,{onAddContact:this.handleAddContact})),c.a.createElement(C,{title:"Contacts"},e.length>1&&c.a.createElement(y,{value:n,onChangeFilter:this.handleChangeFilter}),c.a.createElement(k,{onDeleteContact:this.handleDeleteContact,contacts:a})))}}]),n}(a.Component);o.a.render(c.a.createElement(D,null),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.18f114bf.chunk.js.map