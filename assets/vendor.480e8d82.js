var pt=Object.defineProperty,vt=Object.defineProperties;var ft=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var mt=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable;var q=(n,t,e)=>t in n?pt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,K=(n,t)=>{for(var e in t||(t={}))mt.call(t,e)&&q(n,e,t[e]);if(D)for(var e of D(t))gt.call(t,e)&&q(n,e,t[e]);return n},J=(n,t)=>vt(n,ft(t));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z,N,O,F;const U=globalThis.trustedTypes,G=U?U.createPolicy("lit-html",{createHTML:n=>n}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,Q="?"+f,yt=`<${Q}>`,g=document,$=(n="")=>g.createComment(n),A=n=>n===null||typeof n!="object"&&typeof n!="function",X=Array.isArray,bt=n=>{var t;return X(n)||typeof((t=n)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,tt=/>/g,m=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,et=/'/g,it=/"/g,st=/^(?:script|style|textarea)$/i,St=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),Nt=St(1),y=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),nt=new WeakMap,$t=(n,t,e)=>{var i,s;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=r._$litPart$;if(o===void 0){const a=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new C(t.insertBefore($(),a),a,void 0,e)}return o.I(n),o},b=g.createTreeWalker(g,129,null,!1),wt=(n,t)=>{const e=n.length-1,i=[];let s,r=t===2?"<svg>":"",o=w;for(let l=0;l<e;l++){const h=n[l];let p,d,c=-1,v=0;for(;v<h.length&&(o.lastIndex=v,d=o.exec(h),d!==null);)v=o.lastIndex,o===w?d[1]==="!--"?o=Y:d[1]!==void 0?o=tt:d[2]!==void 0?(st.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=m):d[3]!==void 0&&(o=m):o===m?d[0]===">"?(o=s!=null?s:w,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,p=d[1],o=d[3]===void 0?m:d[3]==='"'?it:et):o===it||o===et?o=m:o===Y||o===tt?o=w:(o=m,s=void 0);const P=o===m&&n[l+1].startsWith("/>")?" ":"";r+=o===w?h+yt:c>=0?(i.push(p),h.slice(0,c)+"$lit$"+h.slice(c)+f+P):h+f+(c===-2?(i.push(void 0),l):P)}const a=r+(n[e]||"<?>")+(t===2?"</svg>":"");return[G!==void 0?G.createHTML(a):a,i]};class x{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const a=t.length-1,l=this.parts,[h,p]=wt(t,e);if(this.el=x.createElement(h,i),b.currentNode=this.el.content,e===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(s=b.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(f)){const v=p[o++];if(d.push(c),v!==void 0){const P=s.getAttribute(v.toLowerCase()+"$lit$").split(f),E=/([.?@])?(.*)/.exec(v);l.push({type:1,index:r,name:E[2],strings:P,ctor:E[1]==="."?Ct:E[1]==="?"?Pt:E[1]==="@"?Et:H})}else l.push({type:6,index:r})}for(const c of d)s.removeAttribute(c)}if(st.test(s.tagName)){const d=s.textContent.split(f),c=d.length-1;if(c>0){s.textContent=U?U.emptyScript:"";for(let v=0;v<c;v++)s.append(d[v],$()),b.nextNode(),l.push({type:2,index:++r});s.append(d[c],$())}}}else if(s.nodeType===8)if(s.data===Q)l.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(f,d+1))!==-1;)l.push({type:7,index:r}),d+=f.length-1}r++}}static createElement(t,e){const i=g.createElement("template");return i.innerHTML=t,i}}function S(n,t,e=n,i){var s,r,o,a;if(t===y)return t;let l=i!==void 0?(s=e.\u03A3i)===null||s===void 0?void 0:s[i]:e.\u03A3o;const h=A(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l.O)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l.T(n,e,i)),i!==void 0?((o=(a=e).\u03A3i)!==null&&o!==void 0?o:a.\u03A3i=[])[i]=l:e.\u03A3o=l),l!==void 0&&(t=S(n,l.S(n,t.values),l,i)),t}class xt{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:g).importNode(i,!0);b.currentNode=r;let o=b.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let p;h.type===2?p=new C(o,o.nextSibling,this,t):h.type===1?p=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(p=new Ut(o,this,t)),this.l.push(p),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=b.nextNode(),a++)}return r}v(t){let e=0;for(const i of this.l)i!==void 0&&(i.strings!==void 0?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class C{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;(e=this.P)===null||e===void 0||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=S(this,t,e),A(t)?t===u||t==null||t===""?(this.H!==u&&this.R(),this.H=u):t!==this.H&&t!==y&&this.m(t):t._$litType$!==void 0?this._(t):t.nodeType!==void 0?this.$(t):bt(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;e!==null&&e.nodeType===3&&(this.B===null?e.nextSibling===null:e===this.B.previousSibling)?e.data=t:this.$(g.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,r=typeof s=="number"?this.C(t):(s.el===void 0&&(s.el=x.createElement(s.h,this.options)),s);if(((e=this.H)===null||e===void 0?void 0:e.D)===r)this.H.v(i);else{const o=new xt(r,this),a=o.u(this.options);o.v(i),this.$(a),this.H=o}}C(t){let e=nt.get(t.strings);return e===void 0&&nt.set(t.strings,e=new x(t)),e}g(t){X(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const r of t)s===e.length?e.push(i=new C(this.k($()),this.k($()),this,this.options)):i=e[s],i.I(r),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for((i=this.P)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this.B;){const s=t.nextSibling;t.remove(),t=s}}}class H{constructor(t,e,i,s,r){this.type=1,this.H=u,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this.H=Array(i.length-1).fill(u),this.strings=i):this.H=u}get tagName(){return this.element.tagName}I(t,e=this,i,s){const r=this.strings;let o=!1;if(r===void 0)t=S(this,t,e,0),o=!A(t)||t!==this.H&&t!==y,o&&(this.H=t);else{const a=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=S(this,a[i+l],e,l),h===y&&(h=this.H[l]),o||(o=!A(h)||h!==this.H[l]),h===u?t=u:t!==u&&(t+=(h!=null?h:"")+r[l+1]),this.H[l]=h}o&&!s&&this.W(t)}W(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Ct extends H{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===u?void 0:t}}class Pt extends H{constructor(){super(...arguments),this.type=4}W(t){t&&t!==u?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Et extends H{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=(i=S(this,t,e,0))!==null&&i!==void 0?i:u)===y)return;const s=this.H,r=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==u&&(s===u||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;typeof this.H=="function"?this.H.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this.H.handleEvent(t)}}class Ut{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){S(this,t)}}(N=(Z=globalThis).litHtmlPlatformSupport)===null||N===void 0||N.call(Z,x,C),((O=(F=globalThis).litHtmlVersions)!==null&&O!==void 0?O:F.litHtmlVersions=[]).push("2.0.0-rc.2");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,M=Symbol();class z{constructor(t,e){if(e!==M)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return R&&this.t===void 0&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const At=n=>new z(n+"",M),ot=new Map,Ot=(n,...t)=>{const e=t.reduce((s,r,o)=>s+(a=>{if(a instanceof z)return a.cssText;if(typeof a=="number")return a;throw Error(`Value passed to 'css' function must be a 'css' function result: ${a}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)})(r)+n[o+1],n[0]);let i=ot.get(e);return i===void 0&&ot.set(e,i=new z(e,M)),i},Ht=(n,t)=>{R?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style");i.textContent=e.cssText,n.appendChild(i)})},rt=R?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return At(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lt,L,B,ht;const I={toAttribute(n,t){switch(t){case Boolean:n=n?"":null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},at=(n,t)=>t!==n&&(t==t||n==n),_={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:at};class k extends HTMLElement{constructor(){super(),this.\u03A0i=new Map,this.\u03A0o=void 0,this.\u03A0l=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.\u03A0h=null,this.u()}static addInitializer(t){var e;(e=this.v)!==null&&e!==void 0||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this.\u03A0p(i,e);s!==void 0&&(this.\u03A0m.set(s,i),t.push(s))}),t}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.\u03A0m=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(rt(s))}else t!==void 0&&e.push(rt(t));return e}static \u03A0p(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this.\u03A0g=new Promise(e=>this.enableUpdating=e),this.L=new Map,this.\u03A0_(),this.requestUpdate(),(t=this.constructor.v)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this.\u03A0U)!==null&&e!==void 0?e:this.\u03A0U=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this.\u03A0U)===null||e===void 0||e.splice(this.\u03A0U.indexOf(t)>>>0,1)}\u03A0_(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this.\u03A0i.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ht(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this.\u03A0U)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)}),this.\u03A0l&&(this.\u03A0l(),this.\u03A0o=this.\u03A0l=void 0)}enableUpdating(t){}disconnectedCallback(){var t;(t=this.\u03A0U)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)}),this.\u03A0o=new Promise(e=>this.\u03A0l=e)}attributeChangedCallback(t,e,i){this.K(t,i)}\u03A0j(t,e,i=_){var s,r;const o=this.constructor.\u03A0p(t,i);if(o!==void 0&&i.reflect===!0){const a=((r=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&r!==void 0?r:I.toAttribute)(e,i.type);this.\u03A0h=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this.\u03A0h=null}}K(t,e){var i,s,r;const o=this.constructor,a=o.\u03A0m.get(t);if(a!==void 0&&this.\u03A0h!==a){const l=o.getPropertyOptions(a),h=l.converter,p=(r=(s=(i=h)===null||i===void 0?void 0:i.fromAttribute)!==null&&s!==void 0?s:typeof h=="function"?h:null)!==null&&r!==void 0?r:I.fromAttribute;this.\u03A0h=a,this[a]=p(e,l.type),this.\u03A0h=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||at)(this[t],e)?(this.L.has(t)||this.L.set(t,e),i.reflect===!0&&this.\u03A0h!==t&&(this.\u03A0k===void 0&&(this.\u03A0k=new Map),this.\u03A0k.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.\u03A0g=this.\u03A0q())}async \u03A0q(){this.isUpdatePending=!0;try{for(await this.\u03A0g;this.\u03A0o;)await this.\u03A0o}catch(e){Promise.reject(e)}const t=this.performUpdate();return t!=null&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.\u03A0i&&(this.\u03A0i.forEach((s,r)=>this[r]=s),this.\u03A0i=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this.\u03A0U)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this.\u03A0$()}catch(s){throw e=!1,this.\u03A0$(),s}e&&this.E(i)}willUpdate(t){}E(t){var e;(e=this.\u03A0U)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}\u03A0$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.\u03A0g}shouldUpdate(t){return!0}update(t){this.\u03A0k!==void 0&&(this.\u03A0k.forEach((e,i)=>this.\u03A0j(i,this[i],e)),this.\u03A0k=void 0),this.\u03A0$()}updated(t){}firstUpdated(t){}}k.finalized=!0,k.shadowRootOptions={mode:"open"},(L=(lt=globalThis).reactiveElementPlatformSupport)===null||L===void 0||L.call(lt,{ReactiveElement:k}),((B=(ht=globalThis).reactiveElementVersions)!==null&&B!==void 0?B:ht.reactiveElementVersions=[]).push("1.0.0-rc.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j,dt,V,ct,W,ut;((j=(ut=globalThis).litElementVersions)!==null&&j!==void 0?j:ut.litElementVersions=[]).push("3.0.0-rc.1");class T extends k{constructor(){super(...arguments),this.renderOptions={host:this},this.\u03A6t=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.\u03A6t=$t(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.\u03A6t)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.\u03A6t)===null||t===void 0||t.setConnected(!1)}render(){return y}}T.finalized=!0,T._$litElement$=!0,(V=(dt=globalThis).litElementHydrateSupport)===null||V===void 0||V.call(dt,{LitElement:T}),(W=(ct=globalThis).litElementPlatformSupport)===null||W===void 0||W.call(ct,{LitElement:T});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt=n=>t=>typeof t=="function"?((e,i)=>(window.customElements.define(e,i),i))(n,t):((e,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(o){window.customElements.define(e,o)}}})(n,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?J(K({},t),{finisher(e){e.createProperty(t.key,n)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}};function Mt(n){return(t,e)=>e!==void 0?((i,s,r)=>{s.constructor.createProperty(r,i)})(n,t,e):kt(n,t)}export{Nt as T,Mt as e,T as h,Rt as n,Ot as r};
