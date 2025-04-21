const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MainLayout-YoP-Ih4b.js","assets/render-C8JR9mId.js","assets/QBtn-DnE1OJ2N.js","assets/QTooltip-DMRpYdgz.js","assets/focus-manager-BJWzFvJg.js","assets/QResizeObserver-Cn3jJxc2.js","assets/use-quasar-D-RMUAQk.js","assets/LandingPage-B8DV1atr.js","assets/QImg-BnR5kHoB.js","assets/QCard-BhPMv75Y.js","assets/use-dark-cG9WRWH4.js","assets/QPage-b_71ulio.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/LandingPage-Ddn_5YAl.css","assets/LoginPage-lmvDwfKG.js","assets/QInput-D0PC3Ozi.js","assets/QBanner-BAP4fe1n.js","assets/QForm-CacAoefb.js","assets/LoginPage-BnuH5prf.css","assets/SignupPage-fazLS3o3.js","assets/SignupPage-BQwGuAse.css","assets/VerifyEmail-JKuWBgku.js","assets/AuthAction-dqDSniiy.js","assets/DashboardPage-167QfCsZ.js","assets/DashboardPage-EM2_kqQv.css","assets/TermsOfService-CGi__jaA.js","assets/TermsOfService-Cnlz00NO.css","assets/PrivacyPolicy-U0KeeZ4i.js","assets/PrivacyPolicy-Bv0JX9hF.css","assets/AboutPage-CjLsCqB6.js","assets/AboutPage-BWy6HyuR.css","assets/ErrorNotFound-BolHsGOf.js"])))=>i.map(i=>d[i]);
const Af=function(){const t=typeof document<"u"&&document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),Rf=function(e){return"/"+e},Eo={},Ne=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=o(n.map(l=>{if(l=Rf(l),l in Eo)return;Eo[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Af,u||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((g,_)=>{d.addEventListener("load",g),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ki(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ae={},Sn=[],st=()=>{},Pf=()=>!1,ns=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Oi=e=>e.startsWith("onUpdate:"),ge=Object.assign,Ni=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},kf=Object.prototype.hasOwnProperty,ne=(e,t)=>kf.call(e,t),W=Array.isArray,Tn=e=>rs(e)==="[object Map]",bc=e=>rs(e)==="[object Set]",z=e=>typeof e=="function",fe=e=>typeof e=="string",zt=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",wc=e=>(ue(e)||z(e))&&z(e.then)&&z(e.catch),Ec=Object.prototype.toString,rs=e=>Ec.call(e),Of=e=>rs(e).slice(8,-1),Ic=e=>rs(e)==="[object Object]",xi=e=>fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Vn=ki(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ss=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Nf=/-(\w)/g,Ve=ss(e=>e.replace(Nf,(t,n)=>n?n.toUpperCase():"")),xf=/\B([A-Z])/g,gn=ss(e=>e.replace(xf,"-$1").toLowerCase()),is=ss(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ts=ss(e=>e?`on${is(e)}`:""),jt=(e,t)=>!Object.is(e,t),Cs=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Sc=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Df=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Mf=e=>{const t=fe(e)?Number(e):NaN;return isNaN(t)?e:t};let Io;const os=()=>Io||(Io=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Di(e){if(W(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=fe(r)?$f(r):Di(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(fe(e)||ue(e))return e}const Lf=/;(?![^(]*\))/g,Ff=/:([^]+)/,Uf=/\/\*[^]*?\*\//g;function $f(e){const t={};return e.replace(Uf,"").split(Lf).forEach(n=>{if(n){const r=n.split(Ff);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Mi(e){let t="";if(fe(e))t=e;else if(W(e))for(let n=0;n<e.length;n++){const r=Mi(e[n]);r&&(t+=r+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Hf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jf=ki(Hf);function Tc(e){return!!e||e===""}const Cc=e=>!!(e&&e.__v_isRef===!0),Bf=e=>fe(e)?e:e==null?"":W(e)||ue(e)&&(e.toString===Ec||!z(e.toString))?Cc(e)?Bf(e.value):JSON.stringify(e,Ac,2):String(e),Ac=(e,t)=>Cc(t)?Ac(e,t.value):Tn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[As(r,i)+" =>"]=s,n),{})}:bc(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>As(n))}:zt(t)?As(t):ue(t)&&!W(t)&&!Ic(t)?String(t):t,As=(e,t="")=>{var n;return zt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class Rc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ee,!t&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ee;try{return Ee=this,t()}finally{Ee=n}}}on(){Ee=this}off(){Ee=this.parent}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Pc(e){return new Rc(e)}function kc(){return Ee}function Vf(e,t=!1){Ee&&Ee.cleanups.push(e)}let le;const Rs=new WeakSet;class Oc{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&Ee.active&&Ee.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Rs.has(this)&&(Rs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||xc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,So(this),Dc(this);const t=le,n=ze;le=this,ze=!0;try{return this.fn()}finally{Mc(this),le=t,ze=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ui(t);this.deps=this.depsTail=void 0,So(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Rs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ti(this)&&this.run()}get dirty(){return ti(this)}}let Nc=0,Wn,qn;function xc(e,t=!1){if(e.flags|=8,t){e.next=qn,qn=e;return}e.next=Wn,Wn=e}function Li(){Nc++}function Fi(){if(--Nc>0)return;if(qn){let t=qn;for(qn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Wn;){let t=Wn;for(Wn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Dc(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Mc(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ui(r),Wf(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function ti(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Lc(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Lc(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===nr))return;e.globalVersion=nr;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!ti(e)){e.flags&=-3;return}const n=le,r=ze;le=e,ze=!0;try{Dc(e);const s=e.fn(e._value);(t.version===0||jt(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{le=n,ze=r,Mc(e),e.flags&=-3}}function Ui(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ui(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Wf(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ze=!0;const Fc=[];function Kt(){Fc.push(ze),ze=!1}function Gt(){const e=Fc.pop();ze=e===void 0?!0:e}function So(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=le;le=void 0;try{t()}finally{le=n}}}let nr=0;class qf{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $i{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!le||!ze||le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==le)n=this.activeLink=new qf(le,this),le.deps?(n.prevDep=le.depsTail,le.depsTail.nextDep=n,le.depsTail=n):le.deps=le.depsTail=n,Uc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=le.depsTail,n.nextDep=void 0,le.depsTail.nextDep=n,le.depsTail=n,le.deps===n&&(le.deps=r)}return n}trigger(t){this.version++,nr++,this.notify(t)}notify(t){Li();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Fi()}}}function Uc(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Uc(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ur=new WeakMap,on=Symbol(""),ni=Symbol(""),rr=Symbol("");function _e(e,t,n){if(ze&&le){let r=Ur.get(e);r||Ur.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new $i),s.map=r,s.key=n),s.track()}}function _t(e,t,n,r,s,i){const o=Ur.get(e);if(!o){nr++;return}const a=c=>{c&&c.trigger()};if(Li(),t==="clear")o.forEach(a);else{const c=W(e),l=c&&xi(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,d)=>{(d==="length"||d===rr||!zt(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(rr)),t){case"add":c?l&&a(o.get("length")):(a(o.get(on)),Tn(e)&&a(o.get(ni)));break;case"delete":c||(a(o.get(on)),Tn(e)&&a(o.get(ni)));break;case"set":Tn(e)&&a(o.get(on));break}}Fi()}function zf(e,t){const n=Ur.get(e);return n&&n.get(t)}function bn(e){const t=Z(e);return t===e?t:(_e(t,"iterate",rr),je(e)?t:t.map(ve))}function as(e){return _e(e=Z(e),"iterate",rr),e}const Kf={__proto__:null,[Symbol.iterator](){return Ps(this,Symbol.iterator,ve)},concat(...e){return bn(this).concat(...e.map(t=>W(t)?bn(t):t))},entries(){return Ps(this,"entries",e=>(e[1]=ve(e[1]),e))},every(e,t){return ht(this,"every",e,t,void 0,arguments)},filter(e,t){return ht(this,"filter",e,t,n=>n.map(ve),arguments)},find(e,t){return ht(this,"find",e,t,ve,arguments)},findIndex(e,t){return ht(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ht(this,"findLast",e,t,ve,arguments)},findLastIndex(e,t){return ht(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ht(this,"forEach",e,t,void 0,arguments)},includes(...e){return ks(this,"includes",e)},indexOf(...e){return ks(this,"indexOf",e)},join(e){return bn(this).join(e)},lastIndexOf(...e){return ks(this,"lastIndexOf",e)},map(e,t){return ht(this,"map",e,t,void 0,arguments)},pop(){return Fn(this,"pop")},push(...e){return Fn(this,"push",e)},reduce(e,...t){return To(this,"reduce",e,t)},reduceRight(e,...t){return To(this,"reduceRight",e,t)},shift(){return Fn(this,"shift")},some(e,t){return ht(this,"some",e,t,void 0,arguments)},splice(...e){return Fn(this,"splice",e)},toReversed(){return bn(this).toReversed()},toSorted(e){return bn(this).toSorted(e)},toSpliced(...e){return bn(this).toSpliced(...e)},unshift(...e){return Fn(this,"unshift",e)},values(){return Ps(this,"values",ve)}};function Ps(e,t,n){const r=as(e),s=r[t]();return r!==e&&!je(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Gf=Array.prototype;function ht(e,t,n,r,s,i){const o=as(e),a=o!==e&&!je(e),c=o[t];if(c!==Gf[t]){const f=c.apply(e,i);return a?ve(f):f}let l=n;o!==e&&(a?l=function(f,d){return n.call(this,ve(f),d,e)}:n.length>2&&(l=function(f,d){return n.call(this,f,d,e)}));const u=c.call(o,l,r);return a&&s?s(u):u}function To(e,t,n,r){const s=as(e);let i=n;return s!==e&&(je(e)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,e)}):i=function(o,a,c){return n.call(this,o,ve(a),c,e)}),s[t](i,...r)}function ks(e,t,n){const r=Z(e);_e(r,"iterate",rr);const s=r[t](...n);return(s===-1||s===!1)&&Bi(n[0])?(n[0]=Z(n[0]),r[t](...n)):s}function Fn(e,t,n=[]){Kt(),Li();const r=Z(e)[t].apply(e,n);return Fi(),Gt(),r}const Jf=ki("__proto__,__v_isRef,__isVue"),$c=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(zt));function Yf(e){zt(e)||(e=String(e));const t=Z(this);return _e(t,"has",e),t.hasOwnProperty(e)}class Hc{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?od:Wc:i?Vc:Bc).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=W(t);if(!s){let c;if(o&&(c=Kf[n]))return c;if(n==="hasOwnProperty")return Yf}const a=Reflect.get(t,n,de(t)?t:r);return(zt(n)?$c.has(n):Jf(n))||(s||_e(t,"get",n),i)?a:de(a)?o&&xi(n)?a:a.value:ue(a)?s?zc(a):mn(a):a}}class jc extends Hc{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=cn(i);if(!je(r)&&!cn(r)&&(i=Z(i),r=Z(r)),!W(t)&&de(i)&&!de(r))return c?!1:(i.value=r,!0)}const o=W(t)&&xi(n)?Number(n)<t.length:ne(t,n),a=Reflect.set(t,n,r,de(t)?t:s);return t===Z(s)&&(o?jt(r,i)&&_t(t,"set",n,r):_t(t,"add",n,r)),a}deleteProperty(t,n){const r=ne(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&_t(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!zt(n)||!$c.has(n))&&_e(t,"has",n),r}ownKeys(t){return _e(t,"iterate",W(t)?"length":on),Reflect.ownKeys(t)}}class Xf extends Hc{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Qf=new jc,Zf=new Xf,ed=new jc(!0);const ri=e=>e,Sr=e=>Reflect.getPrototypeOf(e);function td(e,t,n){return function(...r){const s=this.__v_raw,i=Z(s),o=Tn(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?ri:t?si:ve;return!t&&_e(i,"iterate",c?ni:on),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Tr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function nd(e,t){const n={get(s){const i=this.__v_raw,o=Z(i),a=Z(s);e||(jt(s,a)&&_e(o,"get",s),_e(o,"get",a));const{has:c}=Sr(o),l=t?ri:e?si:ve;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&_e(Z(s),"iterate",on),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Z(i),a=Z(s);return e||(jt(s,a)&&_e(o,"has",s),_e(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Z(a),l=t?ri:e?si:ve;return!e&&_e(c,"iterate",on),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return ge(n,e?{add:Tr("add"),set:Tr("set"),delete:Tr("delete"),clear:Tr("clear")}:{add(s){!t&&!je(s)&&!cn(s)&&(s=Z(s));const i=Z(this);return Sr(i).has.call(i,s)||(i.add(s),_t(i,"add",s,s)),this},set(s,i){!t&&!je(i)&&!cn(i)&&(i=Z(i));const o=Z(this),{has:a,get:c}=Sr(o);let l=a.call(o,s);l||(s=Z(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?jt(i,u)&&_t(o,"set",s,i):_t(o,"add",s,i),this},delete(s){const i=Z(this),{has:o,get:a}=Sr(i);let c=o.call(i,s);c||(s=Z(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&_t(i,"delete",s,void 0),l},clear(){const s=Z(this),i=s.size!==0,o=s.clear();return i&&_t(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=td(s,e,t)}),n}function Hi(e,t){const n=nd(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(ne(n,s)&&s in r?n:r,s,i)}const rd={get:Hi(!1,!1)},sd={get:Hi(!1,!0)},id={get:Hi(!0,!1)};const Bc=new WeakMap,Vc=new WeakMap,Wc=new WeakMap,od=new WeakMap;function ad(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cd(e){return e.__v_skip||!Object.isExtensible(e)?0:ad(Of(e))}function mn(e){return cn(e)?e:ji(e,!1,Qf,rd,Bc)}function qc(e){return ji(e,!1,ed,sd,Vc)}function zc(e){return ji(e,!0,Zf,id,Wc)}function ji(e,t,n,r,s){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=cd(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function Bt(e){return cn(e)?Bt(e.__v_raw):!!(e&&e.__v_isReactive)}function cn(e){return!!(e&&e.__v_isReadonly)}function je(e){return!!(e&&e.__v_isShallow)}function Bi(e){return e?!!e.__v_raw:!1}function Z(e){const t=e&&e.__v_raw;return t?Z(t):e}function xn(e){return!ne(e,"__v_skip")&&Object.isExtensible(e)&&Sc(e,"__v_skip",!0),e}const ve=e=>ue(e)?mn(e):e,si=e=>ue(e)?zc(e):e;function de(e){return e?e.__v_isRef===!0:!1}function cs(e){return Kc(e,!1)}function ld(e){return Kc(e,!0)}function Kc(e,t){return de(e)?e:new ud(e,t)}class ud{constructor(t,n){this.dep=new $i,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Z(t),this._value=n?t:ve(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||je(t)||cn(t);t=r?t:Z(t),jt(t,n)&&(this._rawValue=t,this._value=r?t:ve(t),this.dep.trigger())}}function Cn(e){return de(e)?e.value:e}const fd={get:(e,t,n)=>t==="__v_raw"?e:Cn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return de(s)&&!de(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Gc(e){return Bt(e)?e:new Proxy(e,fd)}function dd(e){const t=W(e)?new Array(e.length):{};for(const n in e)t[n]=pd(e,n);return t}class hd{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return zf(Z(this._object),this._key)}}function pd(e,t,n){const r=e[t];return de(r)?r:new hd(e,t,n)}class gd{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new $i(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=nr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return xc(this,!0),!0}get value(){const t=this.dep.track();return Lc(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function md(e,t,n=!1){let r,s;return z(e)?r=e:(r=e.get,s=e.set),new gd(r,s,n)}const Cr={},$r=new WeakMap;let en;function _d(e,t=!1,n=en){if(n){let r=$r.get(n);r||$r.set(n,r=[]),r.push(e)}}function vd(e,t,n=ae){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=P=>s?P:je(P)||s===!1||s===0?vt(P,1):vt(P);let u,f,d,g,_=!1,I=!1;if(de(e)?(f=()=>e.value,_=je(e)):Bt(e)?(f=()=>l(e),_=!0):W(e)?(I=!0,_=e.some(P=>Bt(P)||je(P)),f=()=>e.map(P=>{if(de(P))return P.value;if(Bt(P))return l(P);if(z(P))return c?c(P,2):P()})):z(e)?t?f=c?()=>c(e,2):e:f=()=>{if(d){Kt();try{d()}finally{Gt()}}const P=en;en=u;try{return c?c(e,3,[g]):e(g)}finally{en=P}}:f=st,t&&s){const P=f,F=s===!0?1/0:s;f=()=>vt(P(),F)}const U=kc(),D=()=>{u.stop(),U&&U.active&&Ni(U.effects,u)};if(i&&t){const P=t;t=(...F)=>{P(...F),D()}}let N=I?new Array(e.length).fill(Cr):Cr;const M=P=>{if(!(!(u.flags&1)||!u.dirty&&!P))if(t){const F=u.run();if(s||_||(I?F.some((J,K)=>jt(J,N[K])):jt(F,N))){d&&d();const J=en;en=u;try{const K=[F,N===Cr?void 0:I&&N[0]===Cr?[]:N,g];c?c(t,3,K):t(...K),N=F}finally{en=J}}}else u.run()};return a&&a(M),u=new Oc(f),u.scheduler=o?()=>o(M,!1):M,g=P=>_d(P,!1,u),d=u.onStop=()=>{const P=$r.get(u);if(P){if(c)c(P,4);else for(const F of P)F();$r.delete(u)}},t?r?M(!0):N=u.run():o?o(M.bind(null,!0),!0):u.run(),D.pause=u.pause.bind(u),D.resume=u.resume.bind(u),D.stop=D,D}function vt(e,t=1/0,n){if(t<=0||!ue(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,de(e))vt(e.value,t,n);else if(W(e))for(let r=0;r<e.length;r++)vt(e[r],t,n);else if(bc(e)||Tn(e))e.forEach(r=>{vt(r,t,n)});else if(Ic(e)){for(const r in e)vt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&vt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gr(e,t,n,r){try{return r?e(...r):e()}catch(s){ls(s,t,n)}}function Ge(e,t,n,r){if(z(e)){const s=gr(e,t,n,r);return s&&wc(s)&&s.catch(i=>{ls(i,t,n)}),s}if(W(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Ge(e[i],t,n,r));return s}}function ls(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ae;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,c,l)===!1)return}a=a.parent}if(i){Kt(),gr(i,null,10,[e,c,l]),Gt();return}}yd(e,n,s,r,o)}function yd(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Ie=[];let tt=-1;const An=[];let xt=null,En=0;const Jc=Promise.resolve();let Hr=null;function Vi(e){const t=Hr||Jc;return e?t.then(this?e.bind(this):e):t}function bd(e){let t=tt+1,n=Ie.length;for(;t<n;){const r=t+n>>>1,s=Ie[r],i=sr(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Wi(e){if(!(e.flags&1)){const t=sr(e),n=Ie[Ie.length-1];!n||!(e.flags&2)&&t>=sr(n)?Ie.push(e):Ie.splice(bd(t),0,e),e.flags|=1,Yc()}}function Yc(){Hr||(Hr=Jc.then(Qc))}function wd(e){W(e)?An.push(...e):xt&&e.id===-1?xt.splice(En+1,0,e):e.flags&1||(An.push(e),e.flags|=1),Yc()}function Co(e,t,n=tt+1){for(;n<Ie.length;n++){const r=Ie[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ie.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Xc(e){if(An.length){const t=[...new Set(An)].sort((n,r)=>sr(n)-sr(r));if(An.length=0,xt){xt.push(...t);return}for(xt=t,En=0;En<xt.length;En++){const n=xt[En];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}xt=null,En=0}}const sr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Qc(e){try{for(tt=0;tt<Ie.length;tt++){const t=Ie[tt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),gr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;tt<Ie.length;tt++){const t=Ie[tt];t&&(t.flags&=-2)}tt=-1,Ie.length=0,Xc(),Hr=null,(Ie.length||An.length)&&Qc()}}let Se=null,Zc=null;function jr(e){const t=Se;return Se=e,Zc=e&&e.type.__scopeId||null,t}function Ed(e,t=Se,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Ho(-1);const i=jr(t);let o;try{o=e(...s)}finally{jr(i),r._d&&Ho(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function yw(e,t){if(Se===null)return e;const n=ps(Se),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,c=ae]=t[s];i&&(z(i)&&(i={mounted:i,updated:i}),i.deep&&vt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function Yt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Kt(),Ge(c,n,8,[e.el,a,e,t]),Gt())}}const el=Symbol("_vte"),tl=e=>e.__isTeleport,zn=e=>e&&(e.disabled||e.disabled===""),Ao=e=>e&&(e.defer||e.defer===""),Ro=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Po=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,ii=(e,t)=>{const n=e&&e.to;return fe(n)?t?t(n):null:n},nl={name:"Teleport",__isTeleport:!0,process(e,t,n,r,s,i,o,a,c,l){const{mc:u,pc:f,pbc:d,o:{insert:g,querySelector:_,createText:I,createComment:U}}=l,D=zn(t.props);let{shapeFlag:N,children:M,dynamicChildren:P}=t;if(e==null){const F=t.el=I(""),J=t.anchor=I("");g(F,n,r),g(J,n,r);const K=(S,H)=>{N&16&&(s&&s.isCE&&(s.ce._teleportTarget=S),u(M,S,H,s,i,o,a,c))},$=()=>{const S=t.target=ii(t.props,_),H=rl(S,t,I,g);S&&(o!=="svg"&&Ro(S)?o="svg":o!=="mathml"&&Po(S)&&(o="mathml"),D||(K(S,H),kr(t,!1)))};D&&(K(n,J),kr(t,!0)),Ao(t.props)?we(()=>{$(),t.el.__isMounted=!0},i):$()}else{if(Ao(t.props)&&!e.el.__isMounted){we(()=>{nl.process(e,t,n,r,s,i,o,a,c,l),delete e.el.__isMounted},i);return}t.el=e.el,t.targetStart=e.targetStart;const F=t.anchor=e.anchor,J=t.target=e.target,K=t.targetAnchor=e.targetAnchor,$=zn(e.props),S=$?n:J,H=$?F:K;if(o==="svg"||Ro(J)?o="svg":(o==="mathml"||Po(J))&&(o="mathml"),P?(d(e.dynamicChildren,P,S,s,i,o,a),Ki(e,t,!0)):c||f(e,t,S,H,s,i,o,a,!1),D)$?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Ar(t,n,F,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const Y=t.target=ii(t.props,_);Y&&Ar(t,Y,null,l,0)}else $&&Ar(t,J,K,l,1);kr(t,D)}},remove(e,t,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:a,anchor:c,targetStart:l,targetAnchor:u,target:f,props:d}=e;if(f&&(s(l),s(u)),i&&s(c),o&16){const g=i||!zn(d);for(let _=0;_<a.length;_++){const I=a[_];r(I,t,n,g,!!I.dynamicChildren)}}},move:Ar,hydrate:Id};function Ar(e,t,n,{o:{insert:r},m:s},i=2){i===0&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=e,f=i===2;if(f&&r(o,t,n),(!f||zn(u))&&c&16)for(let d=0;d<l.length;d++)s(l[d],t,n,2);f&&r(a,t,n)}function Id(e,t,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c,insert:l,createText:u}},f){const d=t.target=ii(t.props,c);if(d){const g=zn(t.props),_=d._lpa||d.firstChild;if(t.shapeFlag&16)if(g)t.anchor=f(o(e),t,a(e),n,r,s,i),t.targetStart=_,t.targetAnchor=_&&o(_);else{t.anchor=o(e);let I=_;for(;I;){if(I&&I.nodeType===8){if(I.data==="teleport start anchor")t.targetStart=I;else if(I.data==="teleport anchor"){t.targetAnchor=I,d._lpa=t.targetAnchor&&o(t.targetAnchor);break}}I=o(I)}t.targetAnchor||rl(d,t,u,l),f(_&&o(_),t,d,n,r,s,i)}kr(t,g)}return t.anchor&&o(t.anchor)}const bw=nl;function kr(e,t){const n=e.ctx;if(n&&n.ut){let r,s;for(t?(r=e.el,s=e.anchor):(r=e.targetStart,s=e.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function rl(e,t,n,r){const s=t.targetStart=n(""),i=t.targetAnchor=n("");return s[el]=i,e&&(r(s,e),r(i,e)),i}const Dt=Symbol("_leaveCb"),Rr=Symbol("_enterCb");function Sd(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fl(()=>{e.isMounted=!0}),dl(()=>{e.isUnmounting=!0}),e}const Ue=[Function,Array],sl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ue,onEnter:Ue,onAfterEnter:Ue,onEnterCancelled:Ue,onBeforeLeave:Ue,onLeave:Ue,onAfterLeave:Ue,onLeaveCancelled:Ue,onBeforeAppear:Ue,onAppear:Ue,onAfterAppear:Ue,onAppearCancelled:Ue},il=e=>{const t=e.subTree;return t.component?il(t.component):t},Td={name:"BaseTransition",props:sl,setup(e,{slots:t}){const n=Sh(),r=Sd();return()=>{const s=t.default&&cl(t.default(),!0);if(!s||!s.length)return;const i=ol(s),o=Z(e),{mode:a}=o;if(r.isLeaving)return Os(i);const c=ko(i);if(!c)return Os(i);let l=oi(c,o,r,n,f=>l=f);c.type!==Re&&ir(c,l);let u=n.subTree&&ko(n.subTree);if(u&&u.type!==Re&&!nn(c,u)&&il(n).type!==Re){let f=oi(u,o,r,n);if(ir(u,f),a==="out-in"&&c.type!==Re)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Os(i);a==="in-out"&&c.type!==Re?f.delayLeave=(d,g,_)=>{const I=al(r,u);I[String(u.key)]=u,d[Dt]=()=>{g(),d[Dt]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{_(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function ol(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Re){t=n;break}}return t}const Cd=Td;function al(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function oi(e,t,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:g,onAfterLeave:_,onLeaveCancelled:I,onBeforeAppear:U,onAppear:D,onAfterAppear:N,onAppearCancelled:M}=t,P=String(e.key),F=al(n,e),J=(S,H)=>{S&&Ge(S,r,9,H)},K=(S,H)=>{const Y=H[1];J(S,H),W(S)?S.every(O=>O.length<=1)&&Y():S.length<=1&&Y()},$={mode:o,persisted:a,beforeEnter(S){let H=c;if(!n.isMounted)if(i)H=U||c;else return;S[Dt]&&S[Dt](!0);const Y=F[P];Y&&nn(e,Y)&&Y.el[Dt]&&Y.el[Dt](),J(H,[S])},enter(S){let H=l,Y=u,O=f;if(!n.isMounted)if(i)H=D||l,Y=N||u,O=M||f;else return;let X=!1;const he=S[Rr]=ye=>{X||(X=!0,ye?J(O,[S]):J(Y,[S]),$.delayedLeave&&$.delayedLeave(),S[Rr]=void 0)};H?K(H,[S,he]):he()},leave(S,H){const Y=String(e.key);if(S[Rr]&&S[Rr](!0),n.isUnmounting)return H();J(d,[S]);let O=!1;const X=S[Dt]=he=>{O||(O=!0,H(),he?J(I,[S]):J(_,[S]),S[Dt]=void 0,F[Y]===e&&delete F[Y])};F[Y]=e,g?K(g,[S,X]):X()},clone(S){const H=oi(S,t,n,r,s);return s&&s(H),H}};return $}function Os(e){if(us(e))return e=qt(e),e.children=null,e}function ko(e){if(!us(e))return tl(e.type)&&e.children?ol(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&z(n.default))return n.default()}}function ir(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ir(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function cl(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===nt?(o.patchFlag&128&&s++,r=r.concat(cl(o.children,t,a))):(t||o.type!==Re)&&r.push(a!=null?qt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function qi(e,t){return z(e)?ge({name:e.name},t,{setup:e}):e}function ll(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Br(e,t,n,r,s=!1){if(W(e)){e.forEach((_,I)=>Br(_,t&&(W(t)?t[I]:t),n,r,s));return}if(Kn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Br(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?ps(r.component):r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===ae?a.refs={}:a.refs,f=a.setupState,d=Z(f),g=f===ae?()=>!1:_=>ne(d,_);if(l!=null&&l!==c&&(fe(l)?(u[l]=null,g(l)&&(f[l]=null)):de(l)&&(l.value=null)),z(c))gr(c,a,12,[o,u]);else{const _=fe(c),I=de(c);if(_||I){const U=()=>{if(e.f){const D=_?g(c)?f[c]:u[c]:c.value;s?W(D)&&Ni(D,i):W(D)?D.includes(i)||D.push(i):_?(u[c]=[i],g(c)&&(f[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else _?(u[c]=o,g(c)&&(f[c]=o)):I&&(c.value=o,e.k&&(u[e.k]=o))};o?(U.id=-1,we(U,n)):U()}}}os().requestIdleCallback;os().cancelIdleCallback;const Kn=e=>!!e.type.__asyncLoader,us=e=>e.type.__isKeepAlive;function Ad(e,t){ul(e,"a",t)}function Rd(e,t){ul(e,"da",t)}function ul(e,t,n=pe){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(fs(t,r,n),n){let s=n.parent;for(;s&&s.parent;)us(s.parent.vnode)&&Pd(r,t,n,s),s=s.parent}}function Pd(e,t,n,r){const s=fs(t,e,r,!0);hl(()=>{Ni(r[t],s)},n)}function fs(e,t,n=pe,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Kt();const a=mr(n),c=Ge(t,n,e,o);return a(),Gt(),c});return r?s.unshift(i):s.push(i),i}}const At=e=>(t,n=pe)=>{(!ar||e==="sp")&&fs(e,(...r)=>t(...r),n)},kd=At("bm"),fl=At("m"),Od=At("bu"),Nd=At("u"),dl=At("bum"),hl=At("um"),xd=At("sp"),Dd=At("rtg"),Md=At("rtc");function Ld(e,t=pe){fs("ec",e,t)}const Fd="components";function Ud(e,t){return Hd(Fd,e,!0,t)||e}const $d=Symbol.for("v-ndc");function Hd(e,t,n=!0,r=!1){const s=Se||pe;if(s){const i=s.type;{const a=Ph(i,!1);if(a&&(a===t||a===Ve(t)||a===is(Ve(t))))return i}const o=Oo(s[e]||i[e],t)||Oo(s.appContext[e],t);return!o&&r?i:o}}function Oo(e,t){return e&&(e[t]||e[Ve(t)]||e[is(Ve(t))])}function ww(e,t,n,r){let s;const i=n,o=W(e);if(o||fe(e)){const a=o&&Bt(e);let c=!1;a&&(c=!je(e),e=as(e)),s=new Array(e.length);for(let l=0,u=e.length;l<u;l++)s[l]=t(c?ve(e[l]):e[l],l,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,i)}else if(ue(e))if(e[Symbol.iterator])s=Array.from(e,(a,c)=>t(a,c,void 0,i));else{const a=Object.keys(e);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=t(e[u],u,c,i)}}else s=[];return s}const ai=e=>e?Ll(e)?ps(e):ai(e.parent):null,Gn=ge(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ai(e.parent),$root:e=>ai(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>gl(e),$forceUpdate:e=>e.f||(e.f=()=>{Wi(e.update)}),$nextTick:e=>e.n||(e.n=Vi.bind(e.proxy)),$watch:e=>ch.bind(e)}),Ns=(e,t)=>e!==ae&&!e.__isScriptSetup&&ne(e,t),jd={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Ns(r,t))return o[t]=1,r[t];if(s!==ae&&ne(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&ne(l,t))return o[t]=3,i[t];if(n!==ae&&ne(n,t))return o[t]=4,n[t];ci&&(o[t]=0)}}const u=Gn[t];let f,d;if(u)return t==="$attrs"&&_e(e.attrs,"get",""),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==ae&&ne(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,ne(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Ns(s,t)?(s[t]=n,!0):r!==ae&&ne(r,t)?(r[t]=n,!0):ne(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==ae&&ne(e,o)||Ns(t,o)||(a=i[0])&&ne(a,o)||ne(r,o)||ne(Gn,o)||ne(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ne(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function No(e){return W(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ci=!0;function Bd(e){const t=gl(e),n=e.proxy,r=e.ctx;ci=!1,t.beforeCreate&&xo(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:g,updated:_,activated:I,deactivated:U,beforeDestroy:D,beforeUnmount:N,destroyed:M,unmounted:P,render:F,renderTracked:J,renderTriggered:K,errorCaptured:$,serverPrefetch:S,expose:H,inheritAttrs:Y,components:O,directives:X,filters:he}=t;if(l&&Vd(l,r,null),o)for(const G in o){const ee=o[G];z(ee)&&(r[G]=ee.bind(n))}if(s){const G=s.call(n,n);ue(G)&&(e.data=mn(G))}if(ci=!0,i)for(const G in i){const ee=i[G],dt=z(ee)?ee.bind(n,n):z(ee.get)?ee.get.bind(n,n):st,Rt=!z(ee)&&z(ee.set)?ee.set.bind(n):st,Ye=$e({get:dt,set:Rt});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:Ce=>Ye.value=Ce})}if(a)for(const G in a)pl(a[G],r,n,G);if(c){const G=z(c)?c.call(n):c;Reflect.ownKeys(G).forEach(ee=>{Or(ee,G[ee])})}u&&xo(u,e,"c");function se(G,ee){W(ee)?ee.forEach(dt=>G(dt.bind(n))):ee&&G(ee.bind(n))}if(se(kd,f),se(fl,d),se(Od,g),se(Nd,_),se(Ad,I),se(Rd,U),se(Ld,$),se(Md,J),se(Dd,K),se(dl,N),se(hl,P),se(xd,S),W(H))if(H.length){const G=e.exposed||(e.exposed={});H.forEach(ee=>{Object.defineProperty(G,ee,{get:()=>n[ee],set:dt=>n[ee]=dt})})}else e.exposed||(e.exposed={});F&&e.render===st&&(e.render=F),Y!=null&&(e.inheritAttrs=Y),O&&(e.components=O),X&&(e.directives=X),S&&ll(e)}function Vd(e,t,n=st){W(e)&&(e=li(e));for(const r in e){const s=e[r];let i;ue(s)?"default"in s?i=Be(s.from||r,s.default,!0):i=Be(s.from||r):i=Be(s),de(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function xo(e,t,n){Ge(W(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function pl(e,t,n,r){let s=r.includes(".")?Rl(n,r):()=>n[r];if(fe(e)){const i=t[e];z(i)&&Jn(s,i)}else if(z(e))Jn(s,e.bind(n));else if(ue(e))if(W(e))e.forEach(i=>pl(i,t,n,r));else{const i=z(e.handler)?e.handler.bind(n):t[e.handler];z(i)&&Jn(s,i,e)}}function gl(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>Vr(c,l,o,!0)),Vr(c,t,o)),ue(t)&&i.set(t,c),c}function Vr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Vr(e,i,n,!0),s&&s.forEach(o=>Vr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Wd[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Wd={data:Do,props:Mo,emits:Mo,methods:Hn,computed:Hn,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Hn,directives:Hn,watch:zd,provide:Do,inject:qd};function Do(e,t){return t?e?function(){return ge(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function qd(e,t){return Hn(li(e),li(t))}function li(e){if(W(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function Hn(e,t){return e?ge(Object.create(null),e,t):t}function Mo(e,t){return e?W(e)&&W(t)?[...new Set([...e,...t])]:ge(Object.create(null),No(e),No(t??{})):t}function zd(e,t){if(!e)return t;if(!t)return e;const n=ge(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function ml(){return{app:null,config:{isNativeTag:Pf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kd=0;function Gd(e,t){return function(r,s=null){z(r)||(r=ge({},r)),s!=null&&!ue(s)&&(s=null);const i=ml(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Kd++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Oh,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&z(u.install)?(o.add(u),u.install(l,...f)):z(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,d){if(!c){const g=l._ceVNode||De(r,s);return g.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),e(g,u,d),c=!0,l._container=u,u.__vue_app__=l,ps(g.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Ge(a,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=an;an=l;try{return u()}finally{an=f}}};return l}}let an=null;function Or(e,t){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[e]=t}}function Be(e,t,n=!1){const r=pe||Se;if(r||an){const s=an?an._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&z(t)?t.call(r&&r.proxy):t}}function Jd(){return!!(pe||Se||an)}const _l={},vl=()=>Object.create(_l),yl=e=>Object.getPrototypeOf(e)===_l;function Yd(e,t,n,r=!1){const s={},i=vl();e.propsDefaults=Object.create(null),bl(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:qc(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Xd(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=Z(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ds(e.emitsOptions,d))continue;const g=t[d];if(c)if(ne(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const _=Ve(d);s[_]=ui(c,a,_,g,e,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{bl(e,t,s,i)&&(l=!0);let u;for(const f in a)(!t||!ne(t,f)&&((u=gn(f))===f||!ne(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=ui(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!ne(t,f))&&(delete i[f],l=!0)}l&&_t(e.attrs,"set","")}function bl(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Vn(c))continue;const l=t[c];let u;s&&ne(s,u=Ve(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ds(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Z(n),l=a||ae;for(let u=0;u<i.length;u++){const f=i[u];n[f]=ui(s,c,f,l[f],e,!ne(l,f))}}return o}function ui(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=ne(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&z(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=mr(s);r=l[n]=c.call(null,t),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===gn(n))&&(r=!0))}return r}const Qd=new WeakMap;function wl(e,t,n=!1){const r=n?Qd:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!z(e)){const u=f=>{c=!0;const[d,g]=wl(f,t,!0);ge(o,d),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return ue(e)&&r.set(e,Sn),Sn;if(W(i))for(let u=0;u<i.length;u++){const f=Ve(i[u]);Lo(f)&&(o[f]=ae)}else if(i)for(const u in i){const f=Ve(u);if(Lo(f)){const d=i[u],g=o[f]=W(d)||z(d)?{type:d}:ge({},d),_=g.type;let I=!1,U=!0;if(W(_))for(let D=0;D<_.length;++D){const N=_[D],M=z(N)&&N.name;if(M==="Boolean"){I=!0;break}else M==="String"&&(U=!1)}else I=z(_)&&_.name==="Boolean";g[0]=I,g[1]=U,(I||ne(g,"default"))&&a.push(f)}}const l=[o,a];return ue(e)&&r.set(e,l),l}function Lo(e){return e[0]!=="$"&&!Vn(e)}const El=e=>e[0]==="_"||e==="$stable",zi=e=>W(e)?e.map(rt):[rt(e)],Zd=(e,t,n)=>{if(t._n)return t;const r=Ed((...s)=>zi(t(...s)),n);return r._c=!1,r},Il=(e,t,n)=>{const r=e._ctx;for(const s in e){if(El(s))continue;const i=e[s];if(z(i))t[s]=Zd(s,i,r);else if(i!=null){const o=zi(i);t[s]=()=>o}}},Sl=(e,t)=>{const n=zi(t);e.slots.default=()=>n},Tl=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},eh=(e,t,n)=>{const r=e.slots=vl();if(e.vnode.shapeFlag&32){const s=t._;s?(Tl(r,t,n),n&&Sc(r,"_",s,!0)):Il(t,r)}else t&&Sl(e,t)},th=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=ae;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:Tl(s,t,n):(i=!t.$stable,Il(t,s)),o=t}else t&&(Sl(e,t),o={default:1});if(i)for(const a in s)!El(a)&&o[a]==null&&delete s[a]},we=gh;function nh(e){return rh(e)}function rh(e,t){const n=os();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:g=st,insertStaticContent:_}=e,I=(h,p,m,v=null,w=null,b=null,A=void 0,C=null,T=!!p.dynamicChildren)=>{if(h===p)return;h&&!nn(h,p)&&(v=y(h),Ce(h,w,b,!0),h=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:E,ref:B,shapeFlag:k}=p;switch(E){case hs:U(h,p,m,v);break;case Re:D(h,p,m,v);break;case Ds:h==null&&N(p,m,v,A);break;case nt:O(h,p,m,v,w,b,A,C,T);break;default:k&1?F(h,p,m,v,w,b,A,C,T):k&6?X(h,p,m,v,w,b,A,C,T):(k&64||k&128)&&E.process(h,p,m,v,w,b,A,C,T,L)}B!=null&&w&&Br(B,h&&h.ref,b,p||h,!p)},U=(h,p,m,v)=>{if(h==null)r(p.el=a(p.children),m,v);else{const w=p.el=h.el;p.children!==h.children&&l(w,p.children)}},D=(h,p,m,v)=>{h==null?r(p.el=c(p.children||""),m,v):p.el=h.el},N=(h,p,m,v)=>{[h.el,h.anchor]=_(h.children,p,m,v,h.el,h.anchor)},M=({el:h,anchor:p},m,v)=>{let w;for(;h&&h!==p;)w=d(h),r(h,m,v),h=w;r(p,m,v)},P=({el:h,anchor:p})=>{let m;for(;h&&h!==p;)m=d(h),s(h),h=m;s(p)},F=(h,p,m,v,w,b,A,C,T)=>{p.type==="svg"?A="svg":p.type==="math"&&(A="mathml"),h==null?J(p,m,v,w,b,A,C,T):S(h,p,w,b,A,C,T)},J=(h,p,m,v,w,b,A,C)=>{let T,E;const{props:B,shapeFlag:k,transition:j,dirs:q}=h;if(T=h.el=o(h.type,b,B&&B.is,B),k&8?u(T,h.children):k&16&&$(h.children,T,null,v,w,xs(h,b),A,C),q&&Yt(h,null,v,"created"),K(T,h,h.scopeId,A,v),B){for(const ce in B)ce!=="value"&&!Vn(ce)&&i(T,ce,null,B[ce],b,v);"value"in B&&i(T,"value",null,B.value,b),(E=B.onVnodeBeforeMount)&&et(E,v,h)}q&&Yt(h,null,v,"beforeMount");const Q=sh(w,j);Q&&j.beforeEnter(T),r(T,p,m),((E=B&&B.onVnodeMounted)||Q||q)&&we(()=>{E&&et(E,v,h),Q&&j.enter(T),q&&Yt(h,null,v,"mounted")},w)},K=(h,p,m,v,w)=>{if(m&&g(h,m),v)for(let b=0;b<v.length;b++)g(h,v[b]);if(w){let b=w.subTree;if(p===b||kl(b.type)&&(b.ssContent===p||b.ssFallback===p)){const A=w.vnode;K(h,A,A.scopeId,A.slotScopeIds,w.parent)}}},$=(h,p,m,v,w,b,A,C,T=0)=>{for(let E=T;E<h.length;E++){const B=h[E]=C?Mt(h[E]):rt(h[E]);I(null,B,p,m,v,w,b,A,C)}},S=(h,p,m,v,w,b,A)=>{const C=p.el=h.el;let{patchFlag:T,dynamicChildren:E,dirs:B}=p;T|=h.patchFlag&16;const k=h.props||ae,j=p.props||ae;let q;if(m&&Xt(m,!1),(q=j.onVnodeBeforeUpdate)&&et(q,m,p,h),B&&Yt(p,h,m,"beforeUpdate"),m&&Xt(m,!0),(k.innerHTML&&j.innerHTML==null||k.textContent&&j.textContent==null)&&u(C,""),E?H(h.dynamicChildren,E,C,m,v,xs(p,w),b):A||ee(h,p,C,null,m,v,xs(p,w),b,!1),T>0){if(T&16)Y(C,k,j,m,w);else if(T&2&&k.class!==j.class&&i(C,"class",null,j.class,w),T&4&&i(C,"style",k.style,j.style,w),T&8){const Q=p.dynamicProps;for(let ce=0;ce<Q.length;ce++){const re=Q[ce],ke=k[re],Ae=j[re];(Ae!==ke||re==="value")&&i(C,re,ke,Ae,w,m)}}T&1&&h.children!==p.children&&u(C,p.children)}else!A&&E==null&&Y(C,k,j,m,w);((q=j.onVnodeUpdated)||B)&&we(()=>{q&&et(q,m,p,h),B&&Yt(p,h,m,"updated")},v)},H=(h,p,m,v,w,b,A)=>{for(let C=0;C<p.length;C++){const T=h[C],E=p[C],B=T.el&&(T.type===nt||!nn(T,E)||T.shapeFlag&70)?f(T.el):m;I(T,E,B,null,v,w,b,A,!0)}},Y=(h,p,m,v,w)=>{if(p!==m){if(p!==ae)for(const b in p)!Vn(b)&&!(b in m)&&i(h,b,p[b],null,w,v);for(const b in m){if(Vn(b))continue;const A=m[b],C=p[b];A!==C&&b!=="value"&&i(h,b,C,A,w,v)}"value"in m&&i(h,"value",p.value,m.value,w)}},O=(h,p,m,v,w,b,A,C,T)=>{const E=p.el=h?h.el:a(""),B=p.anchor=h?h.anchor:a("");let{patchFlag:k,dynamicChildren:j,slotScopeIds:q}=p;q&&(C=C?C.concat(q):q),h==null?(r(E,m,v),r(B,m,v),$(p.children||[],m,B,w,b,A,C,T)):k>0&&k&64&&j&&h.dynamicChildren?(H(h.dynamicChildren,j,m,w,b,A,C),(p.key!=null||w&&p===w.subTree)&&Ki(h,p,!0)):ee(h,p,m,B,w,b,A,C,T)},X=(h,p,m,v,w,b,A,C,T)=>{p.slotScopeIds=C,h==null?p.shapeFlag&512?w.ctx.activate(p,m,v,A,T):he(p,m,v,w,b,A,T):ye(h,p,T)},he=(h,p,m,v,w,b,A)=>{const C=h.component=Ih(h,v,w);if(us(h)&&(C.ctx.renderer=L),Th(C,!1,A),C.asyncDep){if(w&&w.registerDep(C,se,A),!h.el){const T=C.subTree=De(Re);D(null,T,p,m)}}else se(C,h,p,m,w,b,A)},ye=(h,p,m)=>{const v=p.component=h.component;if(hh(h,p,m))if(v.asyncDep&&!v.asyncResolved){G(v,p,m);return}else v.next=p,v.update();else p.el=h.el,v.vnode=p},se=(h,p,m,v,w,b,A)=>{const C=()=>{if(h.isMounted){let{next:k,bu:j,u:q,parent:Q,vnode:ce}=h;{const Qe=Cl(h);if(Qe){k&&(k.el=ce.el,G(h,k,A)),Qe.asyncDep.then(()=>{h.isUnmounted||C()});return}}let re=k,ke;Xt(h,!1),k?(k.el=ce.el,G(h,k,A)):k=ce,j&&Cs(j),(ke=k.props&&k.props.onVnodeBeforeUpdate)&&et(ke,Q,k,ce),Xt(h,!0);const Ae=Uo(h),Xe=h.subTree;h.subTree=Ae,I(Xe,Ae,f(Xe.el),y(Xe),h,w,b),k.el=Ae.el,re===null&&ph(h,Ae.el),q&&we(q,w),(ke=k.props&&k.props.onVnodeUpdated)&&we(()=>et(ke,Q,k,ce),w)}else{let k;const{el:j,props:q}=p,{bm:Q,m:ce,parent:re,root:ke,type:Ae}=h,Xe=Kn(p);Xt(h,!1),Q&&Cs(Q),!Xe&&(k=q&&q.onVnodeBeforeMount)&&et(k,re,p),Xt(h,!0);{ke.ce&&ke.ce._injectChildStyle(Ae);const Qe=h.subTree=Uo(h);I(null,Qe,m,v,h,w,b),p.el=Qe.el}if(ce&&we(ce,w),!Xe&&(k=q&&q.onVnodeMounted)){const Qe=p;we(()=>et(k,re,Qe),w)}(p.shapeFlag&256||re&&Kn(re.vnode)&&re.vnode.shapeFlag&256)&&h.a&&we(h.a,w),h.isMounted=!0,p=m=v=null}};h.scope.on();const T=h.effect=new Oc(C);h.scope.off();const E=h.update=T.run.bind(T),B=h.job=T.runIfDirty.bind(T);B.i=h,B.id=h.uid,T.scheduler=()=>Wi(B),Xt(h,!0),E()},G=(h,p,m)=>{p.component=h;const v=h.vnode.props;h.vnode=p,h.next=null,Xd(h,p.props,v,m),th(h,p.children,m),Kt(),Co(h),Gt()},ee=(h,p,m,v,w,b,A,C,T=!1)=>{const E=h&&h.children,B=h?h.shapeFlag:0,k=p.children,{patchFlag:j,shapeFlag:q}=p;if(j>0){if(j&128){Rt(E,k,m,v,w,b,A,C,T);return}else if(j&256){dt(E,k,m,v,w,b,A,C,T);return}}q&8?(B&16&&Fe(E,w,b),k!==E&&u(m,k)):B&16?q&16?Rt(E,k,m,v,w,b,A,C,T):Fe(E,w,b,!0):(B&8&&u(m,""),q&16&&$(k,m,v,w,b,A,C,T))},dt=(h,p,m,v,w,b,A,C,T)=>{h=h||Sn,p=p||Sn;const E=h.length,B=p.length,k=Math.min(E,B);let j;for(j=0;j<k;j++){const q=p[j]=T?Mt(p[j]):rt(p[j]);I(h[j],q,m,null,w,b,A,C,T)}E>B?Fe(h,w,b,!0,!1,k):$(p,m,v,w,b,A,C,T,k)},Rt=(h,p,m,v,w,b,A,C,T)=>{let E=0;const B=p.length;let k=h.length-1,j=B-1;for(;E<=k&&E<=j;){const q=h[E],Q=p[E]=T?Mt(p[E]):rt(p[E]);if(nn(q,Q))I(q,Q,m,null,w,b,A,C,T);else break;E++}for(;E<=k&&E<=j;){const q=h[k],Q=p[j]=T?Mt(p[j]):rt(p[j]);if(nn(q,Q))I(q,Q,m,null,w,b,A,C,T);else break;k--,j--}if(E>k){if(E<=j){const q=j+1,Q=q<B?p[q].el:v;for(;E<=j;)I(null,p[E]=T?Mt(p[E]):rt(p[E]),m,Q,w,b,A,C,T),E++}}else if(E>j)for(;E<=k;)Ce(h[E],w,b,!0),E++;else{const q=E,Q=E,ce=new Map;for(E=Q;E<=j;E++){const Oe=p[E]=T?Mt(p[E]):rt(p[E]);Oe.key!=null&&ce.set(Oe.key,E)}let re,ke=0;const Ae=j-Q+1;let Xe=!1,Qe=0;const Ln=new Array(Ae);for(E=0;E<Ae;E++)Ln[E]=0;for(E=q;E<=k;E++){const Oe=h[E];if(ke>=Ae){Ce(Oe,w,b,!0);continue}let Ze;if(Oe.key!=null)Ze=ce.get(Oe.key);else for(re=Q;re<=j;re++)if(Ln[re-Q]===0&&nn(Oe,p[re])){Ze=re;break}Ze===void 0?Ce(Oe,w,b,!0):(Ln[Ze-Q]=E+1,Ze>=Qe?Qe=Ze:Xe=!0,I(Oe,p[Ze],m,null,w,b,A,C,T),ke++)}const bo=Xe?ih(Ln):Sn;for(re=bo.length-1,E=Ae-1;E>=0;E--){const Oe=Q+E,Ze=p[Oe],wo=Oe+1<B?p[Oe+1].el:v;Ln[E]===0?I(null,Ze,m,wo,w,b,A,C,T):Xe&&(re<0||E!==bo[re]?Ye(Ze,m,wo,2):re--)}}},Ye=(h,p,m,v,w=null)=>{const{el:b,type:A,transition:C,children:T,shapeFlag:E}=h;if(E&6){Ye(h.component.subTree,p,m,v);return}if(E&128){h.suspense.move(p,m,v);return}if(E&64){A.move(h,p,m,L);return}if(A===nt){r(b,p,m);for(let k=0;k<T.length;k++)Ye(T[k],p,m,v);r(h.anchor,p,m);return}if(A===Ds){M(h,p,m);return}if(v!==2&&E&1&&C)if(v===0)C.beforeEnter(b),r(b,p,m),we(()=>C.enter(b),w);else{const{leave:k,delayLeave:j,afterLeave:q}=C,Q=()=>r(b,p,m),ce=()=>{k(b,()=>{Q(),q&&q()})};j?j(b,Q,ce):ce()}else r(b,p,m)},Ce=(h,p,m,v=!1,w=!1)=>{const{type:b,props:A,ref:C,children:T,dynamicChildren:E,shapeFlag:B,patchFlag:k,dirs:j,cacheIndex:q}=h;if(k===-2&&(w=!1),C!=null&&Br(C,null,m,h,!0),q!=null&&(p.renderCache[q]=void 0),B&256){p.ctx.deactivate(h);return}const Q=B&1&&j,ce=!Kn(h);let re;if(ce&&(re=A&&A.onVnodeBeforeUnmount)&&et(re,p,h),B&6)Ir(h.component,m,v);else{if(B&128){h.suspense.unmount(m,v);return}Q&&Yt(h,null,p,"beforeUnmount"),B&64?h.type.remove(h,p,m,L,v):E&&!E.hasOnce&&(b!==nt||k>0&&k&64)?Fe(E,p,m,!1,!0):(b===nt&&k&384||!w&&B&16)&&Fe(T,p,m),v&&vn(h)}(ce&&(re=A&&A.onVnodeUnmounted)||Q)&&we(()=>{re&&et(re,p,h),Q&&Yt(h,null,p,"unmounted")},m)},vn=h=>{const{type:p,el:m,anchor:v,transition:w}=h;if(p===nt){yn(m,v);return}if(p===Ds){P(h);return}const b=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(h.shapeFlag&1&&w&&!w.persisted){const{leave:A,delayLeave:C}=w,T=()=>A(m,b);C?C(h.el,b,T):T()}else b()},yn=(h,p)=>{let m;for(;h!==p;)m=d(h),s(h),h=m;s(p)},Ir=(h,p,m)=>{const{bum:v,scope:w,job:b,subTree:A,um:C,m:T,a:E}=h;Fo(T),Fo(E),v&&Cs(v),w.stop(),b&&(b.flags|=8,Ce(A,h,p,m)),C&&we(C,p),we(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Fe=(h,p,m,v=!1,w=!1,b=0)=>{for(let A=b;A<h.length;A++)Ce(h[A],p,m,v,w)},y=h=>{if(h.shapeFlag&6)return y(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const p=d(h.anchor||h.el),m=p&&p[el];return m?d(m):p};let x=!1;const R=(h,p,m)=>{h==null?p._vnode&&Ce(p._vnode,null,null,!0):I(p._vnode||null,h,p,null,null,null,m),p._vnode=h,x||(x=!0,Co(),Xc(),x=!1)},L={p:I,um:Ce,m:Ye,r:vn,mt:he,mc:$,pc:ee,pbc:H,n:y,o:e};return{render:R,hydrate:void 0,createApp:Gd(R)}}function xs({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Xt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function sh(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ki(e,t,n=!1){const r=e.children,s=t.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Mt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Ki(o,a)),a.type===hs&&(a.el=o.el)}}function ih(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Cl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Cl(t)}function Fo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const oh=Symbol.for("v-scx"),ah=()=>Be(oh);function Jn(e,t,n){return Al(e,t,n)}function Al(e,t,n=ae){const{immediate:r,deep:s,flush:i,once:o}=n,a=ge({},n),c=t&&r||!t&&i!=="post";let l;if(ar){if(i==="sync"){const g=ah();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=st,g.resume=st,g.pause=st,g}}const u=pe;a.call=(g,_,I)=>Ge(g,u,_,I);let f=!1;i==="post"?a.scheduler=g=>{we(g,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(g,_)=>{_?g():Wi(g)}),a.augmentJob=g=>{t&&(g.flags|=4),f&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const d=vd(e,t,a);return ar&&(l?l.push(d):c&&d()),d}function ch(e,t,n){const r=this.proxy,s=fe(e)?e.includes(".")?Rl(r,e):()=>r[e]:e.bind(r,r);let i;z(t)?i=t:(i=t.handler,n=t);const o=mr(this),a=Al(s,i.bind(r),n);return o(),a}function Rl(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const lh=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ve(t)}Modifiers`]||e[`${gn(t)}Modifiers`];function uh(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ae;let s=n;const i=t.startsWith("update:"),o=i&&lh(r,t.slice(7));o&&(o.trim&&(s=n.map(u=>fe(u)?u.trim():u)),o.number&&(s=n.map(Df)));let a,c=r[a=Ts(t)]||r[a=Ts(Ve(t))];!c&&i&&(c=r[a=Ts(gn(t))]),c&&Ge(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ge(l,e,6,s)}}function Pl(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!z(e)){const c=l=>{const u=Pl(l,t,!0);u&&(a=!0,ge(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(ue(e)&&r.set(e,null),null):(W(i)?i.forEach(c=>o[c]=null):ge(o,i),ue(e)&&r.set(e,o),o)}function ds(e,t){return!e||!ns(t)?!1:(t=t.slice(2).replace(/Once$/,""),ne(e,t[0].toLowerCase()+t.slice(1))||ne(e,gn(t))||ne(e,t))}function Uo(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:d,setupState:g,ctx:_,inheritAttrs:I}=e,U=jr(e);let D,N;try{if(n.shapeFlag&4){const P=s||r,F=P;D=rt(l.call(F,P,u,f,g,d,_)),N=a}else{const P=t;D=rt(P.length>1?P(f,{attrs:a,slots:o,emit:c}):P(f,null)),N=t.props?a:fh(a)}}catch(P){Yn.length=0,ls(P,e,1),D=De(Re)}let M=D;if(N&&I!==!1){const P=Object.keys(N),{shapeFlag:F}=M;P.length&&F&7&&(i&&P.some(Oi)&&(N=dh(N,i)),M=qt(M,N,!1,!0))}return n.dirs&&(M=qt(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&ir(M,n.transition),D=M,jr(U),D}const fh=e=>{let t;for(const n in e)(n==="class"||n==="style"||ns(n))&&((t||(t={}))[n]=e[n]);return t},dh=(e,t)=>{const n={};for(const r in e)(!Oi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function hh(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?$o(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!ds(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?$o(r,o,l):!0:!!o;return!1}function $o(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!ds(n,i))return!0}return!1}function ph({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const kl=e=>e.__isSuspense;function gh(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):wd(e)}const nt=Symbol.for("v-fgt"),hs=Symbol.for("v-txt"),Re=Symbol.for("v-cmt"),Ds=Symbol.for("v-stc"),Yn=[];let xe=null;function Ol(e=!1){Yn.push(xe=e?null:[])}function mh(){Yn.pop(),xe=Yn[Yn.length-1]||null}let or=1;function Ho(e,t=!1){or+=e,e<0&&xe&&t&&(xe.hasOnce=!0)}function Nl(e){return e.dynamicChildren=or>0?xe||Sn:null,mh(),or>0&&xe&&xe.push(e),e}function Ew(e,t,n,r,s,i){return Nl(Ml(e,t,n,r,s,i,!0))}function xl(e,t,n,r,s){return Nl(De(e,t,n,r,s,!0))}function Wr(e){return e?e.__v_isVNode===!0:!1}function nn(e,t){return e.type===t.type&&e.key===t.key}const Dl=({key:e})=>e??null,Nr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?fe(e)||de(e)||z(e)?{i:Se,r:e,k:t,f:!!n}:e:null);function Ml(e,t=null,n=null,r=0,s=null,i=e===nt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Dl(t),ref:t&&Nr(t),scopeId:Zc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Se};return a?(Gi(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=fe(n)?8:16),or>0&&!o&&xe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xe.push(c),c}const De=_h;function _h(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===$d)&&(e=Re),Wr(e)){const a=qt(e,t,!0);return n&&Gi(a,n),or>0&&!i&&xe&&(a.shapeFlag&6?xe[xe.indexOf(e)]=a:xe.push(a)),a.patchFlag=-2,a}if(kh(e)&&(e=e.__vccOpts),t){t=vh(t);let{class:a,style:c}=t;a&&!fe(a)&&(t.class=Mi(a)),ue(c)&&(Bi(c)&&!W(c)&&(c=ge({},c)),t.style=Di(c))}const o=fe(e)?1:kl(e)?128:tl(e)?64:ue(e)?4:z(e)?2:0;return Ml(e,t,n,r,s,o,i,!0)}function vh(e){return e?Bi(e)||yl(e)?ge({},e):e:null}function qt(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=e,l=t?bh(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Dl(l),ref:t&&t.ref?n&&i?W(i)?i.concat(Nr(t)):[i,Nr(t)]:Nr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==nt?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qt(e.ssContent),ssFallback:e.ssFallback&&qt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&ir(u,c.clone(u)),u}function yh(e=" ",t=0){return De(hs,null,e,t)}function Iw(e="",t=!1){return t?(Ol(),xl(Re,null,e)):De(Re,null,e)}function rt(e){return e==null||typeof e=="boolean"?De(Re):W(e)?De(nt,null,e.slice()):Wr(e)?Mt(e):De(hs,null,String(e))}function Mt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:qt(e)}function Gi(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(W(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Gi(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!yl(t)?t._ctx=Se:s===3&&Se&&(Se.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:Se},n=32):(t=String(t),r&64?(n=16,t=[yh(t)]):n=8);e.children=t,e.shapeFlag|=n}function bh(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Mi([t.class,r.class]));else if(s==="style")t.style=Di([t.style,r.style]);else if(ns(s)){const i=t[s],o=r[s];o&&i!==o&&!(W(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function et(e,t,n,r=null){Ge(e,t,7,[n,r])}const wh=ml();let Eh=0;function Ih(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||wh,i={uid:Eh++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wl(r,s),emitsOptions:Pl(r,s),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=uh.bind(null,i),e.ce&&e.ce(i),i}let pe=null;const Sh=()=>pe||Se;let qr,fi;{const e=os(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};qr=t("__VUE_INSTANCE_SETTERS__",n=>pe=n),fi=t("__VUE_SSR_SETTERS__",n=>ar=n)}const mr=e=>{const t=pe;return qr(e),e.scope.on(),()=>{e.scope.off(),qr(t)}},jo=()=>{pe&&pe.scope.off(),qr(null)};function Ll(e){return e.vnode.shapeFlag&4}let ar=!1;function Th(e,t=!1,n=!1){t&&fi(t);const{props:r,children:s}=e.vnode,i=Ll(e);Yd(e,r,i,t),eh(e,s,n);const o=i?Ch(e,t):void 0;return t&&fi(!1),o}function Ch(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,jd);const{setup:r}=n;if(r){Kt();const s=e.setupContext=r.length>1?Rh(e):null,i=mr(e),o=gr(r,e,0,[e.props,s]),a=wc(o);if(Gt(),i(),(a||e.sp)&&!Kn(e)&&ll(e),a){if(o.then(jo,jo),t)return o.then(c=>{Bo(e,c)}).catch(c=>{ls(c,e,0)});e.asyncDep=o}else Bo(e,o)}else Fl(e)}function Bo(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=Gc(t)),Fl(e)}function Fl(e,t,n){const r=e.type;e.render||(e.render=r.render||st);{const s=mr(e);Kt();try{Bd(e)}finally{Gt(),s()}}}const Ah={get(e,t){return _e(e,"get",""),e[t]}};function Rh(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Ah),slots:e.slots,emit:e.emit,expose:t}}function ps(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Gc(xn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Gn)return Gn[n](e)},has(t,n){return n in t||n in Gn}})):e.proxy}function Ph(e,t=!0){return z(e)?e.displayName||e.name:e.name||t&&e.__name}function kh(e){return z(e)&&"__vccOpts"in e}const $e=(e,t)=>md(e,t,ar);function Ji(e,t,n){const r=arguments.length;return r===2?ue(t)&&!W(t)?Wr(t)?De(e,null,[t]):De(e,t):De(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Wr(n)&&(n=[n]),De(e,t,n))}const Oh="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let di;const Vo=typeof window<"u"&&window.trustedTypes;if(Vo)try{di=Vo.createPolicy("vue",{createHTML:e=>e})}catch{}const Ul=di?e=>di.createHTML(e):e=>e,Nh="http://www.w3.org/2000/svg",xh="http://www.w3.org/1998/Math/MathML",mt=typeof document<"u"?document:null,Wo=mt&&mt.createElement("template"),Dh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?mt.createElementNS(Nh,e):t==="mathml"?mt.createElementNS(xh,e):n?mt.createElement(e,{is:n}):mt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>mt.createTextNode(e),createComment:e=>mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Wo.innerHTML=Ul(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=Wo.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Pt="transition",Un="animation",cr=Symbol("_vtc"),$l={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Mh=ge({},sl,$l),Lh=e=>(e.displayName="Transition",e.props=Mh,e),Sw=Lh((e,{slots:t})=>Ji(Cd,Fh(e),t)),Qt=(e,t=[])=>{W(e)?e.forEach(n=>n(...t)):e&&e(...t)},qo=e=>e?W(e)?e.some(t=>t.length>1):e.length>1:!1;function Fh(e){const t={};for(const O in e)O in $l||(t[O]=e[O]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,_=Uh(s),I=_&&_[0],U=_&&_[1],{onBeforeEnter:D,onEnter:N,onEnterCancelled:M,onLeave:P,onLeaveCancelled:F,onBeforeAppear:J=D,onAppear:K=N,onAppearCancelled:$=M}=t,S=(O,X,he,ye)=>{O._enterCancelled=ye,Zt(O,X?u:a),Zt(O,X?l:o),he&&he()},H=(O,X)=>{O._isLeaving=!1,Zt(O,f),Zt(O,g),Zt(O,d),X&&X()},Y=O=>(X,he)=>{const ye=O?K:N,se=()=>S(X,O,he);Qt(ye,[X,se]),zo(()=>{Zt(X,O?c:i),pt(X,O?u:a),qo(ye)||Ko(X,r,I,se)})};return ge(t,{onBeforeEnter(O){Qt(D,[O]),pt(O,i),pt(O,o)},onBeforeAppear(O){Qt(J,[O]),pt(O,c),pt(O,l)},onEnter:Y(!1),onAppear:Y(!0),onLeave(O,X){O._isLeaving=!0;const he=()=>H(O,X);pt(O,f),O._enterCancelled?(pt(O,d),Yo()):(Yo(),pt(O,d)),zo(()=>{O._isLeaving&&(Zt(O,f),pt(O,g),qo(P)||Ko(O,r,U,he))}),Qt(P,[O,he])},onEnterCancelled(O){S(O,!1,void 0,!0),Qt(M,[O])},onAppearCancelled(O){S(O,!0,void 0,!0),Qt($,[O])},onLeaveCancelled(O){H(O),Qt(F,[O])}})}function Uh(e){if(e==null)return null;if(ue(e))return[Ms(e.enter),Ms(e.leave)];{const t=Ms(e);return[t,t]}}function Ms(e){return Mf(e)}function pt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[cr]||(e[cr]=new Set)).add(t)}function Zt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[cr];n&&(n.delete(t),n.size||(e[cr]=void 0))}function zo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let $h=0;function Ko(e,t,n,r){const s=e._endId=++$h,i=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Hh(e,t);if(!o)return r();const l=o+"end";let u=0;const f=()=>{e.removeEventListener(l,d),i()},d=g=>{g.target===e&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),e.addEventListener(l,d)}function Hh(e,t){const n=window.getComputedStyle(e),r=_=>(n[_]||"").split(", "),s=r(`${Pt}Delay`),i=r(`${Pt}Duration`),o=Go(s,i),a=r(`${Un}Delay`),c=r(`${Un}Duration`),l=Go(a,c);let u=null,f=0,d=0;t===Pt?o>0&&(u=Pt,f=o,d=i.length):t===Un?l>0&&(u=Un,f=l,d=c.length):(f=Math.max(o,l),u=f>0?o>l?Pt:Un:null,d=u?u===Pt?i.length:c.length:0);const g=u===Pt&&/\b(transform|all)(,|$)/.test(r(`${Pt}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:g}}function Go(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Jo(n)+Jo(e[r])))}function Jo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Yo(){return document.body.offsetHeight}function jh(e,t,n){const r=e[cr];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Xo=Symbol("_vod"),Bh=Symbol("_vsh"),Vh=Symbol(""),Wh=/(^|;)\s*display\s*:/;function qh(e,t,n){const r=e.style,s=fe(n);let i=!1;if(n&&!s){if(t)if(fe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&xr(r,a,"")}else for(const o in t)n[o]==null&&xr(r,o,"");for(const o in n)o==="display"&&(i=!0),xr(r,o,n[o])}else if(s){if(t!==n){const o=r[Vh];o&&(n+=";"+o),r.cssText=n,i=Wh.test(n)}}else t&&e.removeAttribute("style");Xo in e&&(e[Xo]=i?r.display:"",e[Bh]&&(r.display="none"))}const Qo=/\s*!important$/;function xr(e,t,n){if(W(n))n.forEach(r=>xr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=zh(e,t);Qo.test(n)?e.setProperty(gn(r),n.replace(Qo,""),"important"):e[r]=n}}const Zo=["Webkit","Moz","ms"],Ls={};function zh(e,t){const n=Ls[t];if(n)return n;let r=Ve(t);if(r!=="filter"&&r in e)return Ls[t]=r;r=is(r);for(let s=0;s<Zo.length;s++){const i=Zo[s]+r;if(i in e)return Ls[t]=i}return t}const ea="http://www.w3.org/1999/xlink";function ta(e,t,n,r,s,i=jf(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ea,t.slice(6,t.length)):e.setAttributeNS(ea,t,n):n==null||i&&!Tc(n)?e.removeAttribute(t):e.setAttribute(t,i?"":zt(n)?String(n):n)}function na(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ul(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Tc(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Kh(e,t,n,r){e.addEventListener(t,n,r)}function Gh(e,t,n,r){e.removeEventListener(t,n,r)}const ra=Symbol("_vei");function Jh(e,t,n,r,s=null){const i=e[ra]||(e[ra]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=Yh(t);if(r){const l=i[t]=Zh(r,s);Kh(e,a,l,c)}else o&&(Gh(e,a,o,c),i[t]=void 0)}}const sa=/(?:Once|Passive|Capture)$/;function Yh(e){let t;if(sa.test(e)){t={};let r;for(;r=e.match(sa);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):gn(e.slice(2)),t]}let Fs=0;const Xh=Promise.resolve(),Qh=()=>Fs||(Xh.then(()=>Fs=0),Fs=Date.now());function Zh(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ge(ep(r,n.value),t,5,[r])};return n.value=e,n.attached=Qh(),n}function ep(e,t){if(W(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const ia=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,tp=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?jh(e,r,o):t==="style"?qh(e,n,r):ns(t)?Oi(t)||Jh(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):np(e,t,r,o))?(na(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ta(e,t,r,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!fe(r))?na(e,Ve(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ta(e,t,r,o))};function np(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&ia(t)&&z(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ia(t)&&fe(n)?!1:t in e}const rp=ge({patchProp:tp},Dh);let oa;function sp(){return oa||(oa=nh(rp))}const ip=(...e)=>{const t=sp().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=ap(r);if(!s)return;const i=t._component;!z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,op(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function op(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ap(e){return fe(e)?document.querySelector(e):e}function Yi(e,t,n,r){return Object.defineProperty(e,t,{get:n,set:r,enumerable:!0}),e}const ln=cs(!1);let hi;function cp(e,t){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:t[0]||""}}function lp(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const Hl="ontouchstart"in window||window.navigator.maxTouchPoints>0;function up(e){const t=e.toLowerCase(),n=lp(t),r=cp(t,n),s={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};r.browser&&(s[r.browser]=!0,s.version=r.version,s.versionNumber=parseInt(r.version,10)),r.platform&&(s[r.platform]=!0);const i=s.android||s.ios||s.bb||s.blackberry||s.ipad||s.iphone||s.ipod||s.kindle||s.playbook||s.silk||s["windows phone"];if(i===!0||t.indexOf("mobile")!==-1?s.mobile=!0:s.desktop=!0,s["windows phone"]&&(s.winphone=!0,delete s["windows phone"]),s.edga||s.edgios||s.edg?(s.edge=!0,r.browser="edge"):s.crios?(s.chrome=!0,r.browser="chrome"):s.fxios&&(s.firefox=!0,r.browser="firefox"),(s.ipod||s.ipad||s.iphone)&&(s.ios=!0),s.vivaldi&&(r.browser="vivaldi",s.vivaldi=!0),(s.chrome||s.opr||s.safari||s.vivaldi||s.mobile===!0&&s.ios!==!0&&i!==!0)&&(s.webkit=!0),s.opr&&(r.browser="opera",s.opera=!0),s.safari&&(s.blackberry||s.bb?(r.browser="blackberry",s.blackberry=!0):s.playbook?(r.browser="playbook",s.playbook=!0):s.android?(r.browser="android",s.android=!0):s.kindle?(r.browser="kindle",s.kindle=!0):s.silk&&(r.browser="silk",s.silk=!0)),s.name=r.browser,s.platform=r.platform,t.indexOf("electron")!==-1)s.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)s.bex=!0;else{if(window.Capacitor!==void 0?(s.capacitor=!0,s.nativeMobile=!0,s.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(s.cordova=!0,s.nativeMobile=!0,s.nativeMobileWrapper="cordova"),ln.value===!0&&(hi={is:{...s}}),Hl===!0&&s.mac===!0&&(s.desktop===!0&&s.safari===!0||s.nativeMobile===!0&&s.android!==!0&&s.ios!==!0&&s.ipad!==!0)){delete s.mac,delete s.desktop;const o=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(s,{mobile:!0,ios:!0,platform:o,[o]:!0})}s.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete s.desktop,s.mobile=!0)}return s}const aa=navigator.userAgent||navigator.vendor||window.opera,fp={has:{touch:!1,webStorage:!1},within:{iframe:!1}},it={userAgent:aa,is:up(aa),has:{touch:Hl},within:{iframe:window.self!==window.top}},pi={install(e){const{$q:t}=e;ln.value===!0?(e.onSSRHydrated.push(()=>{Object.assign(t.platform,it),ln.value=!1}),t.platform=mn(this)):t.platform=this}};{let e;Yi(it.has,"webStorage",()=>{if(e!==void 0)return e;try{if(window.localStorage)return e=!0,!0}catch{}return e=!1,!1}),Object.assign(pi,it),ln.value===!0&&(Object.assign(pi,hi,fp),hi=null)}function Tw(e){return xn(qi(e))}function Cw(e){return xn(e)}const gs=(e,t)=>{const n=mn(e);for(const r in e)Yi(t,r,()=>n[r],s=>{n[r]=s});return t},ms={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(ms,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch{}function lr(){}function Aw(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function Rw(e){if(e.path)return e.path;if(e.composedPath)return e.composedPath();const t=[];let n=e.target;for(;n;){if(t.push(n),n.tagName==="HTML")return t.push(document),t.push(window),t;n=n.parentElement}}function Pw(e){e.stopPropagation()}function kw(e){e.cancelable!==!1&&e.preventDefault()}function Ow(e){e.cancelable!==!1&&e.preventDefault(),e.stopPropagation()}function Nw(e,t,n){const r=`__q_${t}_evt`;e[r]=e[r]!==void 0?e[r].concat(n):n,n.forEach(s=>{s[0].addEventListener(s[1],e[s[2]],ms[s[3]])})}function xw(e,t){const n=`__q_${t}_evt`;e[n]!==void 0&&(e[n].forEach(r=>{r[0].removeEventListener(r[1],e[r[2]],ms[r[3]])}),e[n]=void 0)}function dp(e,t=250,n){let r=null;function s(){const i=arguments,o=()=>{r=null,e.apply(this,i)};r!==null&&clearTimeout(r),r=setTimeout(o,t)}return s.cancel=()=>{r!==null&&clearTimeout(r)},s}const Us=["sm","md","lg","xl"],{passive:ca}=ms,hp=gs({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:lr,setDebounce:lr,install({$q:e,onSSRHydrated:t}){if(e.screen=this,this.__installed===!0){e.config.screen!==void 0&&(e.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,s=document.scrollingElement||document.documentElement,i=n===void 0||it.is.mobile===!0?()=>[Math.max(window.innerWidth,s.clientWidth),Math.max(window.innerHeight,s.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-s.clientWidth,n.height*n.scale+window.innerHeight-s.clientHeight],o=e.config.screen?.bodyClasses===!0;this.__update=f=>{const[d,g]=i();if(g!==this.height&&(this.height=g),d!==this.width)this.width=d;else if(f!==!0)return;let _=this.sizes;this.gt.xs=d>=_.sm,this.gt.sm=d>=_.md,this.gt.md=d>=_.lg,this.gt.lg=d>=_.xl,this.lt.sm=d<_.sm,this.lt.md=d<_.md,this.lt.lg=d<_.lg,this.lt.xl=d<_.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,_=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",_!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${_}`)),this.name=_)};let a,c={},l=16;this.setSizes=f=>{Us.forEach(d=>{f[d]!==void 0&&(c[d]=f[d])})},this.setDebounce=f=>{l=f};const u=()=>{const f=getComputedStyle(document.body);f.getPropertyValue("--q-size-sm")&&Us.forEach(d=>{this.sizes[d]=parseInt(f.getPropertyValue(`--q-size-${d}`),10)}),this.setSizes=d=>{Us.forEach(g=>{d[g]&&(this.sizes[g]=d[g])}),this.__update(!0)},this.setDebounce=d=>{a!==void 0&&r.removeEventListener("resize",a,ca),a=d>0?dp(this.__update,d):this.__update,r.addEventListener("resize",a,ca)},this.setDebounce(l),Object.keys(c).length!==0?(this.setSizes(c),c=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};ln.value===!0?t.push(u):u()}}),me=gs({isActive:!1,mode:!1},{__media:void 0,set(e){me.mode=e,e==="auto"?(me.__media===void 0&&(me.__media=window.matchMedia("(prefers-color-scheme: dark)"),me.__updateMedia=()=>{me.set("auto")},me.__media.addListener(me.__updateMedia)),e=me.__media.matches):me.__media!==void 0&&(me.__media.removeListener(me.__updateMedia),me.__media=void 0),me.isActive=e===!0,document.body.classList.remove(`body--${e===!0?"light":"dark"}`),document.body.classList.add(`body--${e===!0?"dark":"light"}`)},toggle(){me.set(me.isActive===!1)},install({$q:e,ssrContext:t}){const{dark:n}=e.config;e.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}});function pp(e,t,n=document.body){if(typeof e!="string")throw new TypeError("Expected a string as propName");if(typeof t!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${e}`,t)}let jl=!1;function gp(e){jl=e.isComposing===!0}function mp(e){return jl===!0||e!==Object(e)||e.isComposing===!0||e.qKeyEvent===!0}function Dw(e,t){return mp(e)===!0?!1:[].concat(t).includes(e.keyCode)}function Bl(e){if(e.ios===!0)return"ios";if(e.android===!0)return"android"}function _p({is:e,has:t,within:n},r){const s=[e.desktop===!0?"desktop":"mobile",`${t.touch===!1?"no-":""}touch`];if(e.mobile===!0){const i=Bl(e);i!==void 0&&s.push("platform-"+i)}if(e.nativeMobile===!0){const i=e.nativeMobileWrapper;s.push(i),s.push("native-mobile"),e.ios===!0&&(r[i]===void 0||r[i].iosStatusBarPadding!==!1)&&s.push("q-ios-padding")}else e.electron===!0?s.push("electron"):e.bex===!0&&s.push("bex");return n.iframe===!0&&s.push("within-iframe"),s}function vp(){const{is:e}=it,t=document.body.className,n=new Set(t.replace(/ {2}/g," ").split(" "));if(e.nativeMobile!==!0&&e.electron!==!0&&e.bex!==!0){if(e.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(e.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const s=Bl(e);s!==void 0&&n.add(`platform-${s}`)}}it.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),it.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");t!==r&&(document.body.className=r)}function yp(e){for(const t in e)pp(t,e[t])}const bp={install(e){if(this.__installed!==!0){if(ln.value===!0)vp();else{const{$q:t}=e;t.config.brand!==void 0&&yp(t.config.brand);const n=_p(it,t.config);document.body.classList.add.apply(document.body.classList,n)}it.is.ios===!0&&document.body.addEventListener("touchstart",lr),window.addEventListener("keydown",gp,!0)}}},Vl=()=>!0;function wp(e){return typeof e=="string"&&e!==""&&e!=="/"&&e!=="#/"}function Ep(e){return e.startsWith("#")===!0&&(e=e.substring(1)),e.startsWith("/")===!1&&(e="/"+e),e.endsWith("/")===!0&&(e=e.substring(0,e.length-1)),"#"+e}function Ip(e){if(e.backButtonExit===!1)return()=>!1;if(e.backButtonExit==="*")return Vl;const t=["#/"];return Array.isArray(e.backButtonExit)===!0&&t.push(...e.backButtonExit.filter(wp).map(Ep)),()=>t.includes(window.location.hash)}const Sp={__history:[],add:lr,remove:lr,install({$q:e}){if(this.__installed===!0)return;const{cordova:t,capacitor:n}=it.is;if(t!==!0&&n!==!0)return;const r=e.config[t===!0?"cordova":"capacitor"];if(r?.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=Vl),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const s=Ip(Object.assign({backButtonExit:!0},r)),i=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else s()===!0?navigator.app.exitApp():window.history.back()};t===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",i,!1)}):window.Capacitor.Plugins.App.addListener("backButton",i)}},la={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:e=>e?`Expand "${e}"`:"Expand",collapse:e=>e?`Collapse "${e}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days",prevMonth:"Previous month",nextMonth:"Next month",prevYear:"Previous year",nextYear:"Next year",today:"Today",prevRangeYears:e=>`Previous ${e} years`,nextRangeYears:e=>`Next ${e} years`},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>e===1?"1 record selected.":(e===0?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,n)=>e+"-"+t+" of "+n,columns:"Columns"},pagination:{first:"First page",prev:"Previous page",next:"Next page",last:"Last page"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function ua(){const e=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof e=="string")return e.split(/[-_]/).map((t,n)=>n===0?t.toLowerCase():n>1||t.length<4?t.toUpperCase():t[0].toUpperCase()+t.slice(1).toLowerCase()).join("-")}const Lt=gs({__qLang:{}},{getLocale:ua,set(e=la,t){const n={...e,rtl:e.rtl===!0,getLocale:ua};{if(n.set=Lt.set,Lt.__langConfig===void 0||Lt.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(Lt.__qLang,n)}},install({$q:e,lang:t,ssrContext:n}){e.lang=Lt.__qLang,Lt.__langConfig=e.config.lang,this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set"&&s!=="getLocale")}}),this.set(t||la))}}),Tp={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},zr=gs({iconMapFn:null,__qIconSet:{}},{set(e,t){const n={...e};n.set=zr.set,Object.assign(zr.__qIconSet,n)},install({$q:e,iconSet:t,ssrContext:n}){e.config.iconMapFn!==void 0&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__qIconSet,Yi(e,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set")}}),this.set(t||Tp))}}),Cp="_q_",Mw="_q_l_",Lw="_q_pc_",Fw="_q_fo_",Uw="_q_tabs_";function $w(){}const fa={};let Wl=!1;function Ap(){Wl=!0}function da(e){return e!==null&&typeof e=="object"&&Array.isArray(e)!==!0}const ha=[pi,bp,me,hp,Sp,Lt,zr];function pa(e,t){t.forEach(n=>{n.install(e),n.__installed=!0})}function Rp(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(Cp,n.$q),pa(n,ha),t.components!==void 0&&Object.values(t.components).forEach(r=>{da(r)===!0&&r.name!==void 0&&e.component(r.name,r)}),t.directives!==void 0&&Object.values(t.directives).forEach(r=>{da(r)===!0&&r.name!==void 0&&e.directive(r.name,r)}),t.plugins!==void 0&&pa(n,Object.values(t.plugins).filter(r=>typeof r.install=="function"&&ha.includes(r)===!1)),ln.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}const Pp=function(e,t={}){const n={version:"2.18.1"};Wl===!1?(t.config!==void 0&&Object.assign(fa,t.config),n.config={...fa},Ap()):n.config=t.config||{},Rp(e,t,{parentApp:e,$q:n,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})},kp={name:"Quasar",version:"2.18.1",install:Pp,lang:Lt,iconSet:zr},Op={__name:"App",setup(e){return(t,n)=>{const r=Ud("router-view");return Ol(),xl(r)}}},Xi=e=>e,Hw=Xi,Np=Xi,xp=Xi;/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ql;const _s=e=>ql=e,zl=Symbol();function gi(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Xn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Xn||(Xn={}));function Dp(){const e=Pc(!0),t=e.run(()=>cs({}));let n=[],r=[];const s=xn({install(i){_s(s),s._a=i,i.provide(zl,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const Kl=()=>{};function ga(e,t,n,r=Kl){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&kc()&&Vf(s),s}function wn(e,...t){e.slice().forEach(n=>{n(...t)})}const Mp=e=>e(),ma=Symbol(),$s=Symbol();function mi(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,r)=>e.set(r,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];gi(s)&&gi(r)&&e.hasOwnProperty(n)&&!de(r)&&!Bt(r)?e[n]=mi(s,r):e[n]=r}return e}const Lp=Symbol();function Fp(e){return!gi(e)||!Object.prototype.hasOwnProperty.call(e,Lp)}const{assign:Nt}=Object;function Up(e){return!!(de(e)&&e.effect)}function $p(e,t,n,r){const{state:s,actions:i,getters:o}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=s?s():{});const u=dd(n.state.value[e]);return Nt(u,i,Object.keys(o||{}).reduce((f,d)=>(f[d]=xn($e(()=>{_s(n);const g=n._s.get(e);return o[d].call(g,g)})),f),{}))}return c=Gl(e,l,t,n,r,!0),c}function Gl(e,t,n={},r,s,i){let o;const a=Nt({actions:{}},n),c={deep:!0};let l,u,f=[],d=[],g;const _=r.state.value[e];!i&&!_&&(r.state.value[e]={}),cs({});let I;function U($){let S;l=u=!1,typeof $=="function"?($(r.state.value[e]),S={type:Xn.patchFunction,storeId:e,events:g}):(mi(r.state.value[e],$),S={type:Xn.patchObject,payload:$,storeId:e,events:g});const H=I=Symbol();Vi().then(()=>{I===H&&(l=!0)}),u=!0,wn(f,S,r.state.value[e])}const D=i?function(){const{state:S}=n,H=S?S():{};this.$patch(Y=>{Nt(Y,H)})}:Kl;function N(){o.stop(),f=[],d=[],r._s.delete(e)}const M=($,S="")=>{if(ma in $)return $[$s]=S,$;const H=function(){_s(r);const Y=Array.from(arguments),O=[],X=[];function he(G){O.push(G)}function ye(G){X.push(G)}wn(d,{args:Y,name:H[$s],store:F,after:he,onError:ye});let se;try{se=$.apply(this&&this.$id===e?this:F,Y)}catch(G){throw wn(X,G),G}return se instanceof Promise?se.then(G=>(wn(O,G),G)).catch(G=>(wn(X,G),Promise.reject(G))):(wn(O,se),se)};return H[ma]=!0,H[$s]=S,H},P={_p:r,$id:e,$onAction:ga.bind(null,d),$patch:U,$reset:D,$subscribe($,S={}){const H=ga(f,$,S.detached,()=>Y()),Y=o.run(()=>Jn(()=>r.state.value[e],O=>{(S.flush==="sync"?u:l)&&$({storeId:e,type:Xn.direct,events:g},O)},Nt({},c,S)));return H},$dispose:N},F=mn(P);r._s.set(e,F);const K=(r._a&&r._a.runWithContext||Mp)(()=>r._e.run(()=>(o=Pc()).run(()=>t({action:M}))));for(const $ in K){const S=K[$];if(de(S)&&!Up(S)||Bt(S))i||(_&&Fp(S)&&(de(S)?S.value=_[$]:mi(S,_[$])),r.state.value[e][$]=S);else if(typeof S=="function"){const H=M(S,$);K[$]=H,a.actions[$]=S}}return Nt(F,K),Nt(Z(F),K),Object.defineProperty(F,"$state",{get:()=>r.state.value[e],set:$=>{U(S=>{Nt(S,$)})}}),r._p.forEach($=>{Nt(F,o.run(()=>$({store:F,app:r._a,pinia:r,options:a})))}),_&&i&&n.hydrate&&n.hydrate(F.$state,_),l=!0,u=!0,F}/*! #__NO_SIDE_EFFECTS__ */function Hp(e,t,n){let r;const s=typeof t=="function";r=s?n:t;function i(o,a){const c=Jd();return o=o||(c?Be(zl,null):null),o&&_s(o),o=ql,o._s.has(e)||(s?Gl(e,t,r,o):$p(e,r,o)),o._s.get(e)}return i.$id=e,i}const Hs=xp(()=>Dp());/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const In=typeof document<"u";function Jl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function jp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Jl(e.default)}const te=Object.assign;function js(e,t){const n={};for(const r in t){const s=t[r];n[r]=Je(s)?s.map(e):e(s)}return n}const Qn=()=>{},Je=Array.isArray,Yl=/#/g,Bp=/&/g,Vp=/\//g,Wp=/=/g,qp=/\?/g,Xl=/\+/g,zp=/%5B/g,Kp=/%5D/g,Ql=/%5E/g,Gp=/%60/g,Zl=/%7B/g,Jp=/%7C/g,eu=/%7D/g,Yp=/%20/g;function Qi(e){return encodeURI(""+e).replace(Jp,"|").replace(zp,"[").replace(Kp,"]")}function Xp(e){return Qi(e).replace(Zl,"{").replace(eu,"}").replace(Ql,"^")}function _i(e){return Qi(e).replace(Xl,"%2B").replace(Yp,"+").replace(Yl,"%23").replace(Bp,"%26").replace(Gp,"`").replace(Zl,"{").replace(eu,"}").replace(Ql,"^")}function Qp(e){return _i(e).replace(Wp,"%3D")}function Zp(e){return Qi(e).replace(Yl,"%23").replace(qp,"%3F")}function eg(e){return e==null?"":Zp(e).replace(Vp,"%2F")}function ur(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const tg=/\/$/,ng=e=>e.replace(tg,"");function Bs(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=og(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ur(o)}}function rg(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _a(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function sg(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&On(t.matched[r],n.matched[s])&&tu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function On(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function tu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ig(e[n],t[n]))return!1;return!0}function ig(e,t){return Je(e)?va(e,t):Je(t)?va(t,e):e===t}function va(e,t){return Je(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function og(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const kt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var fr;(function(e){e.pop="pop",e.push="push"})(fr||(fr={}));var Zn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Zn||(Zn={}));function ag(e){if(!e)if(In){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ng(e)}const cg=/^[^#]+#/;function lg(e,t){return e.replace(cg,"#")+t}function ug(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const vs=()=>({left:window.scrollX,top:window.scrollY});function fg(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=ug(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ya(e,t){return(history.state?history.state.position-t:-1)+e}const vi=new Map;function dg(e,t){vi.set(e,t)}function hg(e){const t=vi.get(e);return vi.delete(e),t}let pg=()=>location.protocol+"//"+location.host;function nu(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),_a(c,"")}return _a(n,e)+r+s}function gg(e,t,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const g=nu(e,location),_=n.value,I=t.value;let U=0;if(d){if(n.value=g,t.value=d,o&&o===_){o=null;return}U=I?d.position-I.position:0}else r(g);s.forEach(D=>{D(n.value,_,{delta:U,type:fr.pop,direction:U?U>0?Zn.forward:Zn.back:Zn.unknown})})};function c(){o=n.value}function l(d){s.push(d);const g=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(te({},d.state,{scroll:vs()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function ba(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?vs():null}}function mg(e){const{history:t,location:n}=window,r={value:nu(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:pg()+e+c;try{t[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=te({},t.state,ba(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=te({},s.value,t.state,{forward:c,scroll:vs()});i(u.current,u,!0);const f=te({},ba(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function _g(e){e=ag(e);const t=mg(e),n=gg(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=te({location:"",base:e,go:r,createHref:lg.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function vg(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),_g(e)}function yg(e){return typeof e=="string"||e&&typeof e=="object"}function ru(e){return typeof e=="string"||typeof e=="symbol"}const su=Symbol("");var wa;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(wa||(wa={}));function Nn(e,t){return te(new Error,{type:e,[su]:!0},t)}function gt(e,t){return e instanceof Error&&su in e&&(t==null||!!(e.type&t))}const Ea="[^/]+?",bg={sensitive:!1,strict:!1,start:!0,end:!0},wg=/[.+*?^${}()[\]/\\]/g;function Eg(e,t){const n=te({},bg,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const d=l[f];let g=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(wg,"\\$&"),g+=40;else if(d.type===1){const{value:_,repeatable:I,optional:U,regexp:D}=d;i.push({name:_,repeatable:I,optional:U});const N=D||Ea;if(N!==Ea){g+=10;try{new RegExp(`(${N})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${_}" (${N}): `+P.message)}}let M=I?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;f||(M=U&&l.length<2?`(?:/${M})`:"/"+M),U&&(M+="?"),s+=M,g+=20,U&&(g+=-8),I&&(g+=-20),N===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",_=i[d-1];f[_.name]=g&&_.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:I,optional:U}=g,D=_ in l?l[_]:"";if(Je(D)&&!I)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const N=Je(D)?D.join("/"):D;if(!N)if(U)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=N}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Ig(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function iu(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Ig(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ia(r))return 1;if(Ia(s))return-1}return s.length-r.length}function Ia(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Sg={type:0,value:""},Tg=/[a-zA-Z0-9_]/;function Cg(e){if(!e)return[[]];if(e==="/")return[[Sg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:Tg.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Ag(e,t,n){const r=Eg(Cg(e.path),n),s=te(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Rg(e,t){const n=[],r=new Map;t=Aa({strict:!1,end:!0,sensitive:!1},t);function s(f){return r.get(f)}function i(f,d,g){const _=!g,I=Ta(f);I.aliasOf=g&&g.record;const U=Aa(t,f),D=[I];if("alias"in f){const P=typeof f.alias=="string"?[f.alias]:f.alias;for(const F of P)D.push(Ta(te({},I,{components:g?g.record.components:I.components,path:F,aliasOf:g?g.record:I})))}let N,M;for(const P of D){const{path:F}=P;if(d&&F[0]!=="/"){const J=d.record.path,K=J[J.length-1]==="/"?"":"/";P.path=d.record.path+(F&&K+F)}if(N=Ag(P,d,U),g?g.alias.push(N):(M=M||N,M!==N&&M.alias.push(N),_&&f.name&&!Ca(N)&&o(f.name)),ou(N)&&c(N),I.children){const J=I.children;for(let K=0;K<J.length;K++)i(J[K],N,g&&g.children[K])}g=g||N}return M?()=>{o(M)}:Qn}function o(f){if(ru(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const d=Og(f,n);n.splice(d,0,f),f.record.name&&!Ca(f)&&r.set(f.record.name,f)}function l(f,d){let g,_={},I,U;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw Nn(1,{location:f});U=g.record.name,_=te(Sa(d.params,g.keys.filter(M=>!M.optional).concat(g.parent?g.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),f.params&&Sa(f.params,g.keys.map(M=>M.name))),I=g.stringify(_)}else if(f.path!=null)I=f.path,g=n.find(M=>M.re.test(I)),g&&(_=g.parse(I),U=g.record.name);else{if(g=d.name?r.get(d.name):n.find(M=>M.re.test(d.path)),!g)throw Nn(1,{location:f,currentLocation:d});U=g.record.name,_=te({},d.params,f.params),I=g.stringify(_)}const D=[];let N=g;for(;N;)D.unshift(N.record),N=N.parent;return{name:U,path:I,params:_,matched:D,meta:kg(D)}}e.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Sa(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Ta(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Pg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Pg(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ca(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function kg(e){return e.reduce((t,n)=>te(t,n.meta),{})}function Aa(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Og(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;iu(e,t[i])<0?r=i:n=i+1}const s=Ng(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Ng(e){let t=e;for(;t=t.parent;)if(ou(t)&&iu(e,t)===0)return t}function ou({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function xg(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Xl," "),o=i.indexOf("="),a=ur(o<0?i:i.slice(0,o)),c=o<0?null:ur(i.slice(o+1));if(a in t){let l=t[a];Je(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Ra(e){let t="";for(let n in e){const r=e[n];if(n=Qp(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Je(r)?r.map(i=>i&&_i(i)):[r&&_i(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Dg(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Je(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Mg=Symbol(""),Pa=Symbol(""),ys=Symbol(""),Zi=Symbol(""),yi=Symbol("");function $n(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ft(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(Nn(4,{from:n,to:t})):d instanceof Error?c(d):yg(d)?c(Nn(2,{from:t,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>e.call(r&&r.instances[s],t,n,l));let f=Promise.resolve(u);e.length<3&&(f=f.then(l)),f.catch(d=>c(d))})}function Vs(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Jl(c)){const u=(c.__vccOpts||c)[t];u&&i.push(Ft(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=jp(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const g=(f.__vccOpts||f)[t];return g&&Ft(g,n,r,o,a,s)()}))}}return i}function ka(e){const t=Be(ys),n=Be(Zi),r=$e(()=>{const c=Cn(e.to);return t.resolve(c)}),s=$e(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(On.bind(null,u));if(d>-1)return d;const g=Oa(c[l-2]);return l>1&&Oa(u)===g&&f[f.length-1].path!==g?f.findIndex(On.bind(null,c[l-2])):d}),i=$e(()=>s.value>-1&&Hg(n.params,r.value.params)),o=$e(()=>s.value>-1&&s.value===n.matched.length-1&&tu(n.params,r.value.params));function a(c={}){if($g(c)){const l=t[Cn(e.replace)?"replace":"push"](Cn(e.to)).catch(Qn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:$e(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function Lg(e){return e.length===1?e[0]:e}const Fg=qi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ka,setup(e,{slots:t}){const n=mn(ka(e)),{options:r}=Be(ys),s=$e(()=>({[Na(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Na(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&Lg(t.default(n));return e.custom?i:Ji("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ug=Fg;function $g(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Hg(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Je(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Oa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Na=(e,t,n)=>e??t??n,jg=qi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Be(yi),s=$e(()=>e.route||r.value),i=Be(Pa,0),o=$e(()=>{let l=Cn(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=$e(()=>s.value.matched[o.value]);Or(Pa,$e(()=>o.value+1)),Or(Mg,a),Or(yi,s);const c=cs();return Jn(()=>[c.value,a.value,e.name],([l,u,f],[d,g,_])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!On(u,g)||!d)&&(u.enterCallbacks[f]||[]).forEach(I=>I(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=a.value,d=f&&f.components[u];if(!d)return xa(n.default,{Component:d,route:l});const g=f.props[u],_=g?g===!0?l.params:typeof g=="function"?g(l):g:null,U=Ji(d,te({},_,t,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return xa(n.default,{Component:U,route:l})||U}}});function xa(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Bg=jg;function Vg(e){const t=Rg(e.routes,e),n=e.parseQuery||xg,r=e.stringifyQuery||Ra,s=e.history,i=$n(),o=$n(),a=$n(),c=ld(kt);let l=kt;In&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=js.bind(null,y=>""+y),f=js.bind(null,eg),d=js.bind(null,ur);function g(y,x){let R,L;return ru(y)?(R=t.getRecordMatcher(y),L=x):L=y,t.addRoute(L,R)}function _(y){const x=t.getRecordMatcher(y);x&&t.removeRoute(x)}function I(){return t.getRoutes().map(y=>y.record)}function U(y){return!!t.getRecordMatcher(y)}function D(y,x){if(x=te({},x||c.value),typeof y=="string"){const m=Bs(n,y,x.path),v=t.resolve({path:m.path},x),w=s.createHref(m.fullPath);return te(m,v,{params:d(v.params),hash:ur(m.hash),redirectedFrom:void 0,href:w})}let R;if(y.path!=null)R=te({},y,{path:Bs(n,y.path,x.path).path});else{const m=te({},y.params);for(const v in m)m[v]==null&&delete m[v];R=te({},y,{params:f(m)}),x.params=f(x.params)}const L=t.resolve(R,x),ie=y.hash||"";L.params=u(d(L.params));const h=rg(r,te({},y,{hash:Xp(ie),path:L.path})),p=s.createHref(h);return te({fullPath:h,hash:ie,query:r===Ra?Dg(y.query):y.query||{}},L,{redirectedFrom:void 0,href:p})}function N(y){return typeof y=="string"?Bs(n,y,c.value.path):te({},y)}function M(y,x){if(l!==y)return Nn(8,{from:x,to:y})}function P(y){return K(y)}function F(y){return P(te(N(y),{replace:!0}))}function J(y){const x=y.matched[y.matched.length-1];if(x&&x.redirect){const{redirect:R}=x;let L=typeof R=="function"?R(y):R;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=N(L):{path:L},L.params={}),te({query:y.query,hash:y.hash,params:L.path!=null?{}:y.params},L)}}function K(y,x){const R=l=D(y),L=c.value,ie=y.state,h=y.force,p=y.replace===!0,m=J(R);if(m)return K(te(N(m),{state:typeof m=="object"?te({},ie,m.state):ie,force:h,replace:p}),x||R);const v=R;v.redirectedFrom=x;let w;return!h&&sg(r,L,R)&&(w=Nn(16,{to:v,from:L}),Ye(L,L,!0,!1)),(w?Promise.resolve(w):H(v,L)).catch(b=>gt(b)?gt(b,2)?b:Rt(b):ee(b,v,L)).then(b=>{if(b){if(gt(b,2))return K(te({replace:p},N(b.to),{state:typeof b.to=="object"?te({},ie,b.to.state):ie,force:h}),x||v)}else b=O(v,L,!0,p,ie);return Y(v,L,b),b})}function $(y,x){const R=M(y,x);return R?Promise.reject(R):Promise.resolve()}function S(y){const x=yn.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(y):y()}function H(y,x){let R;const[L,ie,h]=Wg(y,x);R=Vs(L.reverse(),"beforeRouteLeave",y,x);for(const m of L)m.leaveGuards.forEach(v=>{R.push(Ft(v,y,x))});const p=$.bind(null,y,x);return R.push(p),Fe(R).then(()=>{R=[];for(const m of i.list())R.push(Ft(m,y,x));return R.push(p),Fe(R)}).then(()=>{R=Vs(ie,"beforeRouteUpdate",y,x);for(const m of ie)m.updateGuards.forEach(v=>{R.push(Ft(v,y,x))});return R.push(p),Fe(R)}).then(()=>{R=[];for(const m of h)if(m.beforeEnter)if(Je(m.beforeEnter))for(const v of m.beforeEnter)R.push(Ft(v,y,x));else R.push(Ft(m.beforeEnter,y,x));return R.push(p),Fe(R)}).then(()=>(y.matched.forEach(m=>m.enterCallbacks={}),R=Vs(h,"beforeRouteEnter",y,x,S),R.push(p),Fe(R))).then(()=>{R=[];for(const m of o.list())R.push(Ft(m,y,x));return R.push(p),Fe(R)}).catch(m=>gt(m,8)?m:Promise.reject(m))}function Y(y,x,R){a.list().forEach(L=>S(()=>L(y,x,R)))}function O(y,x,R,L,ie){const h=M(y,x);if(h)return h;const p=x===kt,m=In?history.state:{};R&&(L||p?s.replace(y.fullPath,te({scroll:p&&m&&m.scroll},ie)):s.push(y.fullPath,ie)),c.value=y,Ye(y,x,R,p),Rt()}let X;function he(){X||(X=s.listen((y,x,R)=>{if(!Ir.listening)return;const L=D(y),ie=J(L);if(ie){K(te(ie,{replace:!0,force:!0}),L).catch(Qn);return}l=L;const h=c.value;In&&dg(ya(h.fullPath,R.delta),vs()),H(L,h).catch(p=>gt(p,12)?p:gt(p,2)?(K(te(N(p.to),{force:!0}),L).then(m=>{gt(m,20)&&!R.delta&&R.type===fr.pop&&s.go(-1,!1)}).catch(Qn),Promise.reject()):(R.delta&&s.go(-R.delta,!1),ee(p,L,h))).then(p=>{p=p||O(L,h,!1),p&&(R.delta&&!gt(p,8)?s.go(-R.delta,!1):R.type===fr.pop&&gt(p,20)&&s.go(-1,!1)),Y(L,h,p)}).catch(Qn)}))}let ye=$n(),se=$n(),G;function ee(y,x,R){Rt(y);const L=se.list();return L.length?L.forEach(ie=>ie(y,x,R)):console.error(y),Promise.reject(y)}function dt(){return G&&c.value!==kt?Promise.resolve():new Promise((y,x)=>{ye.add([y,x])})}function Rt(y){return G||(G=!y,he(),ye.list().forEach(([x,R])=>y?R(y):x()),ye.reset()),y}function Ye(y,x,R,L){const{scrollBehavior:ie}=e;if(!In||!ie)return Promise.resolve();const h=!R&&hg(ya(y.fullPath,0))||(L||!R)&&history.state&&history.state.scroll||null;return Vi().then(()=>ie(y,x,h)).then(p=>p&&fg(p)).catch(p=>ee(p,y,x))}const Ce=y=>s.go(y);let vn;const yn=new Set,Ir={currentRoute:c,listening:!0,addRoute:g,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:U,getRoutes:I,resolve:D,options:e,push:P,replace:F,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:se.add,isReady:dt,install(y){const x=this;y.component("RouterLink",Ug),y.component("RouterView",Bg),y.config.globalProperties.$router=x,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Cn(c)}),In&&!vn&&c.value===kt&&(vn=!0,P(s.location).catch(ie=>{}));const R={};for(const ie in kt)Object.defineProperty(R,ie,{get:()=>c.value[ie],enumerable:!0});y.provide(ys,x),y.provide(Zi,qc(R)),y.provide(yi,c);const L=y.unmount;yn.add(y),y.unmount=function(){yn.delete(y),yn.size<1&&(l=kt,X&&X(),X=null,c.value=kt,vn=!1,G=!1),L()}}};function Fe(y){return y.reduce((x,R)=>x.then(()=>S(R)),Promise.resolve())}return Ir}function Wg(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>On(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>On(l,c))||s.push(c))}return[n,r,s]}function jw(){return Be(ys)}function Bw(e){return Be(Zi)}const qg=[{path:"/",component:()=>Ne(()=>import("./MainLayout-YoP-Ih4b.js"),__vite__mapDeps([0,1,2,3,4,5,6])),children:[{path:"",component:()=>Ne(()=>import("./LandingPage-B8DV1atr.js"),__vite__mapDeps([7,2,1,8,5,9,10,11,12,13]))},{path:"login",component:()=>Ne(()=>import("./LoginPage-lmvDwfKG.js"),__vite__mapDeps([14,15,1,2,10,4,16,17,9,11,6,12,18]))},{path:"signup",component:()=>Ne(()=>import("./SignupPage-fazLS3o3.js"),__vite__mapDeps([19,15,1,2,10,4,16,17,9,11,6,12,20]))},{path:"verify-email",component:()=>Ne(()=>import("./VerifyEmail-JKuWBgku.js"),__vite__mapDeps([21,16,10,1,2,11,6]))},{path:"action",component:()=>Ne(()=>import("./AuthAction-dqDSniiy.js"),__vite__mapDeps([22,2,1,11]))},{path:"dashboard",component:()=>Ne(()=>import("./DashboardPage-167QfCsZ.js"),__vite__mapDeps([23,3,2,1,4,5,15,10,9,8,11,6,12,24])),meta:{requiresAuth:!0}},{path:"terms",component:()=>Ne(()=>import("./TermsOfService-CGi__jaA.js"),__vite__mapDeps([25,11,1,12,26]))},{path:"/privacy",component:()=>Ne(()=>import("./PrivacyPolicy-U0KeeZ4i.js"),__vite__mapDeps([27,11,1,12,28]))},{path:"/about",component:()=>Ne(()=>import("./AboutPage-CjLsCqB6.js"),__vite__mapDeps([29,11,1,12,30]))}]},{path:"/:catchAll(.*)*",component:()=>Ne(()=>import("./ErrorNotFound-BolHsGOf.js"),__vite__mapDeps([31,2,1]))}];const zg=()=>{};var Da={};/**
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
 */const au=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Kg=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},cu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),r.push(n[u],n[f],n[d],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(au(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Kg(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new Gg;const d=i<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const _=l<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Gg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jg=function(e){const t=au(e);return cu.encodeByteArray(t,!0)},lu=function(e){return Jg(e).replace(/\./g,"")},uu=function(e){try{return cu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Yg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xg=()=>Yg().__FIREBASE_DEFAULTS__,Qg=()=>{if(typeof process>"u"||typeof Da>"u")return;const e=Da.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Zg=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&uu(e[1]);return t&&JSON.parse(t)},eo=()=>{try{return zg()||Xg()||Qg()||Zg()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},em=e=>{var t,n;return(n=(t=eo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},fu=()=>{var e;return(e=eo())===null||e===void 0?void 0:e.config},du=e=>{var t;return(t=eo())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class tm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function rm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hu(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function sm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function im(){const e=Te();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function pu(){try{return typeof indexedDB=="object"}catch{return!1}}function gu(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function om(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const am="FirebaseError";class lt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=am,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_n.prototype.create)}}class _n{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?cm(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new lt(s,a,r)}}function cm(e,t){return e.replace(lm,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const lm=/\{\$([^}]+)}/g;function um(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function un(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Ma(i)&&Ma(o)){if(!un(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ma(e){return e!==null&&typeof e=="object"}/**
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
 */function _r(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function jn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function Bn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function fm(e,t){const n=new dm(e,t);return n.subscribe.bind(n)}class dm{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hm(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Ws),s.error===void 0&&(s.error=Ws),s.complete===void 0&&(s.complete=Ws);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hm(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ws(){}/**
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
 */const pm=1e3,gm=2,mm=4*60*60*1e3,_m=.5;function La(e,t=pm,n=gm){const r=t*Math.pow(n,e),s=Math.round(_m*r*(Math.random()-.5)*2);return Math.min(mm,r+s)}/**
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
 */function Le(e){return e&&e._delegate?e._delegate:e}class ct{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const tn="[DEFAULT]";/**
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
 */class vm{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new tm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t?.identifier),s=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(bm(t))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=tn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=tn){return this.instances.has(t)}getOptions(t=tn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ym(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=tn){return this.component?this.component.multipleInstances?t:tn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ym(e){return e===tn?void 0:e}function bm(e){return e.instantiationMode==="EAGER"}/**
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
 */class wm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new vm(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(oe||(oe={}));const Em={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Im=oe.INFO,Sm={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},Tm=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Sm[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class to{constructor(t){this.name=t,this._logLevel=Im,this._logHandler=Tm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in oe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Em[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...t),this._logHandler(this,oe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...t),this._logHandler(this,oe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...t),this._logHandler(this,oe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...t),this._logHandler(this,oe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...t),this._logHandler(this,oe.ERROR,...t)}}const Cm=(e,t)=>t.some(n=>e instanceof n);let Fa,Ua;function Am(){return Fa||(Fa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rm(){return Ua||(Ua=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mu=new WeakMap,bi=new WeakMap,_u=new WeakMap,qs=new WeakMap,no=new WeakMap;function Pm(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Vt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&mu.set(n,e)}).catch(()=>{}),no.set(t,e),t}function km(e){if(bi.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});bi.set(e,t)}let wi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return bi.get(e);if(t==="objectStoreNames")return e.objectStoreNames||_u.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Om(e){wi=e(wi)}function Nm(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(zs(this),t,...n);return _u.set(r,t.sort?t.sort():[t]),Vt(r)}:Rm().includes(e)?function(...t){return e.apply(zs(this),t),Vt(mu.get(this))}:function(...t){return Vt(e.apply(zs(this),t))}}function xm(e){return typeof e=="function"?Nm(e):(e instanceof IDBTransaction&&km(e),Cm(e,Am())?new Proxy(e,wi):e)}function Vt(e){if(e instanceof IDBRequest)return Pm(e);if(qs.has(e))return qs.get(e);const t=xm(e);return t!==e&&(qs.set(e,t),no.set(t,e)),t}const zs=e=>no.get(e);function vu(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Vt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Vt(o.result),c.oldVersion,c.newVersion,Vt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Dm=["get","getKey","getAll","getAllKeys","count"],Mm=["put","add","delete","clear"],Ks=new Map;function $a(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ks.get(t))return Ks.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Mm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Dm.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ks.set(t,i),i}Om(e=>({...e,get:(t,n,r)=>$a(t,n)||e.get(t,n,r),has:(t,n)=>!!$a(t,n)||e.has(t,n)}));/**
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
 */class Lm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Fm(e){const t=e.getComponent();return t?.type==="VERSION"}const Ei="@firebase/app",Ha="0.11.4";/**
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
 */const St=new to("@firebase/app"),Um="@firebase/app-compat",$m="@firebase/analytics-compat",Hm="@firebase/analytics",jm="@firebase/app-check-compat",Bm="@firebase/app-check",Vm="@firebase/auth",Wm="@firebase/auth-compat",qm="@firebase/database",zm="@firebase/data-connect",Km="@firebase/database-compat",Gm="@firebase/functions",Jm="@firebase/functions-compat",Ym="@firebase/installations",Xm="@firebase/installations-compat",Qm="@firebase/messaging",Zm="@firebase/messaging-compat",e_="@firebase/performance",t_="@firebase/performance-compat",n_="@firebase/remote-config",r_="@firebase/remote-config-compat",s_="@firebase/storage",i_="@firebase/storage-compat",o_="@firebase/firestore",a_="@firebase/vertexai",c_="@firebase/firestore-compat",l_="firebase",u_="11.6.0";/**
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
 */const Ii="[DEFAULT]",f_={[Ei]:"fire-core",[Um]:"fire-core-compat",[Hm]:"fire-analytics",[$m]:"fire-analytics-compat",[Bm]:"fire-app-check",[jm]:"fire-app-check-compat",[Vm]:"fire-auth",[Wm]:"fire-auth-compat",[qm]:"fire-rtdb",[zm]:"fire-data-connect",[Km]:"fire-rtdb-compat",[Gm]:"fire-fn",[Jm]:"fire-fn-compat",[Ym]:"fire-iid",[Xm]:"fire-iid-compat",[Qm]:"fire-fcm",[Zm]:"fire-fcm-compat",[e_]:"fire-perf",[t_]:"fire-perf-compat",[n_]:"fire-rc",[r_]:"fire-rc-compat",[s_]:"fire-gcs",[i_]:"fire-gcs-compat",[o_]:"fire-fst",[c_]:"fire-fst-compat",[a_]:"fire-vertex","fire-js":"fire-js",[l_]:"fire-js-all"};/**
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
 */const Kr=new Map,d_=new Map,Si=new Map;function ja(e,t){try{e.container.addComponent(t)}catch(n){St.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Tt(e){const t=e.name;if(Si.has(t))return St.debug(`There were multiple attempts to register component ${t}.`),!1;Si.set(t,e);for(const n of Kr.values())ja(n,e);for(const n of d_.values())ja(n,e);return!0}function Dn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function He(e){return e==null?!1:e.settings!==void 0}/**
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
 */const h_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wt=new _n("app","Firebase",h_);/**
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
 */class p_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
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
 */const vr=u_;function yu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ii,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Wt.create("bad-app-name",{appName:String(s)});if(n||(n=fu()),!n)throw Wt.create("no-options");const i=Kr.get(s);if(i){if(un(n,i.options)&&un(r,i.config))return i;throw Wt.create("duplicate-app",{appName:s})}const o=new wm(s);for(const c of Si.values())o.addComponent(c);const a=new p_(n,r,o);return Kr.set(s,a),a}function bu(e=Ii){const t=Kr.get(e);if(!t&&e===Ii&&fu())return yu();if(!t)throw Wt.create("no-app",{appName:e});return t}function ot(e,t,n){var r;let s=(r=f_[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),St.warn(a.join(" "));return}Tt(new ct(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const g_="firebase-heartbeat-database",m_=1,dr="firebase-heartbeat-store";let Gs=null;function wu(){return Gs||(Gs=vu(g_,m_,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(dr)}catch(n){console.warn(n)}}}}).catch(e=>{throw Wt.create("idb-open",{originalErrorMessage:e.message})})),Gs}async function __(e){try{const n=(await wu()).transaction(dr),r=await n.objectStore(dr).get(Eu(e));return await n.done,r}catch(t){if(t instanceof lt)St.warn(t.message);else{const n=Wt.create("idb-get",{originalErrorMessage:t?.message});St.warn(n.message)}}}async function Ba(e,t){try{const r=(await wu()).transaction(dr,"readwrite");await r.objectStore(dr).put(t,Eu(e)),await r.done}catch(n){if(n instanceof lt)St.warn(n.message);else{const r=Wt.create("idb-set",{originalErrorMessage:n?.message});St.warn(r.message)}}}function Eu(e){return`${e.name}!${e.options.appId}`}/**
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
 */const v_=1024,y_=30;class b_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new E_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Va();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>y_){const o=I_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){St.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Va(),{heartbeatsToSend:r,unsentEntries:s}=w_(this._heartbeatsCache.heartbeats),i=lu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return St.warn(n),""}}}function Va(){return new Date().toISOString().substring(0,10)}function w_(e,t=v_){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Wa(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Wa(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class E_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pu()?gu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await __(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ba(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ba(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Wa(e){return lu(JSON.stringify({version:2,heartbeats:e})).length}function I_(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function S_(e){Tt(new ct("platform-logger",t=>new Lm(t),"PRIVATE")),Tt(new ct("heartbeat",t=>new b_(t),"PRIVATE")),ot(Ei,Ha,e),ot(Ei,Ha,"esm2017"),ot("fire-js","")}S_("");var T_="firebase",C_="11.6.0";/**
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
 */ot(T_,C_,"app");function ro(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function Iu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const A_=Iu,Su=new _n("auth","Firebase",Iu());/**
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
 */const Gr=new to("@firebase/auth");function R_(e,...t){Gr.logLevel<=oe.WARN&&Gr.warn(`Auth (${vr}): ${e}`,...t)}function Dr(e,...t){Gr.logLevel<=oe.ERROR&&Gr.error(`Auth (${vr}): ${e}`,...t)}/**
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
 */function We(e,...t){throw io(e,...t)}function Ke(e,...t){return io(e,...t)}function so(e,t,n){const r=Object.assign(Object.assign({},A_()),{[t]:n});return new _n("auth","Firebase",r).create(t,{appName:e.name})}function It(e){return so(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function P_(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&We(e,"argument-error"),so(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function io(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Su.create(e,...t)}function V(e,t,...n){if(!e)throw io(t,...n)}function wt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Dr(t),new Error(t)}function Ct(e,t){e||wt(t)}/**
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
 */function Ti(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function k_(){return qa()==="http:"||qa()==="https:"}function qa(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function O_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(k_()||hu()||"connection"in navigator)?navigator.onLine:!0}function N_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class yr{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ct(n>t,"Short delay should be less than long delay!"),this.isMobile=nm()||sm()}get(){return O_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function oo(e,t){Ct(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Tu{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const x_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const D_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],M_=new yr(3e4,6e4);function ut(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ft(e,t,n,r,s={}){return Cu(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=_r(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:c},i);return rm()||(l.referrerPolicy="no-referrer"),Tu.fetch()(await Au(e,e.config.apiHost,n,a),l)})}async function Cu(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},x_),t);try{const s=new F_(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Pr(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pr(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Pr(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw Pr(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw so(e,u,l);We(e,u)}}catch(s){if(s instanceof lt)throw s;We(e,"network-request-failed",{message:String(s)})}}async function br(e,t,n,r,s={}){const i=await ft(e,t,n,r,s);return"mfaPendingCredential"in i&&We(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function Au(e,t,n,r){const s=`${t}${n}?${r}`,i=e,o=i.config.emulator?oo(e.config,s):`${e.config.apiScheme}://${s}`;return D_.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function L_(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),M_.get())})}}function Pr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ke(e,t,r);return s.customData._tokenResponse=n,s}function za(e){return e!==void 0&&e.enterprise!==void 0}class U_{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return L_(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function $_(e,t){return ft(e,"GET","/v2/recaptchaConfig",ut(e,t))}/**
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
 */async function H_(e,t){return ft(e,"POST","/v1/accounts:delete",t)}async function Jr(e,t){return ft(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function er(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function j_(e,t=!1){const n=Le(e),r=await n.getIdToken(t),s=ao(r);V(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:er(Js(s.auth_time)),issuedAtTime:er(Js(s.iat)),expirationTime:er(Js(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Js(e){return Number(e)*1e3}function ao(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Dr("JWT malformed, contained fewer than 3 sections"),null;try{const s=uu(n);return s?JSON.parse(s):(Dr("Failed to decode base64 JWT payload"),null)}catch(s){return Dr("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Ka(e){const t=ao(e);return V(t,"internal-error"),V(typeof t.exp<"u","internal-error"),V(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function hr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof lt&&B_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function B_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class V_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ci{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=er(this.lastLoginAt),this.creationTime=er(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yr(e){var t;const n=e.auth,r=await e.getIdToken(),s=await hr(e,Jr(n,{idToken:r}));V(s?.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Ru(i.providerUserInfo):[],a=q_(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!a?.length,u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ci(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function W_(e){const t=Le(e);await Yr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function q_(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Ru(e){return e.map(t=>{var{providerId:n}=t,r=ro(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function z_(e,t){const n=await Cu(e,{},async()=>{const r=_r({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=await Au(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Tu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function K_(e,t){return ft(e,"POST","/v2/accounts:revokeToken",ut(e,t))}/**
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
 */class Rn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){V(t.idToken,"internal-error"),V(typeof t.idToken<"u","internal-error"),V(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ka(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){V(t.length!==0,"internal-error");const n=Ka(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await z_(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Rn;return r&&(V(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(V(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(V(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Rn,this.toJSON())}_performRefresh(){return wt("not implemented")}}/**
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
 */function Ot(e,t){V(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class qe{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=ro(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new V_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ci(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await hr(this,this.stsTokenManager.getToken(this.auth,t));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return j_(this,t)}reload(){return W_(this)}_assign(t){this!==t&&(V(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new qe(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Yr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(He(this.auth.app))return Promise.reject(It(this.auth));const t=await this.getIdToken();return await hr(this,H_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,U=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,D=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:P,isAnonymous:F,providerData:J,stsTokenManager:K}=n;V(M&&K,t,"internal-error");const $=Rn.fromJSON(this.name,K);V(typeof M=="string",t,"internal-error"),Ot(f,t.name),Ot(d,t.name),V(typeof P=="boolean",t,"internal-error"),V(typeof F=="boolean",t,"internal-error"),Ot(g,t.name),Ot(_,t.name),Ot(I,t.name),Ot(U,t.name),Ot(D,t.name),Ot(N,t.name);const S=new qe({uid:M,auth:t,email:d,emailVerified:P,displayName:f,isAnonymous:F,photoURL:_,phoneNumber:g,tenantId:I,stsTokenManager:$,createdAt:D,lastLoginAt:N});return J&&Array.isArray(J)&&(S.providerData=J.map(H=>Object.assign({},H))),U&&(S._redirectEventId=U),S}static async _fromIdTokenResponse(t,n,r=!1){const s=new Rn;s.updateFromServerResponse(n);const i=new qe({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Yr(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];V(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ru(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new Rn;a.updateFromIdToken(r);const c=new qe({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ci(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,l),c}}/**
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
 */const Ga=new Map;function Et(e){Ct(e instanceof Function,"Expected a class definition");let t=Ga.get(e);return t?(Ct(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ga.set(e,t),t)}/**
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
 */class Pu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Pu.type="NONE";const Ja=Pu;/**
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
 */function Mr(e,t,n){return`firebase:${e}:${t}:${n}`}class Pn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Mr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Mr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Jr(this.auth,{idToken:t}).catch(()=>{});return n?qe._fromGetAccountInfoResponse(this.auth,n,t):null}return qe._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Pn(Et(Ja),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Et(Ja);const o=Mr(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const d=await Jr(t,{idToken:u}).catch(()=>{});if(!d)break;f=await qe._fromGetAccountInfoResponse(t,d,u)}else f=qe._fromJSON(t,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Pn(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Pn(i,t,r))}}/**
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
 */function Ya(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(xu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ku(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Mu(t))return"Blackberry";if(Lu(t))return"Webos";if(Ou(t))return"Safari";if((t.includes("chrome/")||Nu(t))&&!t.includes("edge/"))return"Chrome";if(Du(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if(r?.length===2)return r[1]}return"Other"}function ku(e=Te()){return/firefox\//i.test(e)}function Ou(e=Te()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Nu(e=Te()){return/crios\//i.test(e)}function xu(e=Te()){return/iemobile/i.test(e)}function Du(e=Te()){return/android/i.test(e)}function Mu(e=Te()){return/blackberry/i.test(e)}function Lu(e=Te()){return/webos/i.test(e)}function co(e=Te()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function G_(e=Te()){var t;return co(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function J_(){return im()&&document.documentMode===10}function Fu(e=Te()){return co(e)||Du(e)||Lu(e)||Mu(e)||/windows phone/i.test(e)||xu(e)}/**
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
 */function Uu(e,t=[]){let n;switch(e){case"Browser":n=Ya(Te());break;case"Worker":n=`${Ya(Te())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${vr}/${r}`}/**
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
 */class Y_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function X_(e,t={}){return ft(e,"GET","/v2/passwordPolicy",ut(e,t))}/**
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
 */const Q_=6;class Z_{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Q_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class ev{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xa(this),this.idTokenSubscription=new Xa(this),this.beforeStateQueue=new Y_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Su,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Et(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Pn.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Jr(this,{idToken:t}),r=await qe._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(He(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s?._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&c?.user&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Yr(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=N_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(He(this.app))return Promise.reject(It(this));const n=t?Le(t):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&V(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return He(this.app)?Promise.reject(It(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return He(this.app)?Promise.reject(It(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await X_(this),n=new Z_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new _n("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await K_(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Et(t)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Pn.create(this,[Et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Uu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;if(He(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n?.error&&R_(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Jt(e){return Le(e)}class Xa{constructor(t){this.auth=t,this.observer=null,this.addObserver=fm(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let bs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tv(e){bs=e}function $u(e){return bs.loadJS(e)}function nv(){return bs.recaptchaEnterpriseScript}function rv(){return bs.gapiScript}function sv(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class iv{constructor(){this.enterprise=new ov}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class ov{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const av="recaptcha-enterprise",Hu="NO_RECAPTCHA";class cv{constructor(t){this.type=av,this.auth=Jt(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{$_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new U_(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;za(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(Hu)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new iv().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&za(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=nv();c.length!==0&&(c+=a),$u(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Qa(e,t,n,r=!1,s=!1){const i=new cv(e);let o;if(s)o=Hu;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ai(e,t,n,r,s){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Qa(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Qa(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(o)})}/**
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
 */function lv(e,t){const n=Dn(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(un(i,t??{}))return s;We(s,"already-initialized")}return n.initialize({options:t})}function uv(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Et);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function fv(e,t,n){const r=Jt(e);V(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=ju(t),{host:o,port:a}=dv(t),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){V(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),V(un(l,r.config.emulator)&&un(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,hv()}function ju(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function dv(e){const t=ju(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Za(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Za(o)}}}function Za(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function hv(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class lo{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return wt("not implemented")}_getIdTokenResponse(t){return wt("not implemented")}_linkToIdToken(t,n){return wt("not implemented")}_getReauthenticationResolver(t){return wt("not implemented")}}async function pv(e,t){return ft(e,"POST","/v1/accounts:signUp",t)}async function gv(e,t){return ft(e,"POST","/v1/accounts:update",ut(e,t))}/**
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
 */async function mv(e,t){return br(e,"POST","/v1/accounts:signInWithPassword",ut(e,t))}async function _v(e,t){return ft(e,"POST","/v1/accounts:sendOobCode",ut(e,t))}async function vv(e,t){return _v(e,t)}/**
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
 */async function yv(e,t){return br(e,"POST","/v1/accounts:signInWithEmailLink",ut(e,t))}async function bv(e,t){return br(e,"POST","/v1/accounts:signInWithEmailLink",ut(e,t))}/**
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
 */class pr extends lo{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new pr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new pr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ai(t,n,"signInWithPassword",mv);case"emailLink":return yv(t,{email:this._email,oobCode:this._password});default:We(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ai(t,r,"signUpPassword",pv);case"emailLink":return bv(t,{idToken:n,email:this._email,oobCode:this._password});default:We(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function kn(e,t){return br(e,"POST","/v1/accounts:signInWithIdp",ut(e,t))}/**
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
 */const wv="http://localhost";class fn extends lo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new fn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):We("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=ro(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new fn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return kn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,kn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,kn(t,n)}buildRequest(){const t={requestUri:wv,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=_r(n)}return t}}/**
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
 */function Ev(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Iv(e){const t=jn(Bn(e)).link,n=t?jn(Bn(t)).deep_link_id:null,r=jn(Bn(e)).deep_link_id;return(r?jn(Bn(r)).link:null)||r||n||t||e}class uo{constructor(t){var n,r,s,i,o,a;const c=jn(Bn(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Ev((s=c.mode)!==null&&s!==void 0?s:null);V(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Iv(t);try{return new uo(n)}catch{return null}}}/**
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
 */class Mn{constructor(){this.providerId=Mn.PROVIDER_ID}static credential(t,n){return pr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=uo.parseLink(n);return V(r,"argument-error"),pr._fromEmailAndCode(t,r.code,r.tenantId)}}Mn.PROVIDER_ID="password";Mn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class fo{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wr extends fo{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class yt extends wr{constructor(){super("facebook.com")}static credential(t){return fn._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return yt.credentialFromTaggedObject(t)}static credentialFromError(t){return yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return yt.credential(t.oauthAccessToken)}catch{return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
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
 */class bt extends wr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return fn._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return bt.credentialFromTaggedObject(t)}static credentialFromError(t){return bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com";bt.PROVIDER_ID="google.com";/**
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
 */class $t extends wr{constructor(){super("github.com")}static credential(t){return fn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $t.credentialFromTaggedObject(t)}static credentialFromError(t){return $t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return $t.credential(t.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
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
 */class Ht extends wr{constructor(){super("twitter.com")}static credential(t,n){return fn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ht.credential(n,r)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
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
 */async function Sv(e,t){return br(e,"POST","/v1/accounts:signUp",ut(e,t))}/**
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
 */class dn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await qe._fromIdTokenResponse(t,r,s),o=ec(r);return new dn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=ec(r);return new dn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function ec(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Xr extends lt{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Xr.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new Xr(t,n,r,s)}}function Bu(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xr._fromErrorAndOperation(e,i,t,r):i})}async function Tv(e,t,n=!1){const r=await hr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return dn._forOperation(e,"link",r)}/**
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
 */async function Cv(e,t,n=!1){const{auth:r}=e;if(He(r.app))return Promise.reject(It(r));const s="reauthenticate";try{const i=await hr(e,Bu(r,s,t,e),n);V(i.idToken,r,"internal-error");const o=ao(i.idToken);V(o,r,"internal-error");const{sub:a}=o;return V(e.uid===a,r,"user-mismatch"),dn._forOperation(e,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&We(r,"user-mismatch"),i}}/**
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
 */async function Vu(e,t,n=!1){if(He(e.app))return Promise.reject(It(e));const r="signIn",s=await Bu(e,r,t),i=await dn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function Av(e,t){return Vu(Jt(e),t)}/**
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
 */async function Wu(e){const t=Jt(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Rv(e,t){await gv(Le(e),{oobCode:t})}async function Pv(e,t,n){if(He(e.app))return Promise.reject(It(e));const r=Jt(e),o=await Ai(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Sv).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Wu(e),c}),a=await dn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function kv(e,t,n){return He(e.app)?Promise.reject(It(e)):Av(Le(e),Mn.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Wu(e),r})}async function tc(e,t){const n=Le(e),s={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()},{email:i}=await vv(n.auth,s);i!==e.email&&await e.reload()}function Ov(e,t,n,r){return Le(e).onIdTokenChanged(t,n,r)}function Nv(e,t,n){return Le(e).beforeAuthStateChanged(t,n)}function xv(e,t,n,r){return Le(e).onAuthStateChanged(t,n,r)}function Dv(e){return Le(e).signOut()}const Qr="__sak";/**
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
 */class qu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qr,"1"),this.storage.removeItem(Qr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Mv=1e3,Lv=10;class zu extends qu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Fu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);J_()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,Lv):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Mv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}zu.type="LOCAL";const Fv=zu;/**
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
 */class Ku extends qu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Ku.type="SESSION";const Gu=Ku;/**
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
 */function Uv(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ws{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new ws(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Uv(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ws.receivers=[];/**
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
 */function ho(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class $v{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ho("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function at(){return window}function Hv(e){at().location.href=e}/**
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
 */function Ju(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function jv(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bv(){var e;return((e=navigator?.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Vv(){return Ju()?self:null}/**
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
 */const Yu="firebaseLocalStorageDb",Wv=1,Zr="firebaseLocalStorage",Xu="fbase_key";class Er{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Es(e,t){return e.transaction([Zr],t?"readwrite":"readonly").objectStore(Zr)}function qv(){const e=indexedDB.deleteDatabase(Yu);return new Er(e).toPromise()}function Ri(){const e=indexedDB.open(Yu,Wv);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Zr,{keyPath:Xu})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Zr)?t(r):(r.close(),await qv(),t(await Ri()))})})}async function nc(e,t,n){const r=Es(e,!0).put({[Xu]:t,value:n});return new Er(r).toPromise()}async function zv(e,t){const n=Es(e,!1).get(t),r=await new Er(n).toPromise();return r===void 0?null:r.value}function rc(e,t){const n=Es(e,!0).delete(t);return new Er(n).toPromise()}const Kv=800,Gv=3;class Qu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ri(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Gv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ju()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ws._getInstance(Vv()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await jv(),!this.activeServiceWorker)return;this.sender=new $v(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Bv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ri();return await nc(t,Qr,"1"),await rc(t,Qr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>nc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>zv(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>rc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=Es(s,!1).getAll();return new Er(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qu.type="LOCAL";const Jv=Qu;new yr(3e4,6e4);/**
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
 */function Zu(e,t){return t?Et(t):(V(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class po extends lo{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return kn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return kn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return kn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Yv(e){return Vu(e.auth,new po(e),e.bypassAuthState)}function Xv(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),Cv(n,new po(e),e.bypassAuthState)}async function Qv(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),Tv(n,new po(e),e.bypassAuthState)}/**
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
 */class ef{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Yv;case"linkViaPopup":case"linkViaRedirect":return Qv;case"reauthViaPopup":case"reauthViaRedirect":return Xv;default:We(this.auth,"internal-error")}}resolve(t){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Zv=new yr(2e3,1e4);async function sc(e,t,n){if(He(e.app))return Promise.reject(Ke(e,"operation-not-supported-in-this-environment"));const r=Jt(e);P_(e,t,fo);const s=Zu(r,n);return new rn(r,"signInViaPopup",t,s).executeNotNull()}class rn extends ef{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rn.currentPopupAction&&rn.currentPopupAction.cancel(),rn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return V(t,this.auth,"internal-error"),t}async onExecution(){Ct(this.filter.length===1,"Popup operations only handle one event");const t=ho();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Zv.get())};t()}}rn.currentPopupAction=null;/**
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
 */const ey="pendingRedirect",Lr=new Map;class ty extends ef{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Lr.get(this.auth._key());if(!t){try{const r=await ny(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Lr.set(this.auth._key(),t)}return this.bypassAuthState||Lr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ny(e,t){const n=iy(t),r=sy(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ry(e,t){Lr.set(e._key(),t)}function sy(e){return Et(e._redirectPersistence)}function iy(e){return Mr(ey,e.config.apiKey,e.name)}async function oy(e,t,n=!1){if(He(e.app))return Promise.reject(It(e));const r=Jt(e),s=Zu(r,t),o=await new ty(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const ay=10*60*1e3;class cy{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!ly(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!tf(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ke(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=ay&&this.cachedEventUids.clear(),this.cachedEventUids.has(ic(t))}saveEventToCache(t){this.cachedEventUids.add(ic(t)),this.lastProcessedEventTime=Date.now()}}function ic(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function tf({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function ly(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tf(e);default:return!1}}/**
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
 */async function uy(e,t={}){return ft(e,"GET","/v1/projects",t)}/**
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
 */const fy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dy=/^https?/;async function hy(e){if(e.config.emulator)return;const{authorizedDomains:t}=await uy(e);for(const n of t)try{if(py(n))return}catch{}We(e,"unauthorized-domain")}function py(e){const t=Ti(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dy.test(n))return!1;if(fy.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const gy=new yr(3e4,6e4);function oc(){const e=at().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function my(e){return new Promise((t,n)=>{var r,s,i;function o(){oc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{oc(),n(Ke(e,"network-request-failed"))},timeout:gy.get()})}if(!((s=(r=at().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=at().gapi)===null||i===void 0)&&i.load)o();else{const a=sv("iframefcb");return at()[a]=()=>{gapi.load?o():n(Ke(e,"network-request-failed"))},$u(`${rv()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Fr=null,t})}let Fr=null;function _y(e){return Fr=Fr||my(e),Fr}/**
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
 */const vy=new yr(5e3,15e3),yy="__/auth/iframe",by="emulator/auth/iframe",wy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ey=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Iy(e){const t=e.config;V(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?oo(t,by):`https://${e.config.authDomain}/${yy}`,r={apiKey:t.apiKey,appName:e.name,v:vr},s=Ey.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${_r(r).slice(1)}`}async function Sy(e){const t=await _y(e),n=at().gapi;return V(n,e,"internal-error"),t.open({where:document.body,url:Iy(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wy,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ke(e,"network-request-failed"),a=at().setTimeout(()=>{i(o)},vy.get());function c(){at().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Ty={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cy=500,Ay=600,Ry="_blank",Py="http://localhost";class ac{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ky(e,t,n,r=Cy,s=Ay){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ty),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Te().toLowerCase();n&&(a=Nu(l)?Ry:n),ku(l)&&(t=t||Py,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(G_(l)&&a!=="_self")return Oy(t||"",a),new ac(null);const f=window.open(t||"",a,u);V(f,e,"popup-blocked");try{f.focus()}catch{}return new ac(f)}function Oy(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ny="__/auth/handler",xy="emulator/auth/handler",Dy=encodeURIComponent("fac");async function cc(e,t,n,r,s,i){V(e.config.authDomain,e,"auth-domain-config-required"),V(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:vr,eventId:s};if(t instanceof fo){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",um(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(t instanceof wr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${Dy}=${encodeURIComponent(c)}`:"";return`${My(e)}?${_r(a).slice(1)}${l}`}function My({config:e}){return e.emulator?oo(e,xy):`https://${e.authDomain}/${Ny}`}/**
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
 */const Ys="webStorageSupport";class Ly{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gu,this._completeRedirectFn=oy,this._overrideRedirectResult=ry}async _openPopup(t,n,r,s){var i;Ct((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await cc(t,n,r,Ti(),s);return ky(t,o,ho())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await cc(t,n,r,Ti(),s);return Hv(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ct(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Sy(t),r=new cy(t);return n.register("authEvent",s=>(V(s?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ys,{type:Ys},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[Ys];o!==void 0&&n(!!o),We(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hy(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fu()||Ou()||co()}}const Fy=Ly;var lc="@firebase/auth",uc="1.10.0";/**
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
 */class Uy{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $y(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hy(e){Tt(new ct("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uu(e)},l=new ev(r,s,i,c);return uv(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Tt(new ct("auth-internal",t=>{const n=Jt(t.getProvider("auth").getImmediate());return(r=>new Uy(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ot(lc,uc,$y(e)),ot(lc,uc,"esm2017")}/**
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
 */const jy=5*60,By=du("authIdTokenMaxAge")||jy;let fc=null;const Vy=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>By)return;const s=n?.token;fc!==s&&(fc=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Wy(e=bu()){const t=Dn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=lv(e,{popupRedirectResolver:Fy,persistence:[Jv,Fv,Gu]}),r=du("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Vy(i.toString());Nv(n,o,()=>o(n.currentUser)),Ov(n,a=>o(a))}}const s=em("auth");return s&&fv(n,`http://${s}`),n}function qy(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}tv({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=Ke("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",qy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hy("Browser");const nf="@firebase/installations",go="0.6.13";/**
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
 */const rf=1e4,sf=`w:${go}`,of="FIS_v2",zy="https://firebaseinstallations.googleapis.com/v1",Ky=60*60*1e3,Gy="installations",Jy="Installations";/**
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
 */const Yy={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},hn=new _n(Gy,Jy,Yy);function af(e){return e instanceof lt&&e.code.includes("request-failed")}/**
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
 */function cf({projectId:e}){return`${zy}/projects/${e}/installations`}function lf(e){return{token:e.token,requestStatus:2,expiresIn:Qy(e.expiresIn),creationTime:Date.now()}}async function uf(e,t){const r=(await t.json()).error;return hn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ff({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Xy(e,{refreshToken:t}){const n=ff(e);return n.append("Authorization",Zy(t)),n}async function df(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Qy(e){return Number(e.replace("s","000"))}function Zy(e){return`${of} ${e}`}/**
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
 */async function eb({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=cf(e),s=ff(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:of,appId:e.appId,sdkVersion:sf},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await df(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:lf(l.authToken)}}else throw await uf("Create Installation",c)}/**
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
 */function hf(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function tb(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const nb=/^[cdef][\w-]{21}$/,Pi="";function rb(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=sb(e);return nb.test(n)?n:Pi}catch{return Pi}}function sb(e){return tb(e).substr(0,22)}/**
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
 */function Is(e){return`${e.appName}!${e.appId}`}/**
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
 */const pf=new Map;function gf(e,t){const n=Is(e);mf(n,t),ib(n,t)}function mf(e,t){const n=pf.get(e);if(n)for(const r of n)r(t)}function ib(e,t){const n=ob();n&&n.postMessage({key:e,fid:t}),ab()}let sn=null;function ob(){return!sn&&"BroadcastChannel"in self&&(sn=new BroadcastChannel("[Firebase] FID Change"),sn.onmessage=e=>{mf(e.data.key,e.data.fid)}),sn}function ab(){pf.size===0&&sn&&(sn.close(),sn=null)}/**
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
 */const cb="firebase-installations-database",lb=1,pn="firebase-installations-store";let Xs=null;function mo(){return Xs||(Xs=vu(cb,lb,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(pn)}}})),Xs}async function es(e,t){const n=Is(e),s=(await mo()).transaction(pn,"readwrite"),i=s.objectStore(pn),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&gf(e,t.fid),t}async function _f(e){const t=Is(e),r=(await mo()).transaction(pn,"readwrite");await r.objectStore(pn).delete(t),await r.done}async function Ss(e,t){const n=Is(e),s=(await mo()).transaction(pn,"readwrite"),i=s.objectStore(pn),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&gf(e,a.fid),a}/**
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
 */async function _o(e){let t;const n=await Ss(e.appConfig,r=>{const s=ub(r),i=fb(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Pi?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ub(e){const t=e||{fid:rb(),registrationStatus:0};return vf(t)}function fb(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(hn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=db(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:hb(e)}:{installationEntry:t}}async function db(e,t){try{const n=await eb(e,t);return es(e.appConfig,n)}catch(n){throw af(n)&&n.customData.serverCode===409?await _f(e.appConfig):await es(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function hb(e){let t=await dc(e.appConfig);for(;t.registrationStatus===1;)await hf(100),t=await dc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await _o(e);return r||n}return t}function dc(e){return Ss(e,t=>{if(!t)throw hn.create("installation-not-found");return vf(t)})}function vf(e){return pb(e)?{fid:e.fid,registrationStatus:0}:e}function pb(e){return e.registrationStatus===1&&e.registrationTime+rf<Date.now()}/**
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
 */async function gb({appConfig:e,heartbeatServiceProvider:t},n){const r=mb(e,n),s=Xy(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:sf,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await df(()=>fetch(r,a));if(c.ok){const l=await c.json();return lf(l)}else throw await uf("Generate Auth Token",c)}function mb(e,{fid:t}){return`${cf(e)}/${t}/authTokens:generate`}/**
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
 */async function vo(e,t=!1){let n;const r=await Ss(e.appConfig,i=>{if(!yf(i))throw hn.create("not-registered");const o=i.authToken;if(!t&&yb(o))return i;if(o.requestStatus===1)return n=_b(e,t),i;{if(!navigator.onLine)throw hn.create("app-offline");const a=wb(i);return n=vb(e,a),a}});return n?await n:r.authToken}async function _b(e,t){let n=await hc(e.appConfig);for(;n.authToken.requestStatus===1;)await hf(100),n=await hc(e.appConfig);const r=n.authToken;return r.requestStatus===0?vo(e,t):r}function hc(e){return Ss(e,t=>{if(!yf(t))throw hn.create("not-registered");const n=t.authToken;return Eb(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function vb(e,t){try{const n=await gb(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await es(e.appConfig,r),n}catch(n){if(af(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _f(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await es(e.appConfig,r)}throw n}}function yf(e){return e!==void 0&&e.registrationStatus===2}function yb(e){return e.requestStatus===2&&!bb(e)}function bb(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Ky}function wb(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Eb(e){return e.requestStatus===1&&e.requestTime+rf<Date.now()}/**
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
 */async function Ib(e){const t=e,{installationEntry:n,registrationPromise:r}=await _o(t);return r?r.catch(console.error):vo(t).catch(console.error),n.fid}/**
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
 */async function Sb(e,t=!1){const n=e;return await Tb(n),(await vo(n,t)).token}async function Tb(e){const{registrationPromise:t}=await _o(e);t&&await t}/**
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
 */function Cb(e){if(!e||!e.options)throw Qs("App Configuration");if(!e.name)throw Qs("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Qs(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Qs(e){return hn.create("missing-app-config-values",{valueName:e})}/**
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
 */const bf="installations",Ab="installations-internal",Rb=e=>{const t=e.getProvider("app").getImmediate(),n=Cb(t),r=Dn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Pb=e=>{const t=e.getProvider("app").getImmediate(),n=Dn(t,bf).getImmediate();return{getId:()=>Ib(n),getToken:s=>Sb(n,s)}};function kb(){Tt(new ct(bf,Rb,"PUBLIC")),Tt(new ct(Ab,Pb,"PRIVATE"))}kb();ot(nf,go);ot(nf,go,"esm2017");/**
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
 */const ts="analytics",Ob="firebase_id",Nb="origin",xb=60*1e3,Db="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",yo="https://www.googletagmanager.com/gtag/js";/**
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
 */const Pe=new to("@firebase/analytics");/**
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
 */const Mb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Me=new _n("analytics","Analytics",Mb);/**
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
 */function Lb(e){if(!e.startsWith(yo)){const t=Me.create("invalid-gtag-resource",{gtagURL:e});return Pe.warn(t.message),""}return e}function wf(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Fb(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Ub(e,t){const n=Fb("firebase-js-sdk-policy",{createScriptURL:Lb}),r=document.createElement("script"),s=`${yo}?l=${e}&id=${t}`;r.src=n?n?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function $b(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Hb(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await wf(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){Pe.error(a)}e("config",s,i)}async function jb(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await wf(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){Pe.error(i)}}function Bb(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await jb(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await Hb(e,t,n,r,a,c)}else if(i==="consent"){const[a,c]=o;e("consent",a,c)}else if(i==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){Pe.error(a)}}return s}function Vb(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Bb(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function Wb(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(yo)&&n.src.includes(e))return n;return null}/**
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
 */const qb=30,zb=1e3;class Kb{constructor(t={},n=zb){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ef=new Kb;function Gb(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Jb(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:Gb(r)},i=Db.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw Me.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Yb(e,t=Ef,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw Me.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Me.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Zb;return setTimeout(async()=>{a.abort()},xb),If({appId:r,apiKey:s,measurementId:i},o,a,t)}async function If(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Ef){var i;const{appId:o,measurementId:a}=e;try{await Xb(r,t)}catch(c){if(a)return Pe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Jb(e);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Qb(l)){if(s.deleteThrottleMetadata(o),a)return Pe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l?.customData)===null||i===void 0?void 0:i.httpStatus)===503?La(n,s.intervalMillis,qb):La(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,f),Pe.debug(`Calling attemptFetch again in ${u} millis`),If(e,f,r,s)}}function Xb(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(Me.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Qb(e){if(!(e instanceof lt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Zb{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function ew(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
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
 */async function tw(){if(pu())try{await gu()}catch(e){return Pe.warn(Me.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return Pe.warn(Me.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function nw(e,t,n,r,s,i,o){var a;const c=Yb(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Pe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Pe.error(g)),t.push(c);const l=tw().then(g=>{if(g)return r.getId()}),[u,f]=await Promise.all([c,l]);Wb(i)||Ub(i,u.measurementId),s("js",new Date);const d=(a=o?.config)!==null&&a!==void 0?a:{};return d[Nb]="firebase",d.update=!0,f!=null&&(d[Ob]=f),s("config",u.measurementId,d),u.measurementId}/**
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
 */class rw{constructor(t){this.app=t}_delete(){return delete tr[this.app.options.appId],Promise.resolve()}}let tr={},pc=[];const gc={};let Zs="dataLayer",sw="gtag",mc,Sf,_c=!1;function iw(){const e=[];if(hu()&&e.push("This is a browser extension environment."),om()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Me.create("invalid-analytics-context",{errorInfo:t});Pe.warn(n.message)}}function ow(e,t,n){iw();const r=e.options.appId;if(!r)throw Me.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Pe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Me.create("no-api-key");if(tr[r]!=null)throw Me.create("already-exists",{id:r});if(!_c){$b(Zs);const{wrappedGtag:i,gtagCore:o}=Vb(tr,pc,gc,Zs,sw);Sf=i,mc=o,_c=!0}return tr[r]=nw(e,pc,gc,t,mc,Zs,n),new rw(e)}function aw(e=bu()){e=Le(e);const t=Dn(e,ts);return t.isInitialized()?t.getImmediate():cw(e)}function cw(e,t={}){const n=Dn(e,ts);if(n.isInitialized()){const s=n.getImmediate();if(un(t,n.getOptions()))return s;throw Me.create("already-initialized")}return n.initialize({options:t})}function lw(e,t,n,r){e=Le(e),ew(Sf,tr[e.app.options.appId],t,n,r).catch(s=>Pe.error(s))}const vc="@firebase/analytics",yc="0.10.12";function uw(){Tt(new ct(ts,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return ow(r,s,n)},"PUBLIC")),Tt(new ct("analytics-internal",e,"PRIVATE")),ot(vc,yc),ot(vc,yc,"esm2017");function e(t){try{const n=t.getProvider(ts).getImmediate();return{logEvent:(r,s,i)=>lw(n,r,s,i)}}catch(n){throw Me.create("interop-component-reg-failed",{reason:n})}}}uw();const fw={apiKey:"AIzaSyDk0cEYLi873DuUuXVdz_S2kqXKa6R38pI",authDomain:"mnmoo.com",projectId:"mnmoo-86085",storageBucket:"mnmoo-86085.firebasestorage.app",messagingSenderId:"10678058131",appId:"1:10678058131:web:9138e5f07b57922173a166",measurementId:"G-JKD3VGR3F2"},Tf=yu(fw),Ut=Wy(Tf),dw=aw(Tf),hw=({app:e})=>{const t=Cf();xv(Ut,n=>{t.user=n,console.log("Auth state changed:",n?"logged in":"logged out")})},pw=Object.freeze(Object.defineProperty({__proto__:null,analytics:dw,auth:Ut,default:hw},Symbol.toStringTag,{value:"Module"})),Cf=Hp("auth",{state:()=>({user:null,loading:!1,error:null}),actions:{async login(e,t){this.loading=!0,this.error=null;try{const n=await kv(Ut,e,t);return this.user=n.user,this.user.emailVerified?{success:!0}:(this.error="EMAIL_NOT_VERIFIED",{success:!1,reason:"EMAIL_NOT_VERIFIED"})}catch(n){const r=n.code||n.message;return this.error=this.getReadableErrorMessage(r),{success:!1,reason:r}}finally{this.loading=!1}},async signup(e,t){this.loading=!0,this.error=null;try{const n=await Pv(Ut,e,t);return await tc(n.user),this.user=n.user,{success:!0}}catch(n){const r=this.getSignupErrorMessage(n.code,n.message);return this.error=r,{success:!1,reason:n.code,message:r}}finally{this.loading=!1}},async loginWithGoogle(){const e=new bt;try{const t=await sc(Ut,e);return this.user=t.user,!0}catch(t){return this.error=t.message,!1}},async loginWithFacebook(){const e=new yt;try{const t=await sc(Ut,e);return this.user=t.user,!0}catch(t){return this.error=t.message,!1}},async logout(){try{return await Dv(Ut),this.user=null,!0}catch(e){return this.error=e.message,!1}},async verifyEmail(e){this.loading=!0,this.error=null;try{return await Rv(Ut,e),this.user&&await this.user.reload(),!0}catch(t){return this.error=t.message,!1}finally{this.loading=!1}},async resendVerificationEmail(){if(!this.user)return{success:!1,error:"No user logged in"};try{return await tc(this.user),{success:!0}}catch(e){const t=this.getVerificationErrorMessage(e.code||e.message);return this.error=t,{success:!1,error:t,reason:e.code}}},getReadableErrorMessage(e){return{"auth/wrong-password":"Incorrect password","auth/user-not-found":"No account found with this email","auth/invalid-email":"Invalid email address","auth/user-disabled":"This account has been disabled","auth/email-already-in-use":"This email is already registered","auth/weak-password":"Password should be at least 6 characters",EMAIL_NOT_VERIFIED:"Please verify your email address first","auth/too-many-requests":"Too many attempts. Please try again later",INVALID_LOGIN_CREDENTIALS:"Invalid email or password","auth/invalid-credential":"Invalid email or password","auth/invalid-login-credentials":"Invalid email or password"}[e]||"An error occurred during authentication"},getSignupErrorMessage(e,t){const n={"auth/email-already-in-use":"This email is already registered","auth/invalid-email":"Please enter a valid email address","auth/operation-not-allowed":"Email/password accounts are not enabled. Please contact support.","auth/weak-password":"Password should be at least 6 characters",WEAK_PASSWORD:"Password should be at least 6 characters"};return t?.includes("WEAK_PASSWORD")?n.WEAK_PASSWORD:n[e]||t||"Failed to create account"},getVerificationErrorMessage(e){return{TOO_MANY_ATTEMPTS_TRY_LATER:"Too many attempts. Please wait a few minutes before trying again.","auth/too-many-requests":"Too many attempts. Please wait a few minutes before trying again.","auth/user-not-found":"User not found.","auth/invalid-user":"Invalid user."}[e]||"Failed to send verification email"}},getters:{isEmailVerified:e=>e.user?.emailVerified??!1}}),ei=Np(function(){const t=Vg({scrollBehavior:()=>({left:0,top:0}),routes:qg,history:vg("/")});return t.beforeEach((n,r,s)=>{const i=Cf(),o=n.matched.some(l=>l.meta.requiresAuth),a=n.path==="/login"||n.path==="/signup",c=n.path==="/";o&&!i.user?s("/login"):(a||c)&&i.user?s("/dashboard"):s()}),t});async function gw(e,t){const n=e(Op);n.use(kp,t);const r=typeof Hs=="function"?await Hs({}):Hs;n.use(r);const s=xn(typeof ei=="function"?await ei({store:r}):ei);return r.use(({store:i})=>{i.router=s}),{app:n,store:r,router:s}}const mw={config:{}},_w="/";async function vw({app:e,router:t,store:n},r){let s=!1;const i=c=>{try{return t.resolve(c).href}catch{}return Object(c)===c?null:c},o=c=>{if(s=!0,typeof c=="string"&&/^https?:\/\//.test(c)){window.location.href=c;return}const l=i(c);l!==null&&(window.location.href=l,window.location.reload())},a=window.location.href.replace(window.location.origin,"");for(let c=0;s===!1&&c<r.length;c++)try{await r[c]({app:e,router:t,store:n,ssrContext:null,redirect:o,urlPath:a,publicPath:_w})}catch(l){if(l&&l.url){o(l.url);return}console.error("[Quasar] boot error:",l);return}s!==!0&&(e.use(t),e.mount("#q-app"))}gw(ip,mw).then(e=>{const[t,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(s=>{if(s.status==="rejected"){console.error("[Quasar] boot error:",s.reason);return}return s.value.default})]:["all",r=>r.map(s=>s.default)];return Promise[t]([Ne(()=>import("./axios-C7Oifi_o.js"),[]),Ne(()=>Promise.resolve().then(()=>pw),void 0)]).then(r=>{const s=n(r).filter(i=>typeof i=="function");vw(e,s)})});export{xw as $,Ew as A,Ml as B,yh as C,Bf as D,qi as E,nt as F,ww as G,Di as H,Iw as I,Cn as J,Rd as K,Ad as L,Ow as M,Vi as N,Fw as O,Bw as P,Dw as Q,Sp as R,it as S,Rw as T,Sw as U,Uw as V,yw as W,mp as X,pi as Y,kw as Z,Nw as _,$e as a,fa as a0,Yi as a1,bw as a2,Od as a3,dp as a4,Pw as a5,Cp as a6,Cw as a7,Aw as a8,Lw as b,Tw as c,Hw as d,$w as e,fl as f,Sh as g,Ji as h,Be as i,ms as j,ln as k,Mw as l,mn as m,lr as n,dl as o,Or as p,hl as q,cs as r,xl as s,Ol as t,Cf as u,Ed as v,Jn as w,jw as x,Ud as y,De as z};
