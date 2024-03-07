/*!
 * Modernizr v2.6.2
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=(function(A,c,g){var J="2.6.2",w={},y=true,M=c.documentElement,a="modernizr",I=c.createElement(a),E=I.style,L=c.createElement("input"),C=":)",b={}.toString,j=" -webkit- -moz- -o- -ms- ".split(" "),h="Webkit Moz O ms",F=h.split(" "),K=h.toLowerCase().split(" "),H={svg:"http://www.w3.org/2000/svg"},l={},p={},f={},e=[],k=e.slice,s,n=function(V,X,P,W){var O,U,R,S,N=c.createElement("div"),T=c.body,Q=T||c.createElement("body");if(parseInt(P,10)){while(P--){R=c.createElement("div");R.id=W?W[P]:a+(P+1);N.appendChild(R)}}O=["&#173;",'<style id="s',a,'">',V,"</style>"].join("");N.id=a;(T?N:Q).innerHTML+=O;Q.appendChild(N);if(!T){Q.style.background="";Q.style.overflow="hidden";S=M.style.overflow;M.style.overflow="hidden";M.appendChild(Q)}U=X(N,V);if(!T){Q.parentNode.removeChild(Q);M.style.overflow=S}else{N.parentNode.removeChild(N)}return !!U},G=function(P){var O=A.matchMedia||A.msMatchMedia;if(O){return O(P).matches}var N;n("@media "+P+" { #"+a+" { position: absolute; } }",function(Q){N=(A.getComputedStyle?getComputedStyle(Q,null):Q.currentStyle)["position"]=="absolute"});return N},o=(function(){var O={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};function N(P,R){R=R||c.createElement(O[P]||"div");P="on"+P;var Q=P in R;if(!Q){if(!R.setAttribute){R=c.createElement("div")}if(R.setAttribute&&R.removeAttribute){R.setAttribute(P,"");Q=r(R[P],"function");if(!r(R[P],"undefined")){R[P]=g}R.removeAttribute(P)}}R=null;return Q}return N})(),i=({}).hasOwnProperty,x;if(!r(i,"undefined")&&!r(i.call,"undefined")){x=function(N,O){return i.call(N,O)}}else{x=function(N,O){return((O in N)&&r(N.constructor.prototype[O],"undefined"))}}if(!Function.prototype.bind){Function.prototype.bind=function d(P){var Q=this;if(typeof Q!="function"){throw new TypeError()}var N=k.call(arguments,1),O=function(){if(this instanceof O){var T=function(){};T.prototype=Q.prototype;var S=new T();var R=Q.apply(S,N.concat(k.call(arguments)));if(Object(R)===R){return R}return S}else{return Q.apply(P,N.concat(k.call(arguments)))}};return O}}function D(N){E.cssText=N}function u(O,N){return D(j.join(O+";")+(N||""))}function r(O,N){return typeof O===N}function t(O,N){return !!~(""+O).indexOf(N)}function z(P,N){for(var O in P){var Q=P[O];if(!t(Q,"-")&&E[Q]!==g){return N=="pfx"?Q:true}}return false}function q(O,R,Q){for(var N in O){var P=R[O[N]];if(P!==g){if(Q===false){return O[N]}if(r(P,"function")){return P.bind(Q||R)}return P}}return false}function m(R,N,Q){var O=R.charAt(0).toUpperCase()+R.slice(1),P=(R+" "+F.join(O+" ")+O).split(" ");if(r(N,"string")||r(N,"undefined")){return z(P,N)}else{P=(R+" "+(K).join(O+" ")+O).split(" ");return q(P,N,Q)}}l.flexbox=function(){return m("flexWrap")};l.flexboxlegacy=function(){return m("boxDirection")};l.canvas=function(){var N=c.createElement("canvas");return !!(N.getContext&&N.getContext("2d"))};l.canvastext=function(){return !!(w.canvas&&r(c.createElement("canvas").getContext("2d").fillText,"function"))};l.webgl=function(){return !!A.WebGLRenderingContext};l.touch=function(){var N;if(("ontouchstart" in A)||A.DocumentTouch&&c instanceof DocumentTouch){N=true}else{n(["@media (",j.join("touch-enabled),("),a,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(O){N=O.offsetTop===9})}return N};l.geolocation=function(){return"geolocation" in navigator};l.postmessage=function(){return !!A.postMessage};l.websqldatabase=function(){return !!A.openDatabase};l.indexedDB=function(){return !!m("indexedDB",A)};l.hashchange=function(){return o("hashchange",A)&&(c.documentMode===g||c.documentMode>7)};l.history=function(){return !!(A.history&&history.pushState)};l.draganddrop=function(){var N=c.createElement("div");return("draggable" in N)||("ondragstart" in N&&"ondrop" in N)};l.websockets=function(){return"WebSocket" in A||"MozWebSocket" in A};l.rgba=function(){D("background-color:rgba(150,255,150,.5)");return t(E.backgroundColor,"rgba")};l.hsla=function(){D("background-color:hsla(120,40%,100%,.5)");return t(E.backgroundColor,"rgba")||t(E.backgroundColor,"hsla")};l.multiplebgs=function(){D("background:url(https://),url(https://),red url(https://)");return(/(url\s*\(.*?){3}/).test(E.background)};l.backgroundsize=function(){return m("backgroundSize")};l.borderimage=function(){return m("borderImage")};l.borderradius=function(){return m("borderRadius")};l.boxshadow=function(){return m("boxShadow")};l.textshadow=function(){return c.createElement("div").style.textShadow===""};l.opacity=function(){u("opacity:.55");return(/^0.55$/).test(E.opacity)};l.cssanimations=function(){return m("animationName")};l.csscolumns=function(){return m("columnCount")};l.cssgradients=function(){var P="background-image:",O="gradient(linear,left top,right bottom,from(#9f9),to(white));",N="linear-gradient(left top,#9f9, white);";
D((P+"-webkit- ".split(" ").join(O+P)+j.join(N+P)).slice(0,-P.length));return t(E.backgroundImage,"gradient")};l.cssreflections=function(){return m("boxReflect")};l.csstransforms=function(){return !!m("transform")};l.csstransforms3d=function(){var N=!!m("perspective");if(N&&"webkitPerspective" in M.style){n("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(O,P){N=O.offsetLeft===9&&O.offsetHeight===3})}return N};l.csstransitions=function(){return m("transition")};l.fontface=function(){var N;n('@font-face {font-family:"font";src:url("https://")}',function(R,S){var Q=c.getElementById("smodernizr"),O=Q.sheet||Q.styleSheet,P=O?(O.cssRules&&O.cssRules[0]?O.cssRules[0].cssText:O.cssText||""):"";N=/src/i.test(P)&&P.indexOf(S.split(" ")[0])===0});return N};l.generatedcontent=function(){var N;n(["#",a,"{font:0/0 a}#",a,':after{content:"',C,'";visibility:hidden;font:3px/1 a}'].join(""),function(O){N=O.offsetHeight>=3});return N};l.video=function(){var O=c.createElement("video"),N=false;try{if(N=!!O.canPlayType){N=new Boolean(N);N.ogg=O.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,"");N.h264=O.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,"");N.webm=O.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}}catch(P){}return N};l.audio=function(){var O=c.createElement("audio"),N=false;try{if(N=!!O.canPlayType){N=new Boolean(N);N.ogg=O.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,"");N.mp3=O.canPlayType("audio/mpeg;").replace(/^no$/,"");N.wav=O.canPlayType('audio/wav; codecs="1"').replace(/^no$/,"");N.m4a=(O.canPlayType("audio/x-m4a;")||O.canPlayType("audio/aac;")).replace(/^no$/,"")}}catch(P){}return N};l.localstorage=function(){try{localStorage.setItem(a,a);localStorage.removeItem(a);return true}catch(N){return false}};l.sessionstorage=function(){try{sessionStorage.setItem(a,a);sessionStorage.removeItem(a);return true}catch(N){return false}};l.webworkers=function(){return !!A.Worker};l.applicationcache=function(){return !!A.applicationCache};l.svg=function(){return !!c.createElementNS&&!!c.createElementNS(H.svg,"svg").createSVGRect};l.inlinesvg=function(){var N=c.createElement("div");N.innerHTML="<svg/>";return(N.firstChild&&N.firstChild.namespaceURI)==H.svg};l.smil=function(){return !!c.createElementNS&&/SVGAnimate/.test(b.call(c.createElementNS(H.svg,"animate")))};l.svgclippaths=function(){return !!c.createElementNS&&/SVGClipPath/.test(b.call(c.createElementNS(H.svg,"clipPath")))};function B(){w.input=(function(P){for(var O=0,N=P.length;O<N;O++){f[P[O]]=!!(P[O] in L)}if(f.list){f.list=!!(c.createElement("datalist")&&A.HTMLDataListElement)}return f})("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));w.inputtypes=(function(Q){for(var P=0,O,S,R,N=Q.length;P<N;P++){L.setAttribute("type",S=Q[P]);O=L.type!=="text";if(O){L.value=C;L.style.cssText="position:absolute;visibility:hidden;";if(/^range$/.test(S)&&L.style.WebkitAppearance!==g){M.appendChild(L);R=c.defaultView;O=R.getComputedStyle&&R.getComputedStyle(L,null).WebkitAppearance!=="textfield"&&(L.offsetHeight!==0);M.removeChild(L)}else{if(/^(search|tel)$/.test(S)){}else{if(/^(url|email)$/.test(S)){O=L.checkValidity&&L.checkValidity()===false}else{O=L.value!=C}}}}p[Q[P]]=!!O}return p})("search tel url email datetime date month week time datetime-local number range color".split(" "))}for(var v in l){if(x(l,v)){s=v.toLowerCase();w[s]=l[v]();e.push((w[s]?"":"no-")+s)}}w.input||B();w.addTest=function(O,P){if(typeof O=="object"){for(var N in O){if(x(O,N)){w.addTest(N,O[N])}}}else{O=O.toLowerCase();if(w[O]!==g){return w}P=typeof P=="function"?P():P;if(typeof y!=="undefined"&&y){M.className+=" "+(P?"":"no-")+O}w[O]=P}return w};D("");I=L=null;
/*! HTML5 Shiv v3.6.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed */
(function(W,Y){var Q=W.html5||{};var T=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var O=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var ac;var U="_html5shiv";var N=0;var aa={};var R;(function(){try{var af=Y.createElement("a");af.innerHTML="<xyz></xyz>";ac=("hidden" in af);R=af.childNodes.length==1||(function(){(Y.createElement)("a");var ah=Y.createDocumentFragment();return(typeof ah.cloneNode=="undefined"||typeof ah.createDocumentFragment=="undefined"||typeof ah.createElement=="undefined")}())}catch(ag){ac=true;R=true}}());function S(af,ah){var ai=af.createElement("p"),ag=af.getElementsByTagName("head")[0]||af.documentElement;ai.innerHTML="x<style>"+ah+"</style>";return ag.insertBefore(ai.lastChild,ag.firstChild)}function X(){var af=V.elements;return typeof af=="string"?af.split(" "):af}function ab(af){var ag=aa[af[U]];if(!ag){ag={};N++;af[U]=N;aa[N]=ag}return ag}function Z(ai,af,ah){if(!af){af=Y}if(R){return af.createElement(ai)}if(!ah){ah=ab(af)}var ag;if(ah.cache[ai]){ag=ah.cache[ai].cloneNode()}else{if(O.test(ai)){ag=(ah.cache[ai]=ah.createElem(ai)).cloneNode()
}else{ag=ah.createElem(ai)}}return ag.canHaveChildren&&!T.test(ai)?ah.frag.appendChild(ag):ag}function ad(ah,aj){if(!ah){ah=Y}if(R){return ah.createDocumentFragment()}aj=aj||ab(ah);var ak=aj.frag.cloneNode(),ai=0,ag=X(),af=ag.length;for(;ai<af;ai++){ak.createElement(ag[ai])}return ak}function ae(af,ag){if(!ag.cache){ag.cache={};ag.createElem=af.createElement;ag.createFrag=af.createDocumentFragment;ag.frag=ag.createFrag()}af.createElement=function(ah){if(!V.shivMethods){return ag.createElem(ah)}return Z(ah,af,ag)};af.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+X().join().replace(/\w+/g,function(ah){ag.createElem(ah);ag.frag.createElement(ah);return'c("'+ah+'")'})+");return n}")(V,ag.frag)}function P(af){if(!af){af=Y}var ag=ab(af);if(V.shivCSS&&!ac&&!ag.hasCSS){ag.hasCSS=!!S(af,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")}if(!R){ae(af,ag)}return af}var V={elements:Q.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:(Q.shivCSS!==false),supportsUnknownElements:R,shivMethods:(Q.shivMethods!==false),type:"default",shivDocument:P,createElement:Z,createDocumentFragment:ad};W.html5=V;P(Y)}(this,c));w._version=J;w._prefixes=j;w._domPrefixes=K;w._cssomPrefixes=F;w.mq=G;w.hasEvent=o;w.testProp=function(N){return z([N])};w.testAllProps=m;w.testStyles=n;w.prefixed=function(P,O,N){if(!O){return m(P,"pfx")}else{return m(P,O,N)}};M.className=M.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(y?" js "+e.join(" "):"");return w})(this,this.document);