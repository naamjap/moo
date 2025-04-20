const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MainLayout-CGmbjqQM.js","assets/render-C8JR9mId.js","assets/QBtn-17FMyXc4.js","assets/QTooltip-DUJ0h7SZ.js","assets/focus-manager-BJWzFvJg.js","assets/QResizeObserver-D2d8lR9q.js","assets/use-quasar-kw6mk0Nd.js","assets/LandingPage-DtZNm7RT.js","assets/QImg-CLxwqALF.js","assets/QCard-BrVvLl3f.js","assets/use-dark-DIdDd6RJ.js","assets/QPage-DVutdtMA.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/LandingPage-Ddn_5YAl.css","assets/LoginPage-Cx6Oh_Xh.js","assets/QInput-DYImIU_I.js","assets/QBanner-y838-LvA.js","assets/QForm-DxZQ6a8H.js","assets/LoginPage-BnuH5prf.css","assets/SignupPage-DG_yR4ur.js","assets/SignupPage-BQwGuAse.css","assets/VerifyEmail-DE0NFZzH.js","assets/AuthAction-l2_yIzHg.js","assets/DashboardPage-LYPZ02bQ.js","assets/DashboardPage-EM2_kqQv.css","assets/TermsOfService-B7owp6lD.js","assets/TermsOfService-Cnlz00NO.css","assets/PrivacyPolicy-Ck-loxhx.js","assets/PrivacyPolicy-Bv0JX9hF.css","assets/AboutPage-A4fwJuMG.js","assets/AboutPage-BWy6HyuR.css","assets/ErrorNotFound-BTHgd2jG.js"])))=>i.map(i=>d[i]);
const wu=function(){const t=typeof document<"u"&&document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),Eu=function(e){return"/"+e},Zi={},ke=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),a=c?.nonce||c?.getAttribute("nonce");s=o(n.map(l=>{if(l=Eu(l),l in Zi)return;Zi[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":wu,u||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),u)return new Promise((g,_)=>{h.addEventListener("load",g),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})};/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function pi(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ae={},hn=[],nt=()=>{},Iu=()=>!1,zr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),gi=e=>e.startsWith("onUpdate:"),ge=Object.assign,mi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Su=Object.prototype.hasOwnProperty,ne=(e,t)=>Su.call(e,t),W=Array.isArray,pn=e=>qr(e)==="[object Map]",ja=e=>qr(e)==="[object Set]",z=e=>typeof e=="function",fe=e=>typeof e=="string",Ht=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",Wa=e=>(ue(e)||z(e))&&z(e.then)&&z(e.catch),Ka=Object.prototype.toString,qr=e=>Ka.call(e),Tu=e=>qr(e).slice(8,-1),za=e=>qr(e)==="[object Object]",_i=e=>fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Nn=pi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Cu=/-(\w)/g,$e=Gr(e=>e.replace(Cu,(t,n)=>n?n.toUpperCase():"")),Au=/\B([A-Z])/g,sn=Gr(e=>e.replace(Au,"-$1").toLowerCase()),Jr=Gr(e=>e.charAt(0).toUpperCase()+e.slice(1)),hs=Gr(e=>e?`on${Jr(e)}`:""),Lt=(e,t)=>!Object.is(e,t),ps=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},qa=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Ru=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Pu=e=>{const t=fe(e)?Number(e):NaN;return isNaN(t)?e:t};let eo;const Yr=()=>eo||(eo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vi(e){if(W(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=fe(r)?Nu(r):vi(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(fe(e)||ue(e))return e}const Ou=/;(?![^(]*\))/g,ku=/:([^]+)/,xu=/\/\*[^]*?\*\//g;function Nu(e){const t={};return e.replace(xu,"").split(Ou).forEach(n=>{if(n){const r=n.split(ku);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function yi(e){let t="";if(fe(e))t=e;else if(W(e))for(let n=0;n<e.length;n++){const r=yi(e[n]);r&&(t+=r+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Lu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Mu=pi(Lu);function Ga(e){return!!e||e===""}const Ja=e=>!!(e&&e.__v_isRef===!0),Du=e=>fe(e)?e:e==null?"":W(e)||ue(e)&&(e.toString===Ka||!z(e.toString))?Ja(e)?Du(e.value):JSON.stringify(e,Ya,2):String(e),Ya=(e,t)=>Ja(t)?Ya(e,t.value):pn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[gs(r,i)+" =>"]=s,n),{})}:ja(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>gs(n))}:Ht(t)?gs(t):ue(t)&&!W(t)&&!za(t)?String(t):t,gs=(e,t="")=>{var n;return Ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class Qa{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ee,!t&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ee;try{return Ee=this,t()}finally{Ee=n}}}on(){Ee=this}off(){Ee=this.parent}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Xa(e){return new Qa(e)}function Za(){return Ee}function Uu(e,t=!1){Ee&&Ee.cleanups.push(e)}let le;const ms=new WeakSet;class ec{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&Ee.active&&Ee.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ms.has(this)&&(ms.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,to(this),rc(this);const t=le,n=je;le=this,je=!0;try{return this.fn()}finally{sc(this),le=t,je=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ei(t);this.deps=this.depsTail=void 0,to(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ms.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$s(this)&&this.run()}get dirty(){return $s(this)}}let tc=0,Ln,Mn;function nc(e,t=!1){if(e.flags|=8,t){e.next=Mn,Mn=e;return}e.next=Ln,Ln=e}function bi(){tc++}function wi(){if(--tc>0)return;if(Mn){let t=Mn;for(Mn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Ln;){let t=Ln;for(Ln=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function rc(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function sc(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ei(r),Fu(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function $s(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ic(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ic(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===zn))return;e.globalVersion=zn;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!$s(e)){e.flags&=-3;return}const n=le,r=je;le=e,je=!0;try{rc(e);const s=e.fn(e._value);(t.version===0||Lt(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{le=n,je=r,sc(e),e.flags&=-3}}function Ei(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ei(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Fu(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let je=!0;const oc=[];function $t(){oc.push(je),je=!1}function Bt(){const e=oc.pop();je=e===void 0?!0:e}function to(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=le;le=void 0;try{t()}finally{le=n}}}let zn=0;class Hu{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ii{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!le||!je||le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==le)n=this.activeLink=new Hu(le,this),le.deps?(n.prevDep=le.depsTail,le.depsTail.nextDep=n,le.depsTail=n):le.deps=le.depsTail=n,ac(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=le.depsTail,n.nextDep=void 0,le.depsTail.nextDep=n,le.depsTail=n,le.deps===n&&(le.deps=r)}return n}trigger(t){this.version++,zn++,this.notify(t)}notify(t){bi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{wi()}}}function ac(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)ac(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Or=new WeakMap,Xt=Symbol(""),Bs=Symbol(""),qn=Symbol("");function _e(e,t,n){if(je&&le){let r=Or.get(e);r||Or.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ii),s.map=r,s.key=n),s.track()}}function dt(e,t,n,r,s,i){const o=Or.get(e);if(!o){zn++;return}const c=a=>{a&&a.trigger()};if(bi(),t==="clear")o.forEach(c);else{const a=W(e),l=a&&_i(n);if(a&&n==="length"){const u=Number(r);o.forEach((f,h)=>{(h==="length"||h===qn||!Ht(h)&&h>=u)&&c(f)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),l&&c(o.get(qn)),t){case"add":a?l&&c(o.get("length")):(c(o.get(Xt)),pn(e)&&c(o.get(Bs)));break;case"delete":a||(c(o.get(Xt)),pn(e)&&c(o.get(Bs)));break;case"set":pn(e)&&c(o.get(Xt));break}}wi()}function $u(e,t){const n=Or.get(e);return n&&n.get(t)}function ln(e){const t=Z(e);return t===e?t:(_e(t,"iterate",qn),Fe(e)?t:t.map(ve))}function Qr(e){return _e(e=Z(e),"iterate",qn),e}const Bu={__proto__:null,[Symbol.iterator](){return _s(this,Symbol.iterator,ve)},concat(...e){return ln(this).concat(...e.map(t=>W(t)?ln(t):t))},entries(){return _s(this,"entries",e=>(e[1]=ve(e[1]),e))},every(e,t){return ct(this,"every",e,t,void 0,arguments)},filter(e,t){return ct(this,"filter",e,t,n=>n.map(ve),arguments)},find(e,t){return ct(this,"find",e,t,ve,arguments)},findIndex(e,t){return ct(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ct(this,"findLast",e,t,ve,arguments)},findLastIndex(e,t){return ct(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ct(this,"forEach",e,t,void 0,arguments)},includes(...e){return vs(this,"includes",e)},indexOf(...e){return vs(this,"indexOf",e)},join(e){return ln(this).join(e)},lastIndexOf(...e){return vs(this,"lastIndexOf",e)},map(e,t){return ct(this,"map",e,t,void 0,arguments)},pop(){return An(this,"pop")},push(...e){return An(this,"push",e)},reduce(e,...t){return no(this,"reduce",e,t)},reduceRight(e,...t){return no(this,"reduceRight",e,t)},shift(){return An(this,"shift")},some(e,t){return ct(this,"some",e,t,void 0,arguments)},splice(...e){return An(this,"splice",e)},toReversed(){return ln(this).toReversed()},toSorted(e){return ln(this).toSorted(e)},toSpliced(...e){return ln(this).toSpliced(...e)},unshift(...e){return An(this,"unshift",e)},values(){return _s(this,"values",ve)}};function _s(e,t,n){const r=Qr(e),s=r[t]();return r!==e&&!Fe(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Vu=Array.prototype;function ct(e,t,n,r,s,i){const o=Qr(e),c=o!==e&&!Fe(e),a=o[t];if(a!==Vu[t]){const f=a.apply(e,i);return c?ve(f):f}let l=n;o!==e&&(c?l=function(f,h){return n.call(this,ve(f),h,e)}:n.length>2&&(l=function(f,h){return n.call(this,f,h,e)}));const u=a.call(o,l,r);return c&&s?s(u):u}function no(e,t,n,r){const s=Qr(e);let i=n;return s!==e&&(Fe(e)?n.length>3&&(i=function(o,c,a){return n.call(this,o,c,a,e)}):i=function(o,c,a){return n.call(this,o,ve(c),a,e)}),s[t](i,...r)}function vs(e,t,n){const r=Z(e);_e(r,"iterate",qn);const s=r[t](...n);return(s===-1||s===!1)&&Ci(n[0])?(n[0]=Z(n[0]),r[t](...n)):s}function An(e,t,n=[]){$t(),bi();const r=Z(e)[t].apply(e,n);return wi(),Bt(),r}const ju=pi("__proto__,__v_isRef,__isVue"),cc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ht));function Wu(e){Ht(e)||(e=String(e));const t=Z(this);return _e(t,"has",e),t.hasOwnProperty(e)}class lc{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ef:hc:i?dc:fc).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=W(t);if(!s){let a;if(o&&(a=Bu[n]))return a;if(n==="hasOwnProperty")return Wu}const c=Reflect.get(t,n,de(t)?t:r);return(Ht(n)?cc.has(n):ju(n))||(s||_e(t,"get",n),i)?c:de(c)?o&&_i(n)?c:c.value:ue(c)?s?gc(c):on(c):c}}class uc extends lc{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const a=en(i);if(!Fe(r)&&!en(r)&&(i=Z(i),r=Z(r)),!W(t)&&de(i)&&!de(r))return a?!1:(i.value=r,!0)}const o=W(t)&&_i(n)?Number(n)<t.length:ne(t,n),c=Reflect.set(t,n,r,de(t)?t:s);return t===Z(s)&&(o?Lt(r,i)&&dt(t,"set",n,r):dt(t,"add",n,r)),c}deleteProperty(t,n){const r=ne(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&dt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Ht(n)||!cc.has(n))&&_e(t,"has",n),r}ownKeys(t){return _e(t,"iterate",W(t)?"length":Xt),Reflect.ownKeys(t)}}class Ku extends lc{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const zu=new uc,qu=new Ku,Gu=new uc(!0);const Vs=e=>e,mr=e=>Reflect.getPrototypeOf(e);function Ju(e,t,n){return function(...r){const s=this.__v_raw,i=Z(s),o=pn(i),c=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,l=s[e](...r),u=n?Vs:t?js:ve;return!t&&_e(i,"iterate",a?Bs:Xt),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:c?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function _r(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Yu(e,t){const n={get(s){const i=this.__v_raw,o=Z(i),c=Z(s);e||(Lt(s,c)&&_e(o,"get",s),_e(o,"get",c));const{has:a}=mr(o),l=t?Vs:e?js:ve;if(a.call(o,s))return l(i.get(s));if(a.call(o,c))return l(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&_e(Z(s),"iterate",Xt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Z(i),c=Z(s);return e||(Lt(s,c)&&_e(o,"has",s),_e(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,a=Z(c),l=t?Vs:e?js:ve;return!e&&_e(a,"iterate",Xt),c.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return ge(n,e?{add:_r("add"),set:_r("set"),delete:_r("delete"),clear:_r("clear")}:{add(s){!t&&!Fe(s)&&!en(s)&&(s=Z(s));const i=Z(this);return mr(i).has.call(i,s)||(i.add(s),dt(i,"add",s,s)),this},set(s,i){!t&&!Fe(i)&&!en(i)&&(i=Z(i));const o=Z(this),{has:c,get:a}=mr(o);let l=c.call(o,s);l||(s=Z(s),l=c.call(o,s));const u=a.call(o,s);return o.set(s,i),l?Lt(i,u)&&dt(o,"set",s,i):dt(o,"add",s,i),this},delete(s){const i=Z(this),{has:o,get:c}=mr(i);let a=o.call(i,s);a||(s=Z(s),a=o.call(i,s)),c&&c.call(i,s);const l=i.delete(s);return a&&dt(i,"delete",s,void 0),l},clear(){const s=Z(this),i=s.size!==0,o=s.clear();return i&&dt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ju(s,e,t)}),n}function Si(e,t){const n=Yu(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(ne(n,s)&&s in r?n:r,s,i)}const Qu={get:Si(!1,!1)},Xu={get:Si(!1,!0)},Zu={get:Si(!0,!1)};const fc=new WeakMap,dc=new WeakMap,hc=new WeakMap,ef=new WeakMap;function tf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nf(e){return e.__v_skip||!Object.isExtensible(e)?0:tf(Tu(e))}function on(e){return en(e)?e:Ti(e,!1,zu,Qu,fc)}function pc(e){return Ti(e,!1,Gu,Xu,dc)}function gc(e){return Ti(e,!0,qu,Zu,hc)}function Ti(e,t,n,r,s){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=nf(e);if(o===0)return e;const c=new Proxy(e,o===2?r:n);return s.set(e,c),c}function Mt(e){return en(e)?Mt(e.__v_raw):!!(e&&e.__v_isReactive)}function en(e){return!!(e&&e.__v_isReadonly)}function Fe(e){return!!(e&&e.__v_isShallow)}function Ci(e){return e?!!e.__v_raw:!1}function Z(e){const t=e&&e.__v_raw;return t?Z(t):e}function Sn(e){return!ne(e,"__v_skip")&&Object.isExtensible(e)&&qa(e,"__v_skip",!0),e}const ve=e=>ue(e)?on(e):e,js=e=>ue(e)?gc(e):e;function de(e){return e?e.__v_isRef===!0:!1}function Xr(e){return mc(e,!1)}function rf(e){return mc(e,!0)}function mc(e,t){return de(e)?e:new sf(e,t)}class sf{constructor(t,n){this.dep=new Ii,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Z(t),this._value=n?t:ve(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Fe(t)||en(t);t=r?t:Z(t),Lt(t,n)&&(this._rawValue=t,this._value=r?t:ve(t),this.dep.trigger())}}function gn(e){return de(e)?e.value:e}const of={get:(e,t,n)=>t==="__v_raw"?e:gn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return de(s)&&!de(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function _c(e){return Mt(e)?e:new Proxy(e,of)}function af(e){const t=W(e)?new Array(e.length):{};for(const n in e)t[n]=lf(e,n);return t}class cf{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return $u(Z(this._object),this._key)}}function lf(e,t,n){const r=e[t];return de(r)?r:new cf(e,t,n)}class uf{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ii(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return nc(this,!0),!0}get value(){const t=this.dep.track();return ic(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ff(e,t,n=!1){let r,s;return z(e)?r=e:(r=e.get,s=e.set),new uf(r,s,n)}const vr={},kr=new WeakMap;let Gt;function df(e,t=!1,n=Gt){if(n){let r=kr.get(n);r||kr.set(n,r=[]),r.push(e)}}function hf(e,t,n=ae){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:a}=n,l=P=>s?P:Fe(P)||s===!1||s===0?ht(P,1):ht(P);let u,f,h,g,_=!1,I=!1;if(de(e)?(f=()=>e.value,_=Fe(e)):Mt(e)?(f=()=>l(e),_=!0):W(e)?(I=!0,_=e.some(P=>Mt(P)||Fe(P)),f=()=>e.map(P=>{if(de(P))return P.value;if(Mt(P))return l(P);if(z(P))return a?a(P,2):P()})):z(e)?t?f=a?()=>a(e,2):e:f=()=>{if(h){$t();try{h()}finally{Bt()}}const P=Gt;Gt=u;try{return a?a(e,3,[g]):e(g)}finally{Gt=P}}:f=nt,t&&s){const P=f,U=s===!0?1/0:s;f=()=>ht(P(),U)}const F=Za(),L=()=>{u.stop(),F&&F.active&&mi(F.effects,u)};if(i&&t){const P=t;t=(...U)=>{P(...U),L()}}let x=I?new Array(e.length).fill(vr):vr;const M=P=>{if(!(!(u.flags&1)||!u.dirty&&!P))if(t){const U=u.run();if(s||_||(I?U.some((J,q)=>Lt(J,x[q])):Lt(U,x))){h&&h();const J=Gt;Gt=u;try{const q=[U,x===vr?void 0:I&&x[0]===vr?[]:x,g];a?a(t,3,q):t(...q),x=U}finally{Gt=J}}}else u.run()};return c&&c(M),u=new ec(f),u.scheduler=o?()=>o(M,!1):M,g=P=>df(P,!1,u),h=u.onStop=()=>{const P=kr.get(u);if(P){if(a)a(P,4);else for(const U of P)U();kr.delete(u)}},t?r?M(!0):x=u.run():o?o(M.bind(null,!0),!0):u.run(),L.pause=u.pause.bind(u),L.resume=u.resume.bind(u),L.stop=L,L}function ht(e,t=1/0,n){if(t<=0||!ue(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,de(e))ht(e.value,t,n);else if(W(e))for(let r=0;r<e.length;r++)ht(e[r],t,n);else if(ja(e)||pn(e))e.forEach(r=>{ht(r,t,n)});else if(za(e)){for(const r in e)ht(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&ht(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function or(e,t,n,r){try{return r?e(...r):e()}catch(s){Zr(s,t,n)}}function Ke(e,t,n,r){if(z(e)){const s=or(e,t,n,r);return s&&Wa(s)&&s.catch(i=>{Zr(i,t,n)}),s}if(W(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Ke(e[i],t,n,r));return s}}function Zr(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ae;if(t){let c=t.parent;const a=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const u=c.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,a,l)===!1)return}c=c.parent}if(i){$t(),or(i,null,10,[e,a,l]),Bt();return}}pf(e,n,s,r,o)}function pf(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Ie=[];let Ze=-1;const mn=[];let At=null,fn=0;const vc=Promise.resolve();let xr=null;function Ai(e){const t=xr||vc;return e?t.then(this?e.bind(this):e):t}function gf(e){let t=Ze+1,n=Ie.length;for(;t<n;){const r=t+n>>>1,s=Ie[r],i=Gn(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Ri(e){if(!(e.flags&1)){const t=Gn(e),n=Ie[Ie.length-1];!n||!(e.flags&2)&&t>=Gn(n)?Ie.push(e):Ie.splice(gf(t),0,e),e.flags|=1,yc()}}function yc(){xr||(xr=vc.then(wc))}function mf(e){W(e)?mn.push(...e):At&&e.id===-1?At.splice(fn+1,0,e):e.flags&1||(mn.push(e),e.flags|=1),yc()}function ro(e,t,n=Ze+1){for(;n<Ie.length;n++){const r=Ie[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ie.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function bc(e){if(mn.length){const t=[...new Set(mn)].sort((n,r)=>Gn(n)-Gn(r));if(mn.length=0,At){At.push(...t);return}for(At=t,fn=0;fn<At.length;fn++){const n=At[fn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}At=null,fn=0}}const Gn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function wc(e){try{for(Ze=0;Ze<Ie.length;Ze++){const t=Ie[Ze];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),or(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ze<Ie.length;Ze++){const t=Ie[Ze];t&&(t.flags&=-2)}Ze=-1,Ie.length=0,bc(),xr=null,(Ie.length||mn.length)&&wc()}}let Se=null,Ec=null;function Nr(e){const t=Se;return Se=e,Ec=e&&e.type.__scopeId||null,t}function _f(e,t=Se,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&vo(-1);const i=Nr(t);let o;try{o=e(...s)}finally{Nr(i),r._d&&vo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function qv(e,t){if(Se===null)return e;const n=ss(Se),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,c,a=ae]=t[s];i&&(z(i)&&(i={mounted:i,updated:i}),i.deep&&ht(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return e}function Wt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&($t(),Ke(a,n,8,[e.el,c,e,t]),Bt())}}const Ic=Symbol("_vte"),Sc=e=>e.__isTeleport,Dn=e=>e&&(e.disabled||e.disabled===""),so=e=>e&&(e.defer||e.defer===""),io=e=>typeof SVGElement<"u"&&e instanceof SVGElement,oo=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Ws=(e,t)=>{const n=e&&e.to;return fe(n)?t?t(n):null:n},Tc={name:"Teleport",__isTeleport:!0,process(e,t,n,r,s,i,o,c,a,l){const{mc:u,pc:f,pbc:h,o:{insert:g,querySelector:_,createText:I,createComment:F}}=l,L=Dn(t.props);let{shapeFlag:x,children:M,dynamicChildren:P}=t;if(e==null){const U=t.el=I(""),J=t.anchor=I("");g(U,n,r),g(J,n,r);const q=(S,$)=>{x&16&&(s&&s.isCE&&(s.ce._teleportTarget=S),u(M,S,$,s,i,o,c,a))},H=()=>{const S=t.target=Ws(t.props,_),$=Cc(S,t,I,g);S&&(o!=="svg"&&io(S)?o="svg":o!=="mathml"&&oo(S)&&(o="mathml"),L||(q(S,$),Er(t,!1)))};L&&(q(n,J),Er(t,!0)),so(t.props)?we(()=>{H(),t.el.__isMounted=!0},i):H()}else{if(so(t.props)&&!e.el.__isMounted){we(()=>{Tc.process(e,t,n,r,s,i,o,c,a,l),delete e.el.__isMounted},i);return}t.el=e.el,t.targetStart=e.targetStart;const U=t.anchor=e.anchor,J=t.target=e.target,q=t.targetAnchor=e.targetAnchor,H=Dn(e.props),S=H?n:J,$=H?U:q;if(o==="svg"||io(J)?o="svg":(o==="mathml"||oo(J))&&(o="mathml"),P?(h(e.dynamicChildren,P,S,s,i,o,c),ki(e,t,!0)):a||f(e,t,S,$,s,i,o,c,!1),L)H?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):yr(t,n,U,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const Y=t.target=Ws(t.props,_);Y&&yr(t,Y,null,l,0)}else H&&yr(t,J,q,l,1);Er(t,L)}},remove(e,t,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:c,anchor:a,targetStart:l,targetAnchor:u,target:f,props:h}=e;if(f&&(s(l),s(u)),i&&s(a),o&16){const g=i||!Dn(h);for(let _=0;_<c.length;_++){const I=c[_];r(I,t,n,g,!!I.dynamicChildren)}}},move:yr,hydrate:vf};function yr(e,t,n,{o:{insert:r},m:s},i=2){i===0&&r(e.targetAnchor,t,n);const{el:o,anchor:c,shapeFlag:a,children:l,props:u}=e,f=i===2;if(f&&r(o,t,n),(!f||Dn(u))&&a&16)for(let h=0;h<l.length;h++)s(l[h],t,n,2);f&&r(c,t,n)}function vf(e,t,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:a,insert:l,createText:u}},f){const h=t.target=Ws(t.props,a);if(h){const g=Dn(t.props),_=h._lpa||h.firstChild;if(t.shapeFlag&16)if(g)t.anchor=f(o(e),t,c(e),n,r,s,i),t.targetStart=_,t.targetAnchor=_&&o(_);else{t.anchor=o(e);let I=_;for(;I;){if(I&&I.nodeType===8){if(I.data==="teleport start anchor")t.targetStart=I;else if(I.data==="teleport anchor"){t.targetAnchor=I,h._lpa=t.targetAnchor&&o(t.targetAnchor);break}}I=o(I)}t.targetAnchor||Cc(h,t,u,l),f(_&&o(_),t,h,n,r,s,i)}Er(t,g)}return t.anchor&&o(t.anchor)}const Gv=Tc;function Er(e,t){const n=e.ctx;if(n&&n.ut){let r,s;for(t?(r=e.el,s=e.anchor):(r=e.targetStart,s=e.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Cc(e,t,n,r){const s=t.targetStart=n(""),i=t.targetAnchor=n("");return s[Ic]=i,e&&(r(s,e),r(i,e)),i}const Rt=Symbol("_leaveCb"),br=Symbol("_enterCb");function yf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Lc(()=>{e.isMounted=!0}),Mc(()=>{e.isUnmounting=!0}),e}const Me=[Function,Array],Ac={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Me,onEnter:Me,onAfterEnter:Me,onEnterCancelled:Me,onBeforeLeave:Me,onLeave:Me,onAfterLeave:Me,onLeaveCancelled:Me,onBeforeAppear:Me,onAppear:Me,onAfterAppear:Me,onAppearCancelled:Me},Rc=e=>{const t=e.subTree;return t.component?Rc(t.component):t},bf={name:"BaseTransition",props:Ac,setup(e,{slots:t}){const n=yd(),r=yf();return()=>{const s=t.default&&kc(t.default(),!0);if(!s||!s.length)return;const i=Pc(s),o=Z(e),{mode:c}=o;if(r.isLeaving)return ys(i);const a=ao(i);if(!a)return ys(i);let l=Ks(a,o,r,n,f=>l=f);a.type!==Re&&Jn(a,l);let u=n.subTree&&ao(n.subTree);if(u&&u.type!==Re&&!Yt(a,u)&&Rc(n).type!==Re){let f=Ks(u,o,r,n);if(Jn(u,f),c==="out-in"&&a.type!==Re)return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},ys(i);c==="in-out"&&a.type!==Re?f.delayLeave=(h,g,_)=>{const I=Oc(r,u);I[String(u.key)]=u,h[Rt]=()=>{g(),h[Rt]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{_(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function Pc(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Re){t=n;break}}return t}const wf=bf;function Oc(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Ks(e,t,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:g,onAfterLeave:_,onLeaveCancelled:I,onBeforeAppear:F,onAppear:L,onAfterAppear:x,onAppearCancelled:M}=t,P=String(e.key),U=Oc(n,e),J=(S,$)=>{S&&Ke(S,r,9,$)},q=(S,$)=>{const Y=$[1];J(S,$),W(S)?S.every(k=>k.length<=1)&&Y():S.length<=1&&Y()},H={mode:o,persisted:c,beforeEnter(S){let $=a;if(!n.isMounted)if(i)$=F||a;else return;S[Rt]&&S[Rt](!0);const Y=U[P];Y&&Yt(e,Y)&&Y.el[Rt]&&Y.el[Rt](),J($,[S])},enter(S){let $=l,Y=u,k=f;if(!n.isMounted)if(i)$=L||l,Y=x||u,k=M||f;else return;let Q=!1;const he=S[br]=ye=>{Q||(Q=!0,ye?J(k,[S]):J(Y,[S]),H.delayedLeave&&H.delayedLeave(),S[br]=void 0)};$?q($,[S,he]):he()},leave(S,$){const Y=String(e.key);if(S[br]&&S[br](!0),n.isUnmounting)return $();J(h,[S]);let k=!1;const Q=S[Rt]=he=>{k||(k=!0,$(),he?J(I,[S]):J(_,[S]),S[Rt]=void 0,U[Y]===e&&delete U[Y])};U[Y]=e,g?q(g,[S,Q]):Q()},clone(S){const $=Ks(S,t,n,r,s);return s&&s($),$}};return H}function ys(e){if(es(e))return e=Ft(e),e.children=null,e}function ao(e){if(!es(e))return Sc(e.type)&&e.children?Pc(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&z(n.default))return n.default()}}function Jn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Jn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function kc(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===et?(o.patchFlag&128&&s++,r=r.concat(kc(o.children,t,c))):(t||o.type!==Re)&&r.push(c!=null?Ft(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Pi(e,t){return z(e)?ge({name:e.name},t,{setup:e}):e}function xc(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Lr(e,t,n,r,s=!1){if(W(e)){e.forEach((_,I)=>Lr(_,t&&(W(t)?t[I]:t),n,r,s));return}if(Un(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Lr(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?ss(r.component):r.el,o=s?null:i,{i:c,r:a}=e,l=t&&t.r,u=c.refs===ae?c.refs={}:c.refs,f=c.setupState,h=Z(f),g=f===ae?()=>!1:_=>ne(h,_);if(l!=null&&l!==a&&(fe(l)?(u[l]=null,g(l)&&(f[l]=null)):de(l)&&(l.value=null)),z(a))or(a,c,12,[o,u]);else{const _=fe(a),I=de(a);if(_||I){const F=()=>{if(e.f){const L=_?g(a)?f[a]:u[a]:a.value;s?W(L)&&mi(L,i):W(L)?L.includes(i)||L.push(i):_?(u[a]=[i],g(a)&&(f[a]=u[a])):(a.value=[i],e.k&&(u[e.k]=a.value))}else _?(u[a]=o,g(a)&&(f[a]=o)):I&&(a.value=o,e.k&&(u[e.k]=o))};o?(F.id=-1,we(F,n)):F()}}}Yr().requestIdleCallback;Yr().cancelIdleCallback;const Un=e=>!!e.type.__asyncLoader,es=e=>e.type.__isKeepAlive;function Ef(e,t){Nc(e,"a",t)}function If(e,t){Nc(e,"da",t)}function Nc(e,t,n=pe){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ts(t,r,n),n){let s=n.parent;for(;s&&s.parent;)es(s.parent.vnode)&&Sf(r,t,n,s),s=s.parent}}function Sf(e,t,n,r){const s=ts(t,e,r,!0);Dc(()=>{mi(r[t],s)},n)}function ts(e,t,n=pe,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{$t();const c=ar(n),a=Ke(t,n,e,o);return c(),Bt(),a});return r?s.unshift(i):s.push(i),i}}const wt=e=>(t,n=pe)=>{(!Qn||e==="sp")&&ts(e,(...r)=>t(...r),n)},Tf=wt("bm"),Lc=wt("m"),Cf=wt("bu"),Af=wt("u"),Mc=wt("bum"),Dc=wt("um"),Rf=wt("sp"),Pf=wt("rtg"),Of=wt("rtc");function kf(e,t=pe){ts("ec",e,t)}const xf="components";function Nf(e,t){return Mf(xf,e,!0,t)||e}const Lf=Symbol.for("v-ndc");function Mf(e,t,n=!0,r=!1){const s=Se||pe;if(s){const i=s.type;{const c=Sd(i,!1);if(c&&(c===t||c===$e(t)||c===Jr($e(t))))return i}const o=co(s[e]||i[e],t)||co(s.appContext[e],t);return!o&&r?i:o}}function co(e,t){return e&&(e[t]||e[$e(t)]||e[Jr($e(t))])}function Jv(e,t,n,r){let s;const i=n,o=W(e);if(o||fe(e)){const c=o&&Mt(e);let a=!1;c&&(a=!Fe(e),e=Qr(e)),s=new Array(e.length);for(let l=0,u=e.length;l<u;l++)s[l]=t(a?ve(e[l]):e[l],l,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let c=0;c<e;c++)s[c]=t(c+1,c,void 0,i)}else if(ue(e))if(e[Symbol.iterator])s=Array.from(e,(c,a)=>t(c,a,void 0,i));else{const c=Object.keys(e);s=new Array(c.length);for(let a=0,l=c.length;a<l;a++){const u=c[a];s[a]=t(e[u],u,a,i)}}else s=[];return s}const zs=e=>e?il(e)?ss(e):zs(e.parent):null,Fn=ge(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>zs(e.parent),$root:e=>zs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Fc(e),$forceUpdate:e=>e.f||(e.f=()=>{Ri(e.update)}),$nextTick:e=>e.n||(e.n=Ai.bind(e.proxy)),$watch:e=>rd.bind(e)}),bs=(e,t)=>e!==ae&&!e.__isScriptSetup&&ne(e,t),Df={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(bs(r,t))return o[t]=1,r[t];if(s!==ae&&ne(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&ne(l,t))return o[t]=3,i[t];if(n!==ae&&ne(n,t))return o[t]=4,n[t];qs&&(o[t]=0)}}const u=Fn[t];let f,h;if(u)return t==="$attrs"&&_e(e.attrs,"get",""),u(e);if((f=c.__cssModules)&&(f=f[t]))return f;if(n!==ae&&ne(n,t))return o[t]=4,n[t];if(h=a.config.globalProperties,ne(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return bs(s,t)?(s[t]=n,!0):r!==ae&&ne(r,t)?(r[t]=n,!0):ne(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||e!==ae&&ne(e,o)||bs(t,o)||(c=i[0])&&ne(c,o)||ne(r,o)||ne(Fn,o)||ne(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ne(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function lo(e){return W(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let qs=!0;function Uf(e){const t=Fc(e),n=e.proxy,r=e.ctx;qs=!1,t.beforeCreate&&uo(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:g,updated:_,activated:I,deactivated:F,beforeDestroy:L,beforeUnmount:x,destroyed:M,unmounted:P,render:U,renderTracked:J,renderTriggered:q,errorCaptured:H,serverPrefetch:S,expose:$,inheritAttrs:Y,components:k,directives:Q,filters:he}=t;if(l&&Ff(l,r,null),o)for(const G in o){const ee=o[G];z(ee)&&(r[G]=ee.bind(n))}if(s){const G=s.call(n,n);ue(G)&&(e.data=on(G))}if(qs=!0,i)for(const G in i){const ee=i[G],at=z(ee)?ee.bind(n,n):z(ee.get)?ee.get.bind(n,n):nt,Et=!z(ee)&&z(ee.set)?ee.set.bind(n):nt,Ge=De({get:at,set:Et});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Ce=>Ge.value=Ce})}if(c)for(const G in c)Uc(c[G],r,n,G);if(a){const G=z(a)?a.call(n):a;Reflect.ownKeys(G).forEach(ee=>{Ir(ee,G[ee])})}u&&uo(u,e,"c");function se(G,ee){W(ee)?ee.forEach(at=>G(at.bind(n))):ee&&G(ee.bind(n))}if(se(Tf,f),se(Lc,h),se(Cf,g),se(Af,_),se(Ef,I),se(If,F),se(kf,H),se(Of,J),se(Pf,q),se(Mc,x),se(Dc,P),se(Rf,S),W($))if($.length){const G=e.exposed||(e.exposed={});$.forEach(ee=>{Object.defineProperty(G,ee,{get:()=>n[ee],set:at=>n[ee]=at})})}else e.exposed||(e.exposed={});U&&e.render===nt&&(e.render=U),Y!=null&&(e.inheritAttrs=Y),k&&(e.components=k),Q&&(e.directives=Q),S&&xc(e)}function Ff(e,t,n=nt){W(e)&&(e=Gs(e));for(const r in e){const s=e[r];let i;ue(s)?"default"in s?i=He(s.from||r,s.default,!0):i=He(s.from||r):i=He(s),de(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function uo(e,t,n){Ke(W(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Uc(e,t,n,r){let s=r.includes(".")?Qc(n,r):()=>n[r];if(fe(e)){const i=t[e];z(i)&&Hn(s,i)}else if(z(e))Hn(s,e.bind(n));else if(ue(e))if(W(e))e.forEach(i=>Uc(i,t,n,r));else{const i=z(e.handler)?e.handler.bind(n):t[e.handler];z(i)&&Hn(s,i,e)}}function Fc(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,c=i.get(t);let a;return c?a=c:!s.length&&!n&&!r?a=t:(a={},s.length&&s.forEach(l=>Mr(a,l,o,!0)),Mr(a,t,o)),ue(t)&&i.set(t,a),a}function Mr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Mr(e,i,n,!0),s&&s.forEach(o=>Mr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const c=Hf[o]||n&&n[o];e[o]=c?c(e[o],t[o]):t[o]}return e}const Hf={data:fo,props:ho,emits:ho,methods:On,computed:On,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:On,directives:On,watch:Bf,provide:fo,inject:$f};function fo(e,t){return t?e?function(){return ge(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function $f(e,t){return On(Gs(e),Gs(t))}function Gs(e){if(W(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function On(e,t){return e?ge(Object.create(null),e,t):t}function ho(e,t){return e?W(e)&&W(t)?[...new Set([...e,...t])]:ge(Object.create(null),lo(e),lo(t??{})):t}function Bf(e,t){if(!e)return t;if(!t)return e;const n=ge(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function Hc(){return{app:null,config:{isNativeTag:Iu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vf=0;function jf(e,t){return function(r,s=null){z(r)||(r=ge({},r)),s!=null&&!ue(s)&&(s=null);const i=Hc(),o=new WeakSet,c=[];let a=!1;const l=i.app={_uid:Vf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Cd,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&z(u.install)?(o.add(u),u.install(l,...f)):z(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,h){if(!a){const g=l._ceVNode||Ne(r,s);return g.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),e(g,u,h),a=!0,l._container=u,u.__vue_app__=l,ss(g.component)}},onUnmount(u){c.push(u)},unmount(){a&&(Ke(c,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=Zt;Zt=l;try{return u()}finally{Zt=f}}};return l}}let Zt=null;function Ir(e,t){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[e]=t}}function He(e,t,n=!1){const r=pe||Se;if(r||Zt){const s=Zt?Zt._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&z(t)?t.call(r&&r.proxy):t}}function Wf(){return!!(pe||Se||Zt)}const $c={},Bc=()=>Object.create($c),Vc=e=>Object.getPrototypeOf(e)===$c;function Kf(e,t,n,r=!1){const s={},i=Bc();e.propsDefaults=Object.create(null),jc(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:pc(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function zf(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,c=Z(s),[a]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ns(e.emitsOptions,h))continue;const g=t[h];if(a)if(ne(i,h))g!==i[h]&&(i[h]=g,l=!0);else{const _=$e(h);s[_]=Js(a,c,_,g,e,!1)}else g!==i[h]&&(i[h]=g,l=!0)}}}else{jc(e,t,s,i)&&(l=!0);let u;for(const f in c)(!t||!ne(t,f)&&((u=sn(f))===f||!ne(t,u)))&&(a?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Js(a,c,f,void 0,e,!0)):delete s[f]);if(i!==c)for(const f in i)(!t||!ne(t,f))&&(delete i[f],l=!0)}l&&dt(e.attrs,"set","")}function jc(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,c;if(t)for(let a in t){if(Nn(a))continue;const l=t[a];let u;s&&ne(s,u=$e(a))?!i||!i.includes(u)?n[u]=l:(c||(c={}))[u]=l:ns(e.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=Z(n),l=c||ae;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Js(s,a,f,l[f],e,!ne(l,f))}}return o}function Js(e,t,n,r,s,i){const o=e[n];if(o!=null){const c=ne(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&z(a)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=ar(s);r=l[n]=a.call(null,t),u()}}else r=a;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===sn(n))&&(r=!0))}return r}const qf=new WeakMap;function Wc(e,t,n=!1){const r=n?qf:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},c=[];let a=!1;if(!z(e)){const u=f=>{a=!0;const[h,g]=Wc(f,t,!0);ge(o,h),g&&c.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!a)return ue(e)&&r.set(e,hn),hn;if(W(i))for(let u=0;u<i.length;u++){const f=$e(i[u]);po(f)&&(o[f]=ae)}else if(i)for(const u in i){const f=$e(u);if(po(f)){const h=i[u],g=o[f]=W(h)||z(h)?{type:h}:ge({},h),_=g.type;let I=!1,F=!0;if(W(_))for(let L=0;L<_.length;++L){const x=_[L],M=z(x)&&x.name;if(M==="Boolean"){I=!0;break}else M==="String"&&(F=!1)}else I=z(_)&&_.name==="Boolean";g[0]=I,g[1]=F,(I||ne(g,"default"))&&c.push(f)}}const l=[o,c];return ue(e)&&r.set(e,l),l}function po(e){return e[0]!=="$"&&!Nn(e)}const Kc=e=>e[0]==="_"||e==="$stable",Oi=e=>W(e)?e.map(tt):[tt(e)],Gf=(e,t,n)=>{if(t._n)return t;const r=_f((...s)=>Oi(t(...s)),n);return r._c=!1,r},zc=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Kc(s))continue;const i=e[s];if(z(i))t[s]=Gf(s,i,r);else if(i!=null){const o=Oi(i);t[s]=()=>o}}},qc=(e,t)=>{const n=Oi(t);e.slots.default=()=>n},Gc=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},Jf=(e,t,n)=>{const r=e.slots=Bc();if(e.vnode.shapeFlag&32){const s=t._;s?(Gc(r,t,n),n&&qa(r,"_",s,!0)):zc(t,r)}else t&&qc(e,t)},Yf=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=ae;if(r.shapeFlag&32){const c=t._;c?n&&c===1?i=!1:Gc(s,t,n):(i=!t.$stable,zc(t,s)),o=t}else t&&(qc(e,t),o={default:1});if(i)for(const c in s)!Kc(c)&&o[c]==null&&delete s[c]},we=ud;function Qf(e){return Xf(e)}function Xf(e,t){const n=Yr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:g=nt,insertStaticContent:_}=e,I=(d,p,m,v=null,w=null,b=null,A=void 0,C=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!Yt(d,p)&&(v=y(d),Ce(d,w,b,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:E,ref:V,shapeFlag:O}=p;switch(E){case rs:F(d,p,m,v);break;case Re:L(d,p,m,v);break;case Es:d==null&&x(p,m,v,A);break;case et:k(d,p,m,v,w,b,A,C,T);break;default:O&1?U(d,p,m,v,w,b,A,C,T):O&6?Q(d,p,m,v,w,b,A,C,T):(O&64||O&128)&&E.process(d,p,m,v,w,b,A,C,T,D)}V!=null&&w&&Lr(V,d&&d.ref,b,p||d,!p)},F=(d,p,m,v)=>{if(d==null)r(p.el=c(p.children),m,v);else{const w=p.el=d.el;p.children!==d.children&&l(w,p.children)}},L=(d,p,m,v)=>{d==null?r(p.el=a(p.children||""),m,v):p.el=d.el},x=(d,p,m,v)=>{[d.el,d.anchor]=_(d.children,p,m,v,d.el,d.anchor)},M=({el:d,anchor:p},m,v)=>{let w;for(;d&&d!==p;)w=h(d),r(d,m,v),d=w;r(p,m,v)},P=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=h(d),s(d),d=m;s(p)},U=(d,p,m,v,w,b,A,C,T)=>{p.type==="svg"?A="svg":p.type==="math"&&(A="mathml"),d==null?J(p,m,v,w,b,A,C,T):S(d,p,w,b,A,C,T)},J=(d,p,m,v,w,b,A,C)=>{let T,E;const{props:V,shapeFlag:O,transition:B,dirs:K}=d;if(T=d.el=o(d.type,b,V&&V.is,V),O&8?u(T,d.children):O&16&&H(d.children,T,null,v,w,ws(d,b),A,C),K&&Wt(d,null,v,"created"),q(T,d,d.scopeId,A,v),V){for(const ce in V)ce!=="value"&&!Nn(ce)&&i(T,ce,null,V[ce],b,v);"value"in V&&i(T,"value",null,V.value,b),(E=V.onVnodeBeforeMount)&&Xe(E,v,d)}K&&Wt(d,null,v,"beforeMount");const X=Zf(w,B);X&&B.beforeEnter(T),r(T,p,m),((E=V&&V.onVnodeMounted)||X||K)&&we(()=>{E&&Xe(E,v,d),X&&B.enter(T),K&&Wt(d,null,v,"mounted")},w)},q=(d,p,m,v,w)=>{if(m&&g(d,m),v)for(let b=0;b<v.length;b++)g(d,v[b]);if(w){let b=w.subTree;if(p===b||Zc(b.type)&&(b.ssContent===p||b.ssFallback===p)){const A=w.vnode;q(d,A,A.scopeId,A.slotScopeIds,w.parent)}}},H=(d,p,m,v,w,b,A,C,T=0)=>{for(let E=T;E<d.length;E++){const V=d[E]=C?Pt(d[E]):tt(d[E]);I(null,V,p,m,v,w,b,A,C)}},S=(d,p,m,v,w,b,A)=>{const C=p.el=d.el;let{patchFlag:T,dynamicChildren:E,dirs:V}=p;T|=d.patchFlag&16;const O=d.props||ae,B=p.props||ae;let K;if(m&&Kt(m,!1),(K=B.onVnodeBeforeUpdate)&&Xe(K,m,p,d),V&&Wt(p,d,m,"beforeUpdate"),m&&Kt(m,!0),(O.innerHTML&&B.innerHTML==null||O.textContent&&B.textContent==null)&&u(C,""),E?$(d.dynamicChildren,E,C,m,v,ws(p,w),b):A||ee(d,p,C,null,m,v,ws(p,w),b,!1),T>0){if(T&16)Y(C,O,B,m,w);else if(T&2&&O.class!==B.class&&i(C,"class",null,B.class,w),T&4&&i(C,"style",O.style,B.style,w),T&8){const X=p.dynamicProps;for(let ce=0;ce<X.length;ce++){const re=X[ce],Pe=O[re],Ae=B[re];(Ae!==Pe||re==="value")&&i(C,re,Pe,Ae,w,m)}}T&1&&d.children!==p.children&&u(C,p.children)}else!A&&E==null&&Y(C,O,B,m,w);((K=B.onVnodeUpdated)||V)&&we(()=>{K&&Xe(K,m,p,d),V&&Wt(p,d,m,"updated")},v)},$=(d,p,m,v,w,b,A)=>{for(let C=0;C<p.length;C++){const T=d[C],E=p[C],V=T.el&&(T.type===et||!Yt(T,E)||T.shapeFlag&70)?f(T.el):m;I(T,E,V,null,v,w,b,A,!0)}},Y=(d,p,m,v,w)=>{if(p!==m){if(p!==ae)for(const b in p)!Nn(b)&&!(b in m)&&i(d,b,p[b],null,w,v);for(const b in m){if(Nn(b))continue;const A=m[b],C=p[b];A!==C&&b!=="value"&&i(d,b,C,A,w,v)}"value"in m&&i(d,"value",p.value,m.value,w)}},k=(d,p,m,v,w,b,A,C,T)=>{const E=p.el=d?d.el:c(""),V=p.anchor=d?d.anchor:c("");let{patchFlag:O,dynamicChildren:B,slotScopeIds:K}=p;K&&(C=C?C.concat(K):K),d==null?(r(E,m,v),r(V,m,v),H(p.children||[],m,V,w,b,A,C,T)):O>0&&O&64&&B&&d.dynamicChildren?($(d.dynamicChildren,B,m,w,b,A,C),(p.key!=null||w&&p===w.subTree)&&ki(d,p,!0)):ee(d,p,m,V,w,b,A,C,T)},Q=(d,p,m,v,w,b,A,C,T)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?w.ctx.activate(p,m,v,A,T):he(p,m,v,w,b,A,T):ye(d,p,T)},he=(d,p,m,v,w,b,A)=>{const C=d.component=vd(d,v,w);if(es(d)&&(C.ctx.renderer=D),bd(C,!1,A),C.asyncDep){if(w&&w.registerDep(C,se,A),!d.el){const T=C.subTree=Ne(Re);L(null,T,p,m)}}else se(C,d,p,m,w,b,A)},ye=(d,p,m)=>{const v=p.component=d.component;if(cd(d,p,m))if(v.asyncDep&&!v.asyncResolved){G(v,p,m);return}else v.next=p,v.update();else p.el=d.el,v.vnode=p},se=(d,p,m,v,w,b,A)=>{const C=()=>{if(d.isMounted){let{next:O,bu:B,u:K,parent:X,vnode:ce}=d;{const Ye=Jc(d);if(Ye){O&&(O.el=ce.el,G(d,O,A)),Ye.asyncDep.then(()=>{d.isUnmounted||C()});return}}let re=O,Pe;Kt(d,!1),O?(O.el=ce.el,G(d,O,A)):O=ce,B&&ps(B),(Pe=O.props&&O.props.onVnodeBeforeUpdate)&&Xe(Pe,X,O,ce),Kt(d,!0);const Ae=mo(d),Je=d.subTree;d.subTree=Ae,I(Je,Ae,f(Je.el),y(Je),d,w,b),O.el=Ae.el,re===null&&ld(d,Ae.el),K&&we(K,w),(Pe=O.props&&O.props.onVnodeUpdated)&&we(()=>Xe(Pe,X,O,ce),w)}else{let O;const{el:B,props:K}=p,{bm:X,m:ce,parent:re,root:Pe,type:Ae}=d,Je=Un(p);Kt(d,!1),X&&ps(X),!Je&&(O=K&&K.onVnodeBeforeMount)&&Xe(O,re,p),Kt(d,!0);{Pe.ce&&Pe.ce._injectChildStyle(Ae);const Ye=d.subTree=mo(d);I(null,Ye,m,v,d,w,b),p.el=Ye.el}if(ce&&we(ce,w),!Je&&(O=K&&K.onVnodeMounted)){const Ye=p;we(()=>Xe(O,re,Ye),w)}(p.shapeFlag&256||re&&Un(re.vnode)&&re.vnode.shapeFlag&256)&&d.a&&we(d.a,w),d.isMounted=!0,p=m=v=null}};d.scope.on();const T=d.effect=new ec(C);d.scope.off();const E=d.update=T.run.bind(T),V=d.job=T.runIfDirty.bind(T);V.i=d,V.id=d.uid,T.scheduler=()=>Ri(V),Kt(d,!0),E()},G=(d,p,m)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,zf(d,p.props,v,m),Yf(d,p.children,m),$t(),ro(d),Bt()},ee=(d,p,m,v,w,b,A,C,T=!1)=>{const E=d&&d.children,V=d?d.shapeFlag:0,O=p.children,{patchFlag:B,shapeFlag:K}=p;if(B>0){if(B&128){Et(E,O,m,v,w,b,A,C,T);return}else if(B&256){at(E,O,m,v,w,b,A,C,T);return}}K&8?(V&16&&Le(E,w,b),O!==E&&u(m,O)):V&16?K&16?Et(E,O,m,v,w,b,A,C,T):Le(E,w,b,!0):(V&8&&u(m,""),K&16&&H(O,m,v,w,b,A,C,T))},at=(d,p,m,v,w,b,A,C,T)=>{d=d||hn,p=p||hn;const E=d.length,V=p.length,O=Math.min(E,V);let B;for(B=0;B<O;B++){const K=p[B]=T?Pt(p[B]):tt(p[B]);I(d[B],K,m,null,w,b,A,C,T)}E>V?Le(d,w,b,!0,!1,O):H(p,m,v,w,b,A,C,T,O)},Et=(d,p,m,v,w,b,A,C,T)=>{let E=0;const V=p.length;let O=d.length-1,B=V-1;for(;E<=O&&E<=B;){const K=d[E],X=p[E]=T?Pt(p[E]):tt(p[E]);if(Yt(K,X))I(K,X,m,null,w,b,A,C,T);else break;E++}for(;E<=O&&E<=B;){const K=d[O],X=p[B]=T?Pt(p[B]):tt(p[B]);if(Yt(K,X))I(K,X,m,null,w,b,A,C,T);else break;O--,B--}if(E>O){if(E<=B){const K=B+1,X=K<V?p[K].el:v;for(;E<=B;)I(null,p[E]=T?Pt(p[E]):tt(p[E]),m,X,w,b,A,C,T),E++}}else if(E>B)for(;E<=O;)Ce(d[E],w,b,!0),E++;else{const K=E,X=E,ce=new Map;for(E=X;E<=B;E++){const Oe=p[E]=T?Pt(p[E]):tt(p[E]);Oe.key!=null&&ce.set(Oe.key,E)}let re,Pe=0;const Ae=B-X+1;let Je=!1,Ye=0;const Cn=new Array(Ae);for(E=0;E<Ae;E++)Cn[E]=0;for(E=K;E<=O;E++){const Oe=d[E];if(Pe>=Ae){Ce(Oe,w,b,!0);continue}let Qe;if(Oe.key!=null)Qe=ce.get(Oe.key);else for(re=X;re<=B;re++)if(Cn[re-X]===0&&Yt(Oe,p[re])){Qe=re;break}Qe===void 0?Ce(Oe,w,b,!0):(Cn[Qe-X]=E+1,Qe>=Ye?Ye=Qe:Je=!0,I(Oe,p[Qe],m,null,w,b,A,C,T),Pe++)}const Qi=Je?ed(Cn):hn;for(re=Qi.length-1,E=Ae-1;E>=0;E--){const Oe=X+E,Qe=p[Oe],Xi=Oe+1<V?p[Oe+1].el:v;Cn[E]===0?I(null,Qe,m,Xi,w,b,A,C,T):Je&&(re<0||E!==Qi[re]?Ge(Qe,m,Xi,2):re--)}}},Ge=(d,p,m,v,w=null)=>{const{el:b,type:A,transition:C,children:T,shapeFlag:E}=d;if(E&6){Ge(d.component.subTree,p,m,v);return}if(E&128){d.suspense.move(p,m,v);return}if(E&64){A.move(d,p,m,D);return}if(A===et){r(b,p,m);for(let O=0;O<T.length;O++)Ge(T[O],p,m,v);r(d.anchor,p,m);return}if(A===Es){M(d,p,m);return}if(v!==2&&E&1&&C)if(v===0)C.beforeEnter(b),r(b,p,m),we(()=>C.enter(b),w);else{const{leave:O,delayLeave:B,afterLeave:K}=C,X=()=>r(b,p,m),ce=()=>{O(b,()=>{X(),K&&K()})};B?B(b,X,ce):ce()}else r(b,p,m)},Ce=(d,p,m,v=!1,w=!1)=>{const{type:b,props:A,ref:C,children:T,dynamicChildren:E,shapeFlag:V,patchFlag:O,dirs:B,cacheIndex:K}=d;if(O===-2&&(w=!1),C!=null&&Lr(C,null,m,d,!0),K!=null&&(p.renderCache[K]=void 0),V&256){p.ctx.deactivate(d);return}const X=V&1&&B,ce=!Un(d);let re;if(ce&&(re=A&&A.onVnodeBeforeUnmount)&&Xe(re,p,d),V&6)gr(d.component,m,v);else{if(V&128){d.suspense.unmount(m,v);return}X&&Wt(d,null,p,"beforeUnmount"),V&64?d.type.remove(d,p,m,D,v):E&&!E.hasOnce&&(b!==et||O>0&&O&64)?Le(E,p,m,!1,!0):(b===et&&O&384||!w&&V&16)&&Le(T,p,m),v&&an(d)}(ce&&(re=A&&A.onVnodeUnmounted)||X)&&we(()=>{re&&Xe(re,p,d),X&&Wt(d,null,p,"unmounted")},m)},an=d=>{const{type:p,el:m,anchor:v,transition:w}=d;if(p===et){cn(m,v);return}if(p===Es){P(d);return}const b=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:A,delayLeave:C}=w,T=()=>A(m,b);C?C(d.el,b,T):T()}else b()},cn=(d,p)=>{let m;for(;d!==p;)m=h(d),s(d),d=m;s(p)},gr=(d,p,m)=>{const{bum:v,scope:w,job:b,subTree:A,um:C,m:T,a:E}=d;go(T),go(E),v&&ps(v),w.stop(),b&&(b.flags|=8,Ce(A,d,p,m)),C&&we(C,p),we(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Le=(d,p,m,v=!1,w=!1,b=0)=>{for(let A=b;A<d.length;A++)Ce(d[A],p,m,v,w)},y=d=>{if(d.shapeFlag&6)return y(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=h(d.anchor||d.el),m=p&&p[Ic];return m?h(m):p};let N=!1;const R=(d,p,m)=>{d==null?p._vnode&&Ce(p._vnode,null,null,!0):I(p._vnode||null,d,p,null,null,null,m),p._vnode=d,N||(N=!0,ro(),bc(),N=!1)},D={p:I,um:Ce,m:Ge,r:an,mt:he,mc:H,pc:ee,pbc:$,n:y,o:e};return{render:R,hydrate:void 0,createApp:jf(R)}}function ws({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Kt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Zf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ki(e,t,n=!1){const r=e.children,s=t.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Pt(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&ki(o,c)),c.type===rs&&(c.el=o.el)}}function ed(e){const t=e.slice(),n=[0];let r,s,i,o,c;const a=e.length;for(r=0;r<a;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,e[n[c]]<l?i=c+1:o=c;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Jc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Jc(t)}function go(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const td=Symbol.for("v-scx"),nd=()=>He(td);function Hn(e,t,n){return Yc(e,t,n)}function Yc(e,t,n=ae){const{immediate:r,deep:s,flush:i,once:o}=n,c=ge({},n),a=t&&r||!t&&i!=="post";let l;if(Qn){if(i==="sync"){const g=nd();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!a){const g=()=>{};return g.stop=nt,g.resume=nt,g.pause=nt,g}}const u=pe;c.call=(g,_,I)=>Ke(g,u,_,I);let f=!1;i==="post"?c.scheduler=g=>{we(g,u&&u.suspense)}:i!=="sync"&&(f=!0,c.scheduler=(g,_)=>{_?g():Ri(g)}),c.augmentJob=g=>{t&&(g.flags|=4),f&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const h=hf(e,t,c);return Qn&&(l?l.push(h):a&&h()),h}function rd(e,t,n){const r=this.proxy,s=fe(e)?e.includes(".")?Qc(r,e):()=>r[e]:e.bind(r,r);let i;z(t)?i=t:(i=t.handler,n=t);const o=ar(this),c=Yc(s,i.bind(r),n);return o(),c}function Qc(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const sd=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${$e(t)}Modifiers`]||e[`${sn(t)}Modifiers`];function id(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ae;let s=n;const i=t.startsWith("update:"),o=i&&sd(r,t.slice(7));o&&(o.trim&&(s=n.map(u=>fe(u)?u.trim():u)),o.number&&(s=n.map(Ru)));let c,a=r[c=hs(t)]||r[c=hs($e(t))];!a&&i&&(a=r[c=hs(sn(t))]),a&&Ke(a,e,6,s);const l=r[c+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Ke(l,e,6,s)}}function Xc(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},c=!1;if(!z(e)){const a=l=>{const u=Xc(l,t,!0);u&&(c=!0,ge(o,u))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!c?(ue(e)&&r.set(e,null),null):(W(i)?i.forEach(a=>o[a]=null):ge(o,i),ue(e)&&r.set(e,o),o)}function ns(e,t){return!e||!zr(t)?!1:(t=t.slice(2).replace(/Once$/,""),ne(e,t[0].toLowerCase()+t.slice(1))||ne(e,sn(t))||ne(e,t))}function mo(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:l,renderCache:u,props:f,data:h,setupState:g,ctx:_,inheritAttrs:I}=e,F=Nr(e);let L,x;try{if(n.shapeFlag&4){const P=s||r,U=P;L=tt(l.call(U,P,u,f,g,h,_)),x=c}else{const P=t;L=tt(P.length>1?P(f,{attrs:c,slots:o,emit:a}):P(f,null)),x=t.props?c:od(c)}}catch(P){$n.length=0,Zr(P,e,1),L=Ne(Re)}let M=L;if(x&&I!==!1){const P=Object.keys(x),{shapeFlag:U}=M;P.length&&U&7&&(i&&P.some(gi)&&(x=ad(x,i)),M=Ft(M,x,!1,!0))}return n.dirs&&(M=Ft(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&Jn(M,n.transition),L=M,Nr(F),L}const od=e=>{let t;for(const n in e)(n==="class"||n==="style"||zr(n))&&((t||(t={}))[n]=e[n]);return t},ad=(e,t)=>{const n={};for(const r in e)(!gi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function cd(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:c,patchFlag:a}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?_o(r,o,l):!!o;if(a&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!ns(l,h))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?_o(r,o,l):!0:!!o;return!1}function _o(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!ns(n,i))return!0}return!1}function ld({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Zc=e=>e.__isSuspense;function ud(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):mf(e)}const et=Symbol.for("v-fgt"),rs=Symbol.for("v-txt"),Re=Symbol.for("v-cmt"),Es=Symbol.for("v-stc"),$n=[];let xe=null;function el(e=!1){$n.push(xe=e?null:[])}function fd(){$n.pop(),xe=$n[$n.length-1]||null}let Yn=1;function vo(e,t=!1){Yn+=e,e<0&&xe&&t&&(xe.hasOnce=!0)}function tl(e){return e.dynamicChildren=Yn>0?xe||hn:null,fd(),Yn>0&&xe&&xe.push(e),e}function Yv(e,t,n,r,s,i){return tl(sl(e,t,n,r,s,i,!0))}function nl(e,t,n,r,s){return tl(Ne(e,t,n,r,s,!0))}function Dr(e){return e?e.__v_isVNode===!0:!1}function Yt(e,t){return e.type===t.type&&e.key===t.key}const rl=({key:e})=>e??null,Sr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?fe(e)||de(e)||z(e)?{i:Se,r:e,k:t,f:!!n}:e:null);function sl(e,t=null,n=null,r=0,s=null,i=e===et?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&rl(t),ref:t&&Sr(t),scopeId:Ec,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Se};return c?(xi(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=fe(n)?8:16),Yn>0&&!o&&xe&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&xe.push(a),a}const Ne=dd;function dd(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Lf)&&(e=Re),Dr(e)){const c=Ft(e,t,!0);return n&&xi(c,n),Yn>0&&!i&&xe&&(c.shapeFlag&6?xe[xe.indexOf(e)]=c:xe.push(c)),c.patchFlag=-2,c}if(Td(e)&&(e=e.__vccOpts),t){t=hd(t);let{class:c,style:a}=t;c&&!fe(c)&&(t.class=yi(c)),ue(a)&&(Ci(a)&&!W(a)&&(a=ge({},a)),t.style=vi(a))}const o=fe(e)?1:Zc(e)?128:Sc(e)?64:ue(e)?4:z(e)?2:0;return sl(e,t,n,r,s,o,i,!0)}function hd(e){return e?Ci(e)||Vc(e)?ge({},e):e:null}function Ft(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=e,l=t?gd(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&rl(l),ref:t&&t.ref?n&&i?W(i)?i.concat(Sr(t)):[i,Sr(t)]:Sr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==et?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ft(e.ssContent),ssFallback:e.ssFallback&&Ft(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&Jn(u,a.clone(u)),u}function pd(e=" ",t=0){return Ne(rs,null,e,t)}function Qv(e="",t=!1){return t?(el(),nl(Re,null,e)):Ne(Re,null,e)}function tt(e){return e==null||typeof e=="boolean"?Ne(Re):W(e)?Ne(et,null,e.slice()):Dr(e)?Pt(e):Ne(rs,null,String(e))}function Pt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ft(e)}function xi(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(W(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),xi(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Vc(t)?t._ctx=Se:s===3&&Se&&(Se.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:Se},n=32):(t=String(t),r&64?(n=16,t=[pd(t)]):n=8);e.children=t,e.shapeFlag|=n}function gd(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=yi([t.class,r.class]));else if(s==="style")t.style=vi([t.style,r.style]);else if(zr(s)){const i=t[s],o=r[s];o&&i!==o&&!(W(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Xe(e,t,n,r=null){Ke(e,t,7,[n,r])}const md=Hc();let _d=0;function vd(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||md,i={uid:_d++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wc(r,s),emitsOptions:Xc(r,s),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=id.bind(null,i),e.ce&&e.ce(i),i}let pe=null;const yd=()=>pe||Se;let Ur,Ys;{const e=Yr(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ur=t("__VUE_INSTANCE_SETTERS__",n=>pe=n),Ys=t("__VUE_SSR_SETTERS__",n=>Qn=n)}const ar=e=>{const t=pe;return Ur(e),e.scope.on(),()=>{e.scope.off(),Ur(t)}},yo=()=>{pe&&pe.scope.off(),Ur(null)};function il(e){return e.vnode.shapeFlag&4}let Qn=!1;function bd(e,t=!1,n=!1){t&&Ys(t);const{props:r,children:s}=e.vnode,i=il(e);Kf(e,r,i,t),Jf(e,s,n);const o=i?wd(e,t):void 0;return t&&Ys(!1),o}function wd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Df);const{setup:r}=n;if(r){$t();const s=e.setupContext=r.length>1?Id(e):null,i=ar(e),o=or(r,e,0,[e.props,s]),c=Wa(o);if(Bt(),i(),(c||e.sp)&&!Un(e)&&xc(e),c){if(o.then(yo,yo),t)return o.then(a=>{bo(e,a)}).catch(a=>{Zr(a,e,0)});e.asyncDep=o}else bo(e,o)}else ol(e)}function bo(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=_c(t)),ol(e)}function ol(e,t,n){const r=e.type;e.render||(e.render=r.render||nt);{const s=ar(e);$t();try{Uf(e)}finally{Bt(),s()}}}const Ed={get(e,t){return _e(e,"get",""),e[t]}};function Id(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Ed),slots:e.slots,emit:e.emit,expose:t}}function ss(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(_c(Sn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Fn)return Fn[n](e)},has(t,n){return n in t||n in Fn}})):e.proxy}function Sd(e,t=!0){return z(e)?e.displayName||e.name:e.name||t&&e.__name}function Td(e){return z(e)&&"__vccOpts"in e}const De=(e,t)=>ff(e,t,Qn);function Ni(e,t,n){const r=arguments.length;return r===2?ue(t)&&!W(t)?Dr(t)?Ne(e,null,[t]):Ne(e,t):Ne(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Dr(n)&&(n=[n]),Ne(e,t,n))}const Cd="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qs;const wo=typeof window<"u"&&window.trustedTypes;if(wo)try{Qs=wo.createPolicy("vue",{createHTML:e=>e})}catch{}const al=Qs?e=>Qs.createHTML(e):e=>e,Ad="http://www.w3.org/2000/svg",Rd="http://www.w3.org/1998/Math/MathML",ft=typeof document<"u"?document:null,Eo=ft&&ft.createElement("template"),Pd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?ft.createElementNS(Ad,e):t==="mathml"?ft.createElementNS(Rd,e):n?ft.createElement(e,{is:n}):ft.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Eo.innerHTML=al(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const c=Eo.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},It="transition",Rn="animation",Xn=Symbol("_vtc"),cl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Od=ge({},Ac,cl),kd=e=>(e.displayName="Transition",e.props=Od,e),Xv=kd((e,{slots:t})=>Ni(wf,xd(e),t)),zt=(e,t=[])=>{W(e)?e.forEach(n=>n(...t)):e&&e(...t)},Io=e=>e?W(e)?e.some(t=>t.length>1):e.length>1:!1;function xd(e){const t={};for(const k in e)k in cl||(t[k]=e[k]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:l=o,appearToClass:u=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,_=Nd(s),I=_&&_[0],F=_&&_[1],{onBeforeEnter:L,onEnter:x,onEnterCancelled:M,onLeave:P,onLeaveCancelled:U,onBeforeAppear:J=L,onAppear:q=x,onAppearCancelled:H=M}=t,S=(k,Q,he,ye)=>{k._enterCancelled=ye,qt(k,Q?u:c),qt(k,Q?l:o),he&&he()},$=(k,Q)=>{k._isLeaving=!1,qt(k,f),qt(k,g),qt(k,h),Q&&Q()},Y=k=>(Q,he)=>{const ye=k?q:x,se=()=>S(Q,k,he);zt(ye,[Q,se]),So(()=>{qt(Q,k?a:i),lt(Q,k?u:c),Io(ye)||To(Q,r,I,se)})};return ge(t,{onBeforeEnter(k){zt(L,[k]),lt(k,i),lt(k,o)},onBeforeAppear(k){zt(J,[k]),lt(k,a),lt(k,l)},onEnter:Y(!1),onAppear:Y(!0),onLeave(k,Q){k._isLeaving=!0;const he=()=>$(k,Q);lt(k,f),k._enterCancelled?(lt(k,h),Ro()):(Ro(),lt(k,h)),So(()=>{k._isLeaving&&(qt(k,f),lt(k,g),Io(P)||To(k,r,F,he))}),zt(P,[k,he])},onEnterCancelled(k){S(k,!1,void 0,!0),zt(M,[k])},onAppearCancelled(k){S(k,!0,void 0,!0),zt(H,[k])},onLeaveCancelled(k){$(k),zt(U,[k])}})}function Nd(e){if(e==null)return null;if(ue(e))return[Is(e.enter),Is(e.leave)];{const t=Is(e);return[t,t]}}function Is(e){return Pu(e)}function lt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Xn]||(e[Xn]=new Set)).add(t)}function qt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[Xn];n&&(n.delete(t),n.size||(e[Xn]=void 0))}function So(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Ld=0;function To(e,t,n,r){const s=e._endId=++Ld,i=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:a}=Md(e,t);if(!o)return r();const l=o+"end";let u=0;const f=()=>{e.removeEventListener(l,h),i()},h=g=>{g.target===e&&++u>=a&&f()};setTimeout(()=>{u<a&&f()},c+1),e.addEventListener(l,h)}function Md(e,t){const n=window.getComputedStyle(e),r=_=>(n[_]||"").split(", "),s=r(`${It}Delay`),i=r(`${It}Duration`),o=Co(s,i),c=r(`${Rn}Delay`),a=r(`${Rn}Duration`),l=Co(c,a);let u=null,f=0,h=0;t===It?o>0&&(u=It,f=o,h=i.length):t===Rn?l>0&&(u=Rn,f=l,h=a.length):(f=Math.max(o,l),u=f>0?o>l?It:Rn:null,h=u?u===It?i.length:a.length:0);const g=u===It&&/\b(transform|all)(,|$)/.test(r(`${It}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:g}}function Co(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Ao(n)+Ao(e[r])))}function Ao(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ro(){return document.body.offsetHeight}function Dd(e,t,n){const r=e[Xn];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Po=Symbol("_vod"),Ud=Symbol("_vsh"),Fd=Symbol(""),Hd=/(^|;)\s*display\s*:/;function $d(e,t,n){const r=e.style,s=fe(n);let i=!1;if(n&&!s){if(t)if(fe(t))for(const o of t.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Tr(r,c,"")}else for(const o in t)n[o]==null&&Tr(r,o,"");for(const o in n)o==="display"&&(i=!0),Tr(r,o,n[o])}else if(s){if(t!==n){const o=r[Fd];o&&(n+=";"+o),r.cssText=n,i=Hd.test(n)}}else t&&e.removeAttribute("style");Po in e&&(e[Po]=i?r.display:"",e[Ud]&&(r.display="none"))}const Oo=/\s*!important$/;function Tr(e,t,n){if(W(n))n.forEach(r=>Tr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Bd(e,t);Oo.test(n)?e.setProperty(sn(r),n.replace(Oo,""),"important"):e[r]=n}}const ko=["Webkit","Moz","ms"],Ss={};function Bd(e,t){const n=Ss[t];if(n)return n;let r=$e(t);if(r!=="filter"&&r in e)return Ss[t]=r;r=Jr(r);for(let s=0;s<ko.length;s++){const i=ko[s]+r;if(i in e)return Ss[t]=i}return t}const xo="http://www.w3.org/1999/xlink";function No(e,t,n,r,s,i=Mu(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(xo,t.slice(6,t.length)):e.setAttributeNS(xo,t,n):n==null||i&&!Ga(n)?e.removeAttribute(t):e.setAttribute(t,i?"":Ht(n)?String(n):n)}function Lo(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?al(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(c!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ga(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Vd(e,t,n,r){e.addEventListener(t,n,r)}function jd(e,t,n,r){e.removeEventListener(t,n,r)}const Mo=Symbol("_vei");function Wd(e,t,n,r,s=null){const i=e[Mo]||(e[Mo]={}),o=i[t];if(r&&o)o.value=r;else{const[c,a]=Kd(t);if(r){const l=i[t]=Gd(r,s);Vd(e,c,l,a)}else o&&(jd(e,c,o,a),i[t]=void 0)}}const Do=/(?:Once|Passive|Capture)$/;function Kd(e){let t;if(Do.test(e)){t={};let r;for(;r=e.match(Do);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):sn(e.slice(2)),t]}let Ts=0;const zd=Promise.resolve(),qd=()=>Ts||(zd.then(()=>Ts=0),Ts=Date.now());function Gd(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ke(Jd(r,n.value),t,5,[r])};return n.value=e,n.attached=qd(),n}function Jd(e,t){if(W(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Uo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Yd=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?Dd(e,r,o):t==="style"?$d(e,n,r):zr(t)?gi(t)||Wd(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Qd(e,t,r,o))?(Lo(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&No(e,t,r,o,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!fe(r))?Lo(e,$e(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),No(e,t,r,o))};function Qd(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Uo(t)&&z(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Uo(t)&&fe(n)?!1:t in e}const Xd=ge({patchProp:Yd},Pd);let Fo;function Zd(){return Fo||(Fo=Qf(Xd))}const eh=(...e)=>{const t=Zd().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=nh(r);if(!s)return;const i=t._component;!z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,th(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function th(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function nh(e){return fe(e)?document.querySelector(e):e}function Li(e,t,n,r){return Object.defineProperty(e,t,{get:n,set:r,enumerable:!0}),e}const tn=Xr(!1);let Xs;function rh(e,t){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[4]||n[2]||"0",platform:t[0]||""}}function sh(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const ll="ontouchstart"in window||window.navigator.maxTouchPoints>0;function ih(e){const t=e.toLowerCase(),n=sh(t),r=rh(t,n),s={mobile:!1,desktop:!1,cordova:!1,capacitor:!1,nativeMobile:!1,electron:!1,bex:!1,linux:!1,mac:!1,win:!1,cros:!1,chrome:!1,firefox:!1,opera:!1,safari:!1,vivaldi:!1,edge:!1,edgeChromium:!1,ie:!1,webkit:!1,android:!1,ios:!1,ipad:!1,iphone:!1,ipod:!1,kindle:!1,winphone:!1,blackberry:!1,playbook:!1,silk:!1};r.browser&&(s[r.browser]=!0,s.version=r.version,s.versionNumber=parseInt(r.version,10)),r.platform&&(s[r.platform]=!0);const i=s.android||s.ios||s.bb||s.blackberry||s.ipad||s.iphone||s.ipod||s.kindle||s.playbook||s.silk||s["windows phone"];if(i===!0||t.indexOf("mobile")!==-1?s.mobile=!0:s.desktop=!0,s["windows phone"]&&(s.winphone=!0,delete s["windows phone"]),s.edga||s.edgios||s.edg?(s.edge=!0,r.browser="edge"):s.crios?(s.chrome=!0,r.browser="chrome"):s.fxios&&(s.firefox=!0,r.browser="firefox"),(s.ipod||s.ipad||s.iphone)&&(s.ios=!0),s.vivaldi&&(r.browser="vivaldi",s.vivaldi=!0),(s.chrome||s.opr||s.safari||s.vivaldi||s.mobile===!0&&s.ios!==!0&&i!==!0)&&(s.webkit=!0),s.opr&&(r.browser="opera",s.opera=!0),s.safari&&(s.blackberry||s.bb?(r.browser="blackberry",s.blackberry=!0):s.playbook?(r.browser="playbook",s.playbook=!0):s.android?(r.browser="android",s.android=!0):s.kindle?(r.browser="kindle",s.kindle=!0):s.silk&&(r.browser="silk",s.silk=!0)),s.name=r.browser,s.platform=r.platform,t.indexOf("electron")!==-1)s.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)s.bex=!0;else{if(window.Capacitor!==void 0?(s.capacitor=!0,s.nativeMobile=!0,s.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(s.cordova=!0,s.nativeMobile=!0,s.nativeMobileWrapper="cordova"),tn.value===!0&&(Xs={is:{...s}}),ll===!0&&s.mac===!0&&(s.desktop===!0&&s.safari===!0||s.nativeMobile===!0&&s.android!==!0&&s.ios!==!0&&s.ipad!==!0)){delete s.mac,delete s.desktop;const o=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(s,{mobile:!0,ios:!0,platform:o,[o]:!0})}s.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete s.desktop,s.mobile=!0)}return s}const Ho=navigator.userAgent||navigator.vendor||window.opera,oh={has:{touch:!1,webStorage:!1},within:{iframe:!1}},rt={userAgent:Ho,is:ih(Ho),has:{touch:ll},within:{iframe:window.self!==window.top}},Zs={install(e){const{$q:t}=e;tn.value===!0?(e.onSSRHydrated.push(()=>{Object.assign(t.platform,rt),tn.value=!1}),t.platform=on(this)):t.platform=this}};{let e;Li(rt.has,"webStorage",()=>{if(e!==void 0)return e;try{if(window.localStorage)return e=!0,!0}catch{}return e=!1,!1}),Object.assign(Zs,rt),tn.value===!0&&(Object.assign(Zs,Xs,oh),Xs=null)}function Zv(e){return Sn(Pi(e))}function ey(e){return Sn(e)}const is=(e,t)=>{const n=on(e);for(const r in e)Li(t,r,()=>n[r],s=>{n[r]=s});return t},os={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(os,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch{}function Zn(){}function ty(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function ny(e){if(e.path)return e.path;if(e.composedPath)return e.composedPath();const t=[];let n=e.target;for(;n;){if(t.push(n),n.tagName==="HTML")return t.push(document),t.push(window),t;n=n.parentElement}}function ry(e){e.stopPropagation()}function sy(e){e.cancelable!==!1&&e.preventDefault()}function iy(e){e.cancelable!==!1&&e.preventDefault(),e.stopPropagation()}function oy(e,t,n){const r=`__q_${t}_evt`;e[r]=e[r]!==void 0?e[r].concat(n):n,n.forEach(s=>{s[0].addEventListener(s[1],e[s[2]],os[s[3]])})}function ay(e,t){const n=`__q_${t}_evt`;e[n]!==void 0&&(e[n].forEach(r=>{r[0].removeEventListener(r[1],e[r[2]],os[r[3]])}),e[n]=void 0)}function ah(e,t=250,n){let r=null;function s(){const i=arguments,o=()=>{r=null,e.apply(this,i)};r!==null&&clearTimeout(r),r=setTimeout(o,t)}return s.cancel=()=>{r!==null&&clearTimeout(r)},s}const Cs=["sm","md","lg","xl"],{passive:$o}=os,ch=is({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:Zn,setDebounce:Zn,install({$q:e,onSSRHydrated:t}){if(e.screen=this,this.__installed===!0){e.config.screen!==void 0&&(e.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,r=n||window,s=document.scrollingElement||document.documentElement,i=n===void 0||rt.is.mobile===!0?()=>[Math.max(window.innerWidth,s.clientWidth),Math.max(window.innerHeight,s.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-s.clientWidth,n.height*n.scale+window.innerHeight-s.clientHeight],o=e.config.screen?.bodyClasses===!0;this.__update=f=>{const[h,g]=i();if(g!==this.height&&(this.height=g),h!==this.width)this.width=h;else if(f!==!0)return;let _=this.sizes;this.gt.xs=h>=_.sm,this.gt.sm=h>=_.md,this.gt.md=h>=_.lg,this.gt.lg=h>=_.xl,this.lt.sm=h<_.sm,this.lt.md=h<_.md,this.lt.lg=h<_.lg,this.lt.xl=h<_.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,_=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",_!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${_}`)),this.name=_)};let c,a={},l=16;this.setSizes=f=>{Cs.forEach(h=>{f[h]!==void 0&&(a[h]=f[h])})},this.setDebounce=f=>{l=f};const u=()=>{const f=getComputedStyle(document.body);f.getPropertyValue("--q-size-sm")&&Cs.forEach(h=>{this.sizes[h]=parseInt(f.getPropertyValue(`--q-size-${h}`),10)}),this.setSizes=h=>{Cs.forEach(g=>{h[g]&&(this.sizes[g]=h[g])}),this.__update(!0)},this.setDebounce=h=>{c!==void 0&&r.removeEventListener("resize",c,$o),c=h>0?ah(this.__update,h):this.__update,r.addEventListener("resize",c,$o)},this.setDebounce(l),Object.keys(a).length!==0?(this.setSizes(a),a=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};tn.value===!0?t.push(u):u()}}),me=is({isActive:!1,mode:!1},{__media:void 0,set(e){me.mode=e,e==="auto"?(me.__media===void 0&&(me.__media=window.matchMedia("(prefers-color-scheme: dark)"),me.__updateMedia=()=>{me.set("auto")},me.__media.addListener(me.__updateMedia)),e=me.__media.matches):me.__media!==void 0&&(me.__media.removeListener(me.__updateMedia),me.__media=void 0),me.isActive=e===!0,document.body.classList.remove(`body--${e===!0?"light":"dark"}`),document.body.classList.add(`body--${e===!0?"dark":"light"}`)},toggle(){me.set(me.isActive===!1)},install({$q:e,ssrContext:t}){const{dark:n}=e.config;e.dark=this,this.__installed!==!0&&this.set(n!==void 0?n:!1)}});function lh(e,t,n=document.body){if(typeof e!="string")throw new TypeError("Expected a string as propName");if(typeof t!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${e}`,t)}let ul=!1;function uh(e){ul=e.isComposing===!0}function fh(e){return ul===!0||e!==Object(e)||e.isComposing===!0||e.qKeyEvent===!0}function cy(e,t){return fh(e)===!0?!1:[].concat(t).includes(e.keyCode)}function fl(e){if(e.ios===!0)return"ios";if(e.android===!0)return"android"}function dh({is:e,has:t,within:n},r){const s=[e.desktop===!0?"desktop":"mobile",`${t.touch===!1?"no-":""}touch`];if(e.mobile===!0){const i=fl(e);i!==void 0&&s.push("platform-"+i)}if(e.nativeMobile===!0){const i=e.nativeMobileWrapper;s.push(i),s.push("native-mobile"),e.ios===!0&&(r[i]===void 0||r[i].iosStatusBarPadding!==!1)&&s.push("q-ios-padding")}else e.electron===!0?s.push("electron"):e.bex===!0&&s.push("bex");return n.iframe===!0&&s.push("within-iframe"),s}function hh(){const{is:e}=rt,t=document.body.className,n=new Set(t.replace(/ {2}/g," ").split(" "));if(e.nativeMobile!==!0&&e.electron!==!0&&e.bex!==!0){if(e.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(e.mobile===!0){n.delete("desktop"),n.add("mobile"),n.delete("platform-ios"),n.delete("platform-android");const s=fl(e);s!==void 0&&n.add(`platform-${s}`)}}rt.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),rt.within.iframe===!0&&n.add("within-iframe");const r=Array.from(n).join(" ");t!==r&&(document.body.className=r)}function ph(e){for(const t in e)lh(t,e[t])}const gh={install(e){if(this.__installed!==!0){if(tn.value===!0)hh();else{const{$q:t}=e;t.config.brand!==void 0&&ph(t.config.brand);const n=dh(rt,t.config);document.body.classList.add.apply(document.body.classList,n)}rt.is.ios===!0&&document.body.addEventListener("touchstart",Zn),window.addEventListener("keydown",uh,!0)}}},dl=()=>!0;function mh(e){return typeof e=="string"&&e!==""&&e!=="/"&&e!=="#/"}function _h(e){return e.startsWith("#")===!0&&(e=e.substring(1)),e.startsWith("/")===!1&&(e="/"+e),e.endsWith("/")===!0&&(e=e.substring(0,e.length-1)),"#"+e}function vh(e){if(e.backButtonExit===!1)return()=>!1;if(e.backButtonExit==="*")return dl;const t=["#/"];return Array.isArray(e.backButtonExit)===!0&&t.push(...e.backButtonExit.filter(mh).map(_h)),()=>t.includes(window.location.hash)}const yh={__history:[],add:Zn,remove:Zn,install({$q:e}){if(this.__installed===!0)return;const{cordova:t,capacitor:n}=rt.is;if(t!==!0&&n!==!0)return;const r=e.config[t===!0?"cordova":"capacitor"];if(r?.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=dl),this.__history.push(o)},this.remove=o=>{const c=this.__history.indexOf(o);c>=0&&this.__history.splice(c,1)};const s=vh(Object.assign({backButtonExit:!0},r)),i=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else s()===!0?navigator.app.exitApp():window.history.back()};t===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",i,!1)}):window.Capacitor.Plugins.App.addListener("backButton",i)}},Bo={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:e=>e?`Expand "${e}"`:"Expand",collapse:e=>e?`Collapse "${e}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days",prevMonth:"Previous month",nextMonth:"Next month",prevYear:"Previous year",nextYear:"Next year",today:"Today",prevRangeYears:e=>`Previous ${e} years`,nextRangeYears:e=>`Next ${e} years`},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>e===1?"1 record selected.":(e===0?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,n)=>e+"-"+t+" of "+n,columns:"Columns"},pagination:{first:"First page",prev:"Previous page",next:"Next page",last:"Last page"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Vo(){const e=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof e=="string")return e.split(/[-_]/).map((t,n)=>n===0?t.toLowerCase():n>1||t.length<4?t.toUpperCase():t[0].toUpperCase()+t.slice(1).toLowerCase()).join("-")}const Ot=is({__qLang:{}},{getLocale:Vo,set(e=Bo,t){const n={...e,rtl:e.rtl===!0,getLocale:Vo};{if(n.set=Ot.set,Ot.__langConfig===void 0||Ot.__langConfig.noHtmlAttrs!==!0){const r=document.documentElement;r.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),r.setAttribute("lang",n.isoName)}Object.assign(Ot.__qLang,n)}},install({$q:e,lang:t,ssrContext:n}){e.lang=Ot.__qLang,Ot.__langConfig=e.config.lang,this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set"&&s!=="getLocale")}}),this.set(t||Bo))}}),bh={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},Fr=is({iconMapFn:null,__qIconSet:{}},{set(e,t){const n={...e};n.set=Fr.set,Object.assign(Fr.__qIconSet,n)},install({$q:e,iconSet:t,ssrContext:n}){e.config.iconMapFn!==void 0&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__qIconSet,Li(e,"iconMapFn",()=>this.iconMapFn,r=>{this.iconMapFn=r}),this.__installed===!0?t!==void 0&&this.set(t):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(r){return Reflect.ownKeys(r).filter(s=>s!=="set")}}),this.set(t||bh))}}),wh="_q_",ly="_q_l_",uy="_q_pc_",fy="_q_fo_",dy="_q_tabs_";function hy(){}const jo={};let hl=!1;function Eh(){hl=!0}function Wo(e){return e!==null&&typeof e=="object"&&Array.isArray(e)!==!0}const Ko=[Zs,gh,me,ch,yh,Ot,Fr];function zo(e,t){t.forEach(n=>{n.install(e),n.__installed=!0})}function Ih(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(wh,n.$q),zo(n,Ko),t.components!==void 0&&Object.values(t.components).forEach(r=>{Wo(r)===!0&&r.name!==void 0&&e.component(r.name,r)}),t.directives!==void 0&&Object.values(t.directives).forEach(r=>{Wo(r)===!0&&r.name!==void 0&&e.directive(r.name,r)}),t.plugins!==void 0&&zo(n,Object.values(t.plugins).filter(r=>typeof r.install=="function"&&Ko.includes(r)===!1)),tn.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(r=>{r()}),n.$q.onSSRHydrated=()=>{}})}const Sh=function(e,t={}){const n={version:"2.18.1"};hl===!1?(t.config!==void 0&&Object.assign(jo,t.config),n.config={...jo},Eh()):n.config=t.config||{},Ih(e,t,{parentApp:e,$q:n,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})},Th={name:"Quasar",version:"2.18.1",install:Sh,lang:Ot,iconSet:Fr},Ch={__name:"App",setup(e){return(t,n)=>{const r=Nf("router-view");return el(),nl(r)}}},Mi=e=>e,py=Mi,Ah=Mi,Rh=Mi;/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let pl;const as=e=>pl=e,gl=Symbol();function ei(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Bn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Bn||(Bn={}));function Ph(){const e=Xa(!0),t=e.run(()=>Xr({}));let n=[],r=[];const s=Sn({install(i){as(s),s._a=i,i.provide(gl,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const ml=()=>{};function qo(e,t,n,r=ml){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Za()&&Uu(s),s}function un(e,...t){e.slice().forEach(n=>{n(...t)})}const Oh=e=>e(),Go=Symbol(),As=Symbol();function ti(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,r)=>e.set(r,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];ei(s)&&ei(r)&&e.hasOwnProperty(n)&&!de(r)&&!Mt(r)?e[n]=ti(s,r):e[n]=r}return e}const kh=Symbol();function xh(e){return!ei(e)||!Object.prototype.hasOwnProperty.call(e,kh)}const{assign:Ct}=Object;function Nh(e){return!!(de(e)&&e.effect)}function Lh(e,t,n,r){const{state:s,actions:i,getters:o}=t,c=n.state.value[e];let a;function l(){c||(n.state.value[e]=s?s():{});const u=af(n.state.value[e]);return Ct(u,i,Object.keys(o||{}).reduce((f,h)=>(f[h]=Sn(De(()=>{as(n);const g=n._s.get(e);return o[h].call(g,g)})),f),{}))}return a=_l(e,l,t,n,r,!0),a}function _l(e,t,n={},r,s,i){let o;const c=Ct({actions:{}},n),a={deep:!0};let l,u,f=[],h=[],g;const _=r.state.value[e];!i&&!_&&(r.state.value[e]={}),Xr({});let I;function F(H){let S;l=u=!1,typeof H=="function"?(H(r.state.value[e]),S={type:Bn.patchFunction,storeId:e,events:g}):(ti(r.state.value[e],H),S={type:Bn.patchObject,payload:H,storeId:e,events:g});const $=I=Symbol();Ai().then(()=>{I===$&&(l=!0)}),u=!0,un(f,S,r.state.value[e])}const L=i?function(){const{state:S}=n,$=S?S():{};this.$patch(Y=>{Ct(Y,$)})}:ml;function x(){o.stop(),f=[],h=[],r._s.delete(e)}const M=(H,S="")=>{if(Go in H)return H[As]=S,H;const $=function(){as(r);const Y=Array.from(arguments),k=[],Q=[];function he(G){k.push(G)}function ye(G){Q.push(G)}un(h,{args:Y,name:$[As],store:U,after:he,onError:ye});let se;try{se=H.apply(this&&this.$id===e?this:U,Y)}catch(G){throw un(Q,G),G}return se instanceof Promise?se.then(G=>(un(k,G),G)).catch(G=>(un(Q,G),Promise.reject(G))):(un(k,se),se)};return $[Go]=!0,$[As]=S,$},P={_p:r,$id:e,$onAction:qo.bind(null,h),$patch:F,$reset:L,$subscribe(H,S={}){const $=qo(f,H,S.detached,()=>Y()),Y=o.run(()=>Hn(()=>r.state.value[e],k=>{(S.flush==="sync"?u:l)&&H({storeId:e,type:Bn.direct,events:g},k)},Ct({},a,S)));return $},$dispose:x},U=on(P);r._s.set(e,U);const q=(r._a&&r._a.runWithContext||Oh)(()=>r._e.run(()=>(o=Xa()).run(()=>t({action:M}))));for(const H in q){const S=q[H];if(de(S)&&!Nh(S)||Mt(S))i||(_&&xh(S)&&(de(S)?S.value=_[H]:ti(S,_[H])),r.state.value[e][H]=S);else if(typeof S=="function"){const $=M(S,H);q[H]=$,c.actions[H]=S}}return Ct(U,q),Ct(Z(U),q),Object.defineProperty(U,"$state",{get:()=>r.state.value[e],set:H=>{F(S=>{Ct(S,H)})}}),r._p.forEach(H=>{Ct(U,o.run(()=>H({store:U,app:r._a,pinia:r,options:c})))}),_&&i&&n.hydrate&&n.hydrate(U.$state,_),l=!0,u=!0,U}/*! #__NO_SIDE_EFFECTS__ */function Mh(e,t,n){let r;const s=typeof t=="function";r=s?n:t;function i(o,c){const a=Wf();return o=o||(a?He(gl,null):null),o&&as(o),o=pl,o._s.has(e)||(s?_l(e,t,r,o):Lh(e,r,o)),o._s.get(e)}return i.$id=e,i}const Rs=Rh(()=>Ph());/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const dn=typeof document<"u";function vl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Dh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&vl(e.default)}const te=Object.assign;function Ps(e,t){const n={};for(const r in t){const s=t[r];n[r]=ze(s)?s.map(e):e(s)}return n}const Vn=()=>{},ze=Array.isArray,yl=/#/g,Uh=/&/g,Fh=/\//g,Hh=/=/g,$h=/\?/g,bl=/\+/g,Bh=/%5B/g,Vh=/%5D/g,wl=/%5E/g,jh=/%60/g,El=/%7B/g,Wh=/%7C/g,Il=/%7D/g,Kh=/%20/g;function Di(e){return encodeURI(""+e).replace(Wh,"|").replace(Bh,"[").replace(Vh,"]")}function zh(e){return Di(e).replace(El,"{").replace(Il,"}").replace(wl,"^")}function ni(e){return Di(e).replace(bl,"%2B").replace(Kh,"+").replace(yl,"%23").replace(Uh,"%26").replace(jh,"`").replace(El,"{").replace(Il,"}").replace(wl,"^")}function qh(e){return ni(e).replace(Hh,"%3D")}function Gh(e){return Di(e).replace(yl,"%23").replace($h,"%3F")}function Jh(e){return e==null?"":Gh(e).replace(Fh,"%2F")}function er(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Yh=/\/$/,Qh=e=>e.replace(Yh,"");function Os(e,t,n="/"){let r,s={},i="",o="";const c=t.indexOf("#");let a=t.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),s=e(i)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=tp(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:er(o)}}function Xh(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Jo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Zh(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&bn(t.matched[r],n.matched[s])&&Sl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function bn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Sl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ep(e[n],t[n]))return!1;return!0}function ep(e,t){return ze(e)?Yo(e,t):ze(t)?Yo(t,e):e===t}function Yo(e,t){return ze(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function tp(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const St={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var tr;(function(e){e.pop="pop",e.push="push"})(tr||(tr={}));var jn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(jn||(jn={}));function np(e){if(!e)if(dn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Qh(e)}const rp=/^[^#]+#/;function sp(e,t){return e.replace(rp,"#")+t}function ip(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const cs=()=>({left:window.scrollX,top:window.scrollY});function op(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=ip(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Qo(e,t){return(history.state?history.state.position-t:-1)+e}const ri=new Map;function ap(e,t){ri.set(e,t)}function cp(e){const t=ri.get(e);return ri.delete(e),t}let lp=()=>location.protocol+"//"+location.host;function Tl(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let c=s.includes(e.slice(i))?e.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Jo(a,"")}return Jo(n,e)+r+s}function up(e,t,n,r){let s=[],i=[],o=null;const c=({state:h})=>{const g=Tl(e,location),_=n.value,I=t.value;let F=0;if(h){if(n.value=g,t.value=h,o&&o===_){o=null;return}F=I?h.position-I.position:0}else r(g);s.forEach(L=>{L(n.value,_,{delta:F,type:tr.pop,direction:F?F>0?jn.forward:jn.back:jn.unknown})})};function a(){o=n.value}function l(h){s.push(h);const g=()=>{const _=s.indexOf(h);_>-1&&s.splice(_,1)};return i.push(g),g}function u(){const{history:h}=window;h.state&&h.replaceState(te({},h.state,{scroll:cs()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:l,destroy:f}}function Xo(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?cs():null}}function fp(e){const{history:t,location:n}=window,r={value:Tl(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+a:lp()+e+a;try{t[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(a,l){const u=te({},t.state,Xo(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,u,!0),r.value=a}function c(a,l){const u=te({},s.value,t.state,{forward:a,scroll:cs()});i(u.current,u,!0);const f=te({},Xo(r.value,a,null),{position:u.position+1},l);i(a,f,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function dp(e){e=np(e);const t=fp(e),n=up(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=te({location:"",base:e,go:r,createHref:sp.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function hp(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),dp(e)}function pp(e){return typeof e=="string"||e&&typeof e=="object"}function Cl(e){return typeof e=="string"||typeof e=="symbol"}const Al=Symbol("");var Zo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Zo||(Zo={}));function wn(e,t){return te(new Error,{type:e,[Al]:!0},t)}function ut(e,t){return e instanceof Error&&Al in e&&(t==null||!!(e.type&t))}const ea="[^/]+?",gp={sensitive:!1,strict:!1,start:!0,end:!0},mp=/[.+*?^${}()[\]/\\]/g;function _p(e,t){const n=te({},gp,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const h=l[f];let g=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(mp,"\\$&"),g+=40;else if(h.type===1){const{value:_,repeatable:I,optional:F,regexp:L}=h;i.push({name:_,repeatable:I,optional:F});const x=L||ea;if(x!==ea){g+=10;try{new RegExp(`(${x})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${_}" (${x}): `+P.message)}}let M=I?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;f||(M=F&&l.length<2?`(?:/${M})`:"/"+M),F&&(M+="?"),s+=M,g+=20,F&&(g+=-8),I&&(g+=-20),x===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",_=i[h-1];f[_.name]=g&&_.repeatable?g.split("/"):g}return f}function a(l){let u="",f=!1;for(const h of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:I,optional:F}=g,L=_ in l?l[_]:"";if(ze(L)&&!I)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const x=ze(L)?L.join("/"):L;if(!x)if(F)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=x}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function vp(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Rl(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=vp(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ta(r))return 1;if(ta(s))return-1}return s.length-r.length}function ta(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const yp={type:0,value:""},bp=/[a-zA-Z0-9_]/;function wp(e){if(!e)return[[]];if(e==="/")return[[yp]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),l="")}function h(){l+=a}for(;c<e.length;){if(a=e[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&f(),o()):a===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:a==="("?n=2:bp.test(a)?h():(f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function Ep(e,t,n){const r=_p(wp(e.path),n),s=te(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Ip(e,t){const n=[],r=new Map;t=ia({strict:!1,end:!0,sensitive:!1},t);function s(f){return r.get(f)}function i(f,h,g){const _=!g,I=ra(f);I.aliasOf=g&&g.record;const F=ia(t,f),L=[I];if("alias"in f){const P=typeof f.alias=="string"?[f.alias]:f.alias;for(const U of P)L.push(ra(te({},I,{components:g?g.record.components:I.components,path:U,aliasOf:g?g.record:I})))}let x,M;for(const P of L){const{path:U}=P;if(h&&U[0]!=="/"){const J=h.record.path,q=J[J.length-1]==="/"?"":"/";P.path=h.record.path+(U&&q+U)}if(x=Ep(P,h,F),g?g.alias.push(x):(M=M||x,M!==x&&M.alias.push(x),_&&f.name&&!sa(x)&&o(f.name)),Pl(x)&&a(x),I.children){const J=I.children;for(let q=0;q<J.length;q++)i(J[q],x,g&&g.children[q])}g=g||x}return M?()=>{o(M)}:Vn}function o(f){if(Cl(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function c(){return n}function a(f){const h=Cp(f,n);n.splice(h,0,f),f.record.name&&!sa(f)&&r.set(f.record.name,f)}function l(f,h){let g,_={},I,F;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw wn(1,{location:f});F=g.record.name,_=te(na(h.params,g.keys.filter(M=>!M.optional).concat(g.parent?g.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),f.params&&na(f.params,g.keys.map(M=>M.name))),I=g.stringify(_)}else if(f.path!=null)I=f.path,g=n.find(M=>M.re.test(I)),g&&(_=g.parse(I),F=g.record.name);else{if(g=h.name?r.get(h.name):n.find(M=>M.re.test(h.path)),!g)throw wn(1,{location:f,currentLocation:h});F=g.record.name,_=te({},h.params,f.params),I=g.stringify(_)}const L=[];let x=g;for(;x;)L.unshift(x.record),x=x.parent;return{name:F,path:I,params:_,matched:L,meta:Tp(L)}}e.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:c,getRecordMatcher:s}}function na(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ra(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Sp(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Sp(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function sa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Tp(e){return e.reduce((t,n)=>te(t,n.meta),{})}function ia(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Cp(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;Rl(e,t[i])<0?r=i:n=i+1}const s=Ap(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Ap(e){let t=e;for(;t=t.parent;)if(Pl(t)&&Rl(e,t)===0)return t}function Pl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Rp(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(bl," "),o=i.indexOf("="),c=er(o<0?i:i.slice(0,o)),a=o<0?null:er(i.slice(o+1));if(c in t){let l=t[c];ze(l)||(l=t[c]=[l]),l.push(a)}else t[c]=a}return t}function oa(e){let t="";for(let n in e){const r=e[n];if(n=qh(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ze(r)?r.map(i=>i&&ni(i)):[r&&ni(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Pp(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ze(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Op=Symbol(""),aa=Symbol(""),ls=Symbol(""),Ui=Symbol(""),si=Symbol("");function Pn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function kt(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const l=h=>{h===!1?a(wn(4,{from:n,to:t})):h instanceof Error?a(h):pp(h)?a(wn(2,{from:t,to:h})):(o&&r.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),c())},u=i(()=>e.call(r&&r.instances[s],t,n,l));let f=Promise.resolve(u);e.length<3&&(f=f.then(l)),f.catch(h=>a(h))})}function ks(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const c in o.components){let a=o.components[c];if(!(t!=="beforeRouteEnter"&&!o.instances[c]))if(vl(a)){const u=(a.__vccOpts||a)[t];u&&i.push(kt(u,n,r,o,c,s))}else{let l=a();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const f=Dh(u)?u.default:u;o.mods[c]=u,o.components[c]=f;const g=(f.__vccOpts||f)[t];return g&&kt(g,n,r,o,c,s)()}))}}return i}function ca(e){const t=He(ls),n=He(Ui),r=De(()=>{const a=gn(e.to);return t.resolve(a)}),s=De(()=>{const{matched:a}=r.value,{length:l}=a,u=a[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(bn.bind(null,u));if(h>-1)return h;const g=la(a[l-2]);return l>1&&la(u)===g&&f[f.length-1].path!==g?f.findIndex(bn.bind(null,a[l-2])):h}),i=De(()=>s.value>-1&&Mp(n.params,r.value.params)),o=De(()=>s.value>-1&&s.value===n.matched.length-1&&Sl(n.params,r.value.params));function c(a={}){if(Lp(a)){const l=t[gn(e.replace)?"replace":"push"](gn(e.to)).catch(Vn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:De(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function kp(e){return e.length===1?e[0]:e}const xp=Pi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ca,setup(e,{slots:t}){const n=on(ca(e)),{options:r}=He(ls),s=De(()=>({[ua(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ua(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&kp(t.default(n));return e.custom?i:Ni("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Np=xp;function Lp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Mp(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ze(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function la(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ua=(e,t,n)=>e??t??n,Dp=Pi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=He(si),s=De(()=>e.route||r.value),i=He(aa,0),o=De(()=>{let l=gn(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),c=De(()=>s.value.matched[o.value]);Ir(aa,De(()=>o.value+1)),Ir(Op,c),Ir(si,s);const a=Xr();return Hn(()=>[a.value,c.value,e.name],([l,u,f],[h,g,_])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!bn(u,g)||!h)&&(u.enterCallbacks[f]||[]).forEach(I=>I(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=c.value,h=f&&f.components[u];if(!h)return fa(n.default,{Component:h,route:l});const g=f.props[u],_=g?g===!0?l.params:typeof g=="function"?g(l):g:null,F=Ni(h,te({},_,t,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(f.instances[u]=null)},ref:a}));return fa(n.default,{Component:F,route:l})||F}}});function fa(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Up=Dp;function Fp(e){const t=Ip(e.routes,e),n=e.parseQuery||Rp,r=e.stringifyQuery||oa,s=e.history,i=Pn(),o=Pn(),c=Pn(),a=rf(St);let l=St;dn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ps.bind(null,y=>""+y),f=Ps.bind(null,Jh),h=Ps.bind(null,er);function g(y,N){let R,D;return Cl(y)?(R=t.getRecordMatcher(y),D=N):D=y,t.addRoute(D,R)}function _(y){const N=t.getRecordMatcher(y);N&&t.removeRoute(N)}function I(){return t.getRoutes().map(y=>y.record)}function F(y){return!!t.getRecordMatcher(y)}function L(y,N){if(N=te({},N||a.value),typeof y=="string"){const m=Os(n,y,N.path),v=t.resolve({path:m.path},N),w=s.createHref(m.fullPath);return te(m,v,{params:h(v.params),hash:er(m.hash),redirectedFrom:void 0,href:w})}let R;if(y.path!=null)R=te({},y,{path:Os(n,y.path,N.path).path});else{const m=te({},y.params);for(const v in m)m[v]==null&&delete m[v];R=te({},y,{params:f(m)}),N.params=f(N.params)}const D=t.resolve(R,N),ie=y.hash||"";D.params=u(h(D.params));const d=Xh(r,te({},y,{hash:zh(ie),path:D.path})),p=s.createHref(d);return te({fullPath:d,hash:ie,query:r===oa?Pp(y.query):y.query||{}},D,{redirectedFrom:void 0,href:p})}function x(y){return typeof y=="string"?Os(n,y,a.value.path):te({},y)}function M(y,N){if(l!==y)return wn(8,{from:N,to:y})}function P(y){return q(y)}function U(y){return P(te(x(y),{replace:!0}))}function J(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:R}=N;let D=typeof R=="function"?R(y):R;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=x(D):{path:D},D.params={}),te({query:y.query,hash:y.hash,params:D.path!=null?{}:y.params},D)}}function q(y,N){const R=l=L(y),D=a.value,ie=y.state,d=y.force,p=y.replace===!0,m=J(R);if(m)return q(te(x(m),{state:typeof m=="object"?te({},ie,m.state):ie,force:d,replace:p}),N||R);const v=R;v.redirectedFrom=N;let w;return!d&&Zh(r,D,R)&&(w=wn(16,{to:v,from:D}),Ge(D,D,!0,!1)),(w?Promise.resolve(w):$(v,D)).catch(b=>ut(b)?ut(b,2)?b:Et(b):ee(b,v,D)).then(b=>{if(b){if(ut(b,2))return q(te({replace:p},x(b.to),{state:typeof b.to=="object"?te({},ie,b.to.state):ie,force:d}),N||v)}else b=k(v,D,!0,p,ie);return Y(v,D,b),b})}function H(y,N){const R=M(y,N);return R?Promise.reject(R):Promise.resolve()}function S(y){const N=cn.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function $(y,N){let R;const[D,ie,d]=Hp(y,N);R=ks(D.reverse(),"beforeRouteLeave",y,N);for(const m of D)m.leaveGuards.forEach(v=>{R.push(kt(v,y,N))});const p=H.bind(null,y,N);return R.push(p),Le(R).then(()=>{R=[];for(const m of i.list())R.push(kt(m,y,N));return R.push(p),Le(R)}).then(()=>{R=ks(ie,"beforeRouteUpdate",y,N);for(const m of ie)m.updateGuards.forEach(v=>{R.push(kt(v,y,N))});return R.push(p),Le(R)}).then(()=>{R=[];for(const m of d)if(m.beforeEnter)if(ze(m.beforeEnter))for(const v of m.beforeEnter)R.push(kt(v,y,N));else R.push(kt(m.beforeEnter,y,N));return R.push(p),Le(R)}).then(()=>(y.matched.forEach(m=>m.enterCallbacks={}),R=ks(d,"beforeRouteEnter",y,N,S),R.push(p),Le(R))).then(()=>{R=[];for(const m of o.list())R.push(kt(m,y,N));return R.push(p),Le(R)}).catch(m=>ut(m,8)?m:Promise.reject(m))}function Y(y,N,R){c.list().forEach(D=>S(()=>D(y,N,R)))}function k(y,N,R,D,ie){const d=M(y,N);if(d)return d;const p=N===St,m=dn?history.state:{};R&&(D||p?s.replace(y.fullPath,te({scroll:p&&m&&m.scroll},ie)):s.push(y.fullPath,ie)),a.value=y,Ge(y,N,R,p),Et()}let Q;function he(){Q||(Q=s.listen((y,N,R)=>{if(!gr.listening)return;const D=L(y),ie=J(D);if(ie){q(te(ie,{replace:!0,force:!0}),D).catch(Vn);return}l=D;const d=a.value;dn&&ap(Qo(d.fullPath,R.delta),cs()),$(D,d).catch(p=>ut(p,12)?p:ut(p,2)?(q(te(x(p.to),{force:!0}),D).then(m=>{ut(m,20)&&!R.delta&&R.type===tr.pop&&s.go(-1,!1)}).catch(Vn),Promise.reject()):(R.delta&&s.go(-R.delta,!1),ee(p,D,d))).then(p=>{p=p||k(D,d,!1),p&&(R.delta&&!ut(p,8)?s.go(-R.delta,!1):R.type===tr.pop&&ut(p,20)&&s.go(-1,!1)),Y(D,d,p)}).catch(Vn)}))}let ye=Pn(),se=Pn(),G;function ee(y,N,R){Et(y);const D=se.list();return D.length?D.forEach(ie=>ie(y,N,R)):console.error(y),Promise.reject(y)}function at(){return G&&a.value!==St?Promise.resolve():new Promise((y,N)=>{ye.add([y,N])})}function Et(y){return G||(G=!y,he(),ye.list().forEach(([N,R])=>y?R(y):N()),ye.reset()),y}function Ge(y,N,R,D){const{scrollBehavior:ie}=e;if(!dn||!ie)return Promise.resolve();const d=!R&&cp(Qo(y.fullPath,0))||(D||!R)&&history.state&&history.state.scroll||null;return Ai().then(()=>ie(y,N,d)).then(p=>p&&op(p)).catch(p=>ee(p,y,N))}const Ce=y=>s.go(y);let an;const cn=new Set,gr={currentRoute:a,listening:!0,addRoute:g,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:F,getRoutes:I,resolve:L,options:e,push:P,replace:U,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:se.add,isReady:at,install(y){const N=this;y.component("RouterLink",Np),y.component("RouterView",Up),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>gn(a)}),dn&&!an&&a.value===St&&(an=!0,P(s.location).catch(ie=>{}));const R={};for(const ie in St)Object.defineProperty(R,ie,{get:()=>a.value[ie],enumerable:!0});y.provide(ls,N),y.provide(Ui,pc(R)),y.provide(si,a);const D=y.unmount;cn.add(y),y.unmount=function(){cn.delete(y),cn.size<1&&(l=St,Q&&Q(),Q=null,a.value=St,an=!1,G=!1),D()}}};function Le(y){return y.reduce((N,R)=>N.then(()=>S(R)),Promise.resolve())}return gr}function Hp(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const c=t.matched[o];c&&(e.matched.find(l=>bn(l,c))?r.push(c):n.push(c));const a=e.matched[o];a&&(t.matched.find(l=>bn(l,a))||s.push(a))}return[n,r,s]}function gy(){return He(ls)}function my(e){return He(Ui)}const $p=[{path:"/",component:()=>ke(()=>import("./MainLayout-CGmbjqQM.js"),__vite__mapDeps([0,1,2,3,4,5,6])),children:[{path:"",component:()=>ke(()=>import("./LandingPage-DtZNm7RT.js"),__vite__mapDeps([7,2,1,8,5,9,10,11,12,13]))},{path:"login",component:()=>ke(()=>import("./LoginPage-Cx6Oh_Xh.js"),__vite__mapDeps([14,15,1,2,10,4,16,17,9,11,6,12,18]))},{path:"signup",component:()=>ke(()=>import("./SignupPage-DG_yR4ur.js"),__vite__mapDeps([19,15,1,2,10,4,16,17,9,11,6,12,20]))},{path:"verify-email",component:()=>ke(()=>import("./VerifyEmail-DE0NFZzH.js"),__vite__mapDeps([21,16,10,1,2,11,6]))},{path:"action",component:()=>ke(()=>import("./AuthAction-l2_yIzHg.js"),__vite__mapDeps([22,2,1,11]))},{path:"dashboard",component:()=>ke(()=>import("./DashboardPage-LYPZ02bQ.js"),__vite__mapDeps([23,3,2,1,4,5,15,10,9,8,11,6,12,24])),meta:{requiresAuth:!0}},{path:"terms",component:()=>ke(()=>import("./TermsOfService-B7owp6lD.js"),__vite__mapDeps([25,11,1,12,26]))},{path:"/privacy",component:()=>ke(()=>import("./PrivacyPolicy-Ck-loxhx.js"),__vite__mapDeps([27,11,1,12,28]))},{path:"/about",component:()=>ke(()=>import("./AboutPage-A4fwJuMG.js"),__vite__mapDeps([29,11,1,12,30]))}]},{path:"/:catchAll(.*)*",component:()=>ke(()=>import("./ErrorNotFound-BTHgd2jG.js"),__vite__mapDeps([31,2,1]))}],Bp=()=>{};var da={};/**
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
 */const Ol=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Vp=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],c=e[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},kl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,c=o?e[s+1]:0,a=s+2<e.length,l=a?e[s+2]:0,u=i>>2,f=(i&3)<<4|c>>4;let h=(c&15)<<2|l>>6,g=l&63;a||(g=64,o||(h=64)),r.push(n[u],n[f],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ol(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Vp(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],c=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||c==null||l==null||f==null)throw new jp;const h=i<<2|c>>4;if(r.push(h),l!==64){const g=c<<4&240|l>>2;if(r.push(g),f!==64){const _=l<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class jp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wp=function(e){const t=Ol(e);return kl.encodeByteArray(t,!0)},xl=function(e){return Wp(e).replace(/\./g,"")},Nl=function(e){try{return kl.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Kp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zp=()=>Kp().__FIREBASE_DEFAULTS__,qp=()=>{if(typeof process>"u"||typeof da>"u")return;const e=da.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Gp=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Nl(e[1]);return t&&JSON.parse(t)},Fi=()=>{try{return Bp()||zp()||qp()||Gp()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Jp=e=>{var t,n;return(n=(t=Fi())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Ll=()=>{var e;return(e=Fi())===null||e===void 0?void 0:e.config},Ml=e=>{var t;return(t=Fi())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Yp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function Xp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zp(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function eg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tg(){const e=Te();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ng(){try{return typeof indexedDB=="object"}catch{return!1}}function rg(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function _y(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const sg="FirebaseError";class Vt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=sg,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cr.prototype.create)}}class cr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?ig(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Vt(s,c,r)}}function ig(e,t){return e.replace(og,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const og=/\{\$([^}]+)}/g;function ag(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function En(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(ha(i)&&ha(o)){if(!En(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ha(e){return e!==null&&typeof e=="object"}/**
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
 */function lr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function kn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function xn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function cg(e,t){const n=new lg(e,t);return n.subscribe.bind(n)}class lg{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ug(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=xs),s.error===void 0&&(s.error=xs),s.complete===void 0&&(s.complete=xs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ug(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function xs(){}/**
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
 */const fg=1e3,dg=2,hg=4*60*60*1e3,pg=.5;function vy(e,t=fg,n=dg){const r=t*Math.pow(n,e),s=Math.round(pg*r*(Math.random()-.5)*2);return Math.min(hg,r+s)}/**
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
 */function qe(e){return e&&e._delegate?e._delegate:e}class In{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Jt="[DEFAULT]";/**
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
 */class gg{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Yp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t?.identifier),s=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(_g(t))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Jt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Jt){return this.instances.has(t)}getOptions(t=Jt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mg(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Jt){return this.component?this.component.multipleInstances?t:Jt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mg(e){return e===Jt?void 0:e}function _g(e){return e.instantiationMode==="EAGER"}/**
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
 */class vg{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new gg(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(oe||(oe={}));const yg={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},bg=oe.INFO,wg={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},Eg=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=wg[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Dl{constructor(t){this.name=t,this._logLevel=bg,this._logHandler=Eg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in oe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?yg[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...t),this._logHandler(this,oe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...t),this._logHandler(this,oe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...t),this._logHandler(this,oe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...t),this._logHandler(this,oe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...t),this._logHandler(this,oe.ERROR,...t)}}const Ig=(e,t)=>t.some(n=>e instanceof n);let pa,ga;function Sg(){return pa||(pa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tg(){return ga||(ga=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ul=new WeakMap,ii=new WeakMap,Fl=new WeakMap,Ns=new WeakMap,Hi=new WeakMap;function Cg(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Dt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ul.set(n,e)}).catch(()=>{}),Hi.set(t,e),t}function Ag(e){if(ii.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});ii.set(e,t)}let oi={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ii.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Fl.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Rg(e){oi=e(oi)}function Pg(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ls(this),t,...n);return Fl.set(r,t.sort?t.sort():[t]),Dt(r)}:Tg().includes(e)?function(...t){return e.apply(Ls(this),t),Dt(Ul.get(this))}:function(...t){return Dt(e.apply(Ls(this),t))}}function Og(e){return typeof e=="function"?Pg(e):(e instanceof IDBTransaction&&Ag(e),Ig(e,Sg())?new Proxy(e,oi):e)}function Dt(e){if(e instanceof IDBRequest)return Cg(e);if(Ns.has(e))return Ns.get(e);const t=Og(e);return t!==e&&(Ns.set(e,t),Hi.set(t,e)),t}const Ls=e=>Hi.get(e);function kg(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),c=Dt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Dt(o.result),a.oldVersion,a.newVersion,Dt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const xg=["get","getKey","getAll","getAllKeys","count"],Ng=["put","add","delete","clear"],Ms=new Map;function ma(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ms.get(t))return Ms.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Ng.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||xg.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return Ms.set(t,i),i}Rg(e=>({...e,get:(t,n,r)=>ma(t,n)||e.get(t,n,r),has:(t,n)=>!!ma(t,n)||e.has(t,n)}));/**
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
 */class Lg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Mg(e){const t=e.getComponent();return t?.type==="VERSION"}const ai="@firebase/app",_a="0.11.4";/**
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
 */const yt=new Dl("@firebase/app"),Dg="@firebase/app-compat",Ug="@firebase/analytics-compat",Fg="@firebase/analytics",Hg="@firebase/app-check-compat",$g="@firebase/app-check",Bg="@firebase/auth",Vg="@firebase/auth-compat",jg="@firebase/database",Wg="@firebase/data-connect",Kg="@firebase/database-compat",zg="@firebase/functions",qg="@firebase/functions-compat",Gg="@firebase/installations",Jg="@firebase/installations-compat",Yg="@firebase/messaging",Qg="@firebase/messaging-compat",Xg="@firebase/performance",Zg="@firebase/performance-compat",em="@firebase/remote-config",tm="@firebase/remote-config-compat",nm="@firebase/storage",rm="@firebase/storage-compat",sm="@firebase/firestore",im="@firebase/vertexai",om="@firebase/firestore-compat",am="firebase",cm="11.6.0";/**
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
 */const ci="[DEFAULT]",lm={[ai]:"fire-core",[Dg]:"fire-core-compat",[Fg]:"fire-analytics",[Ug]:"fire-analytics-compat",[$g]:"fire-app-check",[Hg]:"fire-app-check-compat",[Bg]:"fire-auth",[Vg]:"fire-auth-compat",[jg]:"fire-rtdb",[Wg]:"fire-data-connect",[Kg]:"fire-rtdb-compat",[zg]:"fire-fn",[qg]:"fire-fn-compat",[Gg]:"fire-iid",[Jg]:"fire-iid-compat",[Yg]:"fire-fcm",[Qg]:"fire-fcm-compat",[Xg]:"fire-perf",[Zg]:"fire-perf-compat",[em]:"fire-rc",[tm]:"fire-rc-compat",[nm]:"fire-gcs",[rm]:"fire-gcs-compat",[sm]:"fire-fst",[om]:"fire-fst-compat",[im]:"fire-vertex","fire-js":"fire-js",[am]:"fire-js-all"};/**
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
 */const Hr=new Map,um=new Map,li=new Map;function va(e,t){try{e.container.addComponent(t)}catch(n){yt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function nr(e){const t=e.name;if(li.has(t))return yt.debug(`There were multiple attempts to register component ${t}.`),!1;li.set(t,e);for(const n of Hr.values())va(n,e);for(const n of um.values())va(n,e);return!0}function Hl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ue(e){return e==null?!1:e.settings!==void 0}/**
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
 */const fm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ut=new cr("app","Firebase",fm);/**
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
 */class dm{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
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
 */const ur=cm;function hm(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ci,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Ut.create("bad-app-name",{appName:String(s)});if(n||(n=Ll()),!n)throw Ut.create("no-options");const i=Hr.get(s);if(i){if(En(n,i.options)&&En(r,i.config))return i;throw Ut.create("duplicate-app",{appName:s})}const o=new vg(s);for(const a of li.values())o.addComponent(a);const c=new dm(n,r,o);return Hr.set(s,c),c}function pm(e=ci){const t=Hr.get(e);if(!t&&e===ci&&Ll())return hm();if(!t)throw Ut.create("no-app",{appName:e});return t}function Wn(e,t,n){var r;let s=(r=lm[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${t}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),yt.warn(c.join(" "));return}nr(new In(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const gm="firebase-heartbeat-database",mm=1,rr="firebase-heartbeat-store";let Ds=null;function $l(){return Ds||(Ds=kg(gm,mm,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(rr)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ut.create("idb-open",{originalErrorMessage:e.message})})),Ds}async function _m(e){try{const n=(await $l()).transaction(rr),r=await n.objectStore(rr).get(Bl(e));return await n.done,r}catch(t){if(t instanceof Vt)yt.warn(t.message);else{const n=Ut.create("idb-get",{originalErrorMessage:t?.message});yt.warn(n.message)}}}async function ya(e,t){try{const r=(await $l()).transaction(rr,"readwrite");await r.objectStore(rr).put(t,Bl(e)),await r.done}catch(n){if(n instanceof Vt)yt.warn(n.message);else{const r=Ut.create("idb-set",{originalErrorMessage:n?.message});yt.warn(r.message)}}}function Bl(e){return`${e.name}!${e.options.appId}`}/**
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
 */const vm=1024,ym=30;class bm{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Em(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ba();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ym){const o=Im(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){yt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ba(),{heartbeatsToSend:r,unsentEntries:s}=wm(this._heartbeatsCache.heartbeats),i=xl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return yt.warn(n),""}}}function ba(){return new Date().toISOString().substring(0,10)}function wm(e,t=vm){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),wa(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),wa(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Em{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ng()?rg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _m(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ya(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ya(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function wa(e){return xl(JSON.stringify({version:2,heartbeats:e})).length}function Im(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}/**
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
 */function Sm(e){nr(new In("platform-logger",t=>new Lg(t),"PRIVATE")),nr(new In("heartbeat",t=>new bm(t),"PRIVATE")),Wn(ai,_a,e),Wn(ai,_a,"esm2017"),Wn("fire-js","")}Sm("");function $i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function Vl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Tm=Vl,jl=new cr("auth","Firebase",Vl());/**
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
 */const $r=new Dl("@firebase/auth");function Cm(e,...t){$r.logLevel<=oe.WARN&&$r.warn(`Auth (${ur}): ${e}`,...t)}function Cr(e,...t){$r.logLevel<=oe.ERROR&&$r.error(`Auth (${ur}): ${e}`,...t)}/**
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
 */function Be(e,...t){throw Vi(e,...t)}function We(e,...t){return Vi(e,...t)}function Bi(e,t,n){const r=Object.assign(Object.assign({},Tm()),{[t]:n});return new cr("auth","Firebase",r).create(t,{appName:e.name})}function vt(e){return Bi(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Am(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Be(e,"argument-error"),Bi(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vi(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return jl.create(e,...t)}function j(e,t,...n){if(!e)throw Vi(t,...n)}function mt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Cr(t),new Error(t)}function bt(e,t){e||mt(t)}/**
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
 */function ui(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Rm(){return Ea()==="http:"||Ea()==="https:"}function Ea(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function Pm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rm()||Zp()||"connection"in navigator)?navigator.onLine:!0}function Om(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class fr{constructor(t,n){this.shortDelay=t,this.longDelay=n,bt(n>t,"Short delay should be less than long delay!"),this.isMobile=Qp()||eg()}get(){return Pm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ji(e,t){bt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Wl{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const km={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xm=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Nm=new fr(3e4,6e4);function it(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ot(e,t,n,r,s={}){return Kl(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const c=lr(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:a},i);return Xp()||(l.referrerPolicy="no-referrer"),Wl.fetch()(await zl(e,e.config.apiHost,n,c),l)})}async function Kl(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},km),t);try{const s=new Mm(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wr(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw wr(e,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw wr(e,"email-already-in-use",o);if(a==="USER_DISABLED")throw wr(e,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Bi(e,u,l);Be(e,u)}}catch(s){if(s instanceof Vt)throw s;Be(e,"network-request-failed",{message:String(s)})}}async function dr(e,t,n,r,s={}){const i=await ot(e,t,n,r,s);return"mfaPendingCredential"in i&&Be(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function zl(e,t,n,r){const s=`${t}${n}?${r}`,i=e,o=i.config.emulator?ji(e.config,s):`${e.config.apiScheme}://${s}`;return xm.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Lm(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Mm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(We(this.auth,"network-request-failed")),Nm.get())})}}function wr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=We(e,t,r);return s.customData._tokenResponse=n,s}function Ia(e){return e!==void 0&&e.enterprise!==void 0}class Dm{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return Lm(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Um(e,t){return ot(e,"GET","/v2/recaptchaConfig",it(e,t))}/**
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
 */async function Fm(e,t){return ot(e,"POST","/v1/accounts:delete",t)}async function Br(e,t){return ot(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Kn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Hm(e,t=!1){const n=qe(e),r=await n.getIdToken(t),s=Wi(r);j(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Kn(Us(s.auth_time)),issuedAtTime:Kn(Us(s.iat)),expirationTime:Kn(Us(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Us(e){return Number(e)*1e3}function Wi(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Cr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Nl(n);return s?JSON.parse(s):(Cr("Failed to decode base64 JWT payload"),null)}catch(s){return Cr("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Sa(e){const t=Wi(e);return j(t,"internal-error"),j(typeof t.exp<"u","internal-error"),j(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function sr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Vt&&$m(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function $m({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Bm{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fi{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Kn(this.lastLoginAt),this.creationTime=Kn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vr(e){var t;const n=e.auth,r=await e.getIdToken(),s=await sr(e,Br(n,{idToken:r}));j(s?.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?ql(i.providerUserInfo):[],c=jm(e.providerData,o),a=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!c?.length,u=a?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new fi(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function Vm(e){const t=qe(e);await Vr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function jm(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function ql(e){return e.map(t=>{var{providerId:n}=t,r=$i(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Wm(e,t){const n=await Kl(e,{},async()=>{const r=lr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=await zl(e,s,"/v1/token",`key=${i}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Wl.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Km(e,t){return ot(e,"POST","/v2/accounts:revokeToken",it(e,t))}/**
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
 */class _n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){j(t.idToken,"internal-error"),j(typeof t.idToken<"u","internal-error"),j(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Sa(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){j(t.length!==0,"internal-error");const n=Sa(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Wm(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new _n;return r&&(j(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new _n,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
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
 */function Tt(e,t){j(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Ve{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=$i(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new fi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await sr(this,this.stsTokenManager.getToken(this.auth,t));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Hm(this,t)}reload(){return Vm(this)}_assign(t){this!==t&&(j(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Ve(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Vr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(vt(this.auth));const t=await this.getIdToken();return await sr(this,Fm(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,c,a,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(c=n.tenantId)!==null&&c!==void 0?c:void 0,F=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,L=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:P,isAnonymous:U,providerData:J,stsTokenManager:q}=n;j(M&&q,t,"internal-error");const H=_n.fromJSON(this.name,q);j(typeof M=="string",t,"internal-error"),Tt(f,t.name),Tt(h,t.name),j(typeof P=="boolean",t,"internal-error"),j(typeof U=="boolean",t,"internal-error"),Tt(g,t.name),Tt(_,t.name),Tt(I,t.name),Tt(F,t.name),Tt(L,t.name),Tt(x,t.name);const S=new Ve({uid:M,auth:t,email:h,emailVerified:P,displayName:f,isAnonymous:U,photoURL:_,phoneNumber:g,tenantId:I,stsTokenManager:H,createdAt:L,lastLoginAt:x});return J&&Array.isArray(J)&&(S.providerData=J.map($=>Object.assign({},$))),F&&(S._redirectEventId=F),S}static async _fromIdTokenResponse(t,n,r=!1){const s=new _n;s.updateFromServerResponse(n);const i=new Ve({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Vr(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];j(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ql(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new _n;c.updateFromIdToken(r);const a=new Ve({uid:s.localId,auth:t,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new fi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(a,l),a}}/**
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
 */const Ta=new Map;function _t(e){bt(e instanceof Function,"Expected a class definition");let t=Ta.get(e);return t?(bt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ta.set(e,t),t)}/**
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
 */class Gl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Gl.type="NONE";const Ca=Gl;/**
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
 */function Ar(e,t,n){return`firebase:${e}:${t}:${n}`}class vn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ar(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ar("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Br(this.auth,{idToken:t}).catch(()=>{});return n?Ve._fromGetAccountInfoResponse(this.auth,n,t):null}return Ve._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new vn(_t(Ca),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||_t(Ca);const o=Ar(r,t.config.apiKey,t.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const h=await Br(t,{idToken:u}).catch(()=>{});if(!h)break;f=await Ve._fromGetAccountInfoResponse(t,h,u)}else f=Ve._fromJSON(t,u);l!==i&&(c=f),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new vn(i,t,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new vn(i,t,r))}}/**
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
 */function Aa(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Xl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Jl(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(eu(t))return"Blackberry";if(tu(t))return"Webos";if(Yl(t))return"Safari";if((t.includes("chrome/")||Ql(t))&&!t.includes("edge/"))return"Chrome";if(Zl(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if(r?.length===2)return r[1]}return"Other"}function Jl(e=Te()){return/firefox\//i.test(e)}function Yl(e=Te()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ql(e=Te()){return/crios\//i.test(e)}function Xl(e=Te()){return/iemobile/i.test(e)}function Zl(e=Te()){return/android/i.test(e)}function eu(e=Te()){return/blackberry/i.test(e)}function tu(e=Te()){return/webos/i.test(e)}function Ki(e=Te()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function zm(e=Te()){var t;return Ki(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function qm(){return tg()&&document.documentMode===10}function nu(e=Te()){return Ki(e)||Zl(e)||tu(e)||eu(e)||/windows phone/i.test(e)||Xl(e)}/**
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
 */function ru(e,t=[]){let n;switch(e){case"Browser":n=Aa(Te());break;case"Worker":n=`${Aa(Te())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ur}/${r}`}/**
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
 */class Gm{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,c)=>{try{const a=t(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Jm(e,t={}){return ot(e,"GET","/v2/passwordPolicy",it(e,t))}/**
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
 */const Ym=6;class Qm{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Ym,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class Xm{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ra(this),this.idTokenSubscription=new Ra(this),this.beforeStateQueue=new Gm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=_t(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await vn.create(this,t),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Br(this,{idToken:t}),r=await Ve._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Ue(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s?._redirectEventId,a=await this.tryRedirectSignIn(t);(!o||o===c)&&a?.user&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Vr(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Om()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ue(this.app))return Promise.reject(vt(this));const n=t?qe(t):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&j(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ue(this.app)?Promise.reject(vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Jm(this),n=new Qm(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new cr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Km(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&_t(t)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await vn.create(this,[_t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=t.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=t.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ru(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n?.error&&Cm(`Error while retrieving App Check token: ${n.error}`),n?.token}}function jt(e){return qe(e)}class Ra{constructor(t){this.auth=t,this.observer=null,this.addObserver=cg(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let us={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zm(e){us=e}function su(e){return us.loadJS(e)}function e_(){return us.recaptchaEnterpriseScript}function t_(){return us.gapiScript}function n_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class r_{constructor(){this.enterprise=new s_}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class s_{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const i_="recaptcha-enterprise",iu="NO_RECAPTCHA";class o_{constructor(t){this.type=i_,this.auth=jt(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Um(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new Dm(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;Ia(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(iu)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new r_().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Ia(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=e_();a.length!==0&&(a+=c),su(a).then(()=>{s(c,i,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function Pa(e,t,n,r=!1,s=!1){const i=new o_(e);let o;if(s)o=iu;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const a=c.phoneEnrollmentInfo.phoneNumber,l=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const a=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function di(e,t,n,r,s){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Pa(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Pa(e,t,n,n==="getOobCode");return r(e,c)}else return Promise.reject(o)})}/**
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
 */function a_(e,t){const n=Hl(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(En(i,t??{}))return s;Be(s,"already-initialized")}return n.initialize({options:t})}function c_(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(_t);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function l_(e,t,n){const r=jt(e);j(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=ou(t),{host:o,port:c}=u_(t),a=c===null?"":`:${c}`,l={url:`${i}//${o}${a}/`},u=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){j(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),j(En(l,r.config.emulator)&&En(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,f_()}function ou(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function u_(e){const t=ou(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Oa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Oa(o)}}}function Oa(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function f_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class zi{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return mt("not implemented")}_getIdTokenResponse(t){return mt("not implemented")}_linkToIdToken(t,n){return mt("not implemented")}_getReauthenticationResolver(t){return mt("not implemented")}}async function d_(e,t){return ot(e,"POST","/v1/accounts:signUp",t)}async function h_(e,t){return ot(e,"POST","/v1/accounts:update",it(e,t))}/**
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
 */async function p_(e,t){return dr(e,"POST","/v1/accounts:signInWithPassword",it(e,t))}async function g_(e,t){return ot(e,"POST","/v1/accounts:sendOobCode",it(e,t))}async function m_(e,t){return g_(e,t)}/**
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
 */async function __(e,t){return dr(e,"POST","/v1/accounts:signInWithEmailLink",it(e,t))}async function v_(e,t){return dr(e,"POST","/v1/accounts:signInWithEmailLink",it(e,t))}/**
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
 */class ir extends zi{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new ir(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ir(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return di(t,n,"signInWithPassword",p_);case"emailLink":return __(t,{email:this._email,oobCode:this._password});default:Be(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return di(t,r,"signUpPassword",d_);case"emailLink":return v_(t,{idToken:n,email:this._email,oobCode:this._password});default:Be(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function yn(e,t){return dr(e,"POST","/v1/accounts:signInWithIdp",it(e,t))}/**
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
 */const y_="http://localhost";class nn extends zi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new nn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Be("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=$i(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new nn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return yn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,yn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,yn(t,n)}buildRequest(){const t={requestUri:y_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=lr(n)}return t}}/**
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
 */function b_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function w_(e){const t=kn(xn(e)).link,n=t?kn(xn(t)).deep_link_id:null,r=kn(xn(e)).deep_link_id;return(r?kn(xn(r)).link:null)||r||n||t||e}class qi{constructor(t){var n,r,s,i,o,c;const a=kn(xn(t)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(r=a.oobCode)!==null&&r!==void 0?r:null,f=b_((s=a.mode)!==null&&s!==void 0?s:null);j(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(t){const n=w_(t);try{return new qi(n)}catch{return null}}}/**
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
 */class Tn{constructor(){this.providerId=Tn.PROVIDER_ID}static credential(t,n){return ir._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=qi.parseLink(n);return j(r,"argument-error"),ir._fromEmailAndCode(t,r.code,r.tenantId)}}Tn.PROVIDER_ID="password";Tn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Tn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gi{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hr extends Gi{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class pt extends hr{constructor(){super("facebook.com")}static credential(t){return nn._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return pt.credentialFromTaggedObject(t)}static credentialFromError(t){return pt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return pt.credential(t.oauthAccessToken)}catch{return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";pt.PROVIDER_ID="facebook.com";/**
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
 */class gt extends hr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return nn._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return gt.credentialFromTaggedObject(t)}static credentialFromError(t){return gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return gt.credential(n,r)}catch{return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com";gt.PROVIDER_ID="google.com";/**
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
 */class xt extends hr{constructor(){super("github.com")}static credential(t){return nn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return xt.credential(t.oauthAccessToken)}catch{return null}}}xt.GITHUB_SIGN_IN_METHOD="github.com";xt.PROVIDER_ID="github.com";/**
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
 */class Nt extends hr{constructor(){super("twitter.com")}static credential(t,n){return nn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Nt.credentialFromTaggedObject(t)}static credentialFromError(t){return Nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
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
 */async function E_(e,t){return dr(e,"POST","/v1/accounts:signUp",it(e,t))}/**
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
 */class rn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await Ve._fromIdTokenResponse(t,r,s),o=ka(r);return new rn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=ka(r);return new rn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function ka(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class jr extends Vt{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,jr.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new jr(t,n,r,s)}}function au(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?jr._fromErrorAndOperation(e,i,t,r):i})}async function I_(e,t,n=!1){const r=await sr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return rn._forOperation(e,"link",r)}/**
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
 */async function S_(e,t,n=!1){const{auth:r}=e;if(Ue(r.app))return Promise.reject(vt(r));const s="reauthenticate";try{const i=await sr(e,au(r,s,t,e),n);j(i.idToken,r,"internal-error");const o=Wi(i.idToken);j(o,r,"internal-error");const{sub:c}=o;return j(e.uid===c,r,"user-mismatch"),rn._forOperation(e,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Be(r,"user-mismatch"),i}}/**
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
 */async function cu(e,t,n=!1){if(Ue(e.app))return Promise.reject(vt(e));const r="signIn",s=await au(e,r,t),i=await rn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function T_(e,t){return cu(jt(e),t)}/**
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
 */async function lu(e){const t=jt(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function C_(e,t){await h_(qe(e),{oobCode:t})}async function A_(e,t,n){if(Ue(e.app))return Promise.reject(vt(e));const r=jt(e),o=await di(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",E_).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&lu(e),a}),c=await rn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function R_(e,t,n){return Ue(e.app)?Promise.reject(vt(e)):T_(qe(e),Tn.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&lu(e),r})}async function xa(e,t){const n=qe(e),s={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()},{email:i}=await m_(n.auth,s);i!==e.email&&await e.reload()}function P_(e,t,n,r){return qe(e).onIdTokenChanged(t,n,r)}function O_(e,t,n){return qe(e).beforeAuthStateChanged(t,n)}function yy(e,t,n,r){return qe(e).onAuthStateChanged(t,n,r)}function k_(e){return qe(e).signOut()}const Wr="__sak";/**
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
 */class uu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wr,"1"),this.storage.removeItem(Wr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const x_=1e3,N_=10;class fu extends uu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=t.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);qm()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,N_):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},x_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}fu.type="LOCAL";const L_=fu;/**
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
 */class du extends uu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}du.type="SESSION";const hu=du;/**
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
 */function M_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class fs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new fs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await M_(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fs.receivers=[];/**
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
 */function Ji(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class D_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=Ji("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(h.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function st(){return window}function U_(e){st().location.href=e}/**
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
 */function pu(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function F_(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function H_(){var e;return((e=navigator?.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function $_(){return pu()?self:null}/**
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
 */const gu="firebaseLocalStorageDb",B_=1,Kr="firebaseLocalStorage",mu="fbase_key";class pr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ds(e,t){return e.transaction([Kr],t?"readwrite":"readonly").objectStore(Kr)}function V_(){const e=indexedDB.deleteDatabase(gu);return new pr(e).toPromise()}function hi(){const e=indexedDB.open(gu,B_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Kr,{keyPath:mu})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Kr)?t(r):(r.close(),await V_(),t(await hi()))})})}async function Na(e,t,n){const r=ds(e,!0).put({[mu]:t,value:n});return new pr(r).toPromise()}async function j_(e,t){const n=ds(e,!1).get(t),r=await new pr(n).toPromise();return r===void 0?null:r.value}function La(e,t){const n=ds(e,!0).delete(t);return new pr(n).toPromise()}const W_=800,K_=3;class _u{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hi(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>K_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fs._getInstance($_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await F_(),!this.activeServiceWorker)return;this.sender=new D_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||H_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await hi();return await Na(t,Wr,"1"),await La(t,Wr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Na(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>j_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>La(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=ds(s,!1).getAll();return new pr(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),W_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_u.type="LOCAL";const z_=_u;new fr(3e4,6e4);/**
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
 */function vu(e,t){return t?_t(t):(j(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Yi extends zi{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return yn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return yn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return yn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function q_(e){return cu(e.auth,new Yi(e),e.bypassAuthState)}function G_(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),S_(n,new Yi(e),e.bypassAuthState)}async function J_(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),I_(n,new Yi(e),e.bypassAuthState)}/**
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
 */class yu{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=t;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return q_;case"linkViaPopup":case"linkViaRedirect":return J_;case"reauthViaPopup":case"reauthViaRedirect":return G_;default:Be(this.auth,"internal-error")}}resolve(t){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Y_=new fr(2e3,1e4);async function Ma(e,t,n){if(Ue(e.app))return Promise.reject(We(e,"operation-not-supported-in-this-environment"));const r=jt(e);Am(e,t,Gi);const s=vu(r,n);return new Qt(r,"signInViaPopup",t,s).executeNotNull()}class Qt extends yu{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Qt.currentPopupAction&&Qt.currentPopupAction.cancel(),Qt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return j(t,this.auth,"internal-error"),t}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const t=Ji();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Y_.get())};t()}}Qt.currentPopupAction=null;/**
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
 */const Q_="pendingRedirect",Rr=new Map;class X_ extends yu{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Rr.get(this.auth._key());if(!t){try{const r=await Z_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Rr.set(this.auth._key(),t)}return this.bypassAuthState||Rr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Z_(e,t){const n=nv(t),r=tv(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ev(e,t){Rr.set(e._key(),t)}function tv(e){return _t(e._redirectPersistence)}function nv(e){return Ar(Q_,e.config.apiKey,e.name)}async function rv(e,t,n=!1){if(Ue(e.app))return Promise.reject(vt(e));const r=jt(e),s=vu(r,t),o=await new X_(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const sv=10*60*1e3;class iv{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!ov(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!bu(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(We(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=sv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Da(t))}saveEventToCache(t){this.cachedEventUids.add(Da(t)),this.lastProcessedEventTime=Date.now()}}function Da(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function bu({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function ov(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bu(e);default:return!1}}/**
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
 */async function av(e,t={}){return ot(e,"GET","/v1/projects",t)}/**
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
 */const cv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lv=/^https?/;async function uv(e){if(e.config.emulator)return;const{authorizedDomains:t}=await av(e);for(const n of t)try{if(fv(n))return}catch{}Be(e,"unauthorized-domain")}function fv(e){const t=ui(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!lv.test(n))return!1;if(cv.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const dv=new fr(3e4,6e4);function Ua(){const e=st().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function hv(e){return new Promise((t,n)=>{var r,s,i;function o(){Ua(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ua(),n(We(e,"network-request-failed"))},timeout:dv.get()})}if(!((s=(r=st().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=st().gapi)===null||i===void 0)&&i.load)o();else{const c=n_("iframefcb");return st()[c]=()=>{gapi.load?o():n(We(e,"network-request-failed"))},su(`${t_()}?onload=${c}`).catch(a=>n(a))}}).catch(t=>{throw Pr=null,t})}let Pr=null;function pv(e){return Pr=Pr||hv(e),Pr}/**
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
 */const gv=new fr(5e3,15e3),mv="__/auth/iframe",_v="emulator/auth/iframe",vv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bv(e){const t=e.config;j(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ji(t,_v):`https://${e.config.authDomain}/${mv}`,r={apiKey:t.apiKey,appName:e.name,v:ur},s=yv.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${lr(r).slice(1)}`}async function wv(e){const t=await pv(e),n=st().gapi;return j(n,e,"internal-error"),t.open({where:document.body,url:bv(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=We(e,"network-request-failed"),c=st().setTimeout(()=>{i(o)},gv.get());function a(){st().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const Ev={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Iv=500,Sv=600,Tv="_blank",Cv="http://localhost";class Fa{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Av(e,t,n,r=Iv,s=Sv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Ev),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Te().toLowerCase();n&&(c=Ql(l)?Tv:n),Jl(l)&&(t=t||Cv,a.scrollbars="yes");const u=Object.entries(a).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(zm(l)&&c!=="_self")return Rv(t||"",c),new Fa(null);const f=window.open(t||"",c,u);j(f,e,"popup-blocked");try{f.focus()}catch{}return new Fa(f)}function Rv(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Pv="__/auth/handler",Ov="emulator/auth/handler",kv=encodeURIComponent("fac");async function Ha(e,t,n,r,s,i){j(e.config.authDomain,e,"auth-domain-config-required"),j(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ur,eventId:s};if(t instanceof Gi){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ag(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(t instanceof hr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await e._getAppCheckToken(),l=a?`#${kv}=${encodeURIComponent(a)}`:"";return`${xv(e)}?${lr(c).slice(1)}${l}`}function xv({config:e}){return e.emulator?ji(e,Ov):`https://${e.authDomain}/${Pv}`}/**
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
 */const Fs="webStorageSupport";class Nv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hu,this._completeRedirectFn=rv,this._overrideRedirectResult=ev}async _openPopup(t,n,r,s){var i;bt((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ha(t,n,r,ui(),s);return Av(t,o,Ji())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await Ha(t,n,r,ui(),s);return U_(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(bt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await wv(t),r=new iv(t);return n.register("authEvent",s=>(j(s?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Fs,{type:Fs},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[Fs];o!==void 0&&n(!!o),Be(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uv(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return nu()||Yl()||Ki()}}const Lv=Nv;var $a="@firebase/auth",Ba="1.10.0";/**
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
 */class Mv{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Dv(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Uv(e){nr(new In("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ru(e)},l=new Xm(r,s,i,a);return c_(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),nr(new In("auth-internal",t=>{const n=jt(t.getProvider("auth").getImmediate());return(r=>new Mv(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wn($a,Ba,Dv(e)),Wn($a,Ba,"esm2017")}/**
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
 */const Fv=5*60,Hv=Ml("authIdTokenMaxAge")||Fv;let Va=null;const $v=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Hv)return;const s=n?.token;Va!==s&&(Va=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function by(e=pm()){const t=Hl(e,"auth");if(t.isInitialized())return t.getImmediate();const n=a_(e,{popupRedirectResolver:Lv,persistence:[z_,L_,hu]}),r=Ml("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=$v(i.toString());O_(n,o,()=>o(n.currentUser)),P_(n,c=>o(c))}}const s=Jp("auth");return s&&l_(n,`http://${s}`),n}function Bv(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Zm({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=We("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Bv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Uv("Browser");const Vv=Mh("auth",{state:()=>({user:null,loading:!1,error:null}),actions:{async login(e,t){this.loading=!0,this.error=null;try{const n=await R_(auth,e,t);return this.user=n.user,this.user.emailVerified?{success:!0}:(this.error="EMAIL_NOT_VERIFIED",{success:!1,reason:"EMAIL_NOT_VERIFIED"})}catch(n){const r=n.code||n.message;return this.error=this.getReadableErrorMessage(r),{success:!1,reason:r}}finally{this.loading=!1}},async signup(e,t){this.loading=!0,this.error=null;try{const n=await A_(auth,e,t);return await xa(n.user),this.user=n.user,{success:!0}}catch(n){const r=this.getSignupErrorMessage(n.code,n.message);return this.error=r,{success:!1,reason:n.code,message:r}}finally{this.loading=!1}},async loginWithGoogle(){const e=new gt;try{const t=await Ma(auth,e);return this.user=t.user,!0}catch(t){return this.error=t.message,!1}},async loginWithFacebook(){const e=new pt;try{const t=await Ma(auth,e);return this.user=t.user,!0}catch(t){return this.error=t.message,!1}},async logout(){try{return await k_(auth),this.user=null,!0}catch(e){return this.error=e.message,!1}},async verifyEmail(e){this.loading=!0,this.error=null;try{return await C_(auth,e),this.user&&await this.user.reload(),!0}catch(t){return this.error=t.message,!1}finally{this.loading=!1}},async resendVerificationEmail(){if(!this.user)return{success:!1,error:"No user logged in"};try{return await xa(this.user),{success:!0}}catch(e){const t=this.getVerificationErrorMessage(e.code||e.message);return this.error=t,{success:!1,error:t,reason:e.code}}},getReadableErrorMessage(e){return{"auth/wrong-password":"Incorrect password","auth/user-not-found":"No account found with this email","auth/invalid-email":"Invalid email address","auth/user-disabled":"This account has been disabled","auth/email-already-in-use":"This email is already registered","auth/weak-password":"Password should be at least 6 characters",EMAIL_NOT_VERIFIED:"Please verify your email address first","auth/too-many-requests":"Too many attempts. Please try again later",INVALID_LOGIN_CREDENTIALS:"Invalid email or password","auth/invalid-credential":"Invalid email or password","auth/invalid-login-credentials":"Invalid email or password"}[e]||"An error occurred during authentication"},getSignupErrorMessage(e,t){const n={"auth/email-already-in-use":"This email is already registered","auth/invalid-email":"Please enter a valid email address","auth/operation-not-allowed":"Email/password accounts are not enabled. Please contact support.","auth/weak-password":"Password should be at least 6 characters",WEAK_PASSWORD:"Password should be at least 6 characters"};return t?.includes("WEAK_PASSWORD")?n.WEAK_PASSWORD:n[e]||t||"Failed to create account"},getVerificationErrorMessage(e){return{TOO_MANY_ATTEMPTS_TRY_LATER:"Too many attempts. Please wait a few minutes before trying again.","auth/too-many-requests":"Too many attempts. Please wait a few minutes before trying again.","auth/user-not-found":"User not found.","auth/invalid-user":"Invalid user."}[e]||"Failed to send verification email"}},getters:{isEmailVerified:e=>e.user?.emailVerified??!1}}),Hs=Ah(function(){const t=Fp({scrollBehavior:()=>({left:0,top:0}),routes:$p,history:hp("/")});return t.beforeEach((n,r,s)=>{const i=Vv(),o=n.matched.some(l=>l.meta.requiresAuth),c=n.path==="/login"||n.path==="/signup",a=n.path==="/";o&&!i.user?s("/login"):(c||a)&&i.user?s("/dashboard"):s()}),t});async function jv(e,t){const n=e(Ch);n.use(Th,t);const r=typeof Rs=="function"?await Rs({}):Rs;n.use(r);const s=Sn(typeof Hs=="function"?await Hs({store:r}):Hs);return r.use(({store:i})=>{i.router=s}),{app:n,store:r,router:s}}const Wv={config:{}},Kv="/";async function zv({app:e,router:t,store:n},r){let s=!1;const i=a=>{try{return t.resolve(a).href}catch{}return Object(a)===a?null:a},o=a=>{if(s=!0,typeof a=="string"&&/^https?:\/\//.test(a)){window.location.href=a;return}const l=i(a);l!==null&&(window.location.href=l,window.location.reload())},c=window.location.href.replace(window.location.origin,"");for(let a=0;s===!1&&a<r.length;a++)try{await r[a]({app:e,router:t,store:n,ssrContext:null,redirect:o,urlPath:c,publicPath:Kv})}catch(l){if(l&&l.url){o(l.url);return}console.error("[Quasar] boot error:",l);return}s!==!0&&(e.use(t),e.mount("#q-app"))}jv(eh,Wv).then(e=>{const[t,n]=Promise.allSettled!==void 0?["allSettled",r=>r.map(s=>{if(s.status==="rejected"){console.error("[Quasar] boot error:",s.reason);return}return s.value.default})]:["all",r=>r.map(s=>s.default)];return Promise[t]([ke(()=>import("./axios-Eaxd8t3R.js"),[]),ke(()=>import("./firebase-CDf-dJ3W.js"),[])]).then(r=>{const s=n(r).filter(i=>typeof i=="function");zv(e,s)})});export{Qv as $,Ir as A,uy as B,In as C,Lc as D,cr as E,Vt as F,Zn as G,os as H,tn as I,on as J,Dc as K,Dl as L,nl as M,el as N,_f as O,gy as P,Nf as Q,Ne as R,Yv as S,sl as T,et as U,pd as V,Du as W,Pi as X,Jv as Y,vi as Z,nr as _,Hl as a,gn as a0,If as a1,Ef as a2,iy as a3,Ai as a4,fy as a5,my as a6,cy as a7,yh as a8,rt as a9,ny as aa,Xv as ab,dy as ac,qv as ad,fh as ae,Zs as af,sy as ag,oy as ah,ay as ai,jo as aj,Li as ak,Gv as al,Cf as am,ah as an,ry as ao,wh as ap,ey as aq,ty as ar,qe as b,En as c,py as d,ng as e,vy as f,pm as g,_y as h,Zp as i,yy as j,by as k,hm as l,Zv as m,De as n,kg as o,Ni as p,yd as q,Wn as r,He as s,hy as t,Vv as u,rg as v,ly as w,Xr as x,Hn as y,Mc as z};
