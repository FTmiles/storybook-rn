import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as z}from"./index-2yJIXLcc.js";import{D as P,a as R,b as q,c as E}from"./index-Mvarz6nI.js";import{c as w}from"./utils-jAU0Cazi.js";import{C as F}from"./chevron-down-Bi2wcwGf.js";import{c as L}from"./createLucideIcon-BBv2SlJB.js";import"./index-BosypV8y.js";import"./index-D-es_Zdh.js";import"./index-Bn05qqr6.js";import"./index-B89wOMCf.js";import"./index-DRZIsaYl.js";import"./index-CUGm-QHQ.js";import"./Combination-DNxA-CMp.js";import"./index-BxnTjRx8.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],G=L("ChevronRight",V),x=({svgString:e,color:i})=>{if(!e)return null;const g=i?e.replace(/stroke="currentColor"/,`stroke="${i}"`):e;return o.jsx("span",{dangerouslySetInnerHTML:{__html:g}})},W=({isOpen:e})=>o.jsx("div",{className:"relative w-3 h-3",children:e?o.jsx(F,{className:"w-3 h-3 text-gray-400"}):o.jsx(G,{className:"w-3 h-3 text-gray-400"})}),u=({applications:e,selectedApplication:i,onApplicationChange:g})=>{const H=window.location.pathname,a=e.map(n=>({applicationName:n.applicationName||"",icon:n.icon||"",iconColor:n.iconColor||"#000000",linkToApplication:n.linkToApplication||""})).sort((n,t)=>n.applicationName.localeCompare(t.applicationName)),p=(()=>{if(i!=null&&i.linkToApplication){const t=a.findIndex(h=>h.linkToApplication===i.linkToApplication);if(t>=0)return t}if(i!=null&&i.applicationName){const t=a.findIndex(h=>h.applicationName===i.applicationName);if(t>=0)return t}const n=a.findIndex(t=>H.startsWith(t.linkToApplication));return n>=0?n:0})(),[_,O]=z.useState(!1);return e.length===0?o.jsx("div",{className:"flex items-center text-sm bg-white border border-gray-200 w-full gap-2 p-3",children:o.jsx("span",{className:"text-sm",children:"No applications available"})}):o.jsxs(P,{onOpenChange:O,children:[o.jsxs(R,{className:"flex items-center bg-white border border-gray-200 w-full gap-2 p-3 focus:bg-gray focus:outline-none",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[a[p].icon&&o.jsx(x,{svgString:a[p].icon,color:a[p].iconColor}),o.jsx("span",{className:"text-sm",children:a[p].applicationName})]}),o.jsx(W,{isOpen:_})]}),o.jsx(q,{className:w("z-50 w-[220px] overflow-hidden border border-gray-200 rounded-md bg-popover mt-2 mb-4","shadow-lg"),children:a.map((n,t)=>o.jsx(E,{className:w("cursor-pointer bg-white border-b border-gray-200 hover:bg-gray-100 last:border-b-0 focus:outline-none",p===t&&"bg-gray-200"),asChild:!0,children:o.jsxs("a",{href:n.linkToApplication,className:"flex items-center gap-2 p-3",onClick:()=>{g(n)},children:[n.icon&&o.jsx(x,{svgString:n.icon,color:n.iconColor})," ",o.jsx("span",{className:"text-sm",children:n.applicationName})]})},n.linkToApplication))})]})};u.displayName="ApplicationsDropdown";u.__docgenInfo={description:"",methods:[],displayName:"ApplicationsDropdown",props:{applications:{required:!0,tsType:{name:"Array",elements:[{name:"Application"}],raw:"Application[]"},description:""},selectedApplication:{required:!1,tsType:{name:"Application"},description:""},onApplicationChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(app: Application) => void",signature:{arguments:[{type:{name:"Application"},name:"app"}],return:{name:"void"}}},description:""}}};const po={title:"Components/ApplicationsDropdown",component:u,parameters:{layout:"centered",viewport:{defaultViewport:"desktop"},docs:{description:{component:"A dropdown component for switching between applications. Component width will be set in the parent CombinedNavigation component."},story:{height:"350px",width:"100%"}}},decorators:[e=>o.jsx("div",{style:{minHeight:"350px",width:"500px",paddingTop:"10px",paddingLeft:"10px"},children:o.jsx(e,{})})],tags:["autodocs"],argTypes:{applications:{control:"object",description:"Array of applications to display in the navigator"},selectedApplication:{control:"object",description:"The initially selected application"}}},r=[{applicationName:"Account Admin",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',iconColor:"#60A5FA",linkToApplication:"/account-admin"},{applicationName:"Product Overview",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',iconColor:"#A3E635",linkToApplication:"/product-overview"},{applicationName:"Project Admin",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>',iconColor:"#D97706",linkToApplication:"/project-admin"},{applicationName:"Record Manager",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path></svg>',iconColor:"#FF4444",linkToApplication:"/record-manager"},{applicationName:"Structural Designer",icon:'<svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none" stroke="currentColor" stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-stack"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6l-8 4l8 4l8 -4l-8 -4" /><path d="M4 14l8 4l8 -4" /></svg>',iconColor:"#8B5CF6",linkToApplication:"/structural-designer"}],s={args:{applications:r,selectedApplication:r[0]},parameters:{docs:{description:{story:"Basic usage example with multiple applications."},source:{language:"tsx",code:`
import { ApplicationsDropdown } from "@your-org/ui-components";

const applications = [
  {
    applicationName: "Record Manager",
    icon: "<svg>...</svg>",
    linkToApplication: "/record-manager"
  },
  {
    applicationName: "Project Admin",
    icon: "<svg>...</svg>",
    linkToApplication: "/project-admin"
  }
];

export default function App() {
  return (
    <ApplicationsDropdown
      applications={applications}
      selectedApplication={applications[0]}
    />
  );
}`}}}},c={args:{applications:r.slice(0,1),selectedApplication:r[0]}},l={args:{applications:r,selectedApplication:r[4]}},d={args:{applications:r.map(({icon:e,...i})=>i),selectedApplication:r[2]}},m={args:{applications:[]}};var A,v,k;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    applications: mockApplications,
    selectedApplication: mockApplications[0]
  },
  parameters: {
    docs: {
      description: {
        story: "Basic usage example with multiple applications."
      },
      source: {
        language: "tsx",
        code: \`
import { ApplicationsDropdown } from "@your-org/ui-components";

const applications = [
  {
    applicationName: "Record Manager",
    icon: "<svg>...</svg>",
    linkToApplication: "/record-manager"
  },
  {
    applicationName: "Project Admin",
    icon: "<svg>...</svg>",
    linkToApplication: "/project-admin"
  }
];

export default function App() {
  return (
    <ApplicationsDropdown
      applications={applications}
      selectedApplication={applications[0]}
    />
  );
}\`
      }
    }
  }
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var f,N,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    applications: mockApplications.slice(0, 1),
    selectedApplication: mockApplications[0]
  }
}`,...(y=(N=c.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var j,C,b;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    applications: mockApplications,
    selectedApplication: mockApplications[4]
  }
}`,...(b=(C=l.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var T,D,M;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    applications: mockApplications.map(({
      icon,
      ...app
    }) => app),
    selectedApplication: mockApplications[2]
  }
}`,...(M=(D=d.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var I,S,B;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    applications: []
  }
}`,...(B=(S=m.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const so=["Default","SingleApplication","OtherApplication","NoIcons","NoApplications"];export{s as Default,m as NoApplications,d as NoIcons,l as OtherApplication,c as SingleApplication,so as __namedExportsOrder,po as default};
