var Nt=Object.defineProperty,Rt=Object.defineProperties;var zt=Object.getOwnPropertyDescriptors;var ct=Object.getOwnPropertySymbols;var Bt=Object.prototype.hasOwnProperty,Lt=Object.prototype.propertyIsEnumerable;var ut=(c,p,f)=>p in c?Nt(c,p,{enumerable:!0,configurable:!0,writable:!0,value:f}):c[p]=f,pt=(c,p)=>{for(var f in p||(p={}))Bt.call(p,f)&&ut(c,f,p[f]);if(ct)for(var f of ct(p))Lt.call(p,f)&&ut(c,f,p[f]);return c},vt=(c,p)=>Rt(c,zt(p));(function(c,p){typeof exports=="object"&&typeof module!="undefined"?p(exports):typeof define=="function"&&define.amd?define(["exports"],p):(c=typeof globalThis!="undefined"?globalThis:c||self,p(c.MyElement={}))})(this,function(c){"use strict";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var p,f,N,K;const U=globalThis.trustedTypes,J=U?U.createPolicy("lit-html",{createHTML:n=>n}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,Z="?"+y,ft=`<${Z}>`,w=document,k=(n="")=>w.createComment(n),T=n=>n===null||typeof n!="object"&&typeof n!="function",F=Array.isArray,gt=n=>{var t;return F(n)||typeof((t=n)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,G=/>/g,b=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Q=/'/g,X=/"/g,tt=/^(?:script|style|textarea)$/i,mt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),yt=mt(1),x=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),et=new WeakMap,bt=(n,t,e)=>{var i,s;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=r._$litPart$;if(o===void 0){const h=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new E(t.insertBefore(k(),h),h,void 0,e)}return o.I(n),o},S=w.createTreeWalker(w,129,null,!1),wt=(n,t)=>{const e=n.length-1,i=[];let s,r=t===2?"<svg>":"",o=_;for(let l=0;l<e;l++){const a=n[l];let g,d,u=-1,m=0;for(;m<a.length&&(o.lastIndex=m,d=o.exec(a),d!==null);)m=o.lastIndex,o===_?d[1]==="!--"?o=Y:d[1]!==void 0?o=G:d[2]!==void 0?(tt.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=b):d[3]!==void 0&&(o=b):o===b?d[0]===">"?(o=s!=null?s:_,u=-1):d[1]===void 0?u=-2:(u=o.lastIndex-d[2].length,g=d[1],o=d[3]===void 0?b:d[3]==='"'?X:Q):o===X||o===Q?o=b:o===Y||o===G?o=_:(o=b,s=void 0);const M=o===b&&n[l+1].startsWith("/>")?" ":"";r+=o===_?a+ft:u>=0?(i.push(g),a.slice(0,u)+"$lit$"+a.slice(u)+y+M):a+y+(u===-2?(i.push(void 0),l):M)}const h=r+(n[e]||"<?>")+(t===2?"</svg>":"");return[J!==void 0?J.createHTML(h):h,i]};class P{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const h=t.length-1,l=this.parts,[a,g]=wt(t,e);if(this.el=P.createElement(a,i),S.currentNode=this.el.content,e===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(s=S.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const u of s.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(y)){const m=g[o++];if(d.push(u),m!==void 0){const M=s.getAttribute(m.toLowerCase()+"$lit$").split(y),O=/([.?@])?(.*)/.exec(m);l.push({type:1,index:r,name:O[2],strings:M,ctor:O[1]==="."?St:O[1]==="?"?$t:O[1]==="@"?kt:A})}else l.push({type:6,index:r})}for(const u of d)s.removeAttribute(u)}if(tt.test(s.tagName)){const d=s.textContent.split(y),u=d.length-1;if(u>0){s.textContent=U?U.emptyScript:"";for(let m=0;m<u;m++)s.append(d[m],k()),S.nextNode(),l.push({type:2,index:++r});s.append(d[u],k())}}}else if(s.nodeType===8)if(s.data===Z)l.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(y,d+1))!==-1;)l.push({type:7,index:r}),d+=y.length-1}r++}}static createElement(t,e){const i=w.createElement("template");return i.innerHTML=t,i}}function $(n,t,e=n,i){var s,r,o,h;if(t===x)return t;let l=i!==void 0?(s=e.\u03A3i)===null||s===void 0?void 0:s[i]:e.\u03A3o;const a=T(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l.O)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l.T(n,e,i)),i!==void 0?((o=(h=e).\u03A3i)!==null&&o!==void 0?o:h.\u03A3i=[])[i]=l:e.\u03A3o=l),l!==void 0&&(t=$(n,l.S(n,t.values),l,i)),t}class xt{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:w).importNode(i,!0);S.currentNode=r;let o=S.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let g;a.type===2?g=new E(o,o.nextSibling,this,t):a.type===1?g=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(g=new _t(o,this,t)),this.l.push(g),a=s[++l]}h!==(a==null?void 0:a.index)&&(o=S.nextNode(),h++)}return r}v(t){let e=0;for(const i of this.l)i!==void 0&&(i.strings!==void 0?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class E{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;(e=this.P)===null||e===void 0||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=$(this,t,e),T(t)?t===v||t==null||t===""?(this.H!==v&&this.R(),this.H=v):t!==this.H&&t!==x&&this.m(t):t._$litType$!==void 0?this._(t):t.nodeType!==void 0?this.$(t):gt(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;e!==null&&e.nodeType===3&&(this.B===null?e.nextSibling===null:e===this.B.previousSibling)?e.data=t:this.$(w.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,r=typeof s=="number"?this.C(t):(s.el===void 0&&(s.el=P.createElement(s.h,this.options)),s);if(((e=this.H)===null||e===void 0?void 0:e.D)===r)this.H.v(i);else{const o=new xt(r,this),h=o.u(this.options);o.v(i),this.$(h),this.H=o}}C(t){let e=et.get(t.strings);return e===void 0&&et.set(t.strings,e=new P(t)),e}g(t){F(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const r of t)s===e.length?e.push(i=new E(this.k(k()),this.k(k()),this,this.options)):i=e[s],i.I(r),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for((i=this.P)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this.B;){const s=t.nextSibling;t.remove(),t=s}}}class A{constructor(t,e,i,s,r){this.type=1,this.H=v,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this.H=Array(i.length-1).fill(v),this.strings=i):this.H=v}get tagName(){return this.element.tagName}I(t,e=this,i,s){const r=this.strings;let o=!1;if(r===void 0)t=$(this,t,e,0),o=!T(t)||t!==this.H&&t!==x,o&&(this.H=t);else{const h=t;let l,a;for(t=r[0],l=0;l<r.length-1;l++)a=$(this,h[i+l],e,l),a===x&&(a=this.H[l]),o||(o=!T(a)||a!==this.H[l]),a===v?t=v:t!==v&&(t+=(a!=null?a:"")+r[l+1]),this.H[l]=a}o&&!s&&this.W(t)}W(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class St extends A{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===v?void 0:t}}class $t extends A{constructor(){super(...arguments),this.type=4}W(t){t&&t!==v?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class kt extends A{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=(i=$(this,t,e,0))!==null&&i!==void 0?i:v)===x)return;const s=this.H,r=t===v&&s!==v||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==v&&(s===v||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;typeof this.H=="function"?this.H.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this.H.handleEvent(t)}}class _t{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){$(this,t)}}(f=(p=globalThis).litHtmlPlatformSupport)===null||f===void 0||f.call(p,P,E),((N=(K=globalThis).litHtmlVersions)!==null&&N!==void 0?N:K.litHtmlVersions=[]).push("2.0.0-rc.2");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,z=Symbol();class B{constructor(t,e){if(e!==z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return R&&this.t===void 0&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const Pt=n=>new B(n+"",z),it=new Map,Et=(n,...t)=>{const e=t.reduce((s,r,o)=>s+(h=>{if(h instanceof B)return h.cssText;if(typeof h=="number")return h;throw Error(`Value passed to 'css' function must be a 'css' function result: ${h}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)})(r)+n[o+1],n[0]);let i=it.get(e);return i===void 0&&it.set(e,i=new B(e,z)),i},Ct=(n,t)=>{R?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style");i.textContent=e.cssText,n.appendChild(i)})},st=R?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Pt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nt,L,j,ot;const D={toAttribute(n,t){switch(t){case Boolean:n=n?"":null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},rt=(n,t)=>t!==n&&(t==t||n==n),I={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:rt};class H extends HTMLElement{constructor(){super(),this.\u03A0i=new Map,this.\u03A0o=void 0,this.\u03A0l=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.\u03A0h=null,this.u()}static addInitializer(t){var e;(e=this.v)!==null&&e!==void 0||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this.\u03A0p(i,e);s!==void 0&&(this.\u03A0m.set(s,i),t.push(s))}),t}static createProperty(t,e=I){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||I}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.\u03A0m=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(st(s))}else t!==void 0&&e.push(st(t));return e}static \u03A0p(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this.\u03A0g=new Promise(e=>this.enableUpdating=e),this.L=new Map,this.\u03A0_(),this.requestUpdate(),(t=this.constructor.v)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this.\u03A0U)!==null&&e!==void 0?e:this.\u03A0U=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this.\u03A0U)===null||e===void 0||e.splice(this.\u03A0U.indexOf(t)>>>0,1)}\u03A0_(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this.\u03A0i.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ct(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this.\u03A0U)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)}),this.\u03A0l&&(this.\u03A0l(),this.\u03A0o=this.\u03A0l=void 0)}enableUpdating(t){}disconnectedCallback(){var t;(t=this.\u03A0U)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)}),this.\u03A0o=new Promise(e=>this.\u03A0l=e)}attributeChangedCallback(t,e,i){this.K(t,i)}\u03A0j(t,e,i=I){var s,r;const o=this.constructor.\u03A0p(t,i);if(o!==void 0&&i.reflect===!0){const h=((r=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&r!==void 0?r:D.toAttribute)(e,i.type);this.\u03A0h=t,h==null?this.removeAttribute(o):this.setAttribute(o,h),this.\u03A0h=null}}K(t,e){var i,s,r;const o=this.constructor,h=o.\u03A0m.get(t);if(h!==void 0&&this.\u03A0h!==h){const l=o.getPropertyOptions(h),a=l.converter,g=(r=(s=(i=a)===null||i===void 0?void 0:i.fromAttribute)!==null&&s!==void 0?s:typeof a=="function"?a:null)!==null&&r!==void 0?r:D.fromAttribute;this.\u03A0h=h,this[h]=g(e,l.type),this.\u03A0h=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||rt)(this[t],e)?(this.L.has(t)||this.L.set(t,e),i.reflect===!0&&this.\u03A0h!==t&&(this.\u03A0k===void 0&&(this.\u03A0k=new Map),this.\u03A0k.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.\u03A0g=this.\u03A0q())}async \u03A0q(){this.isUpdatePending=!0;try{for(await this.\u03A0g;this.\u03A0o;)await this.\u03A0o}catch(e){Promise.reject(e)}const t=this.performUpdate();return t!=null&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.\u03A0i&&(this.\u03A0i.forEach((s,r)=>this[r]=s),this.\u03A0i=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this.\u03A0U)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this.\u03A0$()}catch(s){throw e=!1,this.\u03A0$(),s}e&&this.E(i)}willUpdate(t){}E(t){var e;(e=this.\u03A0U)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}\u03A0$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.\u03A0g}shouldUpdate(t){return!0}update(t){this.\u03A0k!==void 0&&(this.\u03A0k.forEach((e,i)=>this.\u03A0j(i,this[i],e)),this.\u03A0k=void 0),this.\u03A0$()}updated(t){}firstUpdated(t){}}H.finalized=!0,H.shadowRootOptions={mode:"open"},(L=(nt=globalThis).reactiveElementPlatformSupport)===null||L===void 0||L.call(nt,{ReactiveElement:H}),((j=(ot=globalThis).reactiveElementVersions)!==null&&j!==void 0?j:ot.reactiveElementVersions=[]).push("1.0.0-rc.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V,lt,W,at,q,ht;((V=(ht=globalThis).litElementVersions)!==null&&V!==void 0?V:ht.litElementVersions=[]).push("3.0.0-rc.1");class C extends H{constructor(){super(...arguments),this.renderOptions={host:this},this.\u03A6t=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.\u03A6t=bt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.\u03A6t)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.\u03A6t)===null||t===void 0||t.setConnected(!1)}render(){return x}}C.finalized=!0,C._$litElement$=!0,(W=(lt=globalThis).litElementHydrateSupport)===null||W===void 0||W.call(lt,{LitElement:C}),(q=(at=globalThis).litElementPlatformSupport)===null||q===void 0||q.call(at,{LitElement:C});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut=n=>t=>typeof t=="function"?((e,i)=>(window.customElements.define(e,i),i))(n,t):((e,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(o){window.customElements.define(e,o)}}})(n,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?vt(pt({},t),{finisher(e){e.createProperty(t.key,n)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}};function At(n){return(t,e)=>e!==void 0?((i,s,r)=>{s.constructor.createProperty(r,i)})(n,t,e):Tt(n,t)}var jt=Et``,Ht=`:root {
  --body-background-dark: #0d1117;
  --body-background-light: #fff;
  --body-background-default: var(--body-background-light);
  --components-background-dark: #4f4f4f;
  --components-background-light: #fff;
  --components-background-default: var(--components-background-light);
  --components-box-shadow-dark: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  --card-background-dark: #2e3035;
  --card-background-light: rgba(71, 147, 255, 0.2);
  --card-background-default: var(--card-background-light);
  --card-box-shadow-dark: 0px 3px 20px rgba(5, 5, 5, 0.28);
  --card-box-shadow-light: 0px 3px 20px rgba(147, 144, 144, 0.28);
  --card-box-shadow-default: var(--card-box-shadow-light);
  --text-color-dark: #44413e;
  --text-color-light: #fff;
  --text-color-default: var(--text-color-light);
}

:host .reserve-form {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 300px;
  padding: 30px;
  border-radius: 4px;
  background-color: #ffffff;
  text-align: center;
}

:host .reserve-form__title {
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: #44413e;
}

:host .reserve-form__input {
  padding: 10px 20px;
  border: solid 1px #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 15px;
  font-weight: 300;
  cursor: pointer;
  transition: border-color 0.2s;
}

:host .reserve-form__input:hover {
  border-color: #e16640;
}

:host .reserve-form__text {
  position: absolute;
  top: 10px;
}

:host .reserve-form__button {
  padding: 13px 0;
  border: none;
  border-radius: 4px;
  background-color: #e16640;
  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s, opacity 0.2s;
}

:host .reserve-form__button:hover {
  background-color: #d0613e;
}

:host .reserve-form__button:active {
  opacity: 0.8;
}`,Mt=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,dt=(n,t,e,i)=>{for(var s=i>1?void 0:i?Ot(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Mt(t,e,s),s};c.MyElement=class extends C{constructor(){super(...arguments);this.today=new Date}_getToday(){const n=this.today.getFullYear(),t=`${this.today.getMonth()}`.length===1?"0"+(this.today.getMonth()+1):this.today.getMonth(),e=this.today.getDate();return`${n}-${t}-${e}`}render(){return yt`
      <form class="reserve-form">
        <h2 class="reserve-form__title">Make a reservation</h2>

        <section>
          <select class="reserve-form__input">
            <option value="2">2 guests</option>
          </select>
          <span class="reserve-form__text">2 guests</span>
          <div>
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.6 9.4h16.8a.6.6 0 0 1 0 1.2H1.6a.6.6 0 0 1 0-1.2z" fill="#000" fill-rule="evenodd" opacity=".5"/>
            </svg>
          </div>
          <div>
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="m9.412 9.419-7.863.037a.552.552 0 0 0-.55.548.538.538 0 0 0 .545.544l7.945-.038-.037 7.946a.539.539 0 0 0 .544.544.552.552 0 0 0 .548-.549l.038-7.862 7.87-.039a.55.55 0 0 0 .548-.547.541.541 0 0 0-.544-.544l-7.952.038.037-7.953A.541.541 0 0 0 9.997 1a.55.55 0 0 0-.547.548l-.038 7.871z" fill="#000" fill-rule="evenodd" opacity=".5"/>
            </svg>
          </div>
        </section>

        <input class="reserve-form__input"
               type="date" min="${this._getToday()}"
               value="${this._getToday()}">

        <select class="reserve-form__input">
          <option>08:00 PM</option>
        </select>

        <button class="reserve-form__button">
          Reserve now
        </button>
      </form>
    `}},c.MyElement.styles=Ht,dt([At({type:Date})],c.MyElement.prototype,"today",2),c.MyElement=dt([Ut("my-element")],c.MyElement),Object.defineProperty(c,"__esModule",{value:!0}),c[Symbol.toStringTag]="Module"});
