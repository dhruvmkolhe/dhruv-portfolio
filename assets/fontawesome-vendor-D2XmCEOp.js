function wt(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Ya={exports:{}},ga={},Xa={exports:{}},x={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var In;function At(){if(In)return x;In=1;var a=Symbol.for("react.element"),n=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),t=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),o=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function g(l){return l===null||typeof l!="object"?null:(l=m&&l[m]||l["@@iterator"],typeof l=="function"?l:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function w(l,d,z){this.props=l,this.context=d,this.refs=S,this.updater=z||b}w.prototype.isReactComponent={},w.prototype.setState=function(l,d){if(typeof l!="object"&&typeof l!="function"&&l!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,l,d,"setState")},w.prototype.forceUpdate=function(l){this.updater.enqueueForceUpdate(this,l,"forceUpdate")};function E(){}E.prototype=w.prototype;function M(l,d,z){this.props=l,this.context=d,this.refs=S,this.updater=z||b}var C=M.prototype=new E;C.constructor=M,A(C,w.prototype),C.isPureReactComponent=!0;var D=Array.isArray,R=Object.prototype.hasOwnProperty,H={current:null},ra={key:!0,ref:!0,__self:!0,__source:!0};function J(l,d,z){var I,k={},F=null,N=null;if(d!=null)for(I in d.ref!==void 0&&(N=d.ref),d.key!==void 0&&(F=""+d.key),d)R.call(d,I)&&!ra.hasOwnProperty(I)&&(k[I]=d[I]);var _=arguments.length-2;if(_===1)k.children=z;else if(1<_){for(var L=Array(_),W=0;W<_;W++)L[W]=arguments[W+2];k.children=L}if(l&&l.defaultProps)for(I in _=l.defaultProps,_)k[I]===void 0&&(k[I]=_[I]);return{$$typeof:a,type:l,key:F,ref:N,props:k,_owner:H.current}}function da(l,d){return{$$typeof:a,type:l.type,key:d,ref:l.ref,props:l.props,_owner:l._owner}}function pa(l){return typeof l=="object"&&l!==null&&l.$$typeof===a}function Ua(l){var d={"=":"=0",":":"=2"};return"$"+l.replace(/[=:]/g,function(z){return d[z]})}var ka=/\/+/g;function va(l,d){return typeof l=="object"&&l!==null&&l.key!=null?Ua(""+l.key):d.toString(36)}function ia(l,d,z,I,k){var F=typeof l;(F==="undefined"||F==="boolean")&&(l=null);var N=!1;if(l===null)N=!0;else switch(F){case"string":case"number":N=!0;break;case"object":switch(l.$$typeof){case a:case n:N=!0}}if(N)return N=l,k=k(N),l=I===""?"."+va(N,0):I,D(k)?(z="",l!=null&&(z=l.replace(ka,"$&/")+"/"),ia(k,d,z,"",function(W){return W})):k!=null&&(pa(k)&&(k=da(k,z+(!k.key||N&&N.key===k.key?"":(""+k.key).replace(ka,"$&/")+"/")+l)),d.push(k)),1;if(N=0,I=I===""?".":I+":",D(l))for(var _=0;_<l.length;_++){F=l[_];var L=I+va(F,_);N+=ia(F,d,z,L,k)}else if(L=g(l),typeof L=="function")for(l=L.call(l),_=0;!(F=l.next()).done;)F=F.value,L=I+va(F,_++),N+=ia(F,d,z,L,k);else if(F==="object")throw d=String(l),Error("Objects are not valid as a React child (found: "+(d==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":d)+"). If you meant to render a collection of children, use an array instead.");return N}function aa(l,d,z){if(l==null)return l;var I=[],k=0;return ia(l,I,"","",function(F){return d.call(z,F,k++)}),I}function y(l){if(l._status===-1){var d=l._result;d=d(),d.then(function(z){(l._status===0||l._status===-1)&&(l._status=1,l._result=z)},function(z){(l._status===0||l._status===-1)&&(l._status=2,l._result=z)}),l._status===-1&&(l._status=0,l._result=d)}if(l._status===1)return l._result.default;throw l._result}var T={current:null},Ia={transition:null},zt={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:Ia,ReactCurrentOwner:H};function kn(){throw Error("act(...) is not supported in production builds of React.")}return x.Children={map:aa,forEach:function(l,d,z){aa(l,function(){d.apply(this,arguments)},z)},count:function(l){var d=0;return aa(l,function(){d++}),d},toArray:function(l){return aa(l,function(d){return d})||[]},only:function(l){if(!pa(l))throw Error("React.Children.only expected to receive a single React element child.");return l}},x.Component=w,x.Fragment=e,x.Profiler=r,x.PureComponent=M,x.StrictMode=t,x.Suspense=f,x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zt,x.act=kn,x.cloneElement=function(l,d,z){if(l==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+l+".");var I=A({},l.props),k=l.key,F=l.ref,N=l._owner;if(d!=null){if(d.ref!==void 0&&(F=d.ref,N=H.current),d.key!==void 0&&(k=""+d.key),l.type&&l.type.defaultProps)var _=l.type.defaultProps;for(L in d)R.call(d,L)&&!ra.hasOwnProperty(L)&&(I[L]=d[L]===void 0&&_!==void 0?_[L]:d[L])}var L=arguments.length-2;if(L===1)I.children=z;else if(1<L){_=Array(L);for(var W=0;W<L;W++)_[W]=arguments[W+2];I.children=_}return{$$typeof:a,type:l.type,key:k,ref:F,props:I,_owner:N}},x.createContext=function(l){return l={$$typeof:o,_currentValue:l,_currentValue2:l,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},l.Provider={$$typeof:i,_context:l},l.Consumer=l},x.createElement=J,x.createFactory=function(l){var d=J.bind(null,l);return d.type=l,d},x.createRef=function(){return{current:null}},x.forwardRef=function(l){return{$$typeof:s,render:l}},x.isValidElement=pa,x.lazy=function(l){return{$$typeof:p,_payload:{_status:-1,_result:l},_init:y}},x.memo=function(l,d){return{$$typeof:u,type:l,compare:d===void 0?null:d}},x.startTransition=function(l){var d=Ia.transition;Ia.transition={};try{l()}finally{Ia.transition=d}},x.unstable_act=kn,x.useCallback=function(l,d){return T.current.useCallback(l,d)},x.useContext=function(l){return T.current.useContext(l)},x.useDebugValue=function(){},x.useDeferredValue=function(l){return T.current.useDeferredValue(l)},x.useEffect=function(l,d){return T.current.useEffect(l,d)},x.useId=function(){return T.current.useId()},x.useImperativeHandle=function(l,d,z){return T.current.useImperativeHandle(l,d,z)},x.useInsertionEffect=function(l,d){return T.current.useInsertionEffect(l,d)},x.useLayoutEffect=function(l,d){return T.current.useLayoutEffect(l,d)},x.useMemo=function(l,d){return T.current.useMemo(l,d)},x.useReducer=function(l,d,z){return T.current.useReducer(l,d,z)},x.useRef=function(l){return T.current.useRef(l)},x.useState=function(l){return T.current.useState(l)},x.useSyncExternalStore=function(l,d,z){return T.current.useSyncExternalStore(l,d,z)},x.useTransition=function(){return T.current.useTransition()},x.version="18.3.1",x}var Pn;function fe(){return Pn||(Pn=1,Xa.exports=At()),Xa.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var En;function kt(){if(En)return ga;En=1;var a=fe(),n=Symbol.for("react.element"),e=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(s,f,u){var p,m={},g=null,b=null;u!==void 0&&(g=""+u),f.key!==void 0&&(g=""+f.key),f.ref!==void 0&&(b=f.ref);for(p in f)t.call(f,p)&&!i.hasOwnProperty(p)&&(m[p]=f[p]);if(s&&s.defaultProps)for(p in f=s.defaultProps,f)m[p]===void 0&&(m[p]=f[p]);return{$$typeof:n,type:s,key:g,ref:b,props:m,_owner:r.current}}return ga.Fragment=e,ga.jsx=o,ga.jsxs=o,ga}var Mn;function It(){return Mn||(Mn=1,Ya.exports=kt()),Ya.exports}var Es=It(),ce=fe();const mn=wt(ce);/*!
 * Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */function Ja(a,n){(n==null||n>a.length)&&(n=a.length);for(var e=0,t=Array(n);e<n;e++)t[e]=a[e];return t}function Pt(a){if(Array.isArray(a))return a}function Et(a){if(Array.isArray(a))return Ja(a)}function Mt(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function Ct(a,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,ue(t.key),t)}}function Lt(a,n,e){return n&&Ct(a.prototype,n),Object.defineProperty(a,"prototype",{writable:!1}),a}function La(a,n){var e=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!e){if(Array.isArray(a)||(e=dn(a))||n){e&&(a=e);var t=0,r=function(){};return{s:r,n:function(){return t>=a.length?{done:!0}:{done:!1,value:a[t++]}},e:function(f){throw f},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){e=e.call(a)},n:function(){var f=e.next();return o=f.done,f},e:function(f){s=!0,i=f},f:function(){try{o||e.return==null||e.return()}finally{if(s)throw i}}}}function h(a,n,e){return(n=ue(n))in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function Ft(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function _t(a,n){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var t,r,i,o,s=[],f=!0,u=!1;try{if(i=(e=e.call(a)).next,n===0){if(Object(e)!==e)return;f=!1}else for(;!(f=(t=i.call(e)).done)&&(s.push(t.value),s.length!==n);f=!0);}catch(p){u=!0,r=p}finally{try{if(!f&&e.return!=null&&(o=e.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function Nt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ot(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cn(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),e.push.apply(e,t)}return e}function c(a){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Cn(Object(e),!0).forEach(function(t){h(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):Cn(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}function Ta(a,n){return Pt(a)||_t(a,n)||dn(a,n)||Nt()}function X(a){return Et(a)||Ft(a)||dn(a)||Ot()}function jt(a,n){if(typeof a!="object"||!a)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var t=e.call(a,n);if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function ue(a){var n=jt(a,"string");return typeof n=="symbol"?n:n+""}function Na(a){"@babel/helpers - typeof";return Na=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Na(a)}function dn(a,n){if(a){if(typeof a=="string")return Ja(a,n);var e={}.toString.call(a).slice(8,-1);return e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set"?Array.from(a):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Ja(a,n):void 0}}var Ln=function(){},pn={},me={},de=null,pe={mark:Ln,measure:Ln};try{typeof window<"u"&&(pn=window),typeof document<"u"&&(me=document),typeof MutationObserver<"u"&&(de=MutationObserver),typeof performance<"u"&&(pe=performance)}catch{}var Tt=pn.navigator||{},Fn=Tt.userAgent,_n=Fn===void 0?"":Fn,K=pn,P=me,Nn=de,Pa=pe;K.document;var B=!!P.documentElement&&!!P.head&&typeof P.addEventListener=="function"&&typeof P.createElement=="function",ve=~_n.indexOf("MSIE")||~_n.indexOf("Trident/"),Ea,Rt=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,$t=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,ge={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Dt={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},be=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],j="classic",za="duotone",he="sharp",ye="sharp-duotone",xe="chisel",Se="etch",ze="graphite",we="jelly",Ae="jelly-duo",ke="jelly-fill",Ie="mosaic",Pe="notdog",Ee="notdog-duo",Me="pixel",Ce="slab",Le="slab-duo",Fe="slab-press",_e="slab-press-duo",Ne="thumbprint",Oe="utility",je="utility-duo",Te="utility-fill",Re="vellum",$e="whiteboard",Wt="Classic",Ut="Duotone",Yt="Sharp",Xt="Sharp Duotone",qt="Chisel",Ht="Etch",Gt="Graphite",Vt="Jelly",Bt="Jelly Duo",Jt="Jelly Fill",Kt="Mosaic",Qt="Notdog",Zt="Notdog Duo",ar="Pixel",nr="Slab",er="Slab Duo",tr="Slab Press",rr="Slab Press Duo",ir="Thumbprint",or="Utility",sr="Utility Duo",lr="Utility Fill",fr="Vellum",cr="Whiteboard",De=[j,za,he,ye,xe,Se,ze,we,Ae,ke,Ie,Pe,Ee,Me,Ce,Le,Fe,_e,Ne,Oe,je,Te,Re,$e];Ea={},h(h(h(h(h(h(h(h(h(h(Ea,j,Wt),za,Ut),he,Yt),ye,Xt),xe,qt),Se,Ht),ze,Gt),we,Vt),Ae,Bt),ke,Jt),h(h(h(h(h(h(h(h(h(h(Ea,Ie,Kt),Pe,Qt),Ee,Zt),Me,ar),Ce,nr),Le,er),Fe,tr),_e,rr),Ne,ir),Oe,or),h(h(h(h(Ea,je,sr),Te,lr),Re,fr),$e,cr);var ur={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},mr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},dr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),pr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},We=["fak","fa-kit","fakd","fa-kit-duotone"],On={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},vr=["kit"],gr="kit",br="kit-duotone",hr="Kit",yr="Kit Duotone";h(h({},gr,hr),br,yr);var xr={kit:{"fa-kit":"fak"}},Sr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},zr={kit:{fak:"fa-kit"}},jn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ma,Ca={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],Ar="classic",kr="duotone",Ir="sharp",Pr="sharp-duotone",Er="chisel",Mr="etch",Cr="graphite",Lr="jelly",Fr="jelly-duo",_r="jelly-fill",Nr="mosaic",Or="notdog",jr="notdog-duo",Tr="pixel",Rr="slab",$r="slab-duo",Dr="slab-press",Wr="slab-press-duo",Ur="thumbprint",Yr="utility",Xr="utility-duo",qr="utility-fill",Hr="vellum",Gr="whiteboard",Vr="Classic",Br="Duotone",Jr="Sharp",Kr="Sharp Duotone",Qr="Chisel",Zr="Etch",ai="Graphite",ni="Jelly",ei="Jelly Duo",ti="Jelly Fill",ri="Mosaic",ii="Notdog",oi="Notdog Duo",si="Pixel",li="Slab",fi="Slab Duo",ci="Slab Press",ui="Slab Press Duo",mi="Thumbprint",di="Utility",pi="Utility Duo",vi="Utility Fill",gi="Vellum",bi="Whiteboard";Ma={},h(h(h(h(h(h(h(h(h(h(Ma,Ar,Vr),kr,Br),Ir,Jr),Pr,Kr),Er,Qr),Mr,Zr),Cr,ai),Lr,ni),Fr,ei),_r,ti),h(h(h(h(h(h(h(h(h(h(Ma,Nr,ri),Or,ii),jr,oi),Tr,si),Rr,li),$r,fi),Dr,ci),Wr,ui),Ur,mi),Yr,di),h(h(h(h(Ma,Xr,pi),qr,vi),Hr,gi),Gr,bi);var hi="kit",yi="kit-duotone",xi="Kit",Si="Kit Duotone";h(h({},hi,xi),yi,Si);var zi={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},wi={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Ka={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Ai=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Ue=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(wr,Ai),ki=["solid","regular","light","thin","duotone","brands","semibold"],Ye=[1,2,3,4,5,6,7,8,9,10],Ii=Ye.concat([11,12,13,14,15,16,17,18,19,20]),Pi=["aw","fw","pull-left","pull-right"],Ei=[].concat(X(Object.keys(wi)),ki,Pi,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",Ca.GROUP,Ca.SWAP_OPACITY,Ca.PRIMARY,Ca.SECONDARY]).concat(Ye.map(function(a){return"".concat(a,"x")})).concat(Ii.map(function(a){return"w-".concat(a)})),Mi={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},G="___FONT_AWESOME___",Qa=16,Xe="fa",qe="svg-inline--fa",ea="data-fa-i2svg",Za="data-fa-pseudo-element",Ci="data-fa-pseudo-element-pending",vn="data-prefix",gn="data-icon",Tn="fontawesome-i2svg",Li="async",Fi=["HTML","HEAD","STYLE","SCRIPT"],He=["::before","::after",":before",":after"],Ge=(function(){try{return!0}catch{return!1}})();function wa(a){return new Proxy(a,{get:function(e,t){return t in e?e[t]:e[j]}})}var Ve=c({},ge);Ve[j]=c(c(c(c({},{"fa-duotone":"duotone"}),ge[j]),On.kit),On["kit-duotone"]);var _i=wa(Ve),an=c({},pr);an[j]=c(c(c(c({},{duotone:"fad"}),an[j]),jn.kit),jn["kit-duotone"]);var Rn=wa(an),nn=c({},Ka);nn[j]=c(c({},nn[j]),zr.kit);var bn=wa(nn),en=c({},zi);en[j]=c(c({},en[j]),xr.kit);wa(en);var Ni=Rt,Be="fa-layers-text",Oi=$t,ji=c({},ur);wa(ji);var Ti=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],qa=Dt,Ri=[].concat(X(vr),X(Ei)),ha=K.FontAwesomeConfig||{};function $i(a){var n=P.querySelector("script["+a+"]");if(n)return n.getAttribute(a)}function Di(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}if(P&&typeof P.querySelector=="function"){var Wi=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Wi.forEach(function(a){var n=Ta(a,2),e=n[0],t=n[1],r=Di($i(e));r!=null&&(ha[t]=r)})}var Je={styleDefault:"solid",familyDefault:j,cssPrefix:Xe,replacementClass:qe,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ha.familyPrefix&&(ha.cssPrefix=ha.familyPrefix);var ca=c(c({},Je),ha);ca.autoReplaceSvg||(ca.observeMutations=!1);var v={};Object.keys(Je).forEach(function(a){Object.defineProperty(v,a,{enumerable:!0,set:function(e){ca[a]=e,ya.forEach(function(t){return t(v)})},get:function(){return ca[a]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(n){ca.cssPrefix=n,ya.forEach(function(e){return e(v)})},get:function(){return ca.cssPrefix}});K.FontAwesomeConfig=v;var ya=[];function Ui(a){return ya.push(a),function(){ya.splice(ya.indexOf(a),1)}}var oa=Qa,q={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Yi(a){if(!(!a||!B)){var n=P.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=a;for(var e=P.head.childNodes,t=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(t=i)}return P.head.insertBefore(n,t),a}}var Xi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $n(){for(var a=12,n="";a-- >0;)n+=Xi[Math.random()*62|0];return n}function ma(a){for(var n=[],e=(a||[]).length>>>0;e--;)n[e]=a[e];return n}function hn(a){return a.classList?ma(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(n){return n})}function Ke(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qi(a){return Object.keys(a||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(Ke(a[e]),'" ')},"").trim()}function Ra(a){return Object.keys(a||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(a[e].trim(),";")},"")}function yn(a){return a.size!==q.size||a.x!==q.x||a.y!==q.y||a.rotate!==q.rotate||a.flipX||a.flipY}function Hi(a){var n=a.transform,e=a.containerWidth,t=a.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(t/2*-1," -256)")};return{outer:r,inner:f,path:u}}function Gi(a){var n=a.transform,e=a.width,t=e===void 0?Qa:e,r=a.height,i=r===void 0?Qa:r,o="";return ve?o+="translate(".concat(n.x/oa-t/2,"em, ").concat(n.y/oa-i/2,"em) "):o+="translate(calc(-50% + ".concat(n.x/oa,"em), calc(-50% + ").concat(n.y/oa,"em)) "),o+="scale(".concat(n.size/oa*(n.flipX?-1:1),", ").concat(n.size/oa*(n.flipY?-1:1),") "),o+="rotate(".concat(n.rotate,"deg) "),o}var Vi=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Qe(){var a=Xe,n=qe,e=v.cssPrefix,t=v.replacementClass,r=Vi;if(e!==a||t!==n){var i=new RegExp("\\.".concat(a,"\\-"),"g"),o=new RegExp("\\--".concat(a,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(t))}return r}var Dn=!1;function Ha(){v.autoAddCss&&!Dn&&(Yi(Qe()),Dn=!0)}var Bi={mixout:function(){return{dom:{css:Qe,insertCss:Ha}}},hooks:function(){return{beforeDOMElementCreation:function(){Ha()},beforeI2svg:function(){Ha()}}}},V=K||{};V[G]||(V[G]={});V[G].styles||(V[G].styles={});V[G].hooks||(V[G].hooks={});V[G].shims||(V[G].shims=[]);var Y=V[G],Ze=[],at=function(){P.removeEventListener("DOMContentLoaded",at),Oa=1,Ze.map(function(n){return n()})},Oa=!1;B&&(Oa=(P.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(P.readyState),Oa||P.addEventListener("DOMContentLoaded",at));function Ji(a){B&&(Oa?setTimeout(a,0):Ze.push(a))}function Aa(a){var n=a.tag,e=a.attributes,t=e===void 0?{}:e,r=a.children,i=r===void 0?[]:r;return typeof a=="string"?Ke(a):"<".concat(n," ").concat(qi(t),">").concat(i.map(Aa).join(""),"</").concat(n,">")}function Wn(a,n,e){if(a&&a[n]&&a[n][e])return{prefix:n,iconName:e,icon:a[n][e]}}var Ga=function(n,e,t,r){var i=Object.keys(n),o=i.length,s=e,f,u,p;for(t===void 0?(f=1,p=n[i[0]]):(f=0,p=t);f<o;f++)u=i[f],p=s(p,n[u],u,n);return p};function nt(a){return X(a).length!==1?null:a.codePointAt(0).toString(16)}function Un(a){return Object.keys(a).reduce(function(n,e){var t=a[e],r=!!t.icon;return r?n[t.iconName]=t.icon:n[e]=t,n},{})}function tn(a,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=e.skipHooks,r=t===void 0?!1:t,i=Un(n);typeof Y.hooks.addPack=="function"&&!r?Y.hooks.addPack(a,Un(n)):Y.styles[a]=c(c({},Y.styles[a]||{}),i),a==="fas"&&tn("fa",n)}var Sa=Y.styles,Ki=Y.shims,et=Object.keys(bn),Qi=et.reduce(function(a,n){return a[n]=Object.keys(bn[n]),a},{}),xn=null,tt={},rt={},it={},ot={},st={};function Zi(a){return~Ri.indexOf(a)}function ao(a,n){var e=n.split("-"),t=e[0],r=e.slice(1).join("-");return t===a&&r!==""&&!Zi(r)?r:null}var lt=function(){var n=function(i){return Ga(Sa,function(o,s,f){return o[f]=Ga(s,i,{}),o},{})};tt=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),rt=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),st=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var e="far"in Sa||v.autoFetchSvg,t=Ga(Ki,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});it=t.names,ot=t.unicodes,xn=$a(v.styleDefault,{family:v.familyDefault})};Ui(function(a){xn=$a(a.styleDefault,{family:v.familyDefault})});lt();function Sn(a,n){return(tt[a]||{})[n]}function no(a,n){return(rt[a]||{})[n]}function na(a,n){return(st[a]||{})[n]}function ft(a){return it[a]||{prefix:null,iconName:null}}function eo(a){var n=ot[a],e=Sn("fas",a);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function Q(){return xn}var ct=function(){return{prefix:null,iconName:null,rest:[]}};function to(a){var n=j,e=et.reduce(function(t,r){return t[r]="".concat(v.cssPrefix,"-").concat(r),t},{});return De.forEach(function(t){(a.includes(e[t])||a.some(function(r){return Qi[t].includes(r)}))&&(n=t)}),n}function $a(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,t=e===void 0?j:e,r=_i[t][a];if(t===za&&!a)return"fad";var i=Rn[t][a]||Rn[t][r],o=a in Y.styles?a:null,s=i||o||null;return s}function ro(a){var n=[],e=null;return a.forEach(function(t){var r=ao(v.cssPrefix,t);r?e=r:t&&n.push(t)}),{iconName:e,rest:n}}function Yn(a){return a.sort().filter(function(n,e,t){return t.indexOf(n)===e})}var Xn=Ue.concat(We);function Da(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.skipLookups,t=e===void 0?!1:e,r=null,i=Yn(a.filter(function(b){return Xn.includes(b)})),o=Yn(a.filter(function(b){return!Xn.includes(b)})),s=i.filter(function(b){return r=b,!be.includes(b)}),f=Ta(s,1),u=f[0],p=u===void 0?null:u,m=to(i),g=c(c({},ro(o)),{},{prefix:$a(p,{family:m})});return c(c(c({},g),lo({values:a,family:m,styles:Sa,config:v,canonical:g,givenPrefix:r})),io(t,r,g))}function io(a,n,e){var t=e.prefix,r=e.iconName;if(a||!t||!r)return{prefix:t,iconName:r};var i=n==="fa"?ft(r):{},o=na(t,r);return r=i.iconName||o||r,t=i.prefix||t,t==="far"&&!Sa.far&&Sa.fas&&!v.autoFetchSvg&&(t="fas"),{prefix:t,iconName:r}}var oo=De.filter(function(a){return a!==j||a!==za}),so=Object.keys(Ka).filter(function(a){return a!==j}).map(function(a){return Object.keys(Ka[a])}).flat();function lo(a){var n=a.values,e=a.family,t=a.canonical,r=a.givenPrefix,i=r===void 0?"":r,o=a.styles,s=o===void 0?{}:o,f=a.config,u=f===void 0?{}:f,p=e===za,m=n.includes("fa-duotone")||n.includes("fad"),g=u.familyDefault==="duotone",b=t.prefix==="fad"||t.prefix==="fa-duotone";if(!p&&(m||g||b)&&(t.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(t.prefix="fab"),!t.prefix&&oo.includes(e)){var A=Object.keys(s).find(function(w){return so.includes(w)});if(A||u.autoFetchSvg){var S=dr.get(e).defaultShortPrefixId;t.prefix=S,t.iconName=na(t.prefix,t.iconName)||t.iconName}}return(t.prefix==="fa"||i==="fa")&&(t.prefix=Q()||"fas"),t}var fo=(function(){function a(){Mt(this,a),this.definitions={}}return Lt(a,[{key:"add",value:function(){for(var e=this,t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=c(c({},e.definitions[s]||{}),o[s]),tn(s,o[s]);var f=bn[j][s];f&&tn(f,o[s]),lt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var r=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,u=o.icon,p=u[2];e[s]||(e[s]={}),p.length>0&&p.forEach(function(m){typeof m=="string"&&(e[s][m]=u)}),e[s][f]=u}),e}}])})(),qn=[],la={},fa={},co=Object.keys(fa);function uo(a,n){var e=n.mixoutsTo;return qn=a,la={},Object.keys(fa).forEach(function(t){co.indexOf(t)===-1&&delete fa[t]}),qn.forEach(function(t){var r=t.mixout?t.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),Na(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),t.hooks){var i=t.hooks();Object.keys(i).forEach(function(o){la[o]||(la[o]=[]),la[o].push(i[o])})}t.provides&&t.provides(fa)}),e}function rn(a,n){for(var e=arguments.length,t=new Array(e>2?e-2:0),r=2;r<e;r++)t[r-2]=arguments[r];var i=la[a]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(t))}),n}function ta(a){for(var n=arguments.length,e=new Array(n>1?n-1:0),t=1;t<n;t++)e[t-1]=arguments[t];var r=la[a]||[];r.forEach(function(i){i.apply(null,e)})}function Z(){var a=arguments[0],n=Array.prototype.slice.call(arguments,1);return fa[a]?fa[a].apply(null,n):void 0}function on(a){a.prefix==="fa"&&(a.prefix="fas");var n=a.iconName,e=a.prefix||Q();if(n)return n=na(e,n)||n,Wn(ut.definitions,e,n)||Wn(Y.styles,e,n)}var ut=new fo,mo=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,ta("noAuto")},po={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(ta("beforeI2svg",n),Z("pseudoElements2svg",n),Z("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Ji(function(){go({autoReplaceSvgRoot:e}),ta("watch",n)})}},vo={icon:function(n){if(n===null)return null;if(Na(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:na(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],t=$a(n[0]);return{prefix:t,iconName:na(t,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(v.cssPrefix,"-"))>-1||n.match(Ni))){var r=Da(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||Q(),iconName:na(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=Q();return{prefix:i,iconName:na(i,n)||n}}}},$={noAuto:mo,config:v,dom:po,parse:vo,library:ut,findIconDefinition:on,toHtml:Aa},go=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,t=e===void 0?P:e;(Object.keys(Y.styles).length>0||v.autoFetchSvg)&&B&&v.autoReplaceSvg&&$.dom.i2svg({node:t})};function Wa(a,n){return Object.defineProperty(a,"abstract",{get:n}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(t){return Aa(t)})}}),Object.defineProperty(a,"node",{get:function(){if(B){var t=P.createElement("div");return t.innerHTML=a.html,t.children}}}),a}function bo(a){var n=a.children,e=a.main,t=a.mask,r=a.attributes,i=a.styles,o=a.transform;if(yn(o)&&e.found&&!t.found){var s=e.width,f=e.height,u={x:s/f/2,y:.5};r.style=Ra(c(c({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function ho(a){var n=a.prefix,e=a.iconName,t=a.children,r=a.attributes,i=a.symbol,o=i===!0?"".concat(n,"-").concat(v.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:o}),children:t}]}]}function yo(a){var n=["aria-label","aria-labelledby","title","role"];return n.some(function(e){return e in a})}function zn(a){var n=a.icons,e=n.main,t=n.mask,r=a.prefix,i=a.iconName,o=a.transform,s=a.symbol,f=a.maskId,u=a.extra,p=a.watchable,m=p===void 0?!1:p,g=t.found?t:e,b=g.width,A=g.height,S=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(R){return u.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(u.classes).join(" "),w={children:[],attributes:c(c({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:S,role:u.attributes.role||"img",viewBox:"0 0 ".concat(b," ").concat(A)})};!yo(u.attributes)&&!u.attributes["aria-hidden"]&&(w.attributes["aria-hidden"]="true"),m&&(w.attributes[ea]="");var E=c(c({},w),{},{prefix:r,iconName:i,main:e,mask:t,maskId:f,transform:o,symbol:s,styles:c({},u.styles)}),M=t.found&&e.found?Z("generateAbstractMask",E)||{children:[],attributes:{}}:Z("generateAbstractIcon",E)||{children:[],attributes:{}},C=M.children,D=M.attributes;return E.children=C,E.attributes=D,s?ho(E):bo(E)}function Hn(a){var n=a.content,e=a.width,t=a.height,r=a.transform,i=a.extra,o=a.watchable,s=o===void 0?!1:o,f=c(c({},i.attributes),{},{class:i.classes.join(" ")});s&&(f[ea]="");var u=c({},i.styles);yn(r)&&(u.transform=Gi({transform:r,width:e,height:t}),u["-webkit-transform"]=u.transform);var p=Ra(u);p.length>0&&(f.style=p);var m=[];return m.push({tag:"span",attributes:f,children:[n]}),m}function xo(a){var n=a.content,e=a.extra,t=c(c({},e.attributes),{},{class:e.classes.join(" ")}),r=Ra(e.styles);r.length>0&&(t.style=r);var i=[];return i.push({tag:"span",attributes:t,children:[n]}),i}var Va=Y.styles;function sn(a){var n=a[0],e=a[1],t=a.slice(4),r=Ta(t,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(qa.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(qa.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(qa.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var So={found:!1,width:512,height:512};function zo(a,n){!Ge&&!v.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(n,'" is missing.'))}function ln(a,n){var e=n;return n==="fa"&&v.styleDefault!==null&&(n=Q()),new Promise(function(t,r){if(e==="fa"){var i=ft(a)||{};a=i.iconName||a,n=i.prefix||n}if(a&&n&&Va[n]&&Va[n][a]){var o=Va[n][a];return t(sn(o))}zo(a,n),t(c(c({},So),{},{icon:v.showMissingIcons&&a?Z("missingIconAbstract")||{}:{}}))})}var Gn=function(){},fn=v.measurePerformance&&Pa&&Pa.mark&&Pa.measure?Pa:{mark:Gn,measure:Gn},ba='FA "7.3.1"',wo=function(n){return fn.mark("".concat(ba," ").concat(n," begins")),function(){return mt(n)}},mt=function(n){fn.mark("".concat(ba," ").concat(n," ends")),fn.measure("".concat(ba," ").concat(n),"".concat(ba," ").concat(n," begins"),"".concat(ba," ").concat(n," ends"))},wn={begin:wo,end:mt},Fa=function(){};function Vn(a){var n=a.getAttribute?a.getAttribute(ea):null;return typeof n=="string"}function Ao(a){var n=a.getAttribute?a.getAttribute(vn):null,e=a.getAttribute?a.getAttribute(gn):null;return n&&e}function ko(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(v.replacementClass)}function Io(){if(v.autoReplaceSvg===!0)return _a.replace;var a=_a[v.autoReplaceSvg];return a||_a.replace}function Po(a){return P.createElementNS("http://www.w3.org/2000/svg",a)}function Eo(a){return P.createElement(a)}function dt(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,t=e===void 0?a.tag==="svg"?Po:Eo:e;if(typeof a=="string")return P.createTextNode(a);var r=t(a.tag);Object.keys(a.attributes||[]).forEach(function(o){r.setAttribute(o,a.attributes[o])});var i=a.children||[];return i.forEach(function(o){r.appendChild(dt(o,{ceFn:t}))}),r}function Mo(a){var n=" ".concat(a.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var _a={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(dt(r),e)}),e.getAttribute(ea)===null&&v.keepOriginalSource){var t=P.createComment(Mo(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(n){var e=n[0],t=n[1];if(~hn(e).indexOf(v.replacementClass))return _a.replace(n);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){var i=t[0].attributes.class.split(" ").reduce(function(s,f){return f===v.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});t[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=t.map(function(s){return Aa(s)}).join(`
`);e.setAttribute(ea,""),e.innerHTML=o}};function Bn(a){a()}function pt(a,n){var e=typeof n=="function"?n:Fa;if(a.length===0)e();else{var t=Bn;v.mutateApproach===Li&&(t=K.requestAnimationFrame||Bn),t(function(){var r=Io(),i=wn.begin("mutate");a.map(r),i(),e()})}}var An=!1;function vt(){An=!0}function cn(){An=!1}var ja=null;function Jn(a){if(Nn&&v.observeMutations){var n=a.treeCallback,e=n===void 0?Fa:n,t=a.nodeCallback,r=t===void 0?Fa:t,i=a.pseudoElementsCallback,o=i===void 0?Fa:i,s=a.observeMutationsRoot,f=s===void 0?P:s;ja=new Nn(function(u){if(!An){var p=Q();ma(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Vn(m.addedNodes[0])&&(v.searchPseudoElements&&o(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&v.searchPseudoElements&&o([m.target],!0),m.type==="attributes"&&Vn(m.target)&&~Ti.indexOf(m.attributeName))if(m.attributeName==="class"&&Ao(m.target)){var g=Da(hn(m.target)),b=g.prefix,A=g.iconName;m.target.setAttribute(vn,b||p),A&&m.target.setAttribute(gn,A)}else ko(m.target)&&r(m.target)})}}),B&&ja.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Co(){ja&&ja.disconnect()}function Lo(a){var n=a.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(t,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(t[o]=s.join(":").trim()),t},{})),e}function Fo(a){var n=a.getAttribute("data-prefix"),e=a.getAttribute("data-icon"),t=a.innerText!==void 0?a.innerText.trim():"",r=Da(hn(a));return r.prefix||(r.prefix=Q()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&t.length>0&&(r.iconName=no(r.prefix,a.innerText)||Sn(r.prefix,nt(a.innerText))),!r.iconName&&v.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=a.firstChild.data)),r}function _o(a){var n=ma(a.attributes).reduce(function(e,t){return e.name!=="class"&&e.name!=="style"&&(e[t.name]=t.value),e},{});return n}function No(){return{iconName:null,prefix:null,transform:q,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Kn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Fo(a),t=e.iconName,r=e.prefix,i=e.rest,o=_o(a),s=rn("parseNodeAttributes",{},a),f=n.styleParser?Lo(a):[];return c({iconName:t,prefix:r,transform:q,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Oo=Y.styles;function gt(a){var n=v.autoReplaceSvg==="nest"?Kn(a,{styleParser:!1}):Kn(a);return~n.extra.classes.indexOf(Be)?Z("generateLayersText",a,n):Z("generateSvgReplacementMutation",a,n)}function jo(){return[].concat(X(We),X(Ue))}function Qn(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();var e=P.documentElement.classList,t=function(m){return e.add("".concat(Tn,"-").concat(m))},r=function(m){return e.remove("".concat(Tn,"-").concat(m))},i=v.autoFetchSvg?jo():be.concat(Object.keys(Oo));i.includes("fa")||i.push("fa");var o=[".".concat(Be,":not([").concat(ea,"])")].concat(i.map(function(p){return".".concat(p,":not([").concat(ea,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ma(a.querySelectorAll(o))}catch{}if(s.length>0)t("pending"),r("complete");else return Promise.resolve();var f=wn.begin("onTree"),u=s.reduce(function(p,m){try{var g=gt(m);g&&p.push(g)}catch(b){Ge||b.name==="MissingIcon"&&console.error(b)}return p},[]);return new Promise(function(p,m){Promise.all(u).then(function(g){pt(g,function(){t("active"),t("complete"),r("pending"),typeof n=="function"&&n(),f(),p()})}).catch(function(g){f(),m(g)})})}function To(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;gt(a).then(function(e){e&&pt([e],n)})}function Ro(a){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=(n||{}).icon?n:on(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:on(r||{})),a(t,c(c({},e),{},{mask:r}))}}var $o=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.transform,r=t===void 0?q:t,i=e.symbol,o=i===void 0?!1:i,s=e.mask,f=s===void 0?null:s,u=e.maskId,p=u===void 0?null:u,m=e.classes,g=m===void 0?[]:m,b=e.attributes,A=b===void 0?{}:b,S=e.styles,w=S===void 0?{}:S;if(n){var E=n.prefix,M=n.iconName,C=n.icon;return Wa(c({type:"icon"},n),function(){return ta("beforeDOMElementCreation",{iconDefinition:n,params:e}),zn({icons:{main:sn(C),mask:f?sn(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:M,transform:c(c({},q),r),symbol:o,maskId:p,extra:{attributes:A,styles:w,classes:g}})})}},Do={mixout:function(){return{icon:Ro($o)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Qn,e.nodeCallback=To,e}}},provides:function(n){n.i2svg=function(e){var t=e.node,r=t===void 0?P:t,i=e.callback,o=i===void 0?function(){}:i;return Qn(r,o)},n.generateSvgReplacementMutation=function(e,t){var r=t.iconName,i=t.prefix,o=t.transform,s=t.symbol,f=t.mask,u=t.maskId,p=t.extra;return new Promise(function(m,g){Promise.all([ln(r,i),f.iconName?ln(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var A=Ta(b,2),S=A[0],w=A[1];m([e,zn({icons:{main:S,mask:w},prefix:i,iconName:r,transform:o,symbol:s,maskId:u,extra:p,watchable:!0})])}).catch(g)})},n.generateAbstractIcon=function(e){var t=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,f=Ra(s);f.length>0&&(r.style=f);var u;return yn(o)&&(u=Z("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),t.push(u||i.icon),{children:t,attributes:r}}}},Wo={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.classes,i=r===void 0?[]:r;return Wa({type:"layer"},function(){ta("beforeDOMElementCreation",{assembler:e,params:t});var o=[];return e(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(X(i)).join(" ")},children:o}]})}}}},Uo={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};t.title;var r=t.classes,i=r===void 0?[]:r,o=t.attributes,s=o===void 0?{}:o,f=t.styles,u=f===void 0?{}:f;return Wa({type:"counter",content:e},function(){return ta("beforeDOMElementCreation",{content:e,params:t}),xo({content:e.toString(),extra:{attributes:s,styles:u,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(X(i))}})})}}}},Yo={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.transform,i=r===void 0?q:r,o=t.classes,s=o===void 0?[]:o,f=t.attributes,u=f===void 0?{}:f,p=t.styles,m=p===void 0?{}:p;return Wa({type:"text",content:e},function(){return ta("beforeDOMElementCreation",{content:e,params:t}),Hn({content:e,transform:c(c({},q),i),extra:{attributes:u,styles:m,classes:["".concat(v.cssPrefix,"-layers-text")].concat(X(s))}})})}}},provides:function(n){n.generateLayersText=function(e,t){var r=t.transform,i=t.extra,o=null,s=null;if(ve){var f=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/f,s=u.height/f}return Promise.resolve([e,Hn({content:e.innerHTML,width:o,height:s,transform:r,extra:i,watchable:!0})])}}},bt=new RegExp('"',"ug"),Zn=[1105920,1112319],ae=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),mr),Mi),Sr),un=Object.keys(ae).reduce(function(a,n){return a[n.toLowerCase()]=ae[n],a},{}),Xo=Object.keys(un).reduce(function(a,n){var e=un[n];return a[n]=e[900]||X(Object.entries(e))[0][1],a},{});function qo(a){var n=a.replace(bt,"");return nt(X(n)[0]||"")}function Ho(a){var n=a.getPropertyValue("font-feature-settings").includes("ss01"),e=a.getPropertyValue("content"),t=e.replace(bt,""),r=t.codePointAt(0),i=r>=Zn[0]&&r<=Zn[1],o=t.length===2?t[0]===t[1]:!1;return i||o||n}function Go(a,n){var e=a.replace(/^['"]|['"]$/g,"").toLowerCase(),t=parseInt(n),r=isNaN(t)?"normal":t;return(un[e]||{})[r]||Xo[e]}function ne(a,n){var e="".concat(Ci).concat(n.replace(":","-"));return new Promise(function(t,r){if(a.getAttribute(e)!==null)return t();var i=ma(a.children),o=i.filter(function(H){return H.getAttribute(Za)===n})[0],s=K.getComputedStyle(a,n),f=s.getPropertyValue("font-family"),u=f.match(Oi),p=s.getPropertyValue("font-weight"),m=s.getPropertyValue("content");if(o&&!u)return a.removeChild(o),t();if(u&&m!=="none"&&m!==""){var g=s.getPropertyValue("content"),b=Go(f,p),A=qo(g),S=u[0].startsWith("FontAwesome"),w=Ho(s),E=Sn(b,A),M=E;if(S){var C=eo(A);C.iconName&&C.prefix&&(E=C.iconName,b=C.prefix)}if(E&&!w&&(!o||o.getAttribute(vn)!==b||o.getAttribute(gn)!==M)){a.setAttribute(e,M),o&&a.removeChild(o);var D=No(),R=D.extra;R.attributes[Za]=n,ln(E,b).then(function(H){var ra=zn(c(c({},D),{},{icons:{main:H,mask:ct()},prefix:b,iconName:M,extra:R,watchable:!0})),J=P.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?a.insertBefore(J,a.firstChild):a.appendChild(J),J.outerHTML=ra.map(function(da){return Aa(da)}).join(`
`),a.removeAttribute(e),t()}).catch(r)}else t()}else t()})}function Vo(a){return Promise.all([ne(a,"::before"),ne(a,"::after")])}function Bo(a){return a.parentNode!==document.head&&!~Fi.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(Za)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var Jo=function(n){return!!n&&He.some(function(e){return n.includes(e)})},Ko=function(n){if(!n)return[];var e=new Set,t=n.split(/,(?![^()]*\))/).map(function(f){return f.trim()});t=t.flatMap(function(f){return f.includes("(")?f:f.split(",").map(function(u){return u.trim()})});var r=La(t),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(Jo(o)){var s=He.reduce(function(f,u){return f.replace(u,"")},o);s!==""&&s!=="*"&&e.add(s)}}}catch(f){r.e(f)}finally{r.f()}return e};function ee(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(B){var e;if(n)e=a;else if(v.searchPseudoElementsFullScan)e=a.querySelectorAll("*");else{var t=new Set,r=La(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var s=La(o.cssRules),f;try{for(s.s();!(f=s.n()).done;){var u=f.value,p=Ko(u.selectorText),m=La(p),g;try{for(m.s();!(g=m.n()).done;){var b=g.value;t.add(b)}}catch(S){m.e(S)}finally{m.f()}}}catch(S){s.e(S)}finally{s.f()}}catch(S){v.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(S.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(S){r.e(S)}finally{r.f()}if(!t.size)return;var A=Array.from(t).join(", ");try{e=a.querySelectorAll(A)}catch{}}return new Promise(function(S,w){var E=ma(e).filter(Bo).map(Vo),M=wn.begin("searchPseudoElements");vt(),Promise.all(E).then(function(){M(),cn(),S()}).catch(function(){M(),cn(),w()})})}}var Qo={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=ee,e}}},provides:function(n){n.pseudoElements2svg=function(e){var t=e.node,r=t===void 0?P:t;v.searchPseudoElements&&ee(r)}}},te=!1,Zo={mixout:function(){return{dom:{unwatch:function(){vt(),te=!0}}}},hooks:function(){return{bootstrap:function(){Jn(rn("mutationObserverCallbacks",{}))},noAuto:function(){Co()},watch:function(e){var t=e.observeMutationsRoot;te?cn():Jn(rn("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},re=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(t,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return t.flipX=!0,t;if(o&&s==="v")return t.flipY=!0,t;if(s=parseFloat(s),isNaN(s))return t;switch(o){case"grow":t.size=t.size+s;break;case"shrink":t.size=t.size-s;break;case"left":t.x=t.x-s;break;case"right":t.x=t.x+s;break;case"up":t.y=t.y-s;break;case"down":t.y=t.y+s;break;case"rotate":t.rotate=t.rotate+s;break}return t},e)},as={mixout:function(){return{parse:{transform:function(e){return re(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-transform");return r&&(e.transform=re(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var t=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),p="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(u," ").concat(p)},g={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:m,path:g};return{tag:"g",attributes:c({},b.outer),children:[{tag:"g",attributes:c({},b.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:c(c({},t.icon.attributes),b.path)}]}]}}}},Ba={x:0,y:0,width:"100%",height:"100%"};function ie(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||n)&&(a.attributes.fill="black"),a}function ns(a){return a.tag==="g"?a.children:[a]}var es={hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-mask"),i=r?Da(r.split(" ").map(function(o){return o.trim()})):ct();return i.prefix||(i.prefix=Q()),e.mask=i,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var t=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,f=e.transform,u=i.width,p=i.icon,m=o.width,g=o.icon,b=Hi({transform:f,containerWidth:m,iconWidth:u}),A={tag:"rect",attributes:c(c({},Ba),{},{fill:"white"})},S=p.children?{children:p.children.map(ie)}:{},w={tag:"g",attributes:c({},b.inner),children:[ie(c({tag:p.tag,attributes:c(c({},p.attributes),b.path)},S))]},E={tag:"g",attributes:c({},b.outer),children:[w]},M="mask-".concat(s||$n()),C="clip-".concat(s||$n()),D={tag:"mask",attributes:c(c({},Ba),{},{id:M,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,E]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:ns(g)},D]};return t.push(R,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(M,")")},Ba)}),{children:t,attributes:r}}}},ts={provides:function(n){var e=!1;K.matchMedia&&(e=K.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var t=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:c(c({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),t.push(s),t.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},rs={hooks:function(){return{parseNodeAttributes:function(e,t){var r=t.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},is=[Bi,Do,Wo,Uo,Yo,Qo,Zo,as,es,ts,rs];uo(is,{mixoutsTo:$});$.noAuto;var ua=$.config;$.library;$.dom;var ht=$.parse;$.findIconDefinition;$.toHtml;var os=$.icon;$.layer;$.text;$.counter;function ss(a){return a=a-0,a===a}function yt(a){return ss(a)?a:(a=a.replace(/[_-]+(.)?/g,(n,e)=>e?e.toUpperCase():""),a.charAt(0).toLowerCase()+a.slice(1))}var ls=(a,n)=>mn.createElement("stop",{key:`${n}-${a.offset}`,offset:a.offset,stopColor:a.color,...a.opacity!==void 0&&{stopOpacity:a.opacity}});function fs(a){return a.charAt(0).toUpperCase()+a.slice(1)}var sa=new Map,cs=1e3;function us(a){if(sa.has(a))return sa.get(a);const n={};let e=0;const t=a.length;for(;e<t;){const r=a.indexOf(";",e),i=r===-1?t:r,o=a.slice(e,i).trim();if(o){const s=o.indexOf(":");if(s>0){const f=o.slice(0,s).trim(),u=o.slice(s+1).trim();if(f&&u){const p=yt(f);n[p.startsWith("webkit")?fs(p):p]=u}}}e=i+1}if(sa.size===cs){const r=sa.keys().next().value;r&&sa.delete(r)}return sa.set(a,n),n}function xt(a,n,e={}){if(typeof n=="string")return n;const t=(n.children||[]).map(m=>{let g=m;return("fill"in e||e.gradientFill)&&m.tag==="path"&&"fill"in m.attributes&&(g={...m,attributes:{...m.attributes,fill:void 0}}),xt(a,g)}),r=n.attributes||{},i={};for(const[m,g]of Object.entries(r))switch(!0){case m==="class":{i.className=g;break}case m==="style":{i.style=us(String(g));break}case m.startsWith("aria-"):case m.startsWith("data-"):{i[m.toLowerCase()]=g;break}default:i[yt(m)]=g}const{style:o,role:s,"aria-label":f,gradientFill:u,...p}=e;if(o&&(i.style=i.style?{...i.style,...o}:o),s&&(i.role=s),f&&(i["aria-label"]=f,i["aria-hidden"]="false"),u){i.fill=`url(#${u.id})`;const{type:m,stops:g=[],...b}=u;t.unshift(a(m==="linear"?"linearGradient":"radialGradient",{...b,id:u.id},g.map(ls)))}return a(n.tag,{...i,...p},...t)}var ms=xt.bind(null,mn.createElement),oe=(a,n)=>{const e=ce.useId();return a||(n?e:void 0)},ds=class{constructor(a="react-fontawesome"){this.enabled=!1;let n=!1;try{n=typeof process<"u"&&!1}catch{}this.scope=a,this.enabled=n}log(...a){this.enabled&&console.log(`[${this.scope}]`,...a)}warn(...a){this.enabled&&console.warn(`[${this.scope}]`,...a)}error(...a){this.enabled&&console.error(`[${this.scope}]`,...a)}},ps="searchPseudoElementsFullScan"in ua&&typeof ua.searchPseudoElementsFullScan=="boolean"?"7.0.0":"6.0.0",vs=Number.parseInt(ps)>=7,gs=()=>vs,xa="fa",O={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse",flip360:"fa-flip-360",buzz:"fa-buzz",float:"fa-float",jello:"fa-jello",spinSnap:"fa-spin-snap",spinSnap4:"fa-spin-snap-4",spinSnap8:"fa-spin-snap-8",swing:"fa-swing",wag:"fa-wag"},bs={left:"fa-pull-left",right:"fa-pull-right"},hs={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},ys={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},U={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto",canvasSquare:"fa-canvas-square",canvasRoomy:"fa-canvas-roomy"};function xs(a){const n=ua.cssPrefix||ua.familyPrefix||xa;return n===xa?a:a.replace(new RegExp(String.raw`(?<=^|\s)${xa}-`,"g"),`${n}-`)}function Ss(a){const{beat:n,fade:e,beatFade:t,bounce:r,shake:i,spin:o,spinPulse:s,spinReverse:f,pulse:u,fixedWidth:p,inverse:m,border:g,flip:b,size:A,rotation:S,pull:w,swapOpacity:E,rotateBy:M,widthAuto:C,canvasSquare:D,canvasRoomy:R,flip360:H,buzz:ra,float:J,jello:da,spinSnap:pa,spinSnap4:Ua,spinSnap8:ka,swing:va,wag:ia,className:aa}=a,y=[];return aa&&y.push(...aa.split(" ")),n&&y.push(O.beat),e&&y.push(O.fade),t&&y.push(O.beatFade),r&&y.push(O.bounce),i&&y.push(O.shake),o&&y.push(O.spin),f&&y.push(O.spinReverse),s&&y.push(O.spinPulse),u&&y.push(O.pulse),p&&y.push(U.fixedWidth),m&&y.push(U.inverse),g&&y.push(U.border),b===!0&&y.push(U.flip),(b==="horizontal"||b==="both")&&y.push(U.flipHorizontal),(b==="vertical"||b==="both")&&y.push(U.flipVertical),A!=null&&y.push(ys[A]),S!=null&&S!==0&&y.push(hs[S]),w!=null&&y.push(bs[w]),E&&y.push(U.swapOpacity),gs()?(M&&y.push(U.rotateBy),C&&y.push(U.widthAuto),D&&y.push(U.canvasSquare),R&&y.push(U.canvasRoomy),H&&y.push(O.flip360),ra&&y.push(O.buzz),J&&y.push(O.float),da&&y.push(O.jello),pa&&y.push(O.spinSnap),Ua&&y.push(O.spinSnap4),ka&&y.push(O.spinSnap8),va&&y.push(O.swing),ia&&y.push(O.wag),(ua.cssPrefix||ua.familyPrefix||xa)===xa?y:y.map(xs)):y}var zs=a=>typeof a=="object"&&"icon"in a&&!!a.icon;function se(a){if(a)return zs(a)?a:ht.icon(a)}function ws(a){return Object.keys(a)}var le=new ds("FontAwesomeIcon"),St={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},As=new Set(Object.keys(St)),ks=mn.forwardRef((a,n)=>{const e={...St,...a},{icon:t,mask:r,symbol:i,title:o,titleId:s,maskId:f,transform:u}=e,p=oe(f,!!r),m=oe(s,!!o),g=se(t);if(!g)return le.error("Icon lookup is undefined",t),null;const b=Ss(e),A=typeof u=="string"?ht.transform(u):u,S=se(r),w=os(g,{...b.length>0&&{classes:b},...A&&{transform:A},...S&&{mask:S},symbol:i,title:o,titleId:m,maskId:p});if(!w)return le.error("Could not find icon",g),null;const{abstract:E}=w,M={ref:n};for(const C of ws(e))As.has(C)||(M[C]=e[C]);return ms(E[0],M)});ks.displayName="FontAwesomeIcon";/*!
 * Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var Ms={prefix:"fas",iconName:"file-arrow-down",icon:[384,512,["file-download"],"f56d","M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM175 441c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-86.1c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 86.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64z"]},Cs={prefix:"fas",iconName:"map-pin",icon:[320,512,[128205],"f276","M192 284.4C256.1 269.9 304 212.5 304 144 304 64.5 239.5 0 160 0S16 64.5 16 144c0 68.5 47.9 125.9 112 140.4L128 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-195.6zM168 96c-30.9 0-56 25.1-56 56 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4 46.6-104 104-104 13.3 0 24 10.7 24 24s-10.7 24-24 24z"]},Ls={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},Fs={prefix:"fas",iconName:"hard-drive",icon:[448,512,[128436,"hdd"],"f0a0","M64 32C28.7 32 0 60.7 0 96L0 260.1C18.1 247.4 40.2 240 64 240l320 0c23.8 0 45.9 7.4 64 20.1L448 96c0-35.3-28.7-64-64-64L64 32zM448 352c0-35.3-28.7-64-64-64L64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64zM224 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},_s={prefix:"fas",iconName:"palette",icon:[512,512,[127912],"f53f","M512 256c0 .9 0 1.8 0 2.7-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48 0 3.4 .4 6.7 1 9.9 2.1 10.2 6.5 20 10.8 29.9 6.1 13.8 12.1 27.5 12.1 42 0 31.8-21.6 60.7-53.4 62-3.5 .1-7 .2-10.6 .2-141.4 0-256-114.6-256-256S114.6 0 256 0 512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},Ns={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M128 320L24.5 320c-24.9 0-40.2-27.1-27.4-48.5L50 183.3C58.7 168.8 74.3 160 91.2 160l95 0c76.1-128.9 189.6-135.4 265.5-124.3 12.8 1.9 22.8 11.9 24.6 24.6 11.1 75.9 4.6 189.4-124.3 265.5l0 95c0 16.9-8.8 32.5-23.3 41.2l-88.2 52.9c-21.3 12.8-48.5-2.6-48.5-27.4L192 384c0-35.3-28.7-64-64-64l-.1 0zM400 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},Os={prefix:"fas",iconName:"paper-plane",icon:[576,512,[61913],"f1d8","M536.4-26.3c9.8-3.5 20.6-1 28 6.3s9.8 18.2 6.3 28l-178 496.9c-5 13.9-18.1 23.1-32.8 23.1-14.2 0-27-8.6-32.3-21.7l-64.2-158c-4.5-11-2.5-23.6 5.2-32.6l94.5-112.4c5.1-6.1 4.7-15-.9-20.6s-14.6-6-20.6-.9L229.2 276.1c-9.1 7.6-21.6 9.6-32.6 5.2L38.1 216.8c-13.1-5.3-21.7-18.1-21.7-32.3 0-14.7 9.2-27.8 23.1-32.8l496.9-178z"]},js={prefix:"fas",iconName:"print",icon:[512,512,[128424,128438,9113],"f02f","M64 64C64 28.7 92.7 0 128 0L341.5 0c17 0 33.3 6.7 45.3 18.7l42.5 42.5c12 12 18.7 28.3 18.7 45.3l0 37.5-384 0 0-80zM0 256c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 96c0 17.7-14.3 32-32 32l-32 0 0 64c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-64-32 0c-17.7 0-32-14.3-32-32l0-96zM128 416l0 32 256 0 0-96-256 0 0 64zM456 272a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"]},Ts={prefix:"fas",iconName:"database",icon:[448,512,[],"f1c0","M448 205.8c-14.8 9.8-31.8 17.7-49.5 24-47 16.8-108.7 26.2-174.5 26.2S96.4 246.5 49.5 229.8c-17.6-6.3-34.7-14.2-49.5-24L0 288c0 44.2 100.3 80 224 80s224-35.8 224-80l0-82.2zm0-77.8l0-48C448 35.8 347.7 0 224 0S0 35.8 0 80l0 48c0 44.2 100.3 80 224 80s224-35.8 224-80zM398.5 389.8C351.6 406.5 289.9 416 224 416S96.4 406.5 49.5 389.8c-17.6-6.3-34.7-14.2-49.5-24L0 432c0 44.2 100.3 80 224 80s224-35.8 224-80l0-66.2c-14.8 9.8-31.8 17.7-49.5 24z"]},Rs={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M292.9 384c7.3-22.3 21.9-42.5 38.4-59.9 32.7-34.4 52.7-80.9 52.7-132.1 0-106-86-192-192-192S0 86 0 192c0 51.2 20 97.7 52.7 132.1 16.5 17.4 31.2 37.6 38.4 59.9l201.7 0zM288 432l-192 0 0 16c0 44.2 35.8 80 80 80l32 0c44.2 0 80-35.8 80-80l0-16zM184 112c-39.8 0-72 32.2-72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3 53.7-120 120-120 13.3 0 24 10.7 24 24s-10.7 24-24 24z"]},$s={prefix:"fas",iconName:"code",icon:[576,512,[],"f121","M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z"]},Ds={prefix:"fas",iconName:"terminal",icon:[512,512,[],"f120","M9.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L146.7 256 9.4 118.6zM224 384l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Ws={prefix:"fas",iconName:"baseball-bat-ball",icon:[576,512,[],"f432","M464.1 544a80 80 0 1 1 0-160 80 80 0 1 1 0 160zm8.4-576c15.1 0 29.7 5.8 40.7 16.2l47.2 44.8c12.6 12 19.1 29 17.5 46.3-1.2 13.3-7 25.8-16.5 35.2L363.1 309c-7.3 7.3-15.7 13.4-25 18L206 393c-9.2 4.6-17.7 10.7-25 18l-92 92 1.7 1.8c7.7 9.4 7.1 23.3-1.7 32.1s-22.7 9.3-32.1 1.7l-1.8-1.7-48-48-1.7-1.8c-7.7-9.4-7.1-23.3 1.7-32.1s22.7-9.3 32.1-1.7l1.8 1.7 92-92c7.3-7.3 13.4-15.7 18-25l66.1-132.1c4.6-9.2 10.7-17.7 18-25L430.8-14.7C441.9-25.8 456.9-32 472.5-32z"]},Us={prefix:"fas",iconName:"link",icon:[576,512,[128279,"chain"],"f0c1","M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z"]},Ys={prefix:"fas",iconName:"hand",icon:[512,512,[129306,9995,"hand-paper"],"f256","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 272c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4S-3.6 325.7 12.4 341L124.8 448c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-208c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 176c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208z"]},Xs={prefix:"fas",iconName:"house",icon:[512,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"]},qs={prefix:"fas",iconName:"clapperboard",icon:[512,512,[],"e131","M448 64c2 0 3.9 .1 5.8 .3l-95.7 95.7 67.9 0 72-72c8.8 11 14 24.9 14 40l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l70.1 0-96 96 67.9 0 95-95 1-1 92.1 0-96 96 67.9 0 95-95 1-1 86.1 0z"]},Hs={prefix:"fas",iconName:"laptop-code",icon:[640,512,[],"f5fc","M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 240-64 0 0-240-384 0 0 240-64 0 0-240zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2 0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]},Gs={prefix:"fas",iconName:"server",icon:[448,512,[],"f233","M64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32zm216 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 288zm216 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]},Vs={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},Bs={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},Js={prefix:"fas",iconName:"leaf",icon:[512,512,[],"f06c","M471.3 6.7C477.7 .6 487-1.6 495.6 1.2 505.4 4.5 512 13.7 512 24l0 186.9c0 131.2-108.1 237.1-238.8 237.1-77 0-143.4-49.5-167.5-118.7-35.4 30.8-57.7 76.1-57.7 126.7 0 13.3-10.7 24-24 24S0 469.3 0 456C0 381.1 38.2 315.1 96.1 276.3 131.4 252.7 173.5 240 216 240l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-39.7 0-77.3 8.8-111 24.5 23.3-70 89.2-120.5 167-120.5 66.4 0 115.8-22.1 148.7-44 19.2-12.8 35.5-28.1 50.7-45.3z"]},Ks={prefix:"fas",iconName:"tv",icon:[576,512,[63717,"television","tv-alt"],"f26c","M64 96l0 240 448 0 0-240-448 0zM0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 240c0 35.3-28.7 64-64 64L64 400c-35.3 0-64-28.7-64-64L0 96zM160 448l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Qs={prefix:"fas",iconName:"graduation-cap",icon:[576,512,[127891,"mortar-board"],"f19d","M48 195.8l209.2 86.1c9.8 4 20.2 6.1 30.8 6.1s21-2.1 30.8-6.1l242.4-99.8c9-3.7 14.8-12.4 14.8-22.1s-5.8-18.4-14.8-22.1L318.8 38.1C309 34.1 298.6 32 288 32s-21 2.1-30.8 6.1L14.8 137.9C5.8 141.6 0 150.3 0 160L0 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-260.2zm48 71.7L96 384c0 53 86 96 192 96s192-43 192-96l0-116.6-142.9 58.9c-15.6 6.4-32.2 9.7-49.1 9.7s-33.5-3.3-49.1-9.7L96 267.4z"]},Zs={prefix:"fas",iconName:"music",icon:[512,512,[127925],"f001","M468 7c7.6 6.1 12 15.3 12 25l0 304c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6l0-116.7-224 49.8 0 206.3c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6L128 96c0-15 10.4-28 25.1-31.2l288-64c9.5-2.1 19.4 .2 27 6.3z"]},a1={prefix:"fas",iconName:"robot",icon:[640,512,[129302],"f544","M352 0c0-17.7-14.3-32-32-32S288-17.7 288 0l0 64-96 0c-53 0-96 43-96 96l0 224c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-224c0-53-43-96-96-96l-96 0 0-64zM160 368c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm120 0c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zm120 0c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24zM224 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm144 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM64 224c0-17.7-14.3-32-32-32S0 206.3 0 224l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96zm544-32c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32z"]},n1={prefix:"fas",iconName:"file-code",icon:[384,512,[],"f1c9","M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM154.2 295.6c8.6-10.1 7.5-25.2-2.6-33.8s-25.2-7.5-33.8 2.6l-48 56c-7.7 9-7.7 22.2 0 31.2l48 56c8.6 10.1 23.8 11.2 33.8 2.6s11.2-23.8 2.6-33.8l-34.6-40.4 34.6-40.4zm112-31.2c-8.6-10.1-23.8-11.2-33.8-2.6s-11.2 23.8-2.6 33.8l34.6 40.4-34.6 40.4c-8.6 10.1-7.5 25.2 2.6 33.8s25.2 7.5 33.8-2.6l48-56c7.7-9 7.7-22.2 0-31.2l-48-56z"]},e1={prefix:"fas",iconName:"mug-hot",icon:[576,512,[9749],"f7b6","M152-16c-13.3 0-24 10.7-24 24 0 38.9 23.4 59.4 39.1 73.1l1.1 1c16.3 14.3 23.8 21.8 23.8 37.9 0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C183.5 31.7 176 24.1 176 8 176-5.3 165.3-16 152-16zM96 192c-17.7 0-32 14.3-32 32l0 192c0 53 43 96 96 96l192 0c41.8 0 77.4-26.7 90.5-64l5.5 0c70.7 0 128-57.3 128-128S518.7 192 448 192L96 192zM448 384l0-128c35.3 0 64 28.7 64 64s-28.7 64-64 64zM288 8c0-13.3-10.7-24-24-24S240-5.3 240 8c0 38.9 23.4 59.4 39.1 73.1l1.1 1c16.3 14.3 23.8 21.8 23.8 37.9 0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C295.5 31.7 288 24.1 288 8z"]},t1={prefix:"fas",iconName:"bolt",icon:[448,512,[9889,"zap"],"f0e7","M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z"]},Is={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z"]},r1=Is,i1={prefix:"fas",iconName:"compass",icon:[512,512,[129517],"f14e","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},o1={prefix:"fas",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM165.4 321.9c20.4 28 53.4 46.1 90.6 46.1s70.2-18.1 90.6-46.1c7.8-10.7 22.8-13.1 33.5-5.3s13.1 22.8 5.3 33.5C356.3 390 309.2 416 256 416s-100.3-26-129.4-65.9c-7.8-10.7-5.4-25.7 5.3-33.5s25.7-5.4 33.5 5.3zM144 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},s1={prefix:"fas",iconName:"microchip",icon:[512,512,[],"f2db","M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm16 48l0 160 160 0 0-160-160 0z"]},l1={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},f1={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},c1={prefix:"fas",iconName:"layer-group",icon:[512,512,[],"f5fd","M232.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 149.8C5.4 145.8 0 137.3 0 128s5.4-17.9 13.9-21.8L232.5 5.2zM48.1 218.4l164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 277.8C5.4 273.8 0 265.3 0 256s5.4-17.9 13.9-21.8l34.1-15.8zM13.9 362.2l34.1-15.8 164.3 75.9c27.7 12.8 59.6 12.8 87.3 0l164.3-75.9 34.1 15.8c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L13.9 405.8C5.4 401.8 0 393.3 0 384s5.4-17.9 13.9-21.8z"]};/*!
 * Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var Ps={prefix:"fab",iconName:"square-js",icon:[448,512,["js-square"],"f3b9","M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM180.9 444.9c-33.7 0-53.2-17.4-63.2-38.5L152 385.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5l0-143.1 42.1 0 0 143.7c0 43.6-25.6 63.5-62.9 63.5zm85.8-43L301 382.1c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6-39.1 0-64.4-18.6-76.7-43z"]},u1=Ps,m1={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M216.5 362.5c-66-8-112.5-55.5-112.5-117 0-25 9-52 24-70-6.5-16.5-5.5-51.5 2-66 20-2.5 47 8 63 22.5 19-6 39-9 63.5-9s44.5 3 62.5 8.5c15.5-14 43-24.5 63-22 7 13.5 8 48.5 1.5 65.5 16 19 24.5 44.5 24.5 70.5 0 61.5-46.5 108-113.5 116.5 17 11 28.5 35 28.5 62.5l0 52C323 491.5 335.5 500 350.5 494 441 459.5 512 369 512 257 512 115.5 397 0 255.5 0S0 115.5 0 257c0 111 70.5 203 165.5 237.5 13.5 5 26.5-4 26.5-17.5l0-40c-7 3-16 5-24 5-33 0-52.5-18-66.5-51.5-5.5-13.5-11.5-21.5-23-23-6-.5-8-3-8-6 0-6 10-10.5 20-10.5 14.5 0 27 9 40 27.5 10 14.5 20.5 21 33 21s20.5-4.5 32-16c8.5-8.5 15-16 21-21z"]},d1={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"]},p1={prefix:"fab",iconName:"docker",icon:[640,512,[],"f395","M349.9 236.3l-66.1 0 0-59.4 66.1 0 0 59.4zm0-204.3l-66.1 0 0 60.7 66.1 0 0-60.7zm78.2 144.8l-66.1 0 0 59.4 66.1 0 0-59.4zM271.8 104.7l-66.1 0 0 60.1 66.1 0 0-60.1zm78.1 0l-66.1 0 0 60.1 66.1 0 0-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7l-434.7 0c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4 .4 67.6 .1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zM115.6 176.8l-66 0 0 59.4 66.1 0 0-59.4-.1 0zm78.1 0l-66.1 0 0 59.4 66.1 0 0-59.4zm78.1 0l-66.1 0 0 59.4 66.1 0 0-59.4zm-78.1-72.1l-66.1 0 0 60.1 66.1 0 0-60.1z"]},v1={prefix:"fab",iconName:"git-alt",icon:[448,512,[],"f841","M439.6 236.1L244 40.5C238.6 35 231.2 32 223.6 32s-15 3-20.4 8.4l-40.7 40.6 51.5 51.5c27.1-9.1 52.7 16.8 43.4 43.7l49.7 49.7c34.2-11.8 61.2 31 35.5 56.7-26.5 26.5-70.2-2.9-56-37.3l-46.3-46.3 0 121.9c25.3 12.5 22.3 41.8 9.1 55-6.4 6.4-15.2 10.1-24.3 10.1s-17.8-3.6-24.3-10.1c-17.6-17.6-11.1-46.9 11.2-56l0-123c-20.8-8.5-24.6-30.7-18.6-45L142.6 101 8.5 235.1C3 240.6 0 247.9 0 255.5s3 15 8.5 20.4L204.1 471.6c5.4 5.4 12.7 8.4 20.4 8.4s15-3 20.4-8.4L439.6 276.9c5.4-5.4 8.4-12.8 8.4-20.4s-3-15-8.4-20.4z"]},g1={prefix:"fab",iconName:"react",icon:[512,512,[],"f41b","M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9-53.4 18.5-91.7 47.7-91.7 77.9 0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zM136.9 187.2c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zM115.7 320.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zM256 301.8a45.8 45.8 0 1 0 0-91.6 45.8 45.8 0 1 0 0 91.6z"]},b1={prefix:"fab",iconName:"linux",icon:[448,512,[],"f17c","M220.9 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5 .2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4 .2-.8 .7-.6 1.1 .3 1.3 2.3 1.1 3.4 1.7zM199 125c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6 .2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5 .1-1.3 .6-3.4 1.5-3.2 2.9 .1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72 .5-45.9 5.1-131.2-75.8-131.3-102.4-.2-76.8 103.4-77.9 135.2-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9 .6 7.9 1.2 11.8 1.2 8.1 2.5 15.7 .8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1 .6 2.3 1.4 4.6 2.5 6.7l0 .1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3 .4-8.2-4.4-17.3-15.5-29.7zM223.8 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183.1 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4 .7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4l0-.2c2.4-7.6 .6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7 .8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4 .6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1 .8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7 .4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6 .8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1 .3-.2 .7-.3 1-.5 .8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.4 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z"]},h1={prefix:"fab",iconName:"figma",icon:[384,512,[],"f799","M14 95.8C14 42.9 56.9 0 109.8 0L274.2 0c52.9 0 95.8 42.9 95.8 95.8 0 33.5-17.2 63-43.2 80.1 26 17.1 43.2 46.6 43.2 80.1 0 52.9-42.9 95.8-95.8 95.8l-2.1 0c-24.8 0-47.4-9.4-64.4-24.9l0 88.3c0 53.6-44 96.8-97.4 96.8-52.8 0-96.3-42.8-96.3-95.8 0-33.5 17.2-63 43.2-80.1-26-17.1-43.2-46.6-43.2-80.1s17.2-63 43.2-80.1C31.2 158.8 14 129.3 14 95.8zm162.3 95.8l-66.5 0c-35.6 0-64.4 28.8-64.4 64.4 0 35.4 28.6 64.2 64 64.4l66.9 0 0-128.8zM207.7 256c0 35.6 28.8 64.4 64.4 64.4l2.1 0c35.6 0 64.4-28.8 64.4-64.4s-28.8-64.4-64.4-64.4l-2.1 0c-35.6 0-64.4 28.8-64.4 64.4zm-97.9 95.8l-.4 0c-35.4 .2-64 29-64 64.4s29.2 64.4 64.9 64.4c36.3 0 66-29.4 66-65.5l0-63.4-66.5 0zm0-320.4c-35.6 0-64.4 28.8-64.4 64.4s28.8 64.4 64.4 64.4l66.5 0 0-128.8-66.5 0zm97.9 128.8l66.5 0c35.6 0 64.4-28.8 64.4-64.4s-28.8-64.4-64.4-64.4l-66.5 0 0 128.8z"]},y1={prefix:"fab",iconName:"x-twitter",icon:[448,512,[],"e61b","M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z"]},x1={prefix:"fab",iconName:"python",icon:[448,512,[],"f3e2","M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2l-40.1 0 0 47.4c0 36.8-31.2 67.8-66.8 67.8l-106.8 0c-29.2 0-53.4 25-53.4 54.3l0 101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3l0-40.7-106.7 0 0-13.6 160.2 0c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 444.7a20.4 20.4 0 1 1 0-40.7 20.4 20.4 0 1 1 0 40.7zM167.8 248.1l106.8 0c29.7 0 53.4-24.5 53.4-54.3l0-101.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6l0 40.7 106.9 0 0 13.6-147 0c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2l36.7 0 0-48.8c0-35.3 30.5-66.4 66.8-66.4zM161.2 64.7a20.4 20.4 0 1 1 0 40.8 20.4 20.4 0 1 1 0-40.8z"]},S1={prefix:"fab",iconName:"node-js",icon:[448,512,[],"f3d3","M224.5 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6 .4l47.4 28.1c1.7 1 4.1 1 5.7 0L412 367.5c1.7-1 2.8-3 2.8-5l0-213.2c0-2.1-1.1-4-2.9-5.1L227.3 37.7c-1.7-1-4-1-5.7 0L37.1 144.3c-1.8 1-2.9 3-2.9 5.1l0 213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7l0-210.4c0-3 2.4-5.3 5.4-5.3l23.4 0c2.9 0 5.4 2.3 5.4 5.3l0 210.5c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6L20.6 396.1c-12-6.9-19.4-19.8-19.4-33.7l0-213.1c0-13.8 7.4-26.8 19.4-33.7L205.1 9c11.7-6.6 27.2-6.6 38.8 0L428.6 115.7c12 6.9 19.4 19.8 19.4 33.7l0 213.1c0 13.8-7.4 26.7-19.4 33.7L243.9 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zM373.6 297.9c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8 .5 2.4 2.7 4.2 5.2 4.2l24 0c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5l-23.9 0c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"]},z1={prefix:"fab",iconName:"letterboxd",icon:[640,512,[],"e62d","M521.3 128C586.9 128 640 181.1 640 246.6S586.9 365.2 521.3 365.2c-42.5 0-79.7-22.3-100.7-55.8 11.4-18.2 18-39.7 18-62.8s-6.6-44.6-18-62.8l.8-1.2c20.8-32.3 56.8-53.9 97.9-54.6l2 0zM320 128c42.5 0 79.7 22.3 100.7 55.8-11.4 18.2-18 39.7-18 62.8s6.6 44.6 18 62.8l-.8 1.2c-20.8 32.3-56.8 53.9-97.9 54.6l-2 0c-42.5 0-79.7-22.3-100.7-55.8 11.4-18.2 18-39.7 18-62.8s-6.6-44.6-18-62.8l.8-1.2c20.8-32.3 56.8-53.9 97.9-54.6l2 0zm-201.3 0c42.5 0 79.7 22.3 100.7 55.8-11.4 18.2-18 39.7-18 62.8s6.6 44.6 18 62.8l-.8 1.2c-20.8 32.3-56.8 53.9-97.9 54.6l-2 0C53.1 365.1 0 312.1 0 246.6S53.1 128 118.7 128z"]};export{s1 as A,Ts as B,g1 as C,t1 as D,Ns as E,ks as F,S1 as G,Gs as H,Ds as I,Fs as J,Js as K,a1 as L,v1 as M,m1 as N,p1 as O,b1 as P,Os as Q,h1 as R,c1 as S,Us as T,r1 as U,d1 as V,y1 as W,z1 as X,js as Y,Cs as Z,ce as a,Xs as b,Hs as c,Ls as d,Ms as e,i1 as f,Vs as g,f1 as h,Ys as i,Es as j,o1 as k,l1 as l,e1 as m,$s as n,Bs as o,Ws as p,Ks as q,fe as r,qs as s,Zs as t,Rs as u,Qs as v,n1 as w,_s as x,u1 as y,x1 as z};
