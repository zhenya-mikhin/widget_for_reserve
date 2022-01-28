var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1, i$3, s$3, e$3;
const o$3 = globalThis.trustedTypes, l$2 = o$3 ? o$3.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, n$4 = `lit$${(Math.random() + "").slice(9)}$`, h$2 = "?" + n$4, r$2 = `<${h$2}>`, u = document, c = (t2 = "") => u.createComment(t2), d = (t2) => t2 === null || typeof t2 != "object" && typeof t2 != "function", v = Array.isArray, a$2 = (t2) => {
  var i2;
  return v(t2) || typeof ((i2 = t2) === null || i2 === void 0 ? void 0 : i2[Symbol.iterator]) == "function";
}, f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _ = /-->/g, m = />/g, p = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g, $ = /'/g, g = /"/g, y = /^(?:script|style|textarea)$/i, b = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 }), T = b(1), w = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), P = new WeakMap(), V = (t2, i2, s2) => {
  var e2, o2;
  const l2 = (e2 = s2 == null ? void 0 : s2.renderBefore) !== null && e2 !== void 0 ? e2 : i2;
  let n2 = l2._$litPart$;
  if (n2 === void 0) {
    const t3 = (o2 = s2 == null ? void 0 : s2.renderBefore) !== null && o2 !== void 0 ? o2 : null;
    l2._$litPart$ = n2 = new C(i2.insertBefore(c(), t3), t3, void 0, s2);
  }
  return n2.I(t2), n2;
}, E = u.createTreeWalker(u, 129, null, false), M = (t2, i2) => {
  const s2 = t2.length - 1, e2 = [];
  let o2, h2 = i2 === 2 ? "<svg>" : "", u2 = f;
  for (let i3 = 0; i3 < s2; i3++) {
    const s3 = t2[i3];
    let l2, c3, d2 = -1, v2 = 0;
    for (; v2 < s3.length && (u2.lastIndex = v2, c3 = u2.exec(s3), c3 !== null); )
      v2 = u2.lastIndex, u2 === f ? c3[1] === "!--" ? u2 = _ : c3[1] !== void 0 ? u2 = m : c3[2] !== void 0 ? (y.test(c3[2]) && (o2 = RegExp("</" + c3[2], "g")), u2 = p) : c3[3] !== void 0 && (u2 = p) : u2 === p ? c3[0] === ">" ? (u2 = o2 != null ? o2 : f, d2 = -1) : c3[1] === void 0 ? d2 = -2 : (d2 = u2.lastIndex - c3[2].length, l2 = c3[1], u2 = c3[3] === void 0 ? p : c3[3] === '"' ? g : $) : u2 === g || u2 === $ ? u2 = p : u2 === _ || u2 === m ? u2 = f : (u2 = p, o2 = void 0);
    const a2 = u2 === p && t2[i3 + 1].startsWith("/>") ? " " : "";
    h2 += u2 === f ? s3 + r$2 : d2 >= 0 ? (e2.push(l2), s3.slice(0, d2) + "$lit$" + s3.slice(d2) + n$4 + a2) : s3 + n$4 + (d2 === -2 ? (e2.push(void 0), i3) : a2);
  }
  const c2 = h2 + (t2[s2] || "<?>") + (i2 === 2 ? "</svg>" : "");
  return [l$2 !== void 0 ? l$2.createHTML(c2) : c2, e2];
};
class N {
  constructor({ strings: t2, _$litType$: i2 }, s2) {
    let e2;
    this.parts = [];
    let l2 = 0, r2 = 0;
    const u2 = t2.length - 1, d2 = this.parts, [v2, a2] = M(t2, i2);
    if (this.el = N.createElement(v2, s2), E.currentNode = this.el.content, i2 === 2) {
      const t3 = this.el.content, i3 = t3.firstChild;
      i3.remove(), t3.append(...i3.childNodes);
    }
    for (; (e2 = E.nextNode()) !== null && d2.length < u2; ) {
      if (e2.nodeType === 1) {
        if (e2.hasAttributes()) {
          const t3 = [];
          for (const i3 of e2.getAttributeNames())
            if (i3.endsWith("$lit$") || i3.startsWith(n$4)) {
              const s3 = a2[r2++];
              if (t3.push(i3), s3 !== void 0) {
                const t4 = e2.getAttribute(s3.toLowerCase() + "$lit$").split(n$4), i4 = /([.?@])?(.*)/.exec(s3);
                d2.push({ type: 1, index: l2, name: i4[2], strings: t4, ctor: i4[1] === "." ? I : i4[1] === "?" ? L : i4[1] === "@" ? R : H });
              } else
                d2.push({ type: 6, index: l2 });
            }
          for (const i3 of t3)
            e2.removeAttribute(i3);
        }
        if (y.test(e2.tagName)) {
          const t3 = e2.textContent.split(n$4), i3 = t3.length - 1;
          if (i3 > 0) {
            e2.textContent = o$3 ? o$3.emptyScript : "";
            for (let s3 = 0; s3 < i3; s3++)
              e2.append(t3[s3], c()), E.nextNode(), d2.push({ type: 2, index: ++l2 });
            e2.append(t3[i3], c());
          }
        }
      } else if (e2.nodeType === 8)
        if (e2.data === h$2)
          d2.push({ type: 2, index: l2 });
        else {
          let t3 = -1;
          for (; (t3 = e2.data.indexOf(n$4, t3 + 1)) !== -1; )
            d2.push({ type: 7, index: l2 }), t3 += n$4.length - 1;
        }
      l2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = u.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function S$1(t2, i2, s2 = t2, e2) {
  var o2, l2, n2, h2;
  if (i2 === w)
    return i2;
  let r2 = e2 !== void 0 ? (o2 = s2.\u03A3i) === null || o2 === void 0 ? void 0 : o2[e2] : s2.\u03A3o;
  const u2 = d(i2) ? void 0 : i2._$litDirective$;
  return (r2 == null ? void 0 : r2.constructor) !== u2 && ((l2 = r2 == null ? void 0 : r2.O) === null || l2 === void 0 || l2.call(r2, false), u2 === void 0 ? r2 = void 0 : (r2 = new u2(t2), r2.T(t2, s2, e2)), e2 !== void 0 ? ((n2 = (h2 = s2).\u03A3i) !== null && n2 !== void 0 ? n2 : h2.\u03A3i = [])[e2] = r2 : s2.\u03A3o = r2), r2 !== void 0 && (i2 = S$1(t2, r2.S(t2, i2.values), r2, e2)), i2;
}
class k {
  constructor(t2, i2) {
    this.l = [], this.N = void 0, this.D = t2, this.M = i2;
  }
  u(t2) {
    var i2;
    const { el: { content: s2 }, parts: e2 } = this.D, o2 = ((i2 = t2 == null ? void 0 : t2.creationScope) !== null && i2 !== void 0 ? i2 : u).importNode(s2, true);
    E.currentNode = o2;
    let l2 = E.nextNode(), n2 = 0, h2 = 0, r2 = e2[0];
    for (; r2 !== void 0; ) {
      if (n2 === r2.index) {
        let i3;
        r2.type === 2 ? i3 = new C(l2, l2.nextSibling, this, t2) : r2.type === 1 ? i3 = new r2.ctor(l2, r2.name, r2.strings, this, t2) : r2.type === 6 && (i3 = new z(l2, this, t2)), this.l.push(i3), r2 = e2[++h2];
      }
      n2 !== (r2 == null ? void 0 : r2.index) && (l2 = E.nextNode(), n2++);
    }
    return o2;
  }
  v(t2) {
    let i2 = 0;
    for (const s2 of this.l)
      s2 !== void 0 && (s2.strings !== void 0 ? (s2.I(t2, s2, i2), i2 += s2.strings.length - 2) : s2.I(t2[i2])), i2++;
  }
}
class C {
  constructor(t2, i2, s2, e2) {
    this.type = 2, this.N = void 0, this.A = t2, this.B = i2, this.M = s2, this.options = e2;
  }
  setConnected(t2) {
    var i2;
    (i2 = this.P) === null || i2 === void 0 || i2.call(this, t2);
  }
  get parentNode() {
    return this.A.parentNode;
  }
  get startNode() {
    return this.A;
  }
  get endNode() {
    return this.B;
  }
  I(t2, i2 = this) {
    t2 = S$1(this, t2, i2), d(t2) ? t2 === A || t2 == null || t2 === "" ? (this.H !== A && this.R(), this.H = A) : t2 !== this.H && t2 !== w && this.m(t2) : t2._$litType$ !== void 0 ? this._(t2) : t2.nodeType !== void 0 ? this.$(t2) : a$2(t2) ? this.g(t2) : this.m(t2);
  }
  k(t2, i2 = this.B) {
    return this.A.parentNode.insertBefore(t2, i2);
  }
  $(t2) {
    this.H !== t2 && (this.R(), this.H = this.k(t2));
  }
  m(t2) {
    const i2 = this.A.nextSibling;
    i2 !== null && i2.nodeType === 3 && (this.B === null ? i2.nextSibling === null : i2 === this.B.previousSibling) ? i2.data = t2 : this.$(u.createTextNode(t2)), this.H = t2;
  }
  _(t2) {
    var i2;
    const { values: s2, _$litType$: e2 } = t2, o2 = typeof e2 == "number" ? this.C(t2) : (e2.el === void 0 && (e2.el = N.createElement(e2.h, this.options)), e2);
    if (((i2 = this.H) === null || i2 === void 0 ? void 0 : i2.D) === o2)
      this.H.v(s2);
    else {
      const t3 = new k(o2, this), i3 = t3.u(this.options);
      t3.v(s2), this.$(i3), this.H = t3;
    }
  }
  C(t2) {
    let i2 = P.get(t2.strings);
    return i2 === void 0 && P.set(t2.strings, i2 = new N(t2)), i2;
  }
  g(t2) {
    v(this.H) || (this.H = [], this.R());
    const i2 = this.H;
    let s2, e2 = 0;
    for (const o2 of t2)
      e2 === i2.length ? i2.push(s2 = new C(this.k(c()), this.k(c()), this, this.options)) : s2 = i2[e2], s2.I(o2), e2++;
    e2 < i2.length && (this.R(s2 && s2.B.nextSibling, e2), i2.length = e2);
  }
  R(t2 = this.A.nextSibling, i2) {
    var s2;
    for ((s2 = this.P) === null || s2 === void 0 || s2.call(this, false, true, i2); t2 && t2 !== this.B; ) {
      const i3 = t2.nextSibling;
      t2.remove(), t2 = i3;
    }
  }
}
class H {
  constructor(t2, i2, s2, e2, o2) {
    this.type = 1, this.H = A, this.N = void 0, this.V = void 0, this.element = t2, this.name = i2, this.M = e2, this.options = o2, s2.length > 2 || s2[0] !== "" || s2[1] !== "" ? (this.H = Array(s2.length - 1).fill(A), this.strings = s2) : this.H = A;
  }
  get tagName() {
    return this.element.tagName;
  }
  I(t2, i2 = this, s2, e2) {
    const o2 = this.strings;
    let l2 = false;
    if (o2 === void 0)
      t2 = S$1(this, t2, i2, 0), l2 = !d(t2) || t2 !== this.H && t2 !== w, l2 && (this.H = t2);
    else {
      const e3 = t2;
      let n2, h2;
      for (t2 = o2[0], n2 = 0; n2 < o2.length - 1; n2++)
        h2 = S$1(this, e3[s2 + n2], i2, n2), h2 === w && (h2 = this.H[n2]), l2 || (l2 = !d(h2) || h2 !== this.H[n2]), h2 === A ? t2 = A : t2 !== A && (t2 += (h2 != null ? h2 : "") + o2[n2 + 1]), this.H[n2] = h2;
    }
    l2 && !e2 && this.W(t2);
  }
  W(t2) {
    t2 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 != null ? t2 : "");
  }
}
class I extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  W(t2) {
    this.element[this.name] = t2 === A ? void 0 : t2;
  }
}
class L extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  W(t2) {
    t2 && t2 !== A ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
  }
}
class R extends H {
  constructor() {
    super(...arguments), this.type = 5;
  }
  I(t2, i2 = this) {
    var s2;
    if ((t2 = (s2 = S$1(this, t2, i2, 0)) !== null && s2 !== void 0 ? s2 : A) === w)
      return;
    const e2 = this.H, o2 = t2 === A && e2 !== A || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive, l2 = t2 !== A && (e2 === A || o2);
    o2 && this.element.removeEventListener(this.name, this, e2), l2 && this.element.addEventListener(this.name, this, t2), this.H = t2;
  }
  handleEvent(t2) {
    var i2, s2;
    typeof this.H == "function" ? this.H.call((s2 = (i2 = this.options) === null || i2 === void 0 ? void 0 : i2.host) !== null && s2 !== void 0 ? s2 : this.element, t2) : this.H.handleEvent(t2);
  }
}
class z {
  constructor(t2, i2, s2) {
    this.element = t2, this.type = 6, this.N = void 0, this.V = void 0, this.M = i2, this.options = s2;
  }
  I(t2) {
    S$1(this, t2);
  }
}
(i$3 = (t$1 = globalThis).litHtmlPlatformSupport) === null || i$3 === void 0 || i$3.call(t$1, N, C), ((s$3 = (e$3 = globalThis).litHtmlVersions) !== null && s$3 !== void 0 ? s$3 : e$3.litHtmlVersions = []).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, e$2 = Symbol();
class n$3 {
  constructor(t2, n2) {
    if (n2 !== e$2)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2;
  }
  get styleSheet() {
    return t && this.t === void 0 && (this.t = new CSSStyleSheet(), this.t.replaceSync(this.cssText)), this.t;
  }
  toString() {
    return this.cssText;
  }
}
const s$2 = (t2) => new n$3(t2 + "", e$2), o$2 = new Map(), r$1 = (t2, ...s2) => {
  const r2 = s2.reduce((e2, s3, o2) => e2 + ((t3) => {
    if (t3 instanceof n$3)
      return t3.cssText;
    if (typeof t3 == "number")
      return t3;
    throw Error(`Value passed to 'css' function must be a 'css' function result: ${t3}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
  })(s3) + t2[o2 + 1], t2[0]);
  let i2 = o$2.get(r2);
  return i2 === void 0 && o$2.set(r2, i2 = new n$3(r2, e$2)), i2;
}, i$2 = (e2, n2) => {
  t ? e2.adoptedStyleSheets = n2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet) : n2.forEach((t2) => {
    const n3 = document.createElement("style");
    n3.textContent = t2.cssText, e2.appendChild(n3);
  });
}, S = t ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const n2 of t3.cssRules)
    e2 += n2.cssText;
  return s$2(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s$1, e$1, h$1, r;
const o$1 = { toAttribute(t2, i2) {
  switch (i2) {
    case Boolean:
      t2 = t2 ? "" : null;
      break;
    case Object:
    case Array:
      t2 = t2 == null ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, i2) {
  let s2 = t2;
  switch (i2) {
    case Boolean:
      s2 = t2 !== null;
      break;
    case Number:
      s2 = t2 === null ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        s2 = JSON.parse(t2);
      } catch (t3) {
        s2 = null;
      }
  }
  return s2;
} }, n$2 = (t2, i2) => i2 !== t2 && (i2 == i2 || t2 == t2), l$1 = { attribute: true, type: String, converter: o$1, reflect: false, hasChanged: n$2 };
class a$1 extends HTMLElement {
  constructor() {
    super(), this.\u03A0i = new Map(), this.\u03A0o = void 0, this.\u03A0l = void 0, this.isUpdatePending = false, this.hasUpdated = false, this.\u03A0h = null, this.u();
  }
  static addInitializer(t2) {
    var i2;
    (i2 = this.v) !== null && i2 !== void 0 || (this.v = []), this.v.push(t2);
  }
  static get observedAttributes() {
    this.finalize();
    const t2 = [];
    return this.elementProperties.forEach((i2, s2) => {
      const e2 = this.\u03A0p(s2, i2);
      e2 !== void 0 && (this.\u03A0m.set(e2, s2), t2.push(e2));
    }), t2;
  }
  static createProperty(t2, i2 = l$1) {
    if (i2.state && (i2.attribute = false), this.finalize(), this.elementProperties.set(t2, i2), !i2.noAccessor && !this.prototype.hasOwnProperty(t2)) {
      const s2 = typeof t2 == "symbol" ? Symbol() : "__" + t2, e2 = this.getPropertyDescriptor(t2, s2, i2);
      e2 !== void 0 && Object.defineProperty(this.prototype, t2, e2);
    }
  }
  static getPropertyDescriptor(t2, i2, s2) {
    return { get() {
      return this[i2];
    }, set(e2) {
      const h2 = this[t2];
      this[i2] = e2, this.requestUpdate(t2, h2, s2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) || l$1;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t2 = Object.getPrototypeOf(this);
    if (t2.finalize(), this.elementProperties = new Map(t2.elementProperties), this.\u03A0m = new Map(), this.hasOwnProperty("properties")) {
      const t3 = this.properties, i2 = [...Object.getOwnPropertyNames(t3), ...Object.getOwnPropertySymbols(t3)];
      for (const s2 of i2)
        this.createProperty(s2, t3[s2]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i2) {
    const s2 = [];
    if (Array.isArray(i2)) {
      const e2 = new Set(i2.flat(1 / 0).reverse());
      for (const i3 of e2)
        s2.unshift(S(i3));
    } else
      i2 !== void 0 && s2.push(S(i2));
    return s2;
  }
  static \u03A0p(t2, i2) {
    const s2 = i2.attribute;
    return s2 === false ? void 0 : typeof s2 == "string" ? s2 : typeof t2 == "string" ? t2.toLowerCase() : void 0;
  }
  u() {
    var t2;
    this.\u03A0g = new Promise((t3) => this.enableUpdating = t3), this.L = new Map(), this.\u03A0_(), this.requestUpdate(), (t2 = this.constructor.v) === null || t2 === void 0 || t2.forEach((t3) => t3(this));
  }
  addController(t2) {
    var i2, s2;
    ((i2 = this.\u03A0U) !== null && i2 !== void 0 ? i2 : this.\u03A0U = []).push(t2), this.renderRoot !== void 0 && this.isConnected && ((s2 = t2.hostConnected) === null || s2 === void 0 || s2.call(t2));
  }
  removeController(t2) {
    var i2;
    (i2 = this.\u03A0U) === null || i2 === void 0 || i2.splice(this.\u03A0U.indexOf(t2) >>> 0, 1);
  }
  \u03A0_() {
    this.constructor.elementProperties.forEach((t2, i2) => {
      this.hasOwnProperty(i2) && (this.\u03A0i.set(i2, this[i2]), delete this[i2]);
    });
  }
  createRenderRoot() {
    var t2;
    const s2 = (t2 = this.shadowRoot) !== null && t2 !== void 0 ? t2 : this.attachShadow(this.constructor.shadowRootOptions);
    return i$2(s2, this.constructor.elementStyles), s2;
  }
  connectedCallback() {
    var t2;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t2 = this.\u03A0U) === null || t2 === void 0 || t2.forEach((t3) => {
      var i2;
      return (i2 = t3.hostConnected) === null || i2 === void 0 ? void 0 : i2.call(t3);
    }), this.\u03A0l && (this.\u03A0l(), this.\u03A0o = this.\u03A0l = void 0);
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var t2;
    (t2 = this.\u03A0U) === null || t2 === void 0 || t2.forEach((t3) => {
      var i2;
      return (i2 = t3.hostDisconnected) === null || i2 === void 0 ? void 0 : i2.call(t3);
    }), this.\u03A0o = new Promise((t3) => this.\u03A0l = t3);
  }
  attributeChangedCallback(t2, i2, s2) {
    this.K(t2, s2);
  }
  \u03A0j(t2, i2, s2 = l$1) {
    var e2, h2;
    const r2 = this.constructor.\u03A0p(t2, s2);
    if (r2 !== void 0 && s2.reflect === true) {
      const n2 = ((h2 = (e2 = s2.converter) === null || e2 === void 0 ? void 0 : e2.toAttribute) !== null && h2 !== void 0 ? h2 : o$1.toAttribute)(i2, s2.type);
      this.\u03A0h = t2, n2 == null ? this.removeAttribute(r2) : this.setAttribute(r2, n2), this.\u03A0h = null;
    }
  }
  K(t2, i2) {
    var s2, e2, h2;
    const r2 = this.constructor, n2 = r2.\u03A0m.get(t2);
    if (n2 !== void 0 && this.\u03A0h !== n2) {
      const t3 = r2.getPropertyOptions(n2), l2 = t3.converter, a2 = (h2 = (e2 = (s2 = l2) === null || s2 === void 0 ? void 0 : s2.fromAttribute) !== null && e2 !== void 0 ? e2 : typeof l2 == "function" ? l2 : null) !== null && h2 !== void 0 ? h2 : o$1.fromAttribute;
      this.\u03A0h = n2, this[n2] = a2(i2, t3.type), this.\u03A0h = null;
    }
  }
  requestUpdate(t2, i2, s2) {
    let e2 = true;
    t2 !== void 0 && (((s2 = s2 || this.constructor.getPropertyOptions(t2)).hasChanged || n$2)(this[t2], i2) ? (this.L.has(t2) || this.L.set(t2, i2), s2.reflect === true && this.\u03A0h !== t2 && (this.\u03A0k === void 0 && (this.\u03A0k = new Map()), this.\u03A0k.set(t2, s2))) : e2 = false), !this.isUpdatePending && e2 && (this.\u03A0g = this.\u03A0q());
  }
  async \u03A0q() {
    this.isUpdatePending = true;
    try {
      for (await this.\u03A0g; this.\u03A0o; )
        await this.\u03A0o;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.performUpdate();
    return t2 != null && await t2, !this.isUpdatePending;
  }
  performUpdate() {
    var t2;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this.\u03A0i && (this.\u03A0i.forEach((t3, i3) => this[i3] = t3), this.\u03A0i = void 0);
    let i2 = false;
    const s2 = this.L;
    try {
      i2 = this.shouldUpdate(s2), i2 ? (this.willUpdate(s2), (t2 = this.\u03A0U) === null || t2 === void 0 || t2.forEach((t3) => {
        var i3;
        return (i3 = t3.hostUpdate) === null || i3 === void 0 ? void 0 : i3.call(t3);
      }), this.update(s2)) : this.\u03A0$();
    } catch (t3) {
      throw i2 = false, this.\u03A0$(), t3;
    }
    i2 && this.E(s2);
  }
  willUpdate(t2) {
  }
  E(t2) {
    var i2;
    (i2 = this.\u03A0U) === null || i2 === void 0 || i2.forEach((t3) => {
      var i3;
      return (i3 = t3.hostUpdated) === null || i3 === void 0 ? void 0 : i3.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  \u03A0$() {
    this.L = new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this.\u03A0g;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this.\u03A0k !== void 0 && (this.\u03A0k.forEach((t3, i2) => this.\u03A0j(i2, this[i2], t3)), this.\u03A0k = void 0), this.\u03A0$();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
}
a$1.finalized = true, a$1.shadowRootOptions = { mode: "open" }, (e$1 = (s$1 = globalThis).reactiveElementPlatformSupport) === null || e$1 === void 0 || e$1.call(s$1, { ReactiveElement: a$1 }), ((h$1 = (r = globalThis).reactiveElementVersions) !== null && h$1 !== void 0 ? h$1 : r.reactiveElementVersions = []).push("1.0.0-rc.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var i$1, l, o, s, n$1, a;
((i$1 = (a = globalThis).litElementVersions) !== null && i$1 !== void 0 ? i$1 : a.litElementVersions = []).push("3.0.0-rc.1");
class h extends a$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.\u03A6t = void 0;
  }
  createRenderRoot() {
    var t2, e2;
    const r2 = super.createRenderRoot();
    return (t2 = (e2 = this.renderOptions).renderBefore) !== null && t2 !== void 0 || (e2.renderBefore = r2.firstChild), r2;
  }
  update(t2) {
    const r2 = this.render();
    super.update(t2), this.\u03A6t = V(r2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t2;
    super.connectedCallback(), (t2 = this.\u03A6t) === null || t2 === void 0 || t2.setConnected(true);
  }
  disconnectedCallback() {
    var t2;
    super.disconnectedCallback(), (t2 = this.\u03A6t) === null || t2 === void 0 || t2.setConnected(false);
  }
  render() {
    return w;
  }
}
h.finalized = true, h._$litElement$ = true, (o = (l = globalThis).litElementHydrateSupport) === null || o === void 0 || o.call(l, { LitElement: h }), (n$1 = (s = globalThis).litElementPlatformSupport) === null || n$1 === void 0 || n$1.call(s, { LitElement: h });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n = (n2) => (e2) => typeof e2 == "function" ? ((n3, e3) => (window.customElements.define(n3, e3), e3))(n2, e2) : ((n3, e3) => {
  const { kind: t2, elements: i2 } = e3;
  return { kind: t2, elements: i2, finisher(e4) {
    window.customElements.define(n3, e4);
  } };
})(n2, e2);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i = (i2, e2) => e2.kind === "method" && e2.descriptor && !("value" in e2.descriptor) ? __spreadProps(__spreadValues({}, e2), { finisher(n2) {
  n2.createProperty(e2.key, i2);
} }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e2.key, initializer() {
  typeof e2.initializer == "function" && (this[e2.key] = e2.initializer.call(this));
}, finisher(n2) {
  n2.createProperty(e2.key, i2);
} };
function e(e2) {
  return (n2, t2) => t2 !== void 0 ? ((i2, e3, n3) => {
    e3.constructor.createProperty(n3, i2);
  })(e2, n2, t2) : i(e2, n2);
}
var index = r$1``;
var styles = ":root {\n  --body-background-dark: #0d1117;\n  --body-background-light: #fff;\n  --body-background-default: var(--body-background-light);\n  --components-background-dark: #4f4f4f;\n  --components-background-light: #fff;\n  --components-background-default: var(--components-background-light);\n  --components-box-shadow-dark: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);\n  --card-background-dark: #2e3035;\n  --card-background-light: rgba(71, 147, 255, 0.2);\n  --card-background-default: var(--card-background-light);\n  --card-box-shadow-dark: 0px 3px 20px rgba(5, 5, 5, 0.28);\n  --card-box-shadow-light: 0px 3px 20px rgba(147, 144, 144, 0.28);\n  --card-box-shadow-default: var(--card-box-shadow-light);\n  --text-color-dark: #44413e;\n  --text-color-light: #fff;\n  --text-color-default: var(--text-color-light);\n}\n\n:host .reserve-form {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  min-width: 300px;\n  padding: 30px;\n  border-radius: 4px;\n  background-color: #ffffff;\n  text-align: center;\n}\n\n:host .reserve-form__title {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 500;\n  color: #44413e;\n}\n\n:host .reserve-form__input {\n  padding: 10px 20px;\n  border: solid 1px #ddd;\n  border-radius: 4px;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 300;\n  cursor: pointer;\n  transition: border-color 0.2s;\n}\n\n:host .reserve-form__input:hover {\n  border-color: #e16640;\n}\n\n:host .reserve-form__text {\n  position: absolute;\n  top: 10px;\n}\n\n:host .reserve-form__button {\n  padding: 13px 0;\n  border: none;\n  border-radius: 4px;\n  background-color: #e16640;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 500;\n  color: #fff;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: background-color 0.2s, opacity 0.2s;\n}\n\n:host .reserve-form__button:hover {\n  background-color: #d0613e;\n}\n\n:host .reserve-form__button:active {\n  opacity: 0.8;\n}";
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp2(target, key, result);
  return result;
};
let MyElement = class extends h {
  constructor() {
    super(...arguments);
    this.today = new Date();
  }
  _getToday() {
    const year = this.today.getFullYear();
    const month = `${this.today.getMonth()}`.length === 1 ? "0" + (this.today.getMonth() + 1) : this.today.getMonth();
    const day = this.today.getDate();
    return `${year}-${month}-${day}`;
  }
  render() {
    return T`
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
    `;
  }
};
MyElement.styles = styles;
__decorateClass([
  e({ type: Date })
], MyElement.prototype, "today", 2);
MyElement = __decorateClass([
  n("my-element")
], MyElement);
export { MyElement };
