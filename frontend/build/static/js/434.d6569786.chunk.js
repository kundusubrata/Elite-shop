"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[434],{9269:(e,s,l)=>{l.d(s,{A:()=>r});l(5043);var d=l(1591),i=l(579);const r=e=>{let{title:s}=e;return(0,i.jsx)(d.m,{children:(0,i.jsx)("title",{children:"".concat(s," - Elite Shop")})})}},8434:(e,s,l)=>{l.r(s),l.d(s,{default:()=>h});var d=l(5043),i=l(3216),r=l(5475),t=l(3567),n=l(2339),o=l(9269),c=l(8856),a=l(579);const h=()=>{const e=(0,i.g)(),{data:s,isLoading:l,error:h}=(0,c.Ae)(null===e||void 0===e?void 0:e.id),j=(null===s||void 0===s?void 0:s.order)||{},{shippingInfo:x,orderItems:v,paymentInfo:m,user:u,totalAmount:p,orderStatus:b}=j,N="paid"===(null===m||void 0===m?void 0:m.status);return(0,d.useEffect)((()=>{var e;h&&n.oR.error(null===h||void 0===h||null===(e=h.data)||void 0===e?void 0:e.message)}),[h]),l?(0,a.jsx)(t.A,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.A,{title:"Order Details"}),(0,a.jsx)("div",{className:"row d-flex justify-content-center",children:(0,a.jsxs)("div",{className:"col-12 col-lg-9 mt-5 order-details",children:[(0,a.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,a.jsx)("h3",{className:"mt-5 mb-4",children:"Your Order Details"}),(0,a.jsxs)("a",{className:"btn btn-success",href:"/invoice/order/order-id",children:[(0,a.jsx)("i",{className:"fa fa-print"})," Invoice"]})]}),(0,a.jsx)("table",{className:"table table-striped table-bordered",children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"row",children:"ID"}),(0,a.jsx)("td",{children:null===j||void 0===j?void 0:j._id})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"row",children:"Status"}),(0,a.jsx)("td",{className:String(b).includes("Delivered")?"greenColor":"redColor",children:(0,a.jsx)("b",{children:b})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"row",children:"Date"}),(0,a.jsx)("td",{children:new Date(null===j||void 0===j?void 0:j.createdAt).toLocaleString("en-US")})]})]})}),(0,a.jsx)("h3",{className:"mt-5 mb-4",children:"Shipping Info"}),(0,a.jsx)("table",{className:"table table-striped table-bordered",children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"row",children:"Name"}),(0,a.jsx)("td",{children:u.name})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"row",children:"Phone No"}),(0,a.jsx)("td",{children:null===x||void 0===x?void 0:x.phoneNo})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"row",children:"Address"}),(0,a.jsxs)("td",{children:[null===x||void 0===x?void 0:x.address,", ",null===x||void 0===x?void 0:x.city,","," ",null===x||void 0===x?void 0:x.zipCode,", ",null===x||void 0===x?void 0:x.country]})]})]})}),(0,a.jsx)("h3",{className:"mt-5 mb-4",children:"Payment Info"}),(0,a.jsx)("table",{className:"table table-striped table-bordered",children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"row",children:"Status"}),(0,a.jsx)("td",{className:N?"greenColor":"redColor",children:(0,a.jsx)("b",{children:null===m||void 0===m?void 0:m.status})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"row",children:"Method"}),(0,a.jsx)("td",{children:null===j||void 0===j?void 0:j.paymentMethod})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"row",children:"Stripe ID"}),(0,a.jsx)("td",{children:(null===m||void 0===m?void 0:m.id)||"Nill"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"row",children:"Amount Paid"}),(0,a.jsxs)("td",{children:["$",p]})]})]})}),(0,a.jsx)("h3",{className:"mt-5 my-4",children:"Order Items:"}),(0,a.jsx)("hr",{}),(0,a.jsx)("div",{className:"cart-item my-1",children:null===v||void 0===v?void 0:v.map((e=>(0,a.jsxs)("div",{className:"row my-5",children:[(0,a.jsx)("div",{className:"col-4 col-lg-2",children:(0,a.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:null===e||void 0===e?void 0:e.name,height:"45",width:"65"})}),(0,a.jsx)("div",{className:"col-5 col-lg-5",children:(0,a.jsx)(r.N_,{to:"/product/".concat(null===e||void 0===e?void 0:e.product),children:null===e||void 0===e?void 0:e.name})}),(0,a.jsx)("div",{className:"col-4 col-lg-2 mt-4 mt-lg-0",children:(0,a.jsxs)("p",{children:["$",null===e||void 0===e?void 0:e.price]})}),(0,a.jsx)("div",{className:"col-4 col-lg-3 mt-4 mt-lg-0",children:(0,a.jsxs)("p",{children:[null===e||void 0===e?void 0:e.quantity," Piece(s)"]})})]})))}),(0,a.jsx)("hr",{})]})})]})}}}]);
//# sourceMappingURL=434.d6569786.chunk.js.map