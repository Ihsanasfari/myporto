(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[719],{62601:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(58960)},90413:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return g}});let r=n(21024),i=n(68533),o=i._(n(2265)),a=r._(n(54887)),u=r._(n(35793)),l=n(7929),s=n(17727),c=n(47327);n(92637);let d=n(36304),f=r._(n(69950)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function handleLoading(e,t,n,r,i,o){let a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}})}function getDynamicProps(e){let[t,n]=o.version.split(".",2),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let m=(0,o.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:a,width:u,decoding:l,className:s,style:c,fetchPriority:d,placeholder:f,loading:p,unoptimized:m,fill:g,onLoadRef:h,onLoadingCompleteRef:y,setBlurComplete:v,setShowAltText:b,onLoad:_,onError:w,...S}=e;return o.default.createElement("img",{...S,...getDynamicProps(d),loading:p,width:u,height:a,decoding:l,"data-nimg":g?"fill":"1",className:s,style:c,sizes:i,srcSet:r,src:n,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(w&&(e.src=e.src),e.complete&&handleLoading(e,f,h,y,v,m))},[n,f,h,y,v,w,m,t]),onLoad:e=>{let t=e.currentTarget;handleLoading(t,f,h,y,v,m)},onError:e=>{b(!0),"empty"!==f&&v(!0),w&&w(e)}})});function ImagePreload(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...getDynamicProps(n.fetchPriority)};return t&&a.default.preload?(a.default.preload(n.src,r),null):o.default.createElement(u.default,null,o.default.createElement("link",{key:"__nimg-"+n.src+n.srcSet+n.sizes,rel:"preload",href:n.srcSet?void 0:n.src,...r}))}let g=(0,o.forwardRef)((e,t)=>{let n=(0,o.useContext)(d.RouterContext),r=(0,o.useContext)(c.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=p||r||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:a,onLoadingComplete:u}=e,g=(0,o.useRef)(a);(0,o.useEffect)(()=>{g.current=a},[a]);let h=(0,o.useRef)(u);(0,o.useEffect)(()=>{h.current=u},[u]);let[y,v]=(0,o.useState)(!1),[b,_]=(0,o.useState)(!1),{props:w,meta:S}=(0,l.getImgProps)(e,{defaultLoader:f.default,imgConf:i,blurComplete:y,showAltText:b});return o.default.createElement(o.default.Fragment,null,o.default.createElement(m,{...w,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:v,setShowAltText:_,ref:t}),S.priority?o.default.createElement(ImagePreload,{isAppRouter:!n,imgAttributes:w}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},28569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return o}});let r=n(21024),i=r._(n(2265)),o=i.default.createContext({})},94472:function(e,t){"use strict";function isInAmpMode(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return isInAmpMode}})},7929:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),n(92637);let r=n(61511),i=n(17727);function isStaticRequire(e){return void 0!==e.default}function isStaticImageData(e){return void 0!==e.src}function isStaticImport(e){return"object"==typeof e&&(isStaticRequire(e)||isStaticImageData(e))}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getWidths(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}function generateImgAttrs(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:a,loader:u}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:s}=getWidths(t,i,a),c=l.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:l.map((e,r)=>u({config:t,src:n,quality:o,width:e})+" "+("w"===s?e:r+1)+s).join(", "),src:u({config:t,src:n,quality:o,width:l[c]})}}function getImgProps(e,t){let n,o,a,{src:u,sizes:l,unoptimized:s=!1,priority:c=!1,loading:d,className:f,quality:p,width:m,height:g,fill:h=!1,style:y,onLoad:v,onLoadingComplete:b,placeholder:_="empty",blurDataURL:w,fetchPriority:S,layout:C,objectFit:P,objectPosition:x,lazyBoundary:E,lazyRoot:I,...j}=e,{imgConf:O,showAltText:T,blurComplete:k,defaultLoader:M}=t,z=O||i.imageConfigDefault;if("allSizes"in z)n=z;else{let e=[...z.deviceSizes,...z.imageSizes].sort((e,t)=>e-t),t=z.deviceSizes.sort((e,t)=>e-t);n={...z,allSizes:e,deviceSizes:t}}let A=j.loader||M;delete j.loader,delete j.srcSet;let R="__next_img_default"in A;if(R){if("custom"===n.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=A;A=t=>{let{config:n,...r}=t;return e(r)}}if(C){"fill"===C&&(h=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!l&&(l=t)}let L="",D=getInt(m),U=getInt(g);if(isStaticImport(u)){let e=isStaticRequire(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(o=e.blurWidth,a=e.blurHeight,w=w||e.blurDataURL,L=e.src,!h){if(D||U){if(D&&!U){let t=D/e.width;U=Math.round(e.height*t)}else if(!D&&U){let t=U/e.height;D=Math.round(e.width*t)}}else D=e.width,U=e.height}}let q=!c&&("lazy"===d||void 0===d);(!(u="string"==typeof u?u:L)||u.startsWith("data:")||u.startsWith("blob:"))&&(s=!0,q=!1),n.unoptimized&&(s=!0),R&&u.endsWith(".svg")&&!n.dangerouslyAllowSVG&&(s=!0),c&&(S="high");let N=getInt(p),B=Object.assign(h?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:x}:{},T?{}:{color:"transparent"},y),H=k||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:D,heightInt:U,blurWidth:o,blurHeight:a,blurDataURL:w||"",objectFit:B.objectFit})+'")':'url("'+_+'")',F=H?{backgroundSize:B.objectFit||"cover",backgroundPosition:B.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},W=generateImgAttrs({config:n,src:u,unoptimized:s,width:D,quality:N,sizes:l,loader:A}),G={...j,loading:q?"lazy":d,fetchPriority:S,width:D,height:U,decoding:"async",className:f,style:{...B,...F},sizes:W.sizes,srcSet:W.srcSet,src:W.src},V={unoptimized:s,priority:c,placeholder:_,fill:h};return{props:G,meta:V}}},35793:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return defaultHead},default:function(){return d}});let r=n(21024),i=n(68533),o=i._(n(2265)),a=r._(n(80110)),u=n(28569),l=n(61852),s=n(94472);function defaultHead(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function onlyReactElement(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(92637);let c=["name","httpEquiv","charSet","itemProp"];function unique(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=c.length;e<t;e++){let t=c[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}function reduceComponents(e,t){let{inAmpMode:n}=t;return e.reduce(onlyReactElement,[]).reverse().concat(defaultHead(n).reverse()).filter(unique()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:r})})}function Head(e){let{children:t}=e,n=(0,o.useContext)(u.AmpStateContext),r=(0,o.useContext)(l.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:reduceComponents,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}let d=Head;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},61511:function(e,t){"use strict";function getImageBlurSvg(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:a}=e,u=r?40*r:t,l=i?40*i:n,s=u&&l?"viewBox='0 0 "+u+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},47327:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let r=n(21024),i=r._(n(2265)),o=n(17727),a=i.default.createContext(o.imageConfigDefault)},17727:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},69950:function(e,t){"use strict";function defaultLoader(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),defaultLoader.__next_img_default=!0;let n=defaultLoader},80110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return SideEffect}});let r=n(2265),i=r.useLayoutEffect,o=r.useEffect;function SideEffect(e){let{headManager:t,reduceComponentsToState:n}=e;function emitChange(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}return i(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=emitChange),()=>{t&&(t._pendingUpdate=emitChange)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},92637:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return warnOnce}});let warnOnce=e=>{}},58960:function(e){!function(){var t={229:function(e){var t,n,r,i=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(t===setTimeout)return setTimeout(e,0);if((t===defaultSetTimout||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout)return clearTimeout(e);if((n===defaultClearTimeout||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){t=defaultSetTimout}try{n="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){n=defaultClearTimeout}}();var o=[],a=!1,u=-1;function cleanUpNextTick(){a&&r&&(a=!1,r.length?o=r.concat(o):u=-1,o.length&&drainQueue())}function drainQueue(){if(!a){var e=runTimeout(cleanUpNextTick);a=!0;for(var t=o.length;t;){for(r=o,o=[];++u<t;)r&&r[u].run();u=-1,t=o.length}r=null,a=!1,runClearTimeout(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];o.push(new Item(e,t)),1!==o.length||a||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=noop,i.addListener=noop,i.once=noop,i.off=noop,i.removeListener=noop,i.removeAllListeners=noop,i.emit=noop,i.prependListener=noop,i.prependOnceListener=noop,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function __nccwpck_require__(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}},o=!0;try{t[e](i,i.exports,__nccwpck_require__),o=!1}finally{o&&delete n[e]}return i.exports}__nccwpck_require__.ab="//";var r=__nccwpck_require__(229);e.exports=r}()}}]);