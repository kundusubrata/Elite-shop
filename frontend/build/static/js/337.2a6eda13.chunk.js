"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[337],{3337:(e,a,s)=>{s.r(a),s.d(a,{default:()=>o});var l=s(5043),r=s(3168),n=s(2339),t=s(3003),i=s(3216),m=s(579);const d=(e,a)=>{const[s,r]=(0,l.useState)(e);return(0,l.useEffect)((()=>{const s=setTimeout((()=>{r(e)}),a);return()=>{clearTimeout(s)}}),[e,a]),s},o=()=>{const[e,a]=(0,l.useState)({name:"",email:"",password:""}),{name:s,email:o,password:c}=e,u=(0,i.Zp)(),[h,{isLoading:f,error:p}]=(0,r.ge)(),{isAuthenticated:b}=(0,t.d4)((e=>e.auth)),x=1e3,j=d(s,x),v=d(o,x),N=d(c,x);(0,l.useEffect)((()=>{var e;(b&&u("/"),p)&&n.Ay.error(null===p||void 0===p||null===(e=p.data)||void 0===e?void 0:e.message)}),[p,b,u]);const g=s=>{a({...e,[s.target.name]:s.target.value})};return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"row wrapper",children:(0,m.jsx)("div",{className:"col-10 col-lg-5",children:(0,m.jsxs)("form",{className:"shadow rounded bg-body",onSubmit:e=>{e.preventDefault();h({name:s,email:o,password:c})},children:[(0,m.jsx)("h2",{className:"mb-4",children:"Register"}),(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("label",{htmlFor:"name_field",className:"form-label",children:"Name"}),(0,m.jsx)("input",{type:"text",id:"name_field",className:"form-control",name:"name",value:j,onChange:g})]}),(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("label",{htmlFor:"email_field",className:"form-label",children:"Email"}),(0,m.jsx)("input",{type:"email",id:"email_field",className:"form-control",name:"email",value:v,onChange:g})]}),(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("label",{htmlFor:"password_field",className:"form-label",children:"Password"}),(0,m.jsx)("input",{type:"password",id:"password_field",className:"form-control",name:"password",value:N,onChange:g})]}),(0,m.jsx)("button",{id:"register_button",type:"submit",className:"btn w-100 py-2",disabled:f,children:f?"Creating...":"REGISTER"})]})})})})}}}]);
//# sourceMappingURL=337.2a6eda13.chunk.js.map