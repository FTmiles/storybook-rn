import{r as a}from"./index-2yJIXLcc.js";import{c as pe,P as A,b as g,a as Se,d as me,e as gn}from"./index-BosypV8y.js";import{u as K,S as wn,c as Pe}from"./index-B89wOMCf.js";import{c as De,u as ye,a as Te,R as hn,A as _n,C as xn,b as Cn}from"./index-DRZIsaYl.js";import{u as de,P as Rn,h as In,a as En,R as bn,F as Sn,D as Pn}from"./Combination-DNxA-CMp.js";import{P as oe}from"./index-BxnTjRx8.js";import{j as c}from"./jsx-runtime-D_zvdyIk.js";var ie="rovingFocusGroup.onEntryFocus",Dn={bubbles:!1,cancelable:!0},te="RovingFocusGroup",[le,Ae,yn]=De(te),[Tn,Ne]=pe(te,[yn]),[An,Nn]=Tn(te),Oe=a.forwardRef((e,o)=>c.jsx(le.Provider,{scope:e.__scopeRovingFocusGroup,children:c.jsx(le.Slot,{scope:e.__scopeRovingFocusGroup,children:c.jsx(On,{...e,ref:o})})}));Oe.displayName=te;var On=a.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:n,orientation:t,loop:r=!1,dir:s,currentTabStopId:i,defaultCurrentTabStopId:d,onCurrentTabStopIdChange:m,onEntryFocus:v,preventScrollOnEntryFocus:f=!1,...u}=e,p=a.useRef(null),w=K(o,p),M=ye(s),[h=null,b]=Se({prop:i,defaultProp:d,onChange:m}),[_,R]=a.useState(!1),y=me(v),Z=Ae(n),U=a.useRef(!1),[q,N]=a.useState(0);return a.useEffect(()=>{const x=p.current;if(x)return x.addEventListener(ie,y),()=>x.removeEventListener(ie,y)},[y]),c.jsx(An,{scope:n,orientation:t,dir:M,loop:r,currentTabStopId:h,onItemFocus:a.useCallback(x=>b(x),[b]),onItemShiftTab:a.useCallback(()=>R(!0),[]),onFocusableItemAdd:a.useCallback(()=>N(x=>x+1),[]),onFocusableItemRemove:a.useCallback(()=>N(x=>x-1),[]),children:c.jsx(A.div,{tabIndex:_||q===0?-1:0,"data-orientation":t,...u,ref:w,style:{outline:"none",...e.style},onMouseDown:g(e.onMouseDown,()=>{U.current=!0}),onFocus:g(e.onFocus,x=>{const k=!U.current;if(x.target===x.currentTarget&&k&&!_){const O=new CustomEvent(ie,Dn);if(x.currentTarget.dispatchEvent(O),!O.defaultPrevented){const $=Z().filter(P=>P.focusable),B=$.find(P=>P.active),J=$.find(P=>P.id===h),se=[B,J,...$].filter(Boolean).map(P=>P.ref.current);ke(se,f)}}U.current=!1}),onBlur:g(e.onBlur,()=>R(!1))})})}),Fe="RovingFocusGroupItem",je=a.forwardRef((e,o)=>{const{__scopeRovingFocusGroup:n,focusable:t=!0,active:r=!1,tabStopId:s,...i}=e,d=de(),m=s||d,v=Nn(Fe,n),f=v.currentTabStopId===m,u=Ae(n),{onFocusableItemAdd:p,onFocusableItemRemove:w}=v;return a.useEffect(()=>{if(t)return p(),()=>w()},[t,p,w]),c.jsx(le.ItemSlot,{scope:n,id:m,focusable:t,active:r,children:c.jsx(A.span,{tabIndex:f?0:-1,"data-orientation":v.orientation,...i,ref:o,onMouseDown:g(e.onMouseDown,M=>{t?v.onItemFocus(m):M.preventDefault()}),onFocus:g(e.onFocus,()=>v.onItemFocus(m)),onKeyDown:g(e.onKeyDown,M=>{if(M.key==="Tab"&&M.shiftKey){v.onItemShiftTab();return}if(M.target!==M.currentTarget)return;const h=kn(M,v.orientation,v.dir);if(h!==void 0){if(M.metaKey||M.ctrlKey||M.altKey||M.shiftKey)return;M.preventDefault();let _=u().filter(R=>R.focusable).map(R=>R.ref.current);if(h==="last")_.reverse();else if(h==="prev"||h==="next"){h==="prev"&&_.reverse();const R=_.indexOf(M.currentTarget);_=v.loop?Gn(_,R+1):_.slice(R+1)}setTimeout(()=>ke(_))}})})})});je.displayName=Fe;var Fn={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function jn(e,o){return o!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function kn(e,o,n){const t=jn(e.key,n);if(!(o==="vertical"&&["ArrowLeft","ArrowRight"].includes(t))&&!(o==="horizontal"&&["ArrowUp","ArrowDown"].includes(t)))return Fn[t]}function ke(e,o=!1){const n=document.activeElement;for(const t of e)if(t===n||(t.focus({preventScroll:o}),document.activeElement!==n))return}function Gn(e,o){return e.map((n,t)=>e[(o+t)%e.length])}var Ln=Oe,Kn=je,fe=["Enter"," "],Un=["ArrowDown","PageUp","Home"],Ge=["ArrowUp","PageDown","End"],$n=[...Un,...Ge],Bn={ltr:[...fe,"ArrowRight"],rtl:[...fe,"ArrowLeft"]},Vn={ltr:["ArrowLeft"],rtl:["ArrowRight"]},W="Menu",[X,Yn,Xn]=De(W),[F,Le]=pe(W,[Xn,Te,Ne]),re=Te(),Ke=Ne(),[Hn,j]=F(W),[Wn,z]=F(W),Ue=e=>{const{__scopeMenu:o,open:n=!1,children:t,dir:r,onOpenChange:s,modal:i=!0}=e,d=re(o),[m,v]=a.useState(null),f=a.useRef(!1),u=me(s),p=ye(r);return a.useEffect(()=>{const w=()=>{f.current=!0,document.addEventListener("pointerdown",M,{capture:!0,once:!0}),document.addEventListener("pointermove",M,{capture:!0,once:!0})},M=()=>f.current=!1;return document.addEventListener("keydown",w,{capture:!0}),()=>{document.removeEventListener("keydown",w,{capture:!0}),document.removeEventListener("pointerdown",M,{capture:!0}),document.removeEventListener("pointermove",M,{capture:!0})}},[]),c.jsx(hn,{...d,children:c.jsx(Hn,{scope:o,open:n,onOpenChange:u,content:m,onContentChange:v,children:c.jsx(Wn,{scope:o,onClose:a.useCallback(()=>u(!1),[u]),isUsingKeyboardRef:f,dir:p,modal:i,children:t})})})};Ue.displayName=W;var zn="MenuAnchor",ve=a.forwardRef((e,o)=>{const{__scopeMenu:n,...t}=e,r=re(n);return c.jsx(_n,{...r,...t,ref:o})});ve.displayName=zn;var Me="MenuPortal",[Zn,$e]=F(Me,{forceMount:void 0}),Be=e=>{const{__scopeMenu:o,forceMount:n,children:t,container:r}=e,s=j(Me,o);return c.jsx(Zn,{scope:o,forceMount:n,children:c.jsx(oe,{present:n||s.open,children:c.jsx(Rn,{asChild:!0,container:r,children:t})})})};Be.displayName=Me;var E="MenuContent",[qn,ge]=F(E),Ve=a.forwardRef((e,o)=>{const n=$e(E,e.__scopeMenu),{forceMount:t=n.forceMount,...r}=e,s=j(E,e.__scopeMenu),i=z(E,e.__scopeMenu);return c.jsx(X.Provider,{scope:e.__scopeMenu,children:c.jsx(oe,{present:t||s.open,children:c.jsx(X.Slot,{scope:e.__scopeMenu,children:i.modal?c.jsx(Jn,{...r,ref:o}):c.jsx(Qn,{...r,ref:o})})})})}),Jn=a.forwardRef((e,o)=>{const n=j(E,e.__scopeMenu),t=a.useRef(null),r=K(o,t);return a.useEffect(()=>{const s=t.current;if(s)return In(s)},[]),c.jsx(we,{...e,ref:r,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:g(e.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),Qn=a.forwardRef((e,o)=>{const n=j(E,e.__scopeMenu);return c.jsx(we,{...e,ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),we=a.forwardRef((e,o)=>{const{__scopeMenu:n,loop:t=!1,trapFocus:r,onOpenAutoFocus:s,onCloseAutoFocus:i,disableOutsidePointerEvents:d,onEntryFocus:m,onEscapeKeyDown:v,onPointerDownOutside:f,onFocusOutside:u,onInteractOutside:p,onDismiss:w,disableOutsideScroll:M,...h}=e,b=j(E,n),_=z(E,n),R=re(n),y=Ke(n),Z=Yn(n),[U,q]=a.useState(null),N=a.useRef(null),x=K(o,N,b.onContentChange),k=a.useRef(0),O=a.useRef(""),$=a.useRef(0),B=a.useRef(null),J=a.useRef("right"),Q=a.useRef(0),se=M?bn:a.Fragment,P=M?{as:wn,allowPinchZoom:!0}:void 0,Mn=l=>{var L,Ie;const I=O.current+l,S=Z().filter(D=>!D.disabled),T=document.activeElement,ce=(L=S.find(D=>D.ref.current===T))==null?void 0:L.textValue,ue=S.map(D=>D.textValue),Re=fo(ue,I,ce),V=(Ie=S.find(D=>D.textValue===Re))==null?void 0:Ie.ref.current;(function D(Ee){O.current=Ee,window.clearTimeout(k.current),Ee!==""&&(k.current=window.setTimeout(()=>D(""),1e3))})(I),V&&setTimeout(()=>V.focus())};a.useEffect(()=>()=>window.clearTimeout(k.current),[]),En();const G=a.useCallback(l=>{var S,T;return J.current===((S=B.current)==null?void 0:S.side)&&mo(l,(T=B.current)==null?void 0:T.area)},[]);return c.jsx(qn,{scope:n,searchRef:O,onItemEnter:a.useCallback(l=>{G(l)&&l.preventDefault()},[G]),onItemLeave:a.useCallback(l=>{var I;G(l)||((I=N.current)==null||I.focus(),q(null))},[G]),onTriggerLeave:a.useCallback(l=>{G(l)&&l.preventDefault()},[G]),pointerGraceTimerRef:$,onPointerGraceIntentChange:a.useCallback(l=>{B.current=l},[]),children:c.jsx(se,{...P,children:c.jsx(Sn,{asChild:!0,trapped:r,onMountAutoFocus:g(s,l=>{var I;l.preventDefault(),(I=N.current)==null||I.focus({preventScroll:!0})}),onUnmountAutoFocus:i,children:c.jsx(Pn,{asChild:!0,disableOutsidePointerEvents:d,onEscapeKeyDown:v,onPointerDownOutside:f,onFocusOutside:u,onInteractOutside:p,onDismiss:w,children:c.jsx(Ln,{asChild:!0,...y,dir:_.dir,orientation:"vertical",loop:t,currentTabStopId:U,onCurrentTabStopIdChange:q,onEntryFocus:g(m,l=>{_.isUsingKeyboardRef.current||l.preventDefault()}),preventScrollOnEntryFocus:!0,children:c.jsx(xn,{role:"menu","aria-orientation":"vertical","data-state":sn(b.open),"data-radix-menu-content":"",dir:_.dir,...R,...h,ref:x,style:{outline:"none",...h.style},onKeyDown:g(h.onKeyDown,l=>{const S=l.target.closest("[data-radix-menu-content]")===l.currentTarget,T=l.ctrlKey||l.altKey||l.metaKey,ce=l.key.length===1;S&&(l.key==="Tab"&&l.preventDefault(),!T&&ce&&Mn(l.key));const ue=N.current;if(l.target!==ue||!$n.includes(l.key))return;l.preventDefault();const V=Z().filter(L=>!L.disabled).map(L=>L.ref.current);Ge.includes(l.key)&&V.reverse(),io(V)}),onBlur:g(e.onBlur,l=>{l.currentTarget.contains(l.target)||(window.clearTimeout(k.current),O.current="")}),onPointerMove:g(e.onPointerMove,H(l=>{const I=l.target,S=Q.current!==l.clientX;if(l.currentTarget.contains(I)&&S){const T=l.clientX>Q.current?"right":"left";J.current=T,Q.current=l.clientX}}))})})})})})})});Ve.displayName=E;var eo="MenuGroup",he=a.forwardRef((e,o)=>{const{__scopeMenu:n,...t}=e;return c.jsx(A.div,{role:"group",...t,ref:o})});he.displayName=eo;var no="MenuLabel",Ye=a.forwardRef((e,o)=>{const{__scopeMenu:n,...t}=e;return c.jsx(A.div,{...t,ref:o})});Ye.displayName=no;var ee="MenuItem",be="menu.itemSelect",ae=a.forwardRef((e,o)=>{const{disabled:n=!1,onSelect:t,...r}=e,s=a.useRef(null),i=z(ee,e.__scopeMenu),d=ge(ee,e.__scopeMenu),m=K(o,s),v=a.useRef(!1),f=()=>{const u=s.current;if(!n&&u){const p=new CustomEvent(be,{bubbles:!0,cancelable:!0});u.addEventListener(be,w=>t==null?void 0:t(w),{once:!0}),gn(u,p),p.defaultPrevented?v.current=!1:i.onClose()}};return c.jsx(Xe,{...r,ref:m,disabled:n,onClick:g(e.onClick,f),onPointerDown:u=>{var p;(p=e.onPointerDown)==null||p.call(e,u),v.current=!0},onPointerUp:g(e.onPointerUp,u=>{var p;v.current||(p=u.currentTarget)==null||p.click()}),onKeyDown:g(e.onKeyDown,u=>{const p=d.searchRef.current!=="";n||p&&u.key===" "||fe.includes(u.key)&&(u.currentTarget.click(),u.preventDefault())})})});ae.displayName=ee;var Xe=a.forwardRef((e,o)=>{const{__scopeMenu:n,disabled:t=!1,textValue:r,...s}=e,i=ge(ee,n),d=Ke(n),m=a.useRef(null),v=K(o,m),[f,u]=a.useState(!1),[p,w]=a.useState("");return a.useEffect(()=>{const M=m.current;M&&w((M.textContent??"").trim())},[s.children]),c.jsx(X.ItemSlot,{scope:n,disabled:t,textValue:r??p,children:c.jsx(Kn,{asChild:!0,...d,focusable:!t,children:c.jsx(A.div,{role:"menuitem","data-highlighted":f?"":void 0,"aria-disabled":t||void 0,"data-disabled":t?"":void 0,...s,ref:v,onPointerMove:g(e.onPointerMove,H(M=>{t?i.onItemLeave(M):(i.onItemEnter(M),M.defaultPrevented||M.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:g(e.onPointerLeave,H(M=>i.onItemLeave(M))),onFocus:g(e.onFocus,()=>u(!0)),onBlur:g(e.onBlur,()=>u(!1))})})})}),oo="MenuCheckboxItem",He=a.forwardRef((e,o)=>{const{checked:n=!1,onCheckedChange:t,...r}=e;return c.jsx(Je,{scope:e.__scopeMenu,checked:n,children:c.jsx(ae,{role:"menuitemcheckbox","aria-checked":ne(n)?"mixed":n,...r,ref:o,"data-state":xe(n),onSelect:g(r.onSelect,()=>t==null?void 0:t(ne(n)?!0:!n),{checkForDefaultPrevented:!1})})})});He.displayName=oo;var We="MenuRadioGroup",[to,ro]=F(We,{value:void 0,onValueChange:()=>{}}),ze=a.forwardRef((e,o)=>{const{value:n,onValueChange:t,...r}=e,s=me(t);return c.jsx(to,{scope:e.__scopeMenu,value:n,onValueChange:s,children:c.jsx(he,{...r,ref:o})})});ze.displayName=We;var Ze="MenuRadioItem",qe=a.forwardRef((e,o)=>{const{value:n,...t}=e,r=ro(Ze,e.__scopeMenu),s=n===r.value;return c.jsx(Je,{scope:e.__scopeMenu,checked:s,children:c.jsx(ae,{role:"menuitemradio","aria-checked":s,...t,ref:o,"data-state":xe(s),onSelect:g(t.onSelect,()=>{var i;return(i=r.onValueChange)==null?void 0:i.call(r,n)},{checkForDefaultPrevented:!1})})})});qe.displayName=Ze;var _e="MenuItemIndicator",[Je,ao]=F(_e,{checked:!1}),Qe=a.forwardRef((e,o)=>{const{__scopeMenu:n,forceMount:t,...r}=e,s=ao(_e,n);return c.jsx(oe,{present:t||ne(s.checked)||s.checked===!0,children:c.jsx(A.span,{...r,ref:o,"data-state":xe(s.checked)})})});Qe.displayName=_e;var so="MenuSeparator",en=a.forwardRef((e,o)=>{const{__scopeMenu:n,...t}=e;return c.jsx(A.div,{role:"separator","aria-orientation":"horizontal",...t,ref:o})});en.displayName=so;var co="MenuArrow",nn=a.forwardRef((e,o)=>{const{__scopeMenu:n,...t}=e,r=re(n);return c.jsx(Cn,{...r,...t,ref:o})});nn.displayName=co;var uo="MenuSub",[ct,on]=F(uo),Y="MenuSubTrigger",tn=a.forwardRef((e,o)=>{const n=j(Y,e.__scopeMenu),t=z(Y,e.__scopeMenu),r=on(Y,e.__scopeMenu),s=ge(Y,e.__scopeMenu),i=a.useRef(null),{pointerGraceTimerRef:d,onPointerGraceIntentChange:m}=s,v={__scopeMenu:e.__scopeMenu},f=a.useCallback(()=>{i.current&&window.clearTimeout(i.current),i.current=null},[]);return a.useEffect(()=>f,[f]),a.useEffect(()=>{const u=d.current;return()=>{window.clearTimeout(u),m(null)}},[d,m]),c.jsx(ve,{asChild:!0,...v,children:c.jsx(Xe,{id:r.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":r.contentId,"data-state":sn(n.open),...e,ref:Pe(o,r.onTriggerChange),onClick:u=>{var p;(p=e.onClick)==null||p.call(e,u),!(e.disabled||u.defaultPrevented)&&(u.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:g(e.onPointerMove,H(u=>{s.onItemEnter(u),!u.defaultPrevented&&!e.disabled&&!n.open&&!i.current&&(s.onPointerGraceIntentChange(null),i.current=window.setTimeout(()=>{n.onOpenChange(!0),f()},100))})),onPointerLeave:g(e.onPointerLeave,H(u=>{var w,M;f();const p=(w=n.content)==null?void 0:w.getBoundingClientRect();if(p){const h=(M=n.content)==null?void 0:M.dataset.side,b=h==="right",_=b?-5:5,R=p[b?"left":"right"],y=p[b?"right":"left"];s.onPointerGraceIntentChange({area:[{x:u.clientX+_,y:u.clientY},{x:R,y:p.top},{x:y,y:p.top},{x:y,y:p.bottom},{x:R,y:p.bottom}],side:h}),window.clearTimeout(d.current),d.current=window.setTimeout(()=>s.onPointerGraceIntentChange(null),300)}else{if(s.onTriggerLeave(u),u.defaultPrevented)return;s.onPointerGraceIntentChange(null)}})),onKeyDown:g(e.onKeyDown,u=>{var w;const p=s.searchRef.current!=="";e.disabled||p&&u.key===" "||Bn[t.dir].includes(u.key)&&(n.onOpenChange(!0),(w=n.content)==null||w.focus(),u.preventDefault())})})})});tn.displayName=Y;var rn="MenuSubContent",an=a.forwardRef((e,o)=>{const n=$e(E,e.__scopeMenu),{forceMount:t=n.forceMount,...r}=e,s=j(E,e.__scopeMenu),i=z(E,e.__scopeMenu),d=on(rn,e.__scopeMenu),m=a.useRef(null),v=K(o,m);return c.jsx(X.Provider,{scope:e.__scopeMenu,children:c.jsx(oe,{present:t||s.open,children:c.jsx(X.Slot,{scope:e.__scopeMenu,children:c.jsx(we,{id:d.contentId,"aria-labelledby":d.triggerId,...r,ref:v,align:"start",side:i.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:f=>{var u;i.isUsingKeyboardRef.current&&((u=m.current)==null||u.focus()),f.preventDefault()},onCloseAutoFocus:f=>f.preventDefault(),onFocusOutside:g(e.onFocusOutside,f=>{f.target!==d.trigger&&s.onOpenChange(!1)}),onEscapeKeyDown:g(e.onEscapeKeyDown,f=>{i.onClose(),f.preventDefault()}),onKeyDown:g(e.onKeyDown,f=>{var w;const u=f.currentTarget.contains(f.target),p=Vn[i.dir].includes(f.key);u&&p&&(s.onOpenChange(!1),(w=d.trigger)==null||w.focus(),f.preventDefault())})})})})})});an.displayName=rn;function sn(e){return e?"open":"closed"}function ne(e){return e==="indeterminate"}function xe(e){return ne(e)?"indeterminate":e?"checked":"unchecked"}function io(e){const o=document.activeElement;for(const n of e)if(n===o||(n.focus(),document.activeElement!==o))return}function lo(e,o){return e.map((n,t)=>e[(o+t)%e.length])}function fo(e,o,n){const r=o.length>1&&Array.from(o).every(v=>v===o[0])?o[0]:o,s=n?e.indexOf(n):-1;let i=lo(e,Math.max(s,0));r.length===1&&(i=i.filter(v=>v!==n));const m=i.find(v=>v.toLowerCase().startsWith(r.toLowerCase()));return m!==n?m:void 0}function po(e,o){const{x:n,y:t}=e;let r=!1;for(let s=0,i=o.length-1;s<o.length;i=s++){const d=o[s].x,m=o[s].y,v=o[i].x,f=o[i].y;m>t!=f>t&&n<(v-d)*(t-m)/(f-m)+d&&(r=!r)}return r}function mo(e,o){if(!o)return!1;const n={x:e.clientX,y:e.clientY};return po(n,o)}function H(e){return o=>o.pointerType==="mouse"?e(o):void 0}var vo=Ue,Mo=ve,go=Be,wo=Ve,ho=he,_o=Ye,xo=ae,Co=He,Ro=ze,Io=qe,Eo=Qe,bo=en,So=nn,Po=tn,Do=an,Ce="DropdownMenu",[yo,ut]=pe(Ce,[Le]),C=Le(),[To,cn]=yo(Ce),un=e=>{const{__scopeDropdownMenu:o,children:n,dir:t,open:r,defaultOpen:s,onOpenChange:i,modal:d=!0}=e,m=C(o),v=a.useRef(null),[f=!1,u]=Se({prop:r,defaultProp:s,onChange:i});return c.jsx(To,{scope:o,triggerId:de(),triggerRef:v,contentId:de(),open:f,onOpenChange:u,onOpenToggle:a.useCallback(()=>u(p=>!p),[u]),modal:d,children:c.jsx(vo,{...m,open:f,onOpenChange:u,dir:t,modal:d,children:n})})};un.displayName=Ce;var dn="DropdownMenuTrigger",ln=a.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,disabled:t=!1,...r}=e,s=cn(dn,n),i=C(n);return c.jsx(Mo,{asChild:!0,...i,children:c.jsx(A.button,{type:"button",id:s.triggerId,"aria-haspopup":"menu","aria-expanded":s.open,"aria-controls":s.open?s.contentId:void 0,"data-state":s.open?"open":"closed","data-disabled":t?"":void 0,disabled:t,...r,ref:Pe(o,s.triggerRef),onPointerDown:g(e.onPointerDown,d=>{!t&&d.button===0&&d.ctrlKey===!1&&(s.onOpenToggle(),s.open||d.preventDefault())}),onKeyDown:g(e.onKeyDown,d=>{t||(["Enter"," "].includes(d.key)&&s.onOpenToggle(),d.key==="ArrowDown"&&s.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(d.key)&&d.preventDefault())})})})});ln.displayName=dn;var Ao="DropdownMenuPortal",fn=e=>{const{__scopeDropdownMenu:o,...n}=e,t=C(o);return c.jsx(go,{...t,...n})};fn.displayName=Ao;var pn="DropdownMenuContent",mn=a.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=cn(pn,n),s=C(n),i=a.useRef(!1);return c.jsx(wo,{id:r.contentId,"aria-labelledby":r.triggerId,...s,...t,ref:o,onCloseAutoFocus:g(e.onCloseAutoFocus,d=>{var m;i.current||(m=r.triggerRef.current)==null||m.focus(),i.current=!1,d.preventDefault()}),onInteractOutside:g(e.onInteractOutside,d=>{const m=d.detail.originalEvent,v=m.button===0&&m.ctrlKey===!0,f=m.button===2||v;(!r.modal||f)&&(i.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});mn.displayName=pn;var No="DropdownMenuGroup",Oo=a.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=C(n);return c.jsx(ho,{...r,...t,ref:o})});Oo.displayName=No;var Fo="DropdownMenuLabel",jo=a.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=C(n);return c.jsx(_o,{...r,...t,ref:o})});jo.displayName=Fo;var ko="DropdownMenuItem",vn=a.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=C(n);return c.jsx(xo,{...r,...t,ref:o})});vn.displayName=ko;var Go="DropdownMenuCheckboxItem",Lo=a.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=C(n);return c.jsx(Co,{...r,...t,ref:o})});Lo.displayName=Go;var Ko="DropdownMenuRadioGroup",Uo=a.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=C(n);return c.jsx(Ro,{...r,...t,ref:o})});Uo.displayName=Ko;var $o="DropdownMenuRadioItem",Bo=a.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=C(n);return c.jsx(Io,{...r,...t,ref:o})});Bo.displayName=$o;var Vo="DropdownMenuItemIndicator",Yo=a.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=C(n);return c.jsx(Eo,{...r,...t,ref:o})});Yo.displayName=Vo;var Xo="DropdownMenuSeparator",Ho=a.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=C(n);return c.jsx(bo,{...r,...t,ref:o})});Ho.displayName=Xo;var Wo="DropdownMenuArrow",zo=a.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=C(n);return c.jsx(So,{...r,...t,ref:o})});zo.displayName=Wo;var Zo="DropdownMenuSubTrigger",qo=a.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=C(n);return c.jsx(Po,{...r,...t,ref:o})});qo.displayName=Zo;var Jo="DropdownMenuSubContent",Qo=a.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=C(n);return c.jsx(Do,{...r,...t,ref:o,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Qo.displayName=Jo;var it=un,dt=ln,lt=fn,ft=mn,pt=vn;export{ft as C,un as D,pt as I,lt as P,it as R,dt as T,ln as a,mn as b,vn as c};
