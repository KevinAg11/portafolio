(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,T=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),E=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},D=/-\w/g,O=E(e=>e.replace(D,e=>e.slice(1).toUpperCase())),k=/\B([A-Z])/g,A=E(e=>e.replace(k,`-$1`).toLowerCase()),j=E(e=>e.charAt(0).toUpperCase()+e.slice(1)),M=E(e=>e?`on${j(e)}`:``),N=(e,t)=>!Object.is(e,t),ee=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},P=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},te=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ne=e=>{let t=g(e)?Number(e):NaN;return isNaN(t)?e:t},re,ie=()=>re||(re=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{});function ae(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?le(r):ae(r);if(i)for(let e in i)t[e]=i[e]}return t}if(g(e)||v(e))return e}var oe=/;(?![^(]*\))/g,se=/:([^]+)/,ce=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function le(e){let t={};return e.replace(ce,e=>e.startsWith(`/*`)?``:e).split(oe).forEach(e=>{if(e){let n=e.split(se);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function ue(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=ue(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var de=e(`itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly`);function fe(e){return!!e||e===``}function pe(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let i=0;r&&i<e.length;i++)r=_e(e[i],t[i],n);return r}function me(e,t,n){if(e.size!==t.size)return!1;let r=Array.from(t),i=new Uint8Array(r.length);for(let t of e){let e=-1;for(let a=0;a<r.length;a++)if(!i[a]&&_e(t,r[a],n)){e=a;break}if(e<0)return!1;i[e]=1}return!0}function he(e,t,n){let r=f(e),i=f(t);if(r||i||(r=p(e),i=p(t),r||i))return r&&i?me(e,t,n):!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e){let i=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(i&&!a||!i&&a||!_e(e[r],t[r],n))return!1}return String(e)===String(t)}function ge(e,t,n,r){n||(n=[new Map,new Map]);let[i,a]=n;if(i.has(e)||a.has(t))return i.get(e)===t&&a.get(t)===e;i.set(e,t),a.set(t,e);let o=r(e,t,n);return i.delete(e),a.delete(t),o}function _e(e,t,n){if(e===t)return!0;let r=m(e),i=m(t);return r||i?r&&i?e.getTime()===t.getTime():!1:(r=_(e),i=_(t),r||i?e===t:(r=d(e),i=d(t),r||i?r&&i?ge(e,t,n,pe):!1:(r=v(e),i=v(t),r||i?!r||!i?!1:ge(e,t,n,he):String(e)===String(t))))}var ve=e=>!!(e&&e.__v_isRef===!0),F=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?ve(e)?F(e.value):JSON.stringify(e,ye,2):String(e),ye=(e,t)=>ve(t)?ye(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[be(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>be(e))}:_(t)?be(t):v(t)&&!d(t)&&!C(t)?String(t):t,be=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,xe,Se=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&xe&&(xe.active?(this.parent=xe,this.index=(xe.scopes||(xe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=xe;try{return xe=this,e()}finally{xe=t}}}on(){++this._on===1&&(this.prevScope=xe,xe=this)}off(){if(this._on>0&&--this._on===0){if(xe===this)xe=this.prevScope;else{let e=xe;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function I(){return xe}var Ce,we=new WeakSet,Te=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xe&&(xe.active?xe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,we.has(this)&&(we.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||z(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ze(this),ke(this);let e=Ce,t=Fe;Ce=this,Fe=!0;try{return this.fn()}finally{Ae(this),Ce=e,Fe=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ne(e);this.deps=this.depsTail=void 0,ze(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?we.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){je(this)&&this.run()}get dirty(){return je(this)}},L=0,Ee,R;function z(e,t=!1){e.flags|=8,t?(e.next=R,R=e):(e.next=Ee,Ee=e)}function De(){L++}function Oe(){if(--L>0)return;if(R){let e=R;for(R=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Ee;){let t=Ee;for(Ee=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||(e=t)}t=n}}if(e)throw e}function ke(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ae(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Ne(r),Pe(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function je(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Me(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Me(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Be)||(e.globalVersion=Be,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!je(e))))return;e.flags|=2;let t=e.dep,n=Ce,r=Fe;Ce=e,Fe=!0;try{ke(e);let n=e.fn(e._value);(t.version===0||N(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{Ce=n,Fe=r,Ae(e),e.flags&=-3}}function Ne(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Ne(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Pe(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Fe=!0,Ie=[];function Le(){Ie.push(Fe),Fe=!1}function Re(){let e=Ie.pop();Fe=e===void 0||e}function ze(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=Ce;Ce=void 0;try{t()}finally{Ce=e}}}var Be=0,Ve=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},He=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ce||!Fe||Ce===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ce)t=this.activeLink=new Ve(Ce,this),Ce.deps?(t.prevDep=Ce.depsTail,Ce.depsTail.nextDep=t,Ce.depsTail=t):Ce.deps=Ce.depsTail=t,Ue(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=Ce.depsTail,t.nextDep=void 0,Ce.depsTail.nextDep=t,Ce.depsTail=t,Ce.deps===t&&(Ce.deps=e)}return t}trigger(e){this.version++,Be++,this.notify(e)}notify(e){De();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Oe()}}};function Ue(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Ue(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var We=new WeakMap,Ge=Symbol(``),Ke=Symbol(``),qe=Symbol(``);function Je(e,t,n){if(Fe&&Ce){let t=We.get(e);t||We.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new He),r.map=t,r.key=n),r.track()}}function Ye(e,t,n,r,i,a){let o=We.get(e);if(!o){Be++;return}let s=e=>{e&&e.trigger()};if(De(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===qe||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(qe)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Ge)),f(e)&&s(o.get(Ke)));break;case`delete`:i||(s(o.get(Ge)),f(e)&&s(o.get(Ke)));break;case`set`:f(e)&&s(o.get(Ge))}}Oe()}function Xe(e){let t=Rt(e);return t===e||(Je(t,`iterate`,qe),It(e))?t:Ft(e)?Pt(e)?t.map(e=>Vt(Bt(e))):t.map(Vt):t.map(Bt)}function Ze(e){return Je(e=Rt(e),`iterate`,qe),e}function Qe(e,t){return Ft(e)?Vt(Pt(e)?Bt(t):t):Bt(t)}var $e={__proto__:null,[Symbol.iterator](){return et(this,Symbol.iterator,e=>Qe(this,e))},concat(...e){return Xe(this).concat(...e.map(e=>d(e)?Xe(e):e))},entries(){return et(this,`entries`,e=>(e[1]=Qe(this,e[1]),e))},every(e,t){return rt(this,`every`,e,t,void 0,arguments)},filter(e,t){return rt(this,`filter`,e,t,e=>e.map(e=>Qe(this,e)),arguments)},find(e,t){return rt(this,`find`,e,t,e=>Qe(this,e),arguments)},findIndex(e,t){return rt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return rt(this,`findLast`,e,t,e=>Qe(this,e),arguments)},findLastIndex(e,t){return rt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return rt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return at(this,`includes`,e)},indexOf(...e){return at(this,`indexOf`,e)},join(e){return Xe(this).join(e)},lastIndexOf(...e){return at(this,`lastIndexOf`,e)},map(e,t){return rt(this,`map`,e,t,void 0,arguments)},pop(){return ot(this,`pop`)},push(...e){return ot(this,`push`,e)},reduce(e,...t){return it(this,`reduce`,e,t)},reduceRight(e,...t){return it(this,`reduceRight`,e,t)},shift(){return ot(this,`shift`)},some(e,t){return rt(this,`some`,e,t,void 0,arguments)},splice(...e){return ot(this,`splice`,e)},toReversed(){return Xe(this).toReversed()},toSorted(e){return Xe(this).toSorted(e)},toSpliced(...e){return Xe(this).toSpliced(...e)},unshift(...e){return ot(this,`unshift`,e)},values(){return et(this,`values`,e=>Qe(this,e))}};function et(e,t,n){let r=Ze(e),i=r[t],a=i.call(r);if(r!==e&&!It(e)){if(a[Symbol.toStringTag]===`Array Iterator`){let e=Object.create(Object.getPrototypeOf(a));return e.next=()=>tt(a.next(),n),i!==nt[t]&&Object.defineProperties(e,{return:{get(){let e=a.return;return typeof e==`function`?e.bind(a):e}},throw:{get(){let e=a.throw;return typeof e==`function`?e.bind(a):e}}}),e}a._next=a.next,a.next=()=>tt(a._next(),n)}return a}function tt(e,t){return e.done||(e.value=t(e.value)),e}var nt=Array.prototype;function rt(e,t,n,r,i,a){let o=Ze(e),s=o!==e&&!It(e),c=o[t];if(c!==nt[t]){let t=c.apply(e,a);return s?Bt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,Qe(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function it(e,t,n,r){let i=Ze(e),a=i!==e&&!It(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=Qe(e,t)),n.call(this,t,Qe(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?Qe(e,c):c}function at(e,t,n){let r=Rt(e);Je(r,`iterate`,qe);let i=r[t](...n);return(i===-1||i===!1)&&Lt(n[0])?(n[0]=Rt(n[0]),r[t](...n)):i}function ot(e,t,n=[]){Le(),De();let r=Rt(e)[t].apply(e,n);return Oe(),Re(),r}var st=e(`__proto__,__v_isRef,__isVue`),ct=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function lt(e){_(e)||(e=String(e));let t=Rt(this);return Je(t,`has`,e),t.hasOwnProperty(e)}var ut=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Ot:Dt:i?Et:Tt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=$e[t]))return e;if(t===`hasOwnProperty`)return lt}let o=Reflect.get(e,t,Ht(e)?e:n);if((_(t)?ct.has(t):st(t))||(r||Je(e,`get`,t),i))return o;if(Ht(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?Mt(e):e}return v(o)?r?Mt(o):At(o):o}},dt=class extends ut{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=Ft(i);if(!It(n)&&!Ft(n)&&(i=Rt(i),n=Rt(n)),!a&&Ht(i)&&!Ht(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,Ht(e)?e:r);return e===Rt(r)&&s&&(o?N(n,i)&&Ye(e,`set`,t,n,i):Ye(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&Ye(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return _(t)&&ct.has(t)||Je(e,`has`,t),n}ownKeys(e){return Je(e,`iterate`,d(e)?`length`:Ge),Reflect.ownKeys(e)}},ft=class extends ut{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},pt=new dt,mt=new ft,ht=new dt(!0),gt=e=>e,_t=e=>Reflect.getPrototypeOf(e);function vt(e,t,n){return function(...r){let i=this.__v_raw,a=Rt(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?gt:t?Vt:Bt;return!t&&Je(a,`iterate`,l?Ke:Ge),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function yt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function bt(e,t){let n={get(n){let r=this.__v_raw,i=Rt(r),a=Rt(n);e||(N(n,a)&&Je(i,`get`,n),Je(i,`get`,a));let{has:o}=_t(i),s=t?gt:e?Vt:Bt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&Je(Rt(t),`iterate`,Ge),t.size},has(t){let n=this.__v_raw,r=Rt(n),i=Rt(t);return e||(N(t,i)&&Je(r,`has`,t),Je(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=Rt(a),s=t?gt:e?Vt:Bt;return!e&&Je(o,`iterate`,Ge),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:yt(`add`),set:yt(`set`),delete:yt(`delete`),clear:yt(`clear`)}:{add(e){let n=Rt(this),r=_t(n),i=Rt(e),a=!t&&!It(e)&&!Ft(e)?i:e;return r.has.call(n,a)||N(e,a)&&r.has.call(n,e)||N(i,a)&&r.has.call(n,i)||(n.add(a),Ye(n,`add`,a,a)),this},set(e,n){t||It(n)||Ft(n)||(n=Rt(n));let r=Rt(this),{has:i,get:a}=_t(r),o=i.call(r,e);o||(e=Rt(e),o=i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?N(n,s)&&Ye(r,`set`,e,n,s):Ye(r,`add`,e,n),this},delete(e){let t=Rt(this),{has:n,get:r}=_t(t),i=n.call(t,e);i||(e=Rt(e),i=n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&Ye(t,`delete`,e,void 0,a),o},clear(){let e=Rt(this),t=e.size!==0,n=e.clear();return t&&Ye(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=vt(r,e,t)}),n}function xt(e,t){let n=bt(e,t);return(r,i,a)=>i===`__v_isReactive`?!e:i===`__v_isReadonly`?e:i===`__v_isShallow`?t:i===`__v_raw`?r:Reflect.get(u(n,i)&&i in r?n:r,i,a)}var St={get:xt(!1,!1)},Ct={get:xt(!1,!0)},wt={get:xt(!0,!1)},Tt=new WeakMap,Et=new WeakMap,Dt=new WeakMap,Ot=new WeakMap;function kt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function At(e){return Ft(e)?e:Nt(e,!1,pt,St,Tt)}function jt(e){return Nt(e,!1,ht,Ct,Et)}function Mt(e){return Nt(e,!0,mt,wt,Dt)}function Nt(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=kt(S(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Pt(e){return Ft(e)?Pt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ft(e){return!!(e&&e.__v_isReadonly)}function It(e){return!!(e&&e.__v_isShallow)}function Lt(e){return e?!!e.__v_raw:!1}function Rt(e){let t=e&&e.__v_raw;return t?Rt(t):e}function zt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&P(e,`__v_skip`,!0),e}var Bt=e=>v(e)?At(e):e,Vt=e=>v(e)?Mt(e):e;function Ht(e){return e?e.__v_isRef===!0:!1}function Ut(e){return Gt(e,!1)}function Wt(e){return Gt(e,!0)}function Gt(e,t){return Ht(e)?e:new Kt(e,t)}var Kt=class{constructor(e,t){this.dep=new He,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Rt(e),this._value=t?e:Bt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||It(e)||Ft(e);e=n?e:Rt(e),N(e,t)&&(this._rawValue=e,this._value=n?e:Bt(e),this.dep.trigger())}};function B(e){return Ht(e)?e.value:e}var qt={get:(e,t,n)=>t===`__v_raw`?e:B(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return Ht(i)&&!Ht(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Jt(e){return Pt(e)?e:new Proxy(e,qt)}var Yt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new He(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Be-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Ce!==this)return z(this,!0),!0}get value(){let e=this.dep.track();return Me(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Xt(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new Yt(r,i,n)}var Zt={},Qt=new WeakMap,$t=void 0;function en(e,t=!1,n=$t){if(n){let t=Qt.get(n);t||Qt.set(n,t=[]),t.push(e)}}function tn(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:It(e)||o===!1||o===0?nn(e,1):nn(e),m,g,_,v,y=!1,b=!1;if(Ht(e)?(g=()=>e.value,y=It(e)):Pt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Pt(e)||It(e)),g=()=>e.map(e=>{if(Ht(e))return e.value;if(Pt(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Le();try{_()}finally{Re()}}let t=$t;$t=m;try{return f?f(e,3,[v]):e(v)}finally{$t=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>nn(e(),t)}let x=I(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{try{return e(...t)}finally{S()}}}let C=b?Array(e.length).fill(Zt):Zt,w=e=>{if(m.flags&1&&(m.dirty||e)){if(n){let t=m.run();if(e||o||y||(b?t.some((e,t)=>N(e,C[t])):N(t,C))){let e=$t;Le();try{_&&_(),$t=m;let e=[t,C===Zt?void 0:b&&C[0]===Zt?[]:C,v];C=t,f?f(n,3,e):n(...e)}finally{$t=e,Re()}}}else m.run()}};return u&&u(w),m=new Te(g),m.scheduler=l?()=>l(w,!1):w,v=e=>en(e,!1,m),_=m.onStop=()=>{let e=Qt.get(m);if(e){if(f)f(e,4);else for(let t of e)t();Qt.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function nn(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ht(e))nn(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)nn(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{nn(e,t,n)});else if(C(e)){for(let r in e)nn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&nn(e[r],t,n)}return e}function rn(e,t,n,r){try{return r?e(...r):e()}catch(e){on(e,t,n)}}function an(e,t,n,r){if(h(e)){let i=rn(e,t,n,r);return i&&y(i)&&i.catch(e=>{on(e,t,n,void 0,!0)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(an(e[a],t,n,r));return i}}function on(e,n,r,i=!0,a=!1){let o=n?n.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:c}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,o=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n&&!t.isUnmounted&&(!a||t.scope.active)){for(let t=0;t<n.length;t++)if(n[t](e,i,o)===!1)return}t=t.parent}if(s){Le(),rn(s,null,10,[e,i,o]),Re();return}}sn(e,r,o,i,c)}function sn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var cn=[],ln=-1,un=[],dn=null,fn=0,pn=Promise.resolve(),mn=null;function hn(e){let t=mn||pn;return e?t.then(this?e.bind(this):e):t}function gn(e){let t=ln+1,n=cn.length;for(;t<n;){let r=t+n>>>1,i=cn[r],a=wn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function _n(e){if(!(e.flags&1)){let t=wn(e),n=cn[cn.length-1];!n||!(e.flags&2)&&t>=wn(n)?cn.push(e):cn.splice(gn(t),0,e),e.flags|=1,vn()}}function vn(){mn||(mn=pn.then(Tn))}function yn(e){if(!d(e))dn&&e.id===-1?dn.splice(fn+1,0,e):e.flags&1||(un.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)un.push(e[t]);vn()}function bn(e,t,n,r=ln+1){for(;r<cn.length;r++){let n=cn[r];if(n&&n.flags&2){if(e&&n.id!==e.uid||t!==void 0&&!(n.id>=t))continue;cn.splice(r,1),r=e?r-1:ln,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function xn(e,t,n=0){if(un.length){let e=un,r=0;if(t){e=[];for(let i=0;i<un.length;i++){let a=un[i];(a.i===void 0?t.has(a):!a.i||a.i.uid<n)?un[r++]=a:e.push(a)}}let i=[...new Set(e)].sort((e,t)=>wn(e)-wn(t));if(un.length=r,dn){for(let e=0;e<i.length;e++)dn.push(i[e]);return}for(dn=i,fn=0;fn<dn.length;fn++){let e=dn[fn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}dn=null,fn=0}}var Sn=!1;function Cn(e,t){if(Sn){e();return}let n=t===void 0?void 0:new Set(un);e(),Sn=!0;try{bn(void 0,t),xn(void 0,n,t)}finally{Sn=!1}}var wn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Tn(e){try{for(ln=0;ln<cn.length;ln++){let e=cn[ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),rn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ln<cn.length;ln++){let e=cn[ln];e&&(e.flags&=-2)}ln=-1,cn.length=0,xn(e),mn=null,(cn.length||un.length)&&Tn(e)}}var En=null,Dn=null;function On(e){let t=En;return En=e,Dn=e&&e.type.__scopeId||null,t}function kn(e,t=En,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&la(-1);let i=On(t),a=aa.length,o;try{o=e(...n)}finally{for(let e=aa.length;e>a;e--)sa();On(i),r._d&&la(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function An(e,t,n,r){let i=e;if(r===`beforeMount`)e._mount=e;else if(r===`beforeUpdate`){let n=t&&t._mount;n&&(n._latest=e,e._mount=n)}else if(r===`mounted`){let t=e._latest;e._mount=e._latest=void 0,t&&(i=t,t._mount=void 0)}let a=i.dirs,o=t&&t.dirs;for(let c=0;c<a.length;c++){let l=a[c];o?l.oldValue=o[c].value:r===`mounted`&&l.oldValue!==void 0&&(l=s({},l,{oldValue:void 0}));let u=l.dir[r];u&&(Le(),an(u,n,8,[e.el,l,i,t]),Re())}}function jn(e,t){if(ja){let n=ja.provides,r=ja.parent&&ja.parent.provides;r===n&&(n=ja.provides=Object.create(r)),n[e]=t}}function Mn(e,t,n=!1){let r=Ma();if(r||li){let i=li?li._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var Nn=Symbol.for(`v-scx`),Pn=()=>Mn(Nn);function Fn(e,t,n){return In(e,t,n)}function In(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(Ra){if(c===`sync`){let e=Pn();f=e.__watcherHandles||(e.__watcherHandles=[])}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=ja;u.call=(e,t,n)=>an(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{e.i=p,Vi(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():_n(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=tn(e,n,u);return Ra&&(f?f.push(h):d&&h()),h}function Ln(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?Rn(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=Fa(this),s=In(i,a.bind(r),n);return o(),s}function Rn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var zn=new WeakMap,Bn=Symbol(`_vte`),Vn=e=>e.__isTeleport,Hn=e=>e&&(e.disabled||e.disabled===``),Un=e=>e&&(e.defer||e.defer===``),Wn=e=>typeof SVGElement<`u`&&e instanceof SVGElement,Gn=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,Kn=(e,t)=>{let n=e&&e.to;return g(n)?t?t(n):null:n},qn={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g,parentNode:_}}=l,v=Hn(t.props),{dynamicChildren:y}=t,b=(e,t,n)=>{e.shapeFlag&16&&u(e.children,t,n,i,a,o,s,c)},x=(e=t)=>{let n=Hn(e.props),r=e.target=Kn(e.props,m),a=Qn(r,e,h,p);r&&(o!==`svg`&&Wn(r)?o=`svg`:o!==`mathml`&&Gn(r)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(r),n||(b(e,r,a),Zn(e,!1)))},S=e=>{let t=()=>{if(zn.get(e)===t){if(zn.delete(e),Hn(e.props)){let t=_(e.el)||n;b(e,t,e.anchor),Zn(e,!0)}x(e)}};zn.set(e,t),Vi(t,a)};if(e==null){let e=t.el=h(``),i=t.anchor=h(``);if(p(e,n,r),p(i,n,r),Un(t.props)||a&&a.pendingBranch){S(t);return}v&&(b(t,n,i),Zn(t,!0)),x()}else{t.el=e.el;let r=t.anchor=e.anchor,u=zn.get(e);if(u){u.flags|=8,zn.delete(e),S(t);return}t.targetStart=e.targetStart;let p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=Hn(e.props),_=g?n:p,b=g?r:h;if(o===`svg`||Wn(p)?o=`svg`:(o===`mathml`||Gn(p))&&(o=`mathml`),y?(f(e.dynamicChildren,y,_,i,a,o,s),qi(e,t,!0)):c||d(e,t,_,b,i,a,o,s,!1),v)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Jn(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=Kn(t.props,m);e&&(t.target=e,Jn(t,e,null,l,0))}else g&&Jn(t,p,h,l,1);Zn(t,v)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e,p=Hn(f),m=a||!p,h=zn.get(e);if(h&&(h.flags|=8,zn.delete(e)),d&&(i(l),i(u)),a&&i(c),!h&&(p||d)&&o&16)for(let e=0;e<s.length;e++){let i=s[e];r(i,t,n,m,!!i.dynamicChildren)}},move:Jn,hydrate:Yn};function Jn(e,t,n,{o:{insert:r},m:i},a=2){a===0&&(e.targetStart&&r(e.targetStart,t,n),r(e.targetAnchor,t,n),n=e.targetAnchor);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),!zn.has(e)&&(!d||Hn(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function Yn(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,n){let r=n;for(;r;){if(r&&r.nodeType===8){if(r.data===`teleport start anchor`)t.targetStart=r;else if(r.data===`teleport anchor`){t.targetAnchor=r,e._lpa=t.targetAnchor&&o(t.targetAnchor);break}}r=o(r)}}function p(e,t){t.anchor=d(o(e),t,s(e),n,r,i,a)}let m=t.target=Kn(t.props,c),h=Hn(t.props);if(m){let c=m._lpa||m.firstChild;t.shapeFlag&16&&(h?(p(e,t),f(m,c),t.targetAnchor||Qn(m,t,u,l,s(e)===m?e:null)):(t.anchor=o(e),f(m,c),t.targetAnchor||Qn(m,t,u,l),d(c&&o(c),t,m,n,r,i,a))),Zn(t,h)}else h&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}var Xn=qn;function Zn(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function Qn(e,t,n,r,i=null){let a=t.targetStart=n(``),o=t.targetAnchor=n(``);return a[Bn]=o,e&&(r(a,e,i),r(o,e,i)),o}var $n=Symbol(`_leaveCb`),er=Symbol(`_enterCb`);function tr(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return kr(()=>{e.isMounted=!0}),Mr(()=>{e.isUnmounting=!0}),e}var nr=[Function,Array],rr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nr,onEnter:nr,onAfterEnter:nr,onEnterCancelled:nr,onBeforeLeave:nr,onLeave:nr,onAfterLeave:nr,onLeaveCancelled:nr,onBeforeAppear:nr,onAppear:nr,onAfterAppear:nr,onAppearCancelled:nr},ir={name:`BaseTransition`,props:rr,setup(e,{slots:t}){let n=Ma(),r=tr();return()=>{let i=t.default&&fr(t.default(),!0),a=i&&i.length?ar(i):n.subTree?xa():void 0;if(!a)return;let o=Rt(e),{mode:s}=o;if(r.isLeaving)return lr(a);let c=ur(a);if(!c)return lr(a);let l=cr(c,o,r,n);c.type!==ra&&dr(c,l);let u=n.subTree&&ur(n.subTree);if(u&&u.type!==ra&&!pa(u,c)&&pr(n.subTree)){let e=cr(u,o,r,n);if(dr(u,e),s===`out-in`&&c.type!==ra)return r.isLeaving=!0,e.afterLeave=()=>{if(r.isLeaving=!1,!(n.job.flags&8)){if(n.effect.flags&2){let e=()=>{n.job.flags&8||n.update()};e.i=n,_n(e)}else n.update()}delete e.afterLeave,u=void 0},lr(a);s===`in-out`&&c.type!==ra?e.delayLeave=(e,t,n)=>{let i=sr(r,u);i[String(u.key)]=u,e[$n]=()=>{t(),e[$n]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return a}}};function ar(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==ra){t=n;break}}return t}var or=ir;function sr(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function cr(e,t,n,r){let{appear:i,mode:a,persisted:o=!1,onBeforeEnter:s,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:h,onBeforeAppear:g,onAppear:_,onAfterAppear:v,onAppearCancelled:y}=t,b=String(e.key),x=sr(n,e),S=(e,t)=>{e&&an(e,r,9,t)},C=(e,t)=>{let n=t[1];S(e,t),d(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},w={mode:a,persisted:o,beforeEnter(t){let r=s;if(!n.isMounted){if(i)r=g||s;else return}t[$n]&&t[$n](!0);let a=x[b];if(a&&pa(e,a)){let e=a.el[$n];if(!e){let t=pr(a);e=t&&t.el[$n]}e&&e()}S(r,[t])},enter(t){if(x[b]===e)return;let r=c,a=l,o=u;if(!n.isMounted){if(i)r=_||c,a=v||l,o=y||u;else return}let s=!1;t[er]=e=>{s||(s=!0,S(e?o:a,[t]),w.delayedLeave&&w.delayedLeave(),t[er]=void 0)};let d=t[er].bind(null,!1);r?C(r,[t,d]):d()},leave(t,r){let i=String(e.key);if(t[er]&&t[er](!0),n.isUnmounting)return r();S(f,[t]);let a=!1;t[$n]=n=>{a||(a=!0,r(),S(n?h:m,[t]),t[$n]=void 0,x[i]===e&&delete x[i])};let o=t[$n].bind(null,!1);x[i]=e,p?C(p,[t,o]):o()},clone(e){let i=cr(e,t,n,r);return i.afterLeave=()=>{w.afterLeave&&w.afterLeave()},i.delayLeave=(e,t,n)=>{w.delayLeave?w.delayLeave(e,t,n):n()},i.delayedLeave=()=>{w.delayedLeave&&w.delayedLeave()},i}};return w}function lr(e){if(xr(e))return e=ya(e),e.children=null,e}function ur(e){if(!xr(e))return Vn(e.type)&&e.children?ar(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&h(n.default))return n.default()}}function dr(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;dr(Vn(n.type)&&ur(n)||n,t)}else if(e.shapeFlag&128){let n=e.suspense;if(n){let e=n.isHydrating?n.pendingBranch:n.activeBranch;e&&dr(e,t.clone(e))}else e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)}else if(e.transition=t,e.type===ta&&d(e.children)){let n=gi(e.children,!1);n&&dr(n,t)}}function fr(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=n==null?o.key:String(n)+String(o.key==null?a:o.key);o.type===ta?(o.patchFlag&128&&i++,r=r.concat(fr(o.children,t,s))):(t||o.type!==ra)&&r.push(s==null?o:ya(o,{key:s}))}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function pr(e){if(e.component)return pr(e.component.subTree);if(e.type===ta){let t=d(e.children)&&gi(e.children,!1);return t?pr(t):void 0}if(e.type!==ra)return e}function mr(e,t){return h(e)?s({name:e.name},t,{setup:e}):e}function hr(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function gr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var _r=new WeakMap;function vr(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>vr(e,n&&(d(n)?n[t]:n),r,a,o));return}if(br(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&vr(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?Ka(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=Rt(v),b=v===t?i:e=>!gr(_,e)&&u(y,e),x=(e,t)=>!(t&&gr(_,t));if(m!=null&&m!==p){if(yr(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(Ht(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))rn(p,f,12,[l,_]);else{let t=g(p),n=Ht(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),_r.delete(e)};t.id=-1,_r.set(e,t),Vi(t,r)}else yr(e),i()}}}function yr(e){let t=_r.get(e);t&&(t.flags|=8,_r.delete(e))}ie().requestIdleCallback,ie().cancelIdleCallback;var br=e=>!!e.type.__asyncLoader,xr=e=>e.type.__isKeepAlive;function Sr(e,t){wr(e,`a`,t)}function Cr(e,t){wr(e,`da`,t)}function wr(e,t,n=ja){let r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(Er(t,r,n),n){let e=n.parent;for(;e&&e.parent;)xr(e.parent.vnode)&&Tr(r,t,n,e),e=e.parent}}function Tr(e,t,n,r){let i=Er(t,e,r,!0),a=Er(`um`,()=>c(r[t],i),n);a.flags=16}function Er(e,t,n=ja,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...r)=>{Le();let i=Fa(n),a=an(t,n,e,r);return i(),Re(),a});return r?i.unshift(a):i.push(a),a}}var Dr=e=>(t,n=ja)=>{Ra&&e!==`sp`||Er(e,(...e)=>t(...e),n)},Or=Dr(`bm`),kr=Dr(`m`),Ar=Dr(`bu`),jr=Dr(`u`),Mr=Dr(`bum`),Nr=Dr(`um`),Pr=Dr(`sp`),Fr=Dr(`rtg`),Ir=Dr(`rtc`);function Lr(e,t=ja){Er(`ec`,e,t)}var Rr=Symbol.for(`v-ndc`);function zr(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&Pt(e),r=!1,s=!1;n&&(r=!It(e),s=Ft(e),e=Ze(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Vt(Bt(e[n])):Bt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){if(!Number.isInteger(e)||e<0)i=[];else{i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}}else if(v(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}var Br=e=>e?La(e)?Ka(e):Br(e.parent):null,Vr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Br(e.parent),$root:e=>Br(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Xr(e),$forceUpdate:e=>e.f||(e.f=()=>{_n(e.update)}),$nextTick:e=>e.n||(e.n=hn.bind(e.proxy)),$watch:e=>Ln.bind(e)}),Hr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),Ur={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(Hr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else Gr&&(s[n]=0)}let d=Vr[n],f,p;if(d)return n===`$attrs`&&Je(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return Hr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||Hr(n,c)||u(o,c)||u(i,c)||u(Vr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Wr(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Gr=!0;function Kr(e){let t=Xr(e),n=e.proxy,i=e.ctx;Gr=!1,t.beforeCreate&&Jr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:T,renderTracked:E,renderTriggered:D,errorCaptured:O,serverPrefetch:k,expose:A,inheritAttrs:j,components:M,directives:N,filters:ee}=t;if(u&&qr(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=At(t))}if(Gr=!0,o)for(let e in o){let t=o[e],a=Ja({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)Yr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{jn(t,e[t])})}f&&Jr(f,e,`c`);function P(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(P(Or,p),P(kr,m),P(Ar,g),P(jr,_),P(Sr,y),P(Cr,b),P(Lr,O),P(Ir,E),P(Fr,D),P(Mr,S),P(Nr,w),P(Pr,k),d(A)){if(A.length){let t=e.exposed||(e.exposed={});A.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||(e.exposed={})}T&&e.render===r&&(e.render=T),j!=null&&(e.inheritAttrs=j),M&&(e.components=M),N&&(e.directives=N),k&&hr(e)}function qr(e,t,n=r){d(e)&&(e=ti(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?Mn(r.from||n,r.default,!0):Mn(r.from||n):Mn(r),Ht(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Jr(e,t,n){an(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Yr(e,t,n,r){let i=r.includes(`.`)?Rn(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&Fn(i,n)}else if(h(e))Fn(i,e.bind(n));else if(v(e)){if(d(e))e.forEach(e=>Yr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&Fn(i,r,e)}}}function Xr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Zr(c,e,o,!0)),Zr(c,t,o)),v(t)&&a.set(t,c),c}function Zr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Zr(e,a,n,!0),i&&i.forEach(t=>Zr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Qr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Qr={data:$r,props:ii,emits:ii,methods:ri,computed:ri,beforeCreate:ni,created:ni,beforeMount:ni,mounted:ni,beforeUpdate:ni,updated:ni,beforeDestroy:ni,beforeUnmount:ni,destroyed:ni,unmounted:ni,activated:ni,deactivated:ni,errorCaptured:ni,serverPrefetch:ni,components:ri,directives:ri,watch:ai,provide:$r,inject:ei};function $r(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function ei(e,t){return ri(ti(e),ti(t))}function ti(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ni(e,t){return e?[...new Set([].concat(e,t))]:t}function ri(e,t){return e?s(Object.create(null),e,t):t}function ii(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),Wr(e),Wr(t??{})):t}function ai(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=ni(e[r],t[r]);return n}function oi(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var si=0;function ci(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=oi(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:si++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Xa,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||ga(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,Ka(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(an(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=li;li=l;try{return e()}finally{li=t}}};return l}}var li=null,ui=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${O(t)}Modifiers`]||e[`${A(t)}Modifiers`];function di(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&ui(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=a.map(te)));let c,l=i[c=M(n)]||i[c=M(O(n))];!l&&o&&(l=i[c=M(A(n))]),l&&an(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,an(u,e,6,a)}}var fi=new WeakMap;function pi(e,t,n=!1){let r=n?fi:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=pi(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function mi(e,t){return!e||!a(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,A(t))||u(e,t))}function hi(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=On(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Sa(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=Sa(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:_i(c)}}catch(t){aa.length=0,on(t,e,1),v=ga(ra)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=vi(y,a)),b=ya(b,y,!1,!0))}return n.dirs&&(b=ya(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&dr(Vn(b.type)&&ur(b)||b,n.transition),v=b,On(_),v}function gi(e,t=!0){let n;for(let t=0;t<e.length;t++){let r=e[t];if(fa(r)){if(r.type!==ra||r.children===`v-if`){if(n)return;n=r}}else return}return n}var _i=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||(t={}))[n]=e[n]);return t},vi=(e,t)=>{let n={};for(let r in e)o(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function yi(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?bi(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(xi(o,r,n)&&!mi(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||bi(r,o,l):!!o;return!1}function bi(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(!u(e,a)||xi(t,e,a)&&!mi(n,a))return!0}return!1}function xi(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!_e(r,i):r!==i}function Si({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Ci={},wi=()=>Object.create(Ci),Ti=e=>Object.getPrototypeOf(e)===Ci;function Ei(e,t,n,r=!1){let i={},a=wi();e.propsDefaults=Object.create(null),Oi(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:jt(i):e.type.props?i:a,e.attrs=a}function Di(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=Rt(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(mi(e.emitsOptions,o))continue;let d=t[o];if(c){if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=O(o);i[t]=ki(c,s,t,d,e,!1)}}else d!==a[o]&&(a[o]=d,l=!0)}}}else{Oi(e,t,i,a)&&(l=!0);let r;for(let a in s)t&&(u(t,a)||(r=A(a))!==a&&u(t,r))||(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=ki(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)t&&u(t,e)||(delete a[e],l=!0)}l&&Ye(e.attrs,`set`,``)}function Oi(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(T(t))continue;let l=n[t],d;a&&u(a,d=O(t))?!o||!o.includes(d)?r[d]=l:(c||(c={}))[d]=l:mi(e.emitsOptions,t)||t in i&&l===i[t]||(i[t]=l,s=!0)}if(o){let n=Rt(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=ki(a,n,s,i[s],e,!u(i,s))}}return s}function ki(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=Fa(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===A(n))&&(r=!0))}return r}var Ai=new WeakMap;function ji(e,r,i=!1){let a=i?Ai:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=ji(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=O(c[e]);Mi(n)&&(l[n]=t)}else if(c)for(let e in c){let t=O(e);if(Mi(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function Mi(e){return e[0]!==`$`&&!T(e)}var Ni=e=>e===`_`||e===`_ctx`||e===`$stable`,Pi=e=>d(e)?e.map(Sa):[Sa(e)],Fi=(e,t,n)=>{if(t._n)return t;let r=kn((...e)=>Pi(t(...e)),n);return r._c=!1,r},Ii=(e,t,n)=>{let r=e._ctx;for(let n in e){if(Ni(n))continue;let i=e[n];if(h(i))t[n]=Fi(n,i,r);else if(i!=null){let e=Pi(i);t[n]=()=>e}}},Li=(e,t)=>{let n=Pi(t);e.slots.default=()=>n},Ri=(e,t,n)=>{for(let r in t)(n||!Ni(r))&&(e[r]=t[r])},zi=(e,t,n)=>{let r=e.slots=wi();if(e.vnode.shapeFlag&32){let e=t._;e?(Ri(r,t,n),n&&P(r,`_`,e,!0)):Ii(t,r)}else t&&Li(e,t)},Bi=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:Ri(a,n,r):(o=!n.$stable,Ii(n,a)),s=n}else n&&(Li(e,n),s={default:1});if(o)for(let e in a)!Ni(e)&&s[e]==null&&delete a[e]},Vi=ea;function Hi(e){return Ui(e)}function Ui(e,i){let a=ie();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,r,i=null,a=null,o=null,s=void 0,c=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!pa(e,t)&&(i=me(e),le(e,a,o,!0),e=null),t.patchFlag===-2&&(l=!1,t.dynamicChildren=null),t.dynamicChildren&&e&&e.dynamicChildren&&e.dynamicChildren.hasOnce&&(t.dynamicChildren===n&&(t.dynamicChildren=[]),t.dynamicChildren.hasOnce=!0);let{type:u,ref:d,shapeFlag:f}=t;switch(u){case na:y(e,t,r,i);break;case ra:b(e,t,r,i);break;case ia:e??x(t,r,i,s);break;case ta:M(e,t,r,i,a,o,s,c,l);break;default:f&1?w(e,t,r,i,a,o,s,c,l):f&6?N(e,t,r,i,a,o,s,c,l):(f&64||f&128)&&u.process(e,t,r,i,a,o,s,c,l,ge)}d!=null&&a?vr(d,e&&e.ref,o,t||e,!t):d==null&&e&&e.ref!=null&&vr(e.ref,null,o,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)E(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),k(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},E=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&O(e.children,d,null,r,i,Wi(e,a),s,u),_&&An(e,null,r,`created`),D(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!T(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&Ea(f,r,e)}_&&An(e,null,r,`beforeMount`);let v=Ki(i,g);v?g.beforeEnter(d):g&&!g.persisted&&(d[$i]=!0),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&Vi(()=>{try{f&&Ea(f,r,e),v&&g.enter(d),_&&An(e,null,r,`mounted`)}finally{}},i)},D=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Qi(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;D(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},O=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?Ca(e[l]):Sa(e[l]);v(null,c,t,n,r,i,a,o,s)}},k=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&Gi(r,!1),(g=h.onVnodeBeforeUpdate)&&Ea(g,r,n,e),f&&An(n,e,r,`beforeUpdate`),r&&Gi(r,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(u=0,s=!1,d=null),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?A(e.dynamicChildren,d,l,r,i,Wi(n,a),o):s||ae(e,n,l,null,r,i,Wi(n,a),o,!1),u>0){if(u&16)j(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else!s&&d==null&&j(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&Vi(()=>{g&&Ea(g,r,n,e),f&&An(n,e,r,`updated`)},i)},A=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el||Zi(c),d=u&&(c.type===ta||!pa(c,l)||c.shapeFlag&198)?m(u):n;v(c,l,d,null,r,i,a,o,!0)}},j=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!T(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(T(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},M=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),O(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(A(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&qi(e,t,!0)):ae(e,t,n,f,i,a,s,c,l)},N=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):P(t,n,r,i,a,o,c):te(e,t,c)},P=(e,t,n,r,i,a,o)=>{let s=e.component=Aa(e,r,i);if(xr(e)&&(s.ctx.renderer=ge),za(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ne,o,a),!e.el){let r=s.subTree=ga(ra);b(null,r,t,n),e.placeholder=r.el}}else ne(s,e,t,n,i,a,o)},te=(e,t,n)=>{let r=t.component=e.component;if(yi(e,t,n)){if(r.asyncDep&&!r.asyncResolved){t.el=e.el,t.placeholder=e.placeholder,re(r,t,n);return}r.next=t,r.update()}else t.el=e.el,t.placeholder=e.placeholder,r.vnode=t},ne=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Yi(e);if(n){t&&(t.el=c.el,re(e,t,o)),n.asyncDep.then(()=>{let t=()=>{e.job.flags&8||(i&&i.pendingBranch?Vi(t,i):l())};t.flags=48,Vi(t,i)});return}}let u=t,d;Gi(e,!1),t?(t.el=c.el,re(e,t,o)):t=c,n&&ee(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Ea(d,s,t,c),Gi(e,!0);let f=hi(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el||Zi(p)),me(p),e,i,a),t.el=f.el,u===null&&Si(e,f.el),r&&Vi(r,i),(d=t.props&&t.props.onVnodeUpdated)&&Vi(()=>Ea(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=br(t);if(Gi(e,!1),l&&ee(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Ea(o,d,t),Gi(e,!0),s&&ve){let t=()=>{e.subTree=hi(e),ve(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=hi(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&Vi(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;Vi(()=>Ea(o,d,e),i)}(t.shapeFlag&256||d&&br(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&Vi(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Te(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>_n(u),Gi(e,!0),l()},re=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,Di(e,t.props,r,n),Bi(e,t.children,n),Le(),bn(e),Re()},ae=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){se(l,d,n,r,i,a,o,s,c);return}if(f&256){oe(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&pe(l,i,a),d!==l&&p(n,d)):u&16?m&16?se(l,d,n,r,i,a,o,s,c):pe(l,i,a,!0):(u&8&&p(n,``),m&16&&O(d,n,r,i,a,o,s,c))},oe=(e,t,r,i,a,o,s,c,l)=>{e=e||n,t=t||n;let u=e.length,d=t.length,f=Math.min(u,d),p=0;for(;p<f;p++){let n=t[p]=l?Ca(t[p]):Sa(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?pe(e,a,o,!0,!1,f):O(t,r,i,a,o,s,c,l,f)},se=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?Ca(t[u]):Sa(t[u]);if(pa(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?Ca(t[p]):Sa(t[p]);if(pa(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?Ca(t[u]):Sa(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)le(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?Ca(t[u]):Sa(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){le(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&pa(n,t[_])){i=_;break}i===void 0?le(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?Ji(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||Zi(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?ce(n,r,p,2):_--)}}},ce=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6)ce(e.component.subTree,t,n,r);else if(d&128)e.suspense.move(t,n,r);else if(d&64)c.move(e,t,n,ge);else if(c===ta){o(a,t,n);for(let e=0;e<u.length;e++)ce(u[e],t,n,r);o(e.anchor,t,n)}else if(c===ia)S(e,t,n);else if(r!==2&&d&1&&l){if(r===0)l.persisted&&!a[$n]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),Vi(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[$n];a._isLeaving&&a[$n](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}}else o(a,t,n)},le=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if((d===-2||l&&l.hasOnce)&&(i=!1),s!=null&&(Le(),vr(s,null,n,e,!0),Re()),p==null||e.ctx&&e.ctx!==t||(t.renderCache[p]=void 0),u&256&&t.ctx.deactivate(e))return;let h=u&1&&f,g=!br(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Ea(_,t,e),u&6)fe(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&An(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,ge,r):l&&!l.hasOnce&&(a!==ta||d>0&&d&64)?pe(l,t,n,!1,!0):(a===ta&&d&384||!i&&u&16)&&pe(c,t,n),r&&ue(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&Vi(()=>{_&&Ea(_,t,e),h&&An(e,null,t,`unmounted`),v&&(e.el=null)},n)},ue=e=>{let{type:t,el:n,anchor:r,transition:i}=e,a=t===ta;if(a&&!i){de(n,r);return}if(t===ia){C(e),i&&!i.persisted&&i.afterLeave&&i.afterLeave();return}let o=a?pr(e):e,c=()=>{a?m(n)&&de(n,r):s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(o&&o.shapeFlag&1&&i&&!i.persisted){let{leave:e,delayLeave:t}=i,n=o.el,r=()=>e(n,c);t?t(n,c,r):r()}else c()},de=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},fe=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Xi(c),Xi(l),r&&ee(r),i.stop(),a?(a.flags|=8,le(o,e,t,n)):o&&(o.transition=e.vnode.transition,le(o,e,t,n)),s&&Vi(s,t);let u=()=>{e.isUnmounted=!0};u.flags=16,Vi(u,t)},pe=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)le(e[o],t,n,r,i)},me=e=>{if(e.shapeFlag&6)return me(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Bn];return n?h(n):t},he=(e,t,n)=>{Cn(()=>{e==null?t._vnode&&le(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e},e&&t._vnode?void 0:e&&e.component?e.component.uid:ka())},ge={p:v,um:le,m:ce,r:ue,mt:P,mc:O,pc:ae,pbc:A,n:me,o:e},_e,ve;return i&&([_e,ve]=i(ge)),{render:he,hydrate:_e,createApp:ci(he,_e)}}function Wi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Gi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ki(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function qi(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Ca(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&qi(t,a)),a.type===na&&(a.patchFlag===-1&&(a=i[e]=Ca(a)),a.el=t.el),a.type===ra&&!a.el&&(a.el=t.el)}}function Ji(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function Yi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Yi(t)}function Xi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Zi(e){if(e.placeholder)return e.placeholder;let t=e.component;if(t)return Zi(t.subTree);let n=e.suspense;return n&&n.activeBranch?Zi(n.activeBranch):null}var Qi=e=>e.__isSuspense,$i=Symbol(`_deferredEnter`);function ea(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):yn(e)}var ta=Symbol.for(`v-fgt`),na=Symbol.for(`v-txt`),ra=Symbol.for(`v-cmt`),ia=Symbol.for(`v-stc`),aa=[],oa=null;function V(e=!1){aa.push(oa=e?null:[])}function sa(){aa.pop(),oa=aa[aa.length-1]||null}var ca=1;function la(e,t=!1){ca+=e,e<0&&oa&&t&&(oa.hasOnce=!0)}function ua(e){return e.dynamicChildren=ca>0?oa||n:null,sa(),ca>0&&oa&&oa.push(e),e}function H(e,t,n,r,i,a){return ua(U(e,t,n,r,i,a,!0))}function da(e,t,n,r,i){return ua(ga(e,t,n,r,i,!0))}function fa(e){return e?e.__v_isVNode===!0:!1}function pa(e,t){return e.type===t.type&&e.key===t.key}var ma=({key:e})=>e??null,ha=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||Ht(e)||h(e)?{i:En,r:e,k:t,f:!!n}:e);function U(e,t=null,n=null,r=0,i=null,a=e===ta?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ma(t),ref:t&&ha(t),scopeId:Dn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:En};return s?(wa(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),ca>0&&!o&&oa&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&oa.push(c),c}var ga=_a;function _a(e,t=null,n=null,r=0,i=null,a=!1){if(e&&e!==Rr||(e=ra),fa(e)){let r=ya(e,t,!0);return n&&wa(r,n),ca>0&&!a&&oa&&(r.shapeFlag&6?oa[oa.indexOf(e)]=r:oa.push(r)),r.patchFlag=-2,r}if(qa(e)&&(e=e.__vccOpts),t){t=va(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=ue(e)),v(n)&&(Lt(n)&&!d(n)&&(n=s({},n)),t.style=ae(n))}let o=g(e)?1:Qi(e)?128:Vn(e)?64:v(e)?4:h(e)?2:0;return U(e,t,n,r,i,o,a,!0)}function va(e){return e?Lt(e)?s({},e):Ti(e)?s({},e[Ua]||e):e:null}function ya(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?Ta(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&ma(l),ref:t&&t.ref?n&&a?d(a)?a.concat(ha(t)):[a,ha(t)]:ha(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ta?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ya(e.ssContent),ssFallback:e.ssFallback&&ya(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&dr(u,c.clone(u)),u}function ba(e=` `,t=0){return ga(na,null,e,t)}function xa(e=``,t=!1){return t?(V(),da(ra,null,e)):ga(ra,null,e)}function Sa(e){return e==null||typeof e==`boolean`?ga(ra):d(e)?ga(ta,null,e.slice()):fa(e)?Ca(e):ga(na,null,String(e))}function Ca(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ya(e)}function wa(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),wa(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!Ti(t)?t._ctx=En:r===3&&En&&(En.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else if(h(t)){if(r&65){wa(e,{default:t});return}t={default:t,_ctx:En},n=32}else t=String(t),r&64?(n=16,t=[ba(t)]):n=8;e.children=t,e.shapeFlag|=n}function Ta(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=ue([t.class,r.class]));else if(e===`style`)t.style=ae([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Ea(e,t,n,r=null){an(e,t,7,[n,r])}var Da=oi(),Oa=0;function ka(){return Oa}function Aa(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||Da,o={uid:Oa++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Se(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ji(i,a),emitsOptions:pi(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=di.bind(null,o),e.ce&&e.ce(o),o}var ja=null,Ma=()=>ja||En,Na,Pa;{let e=ie(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};Na=t(`__VUE_INSTANCE_SETTERS__`,e=>ja=e),Pa=t(`__VUE_SSR_SETTERS__`,e=>Ra=e)}var Fa=e=>{let t=ja;return Na(e),e.scope.on(),()=>{e.scope.off(),Na(t)}},Ia=()=>{ja&&ja.scope.off(),Na(null)};function La(e){return e.vnode.shapeFlag&4}var Ra=!1;function za(e,t=!1,n=!1){t&&Pa(t);let{props:r,children:i}=e.vnode,a=La(e);Ei(e,r,a,t),zi(e,i,n||t);let o=a?Ba(e,t):void 0;return t&&Pa(!1),o}function Ba(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ur);let{setup:r}=n;if(r){Le();let n=e.setupContext=r.length>1?Ga(e):null,i=Fa(e),a=rn(r,e,0,[e.props,n]),o=y(a);if(Re(),i(),(o||e.sp)&&!br(e)&&hr(e),o){if(a.then(Ia,Ia),t)return a.then(n=>{Pa(!0);try{Va(e,n,t)}finally{Pa(!1)}}).catch(t=>{on(t,e,0,void 0,!0),e.ssrRender=(e,t)=>t(`<!---->`)});e.asyncDep=a}else Va(e,a,t)}else Ha(e,t)}function Va(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=Jt(t)),Ha(e,n)}function Ha(e,t,n){let i=e.type;e.render||(e.render=i.render||r);{let t=Fa(e);Le();try{Kr(e)}finally{Re(),t()}}}var Ua=Symbol(),Wa={get(e,t){return Je(e,`get`,``),t===Ua?e:e[t]}};function Ga(e){return{attrs:new Proxy(e.attrs,Wa),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function Ka(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Jt(zt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Vr)return Vr[n](e)},has(e,t){return t in e||t in Vr}})):e.proxy}function qa(e){return h(e)&&`__vccOpts`in e}var Ja=(e,t)=>Xt(e,t,Ra);function Ya(e,t,n){try{la(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?fa(t)?ga(e,null,[t]):ga(e,t):ga(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fa(n)&&(n=[n]),ga(e,t,n))}finally{la(1)}}var Xa=`3.5.45`,Za=void 0,Qa=typeof window<`u`&&window.trustedTypes;if(Qa)try{Za=Qa.createPolicy(`vue`,{createHTML:e=>e})}catch{}var $a=Za?e=>Za.createHTML(e):e=>e,eo=`http://www.w3.org/2000/svg`,to=`http://www.w3.org/1998/Math/MathML`,no=typeof document<`u`?document:null,ro=no&&no.createElement(`template`),io={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?no.createElementNS(eo,e):t===`mathml`?no.createElementNS(to,e):n?no.createElement(e,{is:n}):no.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>no.createTextNode(e),createComment:e=>no.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>no.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==a&&(i=i.nextSibling););else{ro.innerHTML=$a(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=ro.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ao=`transition`,oo=`animation`,so=Symbol(`_vtc`),co={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},lo=s({},rr,co),uo=(e=>(e.displayName=`Transition`,e.props=lo,e))((e,{slots:t})=>Ya(or,mo(e),t)),fo=(e,t=[])=>{d(e)?e.forEach(e=>e(...t)):e&&e(...t)},po=e=>e?d(e)?e.some(e=>e.length>1):e.length>1:!1;function mo(e){let t={};for(let n in e)n in co||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:u=o,appearToClass:d=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,h=ho(i),g=h&&h[0],_=h&&h[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:x,onLeaveCancelled:S,onBeforeAppear:C=v,onAppear:w=y,onAppearCancelled:T=b}=t,E=(e,t,n,r)=>{e._enterCancelled=r,vo(e,t?d:c),vo(e,t?u:o),n&&n()},D=(e,t)=>{e._isLeaving=!1,vo(e,f),vo(e,m),vo(e,p),t&&t()},O=e=>(t,n)=>{let i=e?w:y,o=()=>E(t,e,n);fo(i,[t,o]),yo(()=>{vo(t,e?l:a),_o(t,e?d:c),po(i)||xo(t,r,g,o)})};return s(t,{onBeforeEnter(e){fo(v,[e]),_o(e,a),_o(e,o)},onBeforeAppear(e){fo(C,[e]),_o(e,l),_o(e,u)},onEnter:O(!1),onAppear:O(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>D(e,t);_o(e,f),e._enterCancelled?(_o(e,p),To(e)):(To(e),_o(e,p)),yo(()=>{e._isLeaving&&(vo(e,f),_o(e,m),po(x)||xo(e,r,_,n))}),fo(x,[e,n])},onEnterCancelled(e){E(e,!1,void 0,!0),fo(b,[e])},onAppearCancelled(e){E(e,!0,void 0,!0),fo(T,[e])},onLeaveCancelled(e){D(e),fo(S,[e])}})}function ho(e){if(e==null)return null;if(v(e))return[go(e.enter),go(e.leave)];{let t=go(e);return[t,t]}}function go(e){return ne(e)}function _o(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[so]||(e[so]=new Set)).add(t)}function vo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[so];n&&(n.delete(t),n.size||(e[so]=void 0))}function yo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var bo=0;function xo(e,t,n,r){let i=e._endId=++bo,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=So(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function So(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${ao}Delay`),a=r(`${ao}Duration`),o=Co(i,a),s=r(`${oo}Delay`),c=r(`${oo}Duration`),l=Co(s,c),u=null,d=0,f=0;t===ao?o>0&&(u=ao,d=o,f=a.length):t===oo?l>0&&(u=oo,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?ao:oo:null,f=u?u===ao?a.length:c.length:0);let p=u===ao&&/\b(?:transform|all)(?:,|$)/.test(r(`${ao}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function Co(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>wo(t)+wo(e[n])))}function wo(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function To(e){return(e?e.ownerDocument:document).body.offsetHeight}function Eo(e,t,n){let r=e[so];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Do=Symbol(`_vod`),Oo=Symbol(`_vsh`),ko=Symbol(``),Ao=/(?:^|;)\s*display\s*:/;function jo(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t){if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??No(r,t,``)}else for(let e in t)n[e]??No(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?No(r,i,``):Lo(e,i,!g(t)&&t?t[i]:void 0,o)||No(r,i,o)}}else if(i){if(t!==n){let e=r[ko];e&&(n+=`;`+e),r.cssText=n,a=Ao.test(n)}}else t&&e.removeAttribute(`style`);Do in e&&(i&&t===n||(e[Do]=a?r.display:``),e[Oo]&&(r.display=`none`))}var Mo=/\s*!important$/;function No(e,t,n){if(d(n))n.forEach(n=>No(e,t,n));else if(n??(n=``),t.startsWith(`--`))Mo.test(n)?e.setProperty(t,n.replace(Mo,``),`important`):e.setProperty(t,n);else{let r=Io(e,t);Mo.test(n)?e.setProperty(A(r),n.replace(Mo,``),`important`):e[r]=n}}var Po=[`Webkit`,`Moz`,`ms`],Fo={};function Io(e,t){let n=Fo[t];if(n)return n;let r=O(t);if(r!==`filter`&&r in e)return Fo[t]=r;r=j(r);for(let n=0;n<Po.length;n++){let i=Po[n]+r;if(i in e)return Fo[t]=i}return t}function Lo(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var Ro=`http://www.w3.org/1999/xlink`;function zo(e,t,n,r,i,a=de(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Ro,t.slice(6,t.length)):e.setAttributeNS(Ro,t,n):n==null||a&&!fe(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function Bo(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?$a(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);r===i&&`_value`in e||(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=fe(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Vo(e,t,n,r){e.addEventListener(t,n,r)}function Ho(e,t,n,r){e.removeEventListener(t,n,r)}var Uo=Symbol(`_vei`);function Wo(e,t,n,r,i=null){let a=e[Uo]||(e[Uo]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=qo(t);r?Vo(e,n,a[t]=Zo(r,i),s):o&&(Ho(e,n,o,s),a[t]=void 0)}}var Go=/(Once|Passive|Capture)$/,Ko=/^on:?(?:Once|Passive|Capture)$/;function qo(e){let t,n;for(;(n=e.match(Go))&&!Ko.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):A(e.slice(2)),t]}var Jo=0,Yo=Promise.resolve(),Xo=()=>Jo||(Yo.then(()=>Jo=0),Jo=Date.now());function Zo(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(d(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&an(e,t,5,a)}}else an(r,t,5,[e])};return n.value=e,n.attached=Xo(),n}var Qo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,$o=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?Eo(e,r,c):t===`style`?jo(e,n,r):a(t)?o(t)||Wo(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),1):t[0]===`^`?(t=t.slice(1),0):es(e,t,r,c))?(Bo(e,t,r),e.tagName.includes(`-`)||t!==`value`&&t!==`checked`&&t!==`selected`||zo(e,t,r,c,s,t!==`value`)):e._isVueCE&&(ts(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?Bo(e,O(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),zo(e,t,r,c))};function es(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&Qo(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return Qo(t)&&g(n)?!1:t in e}function ts(e,t){let n=e._def.props;if(!n)return!1;let r=O(t);return Array.isArray(n)?n.some(e=>O(e)===r):Object.keys(n).some(e=>O(e)===r)}var ns=[`ctrl`,`shift`,`alt`,`meta`],rs={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>ns.some(n=>e[`${n}Key`]&&!t.includes(n))},is=(e,t)=>{if(!e)return e;let n=e._withMods||(e._withMods={}),r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=rs[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},as=s({patchProp:$o},io),os;function ss(){return os||(os=Hi(as))}var cs=((...e)=>{let t=ss().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=us(e);if(!r)return;let i=t._component;h(i)||i.render||i.template||(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,ls(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function ls(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function us(e){return g(e)?document.querySelector(e):e}function ds(e){"@babel/helpers - typeof";return ds=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ds(e)}function fs(e,t){if(ds(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(ds(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ps(e){var t=fs(e,`string`);return ds(t)==`symbol`?t:t+``}function W(e,t,n){return(t=ps(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ms=e=>e.startsWith(`/`);function hs(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function gs(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&hs(e.default)}var _s=Object.assign;function vs(e,t){let n={};for(let r in t){let i=t[r];n[r]=bs(i)?i.map(e):e(i)}return n}var ys=()=>{},bs=Array.isArray;function xs(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var Ss=Symbol(``);function Cs(e,t){return _s(Error(),{type:e,[Ss]:!0},t)}function ws(e,t){return e instanceof Error&&Ss in e&&(t==null||!!(e.type&t))}var Ts=Symbol(``),Es=Symbol(``),Ds=Symbol(``),Os=Symbol(``),ks=Symbol(``),As=Symbol(``);function js(){return Mn(Ds)}function Ms(e){return Mn(Os)}var Ns=typeof document<`u`,Ps=/#/g,Fs=/&/g,Is=/\//g,Ls=/=/g,Rs=/\?/g,zs=/\+/g,Bs=/%5B/g,Vs=/%5D/g,Hs=/%5E/g,Us=/%60/g,Ws=/%7B/g,Gs=/%7C/g,Ks=/%7D/g,qs=/%20/g;function Js(e){return e==null?``:encodeURI(``+e).replace(Gs,`|`).replace(Bs,`[`).replace(Vs,`]`)}function Ys(e){return Js(e).replace(Ws,`{`).replace(Ks,`}`).replace(Hs,`^`)}function Xs(e){return Js(e).replace(zs,`%2B`).replace(qs,`+`).replace(Ps,`%23`).replace(Fs,`%26`).replace(Us,"`").replace(Ws,`{`).replace(Ks,`}`).replace(Hs,`^`)}function Zs(e){return Xs(e).replace(Ls,`%3D`)}function Qs(e){return Js(e).replace(Ps,`%23`).replace(Rs,`%3F`)}function $s(e){return Qs(e).replace(Is,`%2F`)}function ec(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var tc=/\/$/,nc=e=>e.replace(tc,``);function rc(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=dc(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:ec(o)}}function ic(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function ac(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function oc(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&sc(t.matched[r],n.matched[i])&&cc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function sc(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function cc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!lc(e[n],t[n]))return!1;return!0}function lc(e,t){return bs(e)?uc(e,t):bs(t)?uc(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function uc(e,t){return bs(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function dc(e,t){if(ms(e))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`){if(s===`..`)a>1&&a--;else break}return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var fc={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0};function pc(e){if(!e){if(Ns){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^/]+/,``)}else e=`/`}return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),nc(e)}var mc=/^[^#]+#/;function hc(e,t){return e.replace(mc,`#`)+t}function gc(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var _c=()=>history.scrollRestoration===`manual`?{left:window.scrollX,top:window.scrollY}:null;function vc(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=gc(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function yc(e,t){return(history.state?history.state.position-t:-1)+e}var bc=new Map;function xc(e){bc.set(e,_c())}function Sc(e){let t=bc.get(e);return bc.delete(e),t}function Cc(e,t=!1){for(let n of bc.keys()){let r=parseInt(n,10);(r===e||!t&&r>e)&&bc.delete(n)}}function wc(e){return typeof e==`string`||e&&typeof e==`object`}function Tc(e){return typeof e==`string`||typeof e==`symbol`}function Ec(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(zs,` `),i=r.indexOf(`=`),a=ec(i<0?r:r.slice(0,i)),o=i<0?null:ec(r.slice(i+1));if(a in t){let e=t[a];bs(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function Dc(e){let t=``;for(let n in e){let r=e[n];n=Zs(n),r==null?r!==void 0&&(t+=(t.length?`&`:``)+n):(bs(r)?r.map(e=>e&&Xs(e)):[r&&Xs(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Oc(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=bs(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}function kc(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ac(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(Cs(4,{from:n,to:t})):e instanceof Error?c(e):wc(e)?c(Cs(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function jc(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(t===`beforeRouteEnter`||o.instances[e]){if(hs(s)){let c=(s.__vccOpts||s)[t];c&&a.push(Ac(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=gs(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&Ac(c,n,r,o,e,i)()}))}}}return a}function Mc(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>sc(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>sc(e,s))||i.push(s))}return[n,r,i]}var Nc=()=>location.protocol+`//`+location.host;function Pc(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),ac(n,``)}return ac(n,e)+r+i}function Fc(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=Pc(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:`pop`,direction:u?u>0?`forward`:`back`:``})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){let{history:e}=window;e.state&&e.replaceState(_s({},e.state,{scroll:_c()}),``)}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),{pauseListeners:c,listen:l,destroy:d}}function Ic(e,t,n,r=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:null}}function Lc(e){let{history:t,location:n}=window,r={value:Pc(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:Nc()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){let o=_s({},t.state,Ic(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});a(e,o,!0),Cc(o.position,!0),r.value=e}function s(e,n){let o=_s({},i.value,t.state,{forward:e,scroll:_c()});a(o.current,o,!0),a(e,_s({},Ic(r.value,e,null),{position:o.position+1},n),!1),Cc(o.position),r.value=e}return{location:r,state:i,push:s,replace:o}}function Rc(e){e=pc(e);let t=Lc(e),n=Fc(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=_s({location:``,base:e,go:r,createHref:hc.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}var zc={type:0,value:``},Bc=/[a-zA-Z0-9_]/;function Vc(e){if(!e)return[[]];if(e===`/`)return[[zc]];if(!ms(e))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&(n===0?a.push({type:0,value:l}):n===1||n===2||n===3?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),l=``)}function f(){l+=c}for(;s<e.length;)switch(c=e[s++],n){case 0:c===`\\`?(r=n,n=4):c===`/`?(l&&d(),o()):c===`:`?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:c===`(`?n=2:Bc.test(c)?f():(d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case 2:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`)}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var Hc=`[^/]+?`,Uc={sensitive:!1,strict:!1,start:!0,end:!0},Wc=/[.+*?^${}()[\]/\\]/g;function Gc(e,t){let n=_s({},Uc,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[90];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=40+(n.sensitive?.25:0);if(o.type===0)r||(i+=`/`),i+=o.value.replace(Wc,`\\$&`),s+=40;else if(o.type===1){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||Hc;if(u!==Hc){s+=10;try{RegExp(`(${u})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=20,c&&(s+=-8),n&&(s+=-20),u===`.*`&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){r&&n.endsWith(`/`)||(n+=`/`),r=!1;for(let e of i)if(e.type===0)n+=e.value;else if(e.type===1){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(bs(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=bs(c)?c.join(`/`):c;if(!l){if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`)}n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function Kc(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function qc(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=Kc(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(Jc(r))return 1;if(Jc(i))return-1}return i.length-r.length}function Jc(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var Yc={strict:!1,end:!0,sensitive:!1};function Xc(e,t,n){let r=_s(Gc(Vc(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Zc(e,t){let n=[],r=new Map;t=xs(Yc,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=$c(e);s.aliasOf=r&&r.record;let l=xs(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push($c(_s({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&!ms(u)){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=Xc(t,n,l),r?r.alias.push(d):(f=f||d,f!==d&&f.alias.push(d),i&&e.name&&!tl(d)&&o(e.name)),al(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r=r||d}return f?()=>{o(f)}:ys}function o(e){if(Tc(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=rl(e,n);n.splice(t,0,e),e.record.name&&!tl(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw Cs(1,{location:e});s=i.record.name,a=_s(Qc(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&Qc(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name,i.keys.forEach(e=>{e.optional&&!a[e.name]&&delete a[e.name]}));else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Cs(1,{location:e,currentLocation:t});s=i.record.name,a=_s({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:nl(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function Qc(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function $c(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:el(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function el(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function tl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function nl(e){return e.reduce((e,t)=>_s(e,t.meta),{})}function rl(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;qc(e,t[i])<0?r=i:n=i+1}let i=il(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function il(e){let t=e;for(;t=t.parent;)if(al(t)&&qc(e,t)===0)return t}function al({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ol(e){let t=Mn(Ds),n=Mn(Os),r=Ja(()=>{let n=B(e.to);return t.resolve(n)}),i=Ja(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(sc.bind(null,i));if(o>-1)return o;let s=dl(e[t-2]);return t>1&&dl(i)===s&&a[a.length-1].path!==s?a.findIndex(sc.bind(null,e[t-2])):o}),a=Ja(()=>i.value>-1&&ul(n.params,r.value.params)),o=Ja(()=>i.value>-1&&i.value===n.matched.length-1&&cc(n.params,r.value.params));function s(n={}){if(ll(n)){let n=t[B(e.replace)?`replace`:`push`](B(e.to)).catch(ys);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:Ja(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function sl(e){return e.length===1?e[0]:e}var cl=mr({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:ol,setup(e,{slots:t}){let n=At(ol(e)),{options:r}=Mn(Ds),i=Ja(()=>({[fl(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[fl(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&sl(t.default(n));return e.custom?r:Ya(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function ll(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(e.button===void 0||e.button===0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ul(e,t){for(let n in t){let r=t[n],i=e[n];if(bs(r)){if(!bs(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}else if(r!==i)return!1}return!0}function dl(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var fl=(e,t,n)=>e??t??n,pl=mr({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=Mn(ks),i=Ja(()=>e.route||r.value),a=Mn(Es,0),o=Ja(()=>{let e=B(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=Ja(()=>i.value.matched[o.value]);jn(Es,Ja(()=>o.value+1)),jn(Ts,s),jn(ks,i);let c=new Set;jn(As,c);let l=Ut(),u=fc,{app:d}=Ma().appContext;return Fn(()=>[l.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&sc(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,f=o&&o.components[a];if(!f)return ml(n.default,{Component:f,route:r});let p=o.props[a],m=p?p===!0?r.params:typeof p==`function`?p(r):p:null,h=e=>{e.component.isUnmounted&&(o.instances[a]=null)},g=e=>hn(()=>{if(u===r||i.value!==r||e.el.getRootNode()!==d._container.getRootNode())return;let t=u;u=r;for(let e of c)e(r,t)}),_=Ya(f,_s({},m,t,{onVnodeUnmounted:h,onVnodeMounted:g,onVnodeUpdated:g,ref:l}));return ml(n.default,{Component:_,route:r})||_}}});function ml(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var hl=pl;function gl(e){let t=e.matcher||Zc(e.routes,e),n=e.parseQuery||Ec,r=e.stringifyQuery||Dc,i=e.history,a=kc(),o=kc(),s=kc(),c=Wt(fc),l=Wt(0),u=fc;Ns&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let d=vs.bind(null,e=>``+e),f=vs.bind(null,$s),p=vs.bind(null,ec);function m(e,n){let r,i;Tc(e)?(r=t.getRecordMatcher(e),i=n):i=e;let a=t.addRoute(i,r);return l.value++,()=>{a(),l.value++}}function h(e){let n=t.getRecordMatcher(e);n&&(t.removeRoute(n),l.value++)}function g(){t.clearRoutes(),l.value++}function _(){return t.getRoutes().map(e=>e.record)}function v(e){return!!t.getRecordMatcher(e)}function y(e,a){if(l.value,typeof e==`string`){a=a||(e.startsWith(`/`)?fc:c.value);let r=rc(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return _s(r,o,{params:p(o.params),redirectedFrom:void 0,href:s})}a=_s({},a||(e.path!=null&&e.path.startsWith(`/`)&&!(`name`in e&&e.name)?fc:c.value));let o;if(e.path!=null)o=_s({},e,{path:rc(n,e.path,a.path).path});else{let t=_s({},e.params);for(let e in t)t[e]??delete t[e];o=_s({},e,{params:f(t)}),a.params=f(a.params)}let s=t.resolve(o,a),u=e.hash||``;s.params=d(p(s.params));let m=ic(r,_s({},e,{hash:Ys(u),path:s.path})),h=i.createHref(m);return _s({fullPath:m,hash:u,query:r===Dc?Oc(e.query):e.query||{}},s,{redirectedFrom:void 0,href:h})}function b(e){return typeof e==`string`?rc(n,e,c.value.path):_s({},e)}function x(e,t){if(u!==e)return Cs(8,{from:t,to:e})}function S(e){return T(e)}function C(e){return S(_s(b(e),{replace:!0}))}function w(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=b(i):{path:i},i.params={}),_s({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function T(e,t){let n=u=y(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,l=w(n,i);if(l)return T(_s(b(l),{state:typeof l==`object`?_s({},a,l.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&oc(r,i,n)&&(f=Cs(16,{to:d,from:i}),ie(i,i,!0,!1)),(f?Promise.resolve(f):O(d,i)).catch(e=>ws(e)?ws(e,2)?e:re(e):te(e,d,i)).then(e=>{if(e){if(ws(e,2))return T(_s({replace:s},b(e.to),{state:typeof e.to==`object`?_s({},a,e.to.state):a,force:o}),t||d)}else e=A(d,i,!0,s,a);return k(d,i,e),e})}function E(e,t){let n=x(e,t);return n?Promise.reject(n):Promise.resolve()}function D(e){let t=se.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function O(e,t){let n,[r,i,s]=Mc(e,t);n=jc(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(Ac(r,e,t))});let c=E.bind(null,e,t);return n.push(c),le(n).then(()=>{n=[];for(let r of a.list())n.push(Ac(r,e,t));return n.push(c),le(n)}).then(()=>{n=jc(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(Ac(r,e,t))});return n.push(c),le(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter){if(bs(r.beforeEnter))for(let i of r.beforeEnter)n.push(Ac(i,e,t));else n.push(Ac(r.beforeEnter,e,t))}return n.push(c),le(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=jc(s,`beforeRouteEnter`,e,t,D),n.push(c),le(n))).then(()=>{n=[];for(let r of o.list())n.push(Ac(r,e,t));return n.push(c),le(n)}).catch(e=>ws(e,8)?e:Promise.reject(e))}function k(e,t,n){s.list().forEach(r=>D(()=>r(e,t,n)))}function A(e,t,n,r,a){let o=x(e,t);if(o)return o;let s=t===fc,l=Ns?history.state:{};n&&(r||s?i.replace(e.fullPath,_s({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,ie(e,t,n,s),re()}let j;function M(){j||(j=i.listen((e,t,n)=>{if(!ce.listening)return;let r=y(e),a=w(r,ce.currentRoute.value);if(a){T(_s(a,{replace:!0,force:!0}),r).catch(ys);return}u=r;let o=c.value;Ns&&n.delta&&xc(yc(o.fullPath,n.delta)),O(r,o).catch(e=>ws(e,12)?e:ws(e,2)?(T(_s(b(e.to),{force:!0}),r).then(e=>{ws(e,20)&&!n.delta&&n.type===`pop`&&i.go(-1,!1)}).catch(ys),Promise.reject()):(n.delta&&i.go(-n.delta,!1),te(e,r,o))).then(e=>{e=e||A(r,o,!1),e&&(n.delta&&!ws(e,8)?i.go(-n.delta,!1):n.type===`pop`&&ws(e,20)&&i.go(-1,!1)),k(r,o,e)}).catch(ys)}))}let N=kc(),ee=kc(),P;function te(e,t,n){re(e);let r=ee.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function ne(){return P&&c.value!==fc?Promise.resolve():new Promise((e,t)=>{N.add([e,t])})}function re(e){return P||(P=!e,M(),N.list().forEach(([t,n])=>e?n(e):t()),N.reset()),e}function ie(t,n,r,i){let{scrollBehavior:a}=e;if(!Ns||!a)return Promise.resolve();let o=!r&&Sc(yc(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return hn().then(()=>a(t,n,o)).then(e=>t===c.value&&e&&vc(e)).catch(e=>t===c.value&&te(e,t,n))}let ae=e=>i.go(e),oe,se=new Set,ce={currentRoute:c,listening:!0,addRoute:m,removeRoute:h,clearRoutes:g,hasRoute:v,getRoutes:_,resolve:y,options:e,push:S,replace:C,go:ae,back:()=>ae(-1),forward:()=>ae(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:ee.add,isReady:ne,install(e){e.component(`RouterLink`,cl),e.component(`RouterView`,hl),e.config.globalProperties.$router=ce,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>B(c)}),Ns&&!oe&&c.value===fc&&(oe=!0,S(i.location).catch(e=>{}));let t={};for(let e in fc)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(Ds,ce),e.provide(Os,jt(t)),e.provide(ks,c);let n=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(u=fc,j&&j(),j=null,c.value=fc,oe=!1,P=!1),n()}}};function le(e){return e.reduce((e,t)=>e.then(()=>D(t)),Promise.resolve())}return ce}var _l=mr({__name:`App`,setup(e){return(e,t)=>(V(),da(B(hl)))}});function vl(e,t){let n=e*374761393+t*668265263;return n=(n^n>>>13)*1274126177,n^=n>>>16,(n>>>0)/4294967295}function yl(e){return e*e*(3-2*e)}function bl(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=vl(n,r),s=vl(n+1,r),c=vl(n,r+1),l=vl(n+1,r+1),u=yl(i),d=yl(a),f=o+(s-o)*u;return f+(c+(l-c)*u-f)*d}function xl(e,t,n=4){let r=0,i=.5,a=1,o=0;for(let s=0;s<n;s+=1)r+=bl(e*a,t*a)*i,o+=i,i*=.5,a*=2.03;return r/o}function Sl(e){let t=1/0,n=-1/0,r=1/0,i=-1/0;for(let[a,o]of e)a<t&&(t=a),a>n&&(n=a),o<r&&(r=o),o>i&&(i=o);return{minX:t,maxX:n,minZ:r,maxZ:i}}function Cl(e,t,n){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i,i+=1){let[o,s]=n[i],[c,l]=n[a];s>t!=l>t&&e<(c-o)*(t-s)/(l-s)+o&&(r=!r)}return r}function wl(e,t,n,r,i){let a=i*i,o=a*i;return .5*(2*t+(-e+n)*i+(2*e-5*t+4*n-r)*a+(-e+3*t-3*n+r)*o)}function Tl(e,t=4,n=0,r=0){if(e.length<3||t<1)return e.map(e=>[...e]);let i=[],a=e.length,o=Math.max(1,Math.round(t));for(let t=0;t<a;t+=1){let s=e[(t-1+a)%a],c=e[t],l=e[(t+1)%a],u=e[(t+2)%a];for(let e=0;e<o;e+=1){let a=e/o,d=wl(s[0],c[0],l[0],u[0],a),f=wl(s[1],c[1],l[1],u[1],a);if(n!==0){let i=(bl(t*3.17+e*.71,r*.013)-.5)*n,a=Math.hypot(d,f)||1;d+=d/a*i,f+=f/a*i}i.push([d,f])}}return i}function El(e,t,n,r,i,a){let o=i-n,s=a-r,c=o*o+s*s;if(c===0)return Math.hypot(e-n,t-r);let l=Math.max(0,Math.min(1,((e-n)*o+(t-r)*s)/c));return Math.hypot(e-(n+o*l),t-(r+s*l))}var Dl=[{id:`elizabeth-alvarez`,title:`Elizabeth Álvarez`,category:`Sitio web · Marca personal`,description:`Sitio web profesional creado para fortalecer la presencia digital de Elizabeth Álvarez Quiroga y presentar su perfil, identidad y propuesta profesional en un espacio propio. La página funciona como una vitrina digital para comunicar quién es, destacar su perfil y facilitar que las personas interesadas conozcan su trabajo y establezcan contacto.`,problem:`La profesional necesitaba un espacio propio que reuniera su identidad, su propuesta de valor y un canal claro de contacto, manteniendo una experiencia visual atractiva en computadores y dispositivos móviles.`,solution:`Se desarrolló una marca personal digital con jerarquía de contenidos clara, una navegación sencilla y una presentación visual consistente en todas las secciones, pensada para comunicar confianza y facilitar el contacto.`,technologies:[`Vue 3`,`Vite`,`TypeScript`,`GSAP`,`ScrollTrigger`],features:[`Identidad visual coherente con el perfil profesional`,`Estructura de contenidos orientada a la propuesta de valor`,`Navegación intuitiva y adaptable a móviles`,`Animaciones de entrada y scroll cuidadas`,`Llamados a la acción para establecer contacto`],image:`/images/projects/elizabeth-cover.webp`,gallery:[`/images/projects/elizabeth-01.webp`,`/images/projects/elizabeth-02.webp`,`/images/projects/elizabeth-03.webp`],liveUrl:`https://elizabeth-page.netlify.app/`,regionId:`WEB`,featured:!0},{id:`mayte-montero`,title:`Mayte Montero`,category:`Sitio web · Promoción artística · Booking`,description:`Sitio web oficial desarrollado para fortalecer la presencia digital de Mayte Montero y promocionar su trayectoria y propuesta artística. La plataforma permite que visitantes, organizadores y posibles contratantes conozcan su perfil musical, exploren su contenido y encuentren un canal directo para solicitar presentaciones.`,problem:`La artista necesitaba convertir su presencia digital en una herramienta comercial capaz de presentar su trayectoria, organizar contenido multimedia y facilitar solicitudes de contratación para eventos.`,solution:`Se construyó una plataforma bilingüe de promoción y booking con narrativa visual inmersiva, galería multimedia, flujo de contacto para eventos y una estructura de contenidos optimizada para buscadores.`,technologies:[`Vue 3`,`Vite`,`TypeScript`,`Three.js`,`GSAP`,`Lenis`,`vue-i18n`,`Prerender SEO`],features:[`Experiencia visual con animaciones e interacción 3D`,`Contenido bilingüe español e inglés`,`Galería multimedia y presentación de trayectoria`,`Flujo de solicitud de contratación con datos del evento`,`SEO técnico con prerender y datos estructurados`,`Navegación fluida con scroll suavizado`],image:`/images/projects/mayte-cover.webp`,gallery:[`/images/projects/mayte-01.webp`,`/images/projects/mayte-02.webp`,`/images/projects/mayte-03.webp`],liveUrl:`https://maytemontero.com/`,regionId:`WEB`,featured:!0},{id:`tracking`,title:`TracKing`,category:`Plataforma SaaS · Logística`,description:`Plataforma digital concebida para centralizar y optimizar las operaciones de empresas de mensajería y domicilios. El ecosistema contempla la administración de empresas, usuarios, clientes, mensajeros y servicios desde un entorno integrado, con creación y asignación de pedidos, seguimiento de servicios, registro de evidencias de entrega, gestión de jornadas y generación de liquidaciones e informes.`,problem:`Las empresas de mensajería operaban con procesos dispersos: asignaciones manuales, poca visibilidad de la ubicación de los mensajeros, liquidaciones propensas a errores y dificultad para mantener trazabilidad de cada entrega.`,solution:`Se diseñó una plataforma SaaS multiempresa con backend NestJS, base de datos PostgreSQL gestionada con Prisma y una aplicación móvil en React Native para mensajeros. La operación se centraliza en un ciclo de vida de pedidos con seguimiento GPS, evidencias de entrega, liquidaciones configurables y reportes operativos y financieros.`,technologies:[`Next.js`,`NestJS`,`Prisma`,`PostgreSQL`,`React Native`,`REST API`,`WebSocket`,`JWT`],features:[`Arquitectura multiempresa con aislamiento de datos`,`Tracking GPS en tiempo real actualizado cada 15 segundos`,`Ciclo de vida completo de pedidos con historial de estados`,`Aplicación móvil para mensajeros con evidencias fotográficas`,`Liquidaciones por porcentaje o monto fijo con historial`,`Reportes financieros y operativos por período`,`Autenticación con JWT y API REST`],image:`/images/projects/tracking-cover.webp`,gallery:[`/images/projects/tracking-01.webp`,`/images/projects/tracking-02.webp`,`/images/projects/tracking-03.webp`],liveUrl:`https://tracking-landing.netlify.app/#cta`,regionId:`BUSINESS`,featured:!0}],Ol=new Map(Dl.map(e=>[e.id,e]));function kl(e){if(e)return Ol.get(e)}var Al=46;function jl(e,t){return Tl(e,4,.55,t)}function Ml(e,t=Al){let n=t*.72;return{x:e.x,y:e.y+n,z:e.z+n}}var Nl=[{id:`WEB`,name:`Desarrollo Web`,shortName:`WEB`,tagline:`Interfaces y plataformas que se sienten naturales`,description:`Territorio dedicado a sitios web, landing pages, portafolios, tiendas virtuales y aplicaciones web. Cada proyecto se construye con una estructura clara, rendimiento cuidado y una experiencia consistente en todos los dispositivos.`,position:{x:-26,y:2.8,z:-15},target:{x:-26,y:3.2,z:-15},zoom:1,color:`#14B8A6`,services:[`Landing pages`,`Sitios corporativos`,`Portafolios`,`Tiendas virtuales`,`Aplicaciones web`,`Interfaces administrativas`],boundary:jl([[-15,-6],[-13,-12],[-7,-14],[-2,-12],[2,-15],[9,-11],[14,-5],[12,0],[15,5],[9,9],[3,12],[-3,10],[-7,13],[-12,8],[-15,2]],1)},{id:`MOBILE`,name:`Aplicaciones Móviles`,shortName:`MOBILE`,tagline:`Productos que acompañan al usuario`,description:`Espacio reservado para aplicaciones Android, desarrollos multiplataforma, herramientas empresariales y experiencias diseñadas para dispositivos móviles. Este territorio se encuentra en exploración activa.`,position:{x:26,y:2.6,z:-17},target:{x:26,y:3,z:-17},zoom:1,color:`#3B82F6`,services:[`Aplicaciones Android`,`Aplicaciones multiplataforma`,`Aplicaciones empresariales`,`Aplicaciones de gestión`,`Interfaces móviles`,`Integración con servicios externos`],boundary:jl([[-14,-7],[-10,-12],[-4,-14],[1,-11],[6,-14],[12,-9],[15,-3],[13,2],[15,7],[9,11],[3,10],[-2,13],[-8,10],[-13,5],[-15,-1]],2)},{id:`SYSTEMS`,name:`Sistemas Digitales`,shortName:`SYSTEMS`,tagline:`Estructura, procesos y operación`,description:`Región enfocada en sistemas administrativos, plataformas de gestión, automatización de procesos e integración de bases de datos. Aquí la organización y la trazabilidad son el centro de cada solución.`,position:{x:29,y:3,z:18},target:{x:29,y:3.4,z:18},zoom:1,color:`#8B5CF6`,services:[`Sistemas administrativos`,`Sistemas de gestión`,`Plataformas de seguimiento`,`Gestión de usuarios`,`Automatización de procesos`,`Integración de bases de datos`],boundary:jl([[-14,-4],[-11,-10],[-5,-13],[0,-11],[5,-14],[11,-8],[14,-2],[12,3],[15,7],[10,11],[4,9],[-1,13],[-7,10],[-12,6],[-15,1]],3)},{id:`EXPERIENCE`,name:`Experiencias Digitales`,shortName:`EXPERIENCE`,tagline:`Cuando la interfaz se convierte en experiencia`,description:`Territorio destinado a experiencias 3D, animaciones web, visualizaciones gráficas, efectos visuales y experimentación con WebGL. Este territorio se encuentra en exploración activa.`,position:{x:-28,y:2.9,z:20},target:{x:-28,y:3.3,z:20},zoom:1,color:`#F97316`,services:[`Experiencias 3D`,`Animaciones web`,`Interfaces interactivas`,`Visualizaciones gráficas`,`Experiencias inmersivas`,`Experimentación con WebGL`],boundary:jl([[-15,-2],[-12,-8],[-6,-12],[-1,-10],[4,-13],[10,-9],[14,-4],[12,1],[15,6],[9,10],[4,8],[-1,12],[-7,10],[-12,6],[-15,2]],4)},{id:`BUSINESS`,name:`Soluciones Empresariales`,shortName:`BUSINESS`,tagline:`Tecnología que responde a necesidades reales`,description:`Núcleo del territorio. Reúne plataformas personalizadas, digitalización de procesos, automatización empresarial, logística e integraciones entre sistemas. Los proyectos aquí pueden combinar varias especialidades.`,position:{x:0,y:3.4,z:0},target:{x:0,y:3.8,z:0},zoom:1,color:`#EAB308`,services:[`Plataformas personalizadas`,`Digitalización de procesos`,`Sistemas de administración`,`Automatización empresarial`,`Soluciones de logística`,`Integraciones entre plataformas`],boundary:jl([[-15,-6],[-12,-11],[-6,-14],[-1,-12],[4,-15],[10,-11],[14,-5],[12,0],[15,5],[11,9],[6,8],[2,13],[-4,12],[-9,14],[-13,9],[-15,3]],5)}].map(({target:e,...t})=>{let n=Dl.filter(e=>e.regionId===t.id).map(e=>e.id);return{...t,projectIds:n,cameraTarget:e,cameraPosition:Ml(e)}}),Pl=new Map(Nl.map(e=>[e.id,e])),Fl={position:{x:0,y:69,z:73},target:{x:0,y:1.5,z:0}};function Il(e){if(e)return Pl.get(e)}function Ll(e){let t=Pl.get(e);return t?t.projectIds.map(e=>kl(e)).filter(e=>!!e):[]}function Rl(e){return Pl.get(e)?.projectIds.length??0}Nl.filter(e=>e.projectIds.length>0),Nl.filter(e=>e.projectIds.length===0);var zl={name:`Desarrollador de Software`,initials:`DS`,role:`Desarrollo web · Móvil · Sistemas digitales`,location:`Colombia`,availability:`Disponible para nuevos proyectos`,email:`contacto@ejemplo.com`,summary:`Construyo experiencias y plataformas digitales con foco en rendimiento, claridad visual y arquitecturas mantenibles. Este portafolio es, en sí mismo, una demostración de esas capacidades.`,socials:[]},Bl=[{id:`inicio`,label:`Inicio`},{id:`mapa`,label:`Mapa`},{id:`servicios`,label:`Servicios`},{id:`sobre-mi`,label:`Sobre mí`},{id:`contacto`,label:`Contacto`}],Vl=[{id:`business-nexo`,name:`Nexo Central`,regionId:`BUSINESS`,local:[0,0],radius:5,rotation:.18,seed:4201,projectIds:[`tracking`]},{id:`business-meridiano`,name:`Distrito Meridiano`,regionId:`BUSINESS`,local:[7.2,-6],radius:4.2,rotation:-.34,seed:4202,projectIds:[]},{id:`web-villa`,name:`Villa Código`,regionId:`WEB`,local:[0,0],radius:4.9,rotation:.24,seed:5101,projectIds:[`elizabeth-alvarez`]},{id:`web-mirador`,name:`Mirador Digital`,regionId:`WEB`,local:[-7.2,6],radius:4.2,rotation:-.22,seed:5102,projectIds:[`mayte-montero`]},{id:`mobile-puerto`,name:`Puerto Móvil`,regionId:`MOBILE`,local:[0,0],radius:4.8,rotation:-.16,seed:6201,projectIds:[]},{id:`mobile-estacion`,name:`Estación Sur`,regionId:`MOBILE`,local:[7,-5.8],radius:4.2,rotation:.3,seed:6202,projectIds:[]},{id:`systems-nodo`,name:`Nodo Central`,regionId:`SYSTEMS`,local:[0,0],radius:4.8,rotation:.12,seed:7301,projectIds:[]},{id:`systems-red`,name:`Red Alta`,regionId:`SYSTEMS`,local:[-6.2,4.4],radius:3.9,rotation:-.28,seed:7302,projectIds:[]},{id:`experience-lumen`,name:`Estudio Lumen`,regionId:`EXPERIENCE`,local:[0,0],radius:4.8,rotation:.2,seed:8401,projectIds:[]},{id:`experience-jardin`,name:`Jardín Inmersivo`,regionId:`EXPERIENCE`,local:[6.2,4.3],radius:3.9,rotation:-.18,seed:8402,projectIds:[]}].map(e=>{let t=Il(e.regionId)?.position??{x:0,y:0,z:0};return{...e,position:{x:t.x+e.local[0],y:t.y,z:t.z+e.local[1]}}}),Hl=new Map(Vl.map(e=>[e.id,e])),Ul=new Map;for(let e of Vl){let t=Ul.get(e.regionId)??[];t.push(e),Ul.set(e.regionId,t)}function Wl(e){if(e)return Hl.get(e)}function Gl(e){return Ul.get(e)??[]}function Kl(e){if(e)return Vl.find(t=>t.projectIds.includes(e))}var ql=At({selection:{mode:`overview`,regionId:null,cityId:null,projectId:null},hover:{regionId:null,projectId:null},loading:!0,transitioning:!1,webglSupported:!0,qualityTier:`high`,reducedMotion:!1,activePanel:null}),Jl=Ja(()=>Nl.reduce((e,t)=>(e[t.id]=Rl(t.id),e),{}));function Yl(){let e=Ja(()=>Il(ql.selection.regionId)),t=Ja(()=>Wl(ql.selection.cityId)),n=Ja(()=>kl(ql.selection.projectId)),r=Ja(()=>{let t=e.value;return t?Gl(t.id):[]}),i=Ja(()=>{let t=e.value;return t?Ll(t.id):[]}),a=Ja(()=>{let e=t.value;return e?e.projectIds.map(e=>kl(e)).filter(e=>!!e):[]}),o=Ja(()=>Il(ql.hover.regionId)),s=Ja(()=>kl(ql.hover.projectId)),c=Ja(()=>ql.selection.mode===`overview`);function l(e){ql.selection=e}function u(e){ql.hover=e}function d(e){ql.loading=e}function f(e){ql.transitioning=e}function p(e){ql.webglSupported=e}function m(e){ql.qualityTier=e}function h(e){ql.reducedMotion=e}function g(e){ql.activePanel=e}function _(){ql.selection={mode:`overview`,regionId:null,cityId:null,projectId:null},ql.hover={regionId:null,projectId:null},ql.activePanel=null}return{state:ql,selectedRegion:e,selectedCity:t,selectedProject:n,selectedRegionCities:r,selectedRegionProjects:i,selectedCityProjects:a,hoveredRegion:o,hoveredProject:s,isOverview:c,projectCounts:Jl,setSelection:l,setHover:u,setLoading:d,setTransitioning:f,setWebglSupported:p,setQualityTier:m,setReducedMotion:h,setActivePanel:g,reset:_}}function Xl(e){let{state:t,setActivePanel:n}=Yl(),r=Ja(()=>t.activePanel);function i(e){n(e)}function a(){n(null)}function o(t){n(null),t===`inicio`||t===`mapa`?e.value?.goOverview():n(t)}return{activePanel:r,openPanel:i,closePanel:a,navigate:o}}function Zl(e){function t(){e.value?.zoomIn()}function n(){e.value?.zoomOut()}function r(){e.value?.resetView()}function i(t){e.value?.selectRegion(t)}function a(t){e.value?.selectCity(t)}function o(t){e.value?.selectProject(t)}function s(){e.value?.goUp()}function c(){e.value?.goOverview()}function l(t){e.value?.focusNextRegion(t)}function u(t,n){e.value?.panBy(t,n)}return{zoomIn:t,zoomOut:n,reset:r,focusRegion:i,focusCity:a,focusProject:o,goUp:s,goOverview:c,focusNextRegion:l,panBy:u}}function Ql(e){if(!(e instanceof HTMLElement))return!1;let t=e.tagName;return t===`INPUT`||t===`TEXTAREA`||t===`SELECT`||e.isContentEditable}function $l(e){function t(t){if(Ql(t.target)||document.querySelector(`[data-modal="true"]`))return;let n=t.shiftKey?4:1.6;switch(t.key){case`Escape`:e.value?.selection.mode!==`overview`&&(t.preventDefault(),e.value?.goUp());break;case`+`:case`=`:t.preventDefault(),e.value?.zoomIn();break;case`-`:case`_`:t.preventDefault(),e.value?.zoomOut();break;case`r`:case`R`:t.preventDefault(),e.value?.resetView();break;case`ArrowLeft`:t.preventDefault(),e.value?.panBy(-n,0);break;case`ArrowRight`:t.preventDefault(),e.value?.panBy(n,0);break;case`ArrowUp`:t.preventDefault(),e.value?.panBy(0,n);break;case`ArrowDown`:t.preventDefault(),e.value?.panBy(0,-n)}}return kr(()=>{window.addEventListener(`keydown`,t)}),Mr(()=>{window.removeEventListener(`keydown`,t)}),{handleKeydown:t}}var eu,tu,nu,ru,iu,au,ou,su,cu,lu={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},uu={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},du=1e3,fu=1001,pu=1002,mu=1003,hu=1004,gu=1005,_u=1006,vu=1007,yu=1008,bu=1009,xu=1010,Su=1011,Cu=1012,wu=1013,Tu=1014,Eu=1015,Du=1016,Ou=1017,ku=1018,Au=1020,ju=35902,Mu=35899,Nu=1021,Pu=1022,Fu=1023,Iu=1026,Lu=1027,Ru=1028,zu=1029,Bu=1030,Vu=1031,Hu=1033,Uu=33776,Wu=33777,Gu=33778,Ku=33779,qu=35840,Ju=35841,Yu=35842,Xu=35843,Zu=36196,Qu=37492,$u=37496,ed=37488,td=37489,nd=37490,rd=37491,id=37808,ad=37809,od=37810,sd=37811,cd=37812,ld=37813,ud=37814,dd=37815,fd=37816,pd=37817,md=37818,hd=37819,gd=37820,_d=37821,vd=36492,yd=36494,bd=36495,xd=36283,Sd=36284,Cd=36285,wd=36286,Td=2300,Ed=2301,Dd=2302,Od=2303,kd=2400,Ad=2401,jd=2402,Md=3200,Nd=`srgb`,Pd=`srgb-linear`,Fd=`linear`,Id=`srgb`,Ld=7680,Rd=35044,zd=2e3;function Bd(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Vd(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Hd(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ud(){let e=Hd(`canvas`);return e.style.display=`block`,e}var Wd={};function Gd(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Kd(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function G(...e){e=Kd(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function K(...e){e=Kd(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function qd(...e){let t=e.join(` `);t in Wd||(Wd[t]=!0,G(...e))}function Jd(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Yd={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},Xd=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Zd=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Qd=1234567,$d=Math.PI/180,ef=180/Math.PI;function tf(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Zd[e&255]+Zd[e>>8&255]+Zd[e>>16&255]+Zd[e>>24&255]+`-`+Zd[t&255]+Zd[t>>8&255]+`-`+Zd[t>>16&15|64]+Zd[t>>24&255]+`-`+Zd[n&63|128]+Zd[n>>8&255]+`-`+Zd[n>>16&255]+Zd[n>>24&255]+Zd[r&255]+Zd[r>>8&255]+Zd[r>>16&255]+Zd[r>>24&255]).toLowerCase()}function nf(e,t,n){return Math.max(t,Math.min(n,e))}function rf(e,t){return(e%t+t)%t}function af(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function of(e,t,n){return e===t?0:(n-e)/(t-e)}function sf(e,t,n){return(1-n)*e+n*t}function cf(e,t,n,r){return sf(e,t,1-Math.exp(-n*r))}function lf(e,t=1){return t-Math.abs(rf(e,t*2)-t)}function uf(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function df(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function ff(e,t){return e+Math.floor(Math.random()*(t-e+1))}function pf(e,t){return e+Math.random()*(t-e)}function mf(e){return e*(.5-Math.random())}function hf(e){e!==void 0&&(Qd=e);let t=Qd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gf(e){return e*$d}function _f(e){return e*ef}function vf(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function yf(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function bf(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function xf(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:G(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Sf(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Cf(e,t){if(t.constructor===Float32Array)return e;let n=Sf(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function wf(e,t){if(t.constructor===Float32Array)return e;let n=Sf(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Tf={DEG2RAD:$d,RAD2DEG:ef,generateUUID:tf,clamp:nf,euclideanModulo:rf,mapLinear:af,inverseLerp:of,lerp:sf,damp:cf,pingpong:lf,smoothstep:uf,smootherstep:df,randInt:ff,randFloat:pf,randFloatSpread:mf,seededRandom:hf,degToRad:gf,radToDeg:_f,isPowerOfTwo:vf,ceilPowerOfTwo:yf,floorPowerOfTwo:bf,setQuaternionFromProperEuler:xf,normalize:wf,denormalize:Cf};ou=Symbol.iterator;var q=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nf(this.x,e.x,t.x),this.y=nf(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nf(this.x,e,t),this.y=nf(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nf(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nf(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[ou](){yield this.x,yield this.y}};eu=q,eu.prototype.isVector2=!0;var Ef=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:G(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nf(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};su=Symbol.iterator;var J=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Of.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Of.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nf(this.x,e.x,t.x),this.y=nf(this.y,e.y,t.y),this.z=nf(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nf(this.x,e,t),this.y=nf(this.y,e,t),this.z=nf(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nf(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Df.copy(this).projectOnVector(e),this.sub(Df)}reflect(e){return this.sub(Df.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nf(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[su](){yield this.x,yield this.y,yield this.z}};tu=J,tu.prototype.isVector3=!0;var Df=new J,Of=new Ef,Y=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return qd(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(kf.makeScale(e,t)),this}rotate(e){return qd(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(kf.makeRotation(-e)),this}translate(e,t){return qd(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(kf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};nu=Y,nu.prototype.isMatrix3=!0;var kf=new Y,Af=new Y().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jf=new Y().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mf(){let e={enabled:!0,workingColorSpace:Pd,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Pf(e.r),e.g=Pf(e.g),e.b=Pf(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ff(e.r),e.g=Ff(e.g),e.b=Ff(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Fd:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Pd]:{primaries:t,whitePoint:r,transfer:Fd,toXYZ:Af,fromXYZ:jf,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Nd},outputColorSpaceConfig:{drawingBufferColorSpace:Nd}},[Nd]:{primaries:t,whitePoint:r,transfer:Id,toXYZ:Af,fromXYZ:jf,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Nd}}}),e}var Nf=Mf();function Pf(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ff(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var If,Lf=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{If===void 0&&(If=Hd(`canvas`)),If.width=e.width,If.height=e.height;let t=If.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=If}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Hd(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Pf(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Pf(t[e]/255)*255):t[e]=Pf(t[e]);return{data:t,width:e.width,height:e.height}}return G(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Rf=0,zf=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=tf(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Bf(r[t].image)):e.push(Bf(r[t]))}else e=Bf(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Bf(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Lf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(G(`Texture: Unable to serialize Texture.`),{})}var Vf=0,Hf=new J,Uf=class e extends Xd{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=fu,i=fu,a=_u,o=yu,s=Fu,c=bu,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=tf(),this.name=``,this.source=new zf(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new q(0,0),this.repeat=new q(1,1),this.center=new q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Y,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Hf).x}get height(){return this.source.getSize(Hf).y}get depth(){return this.source.getSize(Hf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){G(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?G(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case du:e.x-=Math.floor(e.x);break;case fu:e.x=e.x<0?0:1;break;case pu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case du:e.y-=Math.floor(e.y);break;case fu:e.y=e.y<0?0:1;break;case pu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Uf.DEFAULT_IMAGE=null,Uf.DEFAULT_MAPPING=300,Uf.DEFAULT_ANISOTROPY=1,cu=Symbol.iterator;var Wf=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nf(this.x,e.x,t.x),this.y=nf(this.y,e.y,t.y),this.z=nf(this.z,e.z,t.z),this.w=nf(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nf(this.x,e,t),this.y=nf(this.y,e,t),this.z=nf(this.z,e,t),this.w=nf(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nf(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[cu](){yield this.x,yield this.y,yield this.z,yield this.w}};ru=Wf,ru.prototype.isVector4=!0;var Gf=class extends Xd{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_u,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Wf(0,0,e,t),this.scissorTest=!1,this.viewport=new Wf(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Uf({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:_u,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new zf(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Kf=class extends Gf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qf=class extends Uf{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mu,this.minFilter=mu,this.wrapR=fu,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Jf=class extends Uf{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mu,this.minFilter=mu,this.wrapR=fu,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Yf=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Xf.setFromMatrixColumn(e,0).length(),i=1/Xf.setFromMatrixColumn(e,1).length(),a=1/Xf.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qf,e,$f)}lookAt(e,t,n){let r=this.elements;return np.subVectors(e,t),np.lengthSq()===0&&(np.z=1),np.normalize(),ep.crossVectors(n,np),ep.lengthSq()===0&&(Math.abs(n.z)===1?np.x+=1e-4:np.z+=1e-4,np.normalize(),ep.crossVectors(n,np)),ep.normalize(),tp.crossVectors(np,ep),r[0]=ep.x,r[4]=tp.x,r[8]=np.x,r[1]=ep.y,r[5]=tp.y,r[9]=np.y,r[2]=ep.z,r[6]=tp.z,r[10]=np.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],P=r[11],te=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*P,i[12]=a*w+o*O+s*M+c*te,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*P,i[13]=l*w+u*O+d*M+f*te,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*P,i[14]=p*w+m*O+h*M+g*te,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*P,i[15]=_*w+v*O+y*M+b*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Xf.set(r[0],r[1],r[2]).length(),o=Xf.set(r[4],r[5],r[6]).length(),s=Xf.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Zf.copy(this);let c=1/a,l=1/o,u=1/s;return Zf.elements[0]*=c,Zf.elements[1]*=c,Zf.elements[2]*=c,Zf.elements[4]*=l,Zf.elements[5]*=l,Zf.elements[6]*=l,Zf.elements[8]*=u,Zf.elements[9]*=u,Zf.elements[10]*=u,t.setFromRotationMatrix(Zf),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=zd,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=zd,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};iu=Yf,iu.prototype.isMatrix4=!0;var Xf=new J,Zf=new Yf,Qf=new J(0,0,0),$f=new J(1,1,1),ep=new J,tp=new J,np=new J,rp=new Yf,ip=new Ef,ap=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(nf(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-nf(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(nf(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-nf(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(nf(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-nf(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:G(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ip.setFromEuler(this),this.setFromQuaternion(ip,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ap.DEFAULT_ORDER=`XYZ`;var op=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},sp=0,cp=new J,lp=new Ef,up=new Yf,dp=new J,fp=new J,pp=new J,mp=new Ef,hp=new J(1,0,0),gp=new J(0,1,0),_p=new J(0,0,1),vp={type:`added`},yp={type:`removed`},bp={type:`childadded`,child:null},xp={type:`childremoved`,child:null},Sp=class e extends Xd{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=tf(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new J,n=new ap,r=new Ef,i=new J(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yf},normalMatrix:{value:new Y}}),this.matrix=new Yf,this.matrixWorld=new Yf,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lp.setFromAxisAngle(e,t),this.quaternion.multiply(lp),this}rotateOnWorldAxis(e,t){return lp.setFromAxisAngle(e,t),this.quaternion.premultiply(lp),this}rotateX(e){return this.rotateOnAxis(hp,e)}rotateY(e){return this.rotateOnAxis(gp,e)}rotateZ(e){return this.rotateOnAxis(_p,e)}translateOnAxis(e,t){return cp.copy(e).applyQuaternion(this.quaternion),this.position.add(cp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hp,e)}translateY(e){return this.translateOnAxis(gp,e)}translateZ(e){return this.translateOnAxis(_p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(up.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?dp.copy(e):dp.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),fp.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?up.lookAt(fp,dp,this.up):up.lookAt(dp,fp,this.up),this.quaternion.setFromRotationMatrix(up),r&&(up.extractRotation(r.matrixWorld),lp.setFromRotationMatrix(up),this.quaternion.premultiply(lp.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(K(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vp),bp.child=e,this.dispatchEvent(bp),bp.child=null):K(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yp),xp.child=e,this.dispatchEvent(xp),xp.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),up.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),up.multiply(e.parent.matrixWorld)),e.applyMatrix4(up),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vp),bp.child=e,this.dispatchEvent(bp),bp.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fp,e,pp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fp,mp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Sp.DEFAULT_UP=new J(0,1,0),Sp.DEFAULT_MATRIX_AUTO_UPDATE=!0,Sp.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Cp=class extends Sp{constructor(){super(),this.isGroup=!0,this.type=`Group`}},wp={type:`move`},Tp=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cp,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cp,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cp,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wp)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Cp;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dp={h:0,s:0,l:0},Op={h:0,s:0,l:0};function kp(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var X=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nd){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nf.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Nf.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nf.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Nf.workingColorSpace){if(e=rf(e,1),t=nf(t,0,1),n=nf(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=kp(i,r,e+1/3),this.g=kp(i,r,e),this.b=kp(i,r,e-1/3)}return Nf.colorSpaceToWorking(this,r),this}setStyle(e,t=Nd){function n(t){t!==void 0&&parseFloat(t)<1&&G(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:G(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);G(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nd){let n=Ep[e.toLowerCase()];return n===void 0?G(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pf(e.r),this.g=Pf(e.g),this.b=Pf(e.b),this}copyLinearToSRGB(e){return this.r=Ff(e.r),this.g=Ff(e.g),this.b=Ff(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nd){return Nf.workingToColorSpace(Ap.copy(this),e),Math.round(nf(Ap.r*255,0,255))*65536+Math.round(nf(Ap.g*255,0,255))*256+Math.round(nf(Ap.b*255,0,255))}getHexString(e=Nd){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nf.workingColorSpace){Nf.workingToColorSpace(Ap.copy(this),t);let n=Ap.r,r=Ap.g,i=Ap.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Nf.workingColorSpace){return Nf.workingToColorSpace(Ap.copy(this),t),e.r=Ap.r,e.g=Ap.g,e.b=Ap.b,e}getStyle(e=Nd){Nf.workingToColorSpace(Ap.copy(this),e);let t=Ap.r,n=Ap.g,r=Ap.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Dp),this.setHSL(Dp.h+e,Dp.s+t,Dp.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dp),e.getHSL(Op);let n=sf(Dp.h,Op.h,t),r=sf(Dp.s,Op.s,t),i=sf(Dp.l,Op.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ap=new X;X.NAMES=Ep;var jp=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new X(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Mp=class extends Sp{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ap,this.environmentIntensity=1,this.environmentRotation=new ap,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Np=new J,Pp=new J,Fp=new J,Ip=new J,Lp=new J,Rp=new J,zp=new J,Bp=new J,Vp=new J,Hp=new J,Up=new Wf,Wp=new Wf,Gp=new Wf,Kp=class e{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Np.subVectors(e,t),r.cross(Np);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Np.subVectors(r,t),Pp.subVectors(n,t),Fp.subVectors(e,t);let a=Np.dot(Np),o=Np.dot(Pp),s=Np.dot(Fp),c=Pp.dot(Pp),l=Pp.dot(Fp),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ip)!==null&&Ip.x>=0&&Ip.y>=0&&Ip.x+Ip.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Ip)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Ip.x),s.addScaledVector(a,Ip.y),s.addScaledVector(o,Ip.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Up.setScalar(0),Wp.setScalar(0),Gp.setScalar(0),Up.fromBufferAttribute(e,t),Wp.fromBufferAttribute(e,n),Gp.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Up,i.x),a.addScaledVector(Wp,i.y),a.addScaledVector(Gp,i.z),a}static isFrontFacing(e,t,n,r){return Np.subVectors(n,t),Pp.subVectors(e,t),Np.cross(Pp).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Np.subVectors(this.c,this.b),Pp.subVectors(this.a,this.b),Np.cross(Pp).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Lp.subVectors(r,n),Rp.subVectors(i,n),Bp.subVectors(e,n);let s=Lp.dot(Bp),c=Rp.dot(Bp);if(s<=0&&c<=0)return t.copy(n);Vp.subVectors(e,r);let l=Lp.dot(Vp),u=Rp.dot(Vp);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Lp,a);Hp.subVectors(e,i);let f=Lp.dot(Hp),p=Rp.dot(Hp);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Rp,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return zp.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(zp,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Lp,a).addScaledVector(Rp,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qp=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yp.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yp.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yp.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Yp):Yp.fromBufferAttribute(r,t),Yp.applyMatrix4(e.matrixWorld),this.expandByPoint(Yp);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Xp.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Xp.copy(e.boundingBox)),Xp.applyMatrix4(e.matrixWorld),this.union(Xp)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yp),Yp.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rm),im.subVectors(this.max,rm),Zp.subVectors(e.a,rm),Qp.subVectors(e.b,rm),$p.subVectors(e.c,rm),em.subVectors(Qp,Zp),tm.subVectors($p,Qp),nm.subVectors(Zp,$p);let t=[0,-em.z,em.y,0,-tm.z,tm.y,0,-nm.z,nm.y,em.z,0,-em.x,tm.z,0,-tm.x,nm.z,0,-nm.x,-em.y,em.x,0,-tm.y,tm.x,0,-nm.y,nm.x,0];return!sm(t,Zp,Qp,$p,im)||(t=[1,0,0,0,1,0,0,0,1],!sm(t,Zp,Qp,$p,im))?!1:(am.crossVectors(em,tm),t=[am.x,am.y,am.z],sm(t,Zp,Qp,$p,im))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yp).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yp).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Jp[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jp[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jp[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jp[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jp[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jp[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jp[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jp[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jp)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Jp=[new J,new J,new J,new J,new J,new J,new J,new J],Yp=new J,Xp=new qp,Zp=new J,Qp=new J,$p=new J,em=new J,tm=new J,nm=new J,rm=new J,im=new J,am=new J,om=new J;function sm(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){om.fromArray(e,a);let o=i.x*Math.abs(om.x)+i.y*Math.abs(om.y)+i.z*Math.abs(om.z),s=t.dot(om),c=n.dot(om),l=r.dot(om);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var cm=new J,lm=new q,um=0,dm=class extends Xd{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:um++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Rd,this.updateRanges=[],this.gpuType=Eu,this.version=0,this._normalizationScale=e===void 0?void 0:Sf(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lm.fromBufferAttribute(this,t),lm.applyMatrix3(e),this.setXY(t,lm.x,lm.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cm.fromBufferAttribute(this,t),cm.applyMatrix3(e),this.setXYZ(t,cm.x,cm.y,cm.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cm.fromBufferAttribute(this,t),cm.applyMatrix4(e),this.setXYZ(t,cm.x,cm.y,cm.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cm.fromBufferAttribute(this,t),cm.applyNormalMatrix(e),this.setXYZ(t,cm.x,cm.y,cm.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cm.fromBufferAttribute(this,t),cm.transformDirection(e),this.setXYZ(t,cm.x,cm.y,cm.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Cf(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?wf(e,this.array):Math.round(e*t)}},fm=class extends dm{constructor(e,t,n){super(new Uint16Array(e),t,n)}},pm=class extends dm{constructor(e,t,n){super(new Uint32Array(e),t,n)}},mm=class extends dm{constructor(e,t,n){super(new Float32Array(e),t,n)}},hm=new qp,gm=new J,_m=new J,vm=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?hm.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gm.subVectors(e,this.center);let t=gm.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(gm,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_m.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gm.copy(e.center).add(_m)),this.expandByPoint(gm.copy(e.center).sub(_m))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ym=0,bm=new Yf,xm=new Sp,Sm=new J,Cm=new qp,wm=new qp,Tm=new J,Em=class e extends Xd{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=tf(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Bd(e)?pm:fm)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Y().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bm.makeRotationFromQuaternion(e),this.applyMatrix4(bm),this}rotateX(e){return bm.makeRotationX(e),this.applyMatrix4(bm),this}rotateY(e){return bm.makeRotationY(e),this.applyMatrix4(bm),this}rotateZ(e){return bm.makeRotationZ(e),this.applyMatrix4(bm),this}translate(e,t,n){return bm.makeTranslation(e,t,n),this.applyMatrix4(bm),this}scale(e,t,n){return bm.makeScale(e,t,n),this.applyMatrix4(bm),this}lookAt(e){return xm.lookAt(e),xm.updateMatrix(),this.applyMatrix4(xm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sm).negate(),this.translate(Sm.x,Sm.y,Sm.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new mm(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&G(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qp);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)K(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Cm.setFromBufferAttribute(n),this.morphTargetsRelative?(Tm.addVectors(this.boundingBox.min,Cm.min),this.boundingBox.expandByPoint(Tm),Tm.addVectors(this.boundingBox.max,Cm.max),this.boundingBox.expandByPoint(Tm)):(this.boundingBox.expandByPoint(Cm.min),this.boundingBox.expandByPoint(Cm.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&K(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vm);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)K(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new J,1/0);else if(e){let n=this.boundingSphere.center;if(Cm.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];wm.setFromBufferAttribute(n),this.morphTargetsRelative?(Tm.addVectors(Cm.min,wm.min),Cm.expandByPoint(Tm),Tm.addVectors(Cm.max,wm.max),Cm.expandByPoint(Tm)):(Cm.expandByPoint(wm.min),Cm.expandByPoint(wm.max))}Cm.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Tm.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Tm));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Tm.fromBufferAttribute(a,t),o&&(Sm.fromBufferAttribute(e,t),Tm.add(Sm)),r=Math.max(r,n.distanceToSquared(Tm))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&K(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){K(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new dm(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new J,s[e]=new J;let l=new J,u=new J,d=new J,f=new q,p=new q,m=new q,h=new J,g=new J;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new J,b=new J,x=new J,S=new J;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new dm(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new J,i=new J,a=new J,o=new J,s=new J,c=new J,l=new J,u=new J;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tm.fromBufferAttribute(e,t),Tm.normalize(),e.setXYZ(t,Tm.x,Tm.y,Tm.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new dm(a,r,i)}if(this.index===null)return G(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Dm=new J,Om=new J,km=new Y,Am=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Dm.subVectors(n,t).cross(Om.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Dm),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||km.getNormalMatrix(e),r=this.coplanarPoint(Dm).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},jm=0,Mm=class extends Xd{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=tf(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new X(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ld,this.stencilZFail=Ld,this.stencilZPass=Ld,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){G(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?G(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new X().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Am().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new q().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new q().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Nm=new J,Pm=new J,Fm=new J,Im=new J,Lm=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nm)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Nm.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nm.copy(this.origin).addScaledVector(this.direction,t),Nm.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Pm.copy(e).add(t).multiplyScalar(.5),Fm.copy(t).sub(e).normalize(),Im.copy(this.origin).sub(Pm);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Fm),o=Im.dot(this.direction),s=-Im.dot(Fm),c=Im.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Pm).addScaledVector(Fm,d),f}intersectSphere(e,t){if(e.radius<0)return null;Nm.subVectors(e.center,this.origin);let n=Nm.dot(this.direction),r=Nm.dot(Nm)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Nm)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let ee=S/w,P=C/w,te=1/w,ne=T-ee*D,re=E-P*D,ie=O-ee*A,ae=k-P*A,oe=j-ee*N,se=M-P*N,ce=oe*ae-se*ie,le=ne*se-re*oe,ue=ie*re-ae*ne;if(r){if(ce<0||le<0||ue<0)return null}else if((ce<0||le<0||ue<0)&&(ce>0||le>0||ue>0))return null;let de=ce+le+ue;if(de===0)return null;let fe=te*(ce*D+le*A+ue*N);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rm=class extends Mm{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new X(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ap,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},zm=new Yf,Bm=new Lm,Vm=new vm,Hm=new J,Um=new J,Wm=new J,Gm=new J,Km=new J,qm=new J,Jm=new J,Ym=new J,Xm=class extends Sp{constructor(e=new Em,t=new Rm){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){qm.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Km.fromBufferAttribute(s,e),a?qm.addScaledVector(Km,r):qm.addScaledVector(Km.sub(t),r))}t.add(qm)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vm.copy(n.boundingSphere),Vm.applyMatrix4(i),Bm.copy(e.ray).recast(e.near),Vm.containsPoint(Bm.origin)===!1&&(Bm.intersectSphere(Vm,Hm)===null||Bm.origin.distanceToSquared(Hm)>(e.far-e.near)**2)||(zm.copy(i).invert(),Bm.copy(e.ray).applyMatrix4(zm),(n.boundingBox===null||Bm.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Bm)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Qm(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Qm(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Qm(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Qm(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Zm(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ym.copy(s),Ym.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ym);return l<n.near||l>n.far?null:{distance:l,point:Ym.clone(),object:e}}function Qm(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Um),e.getVertexPosition(c,Wm),e.getVertexPosition(l,Gm);let u=Zm(e,t,n,r,Um,Wm,Gm,Jm);if(u){let e=new J;Kp.getBarycoord(Jm,Um,Wm,Gm,e),i&&(u.uv=Kp.getInterpolatedAttribute(i,s,c,l,e,new q)),a&&(u.uv1=Kp.getInterpolatedAttribute(a,s,c,l,e,new q)),o&&(u.normal=Kp.getInterpolatedAttribute(o,s,c,l,e,new J),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new J,materialIndex:0};Kp.getNormal(Um,Wm,Gm,t.normal),u.face=t,u.barycoord=e}return u}var $m=class extends Uf{constructor(e=null,t=1,n=1,r,i,a,o,s,c=mu,l=mu,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},eh=class extends dm{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},th=new Yf,nh=new Yf,rh=[],ih=new qp,ah=new Yf,oh=new Xm,sh=new vm,ch=class extends Xm{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new eh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ah)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qp),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,th),ih.copy(e.boundingBox).applyMatrix4(th),this.boundingBox.union(ih)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vm),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,th),sh.copy(e.boundingSphere).applyMatrix4(th),this.boundingSphere.union(sh)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(oh.geometry=this.geometry,oh.material=this.material,oh.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sh.copy(this.boundingSphere),sh.applyMatrix4(n),e.ray.intersectsSphere(sh)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,th),nh.multiplyMatrices(n,th),oh.matrixWorld=nh,oh.raycast(e,rh);for(let e=0,n=rh.length;e<n;e++){let n=rh[e];n.instanceId=i,n.object=this,t.push(n)}rh.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new eh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new $m(new Float32Array(r*this.count),r,this.count,Ru,Eu));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},lh=new vm,uh=new q(.5,.5),dh=new J,fh=class{constructor(e=new Am,t=new Am,n=new Am,r=new Am,i=new Am,a=new Am){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zd,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lh.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lh.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lh)}intersectsSprite(e){return lh.center.set(0,0,0),lh.radius=.7071067811865476+uh.distanceTo(e.center),lh.applyMatrix4(e.matrixWorld),this.intersectsSphere(lh)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(dh.x=r.normal.x>0?e.max.x:e.min.x,dh.y=r.normal.y>0?e.max.y:e.min.y,dh.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dh)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ph=new Yf,mh=class e{constructor(){this.coordinateSystem=zd,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];ph.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new fh),n[e].setFromProjectionMatrix(ph,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new fh),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},hh=class extends Mm{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new X(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},gh=new J,_h=new J,vh=new Yf,yh=new Lm,bh=new vm,xh=new J,Sh=new J,Ch=class extends Sp{constructor(e=new Em,t=new hh){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)gh.fromBufferAttribute(t,e-1),_h.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=gh.distanceTo(_h);e.setAttribute(`lineDistance`,new mm(n,1))}else G(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bh.copy(n.boundingSphere),bh.applyMatrix4(r),bh.radius+=i,e.ray.intersectsSphere(bh)===!1)return;vh.copy(r).invert(),yh.copy(e.ray).applyMatrix4(vh);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=wh(this,e,yh,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=wh(this,e,yh,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=wh(this,e,yh,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=wh(this,e,yh,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function wh(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(gh.fromBufferAttribute(s,i),_h.fromBufferAttribute(s,a),n.distanceSqToSegment(gh,_h,xh,Sh)>r)return;xh.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(xh);if(!(c<t.near||c>t.far))return{distance:c,point:Sh.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Th=class extends Mm{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new X(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Eh=new Yf,Dh=new Lm,Oh=new vm,kh=new J,Ah=class extends Sp{constructor(e=new Em,t=new Th){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oh.copy(n.boundingSphere),Oh.applyMatrix4(r),Oh.radius+=i,e.ray.intersectsSphere(Oh)===!1)return;Eh.copy(r).invert(),Dh.copy(e.ray).applyMatrix4(Eh);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);kh.fromBufferAttribute(l,n),jh(kh,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)kh.fromBufferAttribute(l,a),jh(kh,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function jh(e,t,n,r,i,a,o){let s=Dh.distanceSqToPoint(e);if(s<n){let n=new J;Dh.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Mh=class extends Uf{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Nh=class extends Uf{constructor(e,t,n=Tu,r,i,a,o=mu,s=mu,c,l=Iu,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ph=class extends Nh{constructor(e,t=Tu,n=301,r,i,a=mu,o=mu,s,c=Iu){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fh=class extends Uf{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Z=class e extends Em{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new mm(c,3)),this.setAttribute(`normal`,new mm(l,3)),this.setAttribute(`uv`,new mm(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new J;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ih=class e extends Em{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new J,l=new q;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new mm(a,3)),this.setAttribute(`normal`,new mm(o,3)),this.setAttribute(`uv`,new mm(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Lh=class e extends Em{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new mm(u,3)),this.setAttribute(`normal`,new mm(d,3)),this.setAttribute(`uv`,new mm(f,2));function _(){let a=new J,_=new J,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new q,m=new J,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Rh=class e extends Lh{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},zh=class e extends Em{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new mm(i,3)),this.setAttribute(`normal`,new mm(i.slice(),3)),this.setAttribute(`uv`,new mm(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new J,r=new J,i=new J;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new J;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new J;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new J,t=new J,n=new J,r=new J,o=new q,s=new q,c=new q;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Bh=class e extends zh{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Vh=class e extends zh{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Hh=class e extends Em{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new mm(p,3)),this.setAttribute(`normal`,new mm(m,3)),this.setAttribute(`uv`,new mm(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Uh=class e extends Em{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new J,p=new q;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new mm(s,3)),this.setAttribute(`normal`,new mm(c,3)),this.setAttribute(`uv`,new mm(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Wh=class e extends Em{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new J,f=new J,p=new J;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new mm(c,3)),this.setAttribute(`normal`,new mm(l,3)),this.setAttribute(`uv`,new mm(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Gh(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(qh(i))i.isRenderTargetTexture?(G(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(qh(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Kh(e){let t={};for(let n=0;n<e.length;n++){let r=Gh(e[n]);for(let e in r)t[e]=r[e]}return t}function qh(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Jh(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Yh(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Nf.workingColorSpace}var Xh={clone:Gh,merge:Kh},Zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$h=class extends Mm{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zh,this.fragmentShader=Qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gh(e.uniforms),this.uniformsGroups=Jh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new X().setHex(r.value);break;case`v2`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new J().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Wf().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Y().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Yf().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},eg=class extends $h{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},tg=class extends Mm{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new X(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new X(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ap,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ng=class extends Mm{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rg=class extends Mm{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ig(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ag(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var og=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},sg=class extends og{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kd,endingEnd:kd}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ad:i=e,o=2*t-n;break;case jd:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ad:a=e,s=2*n-t;break;case jd:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},cg=class extends og{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},lg=class extends og{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ug=class extends og{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=pg(n,t,g,y,r);i[p]=dg(x,o,_,b,m)}return i}};function dg(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function fg(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function pg(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=dg(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=fg(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var mg=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ig(t,this.TimeBufferType),this.values=ig(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ig(e.times,Array),values:ig(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),ag(e.settings)&&(n.settings={inTangents:ig(e.settings.inTangents,Array),outTangents:ig(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ug(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Td:t=this.InterpolantFactoryMethodDiscrete;break;case Ed:t=this.InterpolantFactoryMethodLinear;break;case Dd:t=this.InterpolantFactoryMethodSmooth;break;case Od:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return G(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Td;case this.InterpolantFactoryMethodLinear:return Ed;case this.InterpolantFactoryMethodSmooth:return Dd;case this.InterpolantFactoryMethodBezier:return Od}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;ag(this.settings)&&(hg(this.settings.inTangents,e),hg(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;ag(this.settings)&&(gg(this.settings.inTangents,e),gg(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(K(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(K(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){K(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){K(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Vd(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){K(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Dd,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,ag(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function hg(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function gg(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}mg.prototype.ValueTypeName=``,mg.prototype.TimeBufferType=Float32Array,mg.prototype.ValueBufferType=Float32Array,mg.prototype.DefaultInterpolation=Ed;var _g=class extends mg{constructor(e,t,n){super(e,t,n)}};_g.prototype.ValueTypeName=`bool`,_g.prototype.ValueBufferType=Array,_g.prototype.DefaultInterpolation=Td,_g.prototype.InterpolantFactoryMethodLinear=void 0,_g.prototype.InterpolantFactoryMethodSmooth=void 0;var vg=class extends mg{constructor(e,t,n,r){super(e,t,n,r)}};vg.prototype.ValueTypeName=`color`;var yg=class extends mg{constructor(e,t,n,r){super(e,t,n,r)}};yg.prototype.ValueTypeName=`number`;var bg=class extends og{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ef.slerpFlat(i,0,a,c-o,a,c,s);return i}},xg=class extends mg{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new bg(this.times,this.values,this.getValueSize(),e)}};xg.prototype.ValueTypeName=`quaternion`,xg.prototype.InterpolantFactoryMethodSmooth=void 0;var Sg=class extends mg{constructor(e,t,n){super(e,t,n)}};Sg.prototype.ValueTypeName=`string`,Sg.prototype.ValueBufferType=Array,Sg.prototype.DefaultInterpolation=Td,Sg.prototype.InterpolantFactoryMethodLinear=void 0,Sg.prototype.InterpolantFactoryMethodSmooth=void 0;var Cg=class extends mg{constructor(e,t,n,r){super(e,t,n,r)}};Cg.prototype.ValueTypeName=`vector`;var wg=class extends Sp{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new X(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Tg=class extends wg{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Sp.DEFAULT_UP),this.updateMatrix(),this.groundColor=new X(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Eg=new Yf,Dg=new J,Og=new J,kg=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new q(512,512),this.mapType=bu,this.map=null,this.mapPass=null,this.matrix=new Yf,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fh,this._frameExtents=new q(1,1),this._viewportCount=1,this._viewports=[new Wf(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Dg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dg),Og.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Og),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Eg.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Eg,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Eg)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ag=new J,jg=new Ef,Mg=new J,Ng=class extends Sp{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Yf,this.projectionMatrix=new Yf,this.projectionMatrixInverse=new Yf,this.coordinateSystem=zd,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ag,jg,Mg),Mg.x===1&&Mg.y===1&&Mg.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ag,jg,Mg.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ag,jg,Mg),Mg.x===1&&Mg.y===1&&Mg.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ag,jg,Mg.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Pg=new J,Fg=new q,Ig=new q,Lg=class extends Ng{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ef*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($d*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ef*2*Math.atan(Math.tan($d*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pg.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pg.x,Pg.y).multiplyScalar(-e/Pg.z),Pg.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pg.x,Pg.y).multiplyScalar(-e/Pg.z)}getViewSize(e,t){return this.getViewBounds(e,Fg,Ig),t.subVectors(Ig,Fg)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($d*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Rg=class extends Ng{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zg=class extends kg{constructor(){super(new Rg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bg=class extends wg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Sp.DEFAULT_UP),this.updateMatrix(),this.target=new Sp,this.shadow=new zg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Vg=class extends wg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},Hg=-90,Ug=1,Wg=class extends Sp{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Lg(Hg,Ug,e,t);r.layers=this.layers,this.add(r);let i=new Lg(Hg,Ug,e,t);i.layers=this.layers,this.add(i);let a=new Lg(Hg,Ug,e,t);a.layers=this.layers,this.add(a);let o=new Lg(Hg,Ug,e,t);o.layers=this.layers,this.add(o);let s=new Lg(Hg,Ug,e,t);s.layers=this.layers,this.add(s);let c=new Lg(Hg,Ug,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Gg=class extends Lg{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Kg=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=qg.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function qg(){this._document.hidden===!1&&this.reset()}var Jg=`\\[\\]\\.:\\/`,Yg=RegExp(`[\\[\\]\\.:\\/]`,`g`),Xg=`[^\\[\\]\\.:\\/]`,Zg=`[^`+Jg.replace(`\\.`,``)+`]`,Qg=`((?:WC+[\\/:])*)`.replace(`WC`,Xg),$g=`(WCOD+)?`.replace(`WCOD`,Zg),e_=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Xg),t_=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Xg),n_=RegExp(`^`+Qg+$g+e_+t_+`$`),r_=[`material`,`materials`,`bones`,`map`],i_=class{constructor(e,t,n){let r=n||a_.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},a_=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Yg,``)}static parseTrackName(e){let t=n_.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);r_.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){G(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){K(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){K(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){K(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){K(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){K(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){K(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){K(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;K(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){K(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){K(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};a_.Composite=i_,a_.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},a_.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},a_.prototype.GetterByBindingType=[a_.prototype._getValue_direct,a_.prototype._getValue_array,a_.prototype._getValue_arrayElement,a_.prototype._getValue_toArray],a_.prototype.SetterByBindingTypeAndVersioning=[[a_.prototype._setValue_direct,a_.prototype._setValue_direct_setNeedsUpdate,a_.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[a_.prototype._setValue_array,a_.prototype._setValue_array_setNeedsUpdate,a_.prototype._setValue_array_setMatrixWorldNeedsUpdate],[a_.prototype._setValue_arrayElement,a_.prototype._setValue_arrayElement_setNeedsUpdate,a_.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[a_.prototype._setValue_fromArray,a_.prototype._setValue_fromArray_setNeedsUpdate,a_.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var o_=new Yf,s_=class{constructor(e,t,n=0,r=1/0){this.ray=new Lm(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new op,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):K(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return o_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(o_),this}intersectObject(e,t=!0,n=[]){return l_(e,this,n,t),n.sort(c_),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)l_(e[r],this,n,t);return n.sort(c_),n}};function c_(e,t){return e.distance-t.distance}function l_(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)l_(r[e],t,n,!0)}}var u_=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=nf(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nf(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};au=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},au.prototype.isMatrix2=!0;var d_=class extends Xd{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function f_(e,t,n,r){let i=p_(r);switch(n){case Nu:return e*t;case Ru:return e*t/i.components*i.byteLength;case zu:return e*t/i.components*i.byteLength;case Bu:return e*t*2/i.components*i.byteLength;case Vu:return e*t*2/i.components*i.byteLength;case Pu:return e*t*3/i.components*i.byteLength;case Fu:return e*t*4/i.components*i.byteLength;case Hu:return e*t*4/i.components*i.byteLength;case Uu:case Wu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Gu:case Ku:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ju:case Xu:return Math.max(e,16)*Math.max(t,8)/4;case qu:case Yu:return Math.max(e,8)*Math.max(t,8)/2;case Zu:case Qu:case ed:case td:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case $u:case nd:case rd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case id:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ad:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case od:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case sd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case cd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ld:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ud:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case dd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case fd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case pd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case md:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case hd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case gd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case _d:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case vd:case yd:case bd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case xd:case Sd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Cd:case wd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function p_(e){switch(e){case bu:case xu:return{byteLength:1,components:1};case Cu:case Su:case Du:return{byteLength:2,components:1};case Ou:case ku:return{byteLength:2,components:4};case Tu:case wu:case Eu:return{byteLength:4,components:1};case ju:case Mu:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?G(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function m_(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function h_(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var g_={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new X(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Y},alphaMap:{value:null},alphaMapTransform:{value:new Y},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Y}},envmap:{envMap:{value:null},envMapRotation:{value:new Y},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Y}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Y}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Y},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Y},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Y},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Y}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Y}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Y}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new X(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new X(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Y},alphaTest:{value:0},uvTransform:{value:new Y}},sprite:{diffuse:{value:new X(16777215)},opacity:{value:1},center:{value:new q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Y},alphaMap:{value:null},alphaMapTransform:{value:new Y},alphaTest:{value:0}}},__={basic:{uniforms:Kh([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:g_.meshbasic_vert,fragmentShader:g_.meshbasic_frag},lambert:{uniforms:Kh([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new X(0)},envMapIntensity:{value:1}}]),vertexShader:g_.meshlambert_vert,fragmentShader:g_.meshlambert_frag},phong:{uniforms:Kh([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new X(0)},specular:{value:new X(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:g_.meshphong_vert,fragmentShader:g_.meshphong_frag},standard:{uniforms:Kh([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new X(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:g_.meshphysical_vert,fragmentShader:g_.meshphysical_frag},toon:{uniforms:Kh([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new X(0)}}]),vertexShader:g_.meshtoon_vert,fragmentShader:g_.meshtoon_frag},matcap:{uniforms:Kh([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:g_.meshmatcap_vert,fragmentShader:g_.meshmatcap_frag},points:{uniforms:Kh([Q.points,Q.fog]),vertexShader:g_.points_vert,fragmentShader:g_.points_frag},dashed:{uniforms:Kh([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:g_.linedashed_vert,fragmentShader:g_.linedashed_frag},depth:{uniforms:Kh([Q.common,Q.displacementmap]),vertexShader:g_.depth_vert,fragmentShader:g_.depth_frag},normal:{uniforms:Kh([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:g_.meshnormal_vert,fragmentShader:g_.meshnormal_frag},sprite:{uniforms:Kh([Q.sprite,Q.fog]),vertexShader:g_.sprite_vert,fragmentShader:g_.sprite_frag},background:{uniforms:{uvTransform:{value:new Y},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:g_.background_vert,fragmentShader:g_.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Y}},vertexShader:g_.backgroundCube_vert,fragmentShader:g_.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:g_.cube_vert,fragmentShader:g_.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:g_.equirect_vert,fragmentShader:g_.equirect_frag},distance:{uniforms:Kh([Q.common,Q.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:g_.distance_vert,fragmentShader:g_.distance_frag},shadow:{uniforms:Kh([Q.lights,Q.fog,{color:{value:new X(0)},opacity:{value:1}}]),vertexShader:g_.shadow_vert,fragmentShader:g_.shadow_frag}};__.physical={uniforms:Kh([__.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Y},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Y},clearcoatNormalScale:{value:new q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Y},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Y},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Y},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Y},sheen:{value:0},sheenColor:{value:new X(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Y},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Y},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Y},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Y},attenuationDistance:{value:0},attenuationColor:{value:new X(0)},specularColor:{value:new X(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Y},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Y},anisotropyVector:{value:new q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Y}}]),vertexShader:g_.meshphysical_vert,fragmentShader:g_.meshphysical_frag};var v_={r:0,b:0,g:0},y_=new Yf,b_=new Y;b_.set(-1,0,0,0,1,0,0,0,1);function x_(e,t,n,r,i,a){let o=new X(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Xm(new Z(1,1,1),new $h({name:`BackgroundCubeMaterial`,uniforms:Gh(__.backgroundCube.uniforms),vertexShader:__.backgroundCube.vertexShader,fragmentShader:__.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(y_.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(b_),l.material.toneMapped=Nf.getTransfer(i.colorSpace)!==Id,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Xm(new Hh(2,2),new $h({name:`BackgroundMaterial`,uniforms:Gh(__.background.uniforms),vertexShader:__.background.vertexShader,fragmentShader:__.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Nf.getTransfer(i.colorSpace)!==Id,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(v_,Yh(e)),n.buffers.color.setClear(v_.r,v_.g,v_.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function S_(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function C_(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function w_(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(G(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&G(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&G(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function T_(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Am,s=new Y,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var E_=class extends Kf{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Mh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Z(5,5,5),i=new $h({name:`CubemapFromEquirect`,uniforms:Gh(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Xm(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=_u),new Wg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},D_=256,O_=3,k_=20,A_=256,j_=16,M_=3,N_=new J,P_=new X,F_=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Wg(1,10,null),this._boxMesh=new Xm(new Z(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=N_}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(P_));let h=new Wg(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=H_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=V_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(D_,bf(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?D_:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=I_(e,!1,!1),n=Math.log2(e)-O_;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=I_(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=H_()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=V_()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=R_(),this._integrationMaterial=z_());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/j_);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-M_)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(A_*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=B_());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function I_(e,t,n){return new E_(e,{minFilter:yu,generateMipmaps:t,type:Du,colorSpace:Pd,depthBuffer:n})}function L_(e,t,n){return new $h({name:e,uniforms:t,vertexShader:g_.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function R_(){return L_(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${A_}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function z_(){return L_(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:j_}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function B_(){return L_(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${k_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function V_(){return L_(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function H_(){return L_(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function U_(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new E_(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new F_(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new F_(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function W_(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&qd(`WebGLRenderer: `+e+` extension not supported.`),t}}}function G_(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?pm:fm)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function K_(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function q_(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:K(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function J_(e,t,n){let r=new WeakMap,i=new Wf;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new qf(h,p,m,u);g.type=Eu,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new q(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Y_(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var X_={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Z_(e,t,n,r,i,a){let o=new Kf(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Em;u.setAttribute(`position`,new mm([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new mm([0,2,0,0,2,0],2));let d=new eg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Xm(u,d),p=new Rg(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Kf(t,n,{type:Du,depthBuffer:!1,stencilBuffer:!1}),c=new Kf(t,n,{type:Du,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Nh(t,n),a===!0&&(l.format=Lu,l.type=Au)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Nf.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=X_[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Q_=new Uf,$_=new Nh(1,1),ev=new Ph(1),tv=new qf,nv=new Jf,rv=new Mh,iv=[],av=[],ov=new Float32Array(16),sv=new Float32Array(9),cv=new Float32Array(4);function lv(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=iv[i];if(a===void 0&&(a=new Float32Array(i),iv[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function uv(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function dv(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function fv(e,t){let n=av[t];n===void 0&&(n=new Int32Array(t),av[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function pv(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function mv(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(uv(n,t))return;e.uniform2fv(this.addr,t),dv(n,t)}}function hv(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(uv(n,t))return;e.uniform3fv(this.addr,t),dv(n,t)}}function gv(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(uv(n,t))return;e.uniform4fv(this.addr,t),dv(n,t)}}function _v(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(uv(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),dv(n,t)}else{if(uv(n,r))return;cv.set(r),e.uniformMatrix2fv(this.addr,!1,cv),dv(n,r)}}function vv(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(uv(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),dv(n,t)}else{if(uv(n,r))return;sv.set(r),e.uniformMatrix3fv(this.addr,!1,sv),dv(n,r)}}function yv(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(uv(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),dv(n,t)}else{if(uv(n,r))return;ov.set(r),e.uniformMatrix4fv(this.addr,!1,ov),dv(n,r)}}function bv(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function xv(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(uv(n,t))return;e.uniform2iv(this.addr,t),dv(n,t)}}function Sv(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(uv(n,t))return;e.uniform3iv(this.addr,t),dv(n,t)}}function Cv(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(uv(n,t))return;e.uniform4iv(this.addr,t),dv(n,t)}}function wv(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Tv(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(uv(n,t))return;e.uniform2uiv(this.addr,t),dv(n,t)}}function Ev(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(uv(n,t))return;e.uniform3uiv(this.addr,t),dv(n,t)}}function Dv(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(uv(n,t))return;e.uniform4uiv(this.addr,t),dv(n,t)}}function Ov(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function kv(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Ov($_):Q_,n.setTexture2D(t||a,i)}function Av(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||nv,i)}function jv(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Ov(ev):rv,n.setTextureCube(t||a,i)}function Mv(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||tv,i)}function Nv(e){switch(e){case 5126:return pv;case 35664:return mv;case 35665:return hv;case 35666:return gv;case 35674:return _v;case 35675:return vv;case 35676:return yv;case 5124:case 35670:return bv;case 35667:case 35671:return xv;case 35668:case 35672:return Sv;case 35669:case 35673:return Cv;case 5125:return wv;case 36294:return Tv;case 36295:return Ev;case 36296:return Dv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return jv;case 36289:case 36303:case 36311:case 36292:return Mv}}function Pv(e,t){e.uniform1fv(this.addr,t)}function Fv(e,t){let n=lv(t,this.size,2);e.uniform2fv(this.addr,n)}function Iv(e,t){let n=lv(t,this.size,3);e.uniform3fv(this.addr,n)}function Lv(e,t){let n=lv(t,this.size,4);e.uniform4fv(this.addr,n)}function Rv(e,t){let n=lv(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function zv(e,t){let n=lv(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Bv(e,t){let n=lv(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Vv(e,t){e.uniform1iv(this.addr,t)}function Hv(e,t){e.uniform2iv(this.addr,t)}function Uv(e,t){e.uniform3iv(this.addr,t)}function Wv(e,t){e.uniform4iv(this.addr,t)}function Gv(e,t){e.uniform1uiv(this.addr,t)}function Kv(e,t){e.uniform2uiv(this.addr,t)}function qv(e,t){e.uniform3uiv(this.addr,t)}function Jv(e,t){e.uniform4uiv(this.addr,t)}function Yv(e,t,n){let r=this.cache,i=t.length,a=fv(n,i);uv(r,a)||(e.uniform1iv(this.addr,a),dv(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ov($_):Q_;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Xv(e,t,n){let r=this.cache,i=t.length,a=fv(n,i);uv(r,a)||(e.uniform1iv(this.addr,a),dv(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||nv,a[e])}function Zv(e,t,n){let r=this.cache,i=t.length,a=fv(n,i);uv(r,a)||(e.uniform1iv(this.addr,a),dv(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Ov(ev):rv;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Qv(e,t,n){let r=this.cache,i=t.length,a=fv(n,i);uv(r,a)||(e.uniform1iv(this.addr,a),dv(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||tv,a[e])}function $v(e){switch(e){case 5126:return Pv;case 35664:return Fv;case 35665:return Iv;case 35666:return Lv;case 35674:return Rv;case 35675:return zv;case 35676:return Bv;case 5124:case 35670:return Vv;case 35667:case 35671:return Hv;case 35668:case 35672:return Uv;case 35669:case 35673:return Wv;case 5125:return Gv;case 36294:return Kv;case 36295:return qv;case 36296:return Jv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return Xv;case 35680:case 36300:case 36308:case 36293:return Zv;case 36289:case 36303:case 36311:case 36292:return Qv}}var ey=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Nv(t.type)}},ty=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$v(t.type)}},ny=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},ry=/(\w+)(\])?(\[|\.)?/g;function iy(e,t){e.seq.push(t),e.map[t.id]=t}function ay(e,t,n){let r=e.name,i=r.length;for(ry.lastIndex=0;;){let a=ry.exec(r),o=ry.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){iy(n,l===void 0?new ey(s,e,t):new ty(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ny(s),iy(n,e)),n=e}}}var oy=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ay(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function sy(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var cy=37297,ly=0;function uy(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var dy=new Y;function fy(e){Nf._getMatrix(dy,Nf.workingColorSpace,e);let t=`mat3( ${dy.elements.map(e=>e.toFixed(4))} )`;switch(Nf.getTransfer(e)){case Fd:return[t,`LinearTransferOETF`];case Id:return[t,`sRGBTransferOETF`];default:return G(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function py(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+uy(e.getShaderSource(t),r)}return i}function my(e,t){let n=fy(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var hy={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function gy(e,t){let n=hy[t];return n===void 0?(G(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var _y=new J;function vy(){return Nf.getLuminanceCoefficients(_y),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${_y.x.toFixed(4)}, ${_y.y.toFixed(4)}, ${_y.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function yy(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Sy).join(`
`)}function by(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function xy(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Sy(e){return e!==``}function Cy(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function wy(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ty=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ey(e){return e.replace(Ty,Dy)}function Dy(e,t){let n=g_[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Ey(n)}var Oy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ky(e){return e.replace(Oy,Ay)}function Ay(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function jy(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var My={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Ny(e){return My[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Py={302:`ENVMAP_MODE_REFRACTION`};function Fy(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Py[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Iy={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Ly(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Iy[e.combine]||`ENVMAP_BLENDING_NONE`}function Ry(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Ny(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Fy(n),d=Ly(n),f=yy(n),p=by(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Sy).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Sy).join(`
`),g.length>0&&(g+=`
`)):(h=[jy(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Sy).join(`
`),g=[jy(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:g_.tonemapping_pars_fragment,n.toneMapping===0?``:gy(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,g_.colorspace_pars_fragment,my(`linearToOutputTexel`,n.outputColorSpace),vy(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Sy).join(`
`)),o=Ey(o),o=Cy(o,n),o=wy(o,n),s=Ey(s),s=Cy(s,n),s=wy(s,n),o=ky(o),s=ky(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=sy(i,i.VERTEX_SHADER,v),x=sy(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=py(i,b,`vertex`),n=py(i,x,`fragment`);K(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):G(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new oy(i,m),w=xy(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,cy)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ly++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var zy=0,By=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Vy(e),t.set(e,n)),n}},Vy=class{constructor(e){this.id=zy++,this.code=e,this.usedTimes=0}};function Hy(e){return e===1030||e===37490||e===36285}function Uy(e,t,n,r,i,a){let o=new op,s=new By,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&G(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=__[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,ee=!!i.map,P=!!i.matcap,te=!!b,ne=te&&b.isPMREMTexture===!0,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,le=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.diffuseRoughness>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,F=de&&!!i.anisotropyMap,ye=fe&&!!i.clearcoatMap,be=fe&&!!i.clearcoatNormalMap,xe=fe&&!!i.clearcoatRoughnessMap,Se=pe&&!!i.diffuseRoughnessMap,I=ge&&!!i.iridescenceMap,Ce=ge&&!!i.iridescenceThicknessMap,we=_e&&!!i.sheenColorMap,Te=_e&&!!i.sheenRoughnessMap,L=!!i.specularMap,Ee=!!i.specularColorMap,R=!!i.specularIntensityMap,z=ve&&!!i.transmissionMap,De=ve&&!!i.thicknessMap,Oe=!!i.gradientMap,ke=!!i.alphaMap,Ae=i.alphaTest>0,je=!!i.alphaHash,Me=!!i.extensions,Ne=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let Pe=ne?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Fe={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Nf.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ee,matcap:P,envMap:te,envMapMode:te&&b.mapping,envMapPMREM:ne,envMapMaxLod:ne?Pe.length-1:null,envMapSize:ne?Pe[0].width:null,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&Hy(i.normalMap.format),metalnessMap:le,roughnessMap:ue,anisotropy:de,anisotropyMap:F,clearcoat:fe,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,diffuseRoughness:pe,diffuseRoughnessMap:Se,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:I,iridescenceThicknessMap:Ce,sheen:_e,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:L,specularColorMap:Ee,specularIntensityMap:R,transmission:ve,transmissionMap:z,thicknessMap:De,gradientMap:Oe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:ke,alphaTest:Ae,alphaHash:je,combine:i.combine,mapUv:ee&&p(i.map.channel),aoMapUv:re&&p(i.aoMap.channel),lightMapUv:ie&&p(i.lightMap.channel),bumpMapUv:ae&&p(i.bumpMap.channel),normalMapUv:oe&&p(i.normalMap.channel),displacementMapUv:se&&p(i.displacementMap.channel),emissiveMapUv:ce&&p(i.emissiveMap.channel),metalnessMapUv:le&&p(i.metalnessMap.channel),roughnessMapUv:ue&&p(i.roughnessMap.channel),anisotropyMapUv:F&&p(i.anisotropyMap.channel),clearcoatMapUv:ye&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Se&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:I&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&p(i.sheenRoughnessMap.channel),specularMapUv:L&&p(i.specularMap.channel),specularColorMapUv:Ee&&p(i.specularColorMap.channel),specularIntensityMapUv:R&&p(i.specularIntensityMap.channel),transmissionMapUv:z&&p(i.transmissionMap.channel),thicknessMapUv:De&&p(i.thicknessMap.channel),alphaMapUv:ke&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(oe||de),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(ee||ke),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:ee&&i.map.isVideoTexture===!0&&Nf.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&Nf.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Me&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=__[t];n=Xh.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Ry(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Wy(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Gy(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ky(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function qy(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Gy),r.length>1&&r.sort(t||Ky),i.length>1&&i.sort(t||Ky)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Jy(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new qy,e.set(t,[i])):n>=r.length?(i=new qy,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Yy(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new J,color:new X};break;case`SpotLight`:n={position:new J,direction:new J,color:new X,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new J,color:new X,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new J,skyColor:new X,groundColor:new X};break;case`RectAreaLight`:n={color:new X,position:new J,halfWidth:new J,halfHeight:new J}}return e[t.id]=n,n}}}function Xy(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Zy=0;function Qy(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function $y(e){let t=new Yy,n=Xy(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new J);let i=new J,a=new Yf,o=new Yf;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Qy);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Zy++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function eb(e){let t=new $y(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function tb(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new eb(e),t.set(n,[a])):r>=i.length?(a=new eb(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var nb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ib=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],ab=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],ob=new Yf,sb=new J,cb=new J;function lb(e,t,n){let r=new fh,i=new q,a=new q,o=new Wf,s=new ng,c=new rg,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new $h({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:nb,fragmentShader:rb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Em;m.setAttribute(`position`,new dm(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Xm(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(G(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){G(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){G(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Kf(i.x,i.y,{format:Bu,type:Du,minFilter:_u,magFilter:_u,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Nh(i.x,i.y,Eu),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Iu,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=mu,d.map.depthTexture.magFilter=mu}else l.isPointLight?(d.map=new E_(i.x),d.map.depthTexture=new Ph(i.x,Tu)):(d.map=new Kf(i.x,i.y),d.map.depthTexture=new Nh(i.x,i.y,Tu)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Iu,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=_u,d.map.depthTexture.magFilter=_u):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=mu,d.map.depthTexture.magFilter=mu);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),sb.setFromMatrixPosition(l.matrixWorld),e.position.copy(sb),cb.copy(e.position),cb.add(ib[t]),e.up.copy(ab[t]),e.lookAt(cb),e.updateMatrixWorld(),n.makeTranslation(-sb.x,-sb.y,-sb.z),ob.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(ob,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Kf(i.x,i.y,{format:Bu,type:Du}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function ub(e,t){function n(){let t=!1,n=new Wf,r=null,i=new Wf(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?le(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Yd[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?le(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new X(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),N=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(P)[1]),N=ee>=1);let te=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Wf().fromArray(re),oe=new Wf().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),le(e.DEPTH_TEST),o.setFunc(3),ve(!1),F(1),le(e.CULL_FACE),ge(0);function le(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ue(e.BLEND),g=!1);else if(g===!1&&(le(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:K(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:K(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:K(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:K(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):le(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),be(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function F(t){t===0?ue(e.CULL_FACE):(le(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ye(t){t!==k&&(N&&e.lineWidth(t),k=t)}function be(t,n,r){t?(le(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function xe(t){t?le(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Se(t){t===void 0&&(t=e.TEXTURE0+M-1),te!==t&&(e.activeTexture(t),te=t)}function I(t,n,r){r===void 0&&(r=te===null?e.TEXTURE0+M-1:te);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(te!==r&&(e.activeTexture(r),te=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function Ce(){let t=ne[te];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function we(){try{e.compressedTexImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Te(){try{e.compressedTexImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function L(){try{e.texSubImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Ee(){try{e.texSubImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function R(){try{e.compressedTexSubImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function z(){try{e.compressedTexSubImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function De(){try{e.texStorage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Oe(){try{e.texStorage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function ke(){try{e.texImage2D(...arguments)}catch(e){K(`WebGLState:`,e)}}function Ae(){try{e.texImage3D(...arguments)}catch(e){K(`WebGLState:`,e)}}function je(t){return d[t]===void 0?e.getParameter(t):d[t]}function Me(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ne(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Pe(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function Fe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Ie(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},te=null,ne={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new X(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:le,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:F,setLineWidth:ye,setPolygonOffset:be,setScissorTest:xe,activeTexture:Se,bindTexture:I,unbindTexture:Ce,compressedTexImage2D:we,compressedTexImage3D:Te,texImage2D:ke,texImage3D:Ae,pixelStorei:Me,getParameter:je,updateUBOMapping:Fe,uniformBlockBinding:Ie,texStorage2D:De,texStorage3D:Oe,texSubImage2D:L,texSubImage3D:Ee,compressedTexSubImage2D:R,compressedTexSubImage3D:z,scissor:Ne,viewport:Pe,reset:Le}}function db(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new q,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):Hd(`canvas`)}function v(e,t,n){let r=1,i=De(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),G(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&G(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];G(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||G(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Fd:Nf.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,G(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function E(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function D(e){k(e.target)}function O(e){A(e.target)}function k(e){e.removeEventListener(`dispose`,D),E(e),M(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function A(e){e.removeEventListener(`dispose`,O),E(e),ee(e)}function j(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?A(t):k(t))}m.clear(),d.clear()}function M(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&N(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function N(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function ee(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&k(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let P=0;function te(){P=0}function ne(){return P}function re(e){P=e}function ie(){let e=P;return e>=i.maxTextures&&G(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),P+=1,e}function ae(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function oe(t,i){let a=r.get(t);if(t.isVideoTexture&&R(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)G(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)G(`WebGLRenderer: Texture marked for update but image is incomplete`);else{_e(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function se(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?_e(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ce(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?_e(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?ve(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ue={[du]:e.REPEAT,[fu]:e.CLAMP_TO_EDGE,[pu]:e.MIRRORED_REPEAT},de={[mu]:e.NEAREST,[hu]:e.NEAREST_MIPMAP_NEAREST,[gu]:e.NEAREST_MIPMAP_LINEAR,[_u]:e.LINEAR,[vu]:e.LINEAR_MIPMAP_NEAREST,[yu]:e.LINEAR_MIPMAP_LINEAR},fe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function pe(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&G(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ue[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ue[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ue[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,de[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,de[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,fe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function me(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D),T(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=ae(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&N(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function he(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ge(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=he(n.start,r.width,4),c=he(t.start,r.width,4);n.start<=i+1&&a===c&&he(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function _e(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=me(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Nf.getPrimaries(Nf.workingColorSpace),r=o.colorSpace===``?null:Nf.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=z(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);pe(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,T=u.dataReady,E=w(o,t);if(o.isDepthTexture)m=C(o.format===Lu,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&ge(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(T){if(o.layerUpdates.size>0){let t=f_(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else G(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?G(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=f_(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=De(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=De(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&o.mipmapsAutoUpdate===!0&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ve(t,o,s){if(o.image.length!==6)return;let c=me(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Nf.getPrimaries(Nf.workingColorSpace),r=o.colorSpace===``?null:Nf.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=z(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),T=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=w(o,h);pe(e.TEXTURE_CUBE_MAP,o);let k;if(o.isDepthTexture){if(x=C(o.format===Lu,o.type),E){if(T)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,x,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,h.width,h.height,0,g,_,null)}}else if(f){T&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,h.width,h.height);for(let t=0;t<6;t++){k=m[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?G(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,T&&E){k.length>0&&O++;let t=De(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<k.length;r++){let i=k[r];T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&o.mipmapsAutoUpdate===!0&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function F(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ee(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,L(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ee(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,L(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,L(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);Ee(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,L(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,L(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function be(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?le(i.depthTexture,0):oe(i.depthTexture,0);let u=c.__webglTexture,d=L(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ee(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Ee(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function xe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)be(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?be(i.__webglFramebuffer[0],t,0):be(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ye(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ye(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Se(t,n,i){let a=r.get(t);n!==void 0&&F(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&xe(t)}function I(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,O),T(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Ee(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=L(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ye(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),pe(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)F(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else F(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)?b(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),pe(c,a),F(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),pe(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)F(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else F(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)?b(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&xe(t)}function Ce(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)&&a.mipmapsAutoUpdate===!0){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let we=[];function Te(t){if(t.samples>0){if(Ee(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(we.length=0,we.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&we.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,we))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function L(e){return Math.min(i.maxSamples,e.samples)}function Ee(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function R(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function z(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Nf.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&G(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):K(`WebGLTextures: Unsupported texture color space:`,n)),t}function De(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ie,this.resetTextureUnits=te,this.getTextureUnits=ne,this.setTextureUnits=re,this.setTexture2D=oe,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=le,this.rebindTextures=Se,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=F,this.useMultisampledRTT=Ee,this.dispose=j}function fb(e,t){function n(n,r=``){let i,a=Nf.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,hb=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Fh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new $h({vertexShader:pb,fragmentShader:mb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xm(new Hh(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gb=class extends Xd{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new hb,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new q,C=null,w=null,T=new Lg;T.viewport=new Wf;let E=new Lg;E.viewport=new Wf;let D=[T,E],O=new Gg,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Tp,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Tp,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Tp,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&G(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&G(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Lu:Iu,a=_.stencil?Au:Tu);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Kf(d.textureWidth,d.textureHeight,{format:Fu,type:bu,depthTexture:new Nh(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Kf(f.framebufferWidth,f.framebufferHeight,{format:Fu,type:bu,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),re.setContext(r),re.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function ee(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ee(O,i);for(let e=0;e<a.length;e++)ee(a[e],i);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),P(e,O,i)};function P(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ef*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let te=null;function ne(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Lg,o.layers.enable(n),o.viewport=new Wf,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Fh,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}te&&te(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let re=new m_;re.setAnimationLoop(ne),this.setAnimationLoop=function(e){te=e},this.dispose=function(){}}},_b=new Yf,vb=new Y;vb.set(-1,0,0,0,1,0,0,0,1);function yb(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Yh(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(_b.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(vb),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function bb(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?G(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):G(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var xb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Sb=null;function Cb(){return Sb===null&&(Sb=new $m(xb,16,16,Bu,Du),Sb.name=`DFG_LUT`,Sb.minFilter=_u,Sb.magFilter=_u,Sb.wrapS=fu,Sb.wrapT=fu,Sb.generateMipmaps=!1,Sb.needsUpdate=!0),Sb}var wb=class{constructor(e={}){let{canvas:t=Ud(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=bu}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Hu,Vu,zu]),g=new Set([bu,Tu,Cu,Au,Ou,ku]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=Nd;let j=0,M=0,N=null,ee=-1,P=null,te=new Wf,ne=new Wf,re=null,ie=new X(0),ae=0,oe=t.width,se=t.height,ce=1,le=null,ue=null,de=new Wf(0,0,oe,se),fe=new Wf(0,0,oe,se),pe=!1,me=new fh,he=new mh,ge=!1,_e=!1,ve=new Yf,F=new J,ye=new Wf,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function Se(){return N===null?ce:1}let I=n;function Ce(e,n){return t.getContext(e,n)}let we,Te,L,Ee,R,z,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,Ke,!1),t.addEventListener(`webglcontextrestored`,qe,!1),t.addEventListener(`webglcontextcreationerror`,Je,!1),I===null){let t=`webgl2`;if(I=Ce(t,e),I===null)throw Ce(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}We()}catch(e){throw t.removeEventListener(`webglcontextlost`,Ke,!1),t.removeEventListener(`webglcontextrestored`,qe,!1),t.removeEventListener(`webglcontextcreationerror`,Je,!1),K(`WebGLRenderer: `+e.message),e}function We(){we=new W_(I),we.init(),Ve=new fb(I,we),Te=new w_(I,we,e,Ve),L=new ub(I,we),Te.reversedDepthBuffer&&d&&L.buffers.depth.setReversed(!0),O=I.createFramebuffer(),k=I.createFramebuffer(),A=I.createFramebuffer(),Ee=new q_(I),R=new Wy,z=new db(I,we,L,R,Te,Ve,Ee),De=new U_(T),Oe=new h_(I),He=new S_(I,Oe),ke=new G_(I,Oe,Ee,He),Ae=new Y_(I,ke,Oe,He,Ee),Re=new J_(I,Te,z),Fe=new T_(R),je=new Uy(T,De,we,Te,He,Fe),Me=new yb(T,R),Ne=new Jy,Pe=new tb(we),Le=new x_(T,De,L,Ae,p,s),Ie=new lb(T,Ae,Te),Ue=new bb(I,Ee,Te,L),ze=new C_(I,we,Ee),Be=new K_(I,we,Ee),Ee.programs=je.programs,T.capabilities=Te,T.extensions=we,T.properties=R,T.renderLists=Ne,T.shadowMap=Ie,T.state=L,T.info=Ee}m!==1009&&(w=new Z_(m,t.width,t.height,o,r,i));let Ge=new gb(T,I);this.xr=Ge,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=we.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=we.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(e){e!==void 0&&(ce=e,this.setSize(oe,se,!1))},this.getSize=function(e){return e.set(oe,se)},this.setSize=function(e,n,r=!0){Ge.isPresenting?G(`WebGLRenderer: Can't change size while VR device is presenting.`):(oe=e,se=n,t.width=Math.floor(e*ce),t.height=Math.floor(n*ce),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(oe*ce,se*ce).floor()},this.setDrawingBufferSize=function(e,n,r){oe=e,se=n,ce=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)K(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){G(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(te)},this.getViewport=function(e){return e.copy(de)},this.setViewport=function(e,t,n,r){e.isVector4?de.set(e.x,e.y,e.z,e.w):de.set(e,t,n,r),L.viewport(te.copy(de).multiplyScalar(Se()).round())},this.getScissor=function(e){return e.copy(fe)},this.setScissor=function(e,t,n,r){e.isVector4?fe.set(e.x,e.y,e.z,e.w):fe.set(e,t,n,r),L.scissor(ne.copy(fe).multiplyScalar(Se()).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(e){L.setScissorTest(pe=e)},this.setOpaqueSort=function(e){le=e},this.setTransparentSort=function(e){ue=e},this.getClearColor=function(e){return e.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Le.getClearColor(),r=Le.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,I.clearBufferuiv(I.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,I.clearBufferiv(I.COLOR,0,v))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ke,!1),t.removeEventListener(`webglcontextrestored`,qe,!1),t.removeEventListener(`webglcontextcreationerror`,Je,!1),Le.dispose(),Ne.dispose(),Pe.dispose(),z.dispose(),R.dispose(),De.dispose(),Ae.dispose(),ke.dispose(),He.dispose(),Ue.dispose(),je.dispose(),Ge.dispose(),Ge.removeEventListener(`sessionstart`,tt),Ge.removeEventListener(`sessionend`,nt),rt.stop()};function Ke(e){e.preventDefault(),Gd(`WebGLRenderer: Context Lost.`),E=!0}function qe(){Gd(`WebGLRenderer: Context Restored.`),E=!1;let e=Ee.autoReset,t=Ie.enabled,n=Ie.autoUpdate,r=Ie.needsUpdate,i=Ie.type;We(),Ee.autoReset=e,Ie.enabled=t,Ie.autoUpdate=n,Ie.needsUpdate=r,Ie.type=i}function Je(e){K(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ye(e){let t=e.target;t.removeEventListener(`dispose`,Ye),Xe(t)}function Xe(e){Ze(e),R.remove(e)}function Ze(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){je.releaseProgram(e)}),e.isShaderMaterial&&je.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=be);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=mt(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ke.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;He.setup(i,r,s,n,c);let h,g=ze;if(c!==null&&(h=Oe.get(c),g=Be,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*Se()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*Se()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(we.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Oe.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Qe(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),ge===!0&&Fe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ut(e,t,r),e.side=0,e.needsUpdate=!0,ut(e,t,r),e.side=2):ut(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Pe.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),_e=this.localClippingEnabled,ge=Fe.init(this.clippingPlanes,_e),ge===!0&&Fe.setGlobalState(this.clippingPlanes,t),D!==null&&Ie.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Qe(o,n,t,e),r.add(o)}else Qe(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=R.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}we.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let $e=null;function et(e){$e&&$e(e)}function tt(){rt.stop()}function nt(){rt.start()}let rt=new m_;rt.setAnimationLoop(et),typeof self<`u`&&rt.setContext(self),this.setAnimationLoop=function(e){$e=e,Ge.setAnimationLoop(e),e===null?rt.stop():rt.start()},Ge.addEventListener(`sessionstart`,tt),Ge.addEventListener(`sessionend`,nt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){K(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ge.enabled===!0&&Ge.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(t),t=Ge.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=Pe.get(e,C.length),x.init(t),x.state.textureUnits=z.getTextureUnits(),C.push(x),ve.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?he.setFromArrayCamera(t):me.setFromProjectionMatrix(ve,zd,t.reversedDepth),_e=this.localClippingEnabled,ge=Fe.init(this.clippingPlanes,_e),b=Ne.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,Ge.enabled===!0&&Ge.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&it(e,t,-1/0,T.sortObjects)}it(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(le,ue),xe=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,xe&&Le.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),ge===!0&&Fe.beginShadows();let i=x.state.shadowsArray;if(Ie.render(i,e,t),ge===!0&&Fe.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];ot(n,r,e,a)}xe&&Le.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];at(b,e,n,n.viewport)}}else r.length>0&&ot(n,r,e,t),xe&&Le.render(e),at(b,e,t)}N!==null&&M===0&&(z.updateMultisampleRenderTarget(N),z.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),He.resetDefaultState(),ee=-1,P=null,C.pop(),C.length>0?(x=C[C.length-1],z.setTextureUnits(x.state.textureUnits),ge===!0&&Fe.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function it(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?he:me;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&ye.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ve);let i=Ae.update(e),a=e.material;a.visible&&b.push(e,i,a,n,ye.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?he:me;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ae.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ye.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ye.copy(e.boundingSphere.center)),ye.applyMatrix4(e.matrixWorld).applyMatrix4(ve)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,ye.z,s,t)}}else a.visible&&b.push(e,i,a,n,ye.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)it(i[e],t,n,r)}function at(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),ge===!0&&Fe.setGlobalState(T.clippingPlanes,n),r&&L.viewport(te.copy(r)),i.length>0&&st(i,t,n),a.length>0&&st(a,t,n),o.length>0&&st(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function ot(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=we.has(`EXT_color_buffer_half_float`)||we.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Kf(1,1,{generateMipmaps:!0,type:e?Du:bu,minFilter:yu,samples:Math.max(4,Te.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Nf.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||te;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ie),ae=T.getClearAlpha(),ae<1&&T.setClearColor(16777215,.5),T.clear(),xe&&Le.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),ge===!0&&Fe.setGlobalState(T.clippingPlanes,r),st(e,n,r),z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a),we.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(z.updateMultisampleRenderTarget(a),z.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ie,ae),d!==void 0&&(r.viewport=d),T.toneMapping=u}function st(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&ct(o,t,n,s,l,c)}}function ct(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function lt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function ut(e,t,n){t.isScene!==!0&&(t=be);let r=R.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=je.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=je.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=De.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ye),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return pt(e,s),d}else s.uniforms=je.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=je.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Fe.uniform),pt(e,s),r.needsLights=gt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=lt(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function dt(e,t,n,r,i){let a=R.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=ut(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function ft(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=oy.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function pt(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function mt(e,t,n,r,i){t.isScene!==!0&&(t=be),z.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Nf.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=De.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=R.get(r),b=x.state.lights;if(ge===!0&&(_e===!0||e!==P)){let t=e===P&&r.id===ee;Fe.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Fe.numPlanes||v.numIntersection!==Fe.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===lt(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?dt(r,t,i,s,h):ut(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,w,v));let E=!1,O=!1,k=!1,A=w.getUniforms(),j=v.uniforms;if(L.useProgram(w.program)&&(E=!0,O=!0,k=!0),r.id!==ee&&(ee=r.id,O=!0),E||P!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),A.setValue(I,`projectionMatrix`,e.projectionMatrix),A.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(I,F.setFromMatrixPosition(e.matrixWorld)),Te.logarithmicDepthBuffer&&A.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),P!==e&&(P=e,O=!0,k=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&A.setValue(I,`sunShadowMap`,b.state.sunShadowMap,z),b.state.directionalShadowMap.length>0&&A.setValue(I,`directionalShadowMap`,b.state.directionalShadowMap,z),b.state.spotShadowMap.length>0&&A.setValue(I,`spotShadowMap`,b.state.spotShadowMap,z),b.state.pointShadowMap.length>0&&A.setValue(I,`pointShadowMap`,b.state.pointShadowMap,z)),i.isSkinnedMesh){A.setOptional(I,i,`bindMatrix`),A.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(I,`boneTexture`,e.boneTexture,z))}i.isBatchedMesh&&(A.setOptional(I,i,`batchingTexture`),A.setValue(I,`batchingTexture`,i._matricesTexture,z),A.setOptional(I,i,`batchingIdTexture`),A.setValue(I,`batchingIdTexture`,i._indirectTexture,z),A.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&A.setValue(I,`batchingColorTexture`,i._colorsTexture,z));let M=n.morphAttributes;if((M.position!==void 0||M.normal!==void 0||M.color!==void 0)&&Re.update(i,n,w),(O||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,A.setValue(I,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(j.envMapIntensity.value=t.environmentIntensity),j.dfgLUT!==void 0&&(j.dfgLUT.value=Cb()),O){if(A.setValue(I,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ht(j,k),a&&r.fog===!0&&Me.refreshFogUniforms(j,a),Me.refreshMaterialUniforms(j,r,ce,se,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;j.probesSH.value=e.textures,j.probesMin.value=e.min,j.probesMax.value=e.max,j.probesResolution.value=e.resolution}oy.upload(I,ft(v),j,z)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(oy.upload(I,ft(v),j,z),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(I,`center`,i.center),A.setValue(I,`modelViewMatrix`,i.modelViewMatrix),A.setValue(I,`normalMatrix`,i.normalMatrix),A.setValue(I,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ue.update(n,w),Ue.bind(n,w)}}return w}function ht(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function gt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=R.get(e);if(o.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(I.FRAMEBUFFER,o.__webglFramebuffer),te.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest,L.viewport(te),L.scissor(ne),L.setScissorTest(re),ee=-1;return}if(o.__webglFramebuffer===void 0)z.setupRenderTarget(e);else if(o.__hasExternalTextures)z.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);z.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&z.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,te.copy(e.viewport),ne.copy(e.scissor),re=e.scissorTest}else te.copy(de).multiplyScalar(ce).floor(),ne.copy(fe).multiplyScalar(ce).floor(),re=pe;if(n!==0&&(r=O),L.bindFramebuffer(I.FRAMEBUFFER,r)&&L.drawBuffers(e,r),L.viewport(te),L.scissor(ne),L.setScissorTest(re),i){let r=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}ee=-1};function _t(e){let t=R.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Te.textureFormatReadable(e.format),t.__typeReadable=Te.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){K(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){L.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let u=_t(o);if(u.__formatReadable===!1){K(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){K(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&I.readPixels(t,n,r,i,Ve.convert(c),Ve.convert(l),a)}finally{let e=N===null?null:R.get(N).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s);let d=_t(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),I.readPixels(t,n,r,i,Ve.convert(l),Ve.convert(u),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let p=N===null?null:R.get(N).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,p);let m=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Jd(I,m,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,f),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(f),I.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;z.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ve.convert(t.format),_=Ve.convert(t.type),v;t.isData3DTexture?(z.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(z.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(z.setTexture2D(t,0),v=I.TEXTURE_2D),L.activeTexture(I.TEXTURE0),L.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=L.getParameter(I.UNPACK_ROW_LENGTH),b=L.getParameter(I.UNPACK_IMAGE_HEIGHT),x=L.getParameter(I.UNPACK_SKIP_PIXELS),S=L.getParameter(I.UNPACK_SKIP_ROWS),C=L.getParameter(I.UNPACK_SKIP_IMAGES);L.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),L.pixelStorei(I.UNPACK_SKIP_PIXELS,l),L.pixelStorei(I.UNPACK_SKIP_ROWS,u),L.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);L.bindFramebuffer(I.READ_FRAMEBUFFER,k),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);L.pixelStorei(I.UNPACK_ROW_LENGTH,y),L.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),L.pixelStorei(I.UNPACK_SKIP_PIXELS,x),L.pixelStorei(I.UNPACK_SKIP_ROWS,S),L.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&I.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&z.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?z.setTextureCube(e,0):e.isData3DTexture?z.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?z.setTexture2DArray(e,0):z.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,L.reset(),He.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return zd}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Nf._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nf._getUnpackColorSpace()}},Tb=`#b7d6df`,Eb=`#c6dfe7`,Db={x:-.42,y:.82,z:.38},Ob=class{constructor(e){W(this,`scene`,new Mp),W(this,`groups`,{terrain:new Cp,roads:new Cp,regions:new Cp,structures:new Cp,markers:new Cp,vegetation:new Cp}),W(this,`disposables`,[]),this.scene.background=new X(Tb),this.scene.fog=new jp(Eb,112,255),this.groups.terrain.name=`terrain`,this.groups.roads.name=`roads`,this.groups.regions.name=`regions`,this.groups.structures.name=`structures`,this.groups.markers.name=`markers`,this.groups.vegetation.name=`vegetation`;for(let e of Object.values(this.groups))this.scene.add(e),this.disposables.push(e);this.setupLights(e)}setupLights(e){let t=new Tg(`#e8f6ff`,`#586a45`,1.25);t.position.set(0,70,0),this.scene.add(t),this.disposables.push(t);let n=new Vg(`#ffffff`,.22);this.scene.add(n),this.disposables.push(n);let r=new Bg(`#fff2d2`,2.15);r.position.set(-48,74,36),e.shadows&&(r.castShadow=!0,r.shadow.mapSize.set(e.tier===`high`?2048:1024,e.tier===`high`?2048:1024),r.shadow.camera.left=-88,r.shadow.camera.right=88,r.shadow.camera.top=88,r.shadow.camera.bottom=-88,r.shadow.camera.near=12,r.shadow.camera.far=210,r.shadow.bias=-4e-4,r.shadow.normalBias=.025),this.scene.add(r),this.disposables.push(r);let i=new Bg(`#bcd9ff`,.42);i.position.set(34,26,-42),this.scene.add(i),this.disposables.push(i)}add(e,t=`structures`){this.groups[t].add(e)}dispose(){this.scene.traverse(e=>{if(e instanceof Xm||e instanceof Ch||e instanceof Ah){e.geometry?.dispose();let t=e.material;Array.isArray(t)?t.forEach(e=>e.dispose()):t?.dispose()}});for(let e of this.disposables)this.scene.remove(e);this.disposables.length=0,this.scene.clear()}},kb={type:`change`},Ab={type:`start`},jb={type:`end`},Mb=new Lm,Nb=new Am,Pb=Math.cos(70*Tf.DEG2RAD),Fb=new J,Ib=2*Math.PI,Lb={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rb=1e-6,zb=class extends d_{constructor(e,t=null){super(e,t),this.state=Lb.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:lu.ROTATE,MIDDLE:lu.DOLLY,RIGHT:lu.PAN},this.touches={ONE:uu.ROTATE,TWO:uu.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new Ef,this._lastTargetPosition=new J,this._quat=new Ef().setFromUnitVectors(e.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new u_,this._sphericalDelta=new u_,this._scale=1,this._panOffset=new J,this._rotateStart=new q,this._rotateEnd=new q,this._rotateDelta=new q,this._panStart=new q,this._panEnd=new q,this._panDelta=new q,this._dollyStart=new q,this._dollyEnd=new q,this._dollyDelta=new q,this._dollyDirection=new J,this._mouse=new q,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Vb.bind(this),this._onPointerDown=Bb.bind(this),this._onPointerUp=Hb.bind(this),this._onContextMenu=Yb.bind(this),this._onMouseWheel=Gb.bind(this),this._onKeyDown=Kb.bind(this),this._onTouchStart=qb.bind(this),this._onTouchMove=Jb.bind(this),this._onMouseDown=Ub.bind(this),this._onMouseMove=Wb.bind(this),this._interceptControlDown=Xb.bind(this),this._interceptControlUp=Zb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=Lb.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(kb),this.update(),this.state=Lb.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Fb.copy(t).sub(this.target),Fb.applyQuaternion(this._quat),this._spherical.setFromVector3(Fb),this.autoRotate&&this.state===Lb.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ib:n>Math.PI&&(n-=Ib),r<-Math.PI?r+=Ib:r>Math.PI&&(r-=Ib),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Fb.setFromSpherical(this._spherical),Fb.applyQuaternion(this._quatInverse),t.copy(this.target).add(Fb),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Fb.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new J(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new J(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Fb.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Mb.origin.copy(this.object.position),Mb.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mb.direction))<Pb?this.object.lookAt(this.target):(Nb.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mb.intersectPlane(Nb,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Rb||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rb||this._lastTargetPosition.distanceToSquared(this.target)>Rb?(this.dispatchEvent(kb),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Ib/60/60*this.autoRotateSpeed:Ib/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Fb.setFromMatrixColumn(t,0),Fb.multiplyScalar(-e),this._panOffset.add(Fb)}_panUp(e,t){this.screenSpacePanning===!0?Fb.setFromMatrixColumn(t,1):(Fb.setFromMatrixColumn(t,0),Fb.crossVectors(this.object.up,Fb)),Fb.multiplyScalar(e),this._panOffset.add(Fb)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Fb.copy(r).sub(this.target);let i=Fb.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ib*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ib*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ib*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ib*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ib*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ib*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Ib*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ib*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new q,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Bb(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),this._isTrackingPointer(e)||(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function Vb(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Hb(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(jb),this.state=Lb.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function Ub(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case lu.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Lb.DOLLY;break;case lu.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Lb.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Lb.ROTATE}break;case lu.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Lb.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Lb.PAN}break;default:this.state=Lb.NONE}this.state!==Lb.NONE&&this.dispatchEvent(Ab)}function Wb(e){switch(this.state){case Lb.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Lb.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Lb.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Gb(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===Lb.NONE&&(e.preventDefault(),this.dispatchEvent(Ab),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(jb))}function Kb(e){this.enabled!==!1&&this._handleKeyDown(e)}function qb(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case uu.ROTATE:if(this.enableRotate===!1){this.state=Lb.NONE;break}this._handleTouchStartRotate(e),this.state=Lb.TOUCH_ROTATE;break;case uu.PAN:if(this.enablePan===!1){this.state=Lb.NONE;break}this._handleTouchStartPan(e),this.state=Lb.TOUCH_PAN;break;default:this.state=Lb.NONE}break;case 2:switch(this.touches.TWO){case uu.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Lb.TOUCH_DOLLY_PAN;break;case uu.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Lb.TOUCH_DOLLY_ROTATE;break;default:this.state=Lb.NONE}break;default:this.state=Lb.NONE}this.state!==Lb.NONE&&this.dispatchEvent(Ab)}function Jb(e){switch(this._trackPointer(e),this.state){case Lb.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Lb.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Lb.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Lb.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Lb.NONE}}function Yb(e){this.enabled!==!1&&e.preventDefault()}function Xb(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Zb(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Qb(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function $b(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var ex={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},tx={duration:.5,overwrite:!1,delay:0},nx,rx,ix,ax=1e8,ox=1/ax,sx=Math.PI*2,cx=sx/4,lx=0,ux=Math.sqrt,dx=Math.cos,fx=Math.sin,px=function(e){return typeof e==`string`},mx=function(e){return typeof e==`function`},hx=function(e){return typeof e==`number`},gx=function(e){return e===void 0},_x=function(e){return typeof e==`object`},vx=function(e){return e!==!1},yx=function(){return typeof window<`u`},bx=function(e){return mx(e)||px(e)},xx=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},Sx=Array.isArray,Cx=/random\([^)]+\)/g,wx=/,\s*/g,Tx=/(?:-?\.?\d|\.)+/gi,Ex=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Dx=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ox=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kx=/[+-]=-?[.\d]+/,Ax=/[^,'"\[\]\s]+/gi,jx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Mx,Nx,Px,Fx,Ix={},Lx={},Rx,zx=function(e){return(Lx=_S(e,Ix))&&Iw},Bx=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},Vx=function(e,t){return!t&&console.warn(e)},Hx=function(e,t){return e&&(Ix[e]=t)&&Lx&&(Lx[e]=t)||Ix},Ux=function(){return 0},Wx={suppressEvents:!0,isStart:!0,kill:!1},Gx={suppressEvents:!0,kill:!1},Kx={suppressEvents:!0},qx={},Jx=[],Yx={},Xx,Zx={},Qx={},$x=30,eS=[],tS=``,nS=function(e){var t=e[0],n,r;if(_x(t)||mx(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=eS.length;r--&&!eS[r].targetTest(t););n=eS[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new KC(e[r],n)))||e.splice(r,1);return e},rS=function(e){return e._gsap||nS(eC(e))[0]._gsap},iS=function(e,t,n){return(n=e[t])&&mx(n)?e[t]():gx(n)&&e.getAttribute&&e.getAttribute(t)||n},aS=function(e,t){return(e=e.split(`,`)).forEach(t)||e},oS=function(e){return Math.round(e*1e5)/1e5||0},sS=function(e){return Math.round(e*1e7)/1e7||0},cS=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},lS=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},uS=function(){var e=Jx.length,t=Jx.slice(0),n,r;for(Yx={},Jx.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},dS=function(e){return!!(e._initted||e._startAt||e.add)},fS=function(e,t,n,r){Jx.length&&!rx&&uS(),e.render(t,n,r||!!(rx&&t<0&&dS(e))),Jx.length&&!rx&&uS()},pS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(Ax).length<2?t:px(e)?e.trim():e},mS=function(e){return e},hS=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},gS=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},_S=function(e,t){for(var n in t)e[n]=t[n];return e},vS=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=_x(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},yS=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},bS=function(e){var t=e.parent||Mx,n=e.keyframes?gS(Sx(e.keyframes)):hS;if(vx(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},xS=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},SS=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},CS=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},wS=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},TS=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ES=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},DS=function(e,t,n,r){return e._startAt&&(rx?e._startAt.revert(Gx):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},OS=function e(t){return!t||t._ts&&e(t.parent)},kS=function(e){return e._repeat?AS(e._tTime,e=e.duration()+e._rDelay)*e:0},AS=function(e,t){var n=Math.floor(e=sS(e/t));return e&&n===e?n-1:n},jS=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},MS=function(e){return e._end=sS(e._start+(e._tDur/Math.abs(e._ts||e._rts||ox)||0))},NS=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=sS(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),MS(e),n._dirty||TS(n,e)),e},PS=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=jS(e.rawTime(),t),(!t._dur||JS(0,t.totalDuration(),n)-t._tTime>ox)&&t.render(n,!0)),TS(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ox}},FS=function(e,t,n,r){return t.parent&&wS(t),t._start=sS((hx(n)?n:!n&&zS(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Mx?GS(e,n,t):e._time)+t._delay),t._end=sS(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),SS(e,t,`_first`,`_last`,e._sort?`_start`:0),zS(t)||(e._recent=t),r||PS(e,t),e._ts<0&&NS(e,e._tTime),e},IS=function(e,t){return(Ix.ScrollTrigger||Bx(`scrollTrigger`,t))&&Ix.ScrollTrigger.create(t,e)},LS=function(e,t,n,r,i){if(tw(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!rx&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Xx!==MC.frame)return Jx.push(e),e._lazy=[i,r],1},RS=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},zS=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},BS=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&RS(e)&&(e._initted||!zS(e))||(e._ts<0||e._dp._ts<0)&&!zS(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=JS(0,e._tDur,t),l=AS(s,o),e._yoyo&&l&1&&(a=1-a),l!==AS(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||rx||r||e._zTime===ox||!t&&e._zTime){if(!e._initted&&LS(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?ox:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&DS(e,t,n,!0),e._onUpdate&&!n&&_C(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&_C(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&wS(e,1),!n&&!rx&&(_C(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},VS=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},HS=function(e,t,n,r){var i=e._repeat,a=sS(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:sS(a*(i+1)+e._rDelay*i):a,o>0&&!r&&NS(e,e._tTime=e._tDur*o),e.parent&&MS(e),n||TS(e.parent,e),e},US=function(e){return e instanceof JC?TS(e):HS(e,e._dur)},WS={_start:0,endTime:Ux,totalDuration:Ux},GS=function e(t,n,r){var i=t.labels,a=t._recent||WS,o=t.duration()>=ax?a.endTime(!1):t._dur,s,c,l;return px(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(Sx(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},KS=function(e,t,n){var r=hx(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=vx(s.vars.inherit)&&s.parent;a.immediateRender=vx(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new cw(t[0],a,t[i+1])},qS=function(e,t){return e||e===0?t(e):t},JS=function(e,t,n){return n<e?e:n>t?t:n},YS=function(e,t){return!px(e)||!(t=jx.exec(e))?``:t[1]},XS=function(e,t,n){return qS(n,function(n){return JS(e,t,n)})},ZS=[].slice,QS=function(e,t){return e&&_x(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&_x(e[0]))&&!e.nodeType&&e!==Nx},$S=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return px(e)&&!t||QS(e,1)?(r=n).push.apply(r,eC(e)):n.push(e)})||n},eC=function(e,t,n){return ix&&!t&&ix.selector?ix.selector(e):px(e)&&!n&&(Px||!NC())?ZS.call((t||Fx).querySelectorAll(e),0):Sx(e)?$S(e,n):QS(e)?ZS.call(e,0):e?[e]:[]},tC=function(e){return e=eC(e)[0]||Vx(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return eC(t,n.querySelectorAll?n:n===e?Vx(`Invalid scope`)||Fx.createElement(`div`):e)}},nC=function(e){return e.sort(function(){return .5-Math.random()})},rC=function(e){if(mx(e))return e;var t=_x(e)?e:{each:e},n=VC(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return px(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,ax])[1],!S){for(b=-ax;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===ax?0:s?f*u/S-.5:r/S|0,b=0,x=ax,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):ux(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&nC(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=YS(t.amount||t.each)||0,n=n&&f<0?BC(n):n}return f=(p[e]-p.min)/p.max||0,sS(p.b+(n?n(f):f)*p.v)+p.u}},iC=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=sS(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(hx(n)?0:YS(n))}},aC=function(e,t){var n=Sx(e),r,i;return!n&&_x(e)&&(r=n=e.radius||ax,e.values?(e=eC(e.values),(i=!hx(e[0]))&&(r*=r)):e=iC(e.increment)),qS(t,n?mx(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=ax,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||hx(t)?s:s+YS(t)}:iC(e))},oC=function(e,t,n,r){return qS(Sx(e)?!t:n===!0?!!(n=0):!r,function(){return Sx(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},sC=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},cC=function(e,t){return function(n){return e(parseFloat(n))+(t||YS(n))}},lC=function(e,t,n){return mC(e,t,0,1,n)},uC=function(e,t,n){return qS(n,function(n){return e[~~t(n)]})},dC=function e(t,n,r){var i=n-t;return Sx(t)?uC(t,e(0,t.length),n):qS(r,function(e){return(i+(e-t)%i)%i+t})},fC=function e(t,n,r){var i=n-t,a=i*2;return Sx(t)?uC(t,e(0,t.length-1),n):qS(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},pC=function(e){return e.replace(Cx,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(wx);return oC(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},mC=function(e,t,n,r,i){var a=t-e,o=r-n;return qS(i,function(t){return n+((t-e)/a*o||0)})},hC=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=px(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(Sx(t)&&!Sx(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=_S(Sx(t)?[]:{},t));if(!u){for(c in n)XC.call(s,t,c,`get`,n[c]);a=function(e){return _w(e,s)||(o?t.p:t)}}}return qS(r,a)},gC=function(e,t,n){var r=e.labels,i=ax,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},_C=function(e,t,n){var r=e.vars,i=r[t],a=ix,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&Jx.length&&uS(),o&&(ix=o),l=s?i.apply(c,s):i.call(c),ix=a,l},vC=function(e){return wS(e),e.scrollTrigger&&e.scrollTrigger.kill(!!rx),e.progress()<1&&_C(e,`onInterrupt`),e},yC,bC=[],xC=function(e){if(e){if(e=!e.name&&e.default||e,yx()||e.headless){var t=e.name,n=mx(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:Ux,render:_w,add:XC,kill:yw,modifier:vw,rawVars:0},a={targetTest:0,get:0,getSetter:pw,aliases:{},register:0};if(NC(),e!==r){if(Zx[t])return;hS(r,hS(yS(e,i),a)),_S(r.prototype,_S(i,yS(e,a))),Zx[r.prop=t]=r,e.targetTest&&(eS.push(r),qx[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}Hx(t,r),e.register&&e.register(Iw,r,Sw)}else bC.push(e)}},SC=255,CC={aqua:[0,SC,SC],lime:[0,SC,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,SC],navy:[0,0,128],white:[SC,SC,SC],olive:[128,128,0],yellow:[SC,SC,0],orange:[SC,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[SC,0,0],pink:[SC,192,203],cyan:[0,SC,SC],transparent:[SC,SC,SC,0]},wC=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*SC+.5|0},TC=function(e,t,n){var r=e?hx(e)?[e>>16,e>>8&SC,e&SC]:0:CC.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),CC[e])r=CC[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&SC,r&SC,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&SC,e&SC]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(Tx),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=wC(s+1/3,i,a),r[1]=wC(s,i,a),r[2]=wC(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(Ex),n&&r.length<4&&(r[3]=1),r}else r=e.match(Tx)||CC.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/SC,a=r[1]/SC,o=r[2]/SC,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},EC=function(e){var t=[],n=[],r=-1;return e.split(OC).forEach(function(e){var i=e.match(Dx)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},DC=function(e,t,n){var r=``,i=(e+r).match(OC),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=TC(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=EC(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(OC,`1`).split(Dx),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(OC),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},OC=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in CC)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),kC=/hsl[a]?\(/,AC=function(e){var t=e.join(` `),n;if(OC.lastIndex=0,OC.test(t))return n=kC.test(t),e[1]=DC(e[1],n),e[0]=DC(e[0],n,EC(e[1])),!0},jC,MC=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?0:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){Rx&&(!Px&&yx()&&(Nx=Px=window,Fx=Nx.document||{},Ix.gsap=Iw,(Nx.gsapVersions||(Nx.gsapVersions=[])).push(Iw.version),zx(Lx||Nx.GreenSockGlobals||!Nx.gsap&&Nx||{}),bC.forEach(xC)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},jC=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),jC=0,l=Ux},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),NC(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),NC=function(){return!jC&&MC.wake()},PC={},FC=/^[\d.\-M][\d.\-,\s]/,IC=/["']/g,LC=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(IC,``).trim():+c,r=s.substr(o+1).trim();return t},RC=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},zC=function(e){var t=(e+``).split(`(`),n=PC[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[LC(t[1])]:RC(e).split(`,`).map(pS)):PC._CE&&FC.test(e)?PC._CE(``,e):n},BC=function(e){return function(t){return 1-e(1-t)}},VC=function(e,t){return e&&(mx(e)?e:PC[e]||zC(e))||t},HC=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return aS(e,function(e){for(var t in PC[e]=Ix[e]=i,PC[a=e.toLowerCase()]=n,i)PC[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=PC[e+`.`+t]=i[t]}),i},UC=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},WC=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/sx*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*fx((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:UC(s);return a=sx/a,c.config=function(n,r){return e(t,n,r)},c},GC=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:UC(r);return i.config=function(n){return e(t,n)},i};aS(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;HC(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),PC.Linear.easeNone=PC.none=PC.Linear.easeIn,HC(`Elastic`,WC(`in`),WC(`out`),WC()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};HC(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),HC(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),HC(`Circ`,function(e){return-(ux(1-e*e)-1)}),HC(`Sine`,function(e){return e===1?1:-dx(e*cx)+1}),HC(`Back`,GC(`in`),GC(`out`),GC()),PC.SteppedEase=PC.steps=Ix.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-ox;return function(e){return((r*JS(0,a,e)|0)+i)*n}}},tx.ease=PC[`quad.out`],aS(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return tS+=e+`,`+e+`Params,`});var KC=function(e,t){this.id=lx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:iS,this.set=t?t.getSetter:pw},qC=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,HS(this,+e.duration,1,1),this.data=e.data,ix&&(this._ctx=ix,ix.data.push(this)),jC||MC.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,HS(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(NC(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(NS(this,e),!n._dp||n.parent||PS(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&FS(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===ox||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),fS(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+kS(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+kS(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?AS(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-ox?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?jS(this.parent._time,this):this._tTime,r=this._rts<0;this._rts=+e||0,this._ts=this._ps||e===-ox?0:this._rts;var i=this.totalDuration();return(r!==this._rts<0||n>0&&n<i)&&this.totalTime(JS(-Math.abs(this._delay),i,n),t!==!1),MS(this),ES(this)},t.paused=function(e){if(!arguments.length)return this._ps;if(this._ps!==e){if(this._ps=e,e)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{NC(),this._ts=this._rts;var t=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,n=this.progress()===1&&Math.abs(this._zTime)!==ox,r;if(n)for(this._tTime-=ox,r=this._first;r;){if(!r._dur&&r._zTime<0&&r._ts&&r._start<=t+ox){n=!1;break}r=r._next}this.totalTime(t,n)}}return this},t.startTime=function(e){if(arguments.length){this._start=sS(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&FS(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(vx(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?jS(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=Kx);var t=rx;return rx=e,dS(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),rx=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,US(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,US(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(GS(this,e),vx(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,vx(t)),this._dur||(this._zTime=-ox),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-ox:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ox,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-ox)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=mx(e)?e:mS,a=function(){var e=t.then;t.then=null,n&&n(),mx(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){vC(this)},e}();hS(qC.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ox,_prom:0,_ps:!1,_rts:1});var JC=function(e){$b(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=vx(t.sortChildren),Mx&&FS(t.parent||Mx,Qb(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&IS(Qb(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return KS(0,arguments,this),this},n.from=function(e,t,n){return KS(1,arguments,this),this},n.fromTo=function(e,t,n,r){return KS(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,bS(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new cw(e,t,GS(this,n),1),this},n.call=function(e,t,n){return FS(this,cw.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new cw(e,n,GS(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,bS(n).immediateRender=vx(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,bS(r).immediateRender=vx(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:sS(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==Mx&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=sS(o%f),o===i?(d=this._repeat,c=a):(_=sS(o/f),d=~~_,d&&d===_&&(c=a,d--),c>a&&(c=a)),_=AS(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:sS(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&_C(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,_=d),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=VS(this,sS(r),sS(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!_&&(_C(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-ox);break}}l=u}else{l=this._last;for(var S=e<0?e:c;l;){if(u=l._prev,(l._act||S<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(S-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(S-l._start)*l._ts,t,n||rx&&dS(l)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=S?-ox:ox);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-ox)._zTime=c>=r?1:-1,this._ts))return this._start=g,MS(this),this.render(e,t,n);this._onUpdate&&!t&&_C(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g!==this._start&&Math.abs(h)===Math.abs(this._ts)||this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&wS(this,1),t||e<0&&!r||!o&&!r&&i||(_C(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(hx(t)||(t=GS(this,t,e)),!(e instanceof qC)){if(Sx(e))return e.forEach(function(e){return n.add(e,t)}),this;if(px(e))return this.addLabel(e,t);if(mx(e))e=cw.delayedCall(0,e);else return this}return this===e?this:FS(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-ax);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof cw?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return px(e)?this.removeLabel(e):mx(e)?this.killTweensOf(e):(e.parent===this&&CS(this,e),e===this._recent&&(this._recent=this._last),TS(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=sS(MC.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=GS(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=cw.delayedCall(0,t||Ux,n);return r.data=`isPause`,this._hasPause=1,FS(this,r,GS(this,e))},n.removePause=function(e){var t=this._first;for(e=GS(this,e);t;)t._start===e&&t.data===`isPause`&&wS(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)$C!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=eC(e),i=this._first,a=hx(t),o;i;)i instanceof cw?lS(i._targets,r)&&(a?(!$C||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t=t||{};var n=this,r=GS(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=cw.to(n,hS({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||ox,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&HS(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,hS({startAt:{time:GS(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),gC(this,GS(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),gC(this,GS(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+ox)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=sS(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return TS(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),TS(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=ax,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,FS(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=sS(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;HS(n,n===Mx&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(Mx._ts&&(fS(Mx,jS(e,Mx)),Xx=MC.frame),MC.frame>=$x){$x+=ex.autoSleep||120;var t=Mx._first;if((!t||!t._ts)&&ex.autoSleep&&MC._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||MC.sleep()}}},t}(qC);hS(JC.prototype,{_lock:0,_hasPause:0,_forcing:0});var YC=function(e,t,n,r,i,a,o){var s=new Sw(this._pt,e,t,0,1,gw,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=pC(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(Ox)||[];u=Ox.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?cS(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=Ox.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(kx.test(r)||g)&&(s.e=0),this._pt=s,s},XC=function(e,t,n,r,i,a,o,s,c,l){mx(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?mx(u)?c?e[t.indexOf(`set`)||!mx(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=mx(u)?c?dw:uw:lw,p;if(px(r)&&(~r.indexOf(`random(`)&&(r=pC(r)),r.charAt(1)===`=`&&(p=cS(d,r)+(YS(d)||0),(p||p===0)&&(r=p))),!l||d!==r||ew)return!isNaN(d*r)&&r!==``?(p=new Sw(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?hw:mw,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&Bx(t,r),YC.call(this,e,t,d,r,f,s||ex.stringFilter,c))},ZC=function(e,t,n,r,i){if(mx(e)&&(e=aw(e,i,t,n,r)),!_x(e)||e.style&&e.nodeType||Sx(e)||xx(e))return px(e)?aw(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=aw(e[o],i,t,n,r);return a},QC=function(e,t,n,r,i,a){var o,s,c,l;if(Zx[e]&&(o=new Zx[e]).init(i,o.rawVars?t[e]:ZC(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new Sw(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==yC))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},$C,ew,tw=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!nx,b=t.timeline,x=i.easeReverse||d,S,C,w,T,E,D,O,k,A,j,M,N,ee;if(!b||f&&a||(a=`none`),t._ease=VC(a,tx.ease),t._rEase=x&&(VC(x)||t._ease),t._from=!b&&!!i.runBackwards,t._from&&(t.ratio=1),!b||f&&!i.stagger){if(k=g[0]?rS(g[0]).harness:0,N=k&&i[k.prop],S=yS(i,qx),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?Gx:Wx),h._lazy=0),o){if(wS(t._startAt=cw.set(g,hS({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&vx(c),startAt:null,delay:0,onUpdate:l&&function(){return _C(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(rx||!s&&!p)&&t._startAt.revert(Gx),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),w=hS({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&vx(c),immediateRender:s,stagger:0,parent:_},S),N&&(w[k.prop]=N),wS(t._startAt=cw.set(g,w)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(rx?t._startAt.revert(Gx):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,ox,ox);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&vx(c)||c&&!m,C=0;C<g.length;C++){if(E=g[C],O=E._gsap||nS(g)[C]._gsap,t._ptLookup[C]=j={},Yx[O.id]&&Jx.length&&uS(),M=v===g?C:v.indexOf(E),k&&(A=new k).init(E,N||S,t,M,v)!==!1&&(t._pt=T=new Sw(t._pt,E,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(e){j[e]=T}),A.priority&&(D=1)),!k||N)for(w in S)Zx[w]&&(A=QC(w,S,t,M,E,v))?A.priority&&(D=1):j[w]=T=XC.call(t,E,w,`get`,S[w],M,v,0,i.stringFilter);t._op&&t._op[C]&&t.kill(E,t._op[C]),y&&t._pt&&($C=t,Mx.killTweensOf(E,j,t.globalTime(n)),ee=!t.parent,$C=0),t._pt&&c&&(Yx[O.id]=1)}D&&xw(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!ee,f&&n<=0&&b.render(ax,!0,!0)},nw=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return ew=1,e.vars[t]=`+=0`,tw(e,o),ew=0,s?Vx(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=oS(n)+YS(u.e)),u.b&&(u.b=l.s+YS(u.b))},rw=function(e,t){var n=e[0]?rS(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=_S({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},iw=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(Sx(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},aw=function(e,t,n,r,i){return mx(e)?e.call(t,n,r,i):px(e)&&~e.indexOf(`random(`)?pC(e):e},ow=tS+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,sw={};aS(ow+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return sw[e]=1}),ow=ow.split(`,`);var cw=function(e){$b(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:bS(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=n.parent||Mx,g=(Sx(t)||xx(t)?hx(t[0]):`length`in n)?[t]:eC(t),_,v,y,b,x,S,C,w;if(a._targets=g.length?nS(g):Vx(`GSAP target `+t+` not found. https://gsap.com`,!ex.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||bx(s)||bx(c)){n=a.vars;var T=n.easeReverse||n.yoyoEase;if(_=a.timeline=new JC({data:`nested`,defaults:p||{},targets:h&&h.data===`nested`?h.vars.targets:g}),_.kill(),_.parent=_._dp=Qb(a),_._start=0,u||bx(s)||bx(c)){if(b=g.length,C=u&&rC(u),_x(u))for(x in u)~ow.indexOf(x)&&(w||(w={}),w[x]=u[x]);for(v=0;v<b;v++)y=yS(n,sw),y.stagger=0,T&&(y.easeReverse=T),w&&_S(y,w),S=g[v],y.duration=+aw(s,Qb(a),v,S,g),y.delay=(+aw(c,Qb(a),v,S,g)||0)-a._delay,!u&&b===1&&y.delay&&(a._delay=c=y.delay,a._start+=c,y.delay=0),_.to(S,y,C?C(v,S,g):0),_._ease=PC.none;_.duration()?s=c=0:a.timeline=0}else if(f){bS(hS(_.vars.defaults,{ease:`none`})),_._ease=VC(f.ease||n.ease||`none`);var E=0,D,O,k;if(Sx(f))f.forEach(function(e){return _.to(g,e,`>`)}),_.duration();else{for(x in y={},f)x===`ease`||x===`easeEach`||iw(x,f[x],y,f.easeEach);for(x in y)for(D=y[x].sort(function(e,t){return e.t-t.t}),E=0,v=0;v<D.length;v++)O=D[v],k={ease:O.e,duration:(O.t-(v?D[v-1].t:0))/100*s},k[x]=O.v,_.to(g,k,E),E+=k.duration;_.duration()<s&&_.to({},{duration:s-_.duration()})}}s||a.duration(s=_.duration())}else a.timeline=0;return d===!0&&!nx&&($C=Qb(a),Mx.killTweensOf(g),$C=0),FS(h,Qb(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===sS(h._time)&&vx(l)&&OS(Qb(a))&&h.data!==`nested`)&&(a._tTime=-ox,a.render(Math.max(0,-c)||0)),m&&IS(Qb(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-ox&&!o?i:e<ox?0:e,c,l,u,d,f,p,m,h;if(!a)BS(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=sS(s%d),s===i?(u=this._repeat,c=a):(f=sS(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(c=a-c),f=AS(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(sS(d*u),!0).invalidate()._lock=0)}if(!this._initted){if(LS(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var g=c<r;if(g!==this._inv){var _=g?r:a-r;this._inv=g,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=_?(g?-1:1)/_:0,this._invScale=g?-this.ratio:1-this.ratio,this._invEase=g?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(c/a);if(this._from&&(this.ratio=m=1-m),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!f&&(_C(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&DS(this,e,t,n),_C(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&_C(this,`onRepeat`),s!==this._tDur&&s||this._tTime!==s||(o&&!this._onUpdate&&DS(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&wS(this,1),!t&&(!o||r)&&(s||r||p)&&(_C(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){jC||MC.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||tw(this,a),o=this._ease(a/this._dur),nw(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(NS(this,0),this.parent||SS(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?vC(this):this.scrollTrigger&&this.scrollTrigger.kill(!!rx),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,$C&&$C.vars.overwrite!==!0)._first||vC(this),this.parent&&n!==this.timeline.totalDuration()&&HS(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?eC(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&xS(r,i))return t===`all`&&(this._pt=0),vC(this);for(s=this._op=this._op||[],t!==`all`&&(px(t)&&(d={},aS(t,function(e){return d[e]=1}),t=d),t=rw(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&(`kill`in f.d&&f.d.kill(d)!==!0||CS(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&vC(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return KS(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return KS(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return Mx.killTweensOf(e,t,n)},t}(qC);hS(cw.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),aS(`staggerTo,staggerFrom,staggerFromTo`,function(e){cw[e]=function(){var t=new JC,n=ZS.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var lw=function(e,t,n){return e[t]=n},uw=function(e,t,n){return e[t](n)},dw=function(e,t,n,r){return e[t](r.fp,n)},fw=function(e,t,n){return e.setAttribute(t,n)},pw=function(e,t){return mx(e[t])?uw:gx(e[t])&&e.setAttribute?fw:lw},mw=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},hw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},gw=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},_w=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},vw=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},yw=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?CS(this,t,`_pt`):t.dep||(n=1),t=r;return!n},bw=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},xw=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},Sw=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||mw,this.d=o||this,this.set=s||lw,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=bw,this.m=e,this.mt=n,this.tween=t},e}();aS(tS+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return qx[e]=1}),Ix.TweenMax=Ix.TweenLite=cw,Ix.TimelineLite=Ix.TimelineMax=JC,Mx=new JC({sortChildren:!1,defaults:tx,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),ex.stringFilter=AC;var Cw=[],ww={},Tw=[],Ew=0,Dw=0,Ow=function(e){return(ww[e]||Tw).map(function(e){return e()})},kw=function(){var e=Date.now(),t=[];e-Ew>2&&(Ow(`matchMediaInit`),Cw.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=Nx.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),Ow(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Ew=e,Ow(`matchMedia`))},Aw=function(){function e(e,t){this.selector=t&&tC(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Dw++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){mx(e)&&(n=t,t=e,e=mx);var r=this,i=function(){var e=ix,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=tC(n)),ix=r,a=t.apply(r,arguments),mx(a)&&r._r.push(a),ix=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===mx?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=ix;ix=null,e(this),ix=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof cw&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof JC?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof cw)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t){for(var r=Cw.length;r--;)Cw[r].id===this.id&&Cw.splice(r,1);this._mqs&&this._mqs.forEach(function(e){return e.removeListener?e.removeListener(kw):e.removeEventListener(`change`,kw)}),this._mqs=null}},t.revert=function(e){this.kill(e||{})},e}(),jw=function(){function e(e){this.contexts=[],this.scope=e,ix&&ix.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){_x(e)||(e={matches:e});var r=new Aw(0,n||this.scope),i=r.conditions={},a,o,s;for(o in ix&&!r.selector&&(r.selector=ix.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=Nx.matchMedia(e[o]),a&&(Cw.indexOf(r)<0&&Cw.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(kw):a.addEventListener(`change`,kw),(r._mqs||(r._mqs=[])).push(a)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Mw={registerPlugin:function(){[...arguments].forEach(function(e){return xC(e)})},timeline:function(e){return new JC(e)},getTweensOf:function(e,t){return Mx.getTweensOf(e,t)},getProperty:function(e,t,n,r){px(e)&&(e=eC(e)[0]);var i=rS(e||{}).get,a=n?mS:pS;return n===`native`&&(n=``),e&&(t?a((Zx[t]&&Zx[t].get||i)(e,t,n,r)):function(t,n,r){return a((Zx[t]&&Zx[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=eC(e),e.length>1){var r=e.map(function(e){return Iw.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=Zx[t],o=rS(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;yC._pt=0,r.init(e,n?t+n:t,yC,0,[e]),r.render(1,r),yC._pt&&_w(1,yC)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=Iw.to(e,hS((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return Mx.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=VC(e.ease,tx.ease)),vS(tx,e||{})},config:function(e){return vS(ex,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!Zx[e]&&!Ix[e]&&Vx(t+` effect requires `+e+` plugin.`)}),Qx[t]=function(e,t,r){return n(eC(e),hS(t||{},i),r)},a&&(JC.prototype[t]=function(e,n,r){return this.add(Qx[t](e,_x(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){PC[e]=VC(t)},parseEase:function(e,t){return arguments.length?VC(e,t):PC},getById:function(e){return Mx.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new JC(e),r,i;for(n.smoothChildTiming=vx(e.smoothChildTiming),Mx.remove(n),n._dp=0,n._time=n._tTime=Mx._time,r=Mx._first;r;)i=r._next,(t||!(!r._dur&&r instanceof cw&&r.vars.onComplete===r._targets[0]))&&FS(n,r,r._start-r._delay),r=i;return FS(Mx,n,0),n},context:function(e,t){return e?new Aw(e,t):ix},matchMedia:function(e){return new jw(e)},matchMediaRefresh:function(){return Cw.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||kw()},addEventListener:function(e,t){var n=ww[e]||(ww[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ww[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:dC,wrapYoyo:fC,distribute:rC,random:oC,snap:aC,normalize:lC,getUnit:YS,clamp:XS,splitColor:TC,toArray:eC,selector:tC,mapRange:mC,pipe:sC,unitize:cC,interpolate:hC,shuffle:nC},install:zx,effects:Qx,ticker:MC,updateRoot:JC.updateRoot,plugins:Zx,globalTimeline:Mx,core:{PropTween:Sw,globals:Hx,Tween:cw,Timeline:JC,Animation:qC,getCache:rS,_removeLinkedListItem:CS,reverting:function(){return rx},context:function(e){return e&&ix&&(ix.data.push(e),e._ctx=ix),ix},suppressOverwrites:function(e){return nx=e}}};aS(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return Mw[e]=cw[e]}),MC.add(JC.updateRoot),yC=Mw.to({},{duration:0});var Nw=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Pw=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],a&&(a=a.d)&&(a._pt&&(a=Nw(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},Fw=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(px(n)&&(r={},aS(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}Pw(e,n)}}}},Iw=Mw.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)rx?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Fw(`roundProps`,iC),Fw(`modifiers`),Fw(`snap`,aC))||Mw;cw.version=JC.version=Iw.version=`3.15.1`,Rx=1,yx()&&NC(),PC.Power0,PC.Power1,PC.Power2,PC.Power3,PC.Power4,PC.Linear,PC.Quad,PC.Cubic,PC.Quart,PC.Quint,PC.Strong,PC.Elastic,PC.Back,PC.SteppedEase,PC.Bounce,PC.Sine,PC.Expo,PC.Circ;var Lw,Rw,zw,Bw,Vw,Hw,Uw,Ww=function(){return typeof window<`u`},Gw={},Kw=180/Math.PI,qw=Math.PI/180,Jw=Math.atan2,Yw=1e8,Xw=/([A-Z])/g,Zw=/(left|right|width|margin|padding|x)/i,Qw=/[\s,\(]\S/,$w={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},eT=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},nT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},rT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},iT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},aT=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},oT=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},sT=function(e,t,n){return e.style[t]=n},cT=function(e,t,n){return e.style.setProperty(t,n)},lT=function(e,t,n){return e._gsap[t]=n},uT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},dT=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},fT=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},pT=`transform`,mT=pT+`Origin`,hT=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in Gw&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=$w[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=PT(i,e)}):this.tfm[t]=o.x?o[t]:PT(i,t),t===mT&&(this.tfm.zOrigin=o.zOrigin);else return $w.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(pT)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(mT,n,``)),t=pT}(a||n)&&this.props.push(t,n,a[t])},gT=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},_T=function(){for(var e=this.props,t=this.target,n=t.style,r=t._gsap,i=0,a;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(Xw,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=Uw(),i&&i.isStart||n[pT]||(gT(n),r.zOrigin&&n[mT]&&(n[mT]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},vT=function(e,t){var n={target:e,props:[],revert:_T,save:hT};return e._gsap||Iw.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},yT,bT=function(e,t){var n=Rw.createElementNS?Rw.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):Rw.createElement(e);return n&&n.style?n:Rw.createElement(e)},xT=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(Xw,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,CT(n)||n,1)||``},ST=`O,Moz,ms,Ms,Webkit`.split(`,`),CT=function(e,t,n){var r=(t||Vw).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(ST[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?ST[i]:``)+e},wT=function(){Ww()&&window.document&&(Lw=window,Rw=Lw.document,zw=Rw.documentElement,Vw=bT(`div`)||{style:{}},bT(`div`),pT=CT(pT),mT=pT+`Origin`,Vw.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,yT=!!CT(`perspective`),Uw=Iw.core.reverting,Bw=1)},TT=function(e){var t=e.ownerSVGElement,n=bT(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),zw.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),zw.removeChild(n),i},ET=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},DT=function(e){var t,n;try{t=e.getBBox()}catch{t=TT(e),n=1}return t&&(t.width||t.height)||n||(t=TT(e)),t&&!t.width&&!t.x&&!t.y?{x:+ET(e,[`x`,`cx`,`x1`])||0,y:+ET(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},OT=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!DT(e))},kT=function(e,t){if(t){var n=e.style,r;t in Gw&&t!==mT&&(t=pT),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(Xw,`-$1`).toLowerCase())):n.removeAttribute(t)}},AT=function(e,t,n,r,i,a){var o=new Sw(e._pt,t,n,0,1,a?oT:aT);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},jT={deg:1,rad:1,turn:1},MT={grid:1,flex:1},NT=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=Vw.style,c=Zw.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||jT[i]||jT[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&OT(t),(p||o===`%`)&&(Gw[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],oS(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),h&&h!==Rw&&h.appendChild||(h=Rw.body),g=h._gsap,g&&p&&g.width&&c&&g.time===MC.time&&!g.uncache)return oS(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:kT(t,n)}else(p||o===`%`)&&!MT[xT(h,`display`)]&&(s.position=xT(t,`position`)),h===t&&(s.position=`static`),h.appendChild(Vw),m=Vw[u],h.removeChild(Vw),s.position=`absolute`;return c&&p&&(g=rS(h),g.time=MC.time,g.width=h[u]),oS(f?m*a/d:m&&a?d/m*a:0)},PT=function(e,t,n,r){var i;return Bw||wT(),t in $w&&t!==`transform`&&(t=$w[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),Gw[t]&&t!==`transform`?(i=KT(e,r),i=t===`transformOrigin`?i.svg?i.origin:qT(xT(e,mT))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=zT[t]&&zT[t](e,t,n)||xT(e,t)||iS(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?NT(e,t,i,n)+n:i},FT=function(e,t,n,r){if(!n||n===`none`){var i=CT(t,e,1),a=i&&xT(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=xT(e,`borderTopColor`))}var o=new Sw(this._pt,e.style,t,0,1,gw),s=0,c=0,l,u,d,f,p,m,h,g,_,v,y,b;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=xT(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(m=e.style[t],e.style[t]=r,r=xT(e,t)||r,m?e.style[t]=m:kT(e,t)),l=[n,r],AC(l),n=l[0],r=l[1],d=n.match(Dx)||[],b=r.match(Dx)||[],b.length){for(;u=Dx.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,y=m.substr((f+``).length),h.charAt(1)===`=`&&(h=cS(f,h)+y),g=parseFloat(h),v=h.substr((g+``).length),s=Dx.lastIndex-v.length,v||(v=v||ex.units[t]||y,s===r.length&&(r+=v,o.e+=v)),y!==v&&(f=NT(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?oT:aT;return kx.test(r)&&(o.e=0),this._pt=o,o},IT={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},LT=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=IT[n]||n,t[1]=IT[r]||r,t.join(` `)},RT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],Gw[o]&&(s=1,o=o===`transformOrigin`?mT:pT),kT(n,o);s&&(kT(n,pT),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,KT(n,1),a.uncache=1,gT(r)))}},zT={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new Sw(e._pt,t,n,0,0,RT);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},BT=[1,0,0,1,0,0],VT={},HT=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},UT=function(e){var t=xT(e,pT);return HT(t)?BT:t.substr(7).match(Ex).map(oS)},WT=function(e,t){var n=e._gsap||rS(e),r=e.style,i=UT(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?BT:i):(i===BT&&!e.offsetParent&&e!==zw&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,a&&(e.offsetParent||e.getBoundingClientRect().width)||(c=1,o=e.nextElementSibling,zw.appendChild(e)),i=UT(e),s?r.display=s:kT(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):zw.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},GT=function(e,t,n,r,i,a){var o=e._gsap,s=i||WT(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==BT&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=DT(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[mT]=`0px 0px`,a&&(AT(a,o,`xOrigin`,c,y),AT(a,o,`yOrigin`,l,b),AT(a,o,`xOffset`,u,o.xOffset),AT(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},KT=function(e,t){var n=e._gsap||new KC(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=xT(e,mT)||`0`,l=u=d=m=h=g=_=v=y=0,u,d,f=p=1,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,ee,P,te,ne,re,ie,ae;return n.svg=!!(e.getCTM&&OT(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[pT]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[pT]===`none`?``:s[pT])),r.scale=r.rotate=r.translate=`none`),S=WT(e,n.svg),n.svg&&(n.uncache?(N=e.getBBox(),c=n.xOrigin-N.x+`px `+(n.yOrigin-N.y)+`px`,M=``):M=!t&&e.getAttribute(`data-svg-origin`),GT(e,M||c,!!M||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,x=n.yOrigin||0,S!==BT&&(E=S[0],D=S[1],O=S[2],k=S[3],l=A=S[4],u=j=S[5],S.length===6?(f=Math.sqrt(E*E+D*D),p=Math.sqrt(k*k+O*O),m=E||D?Jw(D,E)*Kw:0,_=O||k?Jw(O,k)*Kw+m:0,_&&(p*=Math.abs(Math.cos(_*qw))),n.svg&&(l-=b-(b*E+x*O),u-=x-(b*D+x*k))):(ae=S[6],re=S[7],P=S[8],te=S[9],ne=S[10],ie=S[11],l=S[12],u=S[13],d=S[14],C=Jw(ae,ne),h=C*Kw,C&&(w=Math.cos(-C),T=Math.sin(-C),M=A*w+P*T,N=j*w+te*T,ee=ae*w+ne*T,P=A*-T+P*w,te=j*-T+te*w,ne=ae*-T+ne*w,ie=re*-T+ie*w,A=M,j=N,ae=ee),C=Jw(-O,ne),g=C*Kw,C&&(w=Math.cos(-C),T=Math.sin(-C),M=E*w-P*T,N=D*w-te*T,ee=O*w-ne*T,ie=k*T+ie*w,E=M,D=N,O=ee),C=Jw(D,E),m=C*Kw,C&&(w=Math.cos(C),T=Math.sin(C),M=E*w+D*T,N=A*w+j*T,D=D*w-E*T,j=j*w-A*T,E=M,A=N),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=oS(Math.sqrt(E*E+D*D+O*O)),p=oS(Math.sqrt(j*j+ae*ae)),C=Jw(A,j),_=Math.abs(C)>2e-4?C*Kw:0,y=ie?1/(ie<0?-ie:ie):0),n.svg&&(M=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!HT(xT(e,pT)),M&&e.setAttribute(`transform`,M))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t=t||n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=oS(f),n.scaleY=oS(p),n.rotation=oS(m)+o,n.rotationX=oS(h)+o,n.rotationY=oS(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[mT]=qT(c)),n.xOffset=n.yOffset=0,n.force3D=ex.force3D,n.renderTransform=n.svg?eE:yT?$T:YT,n.uncache=0,n},qT=function(e){return(e=e.split(` `))[0]+` `+e[1]},JT=function(e,t,n){var r=YS(t);return oS(parseFloat(t)+parseFloat(NT(e,`x`,n+`px`,r)))+r},YT=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,$T(e,t)},XT=`0deg`,ZT=`0px`,QT=`) `,$T=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==XT||l!==XT)){var x=parseFloat(l)*qw,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*qw,w=Math.cos(x),a=JT(_,a,S*w*-v),o=JT(_,o,-Math.sin(x)*-v),s=JT(_,s,C*w*-v+v)}h!==ZT&&(y+=`perspective(`+h+QT),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==ZT||o!==ZT||s!==ZT)&&(y+=s!==ZT||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+QT),c!==XT&&(y+=`rotate(`+c+QT),l!==XT&&(y+=`rotateY(`+l+QT),u!==XT&&(y+=`rotateX(`+u+QT),(d!==XT||f!==XT)&&(y+=`skew(`+d+`, `+f+QT),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+QT),_.style[pT]=y||`translate(0, 0)`},eE=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=qw,c*=qw,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=qw,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=oS(b),x=oS(x),S=oS(S),C=oS(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=NT(f,`x`,a,`px`),y=NT(f,`y`,o,`px`)),(p||m||h||g)&&(v=oS(v+p-(p*b+m*S)+h),y=oS(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=oS(v+r/100*w.width),y=oS(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[pT]=w)},tE=function(e,t,n,r,i){var a=360,o=px(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?Kw:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*Yw)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*Yw)%a-~~(s/a)*a)),e._pt=u=new Sw(e._pt,t,n,r,s,tT),u.e=c,u.u=`deg`,e._props.push(n),u},nE=function(e,t){for(var n in t)e[n]=t[n];return e},rE=function(e,t,n){var r=nE({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[pT]=t,o=KT(n,1),kT(n,pT),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[pT],a[pT]=t,o=KT(n,1),a[pT]=c),Gw)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=YS(c),p=YS(l),u=f===p?parseFloat(c):NT(n,s,c,p),d=parseFloat(l),e._pt=new Sw(e._pt,o,s,u,d-u,eT),e._pt.u=p||0,e._props.push(s));nE(o,r)};aS(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});zT[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return PT(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var iE={name:`css`,register:wT,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;for(m in Bw||wT(),this.styles=this.styles||vT(e),C=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(Zx[m]&&QC(m,t,n,r,e,i)))){if(f=typeof l,p=zT[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=pC(l)),p)p(this,e,m,l,n)&&(S=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,OC.lastIndex=0,OC.test(c)||(h=YS(c),g=YS(l),g?h!==g&&(c=NT(e,m,c,g)+g):h&&(l+=h)),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),C.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],px(c)&&~c.indexOf(`random(`)&&(c=pC(c)),YS(c+``)||c===`auto`||(c+=ex.units[m]||YS(PT(e,m))||``),(c+``).charAt(1)===`=`&&(c=PT(e,m))):c=PT(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in $w&&(m===`autoAlpha`&&(d===1&&PT(e,`visibility`)===`hidden`&&u&&(d=0),C.push(`visibility`,0,o.visibility),AT(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=$w[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in Gw,v){if(this.styles.save(m),w=l,f===`string`&&l.substring(0,6)===`var(--`){if(l=xT(e,l.substring(4,l.indexOf(`)`))),l.substring(0,5)===`calc(`){var T=e.style.perspective;e.style.perspective=l,l=xT(e,`perspective`),T?e.style.perspective=T:kT(e,`perspective`)}u=parseFloat(l)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||KT(e,t.parseTransform),x=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new Sw(this._pt,o,pT,0,1,b.renderTransform,b,0,-1),y.dep=1),m===`scale`)this._pt=new Sw(this._pt,b,`scaleY`,b.scaleY,(_?cS(b.scaleY,_+u):u)-b.scaleY||0,eT),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){C.push(mT,0,o[mT]),l=LT(l),b.svg?GT(e,l,0,x,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==b.zOrigin&&AT(this,b,`zOrigin`,b.zOrigin,g),AT(this,o,m,qT(c),qT(l)));continue}else if(m===`svgOrigin`){GT(e,l,1,x,0,this);continue}else if(m in VT){tE(this,b,m,d,_?cS(d,_+l):l);continue}else if(m===`smoothOrigin`){AT(this,b,`smooth`,b.smooth,l);continue}else if(m===`force3D`){b[m]=l;continue}else if(m===`transform`){rE(this,l,e);continue}}else m in o||(m=CT(m)||m);if(v||(u||u===0)&&(d||d===0)&&!Qw.test(l)&&m in o)h=(c+``).substr((d+``).length),u||(u=0),g=YS(l)||(m in ex.units?ex.units[m]:h),h!==g&&(d=NT(e,m,c,g)),this._pt=new Sw(this._pt,v?b:o,m,d,(_?cS(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?iT:eT),this._pt.u=g||0,v&&w!==l?(this._pt.b=c,this._pt.e=w,this._pt.r=rT):h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=nT);else if(m in o)FT.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){Bx(m,l);continue}v||(m in o?C.push(m,0,o[m]):typeof e[m]==`function`?C.push(m,2,e[m]()):C.push(m,1,c||e[m])),a.push(m)}}S&&xw(this)},render:function(e,t){if(t.tween._time||!Uw())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:PT,aliases:$w,getSetter:function(e,t,n){var r=$w[t];return r&&r.indexOf(`,`)<0&&(t=r),t in Gw&&t!==mT&&(e._gsap.x||PT(e,`x`))?n&&Hw===n?t===`scale`?uT:lT:(Hw=n||{})&&(t===`scale`?dT:fT):e.style&&!gx(e.style[t])?sT:~t.indexOf(`-`)?cT:pw(e,t)},core:{_removeProperty:kT,_getMatrix:WT}};Iw.utils.checkPrefix=CT,Iw.core.getStyleSaver=vT,(function(e,t,n,r){var i=aS(e+`,`+t+`,`+n,function(e){Gw[e]=1});aS(t,function(e){ex.units[e]=`deg`,VT[e]=1}),$w[i[13]]=e+`,`+t,aS(r,function(e){var t=e.split(`:`);$w[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),aS(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){ex.units[e]=`px`}),Iw.registerPlugin(iE);var aE=Iw.registerPlugin(iE)||Iw;aE.core.Tween;var oE=(e,t,n)=>Math.min(n,Math.max(t,e)),sE=(e,t,n)=>e+(t-e)*n,cE=(e,t,n)=>{let r=oE((n-e)/(t-e),0,1);return r*r*(3-2*r)};function lE(e){let t=e>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967295)}var uE=54;function dE(e){return new J(e.x,e.y,e.z)}function fE(e,t,n,r){let i=1-r;return new J(i*i*e.x+2*i*r*t.x+r*r*n.x,i*i*e.y+2*i*r*t.y+r*r*n.y,i*i*e.z+2*i*r*t.z+r*r*n.z)}var pE=class{constructor(e,t,n){W(this,`camera`,void 0),W(this,`controls`,void 0),W(this,`onTransitionChange`,void 0),W(this,`activeTween`,null),W(this,`reducedMotion`,void 0),this.reducedMotion=n,this.camera=new Lg(35,t,.1,420),this.camera.position.set(0,62,62),this.controls=new zb(this.camera,e),this.controls.target.set(0,0,0),this.controls.enableRotate=!1,this.controls.enableDamping=!0,this.controls.dampingFactor=.075,this.controls.enablePan=!0,this.controls.screenSpacePanning=!1,this.controls.panSpeed=.85,this.controls.zoomSpeed=.9,this.controls.minDistance=16,this.controls.maxDistance=138,this.controls.minPolarAngle=Math.PI*.29,this.controls.maxPolarAngle=Math.PI*.42,this.controls.mouseButtons={LEFT:lu.PAN,MIDDLE:lu.DOLLY,RIGHT:lu.PAN},this.controls.touches={ONE:uu.PAN,TWO:uu.DOLLY_PAN},this.controls.update()}get isTransitioning(){return this.activeTween!==null}update(){this.controls.update(),this.controls.target.x=oE(this.controls.target.x,-54,uE),this.controls.target.z=oE(this.controls.target.z,-54,uE),this.controls.target.y=oE(this.controls.target.y,0,8)}beginTransition(){this.controls.enabled=!1,this.onTransitionChange?.(!0)}endTransition(){this.activeTween=null,this.controls.enabled=!0,this.controls.update(),this.onTransitionChange?.(!1)}cancelTransition(){this.activeTween&&(this.activeTween.kill(),this.endTransition())}animateTo(e,t=1.8){this.cancelTransition();let n=dE(e.position),r=dE(e.target);if(this.reducedMotion){this.camera.position.copy(n),this.controls.target.copy(r),this.controls.update();return}let i=this.camera.position.clone(),a=this.controls.target.clone(),o=i.clone().add(n).multiplyScalar(.5);o.y=Math.max(i.y,n.y)+Math.min(16,i.distanceTo(n)*.16);let s={value:0};this.beginTransition(),this.activeTween=aE.to(s,{value:1,duration:t,ease:`power3.inOut`,onUpdate:()=>{this.camera.position.copy(fE(i,o,n,s.value)),this.controls.target.lerpVectors(a,r,s.value),this.camera.lookAt(this.controls.target)},onComplete:()=>{this.endTransition()}})}focusRegion(e){this.animateTo({position:e.cameraPosition,target:e.cameraTarget},1.9)}focusPoint(e,t=22){let n=dE(e),r=t*.72;this.animateTo({position:{x:n.x,y:n.y+r,z:n.z+r},target:{x:n.x,y:n.y,z:n.z}},1.5)}zoomBy(e){let t=this.camera.position.clone().sub(this.controls.target),n=oE(t.length()*e,this.controls.minDistance,this.controls.maxDistance);t.setLength(n),this.camera.position.copy(this.controls.target).add(t),this.controls.update()}panBy(e,t){this.cancelTransition();let n=new J;this.camera.getWorldDirection(n),n.y=0,n.normalize();let r=new J().crossVectors(n,new J(0,1,0)).normalize();this.controls.target.addScaledVector(r,e),this.controls.target.addScaledVector(n,-t),this.camera.position.addScaledVector(r,e),this.camera.position.addScaledVector(n,-t),this.controls.update()}resize(e,t){this.camera.aspect=e/Math.max(t,1),this.camera.updateProjectionMatrix()}dispose(){this.cancelTransition(),this.controls.dispose()}},mE={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},hE=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},gE=new Rg(-1,1,1,-1,0,1),_E=new class extends Em{constructor(){super(),this.setAttribute(`position`,new mm([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new mm([0,2,0,0,2,0],2))}},vE=class{constructor(e){this._mesh=new Xm(_E,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,gE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},yE=class extends hE{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof $h?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xh.clone(e.uniforms),this.material=new $h({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new vE(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},bE=class extends hE{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},xE=class extends hE{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},SE=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new q);this._width=n.width,this._height=n.height,t=new Kf(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Du}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yE(mE),this.copyPass.material.blending=0,this.timer=new Kg}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}bE!==void 0&&(r instanceof bE?n=!0:r instanceof xE&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},CE=class extends hE{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new X}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},wE={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new X(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},TE=class e extends hE{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new q(256,256):new q(e.x,e.y),this.clearColor=new X(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Kf(i,a,{type:Du,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Kf(i,a,{type:Du,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Kf(i,a,{type:Du,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=wE;this.highPassUniforms=Xh.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $h({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new q(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Xh.clone(mE.uniforms),this.blendMaterial=new $h({uniforms:this.copyUniforms,vertexShader:mE.vertexShader,fragmentShader:mE.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new X,this._oldClearAlpha=1,this._basic=new Rm,this._fsQuad=new vE(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new q(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new $h({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new q(.5,.5)},direction:{value:new q(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new $h({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};TE.BlurDirectionX=new q(1,0),TE.BlurDirectionY=new q(0,1);var EE={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},DE=class extends hE{constructor(){super(),this.isOutputPass=!0,this.uniforms=Xh.clone(EE.uniforms),this.material=new eg({name:EE.name,uniforms:this.uniforms,vertexShader:EE.vertexShader,fragmentShader:EE.fragmentShader}),this._fsQuad=new vE(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Nf.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},OE=class{constructor(e,t){W(this,`renderer`,void 0),W(this,`composer`,null),W(this,`bloomPass`,null),W(this,`width`,1),W(this,`height`,1),this.renderer=new wb({canvas:e,antialias:t.tier!==`low`,alpha:!1,powerPreference:`high-performance`,stencil:!1}),this.renderer.outputColorSpace=Nd,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.02,this.renderer.shadowMap.enabled=t.shadows,this.renderer.shadowMap.type=1,this.renderer.setPixelRatio(t.pixelRatio)}setupPostProcessing(e,t,n){n.bloom&&(this.composer=new SE(this.renderer),this.composer.addPass(new CE(e,t)),this.bloomPass=new TE(new q(this.width,this.height),.62,.55,.86),this.composer.addPass(this.bloomPass),this.composer.addPass(new DE),this.composer.setSize(this.width,this.height))}setSize(e,t,n){this.width=Math.max(e,1),this.height=Math.max(t,1),this.renderer.setPixelRatio(n.pixelRatio),this.renderer.setSize(this.width,this.height,!1),this.composer?.setSize(this.width,this.height)}render(e,t){this.composer?this.composer.render():this.renderer.render(e,t)}dispose(){this.composer?.dispose(),this.composer=null,this.bloomPass=null,this.renderer.dispose(),this.renderer.forceContextLoss()}},kE=class extends Sp{constructor(e=document.createElement(`div`)){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position=`absolute`,this.element.style.userSelect=`none`,this.element.setAttribute(`draggable`,!1),this.center=new q(.5,.5),this.rotation2D=0,this.addEventListener(`removed`,function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}},AE=new J,jE=new Yf,ME=new Yf,NE=new J,PE=new J,FE=class{constructor(e={}){let t=this,n,r,i,a,o={objects:new WeakMap},s=e.element===void 0?document.createElement(`div`):e.element;s.style.overflow=`hidden`,this.domElement=s,this.sortObjects=!0,this.getSize=function(){return{width:n,height:r}},this.render=function(e,t){e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),jE.copy(t.matrixWorldInverse),ME.multiplyMatrices(t.projectionMatrix,jE),l(e,e,t),this.sortObjects&&f(e)},this.setSize=function(e,t){n=e,r=t,i=n/2,a=r/2,s.style.width=e+`px`,s.style.height=t+`px`};function c(e){e.isCSS2DObject&&(e.element.style.display=`none`);for(let t=0,n=e.children.length;t<n;t++)c(e.children[t])}function l(e,n,r){if(e.visible===!1)c(e);else{if(e.isCSS2DObject){AE.setFromMatrixPosition(e.matrixWorld),AE.applyMatrix4(ME);let c=AE.z>=-1&&AE.z<=1&&e.layers.test(r.layers)===!0,l=e.element;if(l.style.display=c===!0?``:`none`,c===!0){e.onBeforeRender(t,n,r);let o=100*e.center.x,c=100*e.center.y;l.style.transformOrigin=`${o}% ${c}%`;let u=-e.rotation2D,d=AE.x*i+i,f=-AE.y*a+a;l.style.transform=`translate(${-o}%, ${-c}%) translate(${d}px, ${f}px) rotate(${u}rad)`,l.parentNode!==s&&s.appendChild(l),e.onAfterRender(t,n,r)}let d={distanceToCameraSquared:u(r,e)};o.objects.set(e,d)}for(let t=0,i=e.children.length;t<i;t++)l(e.children[t],n,r)}}function u(e,t){return NE.setFromMatrixPosition(e.matrixWorld),PE.setFromMatrixPosition(t.matrixWorld),NE.distanceToSquared(PE)}function d(e){let t=[];return e.traverseVisible(function(e){e.isCSS2DObject&&t.push(e)}),t}function f(e){let t=d(e).sort(function(e,t){return e.renderOrder===t.renderOrder?o.objects.get(e).distanceToCameraSquared-o.objects.get(t).distanceToCameraSquared:t.renderOrder-e.renderOrder}),n=t.length;for(let e=0,r=t.length;e<r;e++)t[e].element.style.zIndex=n-e}}},IE=[{id:`business-web`,from:`BUSINESS`,to:`WEB`,bend:6.5,width:.95},{id:`business-mobile`,from:`BUSINESS`,to:`MOBILE`,bend:-5.4,width:.95},{id:`business-systems`,from:`BUSINESS`,to:`SYSTEMS`,bend:5.8,width:.95},{id:`business-experience`,from:`BUSINESS`,to:`EXPERIENCE`,bend:-6.2,width:.95},{id:`web-experience`,from:`WEB`,to:`EXPERIENCE`,bend:4.4,width:.72},{id:`mobile-systems`,from:`MOBILE`,to:`SYSTEMS`,bend:-4.8,width:.72}];function LE(e){let t=Il(e.from),n=Il(e.to);if(!t||!n)return null;let r=[t.position.x,t.position.z],i=[n.position.x,n.position.z],a=i[0]-r[0],o=i[1]-r[1],s=Math.hypot(a,o)||1,c=-o/s,l=a/s;return{start:r,control:[(r[0]+i[0])/2+c*e.bend,(r[1]+i[1])/2+l*e.bend],end:i}}function RE(e,t=32){let n=LE(e);if(!n)return[];let r=Math.max(2,Math.round(t)),i=[];for(let e=0;e<=r;e+=1){let t=e/r,a=1-t;i.push([a*a*n.start[0]+2*a*t*n.control[0]+t*t*n.end[0],a*a*n.start[1]+2*a*t*n.control[1]+t*t*n.end[1]])}return i}var zE=1.35;function BE(e,t){let n=xl(e*.019+13.7,t*.019+7.3,4)-.5,r=xl(e*.048+3.1,t*.048+19.4,3)-.5,i=xl(e*.14+41.2,t*.14+9.8,2)-.5,a=-.75*Math.exp(-(e*e+t*t)/3400),o=1-Math.abs(xl(e*.024+60.3,t*.024+21.7,4)*2-1),s=1-Math.abs(xl(e*.011+5.2,t*.011+88.1,3)*2-1),c=o*.66+s*.34,l=cE(28,67,Math.hypot(e,t)),u=oE((c-.4)/.6,0,1)**1.65*l,d=cE(.56,.82,xl(e*.042+90.5,t*.042+10.8,3))*2.1,f=zE+n*3.2+r*.55+a;return{raw:zE+n*4.2+r*1.05+i*.2+a+u*15.5-d,rolling:f}}function VE(e,t){return BE(e,t).raw}var HE=Nl.map(e=>({x:e.position.x,z:e.position.z,target:VE(e.position.x,e.position.z)+.12,inner:6.5,outer:15.5})),UE=Vl.map(e=>({x:e.position.x,z:e.position.z,target:VE(e.position.x,e.position.z)+.14,inner:e.radius*.58,outer:e.radius+2.2})),WE=IE.map(e=>RE(e,36)).filter(e=>e.length>1);function GE(e,t){let n=1/0;for(let r of WE)for(let i=0;i<r.length-1;i+=1){let[a,o]=r[i],[s,c]=r[i+1],l=El(e,t,a,o,s,c);l<n&&(n=l)}return n}function KE(e,t){return 1-cE(1.6,8.5,GE(e,t))}function qE(e,t,n){let r=0,i=0;for(let a of e){let e=Math.hypot(t-a.x,n-a.z),o=1-cE(a.inner,a.outer,e);o>r&&(r=o,i=a.target)}return{weight:r,target:i}}function JE(e,t){let{raw:n,rolling:r}=BE(e,t),i=n,a=qE(HE,e,t);a.weight>0&&(i=sE(i,a.target,a.weight*.84));let o=KE(e,t);o>0&&(i=sE(i,r,o*.72));let s=qE(UE,e,t);return s.weight>0&&(i=sE(i,s.target,s.weight*.92)),i}function YE(e,t){let n=.65,r=JE(e-n,t),i=JE(e+n,t),a=JE(e,t-n),o=JE(e,t+n);return Math.hypot((i-r)/(n*2),(o-a)/(n*2))}function XE(e,t,n=0){for(let r of HE)if(Math.hypot(e-r.x,t-r.z)<=r.inner+n)return!0;let r=Math.min(n,2.4);for(let n of Vl)if(Math.hypot(e-n.position.x,t-n.position.z)<=n.radius+r)return!0;return!1}function ZE(e,t,n=2.2){return GE(e,t)<=n}var QE=class{constructor(e,t,n,r,i,a=!1){W(this,`scene`,void 0),W(this,`instant`,void 0),W(this,`renderer`,void 0),W(this,`regionLabels`,new Map),W(this,`cityLabels`,new Map),W(this,`projectLabels`,new Map),W(this,`selectedRegionId`,null),W(this,`selectedCityId`,null),this.scene=t,this.instant=a,this.renderer=new FE,this.renderer.domElement.className=`label-layer`,Object.assign(this.renderer.domElement.style,{position:`absolute`,inset:`0`,pointerEvents:`none`,overflow:`hidden`}),e.appendChild(this.renderer.domElement);for(let e of n){let t=document.createElement(`div`);t.className=`region-name`,t.textContent=e.name,t.style.opacity=this.instant?`1`:`0`;let n=new kE(t);n.position.set(e.position.x,JE(e.position.x,e.position.z)+2.6,e.position.z),this.scene.add(n),this.regionLabels.set(e.id,{regionId:e.id,object:n,element:t})}for(let e of r){let t=document.createElement(`div`);t.className=`city-name`,t.textContent=e.name,t.style.opacity=`0`;let n=new kE(t);n.position.set(e.position.x,JE(e.position.x,e.position.z)+8,e.position.z),n.visible=!1,this.scene.add(n),this.cityLabels.set(e.id,{cityId:e.id,regionId:e.regionId,object:n,element:t})}for(let e of i){let t=n.find(t=>t.id===e.regionId);if(!t)continue;let r=document.createElement(`div`);r.className=`marker-label`,r.textContent=e.title,r.style.opacity=`0`,r.style.transition=`opacity 220ms ease`;let i=new kE(r);i.position.set(t.position.x,JE(t.position.x,t.position.z)+3.15,t.position.z),i.visible=!1,this.scene.add(i),this.projectLabels.set(e.id,{projectId:e.id,object:i,element:r})}}playIntro(){this.instant||[...this.regionLabels.values()].forEach((e,t)=>{aE.fromTo(e.element,{opacity:0,y:6},{opacity:1,y:0,duration:.8,delay:1+t*.1,ease:`power2.out`})})}setProjectLabelsVisible(e){for(let t of this.projectLabels.values())t.object.visible=e,e||(t.element.style.opacity=`0`)}setHoveredProject(e){for(let[t,n]of this.projectLabels){let r=t===e;n.object.visible=r,n.element.style.opacity=r?`1`:`0`}}setSelectedRegion(e){this.selectedRegionId=e,this.selectedCityId=null;for(let[t,n]of this.regionLabels){let r=e===null||t===e;aE.to(n.element,{opacity:r?e===null?1:.95:.25,duration:.4,overwrite:!0})}for(let t of this.cityLabels.values()){let n=e!==null&&t.regionId===e;t.object.visible=n,aE.to(t.element,{opacity:n?.82:0,duration:n?.45:.25,overwrite:!0})}}setSelectedCity(e){this.selectedCityId=e;for(let e of this.cityLabels.values()){let t=this.selectedRegionId!==null&&e.regionId===this.selectedRegionId;e.object.visible=t;let n=t?this.selectedCityId===null?.82:e.cityId===this.selectedCityId?1:.42:0;aE.to(e.element,{opacity:n,duration:t?.32:.2,overwrite:!0})}}setSelectedProject(e,t){for(let[n,r]of this.projectLabels){let i=n===e;r.object.visible=i,r.element.style.opacity=i?`1`:`0`,i&&t&&(r.element.textContent=t)}}updateProjectLabelPosition(e,t){let n=this.projectLabels.get(e);n&&n.object.position.copy(t).add(new J(0,1.15,0))}resize(e,t){this.renderer.setSize(e,t)}render(e){this.renderer.render(this.scene,e)}dispose(){for(let e of this.regionLabels.values())this.scene.remove(e.object),e.element.remove();for(let e of this.projectLabels.values())this.scene.remove(e.object),e.element.remove();for(let e of this.cityLabels.values())this.scene.remove(e.object),e.element.remove();this.regionLabels.clear(),this.cityLabels.clear(),this.projectLabels.clear(),this.renderer.domElement.remove()}};function $E(e){let t=new Hh(150,150,e,e);t.rotateX(-Math.PI/2);let n=t.attributes.position;for(let e=0;e<n.count;e+=1){let t=n.getX(e),r=n.getZ(e);n.setY(e,JE(t,r))}return n.needsUpdate=!0,t.computeVertexNormals(),t.computeBoundingSphere(),t}var eD=`varying vec3 vWorldPosition;
varying vec3 vWorldNormal;
varying float vHeight;

void main() {
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;
  vWorldNormal = normalize(mat3(modelMatrix) * normal);
  vHeight = worldPosition.y;

  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`,tD=`uniform vec3 uGrassLow;
uniform vec3 uGrassHigh;
uniform vec3 uGrassDry;
uniform vec3 uDirt;
uniform vec3 uRock;
uniform vec3 uContourColor;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform vec3 uSunDirection;
uniform float uTime;

varying vec3 vWorldPosition;
varying vec3 vWorldNormal;
varying float vHeight;

float terrainHash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float terrainNoise(vec2 p) {
  vec2 cell = floor(p);
  vec2 local = fract(p);
  local = local * local * (3.0 - 2.0 * local);

  float a = terrainHash(cell);
  float b = terrainHash(cell + vec2(1.0, 0.0));
  float c = terrainHash(cell + vec2(0.0, 1.0));
  float d = terrainHash(cell + vec2(1.0, 1.0));

  return mix(mix(a, b, local.x), mix(c, d, local.x), local.y);
}

float fbmTerrain(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int index = 0; index < 4; index += 1) {
    value += terrainNoise(p) * amplitude;
    p *= 2.03;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec3 normal = normalize(vWorldNormal);
  float diffuse = max(dot(normal, normalize(uSunDirection)), 0.0);
  float slope = 1.0 - clamp(normal.y, 0.0, 1.0);

  float broad = fbmTerrain(vWorldPosition.xz * 0.045);
  float detail = fbmTerrain(vWorldPosition.xz * 0.22);
  float heightMix = smoothstep(0.5, 13.0, vHeight);
  float dryMix = smoothstep(0.55, 0.92, broad) * 0.45;

  vec3 grass = mix(uGrassLow, uGrassHigh, clamp(heightMix * 0.7 + broad * 0.45, 0.0, 1.0));
  grass = mix(grass, uGrassDry, dryMix);

  float dirtMask = smoothstep(0.34, 0.68, slope) * 0.75 + smoothstep(0.68, 0.9, detail) * 0.08;
  vec3 color = mix(grass, uDirt, clamp(dirtMask, 0.0, 1.0));

  float rockMask = smoothstep(0.5, 0.86, slope) + smoothstep(10.5, 17.0, vHeight) * 0.75;
  color = mix(color, uRock, clamp(rockMask, 0.0, 1.0));

  color *= 0.52 + diffuse * 0.72;
  color += vec3(0.03, 0.045, 0.02) * broad;

  float contour = abs(fract(vHeight * 1.35) - 0.5);
  contour = 1.0 - smoothstep(0.0, 0.055, contour);
  color += uContourColor * contour * 0.12 * (1.0 - slope);

  float distanceToCamera = distance(cameraPosition, vWorldPosition);
  float fogFactor = smoothstep(uFogNear, uFogFar, distanceToCamera);
  color = mix(color, uFogColor, fogFactor);

  gl_FragColor = vec4(color, 1.0);
}
`;function nD(){return new $h({vertexShader:eD,fragmentShader:tD,uniforms:{uGrassLow:{value:new X(`#4d7f3f`)},uGrassHigh:{value:new X(`#7da85a`)},uGrassDry:{value:new X(`#9a9a5f`)},uDirt:{value:new X(`#7b6749`)},uRock:{value:new X(`#8c877c`)},uContourColor:{value:new X(`#3c6537`)},uFogColor:{value:new X(Eb)},uFogNear:{value:112},uFogFar:{value:255},uSunDirection:{value:new J(Db.x,Db.y,Db.z).normalize()},uTime:{value:0}}})}var rD=class{constructor(e){W(this,`mesh`,void 0),W(this,`material`,void 0);let t=$E(e.terrainSegments);this.material=nD(),this.mesh=new Xm(t,this.material),this.mesh.name=`terrain-surface`,this.mesh.receiveShadow=e.shadows}update(e){this.material.uniforms.uTime.value=e}dispose(){this.mesh.geometry.dispose(),this.material.dispose()}},iD=`varying vec3 vWorldPosition;
varying vec3 vWorldNormal;
varying vec3 vLocalPosition;

void main() {
  vLocalPosition = position;
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;
  vWorldNormal = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`,aD=`uniform vec3 uColor;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;
uniform float uTime;
uniform float uHover;
uniform float uSelected;
uniform float uDim;
uniform float uIntro;
uniform float uOpacity;

varying vec3 vWorldPosition;
varying vec3 vWorldNormal;
varying vec3 vLocalPosition;

float regionHash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float regionNoise(vec2 p) {
  vec2 cell = floor(p);
  vec2 local = fract(p);
  local = local * local * (3.0 - 2.0 * local);

  float a = regionHash(cell);
  float b = regionHash(cell + vec2(1.0, 0.0));
  float c = regionHash(cell + vec2(0.0, 1.0));
  float d = regionHash(cell + vec2(1.0, 1.0));

  return mix(mix(a, b, local.x), mix(c, d, local.x), local.y);
}

void main() {
  vec3 normal = normalize(vWorldNormal);
  vec3 lightDirection = normalize(vec3(-0.42, 0.82, 0.38));
  float diffuse = max(dot(normal, lightDirection), 0.0);
  float topMask = smoothstep(0.5, 1.0, normal.y);

  float variation = regionNoise(vWorldPosition.xz * 0.18) * 0.65 +
    regionNoise(vWorldPosition.xz * 0.55) * 0.35;
  vec3 natural = mix(vec3(0.2, 0.33, 0.17), vec3(0.38, 0.52, 0.27), variation);

  float identity = 0.36 + uHover * 0.12 + uSelected * 0.16;
  vec3 color = mix(natural, uColor, identity);
  color += uColor * (uHover * 0.16 + uSelected * 0.24) * (0.45 + variation * 0.55);
  color *= 0.68 + diffuse * 0.48 + topMask * 0.12;
  color *= 1.0 - uDim * 0.45;

  float alpha = (uOpacity + uHover * 0.1 + uSelected * 0.14) *
    (0.72 + topMask * 0.28) *
    clamp(uIntro, 0.0, 1.0) *
    (1.0 - uDim * 0.42);

  float distanceToCamera = distance(cameraPosition, vWorldPosition);
  float fogFactor = smoothstep(uFogNear, uFogFar, distanceToCamera);
  color = mix(color, uFogColor, fogFactor);
  alpha *= 1.0 - fogFactor * 0.65;

  gl_FragColor = vec4(color, alpha);
}
`;function oD(e){return new $h({vertexShader:iD,fragmentShader:aD,uniforms:{uColor:{value:new X(e)},uFogColor:{value:new X(Eb)},uFogNear:{value:112},uFogFar:{value:255},uTime:{value:0},uHover:{value:0},uSelected:{value:0},uDim:{value:0},uIntro:{value:1},uOpacity:{value:.5}},transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1})}var sD=.09,cD=.16,lD=.4;function uD(e,t,n,r){return JE(e.position.x+t,e.position.z+n)+r-e.position.y}function dD(e,t=1.1){let n=e.boundary,r=Sl(n),i=Math.max(r.maxX-r.minX,t),a=Math.max(r.maxZ-r.minZ,t),o=Math.max(1,Math.ceil(i/t)),s=Math.max(1,Math.ceil(a/t)),c=i/o,l=a/s,u=[],d=[];for(let t=0;t<=s;t+=1)for(let n=0;n<=o;n+=1){let i=r.minX+n*c,a=r.minZ+t*l;u.push(i,uD(e,i,a,sD),a)}for(let e=0;e<s;e+=1)for(let t=0;t<o;t+=1){if(!Cl(r.minX+(t+.5)*c,r.minZ+(e+.5)*l,n))continue;let i=e*(o+1)+t,a=i+1,s=i+o+1,u=s+1;d.push(i,s,a,a,s,u)}let f=new Em;return f.setAttribute(`position`,new mm(u,3)),f.setIndex(d),f.computeVertexNormals(),f.computeBoundingSphere(),f}function fD(e,t=lD){let n=e.boundary,r=n.length,i=[],a=[],o=[];for(let o=0;o<r;o+=1){let[s,c]=n[o],[l,u]=n[(o+1)%r],d=l-s,f=u-c,p=Math.hypot(d,f)||1,m=-f/p,h=d/p,g=t/2,_=s+m*g,v=c+h*g,y=s-m*g,b=c-h*g;i.push(_,uD(e,_,v,cD),v,y,uD(e,y,b,cD),b),a.push(o/r,0,o/r,1)}for(let e=0;e<r;e+=1){let t=(e+1)%r,n=e*2,i=t*2;o.push(n,i,n+1,n+1,i,i+1)}let s=new Em;return s.setAttribute(`position`,new mm(i,3)),s.setAttribute(`uv`,new mm(a,2)),s.setIndex(o),s.computeVertexNormals(),s.computeBoundingSphere(),s}function pD(e,t=1.1){return{surface:dD(e,t),border:fD(e)}}function mD(e){return e.tier===`high`?.9:e.tier===`medium`?1.2:1.6}function hD(e){return new X(e).lerp(new X(`#f4fbf6`),.36)}var gD=class{constructor(e,t,n=!1){W(this,`instant`,void 0),W(this,`group`,new Cp),W(this,`visuals`,new Map),W(this,`selectedId`,null),this.instant=n,this.group.name=`region-layer`;let r=mD(t);for(let i of e){let{surface:e,border:a}=pD(i,r),o=oD(i.color);o.uniforms.uIntro.value=+!!n;let s=new Xm(e,o);s.name=`region-${i.id}`,s.position.set(i.position.x,i.position.y,i.position.z),s.renderOrder=1,s.receiveShadow=t.shadows,s.userData={kind:`region`,regionId:i.id};let c=new Rm({color:hD(i.color),transparent:!0,opacity:n?.72:0,side:2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),l=new Xm(a,c);l.name=`region-border-${i.id}`,l.position.set(i.position.x,i.position.y,i.position.z),l.renderOrder=2,l.userData={kind:`region-decoration`},this.group.add(s,l),this.visuals.set(i.id,{region:i,mesh:s,material:o,border:l,borderMaterial:c})}this.group.visible=!0}get meshes(){return[...this.visuals.values()].map(e=>e.mesh)}getRegionVisual(e){if(e)return this.visuals.get(e)}setHover(e){for(let[t,n]of this.visuals){let r=t===e;aE.to(n.material.uniforms.uHover,{value:+!!r,duration:r?.28:.4,ease:`power2.out`,overwrite:!0}),aE.to(n.borderMaterial,{opacity:r?.95:this.borderOpacity(t),duration:.3,ease:`power2.out`,overwrite:!0})}}borderOpacity(e){let t=this.selectedId;return t===null?.72:t===e?.95:.18}setSelection(e){this.selectedId=e;for(let[t,n]of this.visuals){let r=t===e,i=+(e!==null&&!r);aE.to(n.material.uniforms.uSelected,{value:+!!r,duration:.55,ease:`power2.out`,overwrite:!0}),aE.to(n.material.uniforms.uDim,{value:i,duration:.55,ease:`power2.out`,overwrite:!0}),aE.to(n.borderMaterial,{opacity:this.borderOpacity(t),duration:.5,ease:`power2.out`,overwrite:!0})}}setLabelEmphasis(e){for(let[t,n]of this.visuals){let r=e===null||t===e;n.borderMaterial.color.set(r?hD(n.region.color):new X(n.region.color).lerp(new X(`#6b7c6a`),.25))}}playIntro(){this.instant||[...this.visuals.values()].forEach((e,t)=>{aE.to(e.material.uniforms.uIntro,{value:1,duration:1.1,delay:.12*t,ease:`power2.out`,overwrite:!0}),aE.to(e.borderMaterial,{opacity:.72,duration:1,delay:.12*t+.35,ease:`power2.out`,overwrite:!0})})}update(e){for(let t of this.visuals.values())t.material.uniforms.uTime.value=e}dispose(){for(let e of this.visuals.values())e.mesh.geometry.dispose(),e.material.dispose(),e.border.geometry.dispose(),e.borderMaterial.dispose(),this.group.remove(e.mesh,e.border);this.visuals.clear()}},_D=.2;function vD(e,t){let n=[],r=[],i=[],a=e.length;for(let o=0;o<a;o+=1){let[s,c]=e[o],l=e[Math.max(0,o-1)],u=e[Math.min(a-1,o+1)],d=u[0]-l[0],f=u[1]-l[1],p=Math.hypot(d,f)||1,m=-f/p*t,h=d/p*t,g=JE(s,c)+_D;if(n.push(s+m,g,c+h,s-m,g,c-h),r.push(o/(a-1),0,o/(a-1),1),o<a-1){let e=o*2;i.push(e,e+2,e+1,e+1,e+2,e+3)}}let o=new Em;return o.setAttribute(`position`,new mm(n,3)),o.setAttribute(`uv`,new mm(r,2)),o.setIndex(i),o.computeVertexNormals(),o.computeBoundingSphere(),o}var yD=class{constructor(e,t=!1){W(this,`instant`,void 0),W(this,`group`,new Cp),W(this,`visuals`,[]),this.instant=t,this.group.name=`road-layer`;let n=new Map(e.map(e=>[e.id,e]));IE.forEach((e,t)=>{let r=n.get(e.to);if(!r)return;let i=RE(e,96);if(i.length<2)return;let a=vD(i,e.width),o=new tg({color:new X(`#8b7b5e`).lerp(new X(r.color),.16),roughness:.96,metalness:0,transparent:!0,opacity:+!!this.instant,depthWrite:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),s=new Xm(a,o);s.name=`road-${e.id}`,s.receiveShadow=!0,s.renderOrder=3,s.userData={kind:`road-decoration`},this.group.add(s),this.visuals.push({link:e,mesh:s,material:o,index:t})})}playIntro(){this.instant||this.visuals.forEach((e,t)=>{aE.to(e.material,{opacity:1,duration:1.1,delay:.65+t*.08,ease:`power2.out`,overwrite:!0})})}setEmphasis(e){this.visuals.forEach((t,n)=>{let r=e===null||t.link.from===e||t.link.to===e;aE.to(t.material,{opacity:r?1:.32,duration:.45,ease:`power2.out`,overwrite:!0,delay:n*.01})})}update(e){}dispose(){for(let e of this.visuals)this.group.remove(e.mesh),e.mesh.geometry.dispose(),e.material.dispose();this.visuals.length=0}};function bD(e){return!Number.isFinite(e)||e<=34?`high`:e<=82?`medium`:`low`}function xD(e){let t=bD(e);return{tier:t,parkTrees:t!==`low`,houses:t!==`low`,offices:!0}}var SD=[`#d8d0c2`,`#c9c0ae`,`#b9b3a5`,`#cbb9a2`,`#aeb5ad`,`#d6c8b2`,`#bfb2a0`,`#c4c8c2`];function CD(e,t,n){let r=Math.cos(e.rotation),i=Math.sin(e.rotation);return[e.position.x+t*r-n*i,e.position.z+t*i+n*r]}function wD(e,t,n){return Cl(t-e.position.x,n-e.position.z,e.boundary)}function TD(e,t){return e===`BUSINESS`?t>.82?`tower`:t>.35?`office`:`house`:e===`WEB`||e===`SYSTEMS`?t>.88?`tower`:t>.42?`office`:`house`:e===`MOBILE`?t>.86?`tower`:t>.38?`office`:`house`:t>.9?`tower`:t>.5?`office`:`house`}function ED(e,t,n){return e===`tower`?sE(2.3,n===`BUSINESS`?4.4:3.5,t()):e===`office`?sE(1.2,2.05,t()):e===`house`?sE(.72,1.15,t()):.95}function DD(e,t){return(e===`BUSINESS`?5.2:4.4)+t()*.9}function OD(e,t){return`${e.toFixed(3)}:${t.toFixed(3)}`}function kD(e,t,n){return[OD(e+n,t),OD(e-n,t),OD(e,t+n),OD(e,t-n),OD(e+n,t+n),OD(e+n,t-n),OD(e-n,t+n),OD(e-n,t-n)]}function AD(e,t){let n=[];for(let r of[-t,-e,e,t])for(let i of[-t,-e,e,t])n.push({x:r,z:i});return n}function jD(e,t,n,r,i){let[a,o]=CD(e,n.x,n.z),s=!!r;return{id:r?`${e.id}-${r}`:`${e.id}-civic`,cityId:e.id,regionId:e.regionId,kind:s?`landmark`:`civic`,x:a,z:o,rotation:e.rotation+(i()-.5)*.12,width:s?1.2+i()*.28:.92+i()*.16,depth:s?.92+i()*.24:.78+i()*.14,height:s?DD(e.regionId,i):1.05+i()*.35,color:s?t.color:`#cfc4b1`,projectId:r}}function MD(e,t,n={}){let r=oE(n.density??1,0,1),i=lE(e.seed),a=e.radius*.5,o=e.radius*.67,s=o-a,c=oE(s*.42,.26,.4),l=e.radius*.3,u=e.radius-.35,d=[{x:-a,z:a},{x:a,z:a},{x:-a,z:-a},{x:a,z:-a}],f=[],p=new Set;if(e.projectIds.length>0)e.projectIds.slice(0,d.length).forEach((n,r)=>{let a=d[r];f.push(jD(e,t,a,n,i)),p.add(OD(a.x,a.z));for(let e of kD(a.x,a.z,s))p.add(e)});else{let n=d[0];f.push(jD(e,t,n,void 0,i)),p.add(OD(n.x,n.z))}let m=AD(a,o).filter(e=>!p.has(OD(e.x,e.z))),h=m.find(e=>Math.abs(e.x)===a&&Math.abs(e.z)===a)??m[0],g;if(h){let[t,n]=CD(e,h.x,h.z);g={x:t,z:n,radius:e.radius*.095},p.add(OD(h.x,h.z))}let _=[...f];for(let n of m){if(p.has(OD(n.x,n.z))||i()>.58+r*.42)continue;let a=TD(e.regionId,i()),o=c*2*(.8+i()*.2),l=c*2*(.8+i()*.2),u=(i()-.5)*s*.12,d=(i()-.5)*s*.12,[f,m]=CD(e,n.x+u,n.z+d);wD(t,f,m)&&_.push({id:`${e.id}-building-${_.length}`,cityId:e.id,regionId:e.regionId,kind:a,x:f,z:m,rotation:e.rotation+(i()-.5)*.18,width:o,depth:l,height:ED(a,i,e.regionId),color:SD[Math.floor(i()*SD.length)]})}let v=[],y=[[u,0],[0,u],[-u,0],[0,-u]];for(let[t,n]of y)v.push({start:CD(e,0,0),end:CD(e,t,n),width:.92});for(let t=0;t<20;t+=1){let n=t/20*Math.PI*2,r=(t+1)/20*Math.PI*2;v.push({start:CD(e,Math.cos(n)*u,Math.sin(n)*u),end:CD(e,Math.cos(r)*u,Math.sin(r)*u),width:.68})}let[b,x]=CD(e,0,0);return{city:e,buildings:_,streets:v,plaza:{x:b,z:x,radius:l},parks:g?[g]:[]}}function ND(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Em;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=PD(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=PD(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function PD(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new dm(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function FD(e,t){let n=new X(t),r=e.getAttribute(`position`).count,i=new Float32Array(r*3);for(let e=0;e<r;e+=1){let t=.94+e%5*.015;i[e*3]=n.r*t,i[e*3+1]=n.g*t,i[e*3+2]=n.b*t}return e.setAttribute(`color`,new dm(i,3)),e}function $(e,t,n=0,r=0,i=0){let a=e.index?e.toNonIndexed():e;return a!==e&&e.dispose(),a.translate(n,r,i),FD(a,t),a.computeVertexNormals(),a}function ID(e){let t=ND(e,!1);if(e.forEach(e=>e.dispose()),!t)throw Error(`No se pudo generar la geometría de edificios`);return t.computeBoundingSphere(),t}function LD(){return{id:`house`,geometry:ID([$(new Z(.78,.62,.74),`#e7e0d3`,0,.31),$(new Rh(.64,.4,4),`#8c5a46`,0,.82),$(new Z(.18,.3,.04),`#5b493b`,0,.15,.38),$(new Z(.15,.14,.03),`#7c9fa0`,-.22,.42,.375),$(new Z(.15,.14,.03),`#7c9fa0`,.22,.42,.375)]),baseWidth:.78,baseDepth:.78,baseHeight:1.02}}function RD(){return{id:`office`,geometry:ID([$(new Z(.82,1.25,.8),`#d6d0c4`,0,.625),$(new Z(.86,.11,.84),`#7f999a`,0,.33),$(new Z(.86,.11,.84),`#7f999a`,0,.64),$(new Z(.86,.11,.84),`#7f999a`,0,.95),$(new Z(.92,.1,.9),`#a99d8b`,0,1.3),$(new Z(.22,.28,.04),`#5f4e40`,0,.16,.405)]),baseWidth:.92,baseDepth:.9,baseHeight:1.35}}function zD(){return{id:`tower`,geometry:ID([$(new Z(.72,2.4,.7),`#d2ccbf`,0,1.2),$(new Z(.76,.1,.74),`#7a9496`,0,.34),$(new Z(.76,.1,.74),`#7a9496`,0,.69),$(new Z(.76,.1,.74),`#7a9496`,0,1.04),$(new Z(.76,.1,.74),`#7a9496`,0,1.39),$(new Z(.76,.1,.74),`#7a9496`,0,1.74),$(new Z(.52,.56,.5),`#bcb3a3`,0,2.68),$(new Z(.3,.36,.28),`#c9ab58`,0,3.14),$(new Lh(.03,.045,.64,5),`#6d6357`,0,3.64)]),baseWidth:.76,baseDepth:.74,baseHeight:3.96}}function BD(){return{id:`civic`,geometry:ID([$(new Z(1.04,.16,.92),`#c9bda9`,0,.08),$(new Z(.82,.7,.72),`#e3d9c8`,0,.51),$(new Z(1,.12,.9),`#8e8170`,0,.92),$(new Lh(.05,.05,.55,6),`#f0e8da`,-.35,.38,.31),$(new Lh(.05,.05,.55,6),`#f0e8da`,.35,.38,.31),$(new Lh(.05,.05,.55,6),`#f0e8da`,-.35,.38,-.31),$(new Lh(.05,.05,.55,6),`#f0e8da`,.35,.38,-.31)]),baseWidth:1.04,baseDepth:.92,baseHeight:.98}}function VD(){return[LD(),RD(),zD(),BD()]}function HD(e){return{geometry:ID([$(new Z(1.5,.28,1.2),`#cdc1ab`,0,.14),$(new Z(1.04,3.25,.9),`#dcd5c7`,0,1.77),$(new Z(1.08,.12,.94),`#6f8d90`,0,.68),$(new Z(1.08,.12,.94),`#6f8d90`,0,1.22),$(new Z(1.08,.12,.94),`#6f8d90`,0,1.76),$(new Z(1.08,.12,.94),`#6f8d90`,0,2.3),$(new Z(1.08,.12,.94),`#6f8d90`,0,2.84),$(new Z(.66,.62,.58),`#e7dfcf`,0,3.71),$(new Z(.4,.46,.38),e,0,4.25),$(new Lh(.035,.05,.9,5),e,0,4.94)]),height:5.42}}function UD(e){return{geometry:ID([$(new Z(1.55,.24,1.22),`#cec2ad`,0,.12),$(new Z(.52,2.75,.56),`#dcd5c7`,-.4,1.62),$(new Z(.52,2.4,.56),`#d5cec0`,.4,1.44),$(new Z(.96,.22,.44),e,0,2.28),$(new Z(.3,.26,.3),e,-.4,3.12),$(new Z(.3,.26,.3),e,.4,2.8),$(new Z(.54,.1,.58),`#6f8d90`,-.4,1.22),$(new Z(.54,.1,.58),`#6f8d90`,.4,1.58)]),height:3.3}}function WD(e){let t=new Wh(.56,.04,6,20);return t.rotateX(Math.PI/2),{geometry:ID([$(new Z(1.62,.24,1.32),`#cec2ad`,0,.12),$(new Z(1.02,2.2,.9),`#ddd6c8`,0,1.32),$(new Z(.6,1.25,.92),`#d0c8b8`,.94,.87),$(new Z(.78,.16,.7),`#e7dfcf`,0,2.5),$(t,e,0,2.84),$(new Z(.34,.32,.32),e,0,2.84),$(new Z(1.06,.1,.94),`#7f999a`,0,.72),$(new Z(1.06,.1,.94),`#7f999a`,0,1.32)]),height:3.34}}function GD(e,t){return e===`tracking`?HD(t):e===`mayte-montero`?WD(t):UD(t)}function KD(e,t){let n=new X(t),r=e.getAttribute(`position`).count,i=new Float32Array(r*3);for(let e=0;e<r;e+=1){let t=.9+e%7*.018;i[e*3]=n.r*t,i[e*3+1]=n.g*t,i[e*3+2]=n.b*t}return e.setAttribute(`color`,new dm(i,3)),e}function qD(e,t,n=0,r=0,i=0){let a=e.index?e.toNonIndexed():e;return a!==e&&e.dispose(),a.translate(n,r,i),KD(a,t),a.computeVertexNormals(),a}function JD(e){let t=ND(e,!1);if(e.forEach(e=>e.dispose()),!t)throw Error(`No se pudo generar la geometría de vegetación`);return t.computeBoundingSphere(),t}function YD(){return{id:`conifer`,geometry:JD([qD(new Lh(.09,.15,1.5,5),`#57452f`,0,.75),qD(new Rh(.98,1.9,7),`#2f5d3a`,0,1.95),qD(new Rh(.76,1.65,7),`#386b41`,0,2.85),qD(new Rh(.52,1.35,6),`#42784a`,0,3.65)]),height:4.3}}function XD(){return{id:`broadleaf`,geometry:JD([qD(new Lh(.12,.19,1.6,5),`#5d4931`,0,.8),qD(new Bh(1.05,0),`#3f7038`,0,2.15),qD(new Bh(.78,0),`#4a7d3f`,.52,2.5,.28),qD(new Bh(.72,0),`#356535`,-.48,2.42,-.26)]),height:3.4}}function ZD(){return{id:`tall`,geometry:JD([qD(new Lh(.1,.17,2.1,5),`#58452f`,0,1.05),qD(new Bh(.88,0),`#376b3c`,0,2.85),qD(new Bh(.68,0),`#457a43`,.35,3.45,-.18),qD(new Bh(.58,0),`#2f6036`,-.32,3.6,.24)]),height:4.3}}function QD(e=3){let t=[YD,XD,ZD],n=Math.max(1,Math.min(t.length,Math.round(e)));return t.slice(0,n).map(e=>e())}function $D(){return XD()}function eO(){return{id:`bush`,geometry:JD([qD(new Bh(.68,0),`#3f7038`,0,.5),qD(new Bh(.48,0),`#4c7d42`,.45,.4,.2),qD(new Bh(.42,0),`#356335`,-.35,.36,-.22)]),height:1.2}}var tO=.18,nO=.135,rO=.17,iO=.145;function aO(){return{positions:[],indices:[]}}function oO(e,t,n,r){for(let i of t){let[t,a]=i.start,[o,s]=i.end,c=o-t,l=s-a,u=Math.hypot(c,l);if(u<.001)continue;let d=Math.max(1,Math.ceil(u/1.4)),f=-l/u*(i.width/2+n),p=c/u*(i.width/2+n),m=e.positions.length/3;for(let n=0;n<=d;n+=1){let i=n/d,o=t+c*i,s=a+l*i,u=JE(o,s)+r;e.positions.push(o+f,u,s+p,o-f,u,s-p)}for(let t=0;t<d;t+=1){let n=m+t*2;e.indices.push(n,n+2,n+1,n+1,n+2,n+3)}}}function sO(e,t,n,r,i,a=24){let o=e.positions.length/3;e.positions.push(t,JE(t,n)+i,n);for(let o=0;o<=a;o+=1){let s=o/a*Math.PI*2,c=t+Math.cos(s)*r,l=n+Math.sin(s)*r;e.positions.push(c,JE(c,l)+i,l)}for(let t=0;t<a;t+=1)e.indices.push(o,o+t+2,o+t+1)}function cO(e){let t=new Em;return t.setAttribute(`position`,new mm(e.positions,3)),t.setIndex(e.indices),t.computeVertexNormals(),t.computeBoundingSphere(),t}function lO(e,t,n,r){let i=new tg({color:t,roughness:.94,metalness:0,transparent:!r,opacity:+!!r,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),a=new Xm(e,i);return a.receiveShadow=n.shadows,a.renderOrder=4,a.userData={kind:`city-decoration`},{mesh:a,material:i}}function uO(e){return e===`civic`?`civic`:e===`tower`?`tower`:e===`office`?`office`:`house`}var dO=class{constructor(e,t,n,r,i=!1){W(this,`quality`,void 0),W(this,`instant`,void 0),W(this,`group`,new Cp),W(this,`layouts`,[]),W(this,`featured`,new Map),W(this,`cityTargets`,new Map),W(this,`cityLabelPositions`,new Map),W(this,`cityCenters`,[]),W(this,`buildingMeshes`,new Map),W(this,`introMaterials`,[]),W(this,`regionById`,new Map),W(this,`projectById`,new Map),W(this,`parkTreesMesh`,null),W(this,`hoveredId`,null),W(this,`selectedId`,null),W(this,`hoveredCityId`,null),W(this,`activeCityId`,null),W(this,`activeRegionId`,null),this.quality=r,this.instant=i,this.group.name=`city-layer`,t.forEach(e=>this.regionById.set(e.id,e)),n.forEach(e=>this.projectById.set(e.id,e)),this.layouts=e.map(e=>{let t=this.regionById.get(e.regionId);if(!t)throw Error(`No se encontró la región ${e.regionId}`);return MD(e,t,{density:r.structureDensity})}),this.buildGround(),this.buildCityTargets(e),this.buildBuildings(),this.buildFeaturedBuildings(),this.buildCityLabels(e),this.refreshAll(!1),this.refreshCityRings(!1)}buildGround(){let e=aO(),t=aO(),n=aO();for(let r of this.layouts){oO(e,r.streets,.34,nO),oO(t,r.streets,0,rO),sO(e,r.plaza.x,r.plaza.z,r.plaza.radius,.14500000000000002,28);for(let e of r.parks)sO(n,e.x,e.z,e.radius,iO,18)}let r=lO(cO(e),`#c6bba9`,this.quality,this.instant);r.mesh.name=`city-sidewalks`,this.introMaterials.push(r.material),this.group.add(r.mesh);let i=lO(cO(t),`#7b7263`,this.quality,this.instant);i.mesh.name=`city-roads`,this.introMaterials.push(i.material),this.group.add(i.mesh);let a=lO(cO(n),`#638d4b`,this.quality,this.instant);a.mesh.name=`city-parks`,this.introMaterials.push(a.material),this.group.add(a.mesh);let o=$D(),s=this.collectParkTrees();if(s.length>0){let e=new tg({vertexColors:!0,roughness:.94,metalness:0,flatShading:!0,transparent:!this.instant,opacity:+!!this.instant}),t=new ch(o.geometry,e,s.length);t.name=`city-park-trees`,t.castShadow=this.quality.shadows,t.receiveShadow=!1,t.userData={kind:`city-decoration`},this.parkTreesMesh=t;let n=new Sp;s.forEach((e,r)=>{n.position.set(e.x,JE(e.x,e.z)+iO,e.z),n.rotation.set(0,e.rotation,0),n.scale.setScalar(e.scale),n.updateMatrix(),t.setMatrixAt(r,n.matrix)}),t.instanceMatrix.needsUpdate=!0,t.computeBoundingSphere(),this.introMaterials.push(e),this.group.add(t)}else o.geometry.dispose()}collectParkTrees(){let e=[];for(let t of this.layouts){let n=lE(t.city.seed+97);for(let r of t.parks)for(let t=0;t<2;t+=1){let i=n()*Math.PI*2+t/2*Math.PI*2,a=r.radius*(.18+n()*.22);e.push({x:r.x+Math.cos(i)*a,z:r.z+Math.sin(i)*a,rotation:n()*Math.PI*2,scale:.24+n()*.1})}}return e}buildCityTargets(e){for(let t of e){let e=JE(t.position.x,t.position.z),n=new J(t.position.x,e,t.position.z);this.cityCenters.push(n);let r=new Rm({transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,colorWrite:!1,side:2}),i=new Xm(new Ih(t.radius*.9,32),r);i.name=`city-target-${t.id}`,i.rotation.x=-Math.PI/2,i.position.set(t.position.x,e+tO+.05,t.position.z),i.renderOrder=-1,i.userData={kind:`city`,cityId:t.id,regionId:t.regionId};let a=new Rm({color:this.regionById.get(t.regionId)?.color??`#38bdf8`,transparent:!0,opacity:0,depthWrite:!1,side:2,blending:2}),o=new Xm(new Uh(t.radius*.82,t.radius*.87,48),a);o.name=`city-ring-${t.id}`,o.rotation.x=-Math.PI/2,o.position.set(t.position.x,e+tO+.07,t.position.z),o.renderOrder=5,o.userData={kind:`city-decoration`},this.group.add(i,o),this.cityTargets.set(t.id,{city:t,hit:i,ring:o})}}buildBuildings(){let e=VD(),t=new Map;for(let e of this.layouts)for(let n of e.buildings){if(n.kind===`landmark`)continue;let e=uO(n.kind),r=t.get(e)??[];r.push(n),t.set(e,r)}for(let n of e){let e=t.get(n.id)??[];if(e.length===0){n.geometry.dispose();continue}let r=new tg({vertexColors:!0,roughness:.88,metalness:.02,flatShading:!0,transparent:!this.instant,opacity:+!!this.instant}),i=new ch(n.geometry,r,e.length);i.name=`city-buildings-${n.id}`,i.castShadow=this.quality.shadows,i.receiveShadow=!0,i.userData={kind:`city-decoration`};let a=new Sp,o=new X;e.forEach((e,t)=>{let r=this.regionById.get(e.regionId),s=new X(e.color);r&&s.lerp(new X(r.color),e.kind===`civic`?.1:.16),a.position.set(e.x,JE(e.x,e.z)+tO,e.z),a.rotation.set(0,e.rotation,0),a.scale.set(e.width/n.baseWidth,e.height/n.baseHeight,e.depth/n.baseDepth),a.updateMatrix(),i.setMatrixAt(t,a.matrix),i.setColorAt(t,o.copy(s))}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),i.computeBoundingSphere(),this.introMaterials.push(r),this.buildingMeshes.set(n.id,i),this.group.add(i)}}buildFeaturedBuildings(){for(let e of this.layouts)for(let t of e.buildings){if(t.kind!==`landmark`||!t.projectId)continue;let e=this.projectById.get(t.projectId),n=this.regionById.get(t.regionId);if(!e||!n)continue;let r=GD(e.id,n.color),i=new tg({vertexColors:!0,roughness:.72,metalness:.06,flatShading:!0,transparent:!this.instant,opacity:+!!this.instant}),a=new Xm(r.geometry,i);a.name=`featured-building-${e.id}`,a.castShadow=this.quality.shadows,a.receiveShadow=!0;let o=new Rm({color:n.color,transparent:!0,opacity:this.instant?.28:0,depthWrite:!1,side:2,blending:2}),s=new Xm(new Uh(.95,1.24,36),o);s.name=`featured-ring-${e.id}`,s.rotation.x=-Math.PI/2,s.position.y=.035;let c=new Rm({color:n.color,transparent:!0,opacity:this.instant?.74:0,depthWrite:!1,blending:2}),l=new Xm(new Vh(.2,0),c);l.name=`featured-marker-${e.id}`,l.position.y=r.height+.68;let u=new Cp;u.name=`featured-group-${e.id}`,u.position.set(t.x,JE(t.x,t.z)+tO+.02,t.z),u.rotation.y=t.rotation,u.userData={kind:`building`,regionId:e.regionId,projectId:e.id},this.instant||u.scale.setScalar(.001),u.add(a,s,l),this.group.add(u),this.introMaterials.push(i),this.featured.set(e.id,{projectId:e.id,regionId:e.regionId,cityId:t.cityId,group:u,ring:s,marker:l,material:i,height:r.height,phase:lE(e.id.length*977+r.height*100)()})}}buildCityLabels(e){for(let t of e)this.cityLabelPositions.set(t.id,new J(t.position.x,JE(t.position.x,t.position.z)+8,t.position.z))}getInteractiveObjects(){let e=[...this.featured.values()].map(e=>e.group);if(this.activeRegionId===null)return e;let t=[...this.cityTargets.values()].filter(e=>e.city.regionId===this.activeRegionId).map(e=>e.hit);return[...e,...t]}getProjectAnchor(e){let t=this.featured.get(e);return t?new J(t.group.position.x,t.group.position.y+t.height+.45,t.group.position.z):null}getProjectFocus(e){let t=this.featured.get(e);return t?{position:{x:t.group.position.x,y:t.group.position.y+t.height*.55,z:t.group.position.z},distance:23}:null}getCityFocus(e){let t=this.cityTargets.get(e);if(!t)return null;let n=JE(t.city.position.x,t.city.position.z);return{position:{x:t.city.position.x,y:n+.9,z:t.city.position.z},distance:oE(t.city.radius*3.7,17,21)}}getCityLabelPosition(e){return this.cityLabelPositions.get(e)?.clone()??null}setHover(e){this.hoveredId!==e&&(this.hoveredId=e,this.refreshAll())}setSelection(e){this.selectedId!==e&&(this.selectedId=e,this.refreshAll())}setHoveredCity(e){this.hoveredCityId!==e&&(this.hoveredCityId=e,this.refreshCityRings())}setActiveCity(e){this.activeCityId!==e&&(this.activeCityId=e,this.refreshCityRings())}setActiveRegion(e){this.activeRegionId!==e&&(this.activeRegionId=e,this.refreshAll(),this.refreshCityRings())}refreshCityRings(e=!0){for(let[t,n]of this.cityTargets){let r=this.activeRegionId===n.city.regionId,i=this.activeCityId===t,a=this.hoveredCityId===t,o=r?i?.86:a?.58:.2:0,s=this.instant?0:.28;!e||this.instant||s===0?n.ring.material.opacity=o:aE.to(n.ring.material,{opacity:o,duration:s,ease:`power2.out`,overwrite:!0})}}refreshAll(e=!0){for(let t of this.featured.values())this.refreshVisual(t,e)}refreshVisual(e,t){let n=this.activeRegionId===null||this.activeRegionId===e.regionId,r=this.selectedId===e.projectId,i=this.hoveredId===e.projectId,a=r?1.06:i?1.04:1,o=n?r?.74:i?.52:.26:.06,s=n?r?1:i?.94:.72:.1;!t||this.instant?(e.group.scale.setScalar(a),e.ring.material.opacity=o,e.marker.material.opacity=s):(aE.to(e.group.scale,{x:a,y:a,z:a,duration:.34,ease:`power2.out`,overwrite:!0}),aE.to(e.ring.material,{opacity:o,duration:.34,ease:`power2.out`,overwrite:!0}),aE.to(e.marker.material,{opacity:s,duration:.34,ease:`power2.out`,overwrite:!0}))}playIntro(){if(this.instant)return;this.introMaterials.forEach((e,t)=>{aE.to(e,{opacity:1,duration:.95,delay:.45+t*.05,ease:`power2.out`,overwrite:!0,onComplete:()=>{e.transparent=!1,e.needsUpdate=!0}})});let e=0;for(let t of this.featured.values())aE.to(t.group.scale,{x:1,y:1,z:1,duration:.75,delay:.85+e*.14,ease:`back.out(1.7)`,overwrite:!0,onComplete:()=>this.refreshVisual(t,!1)}),e+=1}update(e,t){let n=1/0;for(let e of this.cityCenters)n=Math.min(n,t.position.distanceTo(e));let r=xD(n);this.parkTreesMesh&&(this.parkTreesMesh.visible=r.parkTrees);let i=this.buildingMeshes.get(`house`);i&&(i.visible=r.houses);let a=this.buildingMeshes.get(`office`);if(a&&(a.visible=r.offices),!this.instant)for(let t of this.featured.values())t.marker.position.y=t.height+.68+Math.sin(e*1.8+t.phase)*.075,t.marker.rotation.y=e*.6+t.phase}dispose(){this.group.traverse(e=>{if(e instanceof Xm){e.geometry.dispose();let t=e.material;Array.isArray(t)?t.forEach(e=>e.dispose()):t.dispose()}}),this.featured.clear(),this.cityTargets.clear(),this.cityLabelPositions.clear(),this.cityCenters.length=0,this.buildingMeshes.clear(),this.parkTreesMesh=null,this.introMaterials.length=0,this.group.clear()}},fO=66;function pO(e){return new tg({vertexColors:!0,roughness:.94,metalness:0,flatShading:!0,transparent:!e,opacity:+!!e})}function mO(e){return e.tier===`high`?1.9:e.tier===`medium`?2.45:3.15}function hO(e,t,n,r){if(t.length===0)return null;let i=pO(r),a=new ch(e.geometry,i,t.length);a.name=`vegetation-${e.id}`,a.castShadow=n.shadows,a.receiveShadow=!1,a.userData={kind:`vegetation-decoration`};let o=new Sp;return t.forEach((e,t)=>{o.position.set(e.x,JE(e.x,e.z)-.06,e.z),o.rotation.set(0,e.rotation,0),o.scale.setScalar(e.scale),o.updateMatrix(),a.setMatrixAt(t,o.matrix)}),a.instanceMatrix.needsUpdate=!0,a.computeBoundingSphere(),{mesh:a,material:i}}var gO=class{constructor(e,t=!1){W(this,`instant`,void 0),W(this,`group`,new Cp),W(this,`visuals`,[]),this.instant=t,this.group.name=`vegetation-layer`;let n=lE(9127),r=mO(e),i=e.vegetationDensity,a=QD(e.treeVariants),o=eO(),s=a.map(()=>[]),c=[];for(let e=-66;e<=fO;e+=r)for(let t=-66;t<=fO;t+=r){let o=(n()-.5)*r*.9,l=(n()-.5)*r*.9,u=t+o,d=e+l,f=(.06+cE(.38,.68,xl(u*.032+15.3,d*.032+4.7,3))*.94)*i;if(n()>f||XE(u,d,7)||ZE(u,d,2.7)||YE(u,d)>1.18)continue;let p=n()<.24,m=n()*Math.PI*2;if(p){c.push({x:u,z:d,rotation:m,scale:.8+n()*.9});continue}let h=n();s[a.length===1||h<.42?0:h<.8?1:Math.min(2,a.length-1)].push({x:u,z:d,rotation:m,scale:.72+n()*.7})}a.forEach((n,r)=>{let i=hO(n,s[r],e,t);i?(this.group.add(i.mesh),this.visuals.push(i)):n.geometry.dispose()});let l=hO(o,c,e,t);l?(this.group.add(l.mesh),this.visuals.push(l)):o.geometry.dispose()}playIntro(){this.instant||this.visuals.forEach((e,t)=>{aE.to(e.material,{opacity:1,duration:.9,delay:.5+t*.08,ease:`power2.out`,overwrite:!0,onComplete:()=>{e.material.transparent=!1,e.material.needsUpdate=!0}})})}update(e){}dispose(){for(let e of this.visuals)this.group.remove(e.mesh),e.mesh.geometry.dispose(),e.material.dispose(),e.mesh.dispose();this.visuals.length=0}};function _O(e){let t=e;for(;t;){let e=t.userData;if((e.kind===`building`||e.kind===`marker`)&&e.projectId&&e.regionId)return{kind:e.kind,regionId:e.regionId,projectId:e.projectId,object:t};if(e.kind===`city`&&e.cityId&&e.regionId)return{kind:`city`,regionId:e.regionId,cityId:e.cityId,object:t};if(e.kind===`region`&&e.regionId)return{kind:`region`,regionId:e.regionId,object:t};t=t.parent}return null}var vO=class{constructor(e,t,n){W(this,`camera`,void 0),W(this,`domElement`,void 0),W(this,`raycaster`,new s_),W(this,`pointer`,new q),W(this,`callbacks`,void 0),W(this,`downPosition`,{x:0,y:0}),W(this,`downTime`,0),W(this,`pointerInside`,!1),W(this,`handlePointerMove`,e=>{if(e.pointerType!==`mouse`)return;this.pointerInside=!0,this.updatePointer(e);let t=this.pick();this.callbacks.onHover(t),this.domElement.style.cursor=t?`pointer`:`grab`}),W(this,`handlePointerDown`,e=>{this.downPosition={x:e.clientX,y:e.clientY},this.downTime=performance.now(),this.callbacks.onPointerDown?.()}),W(this,`handlePointerUp`,e=>{let t=Math.hypot(e.clientX-this.downPosition.x,e.clientY-this.downPosition.y),n=performance.now()-this.downTime;t>7||n>900||(this.updatePointer(e),this.callbacks.onClick(this.pick()))}),W(this,`handlePointerLeave`,()=>{this.pointerInside&&(this.pointerInside=!1,this.callbacks.onHover(null),this.domElement.style.cursor=`grab`)}),this.camera=e,this.domElement=t,this.callbacks=n,this.domElement.addEventListener(`pointermove`,this.handlePointerMove),this.domElement.addEventListener(`pointerdown`,this.handlePointerDown),this.domElement.addEventListener(`pointerup`,this.handlePointerUp),this.domElement.addEventListener(`pointerleave`,this.handlePointerLeave),this.domElement.addEventListener(`pointercancel`,this.handlePointerLeave)}updatePointer(e){let t=this.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height)*2+1}pick(){let e=this.callbacks.getObjects();if(e.length===0)return null;this.raycaster.setFromCamera(this.pointer,this.camera);let t=this.raycaster.intersectObjects(e,!0),n=null,r=null;for(let e of t){let t=_O(e.object);if(t){if(t.kind===`building`||t.kind===`marker`)return t;t.kind===`city`?n||(n=t):r||(r=t)}}return n??r}setEnabled(e){this.domElement.style.pointerEvents=e?`auto`:`none`}dispose(){this.domElement.removeEventListener(`pointermove`,this.handlePointerMove),this.domElement.removeEventListener(`pointerdown`,this.handlePointerDown),this.domElement.removeEventListener(`pointerup`,this.handlePointerUp),this.domElement.removeEventListener(`pointerleave`,this.handlePointerLeave),this.domElement.removeEventListener(`pointercancel`,this.handlePointerLeave)}},yO={mode:`overview`,regionId:null,cityId:null,projectId:null},bO=class{constructor(){W(this,`selection`,{...yO}),W(this,`listeners`,new Set)}get current(){return this.selection}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(let e of this.listeners)e(this.selection)}selectRegion(e){this.selection={mode:`region`,regionId:e,cityId:null,projectId:null},this.emit()}selectCity(e,t){this.selection={mode:`city`,regionId:e,cityId:t,projectId:null},this.emit()}selectProject(e,t,n=null){this.selection={mode:`project`,regionId:e,cityId:n,projectId:t},this.emit()}goOverview(){this.selection={...yO},this.emit()}},xO=class{constructor(e){W(this,`options`,void 0),W(this,`callbacks`,void 0),W(this,`sceneManager`,void 0),W(this,`cameraManager`,void 0),W(this,`renderManager`,void 0),W(this,`labelManager`,void 0),W(this,`terrainLayer`,void 0),W(this,`regionLayer`,void 0),W(this,`roadLayer`,void 0),W(this,`cityLayer`,void 0),W(this,`vegetationLayer`,void 0),W(this,`raycastManager`,void 0),W(this,`selectionManager`,new bO),W(this,`hover`,{regionId:null,projectId:null}),W(this,`elapsed`,0),W(this,`lastFrameTime`,performance.now()),W(this,`frameId`,0),W(this,`isVisible`,!0),W(this,`disposed`,!1),W(this,`resizeObserver`,null),W(this,`intersectionObserver`,null),this.options=e,this.callbacks=e.callbacks??{};let{container:t,canvas:n,quality:r,reducedMotion:i}=e;this.sceneManager=new Ob(r);let a=Math.max(t.clientWidth,1),o=Math.max(t.clientHeight,1);this.cameraManager=new pE(n,a/o,i),this.cameraManager.onTransitionChange=e=>{this.callbacks.onTransitionChange?.(e)},this.renderManager=new OE(n,r),this.renderManager.setSize(a,o,r),this.renderManager.setupPostProcessing(this.sceneManager.scene,this.cameraManager.camera,r),this.terrainLayer=new rD(r),this.regionLayer=new gD(Nl,r,i),this.roadLayer=new yD(Nl,i),this.cityLayer=new dO(Vl,Nl,Dl,r,i),this.vegetationLayer=new gO(r,i),this.sceneManager.groups.terrain.add(this.terrainLayer.mesh),this.sceneManager.groups.regions.add(this.regionLayer.group),this.sceneManager.groups.roads.add(this.roadLayer.group),this.sceneManager.groups.structures.add(this.cityLayer.group),this.sceneManager.groups.vegetation.add(this.vegetationLayer.group),this.labelManager=new QE(t,this.sceneManager.scene,Nl,Vl,Dl,i);for(let e of Dl){let t=this.cityLayer.getProjectAnchor(e.id);t&&this.labelManager.updateProjectLabelPosition(e.id,t)}this.raycastManager=new vO(this.cameraManager.camera,n,{getObjects:()=>[...this.regionLayer.meshes,...this.cityLayer.getInteractiveObjects()],onHover:e=>this.handleHover(e),onClick:e=>this.handleClick(e),onPointerDown:()=>this.cameraManager.cancelTransition()}),this.selectionManager.subscribe(e=>{this.callbacks.onSelectionChange?.(e)}),this.setupObservers(a,o),this.startIntro(),this.startLoop(),this.callbacks.onReady?.()}setupObservers(e,t){typeof ResizeObserver<`u`&&(this.resizeObserver=new ResizeObserver(()=>{this.resize(e,t)}),this.resizeObserver.observe(this.options.container)),typeof IntersectionObserver<`u`&&(this.intersectionObserver=new IntersectionObserver(e=>{let t=e[0];t&&(this.isVisible=t.isIntersecting)},{threshold:.05}),this.intersectionObserver.observe(this.options.container))}startIntro(){let{reducedMotion:e}=this.options;e?(this.cameraManager.camera.position.set(Fl.position.x,Fl.position.y,Fl.position.z),this.cameraManager.controls.target.set(Fl.target.x,Fl.target.y,Fl.target.z),this.cameraManager.controls.update()):(this.cameraManager.camera.position.set(2,88,100),this.cameraManager.controls.target.set(0,1.5,0),this.cameraManager.controls.update(),this.regionLayer.playIntro(),this.roadLayer.playIntro(),this.cityLayer.playIntro(),this.vegetationLayer.playIntro(),this.labelManager.playIntro(),window.setTimeout(()=>{this.disposed||this.selectionManager.current.mode===`overview`&&this.cameraManager.animateTo(Fl,2.7)},320))}startLoop(){this.lastFrameTime=performance.now();let e=()=>{if(this.disposed)return;this.frameId=requestAnimationFrame(e);let t=performance.now(),n=Math.min((t-this.lastFrameTime)/1e3,.05);this.lastFrameTime=t,this.elapsed+=n,this.isVisible&&!document.hidden&&(this.cameraManager.update(),this.updateLayers(),this.renderManager.render(this.sceneManager.scene,this.cameraManager.camera),this.labelManager.render(this.cameraManager.camera))};this.frameId=requestAnimationFrame(e)}updateLayers(){this.terrainLayer.update(this.elapsed),this.regionLayer.update(this.elapsed),this.roadLayer.update(this.elapsed),this.cityLayer.update(this.elapsed,this.cameraManager.camera),this.vegetationLayer.update(this.elapsed)}handleHover(e){let t=e?.regionId??null,n=e?.kind===`building`||e?.kind===`marker`?e.projectId??null:null,r=e?.kind===`city`?e.cityId??null:null;if(this.cityLayer.setHoveredCity(r),this.hover.regionId===t&&this.hover.projectId===n)return;this.hover={regionId:t,projectId:n},this.regionLayer.setHover(t),this.cityLayer.setHover(n),this.labelManager.setHoveredProject(n);let i=this.selectionManager.current;if(i.mode===`project`&&i.projectId){let e=kl(i.projectId);this.labelManager.setSelectedProject(i.projectId,e?.title)}this.callbacks.onHoverChange?.(this.hover)}handleClick(e){e&&((e.kind===`building`||e.kind===`marker`)&&e.projectId?this.selectProject(e.projectId):e.kind===`city`&&e.cityId?this.selectCity(e.cityId):e.kind===`region`&&this.selectRegion(e.regionId))}applyRegionFocus(e,t=null,n=null){this.regionLayer.setSelection(e),this.regionLayer.setLabelEmphasis(e),this.roadLayer.setEmphasis(e),this.cityLayer.setActiveRegion(e),this.cityLayer.setActiveCity(n),this.cityLayer.setSelection(t),this.labelManager.setSelectedRegion(e),this.labelManager.setSelectedCity(n),this.labelManager.setProjectLabelsVisible(!0)}selectRegion(e){let t=Il(e);t&&(this.cameraManager.cancelTransition(),this.selectionManager.selectRegion(e),this.applyRegionFocus(e),this.labelManager.setSelectedProject(null),this.cameraManager.focusRegion(t))}selectCity(e){let t=Wl(e);if(!t)return;let n=Il(t.regionId);if(!n)return;this.cameraManager.cancelTransition(),this.selectionManager.selectCity(t.regionId,t.id),this.applyRegionFocus(t.regionId,null,t.id),this.labelManager.setSelectedProject(null);let r=this.cityLayer.getCityFocus(t.id);r?this.cameraManager.focusPoint(r.position,r.distance):this.cameraManager.focusRegion(n)}selectProject(e){let t=kl(e);if(!t)return;let n=Il(t.regionId);if(!n)return;let r=Kl(e);this.cameraManager.cancelTransition(),this.selectionManager.selectProject(t.regionId,e,r?.id??null),this.applyRegionFocus(t.regionId,e,r?.id??null),this.labelManager.setSelectedProject(e,t.title);let i=this.cityLayer.getProjectFocus(e);i?this.cameraManager.focusPoint(i.position,i.distance):this.cameraManager.focusRegion(n)}goUp(){let e=this.selectionManager.current;if(e.mode===`project`){if(e.cityId){this.selectCity(e.cityId);return}e.regionId&&this.selectRegion(e.regionId)}else e.mode===`city`?e.regionId&&this.selectRegion(e.regionId):e.mode===`region`&&this.goOverview()}goOverview(){this.cameraManager.cancelTransition(),this.selectionManager.goOverview(),this.regionLayer.setSelection(null),this.regionLayer.setLabelEmphasis(null),this.roadLayer.setEmphasis(null),this.cityLayer.setActiveRegion(null),this.cityLayer.setActiveCity(null),this.cityLayer.setSelection(null),this.cityLayer.setHoveredCity(null),this.labelManager.setSelectedRegion(null),this.labelManager.setSelectedCity(null),this.labelManager.setProjectLabelsVisible(!1),this.cityLayer.setHover(null),this.regionLayer.setHover(null),this.hover={regionId:null,projectId:null},this.callbacks.onHoverChange?.(this.hover),this.cameraManager.animateTo(Fl,1.9)}zoomIn(){this.cameraManager.zoomBy(.82)}zoomOut(){this.cameraManager.zoomBy(1.22)}resetView(){this.goOverview()}panBy(e,t){this.cameraManager.panBy(e,t)}focusNextRegion(e){let t=Nl.findIndex(e=>e.id===this.selectionManager.current.regionId),n=Nl[((t>=0?t:0)+e+Nl.length)%Nl.length];n&&this.selectRegion(n.id)}resize(e,t){let n=Math.max(this.options.container.clientWidth||e,1),r=Math.max(this.options.container.clientHeight||t,1);this.cameraManager.resize(n,r),this.renderManager.setSize(n,r,this.options.quality),this.labelManager.resize(n,r)}get selection(){return this.selectionManager.current}throwError(e){let t=e instanceof Error?e:Error(String(e));this.callbacks.onError?.(t)}dispose(){this.disposed||(this.disposed=!0,cancelAnimationFrame(this.frameId),this.resizeObserver?.disconnect(),this.intersectionObserver?.disconnect(),this.raycastManager.dispose(),this.labelManager.dispose(),this.regionLayer.dispose(),this.roadLayer.dispose(),this.cityLayer.dispose(),this.vegetationLayer.dispose(),this.terrainLayer.dispose(),this.cameraManager.dispose(),this.renderManager.dispose(),this.sceneManager.dispose())}};function SO(){return typeof window>`u`||!window.matchMedia?!1:window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function CO(){if(typeof document>`u`)return!1;try{let e=document.createElement(`canvas`);return!!(e.getContext(`webgl2`)??e.getContext(`webgl`)??e.getContext(`experimental-webgl`))}catch{return!1}}function wO(){if(typeof window>`u`)return{tier:`medium`,pixelRatio:1.25,bloom:!1,shadows:!0,terrainSegments:140,structureDensity:.6,vegetationDensity:.8,treeVariants:3,labelDensity:.8};let e=window.matchMedia(`(max-width: 768px)`).matches,t=window.matchMedia(`(max-width: 1180px)`).matches,n=navigator.deviceMemory??4,r=navigator.hardwareConcurrency??4,i=window.devicePixelRatio||1;return e||n<=3||r<=3?{tier:`low`,pixelRatio:Math.min(i,1.35),bloom:!1,shadows:!1,terrainSegments:96,structureDensity:.32,vegetationDensity:.42,treeVariants:2,labelDensity:.55}:t||n<=6||r<=6?{tier:`medium`,pixelRatio:Math.min(i,1.5),bloom:!1,shadows:!0,terrainSegments:140,structureDensity:.6,vegetationDensity:.78,treeVariants:3,labelDensity:.8}:{tier:`high`,pixelRatio:Math.min(i,1.8),bloom:!1,shadows:!0,terrainSegments:190,structureDensity:1,vegetationDensity:1,treeVariants:3,labelDensity:1}}var TO=1700;function EO(e,t){let{setLoading:n,setSelection:r,setHover:i,setTransitioning:a,setWebglSupported:o,setQualityTier:s,setReducedMotion:c}=Yl(),l=Wt(null),u=Ut(null),d=performance.now();function f(){let e=SO()?320:TO,t=Math.max(0,e-(performance.now()-d));window.setTimeout(()=>n(!1),t)}return kr(()=>{let d=e.value,p=t.value;if(!d||!p||!CO()){o(!1),n(!1);return}let m=wO(),h=SO();s(m.tier),c(h),o(!0);try{l.value=new xO({container:d,canvas:p,quality:m,reducedMotion:h,callbacks:{onReady:f,onHoverChange:i,onSelectionChange:r,onTransitionChange:a,onError:e=>{u.value=e}}})}catch(e){u.value=e instanceof Error?e:Error(String(e)),o(!1),n(!1)}}),Mr(()=>{l.value?.dispose(),l.value=null}),{engine:l,error:u}}var DO=mr({__name:`MapCanvas`,emits:[`ready`,`error`],setup(e,{expose:t,emit:n}){let r=n,i=Ut(null),a=Ut(null),{engine:o,error:s}=EO(i,a);return Fn(o,e=>{e&&r(`ready`,e)}),Fn(s,e=>{e&&r(`error`,e)}),t({engine:o,canvasRef:a,containerRef:i}),(e,t)=>(V(),H(`div`,{ref_key:`containerRef`,ref:i,class:`absolute inset-0`},[U(`canvas`,{ref_key:`canvasRef`,ref:a,class:`map-canvas`,tabindex:`0`,role:`application`,"aria-label":`Mapa tridimensional interactivo. Usa clic para seleccionar una región o proyecto, y las flechas para desplazarte.`},null,512)],512))}}),OO={class:`hidden items-center gap-5 text-[11px] text-mist md:flex`},kO={class:`flex items-center gap-2`},AO={class:`flex items-center gap-2`},jO={class:`font-mono text-[10px] uppercase tracking-[0.18em] text-mist/70`},MO=mr({__name:`MapTerrain`,props:{regionCount:{},projectCount:{},qualityTier:{}},setup(e){return(t,n)=>(V(),H(`div`,OO,[U(`span`,kO,[n[0]||(n[0]=U(`span`,{class:`h-1.5 w-1.5 rounded-full bg-glow shadow-[0_0_10px_rgba(56,189,248,0.9)]`},null,-1)),ba(` `+F(e.regionCount)+` regiones `,1)]),U(`span`,AO,[n[1]||(n[1]=U(`span`,{class:`h-1.5 w-1.5 rounded-full bg-electric`},null,-1)),ba(` `+F(e.projectCount)+` proyectos `,1)]),U(`span`,jO,` Vista isométrica · `+F(e.qualityTier),1)]))}}),NO={class:`hidden items-center gap-4 text-[10px] font-mono uppercase tracking-[0.16em] text-mist/70 lg:flex`},PO=mr({__name:`MapRoads`,props:{transitioning:{type:Boolean}},setup(e){return(t,n)=>(V(),H(`div`,NO,[U(`span`,{class:ue(e.transitioning?`text-glow`:`text-mist/70`)},F(e.transitioning?`Navegando`:`Arrastra para explorar`),3),n[0]||(n[0]=U(`span`,{class:`h-3 w-px bg-border-map/60`},null,-1)),n[1]||(n[1]=U(`span`,null,`+ / − zoom`,-1)),n[2]||(n[2]=U(`span`,{class:`h-3 w-px bg-border-map/60`},null,-1)),n[3]||(n[3]=U(`span`,null,`Esc vista general`,-1))]))}}),FO={class:`pointer-events-auto flex max-w-[calc(100vw-2rem)] items-center gap-1 overflow-x-auto rounded-2xl border border-white/8 bg-abyss/70 p-1.5 backdrop-blur-xl`,"aria-label":`Regiones del mapa`},IO=[`aria-pressed`,`onClick`],LO={class:`whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.14em]`},RO=mr({__name:`MapRegions`,props:{regions:{},selectedRegionId:{},projectCounts:{}},emits:[`select`],setup(e,{emit:t}){let n=t;return(t,r)=>(V(),H(`nav`,FO,[(V(!0),H(ta,null,zr(e.regions,t=>(V(),H(`button`,{key:t.id,type:`button`,class:ue([`group flex shrink-0 items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors duration-200`,e.selectedRegionId===t.id?`bg-elevated/80 text-ice`:`text-mist hover:bg-elevated/45 hover:text-ice`]),"aria-pressed":e.selectedRegionId===t.id,onClick:e=>n(`select`,t.id)},[U(`span`,{class:`h-2 w-2 shrink-0 rounded-full transition-transform duration-200 group-hover:scale-125`,style:ae({backgroundColor:t.color,boxShadow:`0 0 10px ${t.color}`})},null,4),U(`span`,LO,F(t.shortName),1),U(`span`,{class:ue([`rounded-full border border-white/10 px-1.5 py-0.5 font-mono text-[9px]`,e.projectCounts[t.id]>0?`text-glow`:`text-mist/55`])},F(e.projectCounts[t.id]),3)],10,IO))),128))]))}}),zO={class:`sr-only`,"aria-label":`Proyectos disponibles`},BO=[`onClick`],VO=mr({__name:`MapMarkers`,props:{projects:{}},emits:[`select`],setup(e,{emit:t}){let n=t;return(t,r)=>(V(),H(`nav`,zO,[r[0]||(r[0]=U(`p`,null,`Selecciona un proyecto para abrir su ficha completa.`,-1)),U(`ul`,null,[(V(!0),H(ta,null,zr(e.projects,e=>(V(),H(`li`,{key:e.id},[U(`button`,{type:`button`,onClick:t=>n(`select`,e.id)},F(e.title)+` — `+F(e.category),9,BO)]))),128))])]))}}),HO={class:`pointer-events-auto flex flex-col gap-2 rounded-2xl border border-white/8 bg-abyss/65 p-1.5 backdrop-blur-xl`},UO=[`disabled`],WO=[`disabled`],GO=mr({__name:`MapControls`,props:{canZoomIn:{type:Boolean},canZoomOut:{type:Boolean}},emits:[`zoomIn`,`zoomOut`,`reset`,`previous`,`next`],setup(e,{emit:t}){let n=t;return(t,r)=>(V(),H(`div`,HO,[U(`button`,{type:`button`,class:`map-button`,"aria-label":`Acercar mapa`,disabled:!e.canZoomIn,onClick:r[0]||(r[0]=e=>n(`zoomIn`))},[...r[5]||(r[5]=[U(`svg`,{viewBox:`0 0 24 24`,class:`h-4 w-4`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},[U(`path`,{d:`M12 5v14M5 12h14`,"stroke-linecap":`round`})],-1)])],8,UO),U(`button`,{type:`button`,class:`map-button`,"aria-label":`Alejar mapa`,disabled:!e.canZoomOut,onClick:r[1]||(r[1]=e=>n(`zoomOut`))},[...r[6]||(r[6]=[U(`svg`,{viewBox:`0 0 24 24`,class:`h-4 w-4`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},[U(`path`,{d:`M5 12h14`,"stroke-linecap":`round`})],-1)])],8,WO),r[10]||(r[10]=U(`span`,{class:`mx-auto h-px w-6 bg-white/10`},null,-1)),U(`button`,{type:`button`,class:`map-button`,"aria-label":`Región anterior`,onClick:r[2]||(r[2]=e=>n(`previous`))},[...r[7]||(r[7]=[U(`svg`,{viewBox:`0 0 24 24`,class:`h-4 w-4`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},[U(`path`,{d:`M15 6l-6 6 6 6`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)])]),U(`button`,{type:`button`,class:`map-button`,"aria-label":`Región siguiente`,onClick:r[3]||(r[3]=e=>n(`next`))},[...r[8]||(r[8]=[U(`svg`,{viewBox:`0 0 24 24`,class:`h-4 w-4`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},[U(`path`,{d:`M9 6l6 6-6 6`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)])]),r[11]||(r[11]=U(`span`,{class:`mx-auto h-px w-6 bg-white/10`},null,-1)),U(`button`,{type:`button`,class:`map-button`,"aria-label":`Volver a la vista general`,onClick:r[4]||(r[4]=e=>n(`reset`))},[...r[9]||(r[9]=[U(`svg`,{viewBox:`0 0 24 24`,class:`h-4 w-4`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},[U(`path`,{d:`M4 11l8-7 8 7M6 10v9h12v-9`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)])])]))}}),KO={key:0,class:`pointer-events-auto flex max-w-[calc(100vw-2rem)] items-center gap-1 overflow-x-auto rounded-full border border-white/8 bg-abyss/70 px-2 py-1.5 backdrop-blur-xl`,"aria-label":`Ruta de exploración del territorio`},qO=[`aria-current`],JO=[`aria-current`],YO={class:`breadcrumb-crumb is-current`,"aria-current":`location`},XO=mr({__name:`MapBreadcrumb`,props:{mode:{},region:{},city:{},project:{}},emits:[`overview`,`region`,`city`],setup(e,{emit:t}){let n=t;return(t,r)=>e.region?(V(),H(`nav`,KO,[U(`button`,{type:`button`,class:`breadcrumb-crumb`,"aria-label":`Volver al territorio completo`,onClick:r[0]||(r[0]=e=>n(`overview`))},` Territorio `),r[5]||(r[5]=U(`span`,{class:`breadcrumb-separator`,"aria-hidden":`true`},`/`,-1)),U(`button`,{type:`button`,class:ue([`breadcrumb-crumb`,{"is-current":e.mode===`region`}]),"aria-current":e.mode===`region`?`location`:void 0,onClick:r[1]||(r[1]=e=>n(`region`))},[U(`span`,{class:`h-1.5 w-1.5 shrink-0 rounded-full`,style:ae({backgroundColor:e.region.color,boxShadow:`0 0 8px ${e.region.color}`})},null,4),ba(` `+F(e.region.shortName),1)],10,qO),e.city?(V(),H(ta,{key:0},[r[3]||(r[3]=U(`span`,{class:`breadcrumb-separator`,"aria-hidden":`true`},`/`,-1)),U(`button`,{type:`button`,class:ue([`breadcrumb-crumb`,{"is-current":e.mode===`city`}]),"aria-current":e.mode===`city`?`location`:void 0,onClick:r[2]||(r[2]=e=>n(`city`))},F(e.city.name),11,JO)],64)):xa(``,!0),e.project?(V(),H(ta,{key:1},[r[4]||(r[4]=U(`span`,{class:`breadcrumb-separator`,"aria-hidden":`true`},`/`,-1)),U(`span`,YO,F(e.project.title),1)],64)):xa(``,!0)])):xa(``,!0)}}),ZO={class:`pointer-events-auto relative z-40 flex items-center justify-between gap-4 px-4 py-4 md:px-8`},QO={class:`grid h-9 w-9 place-items-center rounded-xl border border-glow/30 bg-glow/10 font-display text-sm text-glow`},$O={class:`hidden sm:block`},ek={class:`block font-display text-sm tracking-[0.08em] text-ice`},tk={class:`block text-[10px] uppercase tracking-[0.18em] text-mist/70`},nk={class:`hidden items-center gap-6 md:flex`,"aria-label":`Navegación principal`},rk=[`aria-current`,`onClick`],ik={class:`flex items-center gap-2 md:hidden`},ak=[`aria-expanded`],ok={key:0,viewBox:`0 0 24 24`,class:`h-4 w-4`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},sk={key:1,viewBox:`0 0 24 24`,class:`h-4 w-4`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},ck={key:0,id:`mobile-navigation`,"data-modal":`true`,class:`panel-glass absolute top-[calc(100%-0.25rem)] right-4 left-4 flex flex-col gap-1 rounded-2xl p-2 md:hidden`,"aria-label":`Navegación principal móvil`},lk=[`onClick`],uk=mr({__name:`MainNavigation`,props:{activePanel:{},isOverview:{type:Boolean}},emits:[`navigate`],setup(e,{emit:t}){let n=e,r=t,i=Ut(!1);function a(e){return n.activePanel?n.activePanel===e:e===`mapa`&&n.isOverview}function o(e){i.value=!1,r(`navigate`,e)}function s(e){e.key===`Escape`&&i.value&&(e.preventDefault(),e.stopPropagation(),i.value=!1)}return kr(()=>document.addEventListener(`keydown`,s,!0)),Mr(()=>document.removeEventListener(`keydown`,s,!0)),(e,t)=>(V(),H(`header`,ZO,[U(`button`,{type:`button`,class:`group flex items-center gap-3 text-left`,"aria-label":`Volver al inicio`,onClick:t[0]||(t[0]=e=>o(`inicio`))},[U(`span`,QO,F(B(zl).initials),1),U(`span`,$O,[U(`span`,ek,F(B(zl).name),1),U(`span`,tk,F(B(zl).location),1)])]),U(`nav`,nk,[(V(!0),H(ta,null,zr(B(Bl),e=>(V(),H(`button`,{key:e.id,type:`button`,class:ue([`nav-link`,{"is-active":a(e.id)}]),"aria-current":a(e.id)?`page`:void 0,onClick:t=>o(e.id)},F(e.label),11,rk))),128)),ga(B(cl),{to:`/proyectos`,class:`rounded-full border border-glow/25 bg-glow/8 px-4 py-2 text-[11px] uppercase tracking-[0.14em] text-glow transition-colors hover:border-glow/60 hover:text-ice`},{default:kn(()=>[...t[2]||(t[2]=[ba(` Proyectos `,-1)])]),_:1})]),U(`div`,ik,[ga(B(cl),{to:`/proyectos`,class:`rounded-full border border-glow/25 bg-glow/8 px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-glow`},{default:kn(()=>[...t[3]||(t[3]=[ba(` Proyectos `,-1)])]),_:1}),U(`button`,{type:`button`,class:`map-button`,"aria-expanded":i.value,"aria-controls":`mobile-navigation`,"aria-label":`Abrir menú de navegación`,onClick:t[1]||(t[1]=e=>i.value=!i.value)},[i.value?(V(),H(`svg`,sk,[...t[5]||(t[5]=[U(`path`,{d:`M6 6l12 12M18 6 6 18`,"stroke-linecap":`round`},null,-1)])])):(V(),H(`svg`,ok,[...t[4]||(t[4]=[U(`path`,{d:`M4 7h16M4 12h16M4 17h16`,"stroke-linecap":`round`},null,-1)])]))],8,ak)]),ga(uo,{name:`panel`},{default:kn(()=>[i.value?(V(),H(`nav`,ck,[(V(!0),H(ta,null,zr(B(Bl),e=>(V(),H(`button`,{key:e.id,type:`button`,class:ue([`rounded-xl px-4 py-3 text-left text-sm text-mist transition-colors hover:bg-elevated/60 hover:text-ice`,{"bg-elevated/60 text-ice":a(e.id)}]),onClick:t=>o(e.id)},F(e.label),11,lk))),128))])):xa(``,!0)]),_:1})]))}}),dk=[`aria-label`],fk={class:`flex items-start justify-between gap-4 px-5 pt-5`},pk={class:`flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-mist`},mk={class:`mt-2 font-display text-xl leading-tight text-ice`},hk={class:`min-h-0 flex-1 overflow-y-auto px-5 pb-5`},gk={class:`mt-3 text-sm leading-relaxed text-ice/80`},_k={class:`mt-3 text-xs leading-relaxed text-mist`},vk={class:`mt-4 flex flex-wrap gap-1.5`},yk={key:0,class:`mt-6`},bk={class:`flex items-center justify-between`},xk={class:`font-mono text-[10px] text-glow`},Sk={class:`mt-3 grid gap-2 sm:grid-cols-2`},Ck=[`onClick`],wk={class:`min-w-0`},Tk={class:`block truncate text-xs text-ice`},Ek={class:`block text-[9px] uppercase tracking-[0.14em] text-mist`},Dk={class:`mt-6`},Ok={class:`flex items-center justify-between`},kk={class:`font-mono text-[10px] text-glow`},Ak={key:0,class:`mt-3 space-y-2`},jk=[`onClick`],Mk={class:`font-mono text-[10px] text-glow/70`},Nk={class:`min-w-0 flex-1`},Pk={class:`block truncate text-sm text-ice`},Fk={class:`block truncate text-[10px] uppercase tracking-[0.14em] text-mist`},Ik={key:1,class:`mt-3 rounded-xl border border-dashed border-white/10 bg-white/[0.015] px-4 py-5 text-center`},Lk=mr({__name:`RegionInformation`,props:{region:{},projects:{},cities:{}},emits:[`close`,`selectCity`,`selectProject`,`contact`],setup(e,{emit:t}){let n=t;return(t,r)=>(V(),H(`section`,{class:`panel-glass pointer-events-auto flex max-h-[calc(100dvh-11rem)] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl`,"aria-label":`Información de la región ${e.region.name}`},[U(`div`,{class:`h-px w-full`,style:ae({background:`linear-gradient(90deg, transparent, ${e.region.color}, transparent)`})},null,4),U(`header`,fk,[U(`div`,null,[U(`p`,pk,[U(`span`,{class:`h-1.5 w-1.5 rounded-full`,style:ae({backgroundColor:e.region.color,boxShadow:`0 0 10px ${e.region.color}`})},null,4),ba(` Región `+F(e.region.shortName),1)]),U(`h2`,mk,F(e.region.name),1)]),U(`button`,{type:`button`,class:`map-button !h-8 !min-w-8`,"aria-label":`Cerrar información de la región`,onClick:r[0]||(r[0]=e=>n(`close`))},[...r[2]||(r[2]=[U(`svg`,{viewBox:`0 0 24 24`,class:`h-3.5 w-3.5`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},[U(`path`,{d:`M6 6l12 12M18 6 6 18`,"stroke-linecap":`round`})],-1)])])]),U(`div`,hk,[U(`p`,gk,F(e.region.tagline),1),U(`p`,_k,F(e.region.description),1),U(`div`,vk,[(V(!0),H(ta,null,zr(e.region.services,e=>(V(),H(`span`,{key:e,class:`tech-chip`},F(e),1))),128))]),e.cities.length?(V(),H(`div`,yk,[U(`div`,bk,[r[3]||(r[3]=U(`h3`,{class:`text-[10px] uppercase tracking-[0.2em] text-mist`},`Distritos de la región`,-1)),U(`span`,xk,F(String(e.cities.length).padStart(2,`0`)),1)]),U(`div`,Sk,[(V(!0),H(ta,null,zr(e.cities,e=>(V(),H(`button`,{key:e.id,type:`button`,class:`group flex items-center justify-between gap-2 rounded-xl border border-white/6 bg-white/[0.02] px-3 py-2.5 text-left transition-colors hover:border-glow/35 hover:bg-glow/5`,onClick:t=>n(`selectCity`,e.id)},[U(`span`,wk,[U(`span`,Tk,F(e.name),1),U(`span`,Ek,F(e.projectIds.length)+` proyectos `,1)]),r[4]||(r[4]=U(`svg`,{viewBox:`0 0 24 24`,class:`h-3.5 w-3.5 shrink-0 text-mist transition-transform group-hover:translate-x-0.5 group-hover:text-glow`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},[U(`path`,{d:`M5 12h14M13 6l6 6-6 6`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1))],8,Ck))),128))])])):xa(``,!0),U(`div`,Dk,[U(`div`,Ok,[r[5]||(r[5]=U(`h3`,{class:`text-[10px] uppercase tracking-[0.2em] text-mist`},`Proyectos en esta región`,-1)),U(`span`,kk,F(String(e.projects.length).padStart(2,`0`)),1)]),e.projects.length?(V(),H(`div`,Ak,[(V(!0),H(ta,null,zr(e.projects,(e,t)=>(V(),H(`button`,{key:e.id,type:`button`,class:`group flex w-full items-center gap-3 rounded-xl border border-white/6 bg-white/[0.02] px-3 py-3 text-left transition-colors hover:border-glow/35 hover:bg-glow/5`,onClick:t=>n(`selectProject`,e.id)},[U(`span`,Mk,F(String(t+1).padStart(2,`0`)),1),U(`span`,Nk,[U(`span`,Pk,F(e.title),1),U(`span`,Fk,F(e.category),1)]),r[6]||(r[6]=U(`svg`,{viewBox:`0 0 24 24`,class:`h-4 w-4 shrink-0 text-mist transition-transform group-hover:translate-x-0.5 group-hover:text-glow`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},[U(`path`,{d:`M5 12h14M13 6l6 6-6 6`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1))],8,jk))),128))])):(V(),H(`div`,Ik,[r[7]||(r[7]=U(`p`,{class:`font-display text-sm text-ice/85`},`Próximamente`,-1)),r[8]||(r[8]=U(`p`,{class:`mt-1 text-[11px] leading-relaxed text-mist`},` Este territorio está en exploración. Los próximos proyectos se incorporarán aquí. `,-1)),U(`button`,{type:`button`,class:`mt-3 text-[11px] uppercase tracking-[0.14em] text-glow transition-colors hover:text-ice`,onClick:r[1]||(r[1]=e=>n(`contact`))},` Hablemos de tu proyecto → `)]))])])],8,dk))}}),Rk=[`aria-label`],zk={class:`flex items-start justify-between gap-4 px-5 pt-5`},Bk={class:`flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-mist`},Vk={class:`mt-2 font-display text-xl leading-tight text-ice`},Hk={class:`min-h-0 flex-1 overflow-y-auto px-5 pb-5`},Uk={class:`mt-3 text-sm leading-relaxed text-ice/80`},Wk={key:0,class:`mt-4 flex flex-wrap gap-1.5`},Gk={class:`mt-6`},Kk={class:`flex items-center justify-between`},qk={class:`font-mono text-[10px] text-glow`},Jk={key:0,class:`mt-3 space-y-2`},Yk=[`onClick`],Xk={class:`font-mono text-[10px] text-glow/70`},Zk={class:`min-w-0 flex-1`},Qk={class:`block truncate text-sm text-ice`},$k={class:`block truncate text-[10px] uppercase tracking-[0.14em] text-mist`},eA={key:1,class:`mt-3 rounded-xl border border-dashed border-white/10 bg-white/[0.015] px-4 py-5 text-center`},tA=mr({__name:`CityInformation`,props:{city:{},region:{},projects:{}},emits:[`close`,`back`,`selectProject`,`contact`],setup(e,{emit:t}){let n=e,r=t,i=n.region.services.slice(0,3);return(t,n)=>(V(),H(`section`,{class:`panel-glass pointer-events-auto flex max-h-[calc(100dvh-11rem)] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl`,"aria-label":`Información del distrito ${e.city.name}`},[U(`div`,{class:`h-px w-full`,style:ae({background:`linear-gradient(90deg, transparent, ${e.region.color}, transparent)`})},null,4),U(`header`,zk,[U(`div`,null,[U(`p`,Bk,[U(`span`,{class:`h-1.5 w-1.5 rounded-full`,style:ae({backgroundColor:e.region.color,boxShadow:`0 0 10px ${e.region.color}`})},null,4),ba(` Distrito de `+F(e.region.shortName),1)]),U(`h2`,Vk,F(e.city.name),1)]),U(`button`,{type:`button`,class:`map-button !h-8 !min-w-8`,"aria-label":`Cerrar información del distrito`,onClick:n[0]||(n[0]=e=>r(`close`))},[...n[3]||(n[3]=[U(`svg`,{viewBox:`0 0 24 24`,class:`h-3.5 w-3.5`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},[U(`path`,{d:`M6 6l12 12M18 6 6 18`,"stroke-linecap":`round`})],-1)])])]),U(`div`,Hk,[U(`p`,Uk,` Un núcleo urbano de `+F(e.region.name)+` donde la exploración territorial se acerca al detalle de cada proyecto. `,1),B(i).length?(V(),H(`div`,Wk,[(V(!0),H(ta,null,zr(B(i),e=>(V(),H(`span`,{key:e,class:`tech-chip`},F(e),1))),128))])):xa(``,!0),U(`div`,Gk,[U(`div`,Kk,[n[4]||(n[4]=U(`h3`,{class:`text-[10px] uppercase tracking-[0.2em] text-mist`},`Proyectos en este distrito`,-1)),U(`span`,qk,F(String(e.projects.length).padStart(2,`0`)),1)]),e.projects.length?(V(),H(`div`,Jk,[(V(!0),H(ta,null,zr(e.projects,(e,t)=>(V(),H(`button`,{key:e.id,type:`button`,class:`group flex w-full items-center gap-3 rounded-xl border border-white/6 bg-white/[0.02] px-3 py-3 text-left transition-colors hover:border-glow/35 hover:bg-glow/5`,onClick:t=>r(`selectProject`,e.id)},[U(`span`,Xk,F(String(t+1).padStart(2,`0`)),1),U(`span`,Zk,[U(`span`,Qk,F(e.title),1),U(`span`,$k,F(e.category),1)]),n[5]||(n[5]=U(`svg`,{viewBox:`0 0 24 24`,class:`h-4 w-4 shrink-0 text-mist transition-transform group-hover:translate-x-0.5 group-hover:text-glow`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},[U(`path`,{d:`M5 12h14M13 6l6 6-6 6`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1))],8,Yk))),128))])):(V(),H(`div`,eA,[n[6]||(n[6]=U(`p`,{class:`font-display text-sm text-ice/85`},`Distrito en desarrollo`,-1)),n[7]||(n[7]=U(`p`,{class:`mt-1 text-[11px] leading-relaxed text-mist`},` Este núcleo urbano está preparado para recibir nuevos proyectos. `,-1)),U(`button`,{type:`button`,class:`mt-3 text-[11px] uppercase tracking-[0.14em] text-glow transition-colors hover:text-ice`,onClick:n[1]||(n[1]=e=>r(`contact`))},` Hablemos de tu proyecto → `)]))]),U(`button`,{type:`button`,class:`mt-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-mist transition-colors hover:text-ice`,onClick:n[2]||(n[2]=e=>r(`back`))},[n[8]||(n[8]=U(`svg`,{viewBox:`0 0 24 24`,class:`h-3.5 w-3.5`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},[U(`path`,{d:`M19 12H5M11 18l-6-6 6-6`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)),ba(` Volver a `+F(e.region.shortName),1)])])],8,Rk))}}),nA=[`aria-label`],rA={class:`flex items-start justify-between gap-6 border-b border-white/8 px-6 py-6 md:px-8`},iA={class:`text-[10px] uppercase tracking-[0.24em] text-glow`},aA={class:`mt-2 font-display text-3xl text-ice`},oA={class:`min-h-0 flex-1 overflow-y-auto px-6 py-6 md:px-8`},sA={class:`text-sm leading-relaxed text-ice/80`},cA={class:`mt-7 space-y-5`},lA={class:`flex items-center gap-2`},uA={class:`font-display text-sm text-ice`},dA={class:`mt-2 flex flex-wrap gap-1.5`},fA={key:1,class:`mt-7 space-y-4`},pA={class:`rounded-xl border border-white/8 bg-white/[0.02] p-4`},mA={class:`mt-2 flex items-center gap-2 text-sm text-ice/80`},hA={class:`rounded-xl border border-white/8 bg-white/[0.02] p-4`},gA={class:`mt-2 text-sm text-ice/80`},_A={key:2,class:`mt-7 space-y-3`},vA=[`href`],yA={class:`mt-1 block text-sm text-ice`},bA={class:`mt-1 block text-sm text-ice`},xA={class:`rounded-xl border border-white/8 bg-white/[0.02] px-4 py-4`},SA={class:`mt-1 block text-sm text-ice`},CA={key:0,class:`flex gap-2 pt-2`},wA=[`href`],TA={class:`border-t border-white/8 px-6 py-4 md:px-8`},EA={class:`flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-mist/70`},DA=mr({__name:`InfoPanel`,props:{panel:{}},emits:[`close`,`contact`],setup(e,{emit:t}){let n=e,r=t,i=Ut(!1),a=0,o=Ja(()=>n.panel===`servicios`?{eyebrow:`Capacidades`,title:`Servicios`,intro:`Cada territorio del mapa representa una especialidad. Estas son las áreas desde las que puedo aportar a un producto digital.`}:n.panel===`sobre-mi`?{eyebrow:`Perfil`,title:`Sobre mí`,intro:zl.summary}:{eyebrow:`Conversemos`,title:`Contacto`,intro:`¿Tienes un proyecto, una idea o un proceso que digitalizar? Escríbeme y revisemos cómo abordarlo.`});async function s(){try{await navigator.clipboard.writeText(zl.email),i.value=!0,window.clearTimeout(a),a=window.setTimeout(()=>{i.value=!1},2200)}catch{i.value=!1}}function c(e){e.key===`Escape`&&r(`close`)}return kr(()=>document.addEventListener(`keydown`,c)),Mr(()=>{document.removeEventListener(`keydown`,c),window.clearTimeout(a)}),(t,n)=>(V(),H(`div`,{class:`fixed inset-0 z-[60] flex justify-end`,onClick:n[3]||(n[3]=is(e=>r(`close`),[`self`]))},[U(`div`,{class:`absolute inset-0 bg-abyss/70 backdrop-blur-sm`,"aria-hidden":`true`,onClick:n[0]||(n[0]=e=>r(`close`))}),U(`aside`,{role:`dialog`,"aria-modal":`true`,"data-modal":`true`,"aria-label":o.value.title,class:`panel-glass relative z-10 flex h-full w-[min(520px,100vw)] flex-col overflow-hidden`},[U(`header`,rA,[U(`div`,null,[U(`p`,iA,F(o.value.eyebrow),1),U(`h2`,aA,F(o.value.title),1)]),U(`button`,{type:`button`,class:`map-button`,"aria-label":`Cerrar panel`,onClick:n[1]||(n[1]=e=>r(`close`))},[...n[4]||(n[4]=[U(`svg`,{viewBox:`0 0 24 24`,class:`h-4 w-4`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},[U(`path`,{d:`M6 6l12 12M18 6 6 18`,"stroke-linecap":`round`})],-1)])])]),U(`div`,oA,[U(`p`,sA,F(o.value.intro),1),e.panel===`servicios`?(V(),H(ta,{key:0},[U(`div`,cA,[(V(!0),H(ta,null,zr(B(Nl),e=>(V(),H(`section`,{key:e.id},[U(`div`,lA,[U(`span`,{class:`h-1.5 w-1.5 rounded-full`,style:ae({backgroundColor:e.color})},null,4),U(`h3`,uA,F(e.name),1)]),U(`div`,dA,[(V(!0),H(ta,null,zr(e.services,e=>(V(),H(`span`,{key:e,class:`tech-chip`},F(e),1))),128))])]))),128))]),U(`button`,{type:`button`,class:`mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-glow transition-colors hover:text-ice`,onClick:n[2]||(n[2]=e=>r(`contact`))},[...n[5]||(n[5]=[ba(` Cuéntame tu necesidad `,-1),U(`svg`,{viewBox:`0 0 24 24`,class:`h-4 w-4`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},[U(`path`,{d:`M5 12h14M13 6l6 6-6 6`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)])])],64)):e.panel===`sobre-mi`?(V(),H(`div`,fA,[n[9]||(n[9]=U(`div`,{class:`rounded-xl border border-white/8 bg-white/[0.02] p-4`},[U(`p`,{class:`text-[10px] uppercase tracking-[0.18em] text-mist`},`Enfoque`),U(`p`,{class:`mt-2 text-sm leading-relaxed text-ice/80`},` Diseño y desarrollo soluciones completas: desde la arquitectura y los datos hasta la interfaz y el detalle visual. Priorizo el rendimiento, la claridad y el mantenimiento a largo plazo. `)],-1)),U(`div`,pA,[n[7]||(n[7]=U(`p`,{class:`text-[10px] uppercase tracking-[0.18em] text-mist`},`Disponibilidad`,-1)),U(`p`,mA,[n[6]||(n[6]=U(`span`,{class:`h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]`},null,-1)),ba(` `+F(B(zl).availability),1)])]),U(`div`,hA,[n[8]||(n[8]=U(`p`,{class:`text-[10px] uppercase tracking-[0.18em] text-mist`},`Rol`,-1)),U(`p`,gA,F(B(zl).role),1)])])):(V(),H(`div`,_A,[U(`a`,{href:`mailto:${B(zl).email}`,class:`flex items-center justify-between gap-4 rounded-xl border border-glow/25 bg-glow/6 px-4 py-4 transition-colors hover:border-glow/55 hover:bg-glow/10`},[U(`span`,null,[n[10]||(n[10]=U(`span`,{class:`block text-[10px] uppercase tracking-[0.18em] text-mist`},`Correo`,-1)),U(`span`,yA,F(B(zl).email),1)]),n[11]||(n[11]=U(`svg`,{viewBox:`0 0 24 24`,class:`h-4 w-4 shrink-0 text-glow`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},[U(`path`,{d:`M5 12h14M13 6l6 6-6 6`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1))],8,vA),U(`button`,{type:`button`,class:`flex w-full items-center justify-between gap-4 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-4 text-left transition-colors hover:border-glow/35`,onClick:s},[U(`span`,null,[n[12]||(n[12]=U(`span`,{class:`block text-[10px] uppercase tracking-[0.18em] text-mist`},`Copiar correo`,-1)),U(`span`,bA,F(i.value?`Copiado al portapapeles`:`Un clic, sin seleccionar texto`),1)]),U(`span`,{class:ue([`font-mono text-[10px] uppercase tracking-[0.12em]`,i.value?`text-emerald-300`:`text-mist`])},F(i.value?`OK`:`Copiar`),3)]),U(`div`,xA,[n[13]||(n[13]=U(`span`,{class:`block text-[10px] uppercase tracking-[0.18em] text-mist`},`Ubicación`,-1)),U(`span`,SA,F(B(zl).location),1)]),B(zl).socials.length?(V(),H(`div`,CA,[(V(!0),H(ta,null,zr(B(zl).socials,e=>(V(),H(`a`,{key:e.label,href:e.url,target:`_blank`,rel:`noreferrer noopener`,class:`tech-chip transition-colors hover:border-glow/60 hover:text-ice`},F(e.label),9,wA))),128))])):xa(``,!0)]))]),U(`footer`,TA,[U(`p`,EA,[n[14]||(n[14]=U(`span`,{class:`h-1 w-1 rounded-full bg-glow`},null,-1)),ba(` `+F(B(zl).name)+` · `+F(B(zl).location),1)])])],8,nA)]))}}),OA=`/images/projects/fallback.svg`;function kA(e){let t=e.target;t instanceof HTMLImageElement&&(t.src.endsWith(`fallback.svg`)||(t.src=OA))}var AA={class:`group relative aspect-video overflow-hidden rounded-xl border border-white/8 bg-night`},jA=[`src`,`alt`],MA={class:`absolute right-3 bottom-3 rounded-full border border-white/12 bg-abyss/75 px-2 py-1 font-mono text-[10px] text-ice/80`},NA={key:0,class:`mt-2 grid grid-cols-4 gap-2`},PA=[`aria-label`,`aria-pressed`,`onClick`],FA=[`src`,`alt`],IA=mr({__name:`ProjectGallery`,props:{images:{},title:{}},setup(e){let t=e,n=Ut(0),r=Ja(()=>t.images.length?t.images:[OA]),i=Ja(()=>r.value[n.value]??`/images/projects/fallback.svg`);function a(e){n.value=e}function o(e){let t=r.value.length;n.value=(n.value+e+t)%t}return Fn(()=>t.images,()=>{n.value=0}),(t,s)=>(V(),H(`div`,null,[U(`div`,AA,[U(`img`,{src:i.value,alt:`${e.title} — captura ${n.value+1}`,class:`h-full w-full object-cover`,loading:`lazy`,decoding:`async`,onError:s[0]||(s[0]=(...e)=>B(kA)&&B(kA)(...e))},null,40,jA),s[6]||(s[6]=U(`div`,{class:`pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss/45 via-transparent to-transparent`},null,-1)),r.value.length>1?(V(),H(ta,{key:0},[U(`button`,{type:`button`,class:`absolute top-1/2 left-2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-abyss/70 text-ice opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 focus-visible:opacity-100`,"aria-label":`Captura anterior`,onClick:s[1]||(s[1]=e=>o(-1))},[...s[4]||(s[4]=[U(`svg`,{viewBox:`0 0 24 24`,class:`h-4 w-4`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},[U(`path`,{d:`M15 6l-6 6 6 6`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)])]),U(`button`,{type:`button`,class:`absolute top-1/2 right-2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-abyss/70 text-ice opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 focus-visible:opacity-100`,"aria-label":`Captura siguiente`,onClick:s[2]||(s[2]=e=>o(1))},[...s[5]||(s[5]=[U(`svg`,{viewBox:`0 0 24 24`,class:`h-4 w-4`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},[U(`path`,{d:`M9 6l6 6-6 6`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)])]),U(`span`,MA,F(n.value+1)+` / `+F(r.value.length),1)],64)):xa(``,!0)]),r.value.length>1?(V(),H(`div`,NA,[(V(!0),H(ta,null,zr(r.value,(t,r)=>(V(),H(`button`,{key:`${t}-${r}`,type:`button`,class:ue([`aspect-video overflow-hidden rounded-lg border transition-colors`,n.value===r?`border-glow/70`:`border-white/8 hover:border-white/25`]),"aria-label":`Ver captura ${r+1}`,"aria-pressed":n.value===r,onClick:e=>a(r)},[U(`img`,{src:t,alt:`${e.title} miniatura ${r+1}`,class:`h-full w-full object-cover`,loading:`lazy`,decoding:`async`,onError:s[3]||(s[3]=(...e)=>B(kA)&&B(kA)(...e))},null,40,FA)],10,PA))),128))])):xa(``,!0)]))}}),LA=[`aria-label`],RA={class:`flex items-start justify-between gap-5 border-b border-white/8 px-6 py-5 md:px-8`},zA={class:`text-[10px] uppercase tracking-[0.22em] text-glow`},BA={class:`mt-1.5 font-display text-2xl text-ice md:text-3xl`},VA={class:`min-h-0 flex-1 overflow-y-auto px-6 py-6 md:px-8`},HA={class:`mt-6 text-sm leading-relaxed text-ice/85`},UA={key:0,class:`mt-6 grid gap-3 sm:grid-cols-2`},WA={key:0,class:`rounded-xl border border-white/8 bg-white/[0.02] p-4`},GA={class:`mt-2 text-xs leading-relaxed text-ice/75`},KA={key:1,class:`rounded-xl border border-white/8 bg-white/[0.02] p-4`},qA={class:`mt-2 text-xs leading-relaxed text-ice/75`},JA={class:`mt-6`},YA={class:`mt-2 flex flex-wrap gap-1.5`},XA={class:`mt-6`},ZA={class:`mt-2 space-y-2`},QA={class:`flex flex-wrap items-center justify-between gap-3 border-t border-white/8 px-6 py-4 md:px-8`},$A=[`href`],ej=mr({__name:`ProjectDetail`,props:{project:{}},emits:[`close`,`selectRegion`],setup(e,{emit:t}){let n=e,r=t,i=Ja(()=>{let e=[n.project.image,...n.project.gallery??[]];return[...new Set(e)]});function a(e){e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),r(`close`))}return kr(()=>document.addEventListener(`keydown`,a)),Mr(()=>document.removeEventListener(`keydown`,a)),(t,n)=>(V(),da(Xn,{to:`body`},[U(`div`,{class:`fixed inset-0 z-[70] flex justify-end`,onClick:n[3]||(n[3]=is(e=>r(`close`),[`self`]))},[U(`div`,{class:`absolute inset-0 bg-abyss/75 backdrop-blur-sm`,"aria-hidden":`true`,onClick:n[0]||(n[0]=e=>r(`close`))}),U(`article`,{role:`dialog`,"aria-modal":`true`,"data-modal":`true`,"aria-label":`Ficha del proyecto ${e.project.title}`,class:`panel-glass relative z-10 flex h-full w-[min(720px,100vw)] flex-col overflow-hidden`},[U(`header`,RA,[U(`div`,null,[U(`p`,zA,F(e.project.category),1),U(`h2`,BA,F(e.project.title),1)]),U(`button`,{type:`button`,class:`map-button shrink-0`,"aria-label":`Cerrar ficha del proyecto`,onClick:n[1]||(n[1]=e=>r(`close`))},[...n[4]||(n[4]=[U(`svg`,{viewBox:`0 0 24 24`,class:`h-4 w-4`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},[U(`path`,{d:`M6 6l12 12M18 6 6 18`,"stroke-linecap":`round`})],-1)])])]),U(`div`,VA,[ga(IA,{images:i.value,title:e.project.title},null,8,[`images`,`title`]),U(`p`,HA,F(e.project.description),1),e.project.problem||e.project.solution?(V(),H(`div`,UA,[e.project.problem?(V(),H(`section`,WA,[n[5]||(n[5]=U(`h3`,{class:`text-[10px] uppercase tracking-[0.18em] text-mist`},`Reto`,-1)),U(`p`,GA,F(e.project.problem),1)])):xa(``,!0),e.project.solution?(V(),H(`section`,KA,[n[6]||(n[6]=U(`h3`,{class:`text-[10px] uppercase tracking-[0.18em] text-mist`},`Solución`,-1)),U(`p`,qA,F(e.project.solution),1)])):xa(``,!0)])):xa(``,!0),U(`div`,JA,[n[7]||(n[7]=U(`h3`,{class:`text-[10px] uppercase tracking-[0.18em] text-mist`},`Tecnologías`,-1)),U(`div`,YA,[(V(!0),H(ta,null,zr(e.project.technologies,e=>(V(),H(`span`,{key:e,class:`tech-chip`},F(e),1))),128))])]),U(`div`,XA,[n[9]||(n[9]=U(`h3`,{class:`text-[10px] uppercase tracking-[0.18em] text-mist`},`Aspectos destacados`,-1)),U(`ul`,ZA,[(V(!0),H(ta,null,zr(e.project.features,e=>(V(),H(`li`,{key:e,class:`flex gap-2.5 text-xs leading-relaxed text-ice/75`},[n[8]||(n[8]=U(`span`,{class:`mt-1.5 h-1 w-1 shrink-0 rounded-full bg-glow`},null,-1)),ba(` `+F(e),1)]))),128))])])]),U(`footer`,QA,[U(`button`,{type:`button`,class:`text-[11px] uppercase tracking-[0.14em] text-mist transition-colors hover:text-ice`,onClick:n[2]||(n[2]=t=>r(`selectRegion`,e.project.regionId))},` ← Explorar la región `),e.project.liveUrl?(V(),H(`a`,{key:0,href:e.project.liveUrl,target:`_blank`,rel:`noreferrer noopener`,class:`inline-flex items-center gap-2 rounded-xl border border-glow/30 bg-glow/8 px-4 py-2.5 text-[11px] uppercase tracking-[0.14em] text-glow transition-colors hover:border-glow/60 hover:bg-glow/12 hover:text-ice`},[...n[10]||(n[10]=[ba(` Ver sitio en vivo `,-1),U(`svg`,{viewBox:`0 0 24 24`,class:`h-3.5 w-3.5`,fill:`none`,stroke:`currentColor`,"stroke-width":`1.8`,"aria-hidden":`true`},[U(`path`,{d:`M7 17 17 7M9 7h8v8`,"stroke-linecap":`round`,"stroke-linejoin":`round`})],-1)])],8,$A)):xa(``,!0)])],8,LA)])]))}}),tj={key:0,class:`fixed inset-0 z-[80] grid place-items-center bg-abyss`,role:`status`,"aria-live":`polite`,"aria-label":`Cargando el mapa digital`},nj=((e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n})(mr({__name:`LoadingScreen`,props:{visible:{type:Boolean}},setup(e){return(t,n)=>(V(),da(uo,{name:`fade`},{default:kn(()=>[e.visible?(V(),H(`div`,tj,[...n[0]||(n[0]=[U(`div`,{class:`flex w-[min(320px,80vw)] flex-col items-center gap-7 text-center`},[U(`div`,{class:`relative grid h-20 w-20 place-items-center`},[U(`span`,{class:`absolute inset-0 animate-ping rounded-2xl border border-glow/20`}),U(`span`,{class:`absolute inset-2 rounded-2xl border border-glow/35 bg-glow/5`}),U(`span`,{class:`relative font-display text-lg tracking-[0.24em] text-glow`},`DS`)]),U(`div`,{class:`space-y-2`},[U(`p`,{class:`font-display text-sm uppercase tracking-[0.28em] text-ice`},`Desplegando territorio`),U(`p`,{class:`text-xs text-mist`},`Preparando geometría, rutas y marcadores`)]),U(`div`,{class:`h-px w-full overflow-hidden rounded-full bg-white/10`},[U(`span`,{class:`loading-bar block h-full w-1/2 bg-gradient-to-r from-transparent via-glow to-transparent`})])],-1)])])):xa(``,!0)]),_:1}))}}),[[`__scopeId`,`data-v-691c385c`]]),rj={class:`relative h-dvh w-full overflow-hidden map-shell grain`,"aria-label":`Mapa digital de proyectos`},ij={class:`pointer-events-none absolute inset-0 z-20 flex flex-col`},aj={class:`absolute top-[4.75rem] left-1/2 z-30 -translate-x-1/2 md:top-20`},oj={class:`absolute top-1/2 right-4 z-30 -translate-y-1/2`},sj={class:`absolute right-6 bottom-24 z-20 hidden lg:block`},cj={key:0,class:`absolute bottom-6 left-6 z-20`},lj={class:`absolute bottom-5 left-1/2 z-30 -translate-x-1/2`},uj={key:0,class:`absolute bottom-24 left-4 z-40 md:left-6`},dj={key:0,class:`absolute bottom-24 left-4 z-40 md:left-6`},fj=mr({__name:`DigitalMap`,props:{initialRegion:{}},setup(e){let t=e,{state:n,selectedRegion:r,selectedCity:i,selectedProject:a,selectedRegionCities:o,selectedRegionProjects:s,selectedCityProjects:c,isOverview:l,projectCounts:u}=Yl(),d=Wt(null),{activePanel:f,navigate:p,closePanel:m}=Xl(d),{zoomIn:h,zoomOut:g,reset:_,focusNextRegion:v}=Zl(d);$l(d);function y(e){d.value=e,t.initialRegion&&e.selectRegion(t.initialRegion)}function b(e){d.value?.selectRegion(e)}function x(e){d.value?.selectCity(e)}function S(e){d.value?.selectProject(e)}function C(){d.value?.goOverview()}function w(){let e=n.selection.regionId;e&&d.value?.selectRegion(e)}function T(){let e=n.selection.cityId;e&&d.value?.selectCity(e)}function E(){d.value?.goOverview()}function D(){d.value?.goUp()}function O(){d.value?.goUp()}function k(e){p(e)}function A(){p(`contacto`)}return(e,t)=>(V(),H(`main`,rj,[ga(DO,{onReady:y}),U(`div`,ij,[ga(uk,{"active-panel":B(f),"is-overview":B(l),onNavigate:k},null,8,[`active-panel`,`is-overview`])]),U(`div`,aj,[ga(XO,{mode:B(n).selection.mode,region:B(r),city:B(i),project:B(a),onOverview:C,onRegion:w,onCity:T},null,8,[`mode`,`region`,`city`,`project`])]),U(`div`,oj,[ga(GO,{"can-zoom-in":!B(n).loading,"can-zoom-out":!B(n).loading,onZoomIn:B(h),onZoomOut:B(g),onReset:B(_),onPrevious:t[0]||(t[0]=e=>B(v)(-1)),onNext:t[1]||(t[1]=e=>B(v)(1))},null,8,[`can-zoom-in`,`can-zoom-out`,`onZoomIn`,`onZoomOut`,`onReset`])]),U(`div`,sj,[ga(PO,{transitioning:B(n).transitioning},null,8,[`transitioning`])]),B(l)&&!B(f)?(V(),H(`div`,cj,[ga(MO,{"region-count":B(Nl).length,"project-count":B(Dl).length,"quality-tier":B(n).qualityTier},null,8,[`region-count`,`project-count`,`quality-tier`])])):xa(``,!0),U(`div`,lj,[ga(RO,{regions:B(Nl),"selected-region-id":B(n).selection.regionId,"project-counts":B(u),onSelect:b},null,8,[`regions`,`selected-region-id`,`project-counts`])]),ga(VO,{projects:B(Dl),onSelect:S},null,8,[`projects`]),ga(uo,{name:`panel`},{default:kn(()=>[B(r)&&B(n).selection.mode===`region`?(V(),H(`div`,uj,[ga(Lk,{region:B(r),projects:B(s),cities:B(o),onClose:E,onSelectCity:x,onSelectProject:S,onContact:A},null,8,[`region`,`projects`,`cities`])])):xa(``,!0)]),_:1}),ga(uo,{name:`panel`},{default:kn(()=>[B(i)&&B(r)&&B(n).selection.mode===`city`?(V(),H(`div`,dj,[ga(tA,{city:B(i),region:B(r),projects:B(c),onClose:D,onBack:w,onSelectProject:S,onContact:A},null,8,[`city`,`region`,`projects`])])):xa(``,!0)]),_:1}),B(a)?(V(),da(ej,{key:1,project:B(a),onClose:O,onSelectRegion:b},null,8,[`project`])):xa(``,!0),B(f)?(V(),da(DA,{key:2,panel:B(f),onClose:B(m),onContact:A},null,8,[`panel`,`onClose`])):xa(``,!0),ga(nj,{visible:B(n).loading},null,8,[`visible`])]))}}),pj={key:1,class:`h-dvh overflow-y-auto map-shell`},mj={class:`mx-auto flex min-h-full w-full max-w-3xl flex-col justify-center px-6 py-16`},hj={class:`mt-8 flex flex-wrap gap-3`},gj=[`href`],_j=mr({__name:`HomeView`,setup(e){let t=Ms(),{state:n}=Yl(),r=new Set(Nl.map(e=>e.id)),i=Ja(()=>{let e=t.query.region;return typeof e!=`string`||!r.has(e)?null:e});return(e,t)=>B(n).webglSupported?(V(),da(fj,{key:0,"initial-region":i.value},null,8,[`initial-region`])):(V(),H(`div`,pj,[U(`div`,mj,[t[1]||(t[1]=U(`p`,{class:`text-[10px] uppercase tracking-[0.24em] text-glow`},`Modo compatible`,-1)),t[2]||(t[2]=U(`h1`,{class:`mt-3 font-display text-3xl text-ice md:text-5xl`},`El mapa 3D no está disponible en este navegador`,-1)),t[3]||(t[3]=U(`p`,{class:`mt-4 max-w-xl text-sm leading-relaxed text-mist`},` La experiencia principal necesita WebGL. Puedes explorar los proyectos en la vista de listado, con el mismo contenido y sin perder detalle. `,-1)),U(`div`,hj,[ga(B(cl),{to:`/proyectos`,class:`rounded-xl border border-glow/35 bg-glow/10 px-5 py-3 text-[11px] uppercase tracking-[0.16em] text-glow transition-colors hover:border-glow/70 hover:text-ice`},{default:kn(()=>[...t[0]||(t[0]=[ba(` Ver proyectos `,-1)])]),_:1}),U(`a`,{href:`mailto:${B(zl).email}`,class:`rounded-xl border border-white/12 px-5 py-3 text-[11px] uppercase tracking-[0.16em] text-mist transition-colors hover:border-white/30 hover:text-ice`},` Contacto `,8,gj)])])]))}}),vj=`modulepreload`,yj=function(e){return`/`+e},bj={},xj=function(e){return e.pathname.endsWith(`.css`)},Sj=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Cj=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=yj(t,n);let r=s(t),i=xj(r);return Sj(bj,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:vj,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},wj=gl({history:Rc(),routes:[{path:`/`,name:`home`,component:_j},{path:`/proyectos`,name:`projects`,component:()=>Cj(()=>import(`./ProjectsView-DytfnwJx.js`),[])},{path:`/:pathMatch(.*)*`,redirect:`/`}],scrollBehavior:()=>({top:0})});cs(_l).use(wj).mount(`#app`);export{ue as C,B as S,F as T,mr as _,Nl as a,kn as b,js as c,U as d,da as f,ga as g,ba as h,Il as i,ta as l,H as m,kA as n,Dl as o,xa as p,zl as r,cl as s,ej as t,Ja as u,V as v,ae as w,Ut as x,zr as y};