import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as J}from"./index-2yJIXLcc.js";import{R as U,T as I,P as T,C as k,I as c}from"./index-Mvarz6nI.js";import{c as m}from"./utils-jAU0Cazi.js";import{c as j}from"./createLucideIcon-BBv2SlJB.js";import"./index-BosypV8y.js";import"./index-D-es_Zdh.js";import"./index-Bn05qqr6.js";import"./index-B89wOMCf.js";import"./index-DRZIsaYl.js";import"./index-CUGm-QHQ.js";import"./Combination-DNxA-CMp.js";import"./index-BxnTjRx8.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],S=j("LogOut",D);/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],C=j("User",_),L=({name:r,photoUrl:s,initials:n})=>s?e.jsx("img",{src:s,alt:r,className:"h-10 w-10 rounded-full object-cover"}):e.jsx("div",{className:"h-10 w-10 rounded-full bg-cowi flex items-center justify-center",children:e.jsx("span",{className:"text-sm font-medium text-white",children:n})}),i=J.forwardRef(({name:r,initials:s,email:n,photoUrl:w,profileUrl:N,onLogout:v},b)=>e.jsx("div",{ref:b,className:"relative inline-block",children:e.jsxs(U,{children:[e.jsx(I,{asChild:!0,children:e.jsx("button",{className:"flex items-center gap-2 rounded-full p-1 outline-none hover:bg-gray-100","aria-label":"User menu",children:e.jsx(L,{name:r,initials:s,photoUrl:w})})}),e.jsx(T,{children:e.jsxs(k,{className:"w-56 rounded-md bg-white p-1 shadow-lg ring-1 ring-gray-200 ring-opacity-5",align:"end",children:[e.jsxs("div",{className:"px-3 py-2",children:[e.jsx("p",{className:"text-sm font-medium text-gray-900",children:r}),e.jsx("p",{className:"text-xs text-gray-500",children:n})]}),e.jsx(c,{asChild:!0,children:e.jsxs("a",{href:N,className:m("flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm","text-gray-700 hover:bg-gray-100 hover:text-gray-900","outline-none cursor-pointer"),children:[e.jsx(C,{className:"h-4 w-4"}),"Profile"]})}),e.jsx(c,{asChild:!0,children:e.jsxs("button",{onClick:v,className:m("flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm","text-gray-700 hover:bg-gray-100 hover:text-gray-900","outline-none cursor-pointer"),children:[e.jsx(S,{className:"h-4 w-4"}),"Sign out"]})})]})})]})}));i.displayName="UserInfo";i.__docgenInfo={description:"",methods:[],displayName:"UserInfo",props:{name:{required:!0,tsType:{name:"string"},description:""},initials:{required:!0,tsType:{name:"string"},description:""},email:{required:!0,tsType:{name:"string"},description:""},photoUrl:{required:!1,tsType:{name:"string"},description:""},profileUrl:{required:!1,tsType:{name:"string"},description:""},onLogout:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const F={title:"Components/UserInfo",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onLogout:{action:"logout"}}},t={args:{name:"John Doe",initials:"JD",email:"jode@cowi.com",photoUrl:"https://i.pravatar.cc/300",profileUrl:"https://myaccount.microsoft.com/"}},o={args:{initials:"JD",name:"John Doe",email:"jode@cowi.com"}},a={args:{initials:"JSB",name:"Johann Sebastian Bach",email:"jobh@cowi.com"}};var l,d,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: "John Doe",
    initials: "JD",
    email: "jode@cowi.com",
    photoUrl: "https://i.pravatar.cc/300",
    profileUrl: "https://myaccount.microsoft.com/"
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,h,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    initials: "JD",
    name: "John Doe",
    email: "jode@cowi.com"
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,y,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    initials: "JSB",
    name: "Johann Sebastian Bach",
    email: "jobh@cowi.com"
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const G=["WithPhoto","WithInitials","LongName"];export{a as LongName,o as WithInitials,t as WithPhoto,G as __namedExportsOrder,F as default};
