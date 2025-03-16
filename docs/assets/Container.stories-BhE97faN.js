import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-2yJIXLcc.js";import{c as k}from"./index-DZZQifJx.js";import{c as z}from"./utils-jAU0Cazi.js";/* empty css               */const v=k("flex-1 space-y-4 p-4 py-6",{variants:{size:{full:"w-full",sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl"}},defaultVariants:{size:"full"}}),r=C.forwardRef(({className:n,size:b,bg:t,...f},h)=>{const x=t?`bg-${t}`:"";return e.jsx("div",{className:z(x,v({size:b,className:n})),ref:h,...f})});r.displayName="Container";r.__docgenInfo={description:"",methods:[],displayName:"Container",props:{bg:{required:!1,tsType:{name:"string"},description:""}},composes:["VariantProps"]};const w=["transparent","black","white","cowi","slate-50","slate-100","slate-200","slate-300","slate-400","slate-500","slate-600","slate-700","slate-800","slate-900","slate-950","gray-50","gray-100","gray-200","gray-300","gray-400","gray-500","gray-600","gray-700","gray-800","gray-900","gray-950","zinc-50","zinc-100","zinc-200","zinc-300","zinc-400","zinc-500","zinc-600","zinc-700","zinc-800","zinc-900","zinc-950","neutral-50","neutral-100","neutral-200","neutral-300","neutral-400","neutral-500","neutral-600","neutral-700","neutral-800","neutral-900","neutral-950","stone-50","stone-100","stone-200","stone-300","stone-400","stone-500","stone-600","stone-700","stone-800","stone-900","stone-950","red-50","red-100","red-200","red-300","red-400","red-500","red-600","red-700","red-800","red-900","red-950","orange-50","orange-100","orange-200","orange-300","orange-400","orange-500","orange-600","orange-700","orange-800","orange-900","orange-950","amber-50","amber-100","amber-200","amber-300","amber-400","amber-500","amber-600","amber-700","amber-800","amber-900","amber-950","yellow-50","yellow-100","yellow-200","yellow-300","yellow-400","yellow-500","yellow-600","yellow-700","yellow-800","yellow-900","yellow-950","lime-50","lime-100","lime-200","lime-300","lime-400","lime-500","lime-600","lime-700","lime-800","lime-900","lime-950","green-50","green-100","green-200","green-300","green-400","green-500","green-600","green-700","green-800","green-900","green-950","emerald-50","emerald-100","emerald-200","emerald-300","emerald-400","emerald-500","emerald-600","emerald-700","emerald-800","emerald-900","emerald-950","teal-50","teal-100","teal-200","teal-300","teal-400","teal-500","teal-600","teal-700","teal-800","teal-900","teal-950","cyan-50","cyan-100","cyan-200","cyan-300","cyan-400","cyan-500","cyan-600","cyan-700","cyan-800","cyan-900","cyan-950","sky-50","sky-100","sky-200","sky-300","sky-400","sky-500","sky-600","sky-700","sky-800","sky-900","sky-950","blue-50","blue-100","blue-200","blue-300","blue-400","blue-500","blue-600","blue-700","blue-800","blue-900","blue-950","indigo-50","indigo-100","indigo-200","indigo-300","indigo-400","indigo-500","indigo-600","indigo-700","indigo-800","indigo-900","indigo-950","violet-50","violet-100","violet-200","violet-300","violet-400","violet-500","violet-600","violet-700","violet-800","violet-900","violet-950","purple-50","purple-100","purple-200","purple-300","purple-400","purple-500","purple-600","purple-700","purple-800","purple-900","purple-950","fuchsia-50","fuchsia-100","fuchsia-200","fuchsia-300","fuchsia-400","fuchsia-500","fuchsia-600","fuchsia-700","fuchsia-800","fuchsia-900","fuchsia-950","pink-50","pink-100","pink-200","pink-300","pink-400","pink-500","pink-600","pink-700","pink-800","pink-900","pink-950","rose-50","rose-100","rose-200","rose-300","rose-400","rose-500","rose-600","rose-700","rose-800","rose-900","rose-950"],V={title:"Components/Layout/Container",component:r,parameters:{layout:"padded",docs:{description:{component:"A container is a layout component that wraps content in a max-width container. It is used to center and constrain the width of content."}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["full","sm","md","lg","xl"],description:"Size of the container",table:{type:{summary:"string"},defaultValue:{summary:"full"}}},bg:{control:{type:"select"},description:'Background color of the container, use tailwind color palette without bg- prefix. Ex. "blue-100" for a light blue background. Also supports custom hex values.',options:w}}},a={args:{bg:"slate-100"},render:n=>e.jsx("div",{className:"space-y-2",children:e.jsx(r,{...n,children:"default container"})})},o={args:{bg:"slate-100"},render:n=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{...n,children:"default container"}),e.jsx(r,{size:"xl",...n,children:"xl container"}),e.jsx(r,{size:"lg",...n,children:"lg container"}),e.jsx(r,{size:"md",...n,children:"md container"}),e.jsx(r,{size:"sm",...n,children:"sm"})]})},s={args:{},render:n=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{bg:"[#F5F5F5]",children:"custom bg color"}),e.jsx(r,{bg:"red-100",children:"red color"}),e.jsx(r,{bg:"blue-100",children:"blue color"}),e.jsx(r,{bg:"teal-100",children:"teal color"}),e.jsx(r,{bg:"amber-100",children:"amber color"}),e.jsx(r,{bg:"stone-100",children:"stone color"})]})};var l,i,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    bg: "slate-100"
  },
  render: args => <div className="space-y-2">\r
      <Container {...args}>\r
        default container\r
      </Container>\r
    </div>
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,m,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    bg: "slate-100"
  },
  render: args => <div className="space-y-2">\r
      <Container {...args}>\r
        default container\r
      </Container>\r
      <Container size="xl" {...args}>\r
        xl container\r
      </Container>\r
      <Container size="lg" {...args}>\r
        lg container\r
      </Container>\r
      <Container size="md" {...args}>\r
        md container\r
      </Container>\r
      <Container size="sm" {...args}>\r
        sm\r
      </Container>\r
    </div>
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,p,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="space-y-2">\r
      <Container bg="[#F5F5F5]">\r
        custom bg color\r
      </Container>\r
      <Container bg="red-100">\r
        red color\r
      </Container>\r
      <Container bg="blue-100">\r
        blue color\r
      </Container>\r
      <Container bg="teal-100">\r
        teal color\r
      </Container>\r
      <Container bg="amber-100">\r
        amber color\r
      </Container>\r
      <Container bg="stone-100">\r
        stone color\r
      </Container>\r
    </div>
}`,...(y=(p=s.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const _=["Default","Size","Background"];export{s as Background,a as Default,o as Size,_ as __namedExportsOrder,V as default};
