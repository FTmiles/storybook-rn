import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as I}from"./index-2yJIXLcc.js";import{c as N}from"./utils-jAU0Cazi.js";import{c as s}from"./createLucideIcon-BBv2SlJB.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]],S=s("Building",b);/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],w=s("CircleHelp",_);/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],H=s("FileText",z);/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],q=s("File",A);/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],E=s("Users",C),F=()=>e.jsx("div",{className:"bg-white",children:e.jsxs("a",{href:"/help-support",className:N("flex items-center gap-2 p-3 hover:bg-gray-100","text-sm text-gray-600","transition-colors duration-200"),children:[e.jsx(w,{size:18}),e.jsx("span",{children:"Help & Support"})]})}),p=I.forwardRef(({applicationMenuItems:a},c)=>e.jsxs("div",{ref:c,className:"flex flex-col w-64 h-full bg-white",children:[e.jsx("div",{className:"flex-none",children:a!=null&&a.length?a.map(t=>e.jsxs("a",{href:t.link,className:N("flex items-center gap-2 p-3 hover:bg-gray-100","text-sm","transition-colors duration-200"),children:[t.icon,e.jsx("span",{children:t.name})]},t.link)):e.jsx("div",{className:"flex items-center gap-2 p-3 text-gray-400",children:e.jsx("span",{className:"text-sm",children:"No menu items available"})})}),e.jsx("div",{className:"flex-1"}),e.jsx("div",{className:"flex-none",children:e.jsx(F,{})})]}));p.displayName="ApplicationSpecificMenu";p.__docgenInfo={description:"",methods:[],displayName:"ApplicationSpecificMenu",props:{applicationMenuItems:{required:!0,tsType:{name:"Array",elements:[{name:"ApplicationMenuItem"}],raw:"ApplicationMenuItem[]"},description:""}}};const B={title:"Components/ApplicationSpecificMenu",component:p,parameters:{layout:"centered",backgrounds:{default:"light",values:[{name:"light",value:"#f5f5f5"}]},docs:{story:{height:"400px"}}},decorators:[a=>e.jsx("div",{style:{height:"400px",overflow:"auto",padding:"1px"},children:e.jsx(a,{})})],tags:["autodocs"]},l=[{name:"Project Info",icon:e.jsx(H,{size:18}),link:"/project/info"},{name:"Members",icon:e.jsx(E,{size:18}),link:"/project/members"},{name:"Companies",icon:e.jsx(S,{size:18}),link:"/project/companies"},{name:"Documents",icon:e.jsx(q,{size:18}),link:"/project/documents"}],n={args:{applicationMenuItems:l}},o={args:{applicationMenuItems:l.map(({icon:a,...c})=>c)}},r={args:{applicationMenuItems:[l[0]]}},i={args:{applicationMenuItems:[]},parameters:{docs:{description:{story:'Shows a "No menu items available" message when the menuItems array is empty.'}}}};var m,d,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    applicationMenuItems: mockMenuItems
  }
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var u,y,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    applicationMenuItems: mockMenuItems.map(({
      icon,
      ...item
    }) => item)
  }
}`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var M,g,k;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    applicationMenuItems: [mockMenuItems[0]]
  }
}`,...(k=(g=r.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var f,j,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    applicationMenuItems: []
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows a "No menu items available" message when the menuItems array is empty.'
      }
    }
  }
}`,...(v=(j=i.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const L=["Default","NoIcons","SingleItem","EmptyMenu"];export{n as Default,i as EmptyMenu,o as NoIcons,r as SingleItem,L as __namedExportsOrder,B as default};
