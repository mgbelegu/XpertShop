(this["webpackJsonpxpert-shop"]=this["webpackJsonpxpert-shop"]||[]).push([[0],{48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c(1),a=c.n(n),r=c(19),s=c.n(r),l=c(3),o=c(10),j=c(16),d=c(37),h=c(4),u=c(5),b=c(7),O=c(6),g=c(8),p=function(e){return Object(i.jsx)("div",{children:e.children})},A=c.p+"static/media/home.09b3a21f.png",m=c.p+"static/media/porosite.30bcb5d1.png",x=c.p+"static/media/profili.b97e21f7.png",I=c.p+"static/media/shopping.794a79ce.png",v=function(e){return Object(i.jsxs)("ul",{className:e.classes,children:[Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/",exact:!0,children:Object(i.jsx)("img",{className:"navIcons",src:A,alt:"Home"})})}),Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/shporta",children:Object(i.jsx)("img",{className:"navIcons",src:I,alt:"Shporta"})})}),Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/porosite",children:Object(i.jsx)("img",{className:"navIcons",src:m,alt:"Porosite"})})}),Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/profili",children:Object(i.jsx)("img",{className:"navIcons",src:x,alt:"Profili"})})})]})},D=c.p+"static/media/logo.9337ebb5.PNG",M=(c(48),function(e){Object(b.a)(c,e);var t=Object(O.a)(c);function c(){return Object(h.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){return Object(i.jsx)(p,{children:Object(i.jsxs)("nav",{children:[Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:Object(i.jsx)(l.b,{to:"/",children:Object(i.jsx)("img",{className:"navLogo",src:D,alt:"Xpert Shop Logo"})})})}),Object(i.jsx)(v,{})]})})}}]),c}(n.Component)),y=(c(49),function(e){Object(b.a)(c,e);var t=Object(O.a)(c);function c(){return Object(h.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){return Object(i.jsxs)(p,{children:[Object(i.jsx)(M,{}),Object(i.jsx)("main",{className:"content",children:this.props.children})]})}}]),c}(n.Component)),k=c(9),w=(c(50),function(e){var t=null,c=["inputElement"];switch(e.invalid&&e.shouldValidate&&e.touched&&c.push("invalidInputElement"),e.elementType){case"input":t=Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:e.labelName}),Object(i.jsx)("input",Object(k.a)(Object(k.a)({className:c.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed})),Object(i.jsx)("div",{className:"passwordValidation",children:Object(i.jsx)("p",{children:e.passwordMsg})})]});break;case"textarea":t=Object(i.jsx)("textarea",Object(k.a)(Object(k.a)({className:c.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"select":t=Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:e.labelName}),Object(i.jsx)("select",{className:c.join(" "),value:e.value,onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(i.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))})]});break;default:t=Object(i.jsx)("input",Object(k.a)(Object(k.a)({className:"inputElement"},e.elementConfig),{},{value:e.value,onChange:e.changed}))}return Object(i.jsx)("div",{className:"input",children:t})}),f=c.p+"static/media/shop.baa04878.png",N=(c(51),"AUTH_START"),E="AUTH_SUCCESS",G="AUTH_FAIL",Y="AUTH_LOGOUT",T="FETCH_PRODUCTS_START",R="FETCH_PRODUCTS_SUCCESS",B="FETCH_PRODUCTS_FAIL",C=c(21),S=c.n(C),Z=function(){return{type:Y}},H=function(e,t,c){return function(i){i({type:N});var n={email:e,password:t,returnSecureToken:!0},a="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD0320JzwvhoywvQv9UPdGkDsLA_UFNREk";!1===c&&(a="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD0320JzwvhoywvQv9UPdGkDsLA_UFNREk"),S.a.post(a,n).then((function(e){var t,c,n;console.log(e),i((t=e.data.idToken,c=e.data.localId,{type:E,idToken:t,userId:c})),i((n=e.data.expiresIn,function(e){setTimeout((function(){e(Z())}),1e3*n)}))})).catch((function(e){var t;i((t=e.response.data.error,{type:G,error:t}))}))}},L=S.a.create({baseURL:"https://xpert-ecommerce.firebaseio.com/"}),Q=function(){return function(e){e({type:T}),L.get("/products.json").then((function(t){var c=[];for(var i in t.data)c.push(Object(k.a)(Object(k.a)({},t.data[i]),{},{id:i}));e({type:R,products:c})})).catch((function(t){e({type:B,error:t})}))}},F=(c(69),function(){return Object(i.jsx)("div",{className:"loader",children:"Loading..."})}),z=function(e){Object(b.a)(c,e);var t=Object(O.a)(c);function c(){var e;Object(h.a)(this,c);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={loginForm:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1,labelName:"Adresa e Email"},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Fjal\xebkalimi"},value:"",validation:{required:!0,minLength:6,isPassword:!0},valid:!1,touched:!1,labelName:"Fjal\xebkalimi"}},formIsValid:!1,loading:!1,isSignup:!1},e.inputChangedHandler=function(t,c){var i=Object(k.a)({},e.state.loginForm),n=Object(k.a)({},i[c]);n.value=t.target.value,n.valid=e.checkValidity(n.value,n.validation),n.touched=!0,i[c]=n;var a=!0;for(var r in i)a=i[r].valid&&a;e.setState({loginForm:i,formIsValid:a})},e.loginHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.loginForm.email.value,e.state.loginForm.password.value,e.state.isSignup)},e}return Object(u.a)(c,[{key:"checkValidity",value:function(e,t){var c=!0;if(t.required&&(c=""!==e.trim()&&c),t.minLength&&(c=e.length>=t.minLength&&c),t.isEmail){c=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&c}if(t.isPassword){c=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(e)&&c}return c}},{key:"render",value:function(){var e=this,t=[];for(var c in this.state.loginForm)t.push({id:c,config:this.state.loginForm[c]});var n=t.map((function(t){return Object(i.jsx)(w,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,labelName:t.config.labelName,passwordMsg:t.config.passwordValidation,changed:function(c){return e.inputChangedHandler(c,t.id)},shouldValidate:t.config.validation,touched:t.config.touched,invalid:!t.config.valid},t.id)}));this.props.loading&&(n=Object(i.jsx)(F,{}));var a=null;return this.props.error&&(a=Object(i.jsx)("p",{className:"loginError",children:this.props.error.message})),Object(i.jsx)(y,{children:Object(i.jsxs)("form",{onSubmit:this.loginHandler,children:[a,Object(i.jsx)("img",{className:"shopLogo",src:f,alt:"Xpert Shop Logo"}),Object(i.jsx)("label",{className:"labelTitle",children:"Ky\xe7uni"}),n,Object(i.jsx)("button",{type:"submit",className:"loginButton",children:"KYCU"}),Object(i.jsx)("label",{className:"labelQuestion",children:"Nuk keni Adrese?"}),Object(i.jsx)("a",{className:"registerLink",href:"/regjistrohu",children:"Rregjistrohuni"})]})})}}]),c}(n.Component),W=Object(o.b)((function(e){return{loading:e.auth.loading,error:e.auth.error}}),(function(e){return{onAuth:function(t,c,i){return e(H(t,c,i))}}}))(z),J=(c(70),function(e){Object(b.a)(c,e);var t=Object(O.a)(c);function c(){var e;Object(h.a)(this,c);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={registerForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Emri"},value:"",validation:{required:!0},valid:!1,touched:!1,labelName:"Emri i Plot\xeb"},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Email"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1,labelName:"Adresa e Email"},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Fjal\xebkalimi"},value:"",validation:{required:!0,minLength:6,isPassword:!0},valid:!1,touched:!1,labelName:"Fjal\xebkalimi",passwordValidation:"Fjal\xebkalimi duhet t\xeb ket\xeb t\xeb pakt\xebn nga nj\xeb karakter special, shkronj\xeb dhe num\xebr. *"},phoneNumber:{elementType:"input",elementConfig:{type:"tel",placeholder:"+3556********",pattern:"[+]{1}[0-9]{3}[0-9]{9}"},value:"",validation:{required:!0},valid:!1,touched:!1,labelName:"Numri i Celularit"},business:{elementType:"select",elementConfig:{options:[{value:"individ",displayValue:"Individ"},{value:"biznes",displayValue:"Biznes"}]},value:"individ",validation:{},valid:!0,labelName:"Zgjidhni Llojin e biznesit"}},formIsValid:!1,loading:!1,isSignup:!0},e.inputChangedHandler=function(t,c){var i=Object(k.a)({},e.state.registerForm),n=Object(k.a)({},i[c]);n.value=t.target.value,n.valid=e.checkValidity(n.value,n.validation),n.touched=!0,i[c]=n;var a=!0;for(var r in i)a=i[r].valid&&a;e.setState({registerForm:i,formIsValid:a})},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.registerForm.email.value,e.state.registerForm.password.value,e.state.isSignup)},e}return Object(u.a)(c,[{key:"checkValidity",value:function(e,t){var c=!0;if(t.required&&(c=""!==e.trim()&&c),t.minLength&&(c=e.length>=t.minLength&&c),t.isEmail){c=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&c}if(t.isPassword){c=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(e)&&c}return c}},{key:"render",value:function(){var e=this,t=[];for(var c in this.state.registerForm)t.push({id:c,config:this.state.registerForm[c]});var n=t.map((function(t){return Object(i.jsx)(w,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,labelName:t.config.labelName,passwordMsg:t.config.passwordValidation,changed:function(c){return e.inputChangedHandler(c,t.id)},shouldValidate:t.config.validation,touched:t.config.touched,invalid:!t.config.valid},t.id)}));this.props.loading&&(n=Object(i.jsx)(F,{}));var a=null;return this.props.error&&(a=Object(i.jsx)("p",{className:"registerError",children:this.props.error.message})),Object(i.jsx)(y,{children:Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:this.submitHandler,children:[a,Object(i.jsx)("label",{className:"labelTitle",children:"Rregjistrohuni p\xebr t\xeb vazhduar"}),Object(i.jsx)("label",{className:"labelSubtitle",children:"B\xebhu pjes\xeb e Xpert eShop"}),n,Object(i.jsx)("label",{className:"labelNotify",children:"Fushat e sh\xebnuara me * jan\xeb t\xeb detyrueshme"}),Object(i.jsx)("label",{className:"labelButtons",children:"DUKE U RREGJISTRUAR, JU KENI R\xcbN\xcb DAKORD ME TERMAT E P\xcbRDORIMIT"}),Object(i.jsx)("button",{className:"loginButton",style:{marginBottom:"15px"},type:"submit",disabled:!this.state.formIsValid,children:"RREGJISTROHU"}),Object(i.jsx)("label",{className:"labelButtons",children:"APO JENI TASHM\xcb T\xcb RREGJISTRUAR"}),Object(i.jsx)("a",{href:"/kycu",className:"loginButton",style:{marginBottom:"15px"},children:"KYCU"})]})})})}}]),c}(n.Component)),P=Object(o.b)((function(e){return{loading:e.auth.loading,error:e.auth.error}}),(function(e){return{onAuth:function(t,c){return e(H(t,c))}}}))(J),V=(c(71),function(e){return Object(i.jsxs)("div",{className:"productContainer",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{src:e.productImage,alt:""}),Object(i.jsx)("h3",{children:e.productTitle}),Object(i.jsx)("p",{children:e.productDescription}),Object(i.jsxs)("p",{className:"price",children:["ALL ",e.productPrice]})]}),Object(i.jsxs)("div",{className:"buttonDiv",children:[Object(i.jsx)("button",{children:"ADD TO CART"}),Object(i.jsx)("button",{className:"buyNow",children:"BUY NOW"})]})]})}),U=(c(72),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAAFBCAYAAAA4zE5oAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTExLTIzVDA5OjMwOjA2KzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMS0yM1QwOTozMToxMiswMTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMS0yM1QwOTozMToxMiswMTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkY2M1ZWJkYy01MTg3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"),X=function(e){Object(b.a)(c,e);var t=Object(O.a)(c);function c(){return Object(h.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"componentDidMount",value:function(){this.props.onFetchProducts()}},{key:"render",value:function(){var e=Object(i.jsx)(F,{});return this.props.loading||(e=this.props.products.map((function(e,t){return Object(i.jsx)(V,{productImage:e.img,productTitle:e.title,productDescription:e.description,productPrice:e.price},t)}))),Object(i.jsxs)(y,{children:[Object(i.jsx)("div",{className:"storeHeaderImage",children:Object(i.jsx)("img",{src:"http://via.placeholder.com/1920x800",alt:""})}),Object(i.jsxs)("div",{className:"categories",children:[Object(i.jsxs)("div",{className:"categoriesHeader",children:[Object(i.jsx)("h1",{children:"Kategorite"}),Object(i.jsxs)(l.b,{to:"/categories",children:["T\xeb gjitha ",Object(i.jsx)("img",{className:"chevron",src:U,alt:""})]})]}),Object(i.jsxs)("div",{className:"categoriesContainer",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"/categories/woman",children:Object(i.jsx)("img",{src:"http://via.placeholder.com/150",alt:""})}),Object(i.jsx)("h3",{children:"Woman"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"/categories/home",children:Object(i.jsx)("img",{src:"http://via.placeholder.com/150",alt:""})}),Object(i.jsx)("h3",{children:"Home"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"/categories/electric",children:Object(i.jsx)("img",{src:"http://via.placeholder.com/150",alt:""})}),Object(i.jsx)("h3",{children:"Electric"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"/categories/bike",children:Object(i.jsx)("img",{src:"http://via.placeholder.com/150",alt:""})}),Object(i.jsx)("h3",{children:"Bike"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"/categories/food",children:Object(i.jsx)("img",{src:"http://via.placeholder.com/150",alt:""})}),Object(i.jsx)("h3",{children:"Food"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"/categories/tech",children:Object(i.jsx)("img",{src:"http://via.placeholder.com/150",alt:""})}),Object(i.jsx)("h3",{children:"Tech"})]})]})]}),Object(i.jsx)("div",{className:"newProducts",children:Object(i.jsxs)("div",{className:"newProductsHeader",children:[Object(i.jsx)("h1",{children:"Produktet e reja"}),Object(i.jsxs)(l.b,{to:"/newproducts",children:["T\xeb gjitha ",Object(i.jsx)("img",{className:"chevron",src:U,alt:""})]})]})}),Object(i.jsx)("div",{className:"products",children:e})]})}}]),c}(n.Component),K=Object(o.b)((function(e){return{products:e.products.products,loading:e.products.loading}}),(function(e){return{onFetchProducts:function(){return e(Q())}}}))(X),q=(c(73),function(e){Object(b.a)(c,e);var t=Object(O.a)(c);function c(){return Object(h.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){return Object(i.jsxs)(y,{children:[Object(i.jsx)("div",{className:"storeHeaderImage",children:Object(i.jsx)("img",{src:"http://via.placeholder.com/1920x800",alt:""})}),Object(i.jsxs)("div",{className:"categories",children:[Object(i.jsx)("div",{className:"categoriesHeader",children:Object(i.jsx)("h1",{children:"Kategorite"})}),Object(i.jsxs)("div",{className:"categoriesContainer",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"/categories/woman",children:Object(i.jsx)("img",{src:"http://via.placeholder.com/150",alt:""})}),Object(i.jsx)("h3",{children:"Woman"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"/categories/home",children:Object(i.jsx)("img",{src:"http://via.placeholder.com/150",alt:""})}),Object(i.jsx)("h3",{children:"Home"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"/categories/electric",children:Object(i.jsx)("img",{src:"http://via.placeholder.com/150",alt:""})}),Object(i.jsx)("h3",{children:"Electric"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"/categories/bike",children:Object(i.jsx)("img",{src:"http://via.placeholder.com/150",alt:""})}),Object(i.jsx)("h3",{children:"Bike"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"/categories/food",children:Object(i.jsx)("img",{src:"http://via.placeholder.com/150",alt:""})}),Object(i.jsx)("h3",{children:"Food"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"/categories/tech",children:Object(i.jsx)("img",{src:"http://via.placeholder.com/150",alt:""})}),Object(i.jsx)("h3",{children:"Tech"})]})]}),Object(i.jsxs)("div",{className:"categoriesContainer",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"/categories/woman",children:Object(i.jsx)("img",{src:"http://via.placeholder.com/150",alt:""})}),Object(i.jsx)("h3",{children:"Books"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"/categories/home",children:Object(i.jsx)("img",{src:"http://via.placeholder.com/150",alt:""})}),Object(i.jsx)("h3",{children:"Clothes"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"/categories/electric",children:Object(i.jsx)("img",{src:"http://via.placeholder.com/150",alt:""})}),Object(i.jsx)("h3",{children:"Accessories"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"/categories/bike",children:Object(i.jsx)("img",{src:"http://via.placeholder.com/150",alt:""})}),Object(i.jsx)("h3",{children:"Backpacks"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"/categories/food",children:Object(i.jsx)("img",{src:"http://via.placeholder.com/150",alt:""})}),Object(i.jsx)("h3",{children:"Scooters"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("a",{href:"/categories/tech",children:Object(i.jsx)("img",{src:"http://via.placeholder.com/150",alt:""})}),Object(i.jsx)("h3",{children:"Phones"})]})]})]})]})}}]),c}(n.Component)),_=(c(74),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAEBCAYAAAA9yOpWAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTExLTIzVDE1OjE5OjMzKzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMS0yM1QxNToyMDoyOCswMTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMS0yM1QxNToyMDoyOCswMTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDphMGQzOTdkMy0wNjc5LThiNDQtYjVkMi1lZDRlY2YxODA3OGQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozMGM2ODU2NC1lZWIyLTVhNDYtOGExZS0wNWEyOWU5ODExNDQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4MDI1NTEyZC1lYThhLTNiNDgtODdiZi1hZTZkNmRjM2NiMmYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjgwMjU1MTJkLWVhOGEtM2I0OC04N2JmLWFlNmQ2ZGMzY2IyZiIgc3RFdnQ6d2hlbj0iMjAyMC0xMS0yM1QxNToxOTozMyswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphMGQzOTdkMy0wNjc5LThiNDQtYjVkMi1lZDRlY2YxODA3OGQiIHN0RXZ0OndoZW49IjIwMjAtMTEtMjNUMTU6MjA6MjgrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6s9ULyAAAMgElEQVR4nO3da4wdZR3H8W9rNaQvCBJFg7wYDKnaYNMQUhAVKkogXGq5iiBJK2DCzYIVsdSmIXIngAgI3nDFgkhRqJYKiLUSLtJwaYhpDKkwNlgJqUgMNg1B4ovnHLuU3Tnn7M4zz8yc7yc52W27O/PP6f72/8w8M89MmT7nAMYxDZgDzAIOAPbovN433jdIJdkCvNz5+I/Ox3VAXnUh08b4u88BxwNHAFml1UhBNsbf5YSg/BAYqaqQKTt1kBuAeRgM1VfeeS2k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"),$=function(e){Object(b.a)(c,e);var t=Object(O.a)(c);function c(){return Object(h.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return Object(i.jsx)(g.a,{to:"/"})}}]),c}(n.Component),ee=Object(o.b)(null,(function(e){return{onLogout:function(){return e(Z)}}}))($),te=function(e){Object(b.a)(c,e);var t=Object(O.a)(c);function c(){return Object(h.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){var e=Object(i.jsxs)("div",{className:"notLoggedIn",children:[Object(i.jsx)("h2",{children:"Ju nuk jeni ky\xe7ur akoma!"}),Object(i.jsxs)("p",{children:[Object(i.jsx)(l.b,{to:"/kycu",children:"Ky\xe7uni"})," ose"," ",Object(i.jsx)(l.b,{to:"/regjistrohu",children:"krijoni"})," nj\xeb llogari p\xebr t\xeb vazhduar m\xeb tutje."]}),Object(i.jsx)("img",{src:_,alt:""})]});return this.props.isAuthenticated&&(e=Object(i.jsxs)("div",{className:"cart",children:[Object(i.jsxs)("div",{className:"cartHeader",children:[Object(i.jsx)("h1",{children:"Shporta juaj"}),Object(i.jsx)("a",{href:"/logout",children:"Dilni"})]}),Object(i.jsxs)("div",{className:"cartContainer",children:[Object(i.jsx)("h3",{children:"Produktet:"}),Object(i.jsx)("p",{children:"Shporta juaj eshte bosh!"}),Object(i.jsx)("button",{children:"Checkout"})]})]})),Object(i.jsx)(y,{children:e})}}]),c}(n.Component),ce=Object(o.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(te),ie=(c(75),function(e){Object(b.a)(c,e);var t=Object(O.a)(c);function c(){return Object(h.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){var e=Object(i.jsxs)("div",{className:"notLoggedIn",children:[Object(i.jsx)("h2",{children:"Ju nuk jeni ky\xe7ur akoma!"}),Object(i.jsxs)("p",{children:[Object(i.jsx)(l.b,{to:"/kycu",children:"Ky\xe7uni"})," ose"," ",Object(i.jsx)(l.b,{to:"/regjistrohu",children:"krijoni"})," nj\xeb llogari p\xebr t\xeb vazhduar m\xeb tutje."]}),Object(i.jsx)("img",{src:_,alt:""})]});return this.props.isAuthenticated&&(e=Object(i.jsxs)("div",{className:"orders",children:[Object(i.jsxs)("div",{className:"ordersHeader",children:[Object(i.jsx)("h1",{children:"Porosit\xeb e juaja"}),Object(i.jsx)("a",{href:"/logout",children:"Dilni"})]}),Object(i.jsxs)("div",{className:"ordersContainer",children:[Object(i.jsx)("h3",{children:"Porosit\xeb:"}),Object(i.jsx)("p",{children:"Ju nuk keni asnj\xeb porosi!"})]})]})),Object(i.jsx)(y,{children:e})}}]),c}(n.Component)),ne=Object(o.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(ie),ae=(c(76),function(e){Object(b.a)(c,e);var t=Object(O.a)(c);function c(){return Object(h.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){var e=Object(i.jsxs)("div",{className:"notLoggedIn",children:[Object(i.jsx)("h2",{children:"Ju nuk jeni ky\xe7ur akoma!"}),Object(i.jsxs)("p",{children:[Object(i.jsx)(l.b,{to:"/kycu",children:"Ky\xe7uni"})," ose"," ",Object(i.jsx)(l.b,{to:"/regjistrohu",children:"krijoni"})," nj\xeb llogari p\xebr t\xeb vazhduar m\xeb tutje."]}),Object(i.jsx)("img",{src:_,alt:""})]});return this.props.isAuthenticated&&(e=Object(i.jsxs)("div",{className:"profile",children:[Object(i.jsxs)("div",{className:"profileHeader",children:[Object(i.jsx)("h1",{children:"Mir\xeb se vjen n\xeb profilin t\xebnd personal!"}),Object(i.jsx)("a",{href:"/logout",children:"Dilni"})]}),Object(i.jsxs)("div",{className:"profileContainer",children:[Object(i.jsx)("h3",{children:"T\xeb dh\xebnat personale:"}),Object(i.jsx)("p",{children:"Ju nuk keni asnj\xeb t\xeb dh\xebn\xeb!"})]})]})),Object(i.jsx)(y,{children:e})}}]),c}(n.Component)),re=Object(o.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(ae),se=(c(77),function(e){Object(b.a)(c,e);var t=Object(O.a)(c);function c(){return Object(h.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){return Object(i.jsx)(y,{children:Object(i.jsxs)(g.d,{children:[Object(i.jsx)(g.b,{path:"/regjistrohu",component:P}),Object(i.jsx)(g.b,{path:"/shporta",component:ce}),Object(i.jsx)(g.b,{path:"/porosite",component:ne}),Object(i.jsx)(g.b,{path:"/profili",component:re}),Object(i.jsx)(g.b,{path:"/kycu",component:W}),Object(i.jsx)(g.b,{path:"/categories",component:q}),Object(i.jsx)(g.b,{path:"/logout",component:ee}),Object(i.jsx)(g.b,{path:"/",exact:!0,component:K})]})})}}]),c}(n.Component)),le=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,79)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),i(e),n(e),a(e),r(e)}))},oe=function(e,t){return Object(k.a)(Object(k.a)({},e),t)},je={products:[],loading:!1},de=function(e,t){return oe(e,{loading:!0})},he=function(e,t){return oe(e,{products:t.products,loading:!1})},ue=function(e,t){return oe(e,{loading:!1})},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return de(e);case R:return he(e,t);case B:return ue(e);default:return e}},Oe={token:null,userId:null,error:null,loading:!1},ge=function(e,t){return oe(e,{error:null,loading:!0})},pe=function(e,t){return oe(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},Ae=function(e,t){return oe(e,{error:t.error,loading:!1})},me=function(e,t){return oe(e,{token:null,userId:null})},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return ge(e);case E:return pe(e,t);case G:return Ae(e,t);case Y:return me(e);default:return e}},Ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d,ve=Object(j.c)({products:be,auth:xe}),De=Object(j.e)(ve,Ie(Object(j.a)(d.a))),Me=Object(i.jsx)(o.a,{store:De,children:Object(i.jsx)(l.a,{children:Object(i.jsx)(se,{})})});s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Me}),document.getElementById("root")),le()}},[[78,1,2]]]);
//# sourceMappingURL=main.afb3ac36.chunk.js.map