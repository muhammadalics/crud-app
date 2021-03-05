(this["webpackJsonpinventory-app"]=this["webpackJsonpinventory-app"]||[]).push([[0],{35:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var r=a(2),s=a.n(r),n=a(26),o=a.n(n),i=(a(35),a(36),a(5)),c=a.n(i),l=a(9),h=a(10),d=a(11),u=a(13),b=a(12),m=a(3),j=a(18),g=a(28),p=a(30),x=a(29),O=(a(38),a(1)),f=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var r,s=e.department,n=e.name,o=e.size,i=e.corrosionfree,d=e.material,u=e.weight,b=e.id;return Object(h.a)(this,a),(r=t.call(this,{department:s,name:n,size:o,corrosionfree:i,material:d,weight:u,id:b})).deleteitem=function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("The item is being deleted.")){e.next=8;break}return console.log(r.state.department),e.next=4,fetch("https://desolate-fjord-62722.herokuapp.com/api/products/"+r.state.id,{method:"DELETE"});case 4:e.sent,r.setState({changeDetected:!0}),console.log(r.state.changeDetected),r.setState({state:r.state});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={department:s,name:n,size:o,corrosionfree:i,material:d,weight:u,id:b,redirect:null,changeDetected:!1},r}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return this.state.redirect?Object(O.jsx)(m.a,{to:{pathname:"/updateitem",state:{detail:this.state}},push:!0}):this.state.changeDetected?Object(O.jsx)("div",{}):Object(O.jsxs)("div",{className:"img-div",children:[Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("img",{className:"image",onError:function(e){e.target.onerror=null,e.target.src="https://via.placeholder.com/200?text=Product+Image"},src:this.state.department}),Object(O.jsx)("div",{className:"span",onClick:this.deleteitem,children:Object(O.jsx)(j.a,{size:25,color:"black"})}),Object(O.jsx)("div",{className:"update",onClick:function(){return e.setState({redirect:!0})},children:Object(O.jsx)(j.b,{size:25,color:"black"})})]}),Object(O.jsx)("div",{className:"productname",children:Object(O.jsx)("div",{className:"span1",children:this.state.name})}),Object(O.jsxs)("div",{className:"otherinfo",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(g.a,{}),"  ",this.state.size]}),Object(O.jsx)("div",{children:this.state.corrosionfree}),Object(O.jsxs)("div",{children:[Object(O.jsx)(x.a,{}),"  ",this.state.material]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(p.a,{}),"  ",this.state.weight," kg"]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]})]})}}]),a}(s.a.Component),v=a(14),w=(a(45),a(15)),S=a(20),k=(a(46),function(e){var t=e.children,a=e.status,r=Object(S.a)(e,["children","status"]);return Object(O.jsx)("button",Object(w.a)(Object(w.a)({disabled:a,className:"custom-button1"},r),{},{children:t}))}),C=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).state={loading:!0,items:null},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:5000/api/products",e.next=3,fetch("http://localhost:5000/api/products");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log(a),this.setState({items:a,loading:!1}),console.log(this.state.items._id);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:Object(O.jsx)("center",{children:"CRUD App for Inventory"})}),Object(O.jsx)("div",{className:"links",children:Object(O.jsxs)("center",{children:[Object(O.jsx)(v.b,{to:"/additem",children:"Add Item"})," ",Object(O.jsx)(v.b,{to:"/about",children:"About"})]})}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),this.state.loading||!this.state.items?Object(O.jsx)("div",{children:" loading..."}):Object(O.jsx)("div",{className:"item-list",children:this.state.items.map((function(e){var t=e.department,a=e.name,r=e.size,s=e.corrosionfree,n=e.material,o=e.weight,i=e._id;return Object(O.jsx)("div",{children:Object(O.jsx)(f,{department:t,name:a,size:r,corrosionfree:s,material:n,weight:o,id:i})})}))})]})}}]),a}(s.a.Component),y=a(17),N=(a(47),function(e){var t=e.handleChange,a=e.label,r=e.errmsg,s=e.errcolor,n=Object(S.a)(e,["handleChange","label","errmsg","errcolor"]);return Object(O.jsxs)("div",{className:"group",children:[Object(O.jsx)("div",{className:"label",children:a}),Object(O.jsxs)("div",{className:"inputanderror",children:[Object(O.jsx)("input",Object(w.a)({className:"forminput",onChange:t},n)),Object(O.jsx)("div",{className:"message",style:{color:s},children:r})]})]})}),T=(a(48),function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var r;return Object(h.a)(this,a),(r=t.call(this,e)).optionmaker=function(){var e=[];for(var t in r.state.options)e.push(Object(O.jsx)("option",{value:r.state.options[t],children:t}));return e},r.handleChangehere=function(e){r.props.handleChange(e)},console.log("This is from form-select"),console.log(r.props.value),console.log(typeof r.props.value),r.state={options:r.props.options,label:r.props.label,name:r.props.name,value:r.props.value},r}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.value!==e.value&&(console.log("componenet did mount!"),this.setState({value:this.props.value}))}},{key:"render",value:function(){return console.log("From inside form-select render."),console.log(this.state.value),console.log("From props:"),console.log(this.state.value),Object(O.jsxs)("div",{className:"group",children:[Object(O.jsx)("div",{className:"label",children:this.state.label}),Object(O.jsx)("select",Object(w.a)(Object(w.a)({value:this.state.value,className:"formselect",name:this.state.name,onChange:this.handleChangehere},this.otherProps),{},{children:this.optionmaker()}))]})}}]),a}(s.a.Component)),z=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).handleSubmit=function(){var t=Object(l.a)(c.a.mark((function t(a){var r,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),console.log("The entered values are:"),console.log(e.state.name),console.log(e.state.material),console.log(e.state.weight),console.log(e.state.corrosion),console.log(e.state.size),console.log(e.state.url),r={name:e.state.name,material:e.state.material,weight:e.state.weight,corrosionfree:"True"==e.state.corrosion,size:e.state.size,department:e.state.url},console.log(JSON.stringify(r)),t.next=12,fetch("https://desolate-fjord-62722.herokuapp.com/api/products",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 12:if((s=t.sent).ok){t.next=17;break}throw new Error("HTTP error! status: ".concat(s.status));case 17:alert("Item has been added!"),e.setState({redirect:!0});case 19:console.log(s);case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,r=a.value,s=a.name;console.log(s+" "+r),e.setState(Object(y.a)({},s,r),e.inputValidator),console.log("After state change:"),console.log(e.state.corrosion),console.log(e.state.size)},e.state={name:"",material:"",weight:"",corrosion:"True",size:"Small",url:"",redirect:!1,errname:"",errnamecolor:"red",errmaterial:"",errmaterialcolor:"red",errweight:"",errweightcolor:"red",disablebutton:!1},e}return Object(d.a)(a,[{key:"inputValidator",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.state.name.length<4|this.state.name.length>20)){e.next=6;break}return this.setState({errname:"Name should be between 4 and 20 characters long."}),e.next=4,this.setState({errnamecolor:"red"});case 4:e.next=9;break;case 6:return this.setState({errname:"OK"}),e.next=9,this.setState({errnamecolor:"green"});case 9:if(!(this.state.material.length<4|this.state.material.length>20)){e.next=15;break}return this.setState({errmaterial:"Material should be between 4 and 20 characters long."}),e.next=13,this.setState({errmaterialcolor:"red"});case 13:e.next=18;break;case 15:return this.setState({errmaterial:"OK"}),e.next=18,this.setState({errmaterialcolor:"green"});case 18:if(t=/[a-zA-Z]/,!(/[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/.test(this.state.weight)|t.test(this.state.weight))){e.next=26;break}return this.setState({errweight:"Special characters and alphabets are not allowed."}),e.next=24,this.setState({errweightcolor:"red"});case 24:e.next=35;break;case 26:if(!(this.state.weight.length<1|this.state.weight.length>10)){e.next=32;break}return this.setState({errweight:"Weight should not be empty or longer than 10 characters."}),e.next=30,this.setState({errweightcolor:"red"});case 30:e.next=35;break;case 32:return this.setState({errweight:"OK"}),e.next=35,this.setState({errweightcolor:"green"});case 35:this.shouldDisableButton();case 36:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"shouldDisableButton",value:function(){console.log("Printing colors"),console.log(this.state.errnamecolor),console.log(this.state.errmaterialcolor),console.log(this.state.errweightcolor),"red"==this.state.errnamecolor||"red"==this.state.errmaterialcolor||"red"==this.state.errweightcolor?(console.log("firing color"),this.setState({disablebutton:!0})):this.setState({disablebutton:!1})}},{key:"render",value:function(){return this.state.redirect?Object(O.jsx)(m.a,{to:{pathname:"/"}}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Add Items"}),Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)(N,{value:this.state.name,name:"name",label:"Product Name",handleChange:this.handleChange,errmsg:this.state.errname,errcolor:this.state.errnamecolor}),Object(O.jsx)(N,{value:this.state.material,name:"material",label:"Material",handleChange:this.handleChange,errmsg:this.state.errmaterial,errcolor:this.state.errmaterialcolor}),Object(O.jsx)(N,{value:this.state.weight,name:"weight",label:"Weight",handleChange:this.handleChange,errmsg:this.state.errweight,errcolor:this.state.errweightcolor}),Object(O.jsx)(T,{name:"corrosion",label:"Corrosion Free",options:{True:"True",False:"False"},handleChange:this.handleChange}),Object(O.jsx)(T,{name:"size",label:"Size",options:{Small:"Small",Medium:"Medium",Large:"Large"},handleChange:this.handleChange}),Object(O.jsx)(N,{value:this.state.url,name:"url",label:"Picture URL",handleChange:this.handleChange}),Object(O.jsx)(k,{status:this.state.disablebutton,type:"submit",children:"Submit"})]})]})}}]),a}(s.a.Component),D=(a(49),function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var r;return Object(h.a)(this,a),(r=t.call(this,e)).handleSubmit=function(){var e=Object(l.a)(c.a.mark((function e(t){var a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("The entered values are:"),console.log(r.state.name),console.log(r.state.material),console.log(r.state.weight),console.log(r.state.corrosion),console.log(r.state.size),console.log(r.state.url),a={name:r.state.name,material:r.state.material,weight:r.state.weight,corrosionfree:"True"==r.state.corrosion,size:r.state.size,department:r.state.url,id:r.state.id},console.log(JSON.stringify(a)),e.next=12,fetch("https://desolate-fjord-62722.herokuapp.com/api/products",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 12:if((s=e.sent).ok){e.next=17;break}throw new Error("HTTP error! status: ".concat(s.status));case 17:console.log("update successful."),alert("Item has been updated!"),r.setState({redirect:!0});case 20:console.log(s);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(){var e=Object(l.a)(c.a.mark((function e(t){var a,s,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Print event:"),console.log(t),a=t.target,s=a.value,n=a.name,console.log(n+" "+s),e.next=6,r.setState(Object(y.a)({},n,s),r.inputValidator);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.inputValidator=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r.state.name.length<4|r.state.name.length>20)){e.next=6;break}return r.setState({errname:"Name should be between 4 and 20 characters long."}),e.next=4,r.setState({errnamecolor:"red"});case 4:e.next=9;break;case 6:return r.setState({errname:"OK"}),e.next=9,r.setState({errnamecolor:"green"});case 9:if(!(r.state.material.length<4|r.state.material.length>20)){e.next=15;break}return r.setState({errmaterial:"Material should be between 4 and 20 characters long."}),e.next=13,r.setState({errmaterialcolor:"red"});case 13:e.next=18;break;case 15:return r.setState({errmaterial:"OK"}),e.next=18,r.setState({errmaterialcolor:"green"});case 18:if(t=/[a-zA-Z]/,!(/[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/.test(r.state.weight)|t.test(r.state.weight))){e.next=26;break}return r.setState({errweight:"Special characters and alphabets are not allowed."}),e.next=24,r.setState({errweightcolor:"red"});case 24:e.next=35;break;case 26:if(!(r.state.weight.length<1|r.state.weight.length>10)){e.next=32;break}return r.setState({errweight:"Weight should not be empty or longer than 10 characters."}),e.next=30,r.setState({errweightcolor:"red"});case 30:e.next=35;break;case 32:return r.setState({errweight:"OK"}),e.next=35,r.setState({errweightcolor:"green"});case 35:r.shouldDisableButton();case 36:case"end":return e.stop()}}),e)}))),r.shouldDisableButton=function(){console.log("Printing colors"),console.log(r.state.errnamecolor),console.log(r.state.errmaterialcolor),console.log(r.state.errweightcolor),"red"==r.state.errnamecolor||"red"==r.state.errmaterialcolor||"red"==r.state.errweightcolor?(console.log("firing color"),r.setState({disablebutton:!0})):r.setState({disablebutton:!1})},r.state={name:r.props.location.state.detail.name,material:r.props.location.state.detail.material,weight:r.props.location.state.detail.weight,corrosion:1==r.props.location.state.detail.corrosionfree?"True":"False",size:r.props.location.state.detail.size,url:r.props.location.state.detail.department,id:r.props.location.state.detail.id,redirect:!1,errname:"",errnamecolor:"red",errmaterial:"",errmaterialcolor:"red",errweight:"",errweightcolor:"red",disablebutton:!1},r}return Object(d.a)(a,[{key:"render",value:function(){return console.log("rendering"),this.state.redirect?Object(O.jsx)(m.a,{to:{pathname:"/"}}):(console.log("The state of size inside render is:"),console.log(this.state.size),Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Update Items"}),Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("br",{}),Object(O.jsxs)("span",{className:"ID",children:["ID: ",this.state.id]}),Object(O.jsx)("p",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)(N,{value:this.state.name,name:"name",label:"Product Name",handleChange:this.handleChange,errmsg:this.state.errname,errcolor:this.state.errnamecolor}),Object(O.jsx)(N,{value:this.state.material,name:"material",label:"Material",handleChange:this.handleChange,errmsg:this.state.errmaterial,errcolor:this.state.errmaterialcolor}),Object(O.jsx)(N,{value:this.state.weight,name:"weight",label:"Weight",handleChange:this.handleChange,errmsg:this.state.errweight,errcolor:this.state.errweightcolor}),Object(O.jsx)(T,{value:this.state.corrosion,name:"corrosion",label:"Corrosion Free",options:{True:"True",False:"False"},handleChange:this.handleChange}),Object(O.jsx)(T,{value:this.state.size,name:"size",label:"Size",options:{Small:"Small",Medium:"Medium",Large:"Large"},handleChange:this.handleChange}),Object(O.jsx)(N,{value:this.state.url,name:"url",label:"Picture URL",handleChange:this.handleChange}),Object(O.jsx)(k,{status:this.state.disablebutton,type:"submit",children:"Push Update"})]})]}))}}]),a}(s.a.Component)),P=(a(50),function(e){return Object(O.jsxs)("div",{className:"para",children:[Object(O.jsx)("h1",{children:"About"}),Object(O.jsxs)("p",{children:["Welcome to the website. ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"This is an implementation of a basic CRUD app using MERN stack."]}),Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("div",{className:"crud",children:"Create"}),Object(O.jsxs)("div",{className:"bodypara",children:["To ",Object(O.jsx)("b",{children:"create"})," an item, please click on the 'Add Item' link on the main page."]})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("div",{className:"crud",children:"Read"}),Object(O.jsxs)("div",{className:"bodypara",children:["The items shown on the main page are the items in the database and therefore represent the ",Object(O.jsx)("b",{children:"R"})," part of the C",Object(O.jsx)("b",{children:"R"}),"UD."]})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("div",{className:"crud",children:"Update"}),Object(O.jsxs)("div",{className:"bodypara",children:["The items can be ",Object(O.jsx)("b",{children:"updated"})," by clicking the update icon ",Object(O.jsx)(j.b,{})," on each item's image."]})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("div",{className:"crud",children:"Delete"}),Object(O.jsxs)("div",{className:"bodypara",children:["Click on the delete icon ",Object(O.jsx)(j.a,{})," on the item image to ",Object(O.jsx)("b",{children:"delete"})," the item in the database."]})]})]})]})});var F=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(m.d,{children:[Object(O.jsx)(m.b,{exact:!0,path:"/additem",component:z}),Object(O.jsx)(m.b,{exact:!0,path:"/",component:C}),Object(O.jsx)(m.b,{exact:!0,path:"/updateitem",component:D}),Object(O.jsx)(m.b,{exact:!0,path:"/about",component:P})]})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),r(e),s(e),n(e),o(e)}))};o.a.render(Object(O.jsx)(v.a,{basename:"/React-Inventory-frontend",children:Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(F,{})})}),document.getElementById("root")),I()}},[[51,1,2]]]);
//# sourceMappingURL=main.d75a95a8.chunk.js.map