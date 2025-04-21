const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MainLayout-CBrK1OjF.js","assets/QTooltip-C7_2cx8_.js","assets/focus-manager-zjdVGI5d.js","assets/QResizeObserver-skBtqx8B.js","assets/use-quasar-C0v5808h.js","assets/LandingPage-Bd8YgZqL.js","assets/QImg-CdMPCJZ5.js","assets/QCard-DpQni28h.js","assets/use-dark-DkeVdRfg.js","assets/QPage-CFXxS5AB.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/LandingPage-Ddn_5YAl.css","assets/LoginPage-B8kBeDwy.js","assets/uid-CKt4xLxa.js","assets/QBanner-DT5U7ZlN.js","assets/QForm-WvtlJZrf.js","assets/LoginPage-BnuH5prf.css","assets/SignupPage-BwEesSoE.js","assets/SignupPage-C4U0sYcn.css","assets/VerifyEmail-Dx6EEzSU.js","assets/AuthAction-B7st57eT.js","assets/DashboardPage-CEbl-e3n.js","assets/DashboardPage-C9nLmPQo.css","assets/TermsOfService-CD8f_4M4.js","assets/TermsOfService-Cpx752Df.css","assets/PrivacyPolicy-yVocSVBj.js","assets/PrivacyPolicy-Bp1dyNTH.css","assets/AboutPage-BwT5xqXn.js","assets/AboutPage-BWy6HyuR.css"])))=>i.map(i=>d[i]);
const Pd=function(){const t=typeof document<"u"&&document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),kd=function(e){return"/"+e},sa={},Me=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=o(n.map(l=>{if(l=kd(l),l in sa)return;sa[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Pd,u||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((g,v)=>{d.addEventListener("load",g),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ao(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const fe={},Dn=[],ct=()=>{},Od=()=>!1,Ps=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),co=e=>e.startsWith("onUpdate:"),_e=Object.assign,lo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},xd=Object.prototype.hasOwnProperty,ae=(e,t)=>xd.call(e,t),G=Array.isArray,$n=e=>Lr(e)==="[object Map]",cl=e=>Lr(e)==="[object Set]",Ld=e=>Lr(e)==="[object RegExp]",X=e=>typeof e=="function",ge=e=>typeof e=="string",Xt=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",ll=e=>(pe(e)||X(e))&&X(e.then)&&X(e.catch),ul=Object.prototype.toString,Lr=e=>ul.call(e),Nd=e=>Lr(e).slice(8,-1),fl=e=>Lr(e)==="[object Object]",uo=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ar=ao(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ks=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Md=/-(\w)/g,ze=ks(e=>e.replace(Md,(t,n)=>n?n.toUpperCase():"")),Dd=/\B([A-Z])/g,En=ks(e=>e.replace(Dd,"-$1").toLowerCase()),Os=ks(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ys=ks(e=>e?`on${Os(e)}`:""),Kt=(e,t)=>!Object.is(e,t),cr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},dl=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},$d=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Fd=e=>{const t=ge(e)?Number(e):NaN;return isNaN(t)?e:t};let ia;const xs=()=>ia||(ia=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fo(e){if(G(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=ge(r)?Hd(r):fo(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(ge(e)||pe(e))return e}const Ud=/;(?![^(]*\))/g,Bd=/:([^]+)/,jd=/\/\*[^]*?\*\//g;function Hd(e){const t={};return e.replace(jd,"").split(Ud).forEach(n=>{if(n){const r=n.split(Bd);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ho(e){let t="";if(ge(e))t=e;else if(G(e))for(let n=0;n<e.length;n++){const r=ho(e[n]);r&&(t+=r+" ")}else if(pe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Vd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qd=ao(Vd);function hl(e){return!!e||e===""}const pl=e=>!!(e&&e.__v_isRef===!0),Wd=e=>ge(e)?e:e==null?"":G(e)||pe(e)&&(e.toString===ul||!X(e.toString))?pl(e)?Wd(e.value):JSON.stringify(e,gl,2):String(e),gl=(e,t)=>pl(t)?gl(e,t.value):$n(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Qs(r,i)+" =>"]=s,n),{})}:cl(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Qs(n))}:Xt(t)?Qs(t):pe(t)&&!G(t)&&!fl(t)?String(t):t,Qs=(e,t="")=>{var n;return Xt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Se;class ml{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function vl(e){return new ml(e)}function _l(){return Se}function zd(e,t=!1){Se&&Se.cleanups.push(e)}let he;const Xs=new WeakSet;class yl{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Se&&Se.active&&Se.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xs.has(this)&&(Xs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,oa(this),El(this);const t=he,n=Qe;he=this,Qe=!0;try{return this.fn()}finally{Il(this),he=t,Qe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)mo(t);this.deps=this.depsTail=void 0,oa(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ri(this)&&this.run()}get dirty(){return Ri(this)}}let bl=0,lr,ur;function wl(e,t=!1){if(e.flags|=8,t){e.next=ur,ur=e;return}e.next=lr,lr=e}function po(){bl++}function go(){if(--bl>0)return;if(ur){let t=ur;for(ur=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;lr;){let t=lr;for(lr=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function El(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Il(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),mo(r),Kd(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Ri(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Sl(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Sl(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===yr))return;e.globalVersion=yr;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Ri(e)){e.flags&=-3;return}const n=he,r=Qe;he=e,Qe=!0;try{El(e);const s=e.fn(e._value);(t.version===0||Kt(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{he=n,Qe=r,Il(e),e.flags&=-3}}function mo(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)mo(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Kd(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Qe=!0;const Tl=[];function Zt(){Tl.push(Qe),Qe=!1}function en(){const e=Tl.pop();Qe=e===void 0?!0:e}function oa(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=he;he=void 0;try{t()}finally{he=n}}}let yr=0;class Gd{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!he||!Qe||he===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==he)n=this.activeLink=new Gd(he,this),he.deps?(n.prevDep=he.depsTail,he.depsTail.nextDep=n,he.depsTail=n):he.deps=he.depsTail=n,Cl(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=he.depsTail,n.nextDep=void 0,he.depsTail.nextDep=n,he.depsTail=n,he.deps===n&&(he.deps=r)}return n}trigger(t){this.version++,yr++,this.notify(t)}notify(t){po();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{go()}}}function Cl(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Cl(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const as=new WeakMap,un=Symbol(""),Pi=Symbol(""),br=Symbol("");function we(e,t,n){if(Qe&&he){let r=as.get(e);r||as.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new vo),s.map=r,s.key=n),s.track()}}function bt(e,t,n,r,s,i){const o=as.get(e);if(!o){yr++;return}const a=c=>{c&&c.trigger()};if(po(),t==="clear")o.forEach(a);else{const c=G(e),l=c&&uo(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,d)=>{(d==="length"||d===br||!Xt(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(br)),t){case"add":c?l&&a(o.get("length")):(a(o.get(un)),$n(e)&&a(o.get(Pi)));break;case"delete":c||(a(o.get(un)),$n(e)&&a(o.get(Pi)));break;case"set":$n(e)&&a(o.get(un));break}}go()}function Jd(e,t){const n=as.get(e);return n&&n.get(t)}function Rn(e){const t=re(e);return t===e?t:(we(t,"iterate",br),qe(e)?t:t.map(Ee))}function Ls(e){return we(e=re(e),"iterate",br),e}const Yd={__proto__:null,[Symbol.iterator](){return Zs(this,Symbol.iterator,Ee)},concat(...e){return Rn(this).concat(...e.map(t=>G(t)?Rn(t):t))},entries(){return Zs(this,"entries",e=>(e[1]=Ee(e[1]),e))},every(e,t){return vt(this,"every",e,t,void 0,arguments)},filter(e,t){return vt(this,"filter",e,t,n=>n.map(Ee),arguments)},find(e,t){return vt(this,"find",e,t,Ee,arguments)},findIndex(e,t){return vt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return vt(this,"findLast",e,t,Ee,arguments)},findLastIndex(e,t){return vt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return vt(this,"forEach",e,t,void 0,arguments)},includes(...e){return ei(this,"includes",e)},indexOf(...e){return ei(this,"indexOf",e)},join(e){return Rn(this).join(e)},lastIndexOf(...e){return ei(this,"lastIndexOf",e)},map(e,t){return vt(this,"map",e,t,void 0,arguments)},pop(){return Qn(this,"pop")},push(...e){return Qn(this,"push",e)},reduce(e,...t){return aa(this,"reduce",e,t)},reduceRight(e,...t){return aa(this,"reduceRight",e,t)},shift(){return Qn(this,"shift")},some(e,t){return vt(this,"some",e,t,void 0,arguments)},splice(...e){return Qn(this,"splice",e)},toReversed(){return Rn(this).toReversed()},toSorted(e){return Rn(this).toSorted(e)},toSpliced(...e){return Rn(this).toSpliced(...e)},unshift(...e){return Qn(this,"unshift",e)},values(){return Zs(this,"values",Ee)}};function Zs(e,t,n){const r=Ls(e),s=r[t]();return r!==e&&!qe(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Qd=Array.prototype;function vt(e,t,n,r,s,i){const o=Ls(e),a=o!==e&&!qe(e),c=o[t];if(c!==Qd[t]){const f=c.apply(e,i);return a?Ee(f):f}let l=n;o!==e&&(a?l=function(f,d){return n.call(this,Ee(f),d,e)}:n.length>2&&(l=function(f,d){return n.call(this,f,d,e)}));const u=c.call(o,l,r);return a&&s?s(u):u}function aa(e,t,n,r){const s=Ls(e);let i=n;return s!==e&&(qe(e)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,e)}):i=function(o,a,c){return n.call(this,o,Ee(a),c,e)}),s[t](i,...r)}function ei(e,t,n){const r=re(e);we(r,"iterate",br);const s=r[t](...n);return(s===-1||s===!1)&&bo(n[0])?(n[0]=re(n[0]),r[t](...n)):s}function Qn(e,t,n=[]){Zt(),po();const r=re(e)[t].apply(e,n);return go(),en(),r}const Xd=ao("__proto__,__v_isRef,__isVue"),Al=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Xt));function Zd(e){Xt(e)||(e=String(e));const t=re(this);return we(t,"has",e),t.hasOwnProperty(e)}class Rl{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?lh:xl:i?Ol:kl).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=G(t);if(!s){let c;if(o&&(c=Yd[n]))return c;if(n==="hasOwnProperty")return Zd}const a=Reflect.get(t,n,me(t)?t:r);return(Xt(n)?Al.has(n):Xd(n))||(s||we(t,"get",n),i)?a:me(a)?o&&uo(n)?a:a.value:pe(a)?s?Nl(a):In(a):a}}class Pl extends Rl{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=hn(i);if(!qe(r)&&!hn(r)&&(i=re(i),r=re(r)),!G(t)&&me(i)&&!me(r))return c?!1:(i.value=r,!0)}const o=G(t)&&uo(n)?Number(n)<t.length:ae(t,n),a=Reflect.set(t,n,r,me(t)?t:s);return t===re(s)&&(o?Kt(r,i)&&bt(t,"set",n,r):bt(t,"add",n,r)),a}deleteProperty(t,n){const r=ae(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&bt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Xt(n)||!Al.has(n))&&we(t,"has",n),r}ownKeys(t){return we(t,"iterate",G(t)?"length":un),Reflect.ownKeys(t)}}class eh extends Rl{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const th=new Pl,nh=new eh,rh=new Pl(!0);const ki=e=>e,qr=e=>Reflect.getPrototypeOf(e);function sh(e,t,n){return function(...r){const s=this.__v_raw,i=re(s),o=$n(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?ki:t?Oi:Ee;return!t&&we(i,"iterate",c?Pi:un),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Wr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ih(e,t){const n={get(s){const i=this.__v_raw,o=re(i),a=re(s);e||(Kt(s,a)&&we(o,"get",s),we(o,"get",a));const{has:c}=qr(o),l=t?ki:e?Oi:Ee;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&we(re(s),"iterate",un),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=re(i),a=re(s);return e||(Kt(s,a)&&we(o,"has",s),we(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=re(a),l=t?ki:e?Oi:Ee;return!e&&we(c,"iterate",un),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return _e(n,e?{add:Wr("add"),set:Wr("set"),delete:Wr("delete"),clear:Wr("clear")}:{add(s){!t&&!qe(s)&&!hn(s)&&(s=re(s));const i=re(this);return qr(i).has.call(i,s)||(i.add(s),bt(i,"add",s,s)),this},set(s,i){!t&&!qe(i)&&!hn(i)&&(i=re(i));const o=re(this),{has:a,get:c}=qr(o);let l=a.call(o,s);l||(s=re(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?Kt(i,u)&&bt(o,"set",s,i):bt(o,"add",s,i),this},delete(s){const i=re(this),{has:o,get:a}=qr(i);let c=o.call(i,s);c||(s=re(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&bt(i,"delete",s,void 0),l},clear(){const s=re(this),i=s.size!==0,o=s.clear();return i&&bt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=sh(s,e,t)}),n}function _o(e,t){const n=ih(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(ae(n,s)&&s in r?n:r,s,i)}const oh={get:_o(!1,!1)},ah={get:_o(!1,!0)},ch={get:_o(!0,!1)};const kl=new WeakMap,Ol=new WeakMap,xl=new WeakMap,lh=new WeakMap;function uh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fh(e){return e.__v_skip||!Object.isExtensible(e)?0:uh(Nd(e))}function In(e){return hn(e)?e:yo(e,!1,th,oh,kl)}function Ll(e){return yo(e,!1,rh,ah,Ol)}function Nl(e){return yo(e,!0,nh,ch,xl)}function yo(e,t,n,r,s){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=fh(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function Gt(e){return hn(e)?Gt(e.__v_raw):!!(e&&e.__v_isReactive)}function hn(e){return!!(e&&e.__v_isReadonly)}function qe(e){return!!(e&&e.__v_isShallow)}function bo(e){return e?!!e.__v_raw:!1}function re(e){const t=e&&e.__v_raw;return t?re(t):e}function Sn(e){return!ae(e,"__v_skip")&&Object.isExtensible(e)&&dl(e,"__v_skip",!0),e}const Ee=e=>pe(e)?In(e):e,Oi=e=>pe(e)?Nl(e):e;function me(e){return e?e.__v_isRef===!0:!1}function pn(e){return Ml(e,!1)}function dh(e){return Ml(e,!0)}function Ml(e,t){return me(e)?e:new hh(e,t)}class hh{constructor(t,n){this.dep=new vo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:re(t),this._value=n?t:Ee(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||qe(t)||hn(t);t=r?t:re(t),Kt(t,n)&&(this._rawValue=t,this._value=r?t:Ee(t),this.dep.trigger())}}function fn(e){return me(e)?e.value:e}const ph={get:(e,t,n)=>t==="__v_raw"?e:fn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return me(s)&&!me(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Dl(e){return Gt(e)?e:new Proxy(e,ph)}function gh(e){const t=G(e)?new Array(e.length):{};for(const n in e)t[n]=vh(e,n);return t}class mh{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Jd(re(this._object),this._key)}}function vh(e,t,n){const r=e[t];return me(r)?r:new mh(e,t,n)}class _h{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new vo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&he!==this)return wl(this,!0),!0}get value(){const t=this.dep.track();return Sl(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function yh(e,t,n=!1){let r,s;return X(e)?r=e:(r=e.get,s=e.set),new _h(r,s,n)}const zr={},cs=new WeakMap;let on;function bh(e,t=!1,n=on){if(n){let r=cs.get(n);r||cs.set(n,r=[]),r.push(e)}}function wh(e,t,n=fe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=_=>s?_:qe(_)||s===!1||s===0?wt(_,1):wt(_);let u,f,d,g,v=!1,E=!1;if(me(e)?(f=()=>e.value,v=qe(e)):Gt(e)?(f=()=>l(e),v=!0):G(e)?(E=!0,v=e.some(_=>Gt(_)||qe(_)),f=()=>e.map(_=>{if(me(_))return _.value;if(Gt(_))return l(_);if(X(_))return c?c(_,2):_()})):X(e)?t?f=c?()=>c(e,2):e:f=()=>{if(d){Zt();try{d()}finally{en()}}const _=on;on=u;try{return c?c(e,3,[g]):e(g)}finally{on=_}}:f=ct,t&&s){const _=f,R=s===!0?1/0:s;f=()=>wt(_(),R)}const P=_l(),k=()=>{u.stop(),P&&P.active&&lo(P.effects,u)};if(i&&t){const _=t;t=(...R)=>{_(...R),k()}}let y=E?new Array(e.length).fill(zr):zr;const T=_=>{if(!(!(u.flags&1)||!u.dirty&&!_))if(t){const R=u.run();if(s||v||(E?R.some((j,B)=>Kt(j,y[B])):Kt(R,y))){d&&d();const j=on;on=u;try{const B=[R,y===zr?void 0:E&&y[0]===zr?[]:y,g];c?c(t,3,B):t(...B),y=R}finally{on=j}}}else u.run()};return a&&a(T),u=new yl(f),u.scheduler=o?()=>o(T,!1):T,g=_=>bh(_,!1,u),d=u.onStop=()=>{const _=cs.get(u);if(_){if(c)c(_,4);else for(const R of _)R();cs.delete(u)}},t?r?T(!0):y=u.run():o?o(T.bind(null,!0),!0):u.run(),k.pause=u.pause.bind(u),k.resume=u.resume.bind(u),k.stop=k,k}function wt(e,t=1/0,n){if(t<=0||!pe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,me(e))wt(e.value,t,n);else if(G(e))for(let r=0;r<e.length;r++)wt(e[r],t,n);else if(cl(e)||$n(e))e.forEach(r=>{wt(r,t,n)});else if(fl(e)){for(const r in e)wt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&wt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nr(e,t,n,r){try{return r?e(...r):e()}catch(s){Ns(s,t,n)}}function Ze(e,t,n,r){if(X(e)){const s=Nr(e,t,n,r);return s&&ll(s)&&s.catch(i=>{Ns(i,t,n)}),s}if(G(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Ze(e[i],t,n,r));return s}}function Ns(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||fe;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,c,l)===!1)return}a=a.parent}if(i){Zt(),Nr(i,null,10,[e,c,l]),en();return}}Eh(e,n,s,r,o)}function Eh(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Te=[];let ot=-1;const Fn=[];let Ft=null,Nn=0;const $l=Promise.resolve();let ls=null;function wo(e){const t=ls||$l;return e?t.then(this?e.bind(this):e):t}function Ih(e){let t=ot+1,n=Te.length;for(;t<n;){const r=t+n>>>1,s=Te[r],i=wr(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Eo(e){if(!(e.flags&1)){const t=wr(e),n=Te[Te.length-1];!n||!(e.flags&2)&&t>=wr(n)?Te.push(e):Te.splice(Ih(t),0,e),e.flags|=1,Fl()}}function Fl(){ls||(ls=$l.then(Bl))}function Sh(e){G(e)?Fn.push(...e):Ft&&e.id===-1?Ft.splice(Nn+1,0,e):e.flags&1||(Fn.push(e),e.flags|=1),Fl()}function ca(e,t,n=ot+1){for(;n<Te.length;n++){const r=Te[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Te.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ul(e){if(Fn.length){const t=[...new Set(Fn)].sort((n,r)=>wr(n)-wr(r));if(Fn.length=0,Ft){Ft.push(...t);return}for(Ft=t,Nn=0;Nn<Ft.length;Nn++){const n=Ft[Nn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ft=null,Nn=0}}const wr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Bl(e){try{for(ot=0;ot<Te.length;ot++){const t=Te[ot];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Nr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ot<Te.length;ot++){const t=Te[ot];t&&(t.flags&=-2)}ot=-1,Te.length=0,Ul(),ls=null,(Te.length||Fn.length)&&Bl()}}let Ae=null,jl=null;function us(e){const t=Ae;return Ae=e,jl=e&&e.type.__scopeId||null,t}function Th(e,t=Ae,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&wa(-1);const i=us(t);let o;try{o=e(...s)}finally{us(i),r._d&&wa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Hl(e,t){if(Ae===null)return e;const n=Bs(Ae),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,c=fe]=t[s];i&&(X(i)&&(i={mounted:i,updated:i}),i.deep&&wt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function nn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Zt(),Ze(c,n,8,[e.el,a,e,t]),en())}}const Vl=Symbol("_vte"),ql=e=>e.__isTeleport,fr=e=>e&&(e.disabled||e.disabled===""),la=e=>e&&(e.defer||e.defer===""),ua=e=>typeof SVGElement<"u"&&e instanceof SVGElement,fa=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,xi=(e,t)=>{const n=e&&e.to;return ge(n)?t?t(n):null:n},Wl={name:"Teleport",__isTeleport:!0,process(e,t,n,r,s,i,o,a,c,l){const{mc:u,pc:f,pbc:d,o:{insert:g,querySelector:v,createText:E,createComment:P}}=l,k=fr(t.props);let{shapeFlag:y,children:T,dynamicChildren:_}=t;if(e==null){const R=t.el=E(""),j=t.anchor=E("");g(R,n,r),g(j,n,r);const B=(C,H)=>{y&16&&(s&&s.isCE&&(s.ce._teleportTarget=C),u(T,C,H,s,i,o,a,c))},F=()=>{const C=t.target=xi(t.props,v),H=zl(C,t,E,g);C&&(o!=="svg"&&ua(C)?o="svg":o!=="mathml"&&fa(C)&&(o="mathml"),k||(B(C,H),Qr(t,!1)))};k&&(B(n,j),Qr(t,!0)),la(t.props)?ve(()=>{F(),t.el.__isMounted=!0},i):F()}else{if(la(t.props)&&!e.el.__isMounted){ve(()=>{Wl.process(e,t,n,r,s,i,o,a,c,l),delete e.el.__isMounted},i);return}t.el=e.el,t.targetStart=e.targetStart;const R=t.anchor=e.anchor,j=t.target=e.target,B=t.targetAnchor=e.targetAnchor,F=fr(e.props),C=F?n:j,H=F?R:B;if(o==="svg"||ua(j)?o="svg":(o==="mathml"||fa(j))&&(o="mathml"),_?(d(e.dynamicChildren,_,C,s,i,o,a),Ro(e,t,!0)):c||f(e,t,C,H,s,i,o,a,!1),k)F?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Kr(t,n,R,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const W=t.target=xi(t.props,v);W&&Kr(t,W,null,l,0)}else F&&Kr(t,j,B,l,1);Qr(t,k)}},remove(e,t,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:a,anchor:c,targetStart:l,targetAnchor:u,target:f,props:d}=e;if(f&&(s(l),s(u)),i&&s(c),o&16){const g=i||!fr(d);for(let v=0;v<a.length;v++){const E=a[v];r(E,t,n,g,!!E.dynamicChildren)}}},move:Kr,hydrate:Ch};function Kr(e,t,n,{o:{insert:r},m:s},i=2){i===0&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=e,f=i===2;if(f&&r(o,t,n),(!f||fr(u))&&c&16)for(let d=0;d<l.length;d++)s(l[d],t,n,2);f&&r(a,t,n)}function Ch(e,t,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c,insert:l,createText:u}},f){const d=t.target=xi(t.props,c);if(d){const g=fr(t.props),v=d._lpa||d.firstChild;if(t.shapeFlag&16)if(g)t.anchor=f(o(e),t,a(e),n,r,s,i),t.targetStart=v,t.targetAnchor=v&&o(v);else{t.anchor=o(e);let E=v;for(;E;){if(E&&E.nodeType===8){if(E.data==="teleport start anchor")t.targetStart=E;else if(E.data==="teleport anchor"){t.targetAnchor=E,d._lpa=t.targetAnchor&&o(t.targetAnchor);break}}E=o(E)}t.targetAnchor||zl(d,t,u,l),f(v&&o(v),t,d,n,r,s,i)}Qr(t,g)}return t.anchor&&o(t.anchor)}const vI=Wl;function Qr(e,t){const n=e.ctx;if(n&&n.ut){let r,s;for(t?(r=e.el,s=e.anchor):(r=e.targetStart,s=e.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function zl(e,t,n,r){const s=t.targetStart=n(""),i=t.targetAnchor=n("");return s[Vl]=i,e&&(r(s,e),r(i,e)),i}const Ut=Symbol("_leaveCb"),Gr=Symbol("_enterCb");function Kl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return To(()=>{e.isMounted=!0}),$s(()=>{e.isUnmounting=!0}),e}const Be=[Function,Array],Gl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Be,onEnter:Be,onAfterEnter:Be,onEnterCancelled:Be,onBeforeLeave:Be,onLeave:Be,onAfterLeave:Be,onLeaveCancelled:Be,onBeforeAppear:Be,onAppear:Be,onAfterAppear:Be,onAppearCancelled:Be},Jl=e=>{const t=e.subTree;return t.component?Jl(t.component):t},Ah={name:"BaseTransition",props:Gl,setup(e,{slots:t}){const n=Kn(),r=Kl();return()=>{const s=t.default&&Io(t.default(),!0);if(!s||!s.length)return;const i=Yl(s),o=re(e),{mode:a}=o;if(r.isLeaving)return ti(i);const c=da(i);if(!c)return ti(i);let l=Er(c,o,r,n,f=>l=f);c.type!==Ce&&Qt(c,l);let u=n.subTree&&da(n.subTree);if(u&&u.type!==Ce&&!qt(c,u)&&Jl(n).type!==Ce){let f=Er(u,o,r,n);if(Qt(u,f),a==="out-in"&&c.type!==Ce)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},ti(i);a==="in-out"&&c.type!==Ce?f.delayLeave=(d,g,v)=>{const E=Ql(r,u);E[String(u.key)]=u,d[Ut]=()=>{g(),d[Ut]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{v(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function Yl(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ce){t=n;break}}return t}const Rh=Ah;function Ql(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Er(e,t,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:g,onAfterLeave:v,onLeaveCancelled:E,onBeforeAppear:P,onAppear:k,onAfterAppear:y,onAppearCancelled:T}=t,_=String(e.key),R=Ql(n,e),j=(C,H)=>{C&&Ze(C,r,9,H)},B=(C,H)=>{const W=H[1];j(C,H),G(C)?C.every(L=>L.length<=1)&&W():C.length<=1&&W()},F={mode:o,persisted:a,beforeEnter(C){let H=c;if(!n.isMounted)if(i)H=P||c;else return;C[Ut]&&C[Ut](!0);const W=R[_];W&&qt(e,W)&&W.el[Ut]&&W.el[Ut](),j(H,[C])},enter(C){let H=l,W=u,L=f;if(!n.isMounted)if(i)H=k||l,W=y||u,L=T||f;else return;let ee=!1;const D=C[Gr]=te=>{ee||(ee=!0,te?j(L,[C]):j(W,[C]),F.delayedLeave&&F.delayedLeave(),C[Gr]=void 0)};H?B(H,[C,D]):D()},leave(C,H){const W=String(e.key);if(C[Gr]&&C[Gr](!0),n.isUnmounting)return H();j(d,[C]);let L=!1;const ee=C[Ut]=D=>{L||(L=!0,H(),D?j(E,[C]):j(v,[C]),C[Ut]=void 0,R[W]===e&&delete R[W])};R[W]=e,g?B(g,[C,ee]):ee()},clone(C){const H=Er(C,t,n,r,s);return s&&s(H),H}};return F}function ti(e){if(Ms(e))return e=At(e),e.children=null,e}function da(e){if(!Ms(e))return ql(e.type)&&e.children?Yl(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&X(n.default))return n.default()}}function Qt(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Qt(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Io(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Je?(o.patchFlag&128&&s++,r=r.concat(Io(o.children,t,a))):(t||o.type!==Ce)&&r.push(a!=null?At(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function So(e,t){return X(e)?_e({name:e.name},t,{setup:e}):e}function Xl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function fs(e,t,n,r,s=!1){if(G(e)){e.forEach((v,E)=>fs(v,t&&(G(t)?t[E]:t),n,r,s));return}if(Un(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&fs(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?Bs(r.component):r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===fe?a.refs={}:a.refs,f=a.setupState,d=re(f),g=f===fe?()=>!1:v=>ae(d,v);if(l!=null&&l!==c&&(ge(l)?(u[l]=null,g(l)&&(f[l]=null)):me(l)&&(l.value=null)),X(c))Nr(c,a,12,[o,u]);else{const v=ge(c),E=me(c);if(v||E){const P=()=>{if(e.f){const k=v?g(c)?f[c]:u[c]:c.value;s?G(k)&&lo(k,i):G(k)?k.includes(i)||k.push(i):v?(u[c]=[i],g(c)&&(f[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else v?(u[c]=o,g(c)&&(f[c]=o)):E&&(c.value=o,e.k&&(u[e.k]=o))};o?(P.id=-1,ve(P,n)):P()}}}xs().requestIdleCallback;xs().cancelIdleCallback;const Un=e=>!!e.type.__asyncLoader,Ms=e=>e.type.__isKeepAlive,Ph={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Kn(),r=n.ctx;if(!r.renderer)return()=>{const y=t.default&&t.default();return y&&y.length===1?y[0]:y};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:f}}}=r,d=f("div");r.activate=(y,T,_,R,j)=>{const B=y.component;l(y,T,_,0,a),c(B.vnode,y,T,_,B,a,R,y.slotScopeIds,j),ve(()=>{B.isDeactivated=!1,B.a&&cr(B.a);const F=y.props&&y.props.onVnodeMounted;F&&He(F,B.parent,y)},a)},r.deactivate=y=>{const T=y.component;hs(T.m),hs(T.a),l(y,d,null,1,a),ve(()=>{T.da&&cr(T.da);const _=y.props&&y.props.onVnodeUnmounted;_&&He(_,T.parent,y),T.isDeactivated=!0},a)};function g(y){ni(y),u(y,n,a,!0)}function v(y){s.forEach((T,_)=>{const R=Fi(T.type);R&&!y(R)&&E(_)})}function E(y){const T=s.get(y);T&&(!o||!qt(T,o))?g(T):o&&ni(o),s.delete(y),i.delete(y)}Bn(()=>[e.include,e.exclude],([y,T])=>{y&&v(_=>tr(y,_)),T&&v(_=>!tr(T,_))},{flush:"post",deep:!0});let P=null;const k=()=>{P!=null&&(ps(n.subTree.type)?ve(()=>{s.set(P,Jr(n.subTree))},n.subTree.suspense):s.set(P,Jr(n.subTree)))};return To(k),Co(k),$s(()=>{s.forEach(y=>{const{subTree:T,suspense:_}=n,R=Jr(T);if(y.type===R.type&&y.key===R.key){ni(R);const j=R.component.da;j&&ve(j,_);return}g(y)})}),()=>{if(P=null,!t.default)return o=null;const y=t.default(),T=y[0];if(y.length>1)return o=null,y;if(!Sr(T)||!(T.shapeFlag&4)&&!(T.shapeFlag&128))return o=null,T;let _=Jr(T);if(_.type===Ce)return o=null,_;const R=_.type,j=Fi(Un(_)?_.type.__asyncResolved||{}:R),{include:B,exclude:F,max:C}=e;if(B&&(!j||!tr(B,j))||F&&j&&tr(F,j))return _.shapeFlag&=-257,o=_,T;const H=_.key==null?R:_.key,W=s.get(H);return _.el&&(_=At(_),T.shapeFlag&128&&(T.ssContent=_)),P=H,W?(_.el=W.el,_.component=W.component,_.transition&&Qt(_,_.transition),_.shapeFlag|=512,i.delete(H),i.add(H)):(i.add(H),C&&i.size>parseInt(C,10)&&E(i.values().next().value)),_.shapeFlag|=256,o=_,ps(T.type)?T:_}}},_I=Ph;function tr(e,t){return G(e)?e.some(n=>tr(n,t)):ge(e)?e.split(",").includes(t):Ld(e)?(e.lastIndex=0,e.test(t)):!1}function kh(e,t){Zl(e,"a",t)}function Oh(e,t){Zl(e,"da",t)}function Zl(e,t,n=ye){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Ds(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Ms(s.parent.vnode)&&xh(r,t,n,s),s=s.parent}}function xh(e,t,n,r){const s=Ds(t,e,r,!0);eu(()=>{lo(r[t],s)},n)}function ni(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Jr(e){return e.shapeFlag&128?e.ssContent:e}function Ds(e,t,n=ye,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Zt();const a=Mr(n),c=Ze(t,n,e,o);return a(),en(),c});return r?s.unshift(i):s.push(i),i}}const Ot=e=>(t,n=ye)=>{(!Tr||e==="sp")&&Ds(e,(...r)=>t(...r),n)},Lh=Ot("bm"),To=Ot("m"),Nh=Ot("bu"),Co=Ot("u"),$s=Ot("bum"),eu=Ot("um"),Mh=Ot("sp"),Dh=Ot("rtg"),$h=Ot("rtc");function Fh(e,t=ye){Ds("ec",e,t)}const Uh="components";function Bh(e,t){return Hh(Uh,e,!0,t)||e}const jh=Symbol.for("v-ndc");function Hh(e,t,n=!0,r=!1){const s=Ae||ye;if(s){const i=s.type;{const a=Fi(i,!1);if(a&&(a===t||a===ze(t)||a===Os(ze(t))))return i}const o=ha(s[e]||i[e],t)||ha(s.appContext[e],t);return!o&&r?i:o}}function ha(e,t){return e&&(e[t]||e[ze(t)]||e[Os(ze(t))])}function yI(e,t,n,r){let s;const i=n,o=G(e);if(o||ge(e)){const a=o&&Gt(e);let c=!1;a&&(c=!qe(e),e=Ls(e)),s=new Array(e.length);for(let l=0,u=e.length;l<u;l++)s[l]=t(c?Ee(e[l]):e[l],l,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,i)}else if(pe(e))if(e[Symbol.iterator])s=Array.from(e,(a,c)=>t(a,c,void 0,i));else{const a=Object.keys(e);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=t(e[u],u,c,i)}}else s=[];return s}const Li=e=>e?Eu(e)?Bs(e):Li(e.parent):null,dr=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Li(e.parent),$root:e=>Li(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>nu(e),$forceUpdate:e=>e.f||(e.f=()=>{Eo(e.update)}),$nextTick:e=>e.n||(e.n=wo.bind(e.proxy)),$watch:e=>up.bind(e)}),ri=(e,t)=>e!==fe&&!e.__isScriptSetup&&ae(e,t),Vh={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(ri(r,t))return o[t]=1,r[t];if(s!==fe&&ae(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&ae(l,t))return o[t]=3,i[t];if(n!==fe&&ae(n,t))return o[t]=4,n[t];Ni&&(o[t]=0)}}const u=dr[t];let f,d;if(u)return t==="$attrs"&&we(e.attrs,"get",""),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==fe&&ae(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,ae(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return ri(s,t)?(s[t]=n,!0):r!==fe&&ae(r,t)?(r[t]=n,!0):ae(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==fe&&ae(e,o)||ri(t,o)||(a=i[0])&&ae(a,o)||ae(r,o)||ae(dr,o)||ae(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ae(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function pa(e){return G(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ni=!0;function qh(e){const t=nu(e),n=e.proxy,r=e.ctx;Ni=!1,t.beforeCreate&&ga(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:g,updated:v,activated:E,deactivated:P,beforeDestroy:k,beforeUnmount:y,destroyed:T,unmounted:_,render:R,renderTracked:j,renderTriggered:B,errorCaptured:F,serverPrefetch:C,expose:H,inheritAttrs:W,components:L,directives:ee,filters:D}=t;if(l&&Wh(l,r,null),o)for(const Z in o){const ie=o[Z];X(ie)&&(r[Z]=ie.bind(n))}if(s){const Z=s.call(n,n);pe(Z)&&(e.data=In(Z))}if(Ni=!0,i)for(const Z in i){const ie=i[Z],mt=X(ie)?ie.bind(n,n):X(ie.get)?ie.get.bind(n,n):ct,xt=!X(ie)&&X(ie.set)?ie.set.bind(n):ct,tt=Y({get:mt,set:xt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Pe=>tt.value=Pe})}if(a)for(const Z in a)tu(a[Z],r,n,Z);if(c){const Z=X(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(ie=>{Xr(ie,Z[ie])})}u&&ga(u,e,"c");function se(Z,ie){G(ie)?ie.forEach(mt=>Z(mt.bind(n))):ie&&Z(ie.bind(n))}if(se(Lh,f),se(To,d),se(Nh,g),se(Co,v),se(kh,E),se(Oh,P),se(Fh,F),se($h,j),se(Dh,B),se($s,y),se(eu,_),se(Mh,C),G(H))if(H.length){const Z=e.exposed||(e.exposed={});H.forEach(ie=>{Object.defineProperty(Z,ie,{get:()=>n[ie],set:mt=>n[ie]=mt})})}else e.exposed||(e.exposed={});R&&e.render===ct&&(e.render=R),W!=null&&(e.inheritAttrs=W),L&&(e.components=L),ee&&(e.directives=ee),C&&Xl(e)}function Wh(e,t,n=ct){G(e)&&(e=Mi(e));for(const r in e){const s=e[r];let i;pe(s)?"default"in s?i=We(s.from||r,s.default,!0):i=We(s.from||r):i=We(s),me(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function ga(e,t,n){Ze(G(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function tu(e,t,n,r){let s=r.includes(".")?gu(n,r):()=>n[r];if(ge(e)){const i=t[e];X(i)&&Bn(s,i)}else if(X(e))Bn(s,e.bind(n));else if(pe(e))if(G(e))e.forEach(i=>tu(i,t,n,r));else{const i=X(e.handler)?e.handler.bind(n):t[e.handler];X(i)&&Bn(s,i,e)}}function nu(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>ds(c,l,o,!0)),ds(c,t,o)),pe(t)&&i.set(t,c),c}function ds(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&ds(e,i,n,!0),s&&s.forEach(o=>ds(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=zh[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const zh={data:ma,props:va,emits:va,methods:nr,computed:nr,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:nr,directives:nr,watch:Gh,provide:ma,inject:Kh};function ma(e,t){return t?e?function(){return _e(X(e)?e.call(this,this):e,X(t)?t.call(this,this):t)}:t:e}function Kh(e,t){return nr(Mi(e),Mi(t))}function Mi(e){if(G(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ie(e,t){return e?[...new Set([].concat(e,t))]:t}function nr(e,t){return e?_e(Object.create(null),e,t):t}function va(e,t){return e?G(e)&&G(t)?[...new Set([...e,...t])]:_e(Object.create(null),pa(e),pa(t??{})):t}function Gh(e,t){if(!e)return t;if(!t)return e;const n=_e(Object.create(null),e);for(const r in t)n[r]=Ie(e[r],t[r]);return n}function ru(){return{app:null,config:{isNativeTag:Od,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jh=0;function Yh(e,t){return function(r,s=null){X(r)||(r=_e({},r)),s!=null&&!pe(s)&&(s=null);const i=ru(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Jh++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Op,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&X(u.install)?(o.add(u),u.install(l,...f)):X(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,d){if(!c){const g=l._ceVNode||Oe(r,s);return g.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),e(g,u,d),c=!0,l._container=u,u.__vue_app__=l,Bs(g.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Ze(a,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=dn;dn=l;try{return u()}finally{dn=f}}};return l}}let dn=null;function Xr(e,t){if(ye){let n=ye.provides;const r=ye.parent&&ye.parent.provides;r===n&&(n=ye.provides=Object.create(r)),n[e]=t}}function We(e,t,n=!1){const r=ye||Ae;if(r||dn){const s=dn?dn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&X(t)?t.call(r&&r.proxy):t}}function Qh(){return!!(ye||Ae||dn)}const su={},iu=()=>Object.create(su),ou=e=>Object.getPrototypeOf(e)===su;function Xh(e,t,n,r=!1){const s={},i=iu();e.propsDefaults=Object.create(null),au(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Ll(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Zh(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=re(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Fs(e.emitsOptions,d))continue;const g=t[d];if(c)if(ae(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const v=ze(d);s[v]=Di(c,a,v,g,e,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{au(e,t,s,i)&&(l=!0);let u;for(const f in a)(!t||!ae(t,f)&&((u=En(f))===f||!ae(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Di(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!ae(t,f))&&(delete i[f],l=!0)}l&&bt(e.attrs,"set","")}function au(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(ar(c))continue;const l=t[c];let u;s&&ae(s,u=ze(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Fs(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=re(n),l=a||fe;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Di(s,c,f,l[f],e,!ae(l,f))}}return o}function Di(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=ae(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&X(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=Mr(s);r=l[n]=c.call(null,t),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===En(n))&&(r=!0))}return r}const ep=new WeakMap;function cu(e,t,n=!1){const r=n?ep:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!X(e)){const u=f=>{c=!0;const[d,g]=cu(f,t,!0);_e(o,d),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return pe(e)&&r.set(e,Dn),Dn;if(G(i))for(let u=0;u<i.length;u++){const f=ze(i[u]);_a(f)&&(o[f]=fe)}else if(i)for(const u in i){const f=ze(u);if(_a(f)){const d=i[u],g=o[f]=G(d)||X(d)?{type:d}:_e({},d),v=g.type;let E=!1,P=!0;if(G(v))for(let k=0;k<v.length;++k){const y=v[k],T=X(y)&&y.name;if(T==="Boolean"){E=!0;break}else T==="String"&&(P=!1)}else E=X(v)&&v.name==="Boolean";g[0]=E,g[1]=P,(E||ae(g,"default"))&&a.push(f)}}const l=[o,a];return pe(e)&&r.set(e,l),l}function _a(e){return e[0]!=="$"&&!ar(e)}const lu=e=>e[0]==="_"||e==="$stable",Ao=e=>G(e)?e.map(at):[at(e)],tp=(e,t,n)=>{if(t._n)return t;const r=Th((...s)=>Ao(t(...s)),n);return r._c=!1,r},uu=(e,t,n)=>{const r=e._ctx;for(const s in e){if(lu(s))continue;const i=e[s];if(X(i))t[s]=tp(s,i,r);else if(i!=null){const o=Ao(i);t[s]=()=>o}}},fu=(e,t)=>{const n=Ao(t);e.slots.default=()=>n},du=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},np=(e,t,n)=>{const r=e.slots=iu();if(e.vnode.shapeFlag&32){const s=t._;s?(du(r,t,n),n&&dl(r,"_",s,!0)):uu(t,r)}else t&&fu(e,t)},rp=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=fe;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:du(s,t,n):(i=!t.$stable,uu(t,s)),o=t}else t&&(fu(e,t),o={default:1});if(i)for(const a in s)!lu(a)&&o[a]==null&&delete s[a]},ve=vp;function sp(e){return ip(e)}function ip(e,t){const n=xs();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:g=ct,insertStaticContent:v}=e,E=(h,p,m,b=null,S=null,I=null,N=void 0,x=null,O=!!p.dynamicChildren)=>{if(h===p)return;h&&!qt(h,p)&&(b=w(h),Pe(h,S,I,!0),h=null),p.patchFlag===-2&&(O=!1,p.dynamicChildren=null);const{type:A,ref:z,shapeFlag:$}=p;switch(A){case Us:P(h,p,m,b);break;case Ce:k(h,p,m,b);break;case ii:h==null&&y(p,m,b,N);break;case Je:L(h,p,m,b,S,I,N,x,O);break;default:$&1?R(h,p,m,b,S,I,N,x,O):$&6?ee(h,p,m,b,S,I,N,x,O):($&64||$&128)&&A.process(h,p,m,b,S,I,N,x,O,V)}z!=null&&S&&fs(z,h&&h.ref,I,p||h,!p)},P=(h,p,m,b)=>{if(h==null)r(p.el=a(p.children),m,b);else{const S=p.el=h.el;p.children!==h.children&&l(S,p.children)}},k=(h,p,m,b)=>{h==null?r(p.el=c(p.children||""),m,b):p.el=h.el},y=(h,p,m,b)=>{[h.el,h.anchor]=v(h.children,p,m,b,h.el,h.anchor)},T=({el:h,anchor:p},m,b)=>{let S;for(;h&&h!==p;)S=d(h),r(h,m,b),h=S;r(p,m,b)},_=({el:h,anchor:p})=>{let m;for(;h&&h!==p;)m=d(h),s(h),h=m;s(p)},R=(h,p,m,b,S,I,N,x,O)=>{p.type==="svg"?N="svg":p.type==="math"&&(N="mathml"),h==null?j(p,m,b,S,I,N,x,O):C(h,p,S,I,N,x,O)},j=(h,p,m,b,S,I,N,x)=>{let O,A;const{props:z,shapeFlag:$,transition:q,dirs:Q}=h;if(O=h.el=o(h.type,I,z&&z.is,z),$&8?u(O,h.children):$&16&&F(h.children,O,null,b,S,si(h,I),N,x),Q&&nn(h,null,b,"created"),B(O,h,h.scopeId,N,b),z){for(const de in z)de!=="value"&&!ar(de)&&i(O,de,null,z[de],I,b);"value"in z&&i(O,"value",null,z.value,I),(A=z.onVnodeBeforeMount)&&He(A,b,h)}Q&&nn(h,null,b,"beforeMount");const ne=op(S,q);ne&&q.beforeEnter(O),r(O,p,m),((A=z&&z.onVnodeMounted)||ne||Q)&&ve(()=>{A&&He(A,b,h),ne&&q.enter(O),Q&&nn(h,null,b,"mounted")},S)},B=(h,p,m,b,S)=>{if(m&&g(h,m),b)for(let I=0;I<b.length;I++)g(h,b[I]);if(S){let I=S.subTree;if(p===I||ps(I.type)&&(I.ssContent===p||I.ssFallback===p)){const N=S.vnode;B(h,N,N.scopeId,N.slotScopeIds,S.parent)}}},F=(h,p,m,b,S,I,N,x,O=0)=>{for(let A=O;A<h.length;A++){const z=h[A]=x?Bt(h[A]):at(h[A]);E(null,z,p,m,b,S,I,N,x)}},C=(h,p,m,b,S,I,N)=>{const x=p.el=h.el;let{patchFlag:O,dynamicChildren:A,dirs:z}=p;O|=h.patchFlag&16;const $=h.props||fe,q=p.props||fe;let Q;if(m&&rn(m,!1),(Q=q.onVnodeBeforeUpdate)&&He(Q,m,p,h),z&&nn(p,h,m,"beforeUpdate"),m&&rn(m,!0),($.innerHTML&&q.innerHTML==null||$.textContent&&q.textContent==null)&&u(x,""),A?H(h.dynamicChildren,A,x,m,b,si(p,S),I):N||ie(h,p,x,null,m,b,si(p,S),I,!1),O>0){if(O&16)W(x,$,q,m,S);else if(O&2&&$.class!==q.class&&i(x,"class",null,q.class,S),O&4&&i(x,"style",$.style,q.style,S),O&8){const ne=p.dynamicProps;for(let de=0;de<ne.length;de++){const ce=ne[de],Le=$[ce],ke=q[ce];(ke!==Le||ce==="value")&&i(x,ce,Le,ke,S,m)}}O&1&&h.children!==p.children&&u(x,p.children)}else!N&&A==null&&W(x,$,q,m,S);((Q=q.onVnodeUpdated)||z)&&ve(()=>{Q&&He(Q,m,p,h),z&&nn(p,h,m,"updated")},b)},H=(h,p,m,b,S,I,N)=>{for(let x=0;x<p.length;x++){const O=h[x],A=p[x],z=O.el&&(O.type===Je||!qt(O,A)||O.shapeFlag&70)?f(O.el):m;E(O,A,z,null,b,S,I,N,!0)}},W=(h,p,m,b,S)=>{if(p!==m){if(p!==fe)for(const I in p)!ar(I)&&!(I in m)&&i(h,I,p[I],null,S,b);for(const I in m){if(ar(I))continue;const N=m[I],x=p[I];N!==x&&I!=="value"&&i(h,I,x,N,S,b)}"value"in m&&i(h,"value",p.value,m.value,S)}},L=(h,p,m,b,S,I,N,x,O)=>{const A=p.el=h?h.el:a(""),z=p.anchor=h?h.anchor:a("");let{patchFlag:$,dynamicChildren:q,slotScopeIds:Q}=p;Q&&(x=x?x.concat(Q):Q),h==null?(r(A,m,b),r(z,m,b),F(p.children||[],m,z,S,I,N,x,O)):$>0&&$&64&&q&&h.dynamicChildren?(H(h.dynamicChildren,q,m,S,I,N,x),(p.key!=null||S&&p===S.subTree)&&Ro(h,p,!0)):ie(h,p,m,z,S,I,N,x,O)},ee=(h,p,m,b,S,I,N,x,O)=>{p.slotScopeIds=x,h==null?p.shapeFlag&512?S.ctx.activate(p,m,b,N,O):D(p,m,b,S,I,N,O):te(h,p,O)},D=(h,p,m,b,S,I,N)=>{const x=h.component=Tp(h,b,S);if(Ms(h)&&(x.ctx.renderer=V),Cp(x,!1,N),x.asyncDep){if(S&&S.registerDep(x,se,N),!h.el){const O=x.subTree=Oe(Ce);k(null,O,p,m)}}else se(x,h,p,m,S,I,N)},te=(h,p,m)=>{const b=p.component=h.component;if(gp(h,p,m))if(b.asyncDep&&!b.asyncResolved){Z(b,p,m);return}else b.next=p,b.update();else p.el=h.el,b.vnode=p},se=(h,p,m,b,S,I,N)=>{const x=()=>{if(h.isMounted){let{next:$,bu:q,u:Q,parent:ne,vnode:de}=h;{const rt=hu(h);if(rt){$&&($.el=de.el,Z(h,$,N)),rt.asyncDep.then(()=>{h.isUnmounted||x()});return}}let ce=$,Le;rn(h,!1),$?($.el=de.el,Z(h,$,N)):$=de,q&&cr(q),(Le=$.props&&$.props.onVnodeBeforeUpdate)&&He(Le,ne,$,de),rn(h,!0);const ke=ya(h),nt=h.subTree;h.subTree=ke,E(nt,ke,f(nt.el),w(nt),h,S,I),$.el=ke.el,ce===null&&mp(h,ke.el),Q&&ve(Q,S),(Le=$.props&&$.props.onVnodeUpdated)&&ve(()=>He(Le,ne,$,de),S)}else{let $;const{el:q,props:Q}=p,{bm:ne,m:de,parent:ce,root:Le,type:ke}=h,nt=Un(p);rn(h,!1),ne&&cr(ne),!nt&&($=Q&&Q.onVnodeBeforeMount)&&He($,ce,p),rn(h,!0);{Le.ce&&Le.ce._injectChildStyle(ke);const rt=h.subTree=ya(h);E(null,rt,m,b,h,S,I),p.el=rt.el}if(de&&ve(de,S),!nt&&($=Q&&Q.onVnodeMounted)){const rt=p;ve(()=>He($,ce,rt),S)}(p.shapeFlag&256||ce&&Un(ce.vnode)&&ce.vnode.shapeFlag&256)&&h.a&&ve(h.a,S),h.isMounted=!0,p=m=b=null}};h.scope.on();const O=h.effect=new yl(x);h.scope.off();const A=h.update=O.run.bind(O),z=h.job=O.runIfDirty.bind(O);z.i=h,z.id=h.uid,O.scheduler=()=>Eo(z),rn(h,!0),A()},Z=(h,p,m)=>{p.component=h;const b=h.vnode.props;h.vnode=p,h.next=null,Zh(h,p.props,b,m),rp(h,p.children,m),Zt(),ca(h),en()},ie=(h,p,m,b,S,I,N,x,O=!1)=>{const A=h&&h.children,z=h?h.shapeFlag:0,$=p.children,{patchFlag:q,shapeFlag:Q}=p;if(q>0){if(q&128){xt(A,$,m,b,S,I,N,x,O);return}else if(q&256){mt(A,$,m,b,S,I,N,x,O);return}}Q&8?(z&16&&Ue(A,S,I),$!==A&&u(m,$)):z&16?Q&16?xt(A,$,m,b,S,I,N,x,O):Ue(A,S,I,!0):(z&8&&u(m,""),Q&16&&F($,m,b,S,I,N,x,O))},mt=(h,p,m,b,S,I,N,x,O)=>{h=h||Dn,p=p||Dn;const A=h.length,z=p.length,$=Math.min(A,z);let q;for(q=0;q<$;q++){const Q=p[q]=O?Bt(p[q]):at(p[q]);E(h[q],Q,m,null,S,I,N,x,O)}A>z?Ue(h,S,I,!0,!1,$):F(p,m,b,S,I,N,x,O,$)},xt=(h,p,m,b,S,I,N,x,O)=>{let A=0;const z=p.length;let $=h.length-1,q=z-1;for(;A<=$&&A<=q;){const Q=h[A],ne=p[A]=O?Bt(p[A]):at(p[A]);if(qt(Q,ne))E(Q,ne,m,null,S,I,N,x,O);else break;A++}for(;A<=$&&A<=q;){const Q=h[$],ne=p[q]=O?Bt(p[q]):at(p[q]);if(qt(Q,ne))E(Q,ne,m,null,S,I,N,x,O);else break;$--,q--}if(A>$){if(A<=q){const Q=q+1,ne=Q<z?p[Q].el:b;for(;A<=q;)E(null,p[A]=O?Bt(p[A]):at(p[A]),m,ne,S,I,N,x,O),A++}}else if(A>q)for(;A<=$;)Pe(h[A],S,I,!0),A++;else{const Q=A,ne=A,de=new Map;for(A=ne;A<=q;A++){const Ne=p[A]=O?Bt(p[A]):at(p[A]);Ne.key!=null&&de.set(Ne.key,A)}let ce,Le=0;const ke=q-ne+1;let nt=!1,rt=0;const Yn=new Array(ke);for(A=0;A<ke;A++)Yn[A]=0;for(A=Q;A<=$;A++){const Ne=h[A];if(Le>=ke){Pe(Ne,S,I,!0);continue}let st;if(Ne.key!=null)st=de.get(Ne.key);else for(ce=ne;ce<=q;ce++)if(Yn[ce-ne]===0&&qt(Ne,p[ce])){st=ce;break}st===void 0?Pe(Ne,S,I,!0):(Yn[st-ne]=A+1,st>=rt?rt=st:nt=!0,E(Ne,p[st],m,null,S,I,N,x,O),Le++)}const na=nt?ap(Yn):Dn;for(ce=na.length-1,A=ke-1;A>=0;A--){const Ne=ne+A,st=p[Ne],ra=Ne+1<z?p[Ne+1].el:b;Yn[A]===0?E(null,st,m,ra,S,I,N,x,O):nt&&(ce<0||A!==na[ce]?tt(st,m,ra,2):ce--)}}},tt=(h,p,m,b,S=null)=>{const{el:I,type:N,transition:x,children:O,shapeFlag:A}=h;if(A&6){tt(h.component.subTree,p,m,b);return}if(A&128){h.suspense.move(p,m,b);return}if(A&64){N.move(h,p,m,V);return}if(N===Je){r(I,p,m);for(let $=0;$<O.length;$++)tt(O[$],p,m,b);r(h.anchor,p,m);return}if(N===ii){T(h,p,m);return}if(b!==2&&A&1&&x)if(b===0)x.beforeEnter(I),r(I,p,m),ve(()=>x.enter(I),S);else{const{leave:$,delayLeave:q,afterLeave:Q}=x,ne=()=>r(I,p,m),de=()=>{$(I,()=>{ne(),Q&&Q()})};q?q(I,ne,de):de()}else r(I,p,m)},Pe=(h,p,m,b=!1,S=!1)=>{const{type:I,props:N,ref:x,children:O,dynamicChildren:A,shapeFlag:z,patchFlag:$,dirs:q,cacheIndex:Q}=h;if($===-2&&(S=!1),x!=null&&fs(x,null,m,h,!0),Q!=null&&(p.renderCache[Q]=void 0),z&256){p.ctx.deactivate(h);return}const ne=z&1&&q,de=!Un(h);let ce;if(de&&(ce=N&&N.onVnodeBeforeUnmount)&&He(ce,p,h),z&6)Vr(h.component,m,b);else{if(z&128){h.suspense.unmount(m,b);return}ne&&nn(h,null,p,"beforeUnmount"),z&64?h.type.remove(h,p,m,V,b):A&&!A.hasOnce&&(I!==Je||$>0&&$&64)?Ue(A,p,m,!1,!0):(I===Je&&$&384||!S&&z&16)&&Ue(O,p,m),b&&Cn(h)}(de&&(ce=N&&N.onVnodeUnmounted)||ne)&&ve(()=>{ce&&He(ce,p,h),ne&&nn(h,null,p,"unmounted")},m)},Cn=h=>{const{type:p,el:m,anchor:b,transition:S}=h;if(p===Je){An(m,b);return}if(p===ii){_(h);return}const I=()=>{s(m),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(h.shapeFlag&1&&S&&!S.persisted){const{leave:N,delayLeave:x}=S,O=()=>N(m,I);x?x(h.el,I,O):O()}else I()},An=(h,p)=>{let m;for(;h!==p;)m=d(h),s(h),h=m;s(p)},Vr=(h,p,m)=>{const{bum:b,scope:S,job:I,subTree:N,um:x,m:O,a:A}=h;hs(O),hs(A),b&&cr(b),S.stop(),I&&(I.flags|=8,Pe(N,h,p,m)),x&&ve(x,p),ve(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ue=(h,p,m,b=!1,S=!1,I=0)=>{for(let N=I;N<h.length;N++)Pe(h[N],p,m,b,S)},w=h=>{if(h.shapeFlag&6)return w(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const p=d(h.anchor||h.el),m=p&&p[Vl];return m?d(m):p};let U=!1;const M=(h,p,m)=>{h==null?p._vnode&&Pe(p._vnode,null,null,!0):E(p._vnode||null,h,p,null,null,null,m),p._vnode=h,U||(U=!0,ca(),Ul(),U=!1)},V={p:E,um:Pe,m:tt,r:Cn,mt:D,mc:F,pc:ie,pbc:H,n:w,o:e};return{render:M,hydrate:void 0,createApp:Yh(M)}}function si({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function rn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function op(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ro(e,t,n=!1){const r=e.children,s=t.children;if(G(r)&&G(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Bt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Ro(o,a)),a.type===Us&&(a.el=o.el)}}function ap(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function hu(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:hu(t)}function hs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const cp=Symbol.for("v-scx"),lp=()=>We(cp);function Bn(e,t,n){return pu(e,t,n)}function pu(e,t,n=fe){const{immediate:r,deep:s,flush:i,once:o}=n,a=_e({},n),c=t&&r||!t&&i!=="post";let l;if(Tr){if(i==="sync"){const g=lp();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=ct,g.resume=ct,g.pause=ct,g}}const u=ye;a.call=(g,v,E)=>Ze(g,u,v,E);let f=!1;i==="post"?a.scheduler=g=>{ve(g,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(g,v)=>{v?g():Eo(g)}),a.augmentJob=g=>{t&&(g.flags|=4),f&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const d=wh(e,t,a);return Tr&&(l?l.push(d):c&&d()),d}function up(e,t,n){const r=this.proxy,s=ge(e)?e.includes(".")?gu(r,e):()=>r[e]:e.bind(r,r);let i;X(t)?i=t:(i=t.handler,n=t);const o=Mr(this),a=pu(s,i.bind(r),n);return o(),a}function gu(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const fp=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ze(t)}Modifiers`]||e[`${En(t)}Modifiers`];function dp(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||fe;let s=n;const i=t.startsWith("update:"),o=i&&fp(r,t.slice(7));o&&(o.trim&&(s=n.map(u=>ge(u)?u.trim():u)),o.number&&(s=n.map($d)));let a,c=r[a=Ys(t)]||r[a=Ys(ze(t))];!c&&i&&(c=r[a=Ys(En(t))]),c&&Ze(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ze(l,e,6,s)}}function mu(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!X(e)){const c=l=>{const u=mu(l,t,!0);u&&(a=!0,_e(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(pe(e)&&r.set(e,null),null):(G(i)?i.forEach(c=>o[c]=null):_e(o,i),pe(e)&&r.set(e,o),o)}function Fs(e,t){return!e||!Ps(t)?!1:(t=t.slice(2).replace(/Once$/,""),ae(e,t[0].toLowerCase()+t.slice(1))||ae(e,En(t))||ae(e,t))}function ya(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:d,setupState:g,ctx:v,inheritAttrs:E}=e,P=us(e);let k,y;try{if(n.shapeFlag&4){const _=s||r,R=_;k=at(l.call(R,_,u,f,g,d,v)),y=a}else{const _=t;k=at(_.length>1?_(f,{attrs:a,slots:o,emit:c}):_(f,null)),y=t.props?a:hp(a)}}catch(_){hr.length=0,Ns(_,e,1),k=Oe(Ce)}let T=k;if(y&&E!==!1){const _=Object.keys(y),{shapeFlag:R}=T;_.length&&R&7&&(i&&_.some(co)&&(y=pp(y,i)),T=At(T,y,!1,!0))}return n.dirs&&(T=At(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&Qt(T,n.transition),k=T,us(P),k}const hp=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ps(n))&&((t||(t={}))[n]=e[n]);return t},pp=(e,t)=>{const n={};for(const r in e)(!co(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function gp(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ba(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!Fs(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ba(r,o,l):!0:!!o;return!1}function ba(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Fs(n,i))return!0}return!1}function mp({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const ps=e=>e.__isSuspense;function vp(e,t){t&&t.pendingBranch?G(e)?t.effects.push(...e):t.effects.push(e):Sh(e)}const Je=Symbol.for("v-fgt"),Us=Symbol.for("v-txt"),Ce=Symbol.for("v-cmt"),ii=Symbol.for("v-stc"),hr=[];let De=null;function vu(e=!1){hr.push(De=e?null:[])}function _p(){hr.pop(),De=hr[hr.length-1]||null}let Ir=1;function wa(e,t=!1){Ir+=e,e<0&&De&&t&&(De.hasOnce=!0)}function _u(e){return e.dynamicChildren=Ir>0?De||Dn:null,_p(),Ir>0&&De&&De.push(e),e}function bI(e,t,n,r,s,i){return _u(wu(e,t,n,r,s,i,!0))}function yu(e,t,n,r,s){return _u(Oe(e,t,n,r,s,!0))}function Sr(e){return e?e.__v_isVNode===!0:!1}function qt(e,t){return e.type===t.type&&e.key===t.key}const bu=({key:e})=>e??null,Zr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ge(e)||me(e)||X(e)?{i:Ae,r:e,k:t,f:!!n}:e:null);function wu(e,t=null,n=null,r=0,s=null,i=e===Je?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&bu(t),ref:t&&Zr(t),scopeId:jl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ae};return a?(Po(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=ge(n)?8:16),Ir>0&&!o&&De&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&De.push(c),c}const Oe=yp;function yp(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===jh)&&(e=Ce),Sr(e)){const a=At(e,t,!0);return n&&Po(a,n),Ir>0&&!i&&De&&(a.shapeFlag&6?De[De.indexOf(e)]=a:De.push(a)),a.patchFlag=-2,a}if(kp(e)&&(e=e.__vccOpts),t){t=bp(t);let{class:a,style:c}=t;a&&!ge(a)&&(t.class=ho(a)),pe(c)&&(bo(c)&&!G(c)&&(c=_e({},c)),t.style=fo(c))}const o=ge(e)?1:ps(e)?128:ql(e)?64:pe(e)?4:X(e)?2:0;return wu(e,t,n,r,s,o,i,!0)}function bp(e){return e?bo(e)||ou(e)?_e({},e):e:null}function At(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=e,l=t?Ep(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&bu(l),ref:t&&t.ref?n&&i?G(i)?i.concat(Zr(t)):[i,Zr(t)]:Zr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Je?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&At(e.ssContent),ssFallback:e.ssFallback&&At(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Qt(u,c.clone(u)),u}function wp(e=" ",t=0){return Oe(Us,null,e,t)}function wI(e="",t=!1){return t?(vu(),yu(Ce,null,e)):Oe(Ce,null,e)}function at(e){return e==null||typeof e=="boolean"?Oe(Ce):G(e)?Oe(Je,null,e.slice()):Sr(e)?Bt(e):Oe(Us,null,String(e))}function Bt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:At(e)}function Po(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(G(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Po(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!ou(t)?t._ctx=Ae:s===3&&Ae&&(Ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else X(t)?(t={default:t,_ctx:Ae},n=32):(t=String(t),r&64?(n=16,t=[wp(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ep(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=ho([t.class,r.class]));else if(s==="style")t.style=fo([t.style,r.style]);else if(Ps(s)){const i=t[s],o=r[s];o&&i!==o&&!(G(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function He(e,t,n,r=null){Ze(e,t,7,[n,r])}const Ip=ru();let Sp=0;function Tp(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Ip,i={uid:Sp++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ml(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cu(r,s),emitsOptions:mu(r,s),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:r.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=dp.bind(null,i),e.ce&&e.ce(i),i}let ye=null;const Kn=()=>ye||Ae;let gs,$i;{const e=xs(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};gs=t("__VUE_INSTANCE_SETTERS__",n=>ye=n),$i=t("__VUE_SSR_SETTERS__",n=>Tr=n)}const Mr=e=>{const t=ye;return gs(e),e.scope.on(),()=>{e.scope.off(),gs(t)}},Ea=()=>{ye&&ye.scope.off(),gs(null)};function Eu(e){return e.vnode.shapeFlag&4}let Tr=!1;function Cp(e,t=!1,n=!1){t&&$i(t);const{props:r,children:s}=e.vnode,i=Eu(e);Xh(e,r,i,t),np(e,s,n);const o=i?Ap(e,t):void 0;return t&&$i(!1),o}function Ap(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Vh);const{setup:r}=n;if(r){Zt();const s=e.setupContext=r.length>1?Pp(e):null,i=Mr(e),o=Nr(r,e,0,[e.props,s]),a=ll(o);if(en(),i(),(a||e.sp)&&!Un(e)&&Xl(e),a){if(o.then(Ea,Ea),t)return o.then(c=>{Ia(e,c)}).catch(c=>{Ns(c,e,0)});e.asyncDep=o}else Ia(e,o)}else Iu(e)}function Ia(e,t,n){X(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=Dl(t)),Iu(e)}function Iu(e,t,n){const r=e.type;e.render||(e.render=r.render||ct);{const s=Mr(e);Zt();try{qh(e)}finally{en(),s()}}}const Rp={get(e,t){return we(e,"get",""),e[t]}};function Pp(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Rp),slots:e.slots,emit:e.emit,expose:t}}function Bs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Dl(Sn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in dr)return dr[n](e)},has(t,n){return n in t||n in dr}})):e.proxy}function Fi(e,t=!0){return X(e)?e.displayName||e.name:e.name||t&&e.__name}function kp(e){return X(e)&&"__vccOpts"in e}const Y=(e,t)=>yh(e,t,Tr);function J(e,t,n){const r=arguments.length;return r===2?pe(t)&&!G(t)?Sr(t)?Oe(e,null,[t]):Oe(e,t):Oe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Sr(n)&&(n=[n]),Oe(e,t,n))}const Op="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ui;const Sa=typeof window<"u"&&window.trustedTypes;if(Sa)try{Ui=Sa.createPolicy("vue",{createHTML:e=>e})}catch{}const Su=Ui?e=>Ui.createHTML(e):e=>e,xp="http://www.w3.org/2000/svg",Lp="http://www.w3.org/1998/Math/MathML",yt=typeof document<"u"?document:null,Ta=yt&&yt.createElement("template"),Np={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?yt.createElementNS(xp,e):t==="mathml"?yt.createElementNS(Lp,e):n?yt.createElement(e,{is:n}):yt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>yt.createTextNode(e),createComment:e=>yt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ta.innerHTML=Su(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=Ta.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Lt="transition",Xn="animation",qn=Symbol("_vtc"),Tu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Cu=_e({},Gl,Tu),Mp=e=>(e.displayName="Transition",e.props=Cu,e),Dp=Mp((e,{slots:t})=>J(Rh,Au(e),t)),sn=(e,t=[])=>{G(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ca=e=>e?G(e)?e.some(t=>t.length>1):e.length>1:!1;function Au(e){const t={};for(const L in e)L in Tu||(t[L]=e[L]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,v=$p(s),E=v&&v[0],P=v&&v[1],{onBeforeEnter:k,onEnter:y,onEnterCancelled:T,onLeave:_,onLeaveCancelled:R,onBeforeAppear:j=k,onAppear:B=y,onAppearCancelled:F=T}=t,C=(L,ee,D,te)=>{L._enterCancelled=te,Dt(L,ee?u:a),Dt(L,ee?l:o),D&&D()},H=(L,ee)=>{L._isLeaving=!1,Dt(L,f),Dt(L,g),Dt(L,d),ee&&ee()},W=L=>(ee,D)=>{const te=L?B:y,se=()=>C(ee,L,D);sn(te,[ee,se]),Aa(()=>{Dt(ee,L?c:i),it(ee,L?u:a),Ca(te)||Ra(ee,r,E,se)})};return _e(t,{onBeforeEnter(L){sn(k,[L]),it(L,i),it(L,o)},onBeforeAppear(L){sn(j,[L]),it(L,c),it(L,l)},onEnter:W(!1),onAppear:W(!0),onLeave(L,ee){L._isLeaving=!0;const D=()=>H(L,ee);it(L,f),L._enterCancelled?(it(L,d),Bi()):(Bi(),it(L,d)),Aa(()=>{L._isLeaving&&(Dt(L,f),it(L,g),Ca(_)||Ra(L,r,P,D))}),sn(_,[L,D])},onEnterCancelled(L){C(L,!1,void 0,!0),sn(T,[L])},onAppearCancelled(L){C(L,!0,void 0,!0),sn(F,[L])},onLeaveCancelled(L){H(L),sn(R,[L])}})}function $p(e){if(e==null)return null;if(pe(e))return[oi(e.enter),oi(e.leave)];{const t=oi(e);return[t,t]}}function oi(e){return Fd(e)}function it(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[qn]||(e[qn]=new Set)).add(t)}function Dt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[qn];n&&(n.delete(t),n.size||(e[qn]=void 0))}function Aa(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Fp=0;function Ra(e,t,n,r){const s=e._endId=++Fp,i=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Ru(e,t);if(!o)return r();const l=o+"end";let u=0;const f=()=>{e.removeEventListener(l,d),i()},d=g=>{g.target===e&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),e.addEventListener(l,d)}function Ru(e,t){const n=window.getComputedStyle(e),r=v=>(n[v]||"").split(", "),s=r(`${Lt}Delay`),i=r(`${Lt}Duration`),o=Pa(s,i),a=r(`${Xn}Delay`),c=r(`${Xn}Duration`),l=Pa(a,c);let u=null,f=0,d=0;t===Lt?o>0&&(u=Lt,f=o,d=i.length):t===Xn?l>0&&(u=Xn,f=l,d=c.length):(f=Math.max(o,l),u=f>0?o>l?Lt:Xn:null,d=u?u===Lt?i.length:c.length:0);const g=u===Lt&&/\b(transform|all)(,|$)/.test(r(`${Lt}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:g}}function Pa(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>ka(n)+ka(e[r])))}function ka(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Bi(){return document.body.offsetHeight}function Up(e,t,n){const r=e[qn];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Oa=Symbol("_vod"),Bp=Symbol("_vsh"),jp=Symbol(""),Hp=/(^|;)\s*display\s*:/;function Vp(e,t,n){const r=e.style,s=ge(n);let i=!1;if(n&&!s){if(t)if(ge(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&es(r,a,"")}else for(const o in t)n[o]==null&&es(r,o,"");for(const o in n)o==="display"&&(i=!0),es(r,o,n[o])}else if(s){if(t!==n){const o=r[jp];o&&(n+=";"+o),r.cssText=n,i=Hp.test(n)}}else t&&e.removeAttribute("style");Oa in e&&(e[Oa]=i?r.display:"",e[Bp]&&(r.display="none"))}const xa=/\s*!important$/;function es(e,t,n){if(G(n))n.forEach(r=>es(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=qp(e,t);xa.test(n)?e.setProperty(En(r),n.replace(xa,""),"important"):e[r]=n}}const La=["Webkit","Moz","ms"],ai={};function qp(e,t){const n=ai[t];if(n)return n;let r=ze(t);if(r!=="filter"&&r in e)return ai[t]=r;r=Os(r);for(let s=0;s<La.length;s++){const i=La[s]+r;if(i in e)return ai[t]=i}return t}const Na="http://www.w3.org/1999/xlink";function Ma(e,t,n,r,s,i=qd(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Na,t.slice(6,t.length)):e.setAttributeNS(Na,t,n):n==null||i&&!hl(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Xt(n)?String(n):n)}function Da(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Su(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=hl(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Wp(e,t,n,r){e.addEventListener(t,n,r)}function zp(e,t,n,r){e.removeEventListener(t,n,r)}const $a=Symbol("_vei");function Kp(e,t,n,r,s=null){const i=e[$a]||(e[$a]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=Gp(t);if(r){const l=i[t]=Qp(r,s);Wp(e,a,l,c)}else o&&(zp(e,a,o,c),i[t]=void 0)}}const Fa=/(?:Once|Passive|Capture)$/;function Gp(e){let t;if(Fa.test(e)){t={};let r;for(;r=e.match(Fa);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):En(e.slice(2)),t]}let ci=0;const Jp=Promise.resolve(),Yp=()=>ci||(Jp.then(()=>ci=0),ci=Date.now());function Qp(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ze(Xp(r,n.value),t,5,[r])};return n.value=e,n.attached=Yp(),n}function Xp(e,t){if(G(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Ua=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Zp=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?Up(e,r,o):t==="style"?Vp(e,n,r):Ps(t)?co(t)||Kp(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):eg(e,t,r,o))?(Da(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ma(e,t,r,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ge(r))?Da(e,ze(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ma(e,t,r,o))};function eg(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ua(t)&&X(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ua(t)&&ge(n)?!1:t in e}const Pu=new WeakMap,ku=new WeakMap,ms=Symbol("_moveCb"),Ba=Symbol("_enterCb"),tg=e=>(delete e.props.mode,e),ng=tg({name:"TransitionGroup",props:_e({},Cu,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Kn(),r=Kl();let s,i;return Co(()=>{if(!s.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!ag(s[0].el,n.vnode.el,o))return;s.forEach(sg),s.forEach(ig);const a=s.filter(og);Bi(),a.forEach(c=>{const l=c.el,u=l.style;it(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=l[ms]=d=>{d&&d.target!==l||(!d||/transform$/.test(d.propertyName))&&(l.removeEventListener("transitionend",f),l[ms]=null,Dt(l,o))};l.addEventListener("transitionend",f)})}),()=>{const o=re(e),a=Au(o);let c=o.tag||Je;if(s=[],i)for(let l=0;l<i.length;l++){const u=i[l];u.el&&u.el instanceof Element&&(s.push(u),Qt(u,Er(u,a,r,n)),Pu.set(u,u.el.getBoundingClientRect()))}i=t.default?Io(t.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&Qt(u,Er(u,a,r,n))}return Oe(c,null,i)}}}),rg=ng;function sg(e){const t=e.el;t[ms]&&t[ms](),t[Ba]&&t[Ba]()}function ig(e){ku.set(e,e.el.getBoundingClientRect())}function og(e){const t=Pu.get(e),n=ku.get(e),r=t.left-n.left,s=t.top-n.top;if(r||s){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",e}}function ag(e,t,n){const r=e.cloneNode(),s=e[qn];s&&s.forEach(a=>{a.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(r);const{hasTransform:o}=Ru(r);return i.removeChild(r),o}const cg=_e({patchProp:Zp},Np);let ja;function lg(){return ja||(ja=sp(cg))}const Ou=(...e)=>{const t=lg().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=fg(r);if(!s)return;const i=t._component;!X(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,ug(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function ug(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function fg(e){return ge(e)?document.querySelector(e):e}function ko(e,t,n,r){return Object.defineProperty(e,t,{get:n,set:r,enumerable:!0}),e}const gn=pn(!1);let ji;function dg(e,t){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:t[0]||""}}function hg(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const xu="ontouchstart"in window||window.navigator.maxTouchPoints>0;function pg(e){const t=e.toLowerCase(),n=hg(t),r=dg(t,n),s={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};r.browser&&(s[r.browser]=!0,s.version=r.version,s.versionNumber=parseInt(r.version,10)),r.platform&&(s[r.platform]=!0);const i=s.android||s.ios||s.bb||s.blackberry||s.ipad||s.iphone||s.ipod||s.kindle||s.playbook||s.silk||s["windows phone"];if(i===!0||t.indexOf("mobile")!==-1?s.mobile=!0:s.desktop=!0,s["windows phone"]&&(s.winphone=!0,delete s["windows phone"]),s.edga||s.edgios||s.edg?(s.edge=!0,r.browser="edge"):s.crios?(s.chrome=!0,r.browser="chrome"):s.fxios&&(s.firefox=!0,r.browser="firefox"),(s.ipod||s.ipad||s.iphone)&&(s.ios=!0),s.vivaldi&&(r.browser="vivaldi",s.vivaldi=!0),(s.chrome||s.opr||s.safari||s.vivaldi||s.mobile===!0&&s.ios!==!0&&i!==!0)&&(s.webkit=!0),s.opr&&(r.browser="opera",s.opera=!0),s.safari&&(s.blackberry||s.bb?(r.browser="blackberry",s.blackberry=!0):s.playbook?(r.browser="playbook",s.playbook=!0):s.android?(r.browser="android",s.android=!0):s.kindle?(r.browser="kindle",s.kindle=!0):s.silk&&(r.browser="silk",s.silk=!0)),s.name=r.browser,s.platform=r.platform,t.indexOf("electron")!==-1)s.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)s.bex=!0;else{if(window.Capacitor!==void 0?(s.capacitor=!0,s.nativeMobile=!0,s.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(s.cordova=!0,s.nativeMobile=!0,s.nativeMobileWrapper="cordova"),gn.value===!0&&(ji={is:{...s}}),xu===!0&&s.mac===!0&&(s.desktop===!0&&s.safari===!0||s.nativeMobile===!0&&s.android!==!0&&s.ios!==!0&&s.ipad!==!0)){delete s.mac,delete s.desktop;const o=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(s,{mobile:!0,ios:!0,platform:o,[o]:!0})}s.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete s.desktop,s.mobile=!0)}return s}const Ha=navigator.userAgent||navigator.vendor||window.opera,gg={has:{touch:!1,webStorage:!1},within:{iframe:!1}},lt={userAgent:Ha,is:pg(Ha),has:{touch:xu},within:{iframe:window.self!==window.top}},Hi={install(e){const{$q:t}=e;gn.value===!0?(e.onSSRHydrated.push(()=>{Object.assign(t.platform,lt),gn.value=!1}),t.platform=In(this)):t.platform=this}};{let e;ko(lt.has,"webStorage",()=>{if(e!==void 0)return e;try{if(window.localStorage)return e=!0,!0}catch{}return e=!1,!1}),Object.assign(Hi,lt),gn.value===!0&&(Object.assign(Hi,ji,gg),ji=null)}function Dr(e){return Sn(So(e))}function mg(e){return Sn(e)}const js=(e,t)=>{const n=In(e);for(const r in e)ko(t,r,()=>n[r],s=>{n[r]=s});return t},mn={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(mn,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch{}function Cr(){}function EI(e){return e.button===0}function vg(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function Lu(e){e.stopPropagation()}function Vi(e){e.cancelable!==!1&&e.preventDefault()}function Pn(e){e.cancelable!==!1&&e.preventDefault(),e.stopPropagation()}function II(e,t){if(e===void 0||t===!0&&e.__dragPrevented===!0)return;const n=t===!0?r=>{r.__dragPrevented=!0,r.addEventListener("dragstart",Vi,mn.notPassiveCapture)}:r=>{delete r.__dragPrevented,r.removeEventListener("dragstart",Vi,mn.notPassiveCapture)};e.querySelectorAll("a, img").forEach(n)}function _g(e,t,n){const r=`__q_${t}_evt`;e[r]=e[r]!==void 0?e[r].concat(n):n,n.forEach(s=>{s[0].addEventListener(s[1],e[s[2]],mn[s[3]])})}function yg(e,t){const n=`__q_${t}_evt`;e[n]!==void 0&&(e[n].forEach(r=>{r[0].removeEventListener(r[1],e[r[2]],mn[r[3]])}),e[n]=void 0)}function bg(e,t=250,n){let r=null;function s(){const i=arguments,o=()=>{r=null,e.apply(this,i)};r!==null&&clearTimeout(r),r=setTimeout(o,t)}return s.cancel=()=>{r!==null&&clearTimeout(r)},s}const li=["sm","md","lg","xl"],{passive:Va}=mn,wg=js({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:Cr,setDebounce:Cr,install({$q:e,onSSRHydrated:t}){if(e.screen=this,this.__installed===!0){e.config.screen!==void 0&&(e.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,s=document.scrollingElement||document.documentElement,i=n===void 0||lt.is.mobile===!0?()=>[Math.max(window.innerWidth,s.clientWidth),Math.max(window.innerHeight,s.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-s.clientWidth,n.height*n.scale+window.innerHeight-s.clientHeight],o=e.config.screen?.bodyClasses===!0;this.__update=f=>{const[d,g]=i();if(g!==this.height&&(this.height=g),d!==this.width)this.width=d;else if(f!==!0)return;let v=this.sizes;this.gt.xs=d>=v.sm,this.gt.sm=d>=v.md,this.gt.md=d>=v.lg,this.gt.lg=d>=v.xl,this.lt.sm=d<v.sm,this.lt.md=d<v.md,this.lt.lg=d<v.lg,this.lt.xl=d<v.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,v=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",v!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${v}`)),this.name=v)};let a,c={},l=16;this.setSizes=f=>{li.forEach(d=>{f[d]!==void 0&&(c[d]=f[d])})},this.setDebounce=f=>{l=f};const u=()=>{const f=getComputedStyle(document.body);f.getPropertyValue("--q-size-sm")&&li.forEach(d=>{this.sizes[d]=parseInt(f.getPropertyValue(`--q-size-${d}`),10)}),this.setSizes=d=>{li.forEach(g=>{d[g]&&(this.sizes[g]=d[g])}),this.__update(!0)},this.setDebounce=d=>{a!==void 0&&r.removeEventListener("resize",a,Va),a=d>0?bg(this.__update,d):this.__update,r.addEventListener("resize",a,Va)},this.setDebounce(l),Object.keys(c).length!==0?(this.setSizes(c),c=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};gn.value===!0?t.push(u):u()}}),be=js({isActive:!1,mode:!1},{__media:void 0,set(e){be.mode=e,e==="auto"?(be.__media===void 0&&(be.__media=window.matchMedia("(prefers-color-scheme: dark)"),be.__updateMedia=()=>{be.set("auto")},be.__media.addListener(be.__updateMedia)),e=be.__media.matches):be.__media!==void 0&&(be.__media.removeListener(be.__updateMedia),be.__media=void 0),be.isActive=e===!0,document.body.classList.remove(`body--${e===!0?"light":"dark"}`),document.body.classList.add(`body--${e===!0?"dark":"light"}`)},toggle(){be.set(be.isActive===!1)},install({$q:e,ssrContext:t}){const{dark:n}=e.config;e.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}});function Eg(e,t,n=document.body){if(typeof e!="string")throw new TypeError("Expected a string as propName");if(typeof t!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${e}`,t)}let Nu=!1;function Ig(e){Nu=e.isComposing===!0}function Sg(e){return Nu===!0||e!==Object(e)||e.isComposing===!0||e.qKeyEvent===!0}function qi(e,t){return Sg(e)===!0?!1:[].concat(t).includes(e.keyCode)}function Mu(e){if(e.ios===!0)return"ios";if(e.android===!0)return"android"}function Tg({is:e,has:t,within:n},r){const s=[e.desktop===!0?"desktop":"mobile",`${t.touch===!1?"no-":""}touch`];if(e.mobile===!0){const i=Mu(e);i!==void 0&&s.push("platform-"+i)}if(e.nativeMobile===!0){const i=e.nativeMobileWrapper;s.push(i),s.push("native-mobile"),e.ios===!0&&(r[i]===void 0||r[i].iosStatusBarPadding!==!1)&&s.push("q-ios-padding")}else e.electron===!0?s.push("electron"):e.bex===!0&&s.push("bex");return n.iframe===!0&&s.push("within-iframe"),s}function Cg(){const{is:e}=lt,t=document.body.className,n=new Set(t.replace(/ {2}/g," ").split(" "));if(e.nativeMobile!==!0&&e.electron!==!0&&e.bex!==!0){if(e.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(e.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const s=Mu(e);s!==void 0&&n.add(`platform-${s}`)}}lt.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),lt.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");t!==r&&(document.body.className=r)}function Ag(e){for(const t in e)Eg(t,e[t])}const Rg={install(e){if(this.__installed!==!0){if(gn.value===!0)Cg();else{const{$q:t}=e;t.config.brand!==void 0&&Ag(t.config.brand);const n=Tg(lt,t.config);document.body.classList.add.apply(document.body.classList,n)}lt.is.ios===!0&&document.body.addEventListener("touchstart",Cr),window.addEventListener("keydown",Ig,!0)}}},Du=()=>!0;function Pg(e){return typeof e=="string"&&e!==""&&e!=="/"&&e!=="#/"}function kg(e){return e.startsWith("#")===!0&&(e=e.substring(1)),e.startsWith("/")===!1&&(e="/"+e),e.endsWith("/")===!0&&(e=e.substring(0,e.length-1)),"#"+e}function Og(e){if(e.backButtonExit===!1)return()=>!1;if(e.backButtonExit==="*")return Du;const t=["#/"];return Array.isArray(e.backButtonExit)===!0&&t.push(...e.backButtonExit.filter(Pg).map(kg)),()=>t.includes(window.location.hash)}const xg={__history:[],add:Cr,remove:Cr,install({$q:e}){if(this.__installed===!0)return;const{cordova:t,capacitor:n}=lt.is;if(t!==!0&&n!==!0)return;const r=e.config[t===!0?"cordova":"capacitor"];if(r?.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=Du),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const s=Og(Object.assign({backButtonExit:!0},r)),i=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else s()===!0?navigator.app.exitApp():window.history.back()};t===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",i,!1)}):window.Capacitor.Plugins.App.addListener("backButton",i)}},qa={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:e=>e?`Expand "${e}"`:"Expand",collapse:e=>e?`Collapse "${e}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days",prevMonth:"Previous month",nextMonth:"Next month",prevYear:"Previous year",nextYear:"Next year",today:"Today",prevRangeYears:e=>`Previous ${e} years`,nextRangeYears:e=>`Next ${e} years`},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>e===1?"1 record selected.":(e===0?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,n)=>e+"-"+t+" of "+n,columns:"Columns"},pagination:{first:"First page",prev:"Previous page",next:"Next page",last:"Last page"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Wa(){const e=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof e=="string")return e.split(/[-_]/).map((t,n)=>n===0?t.toLowerCase():n>1||t.length<4?t.toUpperCase():t[0].toUpperCase()+t.slice(1).toLowerCase()).join("-")}const jt=js({__qLang:{}},{getLocale:Wa,set(e=qa,t){const n={...e,rtl:e.rtl===!0,getLocale:Wa};{if(n.set=jt.set,jt.__langConfig===void 0||jt.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(jt.__qLang,n)}},install({$q:e,lang:t,ssrContext:n}){e.lang=jt.__qLang,jt.__langConfig=e.config.lang,this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set"&&s!=="getLocale")}}),this.set(t||qa))}}),Lg={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},vs=js({iconMapFn:null,__qIconSet:{}},{set(e,t){const n={...e};n.set=vs.set,Object.assign(vs.__qIconSet,n)},install({$q:e,iconSet:t,ssrContext:n}){e.config.iconMapFn!==void 0&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__qIconSet,ko(e,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set")}}),this.set(t||Lg))}}),Ng="_q_",SI="_q_l_",TI="_q_pc_",CI="_q_fo_",AI="_q_tabs_";function RI(){}const _s={};let $u=!1;function Mg(){$u=!0}function Ar(e){return e!==null&&typeof e=="object"&&Array.isArray(e)!==!0}const za=[Hi,Rg,be,wg,xg,jt,vs];function Dg(e,t){const n=Ou(e);n.config.globalProperties=t.config.globalProperties;const{reload:r,...s}=t._context;return Object.assign(n._context,s),n}function Ka(e,t){t.forEach(n=>{n.install(e),n.__installed=!0})}function $g(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(Ng,n.$q),Ka(n,za),t.components!==void 0&&Object.values(t.components).forEach(r=>{Ar(r)===!0&&r.name!==void 0&&e.component(r.name,r)}),t.directives!==void 0&&Object.values(t.directives).forEach(r=>{Ar(r)===!0&&r.name!==void 0&&e.directive(r.name,r)}),t.plugins!==void 0&&Ka(n,Object.values(t.plugins).filter(r=>typeof r.install=="function"&&za.includes(r)===!1)),gn.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}const Fg=function(e,t={}){const n={version:"2.18.1"};$u===!1?(t.config!==void 0&&Object.assign(_s,t.config),n.config={..._s},Mg()):n.config=t.config||{},$g(e,t,{parentApp:e,$q:n,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})},Ug={name:"Quasar",version:"2.18.1",install:Fg,lang:jt,iconSet:vs},Bg={__name:"App",setup(e){return(t,n)=>{const r=Bh("router-view");return vu(),yu(r)}}},Oo=e=>e,PI=Oo,jg=Oo,Hg=Oo;/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Fu;const Hs=e=>Fu=e,Uu=Symbol();function Wi(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var pr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(pr||(pr={}));function Vg(){const e=vl(!0),t=e.run(()=>pn({}));let n=[],r=[];const s=Sn({install(i){Hs(s),s._a=i,i.provide(Uu,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const Bu=()=>{};function Ga(e,t,n,r=Bu){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&_l()&&zd(s),s}function kn(e,...t){e.slice().forEach(n=>{n(...t)})}const qg=e=>e(),Ja=Symbol(),ui=Symbol();function zi(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,r)=>e.set(r,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];Wi(s)&&Wi(r)&&e.hasOwnProperty(n)&&!me(r)&&!Gt(r)?e[n]=zi(s,r):e[n]=r}return e}const Wg=Symbol();function zg(e){return!Wi(e)||!Object.prototype.hasOwnProperty.call(e,Wg)}const{assign:$t}=Object;function Kg(e){return!!(me(e)&&e.effect)}function Gg(e,t,n,r){const{state:s,actions:i,getters:o}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=s?s():{});const u=gh(n.state.value[e]);return $t(u,i,Object.keys(o||{}).reduce((f,d)=>(f[d]=Sn(Y(()=>{Hs(n);const g=n._s.get(e);return o[d].call(g,g)})),f),{}))}return c=ju(e,l,t,n,r,!0),c}function ju(e,t,n={},r,s,i){let o;const a=$t({actions:{}},n),c={deep:!0};let l,u,f=[],d=[],g;const v=r.state.value[e];!i&&!v&&(r.state.value[e]={}),pn({});let E;function P(F){let C;l=u=!1,typeof F=="function"?(F(r.state.value[e]),C={type:pr.patchFunction,storeId:e,events:g}):(zi(r.state.value[e],F),C={type:pr.patchObject,payload:F,storeId:e,events:g});const H=E=Symbol();wo().then(()=>{E===H&&(l=!0)}),u=!0,kn(f,C,r.state.value[e])}const k=i?function(){const{state:C}=n,H=C?C():{};this.$patch(W=>{$t(W,H)})}:Bu;function y(){o.stop(),f=[],d=[],r._s.delete(e)}const T=(F,C="")=>{if(Ja in F)return F[ui]=C,F;const H=function(){Hs(r);const W=Array.from(arguments),L=[],ee=[];function D(Z){L.push(Z)}function te(Z){ee.push(Z)}kn(d,{args:W,name:H[ui],store:R,after:D,onError:te});let se;try{se=F.apply(this&&this.$id===e?this:R,W)}catch(Z){throw kn(ee,Z),Z}return se instanceof Promise?se.then(Z=>(kn(L,Z),Z)).catch(Z=>(kn(ee,Z),Promise.reject(Z))):(kn(L,se),se)};return H[Ja]=!0,H[ui]=C,H},_={_p:r,$id:e,$onAction:Ga.bind(null,d),$patch:P,$reset:k,$subscribe(F,C={}){const H=Ga(f,F,C.detached,()=>W()),W=o.run(()=>Bn(()=>r.state.value[e],L=>{(C.flush==="sync"?u:l)&&F({storeId:e,type:pr.direct,events:g},L)},$t({},c,C)));return H},$dispose:y},R=In(_);r._s.set(e,R);const B=(r._a&&r._a.runWithContext||qg)(()=>r._e.run(()=>(o=vl()).run(()=>t({action:T}))));for(const F in B){const C=B[F];if(me(C)&&!Kg(C)||Gt(C))i||(v&&zg(C)&&(me(C)?C.value=v[F]:zi(C,v[F])),r.state.value[e][F]=C);else if(typeof C=="function"){const H=T(C,F);B[F]=H,a.actions[F]=C}}return $t(R,B),$t(re(R),B),Object.defineProperty(R,"$state",{get:()=>r.state.value[e],set:F=>{P(C=>{$t(C,F)})}}),r._p.forEach(F=>{$t(R,o.run(()=>F({store:R,app:r._a,pinia:r,options:a})))}),v&&i&&n.hydrate&&n.hydrate(R.$state,v),l=!0,u=!0,R}/*! #__NO_SIDE_EFFECTS__ */function Jg(e,t,n){let r;const s=typeof t=="function";r=s?n:t;function i(o,a){const c=Qh();return o=o||(c?We(Uu,null):null),o&&Hs(o),o=Fu,o._s.has(e)||(s?ju(e,t,r,o):Gg(e,r,o)),o._s.get(e)}return i.$id=e,i}const fi=Hg(()=>Vg());/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Mn=typeof document<"u";function Hu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Yg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Hu(e.default)}const oe=Object.assign;function di(e,t){const n={};for(const r in t){const s=t[r];n[r]=et(s)?s.map(e):e(s)}return n}const gr=()=>{},et=Array.isArray,Vu=/#/g,Qg=/&/g,Xg=/\//g,Zg=/=/g,em=/\?/g,qu=/\+/g,tm=/%5B/g,nm=/%5D/g,Wu=/%5E/g,rm=/%60/g,zu=/%7B/g,sm=/%7C/g,Ku=/%7D/g,im=/%20/g;function xo(e){return encodeURI(""+e).replace(sm,"|").replace(tm,"[").replace(nm,"]")}function om(e){return xo(e).replace(zu,"{").replace(Ku,"}").replace(Wu,"^")}function Ki(e){return xo(e).replace(qu,"%2B").replace(im,"+").replace(Vu,"%23").replace(Qg,"%26").replace(rm,"`").replace(zu,"{").replace(Ku,"}").replace(Wu,"^")}function am(e){return Ki(e).replace(Zg,"%3D")}function cm(e){return xo(e).replace(Vu,"%23").replace(em,"%3F")}function lm(e){return e==null?"":cm(e).replace(Xg,"%2F")}function Rr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const um=/\/$/,fm=e=>e.replace(um,"");function hi(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=gm(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Rr(o)}}function dm(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ya(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function hm(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Wn(t.matched[r],n.matched[s])&&Gu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Wn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Gu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!pm(e[n],t[n]))return!1;return!0}function pm(e,t){return et(e)?Qa(e,t):et(t)?Qa(t,e):e===t}function Qa(e,t){return et(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function gm(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Pr;(function(e){e.pop="pop",e.push="push"})(Pr||(Pr={}));var mr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(mr||(mr={}));function mm(e){if(!e)if(Mn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),fm(e)}const vm=/^[^#]+#/;function _m(e,t){return e.replace(vm,"#")+t}function ym(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Vs=()=>({left:window.scrollX,top:window.scrollY});function bm(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=ym(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Xa(e,t){return(history.state?history.state.position-t:-1)+e}const Gi=new Map;function wm(e,t){Gi.set(e,t)}function Em(e){const t=Gi.get(e);return Gi.delete(e),t}let Im=()=>location.protocol+"//"+location.host;function Ju(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ya(c,"")}return Ya(n,e)+r+s}function Sm(e,t,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const g=Ju(e,location),v=n.value,E=t.value;let P=0;if(d){if(n.value=g,t.value=d,o&&o===v){o=null;return}P=E?d.position-E.position:0}else r(g);s.forEach(k=>{k(n.value,v,{delta:P,type:Pr.pop,direction:P?P>0?mr.forward:mr.back:mr.unknown})})};function c(){o=n.value}function l(d){s.push(d);const g=()=>{const v=s.indexOf(d);v>-1&&s.splice(v,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(oe({},d.state,{scroll:Vs()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Za(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Vs():null}}function Tm(e){const{history:t,location:n}=window,r={value:Ju(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:Im()+e+c;try{t[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=oe({},t.state,Za(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=oe({},s.value,t.state,{forward:c,scroll:Vs()});i(u.current,u,!0);const f=oe({},Za(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Cm(e){e=mm(e);const t=Tm(e),n=Sm(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=oe({location:"",base:e,go:r,createHref:_m.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Am(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Cm(e)}function Rm(e){return typeof e=="string"||e&&typeof e=="object"}function Yu(e){return typeof e=="string"||typeof e=="symbol"}const Qu=Symbol("");var ec;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ec||(ec={}));function zn(e,t){return oe(new Error,{type:e,[Qu]:!0},t)}function _t(e,t){return e instanceof Error&&Qu in e&&(t==null||!!(e.type&t))}const tc="[^/]+?",Pm={sensitive:!1,strict:!1,start:!0,end:!0},km=/[.+*?^${}()[\]/\\]/g;function Om(e,t){const n=oe({},Pm,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const d=l[f];let g=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(km,"\\$&"),g+=40;else if(d.type===1){const{value:v,repeatable:E,optional:P,regexp:k}=d;i.push({name:v,repeatable:E,optional:P});const y=k||tc;if(y!==tc){g+=10;try{new RegExp(`(${y})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${v}" (${y}): `+_.message)}}let T=E?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(T=P&&l.length<2?`(?:/${T})`:"/"+T),P&&(T+="?"),s+=T,g+=20,P&&(g+=-8),E&&(g+=-20),y===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",v=i[d-1];f[v.name]=g&&v.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:v,repeatable:E,optional:P}=g,k=v in l?l[v]:"";if(et(k)&&!E)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const y=et(k)?k.join("/"):k;if(!y)if(P)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=y}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function xm(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Xu(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=xm(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(nc(r))return 1;if(nc(s))return-1}return s.length-r.length}function nc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Lm={type:0,value:""},Nm=/[a-zA-Z0-9_]/;function Mm(e){if(!e)return[[]];if(e==="/")return[[Lm]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:Nm.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Dm(e,t,n){const r=Om(Mm(e.path),n),s=oe(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function $m(e,t){const n=[],r=new Map;t=oc({strict:!1,end:!0,sensitive:!1},t);function s(f){return r.get(f)}function i(f,d,g){const v=!g,E=sc(f);E.aliasOf=g&&g.record;const P=oc(t,f),k=[E];if("alias"in f){const _=typeof f.alias=="string"?[f.alias]:f.alias;for(const R of _)k.push(sc(oe({},E,{components:g?g.record.components:E.components,path:R,aliasOf:g?g.record:E})))}let y,T;for(const _ of k){const{path:R}=_;if(d&&R[0]!=="/"){const j=d.record.path,B=j[j.length-1]==="/"?"":"/";_.path=d.record.path+(R&&B+R)}if(y=Dm(_,d,P),g?g.alias.push(y):(T=T||y,T!==y&&T.alias.push(y),v&&f.name&&!ic(y)&&o(f.name)),Zu(y)&&c(y),E.children){const j=E.children;for(let B=0;B<j.length;B++)i(j[B],y,g&&g.children[B])}g=g||y}return T?()=>{o(T)}:gr}function o(f){if(Yu(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const d=Bm(f,n);n.splice(d,0,f),f.record.name&&!ic(f)&&r.set(f.record.name,f)}function l(f,d){let g,v={},E,P;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw zn(1,{location:f});P=g.record.name,v=oe(rc(d.params,g.keys.filter(T=>!T.optional).concat(g.parent?g.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),f.params&&rc(f.params,g.keys.map(T=>T.name))),E=g.stringify(v)}else if(f.path!=null)E=f.path,g=n.find(T=>T.re.test(E)),g&&(v=g.parse(E),P=g.record.name);else{if(g=d.name?r.get(d.name):n.find(T=>T.re.test(d.path)),!g)throw zn(1,{location:f,currentLocation:d});P=g.record.name,v=oe({},d.params,f.params),E=g.stringify(v)}const k=[];let y=g;for(;y;)k.unshift(y.record),y=y.parent;return{name:P,path:E,params:v,matched:k,meta:Um(k)}}e.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function rc(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function sc(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Fm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Fm(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function ic(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Um(e){return e.reduce((t,n)=>oe(t,n.meta),{})}function oc(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Bm(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;Xu(e,t[i])<0?r=i:n=i+1}const s=jm(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function jm(e){let t=e;for(;t=t.parent;)if(Zu(t)&&Xu(e,t)===0)return t}function Zu({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Hm(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(qu," "),o=i.indexOf("="),a=Rr(o<0?i:i.slice(0,o)),c=o<0?null:Rr(i.slice(o+1));if(a in t){let l=t[a];et(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function ac(e){let t="";for(let n in e){const r=e[n];if(n=am(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(et(r)?r.map(i=>i&&Ki(i)):[r&&Ki(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Vm(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=et(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const qm=Symbol(""),cc=Symbol(""),qs=Symbol(""),Lo=Symbol(""),Ji=Symbol("");function Zn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ht(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(zn(4,{from:n,to:t})):d instanceof Error?c(d):Rm(d)?c(zn(2,{from:t,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>e.call(r&&r.instances[s],t,n,l));let f=Promise.resolve(u);e.length<3&&(f=f.then(l)),f.catch(d=>c(d))})}function pi(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Hu(c)){const u=(c.__vccOpts||c)[t];u&&i.push(Ht(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Yg(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const g=(f.__vccOpts||f)[t];return g&&Ht(g,n,r,o,a,s)()}))}}return i}function lc(e){const t=We(qs),n=We(Lo),r=Y(()=>{const c=fn(e.to);return t.resolve(c)}),s=Y(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Wn.bind(null,u));if(d>-1)return d;const g=uc(c[l-2]);return l>1&&uc(u)===g&&f[f.length-1].path!==g?f.findIndex(Wn.bind(null,c[l-2])):d}),i=Y(()=>s.value>-1&&Jm(n.params,r.value.params)),o=Y(()=>s.value>-1&&s.value===n.matched.length-1&&Gu(n.params,r.value.params));function a(c={}){if(Gm(c)){const l=t[fn(e.replace)?"replace":"push"](fn(e.to)).catch(gr);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:Y(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function Wm(e){return e.length===1?e[0]:e}const zm=So({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:lc,setup(e,{slots:t}){const n=In(lc(e)),{options:r}=We(qs),s=Y(()=>({[fc(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[fc(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Wm(t.default(n));return e.custom?i:J("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Km=zm;function Gm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Jm(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!et(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function uc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const fc=(e,t,n)=>e??t??n,Ym=So({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=We(Ji),s=Y(()=>e.route||r.value),i=We(cc,0),o=Y(()=>{let l=fn(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Y(()=>s.value.matched[o.value]);Xr(cc,Y(()=>o.value+1)),Xr(qm,a),Xr(Ji,s);const c=pn();return Bn(()=>[c.value,a.value,e.name],([l,u,f],[d,g,v])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Wn(u,g)||!d)&&(u.enterCallbacks[f]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=a.value,d=f&&f.components[u];if(!d)return dc(n.default,{Component:d,route:l});const g=f.props[u],v=g?g===!0?l.params:typeof g=="function"?g(l):g:null,P=J(d,oe({},v,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return dc(n.default,{Component:P,route:l})||P}}});function dc(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Qm=Ym;function Xm(e){const t=$m(e.routes,e),n=e.parseQuery||Hm,r=e.stringifyQuery||ac,s=e.history,i=Zn(),o=Zn(),a=Zn(),c=dh(Nt);let l=Nt;Mn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=di.bind(null,w=>""+w),f=di.bind(null,lm),d=di.bind(null,Rr);function g(w,U){let M,V;return Yu(w)?(M=t.getRecordMatcher(w),V=U):V=w,t.addRoute(V,M)}function v(w){const U=t.getRecordMatcher(w);U&&t.removeRoute(U)}function E(){return t.getRoutes().map(w=>w.record)}function P(w){return!!t.getRecordMatcher(w)}function k(w,U){if(U=oe({},U||c.value),typeof w=="string"){const m=hi(n,w,U.path),b=t.resolve({path:m.path},U),S=s.createHref(m.fullPath);return oe(m,b,{params:d(b.params),hash:Rr(m.hash),redirectedFrom:void 0,href:S})}let M;if(w.path!=null)M=oe({},w,{path:hi(n,w.path,U.path).path});else{const m=oe({},w.params);for(const b in m)m[b]==null&&delete m[b];M=oe({},w,{params:f(m)}),U.params=f(U.params)}const V=t.resolve(M,U),le=w.hash||"";V.params=u(d(V.params));const h=dm(r,oe({},w,{hash:om(le),path:V.path})),p=s.createHref(h);return oe({fullPath:h,hash:le,query:r===ac?Vm(w.query):w.query||{}},V,{redirectedFrom:void 0,href:p})}function y(w){return typeof w=="string"?hi(n,w,c.value.path):oe({},w)}function T(w,U){if(l!==w)return zn(8,{from:U,to:w})}function _(w){return B(w)}function R(w){return _(oe(y(w),{replace:!0}))}function j(w){const U=w.matched[w.matched.length-1];if(U&&U.redirect){const{redirect:M}=U;let V=typeof M=="function"?M(w):M;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=y(V):{path:V},V.params={}),oe({query:w.query,hash:w.hash,params:V.path!=null?{}:w.params},V)}}function B(w,U){const M=l=k(w),V=c.value,le=w.state,h=w.force,p=w.replace===!0,m=j(M);if(m)return B(oe(y(m),{state:typeof m=="object"?oe({},le,m.state):le,force:h,replace:p}),U||M);const b=M;b.redirectedFrom=U;let S;return!h&&hm(r,V,M)&&(S=zn(16,{to:b,from:V}),tt(V,V,!0,!1)),(S?Promise.resolve(S):H(b,V)).catch(I=>_t(I)?_t(I,2)?I:xt(I):ie(I,b,V)).then(I=>{if(I){if(_t(I,2))return B(oe({replace:p},y(I.to),{state:typeof I.to=="object"?oe({},le,I.to.state):le,force:h}),U||b)}else I=L(b,V,!0,p,le);return W(b,V,I),I})}function F(w,U){const M=T(w,U);return M?Promise.reject(M):Promise.resolve()}function C(w){const U=An.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(w):w()}function H(w,U){let M;const[V,le,h]=Zm(w,U);M=pi(V.reverse(),"beforeRouteLeave",w,U);for(const m of V)m.leaveGuards.forEach(b=>{M.push(Ht(b,w,U))});const p=F.bind(null,w,U);return M.push(p),Ue(M).then(()=>{M=[];for(const m of i.list())M.push(Ht(m,w,U));return M.push(p),Ue(M)}).then(()=>{M=pi(le,"beforeRouteUpdate",w,U);for(const m of le)m.updateGuards.forEach(b=>{M.push(Ht(b,w,U))});return M.push(p),Ue(M)}).then(()=>{M=[];for(const m of h)if(m.beforeEnter)if(et(m.beforeEnter))for(const b of m.beforeEnter)M.push(Ht(b,w,U));else M.push(Ht(m.beforeEnter,w,U));return M.push(p),Ue(M)}).then(()=>(w.matched.forEach(m=>m.enterCallbacks={}),M=pi(h,"beforeRouteEnter",w,U,C),M.push(p),Ue(M))).then(()=>{M=[];for(const m of o.list())M.push(Ht(m,w,U));return M.push(p),Ue(M)}).catch(m=>_t(m,8)?m:Promise.reject(m))}function W(w,U,M){a.list().forEach(V=>C(()=>V(w,U,M)))}function L(w,U,M,V,le){const h=T(w,U);if(h)return h;const p=U===Nt,m=Mn?history.state:{};M&&(V||p?s.replace(w.fullPath,oe({scroll:p&&m&&m.scroll},le)):s.push(w.fullPath,le)),c.value=w,tt(w,U,M,p),xt()}let ee;function D(){ee||(ee=s.listen((w,U,M)=>{if(!Vr.listening)return;const V=k(w),le=j(V);if(le){B(oe(le,{replace:!0,force:!0}),V).catch(gr);return}l=V;const h=c.value;Mn&&wm(Xa(h.fullPath,M.delta),Vs()),H(V,h).catch(p=>_t(p,12)?p:_t(p,2)?(B(oe(y(p.to),{force:!0}),V).then(m=>{_t(m,20)&&!M.delta&&M.type===Pr.pop&&s.go(-1,!1)}).catch(gr),Promise.reject()):(M.delta&&s.go(-M.delta,!1),ie(p,V,h))).then(p=>{p=p||L(V,h,!1),p&&(M.delta&&!_t(p,8)?s.go(-M.delta,!1):M.type===Pr.pop&&_t(p,20)&&s.go(-1,!1)),W(V,h,p)}).catch(gr)}))}let te=Zn(),se=Zn(),Z;function ie(w,U,M){xt(w);const V=se.list();return V.length?V.forEach(le=>le(w,U,M)):console.error(w),Promise.reject(w)}function mt(){return Z&&c.value!==Nt?Promise.resolve():new Promise((w,U)=>{te.add([w,U])})}function xt(w){return Z||(Z=!w,D(),te.list().forEach(([U,M])=>w?M(w):U()),te.reset()),w}function tt(w,U,M,V){const{scrollBehavior:le}=e;if(!Mn||!le)return Promise.resolve();const h=!M&&Em(Xa(w.fullPath,0))||(V||!M)&&history.state&&history.state.scroll||null;return wo().then(()=>le(w,U,h)).then(p=>p&&bm(p)).catch(p=>ie(p,w,U))}const Pe=w=>s.go(w);let Cn;const An=new Set,Vr={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:P,getRoutes:E,resolve:k,options:e,push:_,replace:R,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:se.add,isReady:mt,install(w){const U=this;w.component("RouterLink",Km),w.component("RouterView",Qm),w.config.globalProperties.$router=U,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>fn(c)}),Mn&&!Cn&&c.value===Nt&&(Cn=!0,_(s.location).catch(le=>{}));const M={};for(const le in Nt)Object.defineProperty(M,le,{get:()=>c.value[le],enumerable:!0});w.provide(qs,U),w.provide(Lo,Ll(M)),w.provide(Ji,c);const V=w.unmount;An.add(w),w.unmount=function(){An.delete(w),An.size<1&&(l=Nt,ee&&ee(),ee=null,c.value=Nt,Cn=!1,Z=!1),V()}}};function Ue(w){return w.reduce((U,M)=>U.then(()=>C(M)),Promise.resolve())}return Vr}function Zm(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>Wn(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>Wn(l,c))||s.push(c))}return[n,r,s]}function kI(){return We(qs)}function OI(e){return We(Lo)}const ev=[{path:"/",component:()=>Me(()=>import("./MainLayout-CBrK1OjF.js"),__vite__mapDeps([0,1,2,3,4])),children:[{path:"",component:()=>Me(()=>import("./LandingPage-Bd8YgZqL.js"),__vite__mapDeps([5,6,3,7,8,9,10,11]))},{path:"login",component:()=>Me(()=>import("./LoginPage-B8kBeDwy.js"),__vite__mapDeps([12,13,14,8,15,2,7,9,4,10,16]))},{path:"signup",component:()=>Me(()=>import("./SignupPage-BwEesSoE.js"),__vite__mapDeps([17,13,14,8,15,2,7,9,4,10,18]))},{path:"verify-email",component:()=>Me(()=>import("./VerifyEmail-Dx6EEzSU.js"),__vite__mapDeps([19,14,8,9,4]))},{path:"action",component:()=>Me(()=>import("./AuthAction-B7st57eT.js"),__vite__mapDeps([20,9]))},{path:"dashboard",component:()=>Me(()=>import("./DashboardPage-CEbl-e3n.js"),__vite__mapDeps([21,1,2,3,14,8,6,13,7,9,4,10,22])),meta:{requiresAuth:!0}},{path:"terms",component:()=>Me(()=>import("./TermsOfService-CD8f_4M4.js"),__vite__mapDeps([23,9,10,24]))},{path:"/privacy",component:()=>Me(()=>import("./PrivacyPolicy-yVocSVBj.js"),__vite__mapDeps([25,9,10,26]))},{path:"/about",component:()=>Me(()=>import("./AboutPage-BwT5xqXn.js"),__vite__mapDeps([27,9,10,28]))}]},{path:"/:catchAll(.*)*",component:()=>Me(()=>import("./ErrorNotFound-C8-PVKLI.js"),[])}];const tv=()=>{};var hc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},nv=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},tf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),r.push(n[u],n[f],n[d],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ef(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):nv(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new rv;const d=i<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const v=l<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class rv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sv=function(e){const t=ef(e);return tf.encodeByteArray(t,!0)},nf=function(e){return sv(e).replace(/\./g,"")},rf=function(e){try{return tf.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=()=>iv().__FIREBASE_DEFAULTS__,av=()=>{if(typeof process>"u"||typeof hc>"u")return;const e=hc.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},cv=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&rf(e[1]);return t&&JSON.parse(t)},No=()=>{try{return tv()||ov()||av()||cv()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},lv=e=>{var t,n;return(n=(t=No())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},sf=()=>{var e;return(e=No())===null||e===void 0?void 0:e.config},of=e=>{var t;return(t=No())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function dv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function af(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function hv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pv(){const e=Re();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function cf(){try{return typeof indexedDB=="object"}catch{return!1}}function lf(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function gv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="FirebaseError";class ht extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=mv,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tn.prototype.create)}}class Tn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?vv(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ht(s,a,r)}}function vv(e,t){return e.replace(_v,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const _v=/\{\$([^}]+)}/g;function yv(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function vn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(pc(i)&&pc(o)){if(!vn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function pc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function rr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function sr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function bv(e,t){const n=new wv(e,t);return n.subscribe.bind(n)}class wv{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ev(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=gi),s.error===void 0&&(s.error=gi),s.complete===void 0&&(s.complete=gi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ev(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function gi(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=1e3,Sv=2,Tv=4*60*60*1e3,Cv=.5;function gc(e,t=Iv,n=Sv){const r=t*Math.pow(n,e),s=Math.round(Cv*r*(Math.random()-.5)*2);return Math.min(Tv,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(e){return e&&e._delegate?e._delegate:e}class dt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new uv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t?.identifier),s=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Pv(t))try{this.getOrInitializeService({instanceIdentifier:an})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=an){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=an){return this.instances.has(t)}getOptions(t=an){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rv(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=an){return this.component?this.component.multipleInstances?t:an:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rv(e){return e===an?void 0:e}function Pv(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Av(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ue||(ue={}));const Ov={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},xv=ue.INFO,Lv={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Nv=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Lv[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Mo{constructor(t){this.name=t,this._logLevel=xv,this._logHandler=Nv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ue))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ov[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...t),this._logHandler(this,ue.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...t),this._logHandler(this,ue.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...t),this._logHandler(this,ue.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...t),this._logHandler(this,ue.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...t),this._logHandler(this,ue.ERROR,...t)}}const Mv=(e,t)=>t.some(n=>e instanceof n);let mc,vc;function Dv(){return mc||(mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $v(){return vc||(vc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uf=new WeakMap,Yi=new WeakMap,ff=new WeakMap,mi=new WeakMap,Do=new WeakMap;function Fv(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Jt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&uf.set(n,e)}).catch(()=>{}),Do.set(t,e),t}function Uv(e){if(Yi.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Yi.set(e,t)}let Qi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Yi.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ff.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Bv(e){Qi=e(Qi)}function jv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(vi(this),t,...n);return ff.set(r,t.sort?t.sort():[t]),Jt(r)}:$v().includes(e)?function(...t){return e.apply(vi(this),t),Jt(uf.get(this))}:function(...t){return Jt(e.apply(vi(this),t))}}function Hv(e){return typeof e=="function"?jv(e):(e instanceof IDBTransaction&&Uv(e),Mv(e,Dv())?new Proxy(e,Qi):e)}function Jt(e){if(e instanceof IDBRequest)return Fv(e);if(mi.has(e))return mi.get(e);const t=Hv(e);return t!==e&&(mi.set(e,t),Do.set(t,e)),t}const vi=e=>Do.get(e);function df(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Jt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Jt(o.result),c.oldVersion,c.newVersion,Jt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Vv=["get","getKey","getAll","getAllKeys","count"],qv=["put","add","delete","clear"],_i=new Map;function _c(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(_i.get(t))return _i.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=qv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Vv.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return _i.set(t,i),i}Bv(e=>({...e,get:(t,n,r)=>_c(t,n)||e.get(t,n,r),has:(t,n)=>!!_c(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zv(e){const t=e.getComponent();return t?.type==="VERSION"}const Xi="@firebase/app",yc="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=new Mo("@firebase/app"),Kv="@firebase/app-compat",Gv="@firebase/analytics-compat",Jv="@firebase/analytics",Yv="@firebase/app-check-compat",Qv="@firebase/app-check",Xv="@firebase/auth",Zv="@firebase/auth-compat",e_="@firebase/database",t_="@firebase/data-connect",n_="@firebase/database-compat",r_="@firebase/functions",s_="@firebase/functions-compat",i_="@firebase/installations",o_="@firebase/installations-compat",a_="@firebase/messaging",c_="@firebase/messaging-compat",l_="@firebase/performance",u_="@firebase/performance-compat",f_="@firebase/remote-config",d_="@firebase/remote-config-compat",h_="@firebase/storage",p_="@firebase/storage-compat",g_="@firebase/firestore",m_="@firebase/vertexai",v_="@firebase/firestore-compat",__="firebase",y_="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="[DEFAULT]",b_={[Xi]:"fire-core",[Kv]:"fire-core-compat",[Jv]:"fire-analytics",[Gv]:"fire-analytics-compat",[Qv]:"fire-app-check",[Yv]:"fire-app-check-compat",[Xv]:"fire-auth",[Zv]:"fire-auth-compat",[e_]:"fire-rtdb",[t_]:"fire-data-connect",[n_]:"fire-rtdb-compat",[r_]:"fire-fn",[s_]:"fire-fn-compat",[i_]:"fire-iid",[o_]:"fire-iid-compat",[a_]:"fire-fcm",[c_]:"fire-fcm-compat",[l_]:"fire-perf",[u_]:"fire-perf-compat",[f_]:"fire-rc",[d_]:"fire-rc-compat",[h_]:"fire-gcs",[p_]:"fire-gcs-compat",[g_]:"fire-fst",[v_]:"fire-fst-compat",[m_]:"fire-vertex","fire-js":"fire-js",[__]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new Map,w_=new Map,eo=new Map;function bc(e,t){try{e.container.addComponent(t)}catch(n){Rt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Pt(e){const t=e.name;if(eo.has(t))return Rt.debug(`There were multiple attempts to register component ${t}.`),!1;eo.set(t,e);for(const n of ys.values())bc(n,e);for(const n of w_.values())bc(n,e);return!0}function Gn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ve(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new Tn("app","Firebase",E_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=y_;function hf(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Zi,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Yt.create("bad-app-name",{appName:String(s)});if(n||(n=sf()),!n)throw Yt.create("no-options");const i=ys.get(s);if(i){if(vn(n,i.options)&&vn(r,i.config))return i;throw Yt.create("duplicate-app",{appName:s})}const o=new kv(s);for(const c of eo.values())o.addComponent(c);const a=new I_(n,r,o);return ys.set(s,a),a}function pf(e=Zi){const t=ys.get(e);if(!t&&e===Zi&&sf())return hf();if(!t)throw Yt.create("no-app",{appName:e});return t}function ut(e,t,n){var r;let s=(r=b_[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Rt.warn(a.join(" "));return}Pt(new dt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="firebase-heartbeat-database",T_=1,kr="firebase-heartbeat-store";let yi=null;function gf(){return yi||(yi=df(S_,T_,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(kr)}catch(n){console.warn(n)}}}}).catch(e=>{throw Yt.create("idb-open",{originalErrorMessage:e.message})})),yi}async function C_(e){try{const n=(await gf()).transaction(kr),r=await n.objectStore(kr).get(mf(e));return await n.done,r}catch(t){if(t instanceof ht)Rt.warn(t.message);else{const n=Yt.create("idb-get",{originalErrorMessage:t?.message});Rt.warn(n.message)}}}async function wc(e,t){try{const r=(await gf()).transaction(kr,"readwrite");await r.objectStore(kr).put(t,mf(e)),await r.done}catch(n){if(n instanceof ht)Rt.warn(n.message);else{const r=Yt.create("idb-set",{originalErrorMessage:n?.message});Rt.warn(r.message)}}}function mf(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=1024,R_=30;class P_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new O_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ec();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>R_){const o=x_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Rt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ec(),{heartbeatsToSend:r,unsentEntries:s}=k_(this._heartbeatsCache.heartbeats),i=nf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Rt.warn(n),""}}}function Ec(){return new Date().toISOString().substring(0,10)}function k_(e,t=A_){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ic(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ic(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class O_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cf()?lf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await C_(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ic(e){return nf(JSON.stringify({version:2,heartbeats:e})).length}function x_(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(e){Pt(new dt("platform-logger",t=>new Wv(t),"PRIVATE")),Pt(new dt("heartbeat",t=>new P_(t),"PRIVATE")),ut(Xi,yc,e),ut(Xi,yc,"esm2017"),ut("fire-js","")}L_("");var N_="firebase",M_="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ut(N_,M_,"app");function $o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function vf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const D_=vf,_f=new Tn("auth","Firebase",vf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=new Mo("@firebase/auth");function $_(e,...t){bs.logLevel<=ue.WARN&&bs.warn(`Auth (${Fr}): ${e}`,...t)}function ts(e,...t){bs.logLevel<=ue.ERROR&&bs.error(`Auth (${Fr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(e,...t){throw Uo(e,...t)}function Xe(e,...t){return Uo(e,...t)}function Fo(e,t,n){const r=Object.assign(Object.assign({},D_()),{[t]:n});return new Tn("auth","Firebase",r).create(t,{appName:e.name})}function Ct(e){return Fo(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function F_(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Ke(e,"argument-error"),Fo(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Uo(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return _f.create(e,...t)}function K(e,t,...n){if(!e)throw Uo(t,...n)}function St(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ts(t),new Error(t)}function kt(e,t){e||St(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function U_(){return Sc()==="http:"||Sc()==="https:"}function Sc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(U_()||af()||"connection"in navigator)?navigator.onLine:!0}function j_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t,n){this.shortDelay=t,this.longDelay=n,kt(n>t,"Short delay should be less than long delay!"),this.isMobile=fv()||hv()}get(){return B_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(e,t){kt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;St("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;St("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;St("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],q_=new Ur(3e4,6e4);function pt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function gt(e,t,n,r,s={}){return bf(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=$r(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:c},i);return dv()||(l.referrerPolicy="no-referrer"),yf.fetch()(await wf(e,e.config.apiHost,n,a),l)})}async function bf(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},H_),t);try{const s=new z_(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Yr(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yr(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Yr(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw Yr(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Fo(e,u,l);Ke(e,u)}}catch(s){if(s instanceof ht)throw s;Ke(e,"network-request-failed",{message:String(s)})}}async function Br(e,t,n,r,s={}){const i=await gt(e,t,n,r,s);return"mfaPendingCredential"in i&&Ke(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function wf(e,t,n,r){const s=`${t}${n}?${r}`,i=e,o=i.config.emulator?Bo(e.config,s):`${e.config.apiScheme}://${s}`;return V_.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function W_(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class z_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"network-request-failed")),q_.get())})}}function Yr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Xe(e,t,r);return s.customData._tokenResponse=n,s}function Tc(e){return e!==void 0&&e.enterprise!==void 0}class K_{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return W_(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function G_(e,t){return gt(e,"GET","/v2/recaptchaConfig",pt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J_(e,t){return gt(e,"POST","/v1/accounts:delete",t)}async function ws(e,t){return gt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Y_(e,t=!1){const n=Fe(e),r=await n.getIdToken(t),s=jo(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:vr(bi(s.auth_time)),issuedAtTime:vr(bi(s.iat)),expirationTime:vr(bi(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function bi(e){return Number(e)*1e3}function jo(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return ts("JWT malformed, contained fewer than 3 sections"),null;try{const s=rf(n);return s?JSON.parse(s):(ts("Failed to decode base64 JWT payload"),null)}catch(s){return ts("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Cc(e){const t=jo(e);return K(t,"internal-error"),K(typeof t.exp<"u","internal-error"),K(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ht&&Q_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Q_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vr(this.lastLoginAt),this.creationTime=vr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(e){var t;const n=e.auth,r=await e.getIdToken(),s=await Or(e,ws(n,{idToken:r}));K(s?.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Ef(i.providerUserInfo):[],a=ey(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!a?.length,u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new no(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function Z_(e){const t=Fe(e);await Es(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ey(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Ef(e){return e.map(t=>{var{providerId:n}=t,r=$o(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ty(e,t){const n=await bf(e,{},async()=>{const r=$r({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=await wf(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",yf.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ny(e,t){return gt(e,"POST","/v2/accounts:revokeToken",pt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){K(t.idToken,"internal-error"),K(typeof t.idToken<"u","internal-error"),K(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Cc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){K(t.length!==0,"internal-error");const n=Cc(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ty(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new jn;return r&&(K(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new jn,this.toJSON())}_performRefresh(){return St("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(e,t){K(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Ye{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=$o(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new no(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Or(this,this.stsTokenManager.getToken(this.auth,t));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Y_(this,t)}reload(){return Z_(this)}_assign(t){this!==t&&(K(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Ye(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Es(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(Ct(this.auth));const t=await this.getIdToken();return await Or(this,J_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:_,isAnonymous:R,providerData:j,stsTokenManager:B}=n;K(T&&B,t,"internal-error");const F=jn.fromJSON(this.name,B);K(typeof T=="string",t,"internal-error"),Mt(f,t.name),Mt(d,t.name),K(typeof _=="boolean",t,"internal-error"),K(typeof R=="boolean",t,"internal-error"),Mt(g,t.name),Mt(v,t.name),Mt(E,t.name),Mt(P,t.name),Mt(k,t.name),Mt(y,t.name);const C=new Ye({uid:T,auth:t,email:d,emailVerified:_,displayName:f,isAnonymous:R,photoURL:v,phoneNumber:g,tenantId:E,stsTokenManager:F,createdAt:k,lastLoginAt:y});return j&&Array.isArray(j)&&(C.providerData=j.map(H=>Object.assign({},H))),P&&(C._redirectEventId=P),C}static async _fromIdTokenResponse(t,n,r=!1){const s=new jn;s.updateFromServerResponse(n);const i=new Ye({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Es(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ef(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new jn;a.updateFromIdToken(r);const c=new Ye({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new no(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=new Map;function Tt(e){kt(e instanceof Function,"Expected a class definition");let t=Ac.get(e);return t?(kt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ac.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}If.type="NONE";const Rc=If;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(e,t,n){return`firebase:${e}:${t}:${n}`}class Hn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ns(this.userKey,s.apiKey,i),this.fullPersistenceKey=ns("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await ws(this.auth,{idToken:t}).catch(()=>{});return n?Ye._fromGetAccountInfoResponse(this.auth,n,t):null}return Ye._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Hn(Tt(Rc),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Tt(Rc);const o=ns(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const d=await ws(t,{idToken:u}).catch(()=>{});if(!d)break;f=await Ye._fromGetAccountInfoResponse(t,d,u)}else f=Ye._fromJSON(t,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Hn(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Hn(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Af(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Sf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Pf(t))return"Blackberry";if(kf(t))return"Webos";if(Tf(t))return"Safari";if((t.includes("chrome/")||Cf(t))&&!t.includes("edge/"))return"Chrome";if(Rf(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if(r?.length===2)return r[1]}return"Other"}function Sf(e=Re()){return/firefox\//i.test(e)}function Tf(e=Re()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Cf(e=Re()){return/crios\//i.test(e)}function Af(e=Re()){return/iemobile/i.test(e)}function Rf(e=Re()){return/android/i.test(e)}function Pf(e=Re()){return/blackberry/i.test(e)}function kf(e=Re()){return/webos/i.test(e)}function Ho(e=Re()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ry(e=Re()){var t;return Ho(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function sy(){return pv()&&document.documentMode===10}function Of(e=Re()){return Ho(e)||Rf(e)||kf(e)||Pf(e)||/windows phone/i.test(e)||Af(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(e,t=[]){let n;switch(e){case"Browser":n=Pc(Re());break;case"Worker":n=`${Pc(Re())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oy(e,t={}){return gt(e,"GET","/v2/passwordPolicy",pt(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=6;class cy{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ay,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kc(this),this.idTokenSubscription=new kc(this),this.beforeStateQueue=new iy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_f,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Tt(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Hn.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await ws(this,{idToken:t}),r=await Ye._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Ve(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s?._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&c?.user&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Es(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=j_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ve(this.app))return Promise.reject(Ct(this));const n=t?Fe(t):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&K(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(Ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ve(this.app)?Promise.reject(Ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await oy(this),n=new cy(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Tn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ny(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Tt(t)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Hn.create(this,[Tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=xf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n?.error&&$_(`Error while retrieving App Check token: ${n.error}`),n?.token}}function tn(e){return Fe(e)}class kc{constructor(t){this.auth=t,this.observer=null,this.addObserver=bv(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uy(e){Ws=e}function Lf(e){return Ws.loadJS(e)}function fy(){return Ws.recaptchaEnterpriseScript}function dy(){return Ws.gapiScript}function hy(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class py{constructor(){this.enterprise=new gy}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class gy{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const my="recaptcha-enterprise",Nf="NO_RECAPTCHA";class vy{constructor(t){this.type=my,this.auth=tn(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{G_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new K_(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Tc(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(Nf)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new py().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Tc(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=fy();c.length!==0&&(c+=a),Lf(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Oc(e,t,n,r=!1,s=!1){const i=new vy(e);let o;if(s)o=Nf;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ro(e,t,n,r,s){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Oc(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Oc(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(e,t){const n=Gn(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(vn(i,t??{}))return s;Ke(s,"already-initialized")}return n.initialize({options:t})}function yy(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Tt);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function by(e,t,n){const r=tn(e);K(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=Mf(t),{host:o,port:a}=wy(t),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(vn(l,r.config.emulator)&&vn(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,Ey()}function Mf(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function wy(e){const t=Mf(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:xc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:xc(o)}}}function xc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ey(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return St("not implemented")}_getIdTokenResponse(t){return St("not implemented")}_linkToIdToken(t,n){return St("not implemented")}_getReauthenticationResolver(t){return St("not implemented")}}async function Iy(e,t){return gt(e,"POST","/v1/accounts:signUp",t)}async function Sy(e,t){return gt(e,"POST","/v1/accounts:update",pt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(e,t){return Br(e,"POST","/v1/accounts:signInWithPassword",pt(e,t))}async function Cy(e,t){return gt(e,"POST","/v1/accounts:sendOobCode",pt(e,t))}async function Ay(e,t){return Cy(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ry(e,t){return Br(e,"POST","/v1/accounts:signInWithEmailLink",pt(e,t))}async function Py(e,t){return Br(e,"POST","/v1/accounts:signInWithEmailLink",pt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Vo{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new xr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new xr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ro(t,n,"signInWithPassword",Ty);case"emailLink":return Ry(t,{email:this._email,oobCode:this._password});default:Ke(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ro(t,r,"signUpPassword",Iy);case"emailLink":return Py(t,{idToken:n,email:this._email,oobCode:this._password});default:Ke(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(e,t){return Br(e,"POST","/v1/accounts:signInWithIdp",pt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky="http://localhost";class _n extends Vo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new _n(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=$o(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new _n(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Vn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Vn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Vn(t,n)}buildRequest(){const t={requestUri:ky,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=$r(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xy(e){const t=rr(sr(e)).link,n=t?rr(sr(t)).deep_link_id:null,r=rr(sr(e)).deep_link_id;return(r?rr(sr(r)).link:null)||r||n||t||e}class qo{constructor(t){var n,r,s,i,o,a;const c=rr(sr(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Oy((s=c.mode)!==null&&s!==void 0?s:null);K(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=xy(t);try{return new qo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.providerId=Jn.PROVIDER_ID}static credential(t,n){return xr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=qo.parseLink(n);return K(r,"argument-error"),xr._fromEmailAndCode(t,r.code,r.tenantId)}}Jn.PROVIDER_ID="password";Jn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Jn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends Wo{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends jr{constructor(){super("facebook.com")}static credential(t){return _n._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Et.credential(t.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends jr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return _n._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return It.credential(n,r)}catch{return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends jr{constructor(){super("github.com")}static credential(t){return _n._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Wt.credential(t.oauthAccessToken)}catch{return null}}}Wt.GITHUB_SIGN_IN_METHOD="github.com";Wt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends jr{constructor(){super("twitter.com")}static credential(t,n){return _n._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return zt.credentialFromTaggedObject(t)}static credentialFromError(t){return zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return zt.credential(n,r)}catch{return null}}}zt.TWITTER_SIGN_IN_METHOD="twitter.com";zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ly(e,t){return Br(e,"POST","/v1/accounts:signUp",pt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await Ye._fromIdTokenResponse(t,r,s),o=Lc(r);return new yn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=Lc(r);return new yn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function Lc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends ht{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Is.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new Is(t,n,r,s)}}function Df(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Is._fromErrorAndOperation(e,i,t,r):i})}async function Ny(e,t,n=!1){const r=await Or(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return yn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function My(e,t,n=!1){const{auth:r}=e;if(Ve(r.app))return Promise.reject(Ct(r));const s="reauthenticate";try{const i=await Or(e,Df(r,s,t,e),n);K(i.idToken,r,"internal-error");const o=jo(i.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(e.uid===a,r,"user-mismatch"),yn._forOperation(e,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Ke(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $f(e,t,n=!1){if(Ve(e.app))return Promise.reject(Ct(e));const r="signIn",s=await Df(e,r,t),i=await yn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function Dy(e,t){return $f(tn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ff(e){const t=tn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function $y(e,t){await Sy(Fe(e),{oobCode:t})}async function Fy(e,t,n){if(Ve(e.app))return Promise.reject(Ct(e));const r=tn(e),o=await ro(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ly).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Ff(e),c}),a=await yn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Uy(e,t,n){return Ve(e.app)?Promise.reject(Ct(e)):Dy(Fe(e),Jn.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ff(e),r})}async function Nc(e,t){const n=Fe(e),s={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()},{email:i}=await Ay(n.auth,s);i!==e.email&&await e.reload()}function By(e,t,n,r){return Fe(e).onIdTokenChanged(t,n,r)}function jy(e,t,n){return Fe(e).beforeAuthStateChanged(t,n)}function Hy(e,t,n,r){return Fe(e).onAuthStateChanged(t,n,r)}function Vy(e){return Fe(e).signOut()}const Ss="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ss,"1"),this.storage.removeItem(Ss),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=1e3,Wy=10;class Bf extends Uf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Of(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);sy()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,Wy):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},qy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Bf.type="LOCAL";const zy=Bf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf extends Uf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}jf.type="SESSION";const Hf=jf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new zs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Ky(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=zo("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return window}function Jy(e){ft().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(){return typeof ft().WorkerGlobalScope<"u"&&typeof ft().importScripts=="function"}async function Yy(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Qy(){var e;return((e=navigator?.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Xy(){return Vf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="firebaseLocalStorageDb",Zy=1,Ts="firebaseLocalStorage",Wf="fbase_key";class Hr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ks(e,t){return e.transaction([Ts],t?"readwrite":"readonly").objectStore(Ts)}function eb(){const e=indexedDB.deleteDatabase(qf);return new Hr(e).toPromise()}function so(){const e=indexedDB.open(qf,Zy);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ts,{keyPath:Wf})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ts)?t(r):(r.close(),await eb(),t(await so()))})})}async function Mc(e,t,n){const r=Ks(e,!0).put({[Wf]:t,value:n});return new Hr(r).toPromise()}async function tb(e,t){const n=Ks(e,!1).get(t),r=await new Hr(n).toPromise();return r===void 0?null:r.value}function Dc(e,t){const n=Ks(e,!0).delete(t);return new Hr(n).toPromise()}const nb=800,rb=3;class zf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await so(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>rb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zs._getInstance(Xy()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Yy(),!this.activeServiceWorker)return;this.sender=new Gy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Qy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await so();return await Mc(t,Ss,"1"),await Dc(t,Ss),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>tb(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=Ks(s,!1).getAll();return new Hr(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zf.type="LOCAL";const sb=zf;new Ur(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(e,t){return t?Tt(t):(K(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends Vo{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Vn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Vn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Vn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function ib(e){return $f(e.auth,new Ko(e),e.bypassAuthState)}function ob(e){const{auth:t,user:n}=e;return K(n,t,"internal-error"),My(n,new Ko(e),e.bypassAuthState)}async function ab(e){const{auth:t,user:n}=e;return K(n,t,"internal-error"),Ny(n,new Ko(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ib;case"linkViaPopup":case"linkViaRedirect":return ab;case"reauthViaPopup":case"reauthViaRedirect":return ob;default:Ke(this.auth,"internal-error")}}resolve(t){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=new Ur(2e3,1e4);async function $c(e,t,n){if(Ve(e.app))return Promise.reject(Xe(e,"operation-not-supported-in-this-environment"));const r=tn(e);F_(e,t,Wo);const s=Kf(r,n);return new cn(r,"signInViaPopup",t,s).executeNotNull()}class cn extends Gf{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return K(t,this.auth,"internal-error"),t}async onExecution(){kt(this.filter.length===1,"Popup operations only handle one event");const t=zo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,cb.get())};t()}}cn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb="pendingRedirect",rs=new Map;class ub extends Gf{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=rs.get(this.auth._key());if(!t){try{const r=await fb(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}rs.set(this.auth._key(),t)}return this.bypassAuthState||rs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fb(e,t){const n=pb(t),r=hb(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function db(e,t){rs.set(e._key(),t)}function hb(e){return Tt(e._redirectPersistence)}function pb(e){return ns(lb,e.config.apiKey,e.name)}async function gb(e,t,n=!1){if(Ve(e.app))return Promise.reject(Ct(e));const r=tn(e),s=Kf(r,t),o=await new ub(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=10*60*1e3;class vb{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!_b(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Jf(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xe(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=mb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fc(t))}saveEventToCache(t){this.cachedEventUids.add(Fc(t)),this.lastProcessedEventTime=Date.now()}}function Fc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Jf({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function _b(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jf(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yb(e,t={}){return gt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wb=/^https?/;async function Eb(e){if(e.config.emulator)return;const{authorizedDomains:t}=await yb(e);for(const n of t)try{if(Ib(n))return}catch{}Ke(e,"unauthorized-domain")}function Ib(e){const t=to(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wb.test(n))return!1;if(bb.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=new Ur(3e4,6e4);function Uc(){const e=ft().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Tb(e){return new Promise((t,n)=>{var r,s,i;function o(){Uc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Uc(),n(Xe(e,"network-request-failed"))},timeout:Sb.get()})}if(!((s=(r=ft().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=ft().gapi)===null||i===void 0)&&i.load)o();else{const a=hy("iframefcb");return ft()[a]=()=>{gapi.load?o():n(Xe(e,"network-request-failed"))},Lf(`${dy()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw ss=null,t})}let ss=null;function Cb(e){return ss=ss||Tb(e),ss}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=new Ur(5e3,15e3),Rb="__/auth/iframe",Pb="emulator/auth/iframe",kb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ob=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xb(e){const t=e.config;K(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Bo(t,Pb):`https://${e.config.authDomain}/${Rb}`,r={apiKey:t.apiKey,appName:e.name,v:Fr},s=Ob.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${$r(r).slice(1)}`}async function Lb(e){const t=await Cb(e),n=ft().gapi;return K(n,e,"internal-error"),t.open({where:document.body,url:xb(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Xe(e,"network-request-failed"),a=ft().setTimeout(()=>{i(o)},Ab.get());function c(){ft().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mb=500,Db=600,$b="_blank",Fb="http://localhost";class Bc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ub(e,t,n,r=Mb,s=Db){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Nb),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Re().toLowerCase();n&&(a=Cf(l)?$b:n),Sf(l)&&(t=t||Fb,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(ry(l)&&a!=="_self")return Bb(t||"",a),new Bc(null);const f=window.open(t||"",a,u);K(f,e,"popup-blocked");try{f.focus()}catch{}return new Bc(f)}function Bb(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb="__/auth/handler",Hb="emulator/auth/handler",Vb=encodeURIComponent("fac");async function jc(e,t,n,r,s,i){K(e.config.authDomain,e,"auth-domain-config-required"),K(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Fr,eventId:s};if(t instanceof Wo){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",yv(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(t instanceof jr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${Vb}=${encodeURIComponent(c)}`:"";return`${qb(e)}?${$r(a).slice(1)}${l}`}function qb({config:e}){return e.emulator?Bo(e,Hb):`https://${e.authDomain}/${jb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="webStorageSupport";class Wb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hf,this._completeRedirectFn=gb,this._overrideRedirectResult=db}async _openPopup(t,n,r,s){var i;kt((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await jc(t,n,r,to(),s);return Ub(t,o,zo())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await jc(t,n,r,to(),s);return Jy(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(kt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Lb(t),r=new vb(t);return n.register("authEvent",s=>(K(s?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(wi,{type:wi},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[wi];o!==void 0&&n(!!o),Ke(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Eb(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Of()||Tf()||Ho()}}const zb=Wb;var Hc="@firebase/auth",Vc="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Jb(e){Pt(new dt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xf(e)},l=new ly(r,s,i,c);return yy(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Pt(new dt("auth-internal",t=>{const n=tn(t.getProvider("auth").getImmediate());return(r=>new Kb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ut(Hc,Vc,Gb(e)),ut(Hc,Vc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=5*60,Qb=of("authIdTokenMaxAge")||Yb;let qc=null;const Xb=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Qb)return;const s=n?.token;qc!==s&&(qc=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Zb(e=pf()){const t=Gn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=_y(e,{popupRedirectResolver:zb,persistence:[sb,zy,Hf]}),r=of("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Xb(i.toString());jy(n,o,()=>o(n.currentUser)),By(n,a=>o(a))}}const s=lv("auth");return s&&by(n,`http://${s}`),n}function ew(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}uy({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=Xe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ew().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Jb("Browser");const Yf="@firebase/installations",Go="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=1e4,Xf=`w:${Go}`,Zf="FIS_v2",tw="https://firebaseinstallations.googleapis.com/v1",nw=60*60*1e3,rw="installations",sw="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},bn=new Tn(rw,sw,iw);function ed(e){return e instanceof ht&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td({projectId:e}){return`${tw}/projects/${e}/installations`}function nd(e){return{token:e.token,requestStatus:2,expiresIn:aw(e.expiresIn),creationTime:Date.now()}}async function rd(e,t){const r=(await t.json()).error;return bn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function sd({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ow(e,{refreshToken:t}){const n=sd(e);return n.append("Authorization",cw(t)),n}async function id(e){const t=await e();return t.status>=500&&t.status<600?e():t}function aw(e){return Number(e.replace("s","000"))}function cw(e){return`${Zf} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lw({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=td(e),s=sd(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Zf,appId:e.appId,sdkVersion:Xf},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await id(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:nd(l.authToken)}}else throw await rd("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=/^[cdef][\w-]{21}$/,io="";function dw(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=hw(e);return fw.test(n)?n:io}catch{return io}}function hw(e){return uw(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=new Map;function cd(e,t){const n=Gs(e);ld(n,t),pw(n,t)}function ld(e,t){const n=ad.get(e);if(n)for(const r of n)r(t)}function pw(e,t){const n=gw();n&&n.postMessage({key:e,fid:t}),mw()}let ln=null;function gw(){return!ln&&"BroadcastChannel"in self&&(ln=new BroadcastChannel("[Firebase] FID Change"),ln.onmessage=e=>{ld(e.data.key,e.data.fid)}),ln}function mw(){ad.size===0&&ln&&(ln.close(),ln=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw="firebase-installations-database",_w=1,wn="firebase-installations-store";let Ei=null;function Jo(){return Ei||(Ei=df(vw,_w,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(wn)}}})),Ei}async function Cs(e,t){const n=Gs(e),s=(await Jo()).transaction(wn,"readwrite"),i=s.objectStore(wn),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&cd(e,t.fid),t}async function ud(e){const t=Gs(e),r=(await Jo()).transaction(wn,"readwrite");await r.objectStore(wn).delete(t),await r.done}async function Js(e,t){const n=Gs(e),s=(await Jo()).transaction(wn,"readwrite"),i=s.objectStore(wn),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&cd(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yo(e){let t;const n=await Js(e.appConfig,r=>{const s=yw(r),i=bw(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===io?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function yw(e){const t=e||{fid:dw(),registrationStatus:0};return fd(t)}function bw(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(bn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ww(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ew(e)}:{installationEntry:t}}async function ww(e,t){try{const n=await lw(e,t);return Cs(e.appConfig,n)}catch(n){throw ed(n)&&n.customData.serverCode===409?await ud(e.appConfig):await Cs(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ew(e){let t=await Wc(e.appConfig);for(;t.registrationStatus===1;)await od(100),t=await Wc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Yo(e);return r||n}return t}function Wc(e){return Js(e,t=>{if(!t)throw bn.create("installation-not-found");return fd(t)})}function fd(e){return Iw(e)?{fid:e.fid,registrationStatus:0}:e}function Iw(e){return e.registrationStatus===1&&e.registrationTime+Qf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sw({appConfig:e,heartbeatServiceProvider:t},n){const r=Tw(e,n),s=ow(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Xf,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await id(()=>fetch(r,a));if(c.ok){const l=await c.json();return nd(l)}else throw await rd("Generate Auth Token",c)}function Tw(e,{fid:t}){return`${td(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(e,t=!1){let n;const r=await Js(e.appConfig,i=>{if(!dd(i))throw bn.create("not-registered");const o=i.authToken;if(!t&&Rw(o))return i;if(o.requestStatus===1)return n=Cw(e,t),i;{if(!navigator.onLine)throw bn.create("app-offline");const a=kw(i);return n=Aw(e,a),a}});return n?await n:r.authToken}async function Cw(e,t){let n=await zc(e.appConfig);for(;n.authToken.requestStatus===1;)await od(100),n=await zc(e.appConfig);const r=n.authToken;return r.requestStatus===0?Qo(e,t):r}function zc(e){return Js(e,t=>{if(!dd(t))throw bn.create("not-registered");const n=t.authToken;return Ow(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Aw(e,t){try{const n=await Sw(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Cs(e.appConfig,r),n}catch(n){if(ed(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ud(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Cs(e.appConfig,r)}throw n}}function dd(e){return e!==void 0&&e.registrationStatus===2}function Rw(e){return e.requestStatus===2&&!Pw(e)}function Pw(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+nw}function kw(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Ow(e){return e.requestStatus===1&&e.requestTime+Qf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(e){const t=e,{installationEntry:n,registrationPromise:r}=await Yo(t);return r?r.catch(console.error):Qo(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lw(e,t=!1){const n=e;return await Nw(n),(await Qo(n,t)).token}async function Nw(e){const{registrationPromise:t}=await Yo(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(e){if(!e||!e.options)throw Ii("App Configuration");if(!e.name)throw Ii("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ii(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ii(e){return bn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="installations",Dw="installations-internal",$w=e=>{const t=e.getProvider("app").getImmediate(),n=Mw(t),r=Gn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Fw=e=>{const t=e.getProvider("app").getImmediate(),n=Gn(t,hd).getImmediate();return{getId:()=>xw(n),getToken:s=>Lw(n,s)}};function Uw(){Pt(new dt(hd,$w,"PUBLIC")),Pt(new dt(Dw,Fw,"PRIVATE"))}Uw();ut(Yf,Go);ut(Yf,Go,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="analytics",Bw="firebase_id",jw="origin",Hw=60*1e3,Vw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Xo="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=new Mo("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},$e=new Tn("analytics","Analytics",qw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(e){if(!e.startsWith(Xo)){const t=$e.create("invalid-gtag-resource",{gtagURL:e});return xe.warn(t.message),""}return e}function pd(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function zw(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Kw(e,t){const n=zw("firebase-js-sdk-policy",{createScriptURL:Ww}),r=document.createElement("script"),s=`${Xo}?l=${e}&id=${t}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Gw(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Jw(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await pd(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){xe.error(a)}e("config",s,i)}async function Yw(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await pd(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){xe.error(i)}}function Qw(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await Yw(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await Jw(e,t,n,r,a,c)}else if(i==="consent"){const[a,c]=o;e("consent",a,c)}else if(i==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){xe.error(a)}}return s}function Xw(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Qw(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function Zw(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Xo)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=30,tE=1e3;class nE{constructor(t={},n=tE){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const gd=new nE;function rE(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function sE(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:rE(r)},i=Vw.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw $e.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function iE(e,t=gd,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw $e.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw $e.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new cE;return setTimeout(async()=>{a.abort()},Hw),md({appId:r,apiKey:s,measurementId:i},o,a,t)}async function md(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=gd){var i;const{appId:o,measurementId:a}=e;try{await oE(r,t)}catch(c){if(a)return xe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:o,measurementId:a};throw c}try{const c=await sE(e);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!aE(l)){if(s.deleteThrottleMetadata(o),a)return xe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l?.customData)===null||i===void 0?void 0:i.httpStatus)===503?gc(n,s.intervalMillis,eE):gc(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,f),xe.debug(`Calling attemptFetch again in ${u} millis`),md(e,f,r,s)}}function oE(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r($e.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function aE(e){if(!(e instanceof ht)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class cE{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function lE(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uE(){if(cf())try{await lf()}catch(e){return xe.warn($e.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return xe.warn($e.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fE(e,t,n,r,s,i,o){var a;const c=iE(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&xe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>xe.error(g)),t.push(c);const l=uE().then(g=>{if(g)return r.getId()}),[u,f]=await Promise.all([c,l]);Zw(i)||Kw(i,u.measurementId),s("js",new Date);const d=(a=o?.config)!==null&&a!==void 0?a:{};return d[jw]="firebase",d.update=!0,f!=null&&(d[Bw]=f),s("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(t){this.app=t}_delete(){return delete _r[this.app.options.appId],Promise.resolve()}}let _r={},Kc=[];const Gc={};let Si="dataLayer",hE="gtag",Jc,vd,Yc=!1;function pE(){const e=[];if(af()&&e.push("This is a browser extension environment."),gv()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=$e.create("invalid-analytics-context",{errorInfo:t});xe.warn(n.message)}}function gE(e,t,n){pE();const r=e.options.appId;if(!r)throw $e.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)xe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $e.create("no-api-key");if(_r[r]!=null)throw $e.create("already-exists",{id:r});if(!Yc){Gw(Si);const{wrappedGtag:i,gtagCore:o}=Xw(_r,Kc,Gc,Si,hE);vd=i,Jc=o,Yc=!0}return _r[r]=fE(e,Kc,Gc,t,Jc,Si,n),new dE(e)}function mE(e=pf()){e=Fe(e);const t=Gn(e,As);return t.isInitialized()?t.getImmediate():vE(e)}function vE(e,t={}){const n=Gn(e,As);if(n.isInitialized()){const s=n.getImmediate();if(vn(t,n.getOptions()))return s;throw $e.create("already-initialized")}return n.initialize({options:t})}function _E(e,t,n,r){e=Fe(e),lE(vd,_r[e.app.options.appId],t,n,r).catch(s=>xe.error(s))}const Qc="@firebase/analytics",Xc="0.10.12";function yE(){Pt(new dt(As,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return gE(r,s,n)},"PUBLIC")),Pt(new dt("analytics-internal",e,"PRIVATE")),ut(Qc,Xc),ut(Qc,Xc,"esm2017");function e(t){try{const n=t.getProvider(As).getImmediate();return{logEvent:(r,s,i)=>_E(n,r,s,i)}}catch(n){throw $e.create("interop-component-reg-failed",{reason:n})}}}yE();const bE={apiKey:"AIzaSyDk0cEYLi873DuUuXVdz_S2kqXKa6R38pI",authDomain:"mnmoo-86085.firebaseapp.com",projectId:"mnmoo-86085",storageBucket:"mnmoo-86085.firebasestorage.app",messagingSenderId:"10678058131",appId:"1:10678058131:web:9138e5f07b57922173a166",measurementId:"G-JKD3VGR3F2"},_d=hf(bE),Vt=Zb(_d),wE=mE(_d),EE=({app:e})=>{const t=yd();Hy(Vt,n=>{t.user=n,t.isInitialized=!0,console.log("Auth state changed:",n?"logged in":"logged out")})},IE=Object.freeze(Object.defineProperty({__proto__:null,analytics:wE,auth:Vt,default:EE},Symbol.toStringTag,{value:"Module"})),yd=Jg("auth",{state:()=>({user:null,loading:!1,error:null,isInitialized:!1}),actions:{async login(e,t){this.loading=!0,this.error=null;try{const n=await Uy(Vt,e,t);return this.user=n.user,this.user.emailVerified?{success:!0}:(this.error="EMAIL_NOT_VERIFIED",{success:!1,reason:"EMAIL_NOT_VERIFIED"})}catch(n){const r=n.code||n.message;return this.error=this.getReadableErrorMessage(r),{success:!1,reason:r}}finally{this.loading=!1}},async signup(e,t){this.loading=!0,this.error=null;try{const n=await Fy(Vt,e,t);return await Nc(n.user),this.user=n.user,{success:!0}}catch(n){if(console.error("Signup error:",n),n.code==="auth/email-already-in-use")return{success:!1,reason:n.code,message:"This email is already registered"};const r=this.getSignupErrorMessage(n.code,n.message);return this.error=r,{success:!1,reason:n.code,message:r}}finally{this.loading=!1}},async loginWithGoogle(){const e=new It;try{const t=await $c(Vt,e);return this.user=t.user,!0}catch(t){return this.error=t.message,!1}},async loginWithFacebook(){const e=new Et;try{const t=await $c(Vt,e);return this.user=t.user,!0}catch(t){return this.error=t.message,!1}},async logout(){try{return await Vy(Vt),this.user=null,!0}catch(e){return this.error=e.message,!1}},async verifyEmail(e){this.loading=!0,this.error=null;try{return await $y(Vt,e),this.user&&await this.user.reload(),!0}catch(t){return this.error=t.message,!1}finally{this.loading=!1}},async resendVerificationEmail(){if(!this.user)return{success:!1,error:"No user logged in"};try{return await Nc(this.user),{success:!0}}catch(e){const t=this.getVerificationErrorMessage(e.code||e.message);return this.error=t,{success:!1,error:t,reason:e.code}}},getReadableErrorMessage(e){return{"auth/wrong-password":"Incorrect password","auth/user-not-found":"No account found with this email","auth/invalid-email":"Invalid email address","auth/user-disabled":"This account has been disabled","auth/email-already-in-use":"This email is already registered","auth/weak-password":"Password should be at least 6 characters",EMAIL_NOT_VERIFIED:"Please verify your email address first","auth/too-many-requests":"Too many attempts. Please try again later",INVALID_LOGIN_CREDENTIALS:"Invalid email or password","auth/invalid-credential":"Invalid email or password","auth/invalid-login-credentials":"Invalid email or password"}[e]||"An error occurred during authentication"},getSignupErrorMessage(e,t){const n={"auth/email-already-in-use":"This email is already registered",EMAIL_EXISTS:"This email is already registered","auth/invalid-email":"Please enter a valid email address","auth/operation-not-allowed":"Email/password accounts are not enabled. Please contact support.","auth/weak-password":"Password should be at least 6 characters",WEAK_PASSWORD:"Password should be at least 6 characters"};return t?.includes("EMAIL_EXISTS")||e==="EMAIL_EXISTS"?n.EMAIL_EXISTS:n[e]||t||"Failed to create account"},getVerificationErrorMessage(e){return{TOO_MANY_ATTEMPTS_TRY_LATER:"Too many attempts. Please wait a few minutes before trying again.","auth/too-many-requests":"Too many attempts. Please wait a few minutes before trying again.","auth/user-not-found":"User not found.","auth/invalid-user":"Invalid user."}[e]||"Failed to send verification email"}},getters:{isEmailVerified:e=>e.user?.emailVerified??!1}}),Ti=jg(function(){const t=Xm({scrollBehavior:()=>({left:0,top:0}),routes:ev,history:Am("/")});return t.beforeEach(async(n,r,s)=>{const i=yd();i.isInitialized||await new Promise(l=>{const u=i.$subscribe((f,d)=>{d.isInitialized&&(u(),l())})});const o=n.matched.some(l=>l.meta.requiresAuth),a=n.path==="/login"||n.path==="/signup",c=n.path==="/";o&&!i.user?s("/login"):(a||c)&&i.user?s("/dashboard"):s()}),t});async function SE(e,t){const n=e(Bg);n.use(Ug,t);const r=typeof fi=="function"?await fi({}):fi;n.use(r);const s=Sn(typeof Ti=="function"?await Ti({store:r}):Ti);return r.use(({store:i})=>{i.router=s}),{app:n,store:r,router:s}}const oo={xs:18,sm:24,md:32,lg:38,xl:46},Zo={size:String};function ea(e,t=oo){return Y(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}function TE(e,t){return e!==void 0&&e()||t}function xI(e,t){if(e!==void 0){const n=e();if(n!=null)return n.slice()}return t}function ir(e,t){return e!==void 0?t.concat(e()):t}function CE(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}function LI(e,t,n,r,s,i){t.key=r+s;const o=J(e,t,n);return s===!0?Hl(o,i()):o}const Zc="0 0 24 24",Ci=e=>e,Ai=e=>`ionicons ${e}`,bd={"mdi-":e=>`mdi ${e}`,"icon-":Ci,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":Ai,"ion-ios":Ai,"ion-logo":Ai,"iconfont ":Ci,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`,"i-":Ci},wd={o_:"-outlined",r_:"-round",s_:"-sharp"},Ed={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},AE=new RegExp("^("+Object.keys(bd).join("|")+")"),RE=new RegExp("^("+Object.keys(wd).join("|")+")"),el=new RegExp("^("+Object.keys(Ed).join("|")+")"),PE=/^[Mm]\s?[-+]?\.?\d/,kE=/^img:/,OE=/^svguse:/,xE=/^ion-/,LE=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,Rs=Dr({name:"QIcon",props:{...Zo,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=Kn(),r=ea(e),s=Y(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),i=Y(()=>{let o,a=e.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const u=n.iconMapFn(a);if(u!==void 0)if(u.icon!==void 0){if(a=u.icon,a==="none"||!a)return{none:!0}}else return{cls:u.cls,content:u.content!==void 0?u.content:" "}}if(PE.test(a)===!0){const[u,f=Zc]=a.split("|");return{svg:!0,viewBox:f,nodes:u.split("&&").map(d=>{const[g,v,E]=d.split("@@");return J("path",{style:v,d:g,transform:E})})}}if(kE.test(a)===!0)return{img:!0,src:a.substring(4)};if(OE.test(a)===!0){const[u,f=Zc]=a.split("|");return{svguse:!0,src:u.substring(7),viewBox:f}}let c=" ";const l=a.match(AE);if(l!==null)o=bd[l[1]](a);else if(LE.test(a)===!0)o=a;else if(xE.test(a)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(el.test(a)===!0){o="notranslate material-symbols";const u=a.match(el);u!==null&&(a=a.substring(6),o+=Ed[u[1]]),c=a}else{o="notranslate material-icons";const u=a.match(RE);u!==null&&(a=a.substring(2),o+=wd[u[1]]),c=a}return{cls:o,content:c}});return()=>{const o={class:s.value,style:r.value,"aria-hidden":"true"};return i.value.none===!0?J(e.tag,o,TE(t.default)):i.value.img===!0?J(e.tag,o,ir(t.default,[J("img",{src:i.value.src})])):i.value.svg===!0?J(e.tag,o,ir(t.default,[J("svg",{viewBox:i.value.viewBox||"0 0 24 24"},i.value.nodes)])):i.value.svguse===!0?J(e.tag,o,ir(t.default,[J("svg",{viewBox:i.value.viewBox},[J("use",{"xlink:href":i.value.src})])])):(i.value.cls!==void 0&&(o.class+=" "+i.value.cls),J(e.tag,o,ir(t.default,[i.value.content])))}}}),NE=Dr({name:"QAvatar",props:{...Zo,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:t}){const n=ea(e),r=Y(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),s=Y(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const i=e.icon!==void 0?[J(Rs,{name:e.icon})]:void 0;return J("div",{class:r.value,style:n.value},[J("div",{class:"q-avatar__content row flex-center overflow-hidden",style:s.value},CE(t.default,i))])}}}),ME={size:{type:[String,Number],default:"1em"},color:String};function DE(e){return{cSize:Y(()=>e.size in oo?`${oo[e.size]}px`:e.size),classes:Y(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const Id=Dr({name:"QSpinner",props:{...ME,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=DE(e);return()=>J("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[J("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function $E(e,t){const n=e.style;for(const r in t)n[r]=t[r]}function NI(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=fn(e);if(t)return t.$el||t}function FE(e,t=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),r=e.apply(this,arguments)),r}}function tl(e,t,n,r){n.modifiers.stop===!0&&Lu(e);const s=n.modifiers.color;let i=n.modifiers.center;i=i===!0||r===!0;const o=document.createElement("span"),a=document.createElement("span"),c=vg(e),{left:l,top:u,width:f,height:d}=t.getBoundingClientRect(),g=Math.sqrt(f*f+d*d),v=g/2,E=`${(f-g)/2}px`,P=i?E:`${c.left-l-v}px`,k=`${(d-g)/2}px`,y=i?k:`${c.top-u-v}px`;a.className="q-ripple__inner",$E(a,{height:`${g}px`,width:`${g}px`,transform:`translate3d(${P},${y},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${s?" text-"+s:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),t.appendChild(o);const T=()=>{o.remove(),clearTimeout(_)};n.abort.push(T);let _=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${E},${k},0) scale3d(1,1,1)`,a.style.opacity=.2,_=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,_=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(T),1)},275)},250)},50)}function nl(e,{modifiers:t,value:n,arg:r}){const s=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:s.early===!0,stop:s.stop===!0,center:s.center===!0,color:s.color||r,keyCodes:[].concat(s.keyCodes||13)}}const UE=mg({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const r={cfg:n,enabled:t.value!==!1,modifiers:{},abort:[],start(s){r.enabled===!0&&s.qSkipRipple!==!0&&s.type===(r.modifiers.early===!0?"pointerdown":"click")&&tl(s,e,r,s.qKeyEvent===!0)},keystart:FE(s=>{r.enabled===!0&&s.qSkipRipple!==!0&&qi(s,r.modifiers.keyCodes)===!0&&s.type===`key${r.modifiers.early===!0?"down":"up"}`&&tl(s,e,r,!0)},300)};nl(r,t),e.__qripple=r,_g(r,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n!==void 0&&(n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&nl(n,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(n=>{n()}),yg(t,"main"),delete e._qripple)}}),Sd={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},BE=Object.keys(Sd),jE={align:{type:String,validator:e=>BE.includes(e)}};function HE(e){return Y(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${Sd[t]}`})}function Td(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(n=>{Td(e,n)}):e.add(t)}function MI(e){const t=new Set;return e.forEach(n=>{Td(t,n)}),Array.from(t)}function VE(e){return e.appContext.config.globalProperties.$router!==void 0}function DI(e){return e.isUnmounted===!0||e.isDeactivated===!0}function rl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function sl(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function qE(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(Array.isArray(s)===!1||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function il(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function WE(e,t){return Array.isArray(e)===!0?il(e,t):Array.isArray(t)===!0?il(t,e):e===t}function zE(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(WE(e[n],t[n])===!1)return!1;return!0}const KE={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean};function GE({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const n=Kn(),{props:r,proxy:s,emit:i}=n,o=VE(n),a=Y(()=>r.disable!==!0&&r.href!==void 0),c=Y(t===!0?()=>o===!0&&r.disable!==!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!=="":()=>o===!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),l=Y(()=>c.value===!0?y(r.to):null),u=Y(()=>l.value!==null),f=Y(()=>a.value===!0||u.value===!0),d=Y(()=>r.type==="a"||f.value===!0?"a":r.tag||e||"div"),g=Y(()=>a.value===!0?{href:r.href,target:r.target}:u.value===!0?{href:l.value.href,target:r.target}:{}),v=Y(()=>{if(u.value===!1)return-1;const{matched:R}=l.value,{length:j}=R,B=R[j-1];if(B===void 0)return-1;const F=s.$route.matched;if(F.length===0)return-1;const C=F.findIndex(sl.bind(null,B));if(C!==-1)return C;const H=rl(R[j-2]);return j>1&&rl(B)===H&&F[F.length-1].path!==H?F.findIndex(sl.bind(null,R[j-2])):C}),E=Y(()=>u.value===!0&&v.value!==-1&&qE(s.$route.params,l.value.params)),P=Y(()=>E.value===!0&&v.value===s.$route.matched.length-1&&zE(s.$route.params,l.value.params)),k=Y(()=>u.value===!0?P.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":E.value===!0?` ${r.activeClass}`:"":"");function y(R){try{return s.$router.resolve(R)}catch{}return null}function T(R,{returnRouterError:j,to:B=r.to,replace:F=r.replace}={}){if(r.disable===!0)return R.preventDefault(),Promise.resolve(!1);if(R.metaKey||R.altKey||R.ctrlKey||R.shiftKey||R.button!==void 0&&R.button!==0||r.target==="_blank")return Promise.resolve(!1);R.preventDefault();const C=s.$router[F===!0?"replace":"push"](B);return j===!0?C:C.then(()=>{}).catch(()=>{})}function _(R){if(u.value===!0){const j=B=>T(R,B);i("click",R,j),R.defaultPrevented!==!0&&j()}else i("click",R)}return{hasRouterLink:u,hasHrefLink:a,hasLink:f,linkTag:d,resolvedLink:l,linkIsActive:E,linkIsExactActive:P,linkClass:k,linkAttrs:g,getLink:y,navigateToRouterLink:T,navigateOnClick:_}}const ol={none:0,xs:4,sm:8,md:16,lg:24,xl:32},JE={xs:8,sm:10,md:14,lg:20,xl:24},YE=["button","submit","reset"],QE=/[^\s]\/[^\s]/,XE=["flat","outline","push","unelevated"];function ZE(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const eI={...Zo,...KE,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...XE.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...jE.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},tI={...eI,round:Boolean};function nI(e){const t=ea(e,JE),n=HE(e),{hasRouterLink:r,hasLink:s,linkTag:i,linkAttrs:o,navigateOnClick:a}=GE({fallbackTag:"button"}),c=Y(()=>{const P=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},P,{padding:e.padding.split(/\s+/).map(k=>k in ol?ol[k]+"px":k).join(" "),minWidth:"0",minHeight:"0"}):P}),l=Y(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),u=Y(()=>e.disable!==!0&&e.loading!==!0),f=Y(()=>u.value===!0?e.tabindex||0:-1),d=Y(()=>ZE(e,"standard")),g=Y(()=>{const P={tabindex:f.value};return s.value===!0?Object.assign(P,o.value):YE.includes(e.type)===!0&&(P.type=e.type),i.value==="a"?(e.disable===!0?P["aria-disabled"]="true":P.href===void 0&&(P.role="button"),r.value!==!0&&QE.test(e.type)===!0&&(P.type=e.type)):e.disable===!0&&(P.disabled="",P["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(P,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),P}),v=Y(()=>{let P;e.color!==void 0?e.flat===!0||e.outline===!0?P=`text-${e.textColor||e.color}`:P=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(P=`text-${e.textColor}`);const k=e.round===!0?"round":`rectangle${l.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${d.value} q-btn--${k}`+(P!==void 0?" "+P:"")+(u.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),E=Y(()=>n.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:v,style:c,innerClasses:E,attributes:g,hasLink:s,linkTag:i,navigateOnClick:a,isActionable:u}}const{passiveCapture:je}=mn;let On=null,xn=null,Ln=null;const rI=Dr({name:"QBtn",props:{...tI,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:r}=Kn(),{classes:s,style:i,innerClasses:o,attributes:a,hasLink:c,linkTag:l,navigateOnClick:u,isActionable:f}=nI(e),d=pn(null),g=pn(null);let v=null,E,P=null;const k=Y(()=>e.label!==void 0&&e.label!==null&&e.label!==""),y=Y(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:c.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),T=Y(()=>({center:e.round})),_=Y(()=>{const D=Math.max(0,Math.min(100,e.percentage));return D>0?{transition:"transform 0.6s",transform:`translateX(${D-100}%)`}:{}}),R=Y(()=>{if(e.loading===!0)return{onMousedown:ee,onTouchstart:ee,onClick:ee,onKeydown:ee,onKeyup:ee};if(f.value===!0){const D={onClick:B,onKeydown:F,onMousedown:H};if(r.$q.platform.has.touch===!0){const te=e.onTouchstart!==void 0?"":"Passive";D[`onTouchstart${te}`]=C}return D}return{onClick:Pn}}),j=Y(()=>({ref:d,class:"q-btn q-btn-item non-selectable no-outline "+s.value,style:i.value,...a.value,...R.value}));function B(D){if(d.value!==null){if(D!==void 0){if(D.defaultPrevented===!0)return;const te=document.activeElement;if(e.type==="submit"&&te!==document.body&&d.value.contains(te)===!1&&te.contains(d.value)===!1){D.qAvoidFocus!==!0&&d.value.focus();const se=()=>{document.removeEventListener("keydown",Pn,!0),document.removeEventListener("keyup",se,je),d.value?.removeEventListener("blur",se,je)};document.addEventListener("keydown",Pn,!0),document.addEventListener("keyup",se,je),d.value.addEventListener("blur",se,je)}}u(D)}}function F(D){d.value!==null&&(n("keydown",D),qi(D,[13,32])===!0&&xn!==d.value&&(xn!==null&&L(),D.defaultPrevented!==!0&&(D.qAvoidFocus!==!0&&d.value.focus(),xn=d.value,d.value.classList.add("q-btn--active"),document.addEventListener("keyup",W,!0),d.value.addEventListener("blur",W,je)),Pn(D)))}function C(D){d.value!==null&&(n("touchstart",D),D.defaultPrevented!==!0&&(On!==d.value&&(On!==null&&L(),On=d.value,v=D.target,v.addEventListener("touchcancel",W,je),v.addEventListener("touchend",W,je)),E=!0,P!==null&&clearTimeout(P),P=setTimeout(()=>{P=null,E=!1},200)))}function H(D){d.value!==null&&(D.qSkipRipple=E===!0,n("mousedown",D),D.defaultPrevented!==!0&&Ln!==d.value&&(Ln!==null&&L(),Ln=d.value,d.value.classList.add("q-btn--active"),document.addEventListener("mouseup",W,je)))}function W(D){if(d.value!==null&&!(D?.type==="blur"&&document.activeElement===d.value)){if(D?.type==="keyup"){if(xn===d.value&&qi(D,[13,32])===!0){const te=new MouseEvent("click",D);te.qKeyEvent=!0,D.defaultPrevented===!0&&Vi(te),D.cancelBubble===!0&&Lu(te),d.value.dispatchEvent(te),Pn(D),D.qKeyEvent=!0}n("keyup",D)}L()}}function L(D){const te=g.value;D!==!0&&(On===d.value||Ln===d.value)&&te!==null&&te!==document.activeElement&&(te.setAttribute("tabindex",-1),te.focus()),On===d.value&&(v!==null&&(v.removeEventListener("touchcancel",W,je),v.removeEventListener("touchend",W,je)),On=v=null),Ln===d.value&&(document.removeEventListener("mouseup",W,je),Ln=null),xn===d.value&&(document.removeEventListener("keyup",W,!0),d.value?.removeEventListener("blur",W,je),xn=null),d.value?.classList.remove("q-btn--active")}function ee(D){Pn(D),D.qSkipRipple=!0}return $s(()=>{L(!0)}),Object.assign(r,{click:D=>{f.value===!0&&B(D)}}),()=>{let D=[];e.icon!==void 0&&D.push(J(Rs,{name:e.icon,left:e.stack!==!0&&k.value===!0,role:"img"})),k.value===!0&&D.push(J("span",{class:"block"},[e.label])),D=ir(t.default,D),e.iconRight!==void 0&&e.round===!1&&D.push(J(Rs,{name:e.iconRight,right:e.stack!==!0&&k.value===!0,role:"img"}));const te=[J("span",{class:"q-focus-helper",ref:g})];return e.loading===!0&&e.percentage!==void 0&&te.push(J("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[J("span",{class:"q-btn__progress-indicator fit block",style:_.value})])),te.push(J("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},D)),e.loading!==null&&te.push(J(Dp,{name:"q-transition--fade"},()=>e.loading===!0?[J("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[J(Id)])]:null)),Hl(J(l.value,j.value,te),[[UE,y.value,void 0,T.value]])}}});let sI=1,iI=document.body;function oI(e,t){const n=document.createElement("div");if(n.id=t!==void 0?`q-portal--${t}--${sI++}`:e,_s.globalNodes!==void 0){const r=_s.globalNodes.class;r!==void 0&&(n.className=r)}return iI.appendChild(n),n}function $I(e){e.remove()}let aI=0;const is={},os={},Ge={},Cd={},cI=/^\s*$/,Ad=[],lI=[void 0,null,!0,!1,""],ta=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],uI=["top-left","top-right","bottom-left","bottom-right"],or={positive:{icon:e=>e.iconSet.type.positive,color:"positive"},negative:{icon:e=>e.iconSet.type.negative,color:"negative"},warning:{icon:e=>e.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:e=>e.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function Rd(e,t,n){if(!e)return er("parameter required");let r;const s={textColor:"white"};if(e.ignoreDefaults!==!0&&Object.assign(s,is),Ar(e)===!1&&(s.type&&Object.assign(s,or[s.type]),e={message:e}),Object.assign(s,or[e.type||s.type],e),typeof s.icon=="function"&&(s.icon=s.icon(t)),s.spinner?(s.spinner===!0&&(s.spinner=Id),s.spinner=Sn(s.spinner)):s.spinner=!1,s.meta={hasMedia:!!(s.spinner!==!1||s.icon||s.avatar),hasText:al(s.message)||al(s.caption)},s.position){if(ta.includes(s.position)===!1)return er("wrong position",e)}else s.position="bottom";if(lI.includes(s.timeout)===!0)s.timeout=5e3;else{const c=Number(s.timeout);if(isNaN(c)||c<0)return er("wrong timeout",e);s.timeout=Number.isFinite(c)?c:0}s.timeout===0?s.progress=!1:s.progress===!0&&(s.meta.progressClass="q-notification__progress"+(s.progressClass?` ${s.progressClass}`:""),s.meta.progressStyle={animationDuration:`${s.timeout+1e3}ms`});const i=(Array.isArray(e.actions)===!0?e.actions:[]).concat(e.ignoreDefaults!==!0&&Array.isArray(is.actions)===!0?is.actions:[]).concat(Array.isArray(or[e.type]?.actions)===!0?or[e.type].actions:[]),{closeBtn:o}=s;if(o&&i.push({label:typeof o=="string"?o:t.lang.label.close}),s.actions=i.map(({handler:c,noDismiss:l,...u})=>({flat:!0,...u,onClick:typeof c=="function"?()=>{c(),l!==!0&&a()}:()=>{a()}})),s.multiLine===void 0&&(s.multiLine=s.actions.length>1),Object.assign(s.meta,{class:`q-notification row items-stretch q-notification--${s.multiLine===!0?"multi-line":"standard"}`+(s.color!==void 0?` bg-${s.color}`:"")+(s.textColor!==void 0?` text-${s.textColor}`:"")+(s.classes!==void 0?` ${s.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(s.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(s.multiLine===!0?"":" col"),leftClass:s.meta.hasText===!0?"additional":"single",attrs:{role:"alert",...s.attrs}}),s.group===!1?(s.group=void 0,s.meta.group=void 0):((s.group===void 0||s.group===!0)&&(s.group=[s.message,s.caption,s.multiline].concat(s.actions.map(c=>`${c.label}*${c.icon}`)).join("|")),s.meta.group=s.group+"|"+s.position),s.actions.length===0?s.actions=void 0:s.meta.actionsClass="q-notification__actions row items-center "+(s.multiLine===!0?"justify-end":"col-auto")+(s.meta.hasMedia===!0?" q-notification__actions--with-media":""),n!==void 0){n.notif.meta.timer&&(clearTimeout(n.notif.meta.timer),n.notif.meta.timer=void 0),s.meta.uid=n.notif.meta.uid;const c=Ge[s.position].value.indexOf(n.notif);Ge[s.position].value[c]=s}else{const c=os[s.meta.group];if(c===void 0){if(s.meta.uid=aI++,s.meta.badge=1,["left","right","center"].indexOf(s.position)!==-1)Ge[s.position].value.splice(Math.floor(Ge[s.position].value.length/2),0,s);else{const l=s.position.indexOf("top")!==-1?"unshift":"push";Ge[s.position].value[l](s)}s.group!==void 0&&(os[s.meta.group]=s)}else{if(c.meta.timer&&(clearTimeout(c.meta.timer),c.meta.timer=void 0),s.badgePosition!==void 0){if(uI.includes(s.badgePosition)===!1)return er("wrong badgePosition",e)}else s.badgePosition=`top-${s.position.indexOf("left")!==-1?"right":"left"}`;s.meta.uid=c.meta.uid,s.meta.badge=c.meta.badge+1,s.meta.badgeClass=`q-notification__badge q-notification__badge--${s.badgePosition}`+(s.badgeColor!==void 0?` bg-${s.badgeColor}`:"")+(s.badgeTextColor!==void 0?` text-${s.badgeTextColor}`:"")+(s.badgeClass?` ${s.badgeClass}`:"");const l=Ge[s.position].value.indexOf(c);Ge[s.position].value[l]=os[s.meta.group]=s}}const a=()=>{fI(s),r=void 0};if(s.timeout>0&&(s.meta.timer=setTimeout(()=>{s.meta.timer=void 0,a()},s.timeout+1e3)),s.group!==void 0)return c=>{c!==void 0?er("trying to update a grouped one which is forbidden",e):a()};if(r={dismiss:a,config:e,notif:s},n!==void 0){Object.assign(n,r);return}return c=>{if(r!==void 0)if(c===void 0)r.dismiss();else{const l=Object.assign({},r.config,c,{group:!1,position:s.position});Rd(l,t,r)}}}function fI(e){e.meta.timer&&(clearTimeout(e.meta.timer),e.meta.timer=void 0);const t=Ge[e.position].value.indexOf(e);if(t!==-1){e.group!==void 0&&delete os[e.meta.group];const n=Ad[""+e.meta.uid];if(n){const{width:r,height:s}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=r,n.style.height=s}Ge[e.position].value.splice(t,1),typeof e.onDismiss=="function"&&e.onDismiss()}}function al(e){return e!=null&&cI.test(e)!==!0}function er(e,t){return console.error(`Notify: ${e}`,t),!1}function dI(){return Dr({name:"QNotifications",devtools:{hide:!0},setup(){return()=>J("div",{class:"q-notifications"},ta.map(e=>J(rg,{key:e,class:Cd[e],tag:"div",name:`q-notification--${e}`},()=>Ge[e].value.map(t=>{const n=t.meta,r=[];if(n.hasMedia===!0&&(t.spinner!==!1?r.push(J(t.spinner,{class:"q-notification__spinner q-notification__spinner--"+n.leftClass,color:t.spinnerColor,size:t.spinnerSize})):t.icon?r.push(J(Rs,{class:"q-notification__icon q-notification__icon--"+n.leftClass,name:t.icon,color:t.iconColor,size:t.iconSize,role:"img"})):t.avatar&&r.push(J(NE,{class:"q-notification__avatar q-notification__avatar--"+n.leftClass},()=>J("img",{src:t.avatar,"aria-hidden":"true"})))),n.hasText===!0){let i;const o={class:"q-notification__message col"};if(t.html===!0)o.innerHTML=t.caption?`<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>`:t.message;else{const a=[t.message];i=t.caption?[J("div",a),J("div",{class:"q-notification__caption"},[t.caption])]:a}r.push(J("div",o,i))}const s=[J("div",{class:n.contentClass},r)];return t.progress===!0&&s.push(J("div",{key:`${n.uid}|p|${n.badge}`,class:n.progressClass,style:n.progressStyle})),t.actions!==void 0&&s.push(J("div",{class:n.actionsClass},t.actions.map(i=>J(rI,i)))),n.badge>1&&s.push(J("div",{key:`${n.uid}|${n.badge}`,class:t.meta.badgeClass,style:t.badgeStyle},[n.badge])),J("div",{ref:i=>{Ad[""+n.uid]=i},key:n.uid,class:n.class,...n.attrs},[J("div",{class:n.wrapperClass},s)])}))))}})}const hI={setDefaults(e){Ar(e)===!0&&Object.assign(is,e)},registerType(e,t){Ar(t)===!0&&(or[e]=t)},install({$q:e,parentApp:t}){if(e.notify=this.create=n=>Rd(n,e),e.notify.setDefaults=this.setDefaults,e.notify.registerType=this.registerType,e.config.notify!==void 0&&this.setDefaults(e.config.notify),this.__installed!==!0){ta.forEach(r=>{Ge[r]=pn([]);const s=["left","center","right"].includes(r)===!0?"center":r.indexOf("top")!==-1?"top":"bottom",i=r.indexOf("left")!==-1?"start":r.indexOf("right")!==-1?"end":"center",o=["left","right"].includes(r)?`items-${r==="left"?"start":"end"} justify-center`:r==="center"?"flex-center":`items-${i}`;Cd[r]=`q-notifications__list q-notifications__list--${s} fixed column no-wrap ${o}`});const n=oI("q-notify");Dg(dI(),t).mount(n)}}},pI={config:{notify:{position:"top-right",timeout:2500,textColor:"white"}},plugins:{Notify:hI}},gI="/";async function mI({app:e,router:t,store:n},r){let s=!1;const i=c=>{try{return t.resolve(c).href}catch{}return Object(c)===c?null:c},o=c=>{if(s=!0,typeof c=="string"&&/^https?:\/\//.test(c)){window.location.href=c;return}const l=i(c);l!==null&&(window.location.href=l,window.location.reload())},a=window.location.href.replace(window.location.origin,"");for(let c=0;s===!1&&c<r.length;c++)try{await r[c]({app:e,router:t,store:n,ssrContext:null,redirect:o,urlPath:a,publicPath:gI})}catch(l){if(l&&l.url){o(l.url);return}console.error("[Quasar] boot error:",l);return}s!==!0&&(e.use(t),e.mount("#q-app"))}SE(Ou,pI).then(e=>{const[t,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(s=>{if(s.status==="rejected"){console.error("[Quasar] boot error:",s.reason);return}return s.value.default})]:["all",r=>r.map(s=>s.default)];return Promise[t]([Me(()=>import("./axios-CH_r5wGf.js"),[]),Me(()=>Promise.resolve().then(()=>IE),void 0)]).then(r=>{const s=n(r).filter(i=>typeof i=="function");mI(e,s)})});export{Sg as $,kI as A,Bh as B,Oe as C,bI as D,wu as E,Je as F,NE as G,wp as H,Wd as I,So as J,yI as K,fo as L,Rs as M,wI as N,fn as O,Nh as P,rI as Q,CI as R,bg as S,ko as T,Pn as U,wo as V,Oh as W,kh as X,Vi as Y,Id as Z,Dp as _,Y as a,lt as a0,Lu as a1,DI as a2,OI as a3,AI as a4,Hl as a5,UE as a6,qi as a7,mg as a8,yg as a9,II as aa,_g as ab,vg as ac,EI as ad,MI as ae,_I as af,LI as ag,Hi as ah,VE as ai,vI as aj,oI as ak,$I as al,NI as am,$E as an,Ng as ao,TE as b,Dr as c,PI as d,RI as e,xI as f,Kn as g,J as h,We as i,TI as j,mn as k,SI as l,To as m,Cr as n,$s as o,Xr as p,gn as q,pn as r,In as s,eu as t,ir as u,yd as v,Bn as w,yu as x,vu as y,Th as z};
