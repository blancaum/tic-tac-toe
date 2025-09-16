(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=globalThis,L=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,z=Symbol(),X=new WeakMap;let Y=class{constructor(t,s,e){if(this._$cssResult$=!0,e!==z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(L&&t===void 0){const e=s!==void 0&&s.length===1;e&&(t=X.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&X.set(s,t))}return t}toString(){return this.cssText}};const nt=r=>new Y(typeof r=="string"?r:r+"",void 0,z),j=(r,...t)=>{const s=r.length===1?r[0]:t.reduce(((e,i,o)=>e+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1]),r[0]);return new Y(s,r,z)},lt=(r,t)=>{if(L)r.adoptedStyleSheets=t.map((s=>s instanceof CSSStyleSheet?s:s.styleSheet));else for(const s of t){const e=document.createElement("style"),i=k.litNonce;i!==void 0&&e.setAttribute("nonce",i),e.textContent=s.cssText,r.appendChild(e)}},V=L?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let s="";for(const e of t.cssRules)s+=e.cssText;return nt(s)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:at,defineProperty:ht,getOwnPropertyDescriptor:ct,getOwnPropertyNames:dt,getOwnPropertySymbols:ut,getPrototypeOf:pt}=Object,N=globalThis,q=N.trustedTypes,$t=q?q.emptyScript:"",ft=N.reactiveElementPolyfillSupport,S=(r,t)=>r,M={toAttribute(r,t){switch(t){case Boolean:r=r?$t:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let s=r;switch(t){case Boolean:s=r!==null;break;case Number:s=r===null?null:Number(r);break;case Object:case Array:try{s=JSON.parse(r)}catch{s=null}}return s}},tt=(r,t)=>!at(r,t),F={attribute:!0,type:String,converter:M,reflect:!1,useDefault:!1,hasChanged:tt};Symbol.metadata??=Symbol("metadata"),N.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=F){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const e=Symbol(),i=this.getPropertyDescriptor(t,e,s);i!==void 0&&ht(this.prototype,t,i)}}static getPropertyDescriptor(t,s,e){const{get:i,set:o}=ct(this.prototype,t)??{get(){return this[s]},set(n){this[s]=n}};return{get:i,set(n){const h=i?.call(this);o?.call(this,n),this.requestUpdate(t,h,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??F}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const t=pt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const s=this.properties,e=[...dt(s),...ut(s)];for(const i of e)this.createProperty(i,s[i])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[e,i]of s)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[s,e]of this.elementProperties){const i=this._$Eu(s,e);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const i of e)s.unshift(V(i))}else t!==void 0&&s.push(V(t));return s}static _$Eu(t,s){const e=s.attribute;return e===!1?void 0:typeof e=="string"?e:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const e of s.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return lt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,s,e){this._$AK(t,e)}_$ET(t,s){const e=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,e);if(i!==void 0&&e.reflect===!0){const o=(e.converter?.toAttribute!==void 0?e.converter:M).toAttribute(s,e.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,s){const e=this.constructor,i=e._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=e.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:M;this._$Em=i;const h=n.fromAttribute(s,o.type);this[i]=h??this._$Ej?.get(i)??h,this._$Em=null}}requestUpdate(t,s,e){if(t!==void 0){const i=this.constructor,o=this[t];if(e??=i.getPropertyOptions(t),!((e.hasChanged??tt)(o,s)||e.useDefault&&e.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,e))))return;this.C(t,s,e)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,s,{useDefault:e,reflect:i,wrapped:o},n){e&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??s??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||e||(s=void 0),this._$AL.set(t,s)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[i,o]of e){const{wrapped:n}=o,h=this[i];n!==!0||this._$AL.has(i)||h===void 0||this.C(i,void 0,o,h)}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(s)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach((s=>s.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((s=>this._$ET(s,this[s]))),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[S("elementProperties")]=new Map,y[S("finalized")]=new Map,ft?.({ReactiveElement:y}),(N.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,U=B.trustedTypes,I=U?U.createPolicy("lit-html",{createHTML:r=>r}):void 0,et="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,st="?"+f,_t=`<${st}>`,m=document,C=()=>m.createComment(""),P=r=>r===null||typeof r!="object"&&typeof r!="function",W=Array.isArray,gt=r=>W(r)||typeof r?.[Symbol.iterator]=="function",H=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,K=/>/g,_=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),J=/'/g,Z=/"/g,it=/^(?:script|style|textarea|title)$/i,mt=r=>(t,...s)=>({_$litType$:r,strings:t,values:s}),b=mt(1),A=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Q=new WeakMap,g=m.createTreeWalker(m,129);function rt(r,t){if(!W(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return I!==void 0?I.createHTML(t):t}const yt=(r,t)=>{const s=r.length-1,e=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=E;for(let h=0;h<s;h++){const l=r[h];let c,u,a=-1,p=0;for(;p<l.length&&(n.lastIndex=p,u=n.exec(l),u!==null);)p=n.lastIndex,n===E?u[1]==="!--"?n=G:u[1]!==void 0?n=K:u[2]!==void 0?(it.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=_):u[3]!==void 0&&(n=_):n===_?u[0]===">"?(n=i??E,a=-1):u[1]===void 0?a=-2:(a=n.lastIndex-u[2].length,c=u[1],n=u[3]===void 0?_:u[3]==='"'?Z:J):n===Z||n===J?n=_:n===G||n===K?n=E:(n=_,i=void 0);const $=n===_&&r[h+1].startsWith("/>")?" ":"";o+=n===E?l+_t:a>=0?(e.push(c),l.slice(0,a)+et+l.slice(a)+f+$):l+f+(a===-2?h:$)}return[rt(r,o+(r[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),e]};class x{constructor({strings:t,_$litType$:s},e){let i;this.parts=[];let o=0,n=0;const h=t.length-1,l=this.parts,[c,u]=yt(t,s);if(this.el=x.createElement(c,e),g.currentNode=this.el.content,s===2||s===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(i=g.nextNode())!==null&&l.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const a of i.getAttributeNames())if(a.endsWith(et)){const p=u[n++],$=i.getAttribute(a).split(f),T=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:T[2],strings:$,ctor:T[1]==="."?vt:T[1]==="?"?At:T[1]==="@"?wt:R}),i.removeAttribute(a)}else a.startsWith(f)&&(l.push({type:6,index:o}),i.removeAttribute(a));if(it.test(i.tagName)){const a=i.textContent.split(f),p=a.length-1;if(p>0){i.textContent=U?U.emptyScript:"";for(let $=0;$<p;$++)i.append(a[$],C()),g.nextNode(),l.push({type:2,index:++o});i.append(a[p],C())}}}else if(i.nodeType===8)if(i.data===st)l.push({type:2,index:o});else{let a=-1;for(;(a=i.data.indexOf(f,a+1))!==-1;)l.push({type:7,index:o}),a+=f.length-1}o++}}static createElement(t,s){const e=m.createElement("template");return e.innerHTML=t,e}}function w(r,t,s=r,e){if(t===A)return t;let i=e!==void 0?s._$Co?.[e]:s._$Cl;const o=P(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,s,e)),e!==void 0?(s._$Co??=[])[e]=i:s._$Cl=i),i!==void 0&&(t=w(r,i._$AS(r,t.values),i,e)),t}class bt{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:e}=this._$AD,i=(t?.creationScope??m).importNode(s,!0);g.currentNode=i;let o=g.nextNode(),n=0,h=0,l=e[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new O(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new Et(o,this,t)),this._$AV.push(c),l=e[++h]}n!==l?.index&&(o=g.nextNode(),n++)}return g.currentNode=m,i}p(t){let s=0;for(const e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(t,e,s),s+=e.strings.length-2):e._$AI(t[s])),s++}}class O{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,e,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=e,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=w(this,t,s),P(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):gt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(m.createTextNode(t)),this._$AH=t}$(t){const{values:s,_$litType$:e}=t,i=typeof e=="number"?this._$AC(t):(e.el===void 0&&(e.el=x.createElement(rt(e.h,e.h[0]),this.options)),e);if(this._$AH?._$AD===i)this._$AH.p(s);else{const o=new bt(i,this),n=o.u(this.options);o.p(s),this.T(n),this._$AH=o}}_$AC(t){let s=Q.get(t.strings);return s===void 0&&Q.set(t.strings,s=new x(t)),s}k(t){W(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let e,i=0;for(const o of t)i===s.length?s.push(e=new O(this.O(C()),this.O(C()),this,this.options)):e=s[i],e._$AI(o),i++;i<s.length&&(this._$AR(e&&e._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,e,i,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=s,this._$AM=i,this.options=o,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=d}_$AI(t,s=this,e,i){const o=this.strings;let n=!1;if(o===void 0)t=w(this,t,s,0),n=!P(t)||t!==this._$AH&&t!==A,n&&(this._$AH=t);else{const h=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=w(this,h[e+l],s,l),c===A&&(c=this._$AH[l]),n||=!P(c)||c!==this._$AH[l],c===d?t=d:t!==d&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}n&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class vt extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class At extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class wt extends R{constructor(t,s,e,i,o){super(t,s,e,i,o),this.type=5}_$AI(t,s=this){if((t=w(this,t,s,0)??d)===A)return;const e=this._$AH,i=t===d&&e!==d||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,o=t!==d&&(e===d||i);i&&this.element.removeEventListener(this.name,this,e),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Et{constructor(t,s,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const St=B.litHtmlPolyfillSupport;St?.(x,O),(B.litHtmlVersions??=[]).push("3.3.1");const Ct=(r,t,s)=>{const e=s?.renderBefore??t;let i=e._$litPart$;if(i===void 0){const o=s?.renderBefore??null;e._$litPart$=i=new O(t.insertBefore(C(),o),o,void 0,s??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis;class v extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ct(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}}v._$litElement$=!0,v.finalized=!0,D.litElementHydrateSupport?.({LitElement:v});const Pt=D.litElementPolyfillSupport;Pt?.({LitElement:v});(D.litElementVersions??=[]).push("4.2.1");const xt=j`
    :host {
        display: grid;
        grid-template-rows: auto auto auto;
        grid-template-columns: max-content;
        justify-items: center;
        gap: 1rem;
        box-sizing: border-box;
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        font-size: 1.5rem;
        --tic-tac-toe-cell-size: 6.25rem;
    }

    .row {
        display: grid;
        grid-template-columns: repeat(3, var(--tic-tac-toe-cell-size));
        grid-template-rows: repeat(1, var(--tic-tac-toe-cell-size));
        justify-items: center;
        align-items: center;
        gap: 0.5rem;
    }

    .board {
        display: grid;
        gap: 0.5rem;
    }

    .status {
        color: var(--tic-tac-toe-status-text-color, var(--color-dark));
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @keyframes shake {
        0% { transform: translateX(0); }
        20% { transform: translateX(-5px); }
        40% { transform: translateX(5px); }
        60% { transform: translateX(-5px); }
        80% { transform: translateX(5px); }
        100% { transform: translateX(0); }
    }

    .winner {
        animation: shake 0.5s ease-in-out 0s 1 forwards;
    }

    .reset:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .reset {
        width: 100%;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        background: var(--tic-tac-toe-reset-button-bg-color, var(--color-dark));
        color: var(--tic-tac-toe-reset-button-text-color, var(--color-light));
        cursor: pointer;
        font-family: 'Courier New', Courier, monospace;
    }

    .reset:focus-visible {
        outline: 2px solid var(--tic-tac-toe-reset-button-focus-outline-color, var(--color-medium));
        outline-offset: 2px;
    }

    .reset:hover {
        background: var(--tic-tac-toe-reset-button-hover-bg-color, var(--color-hover));
    }
`,Ot=j`
	:host {
		width: 100%;
		height: 100%;
		border: 2px solid var(--tic-tac-toe-cell-border-color, var(--color-dark));
		background-color: var(--tic-tac-toe-cell-bg-color, var(--color-light));
		border-radius: 8px;
		box-sizing: border-box;
		padding: 0.5rem;
	}

	.cell-button {
		width: 100%;
		height: 100%;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		background-color: transparent;
		border: none;
	}

	.cell-button:focus-visible	{
		outline: 2px solid var(--tic-tac-toe-cell-focus-outline-color, var(--color-medium));
		outline-offset: 2px;
	}

	:host([cell-value="X"]) .cell-button {
		background: var(--tic-tac-toe-cell-x-color, var( --color-player-1));
		clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
	}

	:host([cell-value="O"]) .cell-button {
		background: var(--tic-tac-toe-cell-o-color, var( --color-player-2));
		clip-path: circle(50% at 50% 50%);
	}

	@keyframes flashWinner {
		0% { background-color: var(--color-highlight); }
		50% { background-color: #fff; }
		100% { background-color: var(--color-highlight); }
	}

	:host([highlight]) {
		box-shadow: 0 0 10px var(--tic-tac-toe-cell-highlight-shadow-color, var(--color-highlight));
		animation: flashWinner 0.8s ease-in-out 1 forwards;
	}
`,ot=j`
  :host {
    --color-dark: #186F65;
    --color-medium: #B2533E;
    --color-light: #F9F6F3;
    --color-player-1: #B5CB99;
    --color-player-2: #FCE09B;
    --color-highlight: #186F65;
    --color-hover: #13574f;
  }
`;class Tt extends v{static properties={cellAriaLabel:{type:String,attribute:"cell-aria-label"},cellCol:{type:Number,attribute:"cell-col"},cellReadOnly:{type:Boolean,attribute:"cell-read-only"},cellRow:{type:Number,attribute:"cell-row"},cellValue:{type:String,attribute:"cell-value"},highlight:{type:Boolean,reflect:!0}};static get styles(){return[ot,Ot]}constructor(){super(),this.cellAriaLabel="",this.cellCol=0,this.cellReadOnly=!1,this.cellRow=0,this.cellValue="",this.highlight=!1}_handleClick(){const t=new CustomEvent("cell-click",{detail:{row:this.cellRow,col:this.cellCol},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return b`
      <button
        aria-label=${this.cellAriaLabel}
        class="cell-button"
        @click=${this._handleClick}
        aria-disabled=${this.cellReadOnly}
      >
      </button>
    `}}customElements.define("tic-tac-toe-cell",Tt);class kt extends v{static properties={board:{type:Array,attribute:!1},currentPlayer:{type:String,attribute:"current-player"},_winner:{type:String},_winningCells:{type:Array,attribute:!1}};static get styles(){return[ot,xt]}constructor(){super(),this.board=[["","",""],["","",""],["","",""]],this.currentPlayer="X",this._winner="",this._winningCells=[]}checkWinner(){const t=this.board;for(let e=0;e<3;e++)if(t[e][0]&&t[e][0]===t[e][1]&&t[e][0]===t[e][2]){this._winner=t[e][0],this._winningCells=[[e,0],[e,1],[e,2]];return}for(let e=0;e<3;e++)if(t[0][e]&&t[0][e]===t[1][e]&&t[0][e]===t[2][e]){this._winner=t[0][e],this._winningCells=[[0,e],[1,e],[2,e]];return}if(t[0][0]&&t[0][0]===t[1][1]&&t[0][0]===t[2][2]){this._winner=t[0][0],this._winningCells=[[0,0],[1,1],[2,2]];return}if(t[0][2]&&t[0][2]===t[1][1]&&t[0][2]===t[2][0]){this._winner=t[0][2],this._winningCells=[[0,2],[1,1],[2,0]];return}t.flat().every(e=>e!=="")&&(this._winner="Tie")}resetGame(){this.board=[["","",""],["","",""],["","",""]],this.currentPlayer="X",this._winner="",this._winningCells=[]}_ariaLabel(t,s,e){const i=this._partOfWinningLine(t,s);return`Tic Tac Toe Cell, Row ${t}, Col ${s}: value ${e||"empty"}, winner: ${this._winner||"none"}, ${i?", part of winning line":""}`}get _boardTpl(){return b`
    ${this.board.map((t,s)=>b`
          <div class="row">
            ${t.map((e,i)=>b`
              <tic-tac-toe-cell
                ?highlight=${this._partOfWinningLine(s,i)}
                cell-value=${e}
                cell-row=${s}
                cell-col=${i}
                cell-aria-label=${this._ariaLabel(s,i,e)}
                @cell-click=${()=>this._handleCellClick(s,i)}
                cell-read-only=${e!==""||this._winner!==""}
              ></tic-tac-toe-cell>
            `)}
          </div>
    `)}`}_handleCellClick(t,s){this.board[t][s]===""&&this._winner===""&&(this.board[t][s]=this.currentPlayer,this.checkWinner(),this.currentPlayer=this.currentPlayer==="X"?"O":"X",this.requestUpdate())}_partOfWinningLine(t,s){return this._winningCells.some(([e,i])=>e===t&&i===s)}get _statusTpl(){return b`
      ${this._winner?this._winner==="Tie"?"It's a tie!":`Winner: ${this._winner}`:`Current Player: ${this.currentPlayer}`}`}render(){return b`
      <div class="status ${this._winner?"winner":""}">
        ${this._statusTpl}
      </div>
      <div class="board">
        ${this._boardTpl}
      </div>
      <button class="reset" @click=${this.resetGame}>Reset Game</button>
    `}}customElements.define("tic-tac-toe",kt);
