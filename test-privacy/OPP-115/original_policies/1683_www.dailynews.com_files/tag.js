function bt_eval(k,p){try{return window.eval.apply(window,[k])}catch(w){p&&p(w)}}var bt_parameter=function(){var k;return function(p,w){var C=w||document;"undefined"===typeof k&&(k=new BrightTag.HTTP.URL(C.location.href));return k.param(p)}}();function bt_meta(k,p){for(var w,C=(p||document).getElementsByTagName("meta"),I=0,J=C.length;I<J;I++)if(w=C[I],w.getAttribute("name")===k)return w.getAttribute("content");return""}
function bt_cookie(k,p){return(new BrightTag.HTTP.Cookie(p||document)).get(k)||""}function bt_data(k,p){var w=BrightTag.instance||BrightTag.configuredSites()[0];return w?w.data(k,p):""}window.bt_data_escaped=bt_data;function bt_log(k){window.console&&console.log&&console.log("BrightTag: "+k)}var bt_handle_exception=bt_log;
window.BrightTag=function(k){function p(a,d){return Object.prototype.toString.call(a)==="[object "+d+"]"}function w(a){return a.replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function C(a){return"\n//at-sourceURL=/BrightTag/"+a.replace(/\s+/g,"_")+".js"}function I(a,d){for(var c=0,b=this.length;c<b;c++)a.call(d,this[c],c,this)}function J(a,d,c){for(var b in a)a.hasOwnProperty(b)&&d.call(c,b,a[b],a)}function r(a,d,c){a&&(O(a)?P.call(a,d,c):n.isObject(a)&&J(a,d,c))}function t(a,d){J(d,function(c,b){a[c]=
b});return a}function O(a){return n.isArray(a)||!n.isString(a)&&a.length}function oa(a){return!!a}function pa(a,d){var c=this.slice(),b=[];P.call(c,function(c,e){a.call(d,c,e,this)&&b.push(c)});return b}function T(a,d,c){if(a)return qa.call(O(a)?a:[a],d||oa,c)}function ra(a,d){var c=this.slice(),b=Array(c.length);P.call(c,function(c,e){b[e]=a.call(d,c,e,this)});return b}function A(a,d){var c,b,h=n.isArray(a)?a:[a];c=0;for(b=h.length;c<b;c++)if(h[c]===d)return!0;return!1}function U(a){return!n.isString(a)?
a:a.replace(/%/g,"%25").replace(/#/g,"%23").replace(/&/g,"%26").replace(/'/g,"%27").replace(/;/g,"%3B").replace(/</g,"%3C").replace(/>/g,"%3E")}function V(a){for(var d=5381,c=0,b=a.length;c<b;)d=(d<<5)+d+a.charCodeAt(c++);return d.toString(36)}function W(a){function d(){}function c(a){var b=Array.prototype.slice.call(arguments,1);x.each(r,function(l){var c=[u].concat(b);(l[a]||d).apply(null,c)})}function b(){D=!0;Q=y.length;c("engine:off")}function h(){D&&c("engine:on");D=!1;X=0;(y[Q++]||b)()}function e(a,
b){return{type:a,exception:b}}function g(){c("block:finish");h()}function l(b,l){var c=a.createElement(b.tagName),f=x.extend(x.extend({},b.defaults),l||{});x.each(b.supported,function(a){n.isString(a)&&null!=f[a]?c[a]=f[a]:n.isObject(a)&&null!=f[a.option]&&a.setter(c,f[a.option])});return c}function m(b,f){var d=l(t.iframe,f);d.onerror=function(){c("block:error",e("iframe","Problem loading "+b))};c("block:start",b);d.src=b.toString();a.body.appendChild(d);g()}function f(a,b){var f=l(t.image,b);f.onerror=
function(){c("block:error",e("image","Problem loading "+a))};c("block:start",a);f.src=a.toString();g()}function s(b,f,d){var m=!1,s=l(t.script,d);s.onerror=function(){c("block:error",e("script","Problem loading "+b));m||g()};s.onload=s.onreadystatechange=function(){var a;if(!(a=m)){a:{switch(s.readyState){case void 0:case "loaded":case "complete":a=!0;break a}a=!1}a=!a}a||(m=!0,g())};c("block:start",b);b&&(s.src=b.toString());f&&(s.text=f);f=a.getElementsByTagName("script")[0];f.parentNode.insertBefore(s,
f)}function q(a){var b=Array.prototype.slice.call(arguments,1);return function(){a.apply(null,b)}}function E(b){return function(){try{if(c("block:start",b),n.isString(b)){var f=x.trim(b).replace(/^\x3c!--/,"").replace(/--\x3e$/,"");a.defaultView?a.defaultView.eval.call(window,f):a.parentWindow?a.parentWindow.execScript(f):c("block:error",e("wait","Could not evaluate wait block ["+f+"]"))}else b()}catch(l){c("block:error",e("wait",l))}finally{g()}}}function v(a){y.push(a);D&&h();return u}function k(a){y.splice(Q+
X++,0,a);return u}var u=this,r=[],B={},D=!1,y=[],Q=0,X=0,t={iframe:{tagName:"iframe",defaults:{frameborder:"0",height:"1px",scrolling:"no",width:"1px"},supported:[{option:"display",setter:function(a,b){a.style.display=b}},"frameborder","id","height","scrolling","width"]},image:{tagName:"img",defaults:{},supported:[{option:"display",setter:function(a,b){a.style.display=b}},"id",{option:"height",setter:function(a,b){a.setAttribute("height",b)}},{option:"width",setter:function(a,b){a.setAttribute("width",
b)}}]},script:{tagName:"script",defaults:{type:"text/javascript"},supported:["async","id","type","charset"]}};u.run=function(){c("engine:on");h()};u.options=function(a){x.extend(B,a);return u};u.option=function(a){return B[a]};u.iframe=function(a,b){return v(q(m,a,b))};u.image=function(a,b){return v(q(f,a,b))};u.script=function(a,b,f){return v(q(s,a,b,f))};u.wait=function(a){return v(E(a))};u.preemptCss=function(a,b){return k(q(s,a,b))};u.preemptIframe=function(a,b){return k(q(s,a,b))};u.preemptImage=
function(a,b){return k(q(s,a,b))};u.preemptScript=function(a,b,f){return k(q(s,a,b,f))};u.preemptWait=function(a){return k(E(a))};u.listen=function(a){r.push(a);(a["engine:listen"]||d).apply(null,[u]);return u}}function Y(a){function d(a){e.push(a);l&&!m&&b()}function c(a){a.run()}function b(){var a=e[g];a&&(g++,a.listen(f).run())}var h,e=[],g=0,l=!1,m=!1,f={"engine:on":function(){m=!0},"engine:off":function(){m=!1;b()}};h=d;this.alwaysQueue=function(){h=d};this.neverQueue=function(){h=c};this.push=
function(a){h(a);return a};this.run=function(){l=!0;b()};this.applyListener=function(a){var b,f;b=g;for(f=e.length;b<f;b++)e[b].listen(a)};this.toString=function(){return"Group[name="+a+"; working="+m+"; running="+l+"]"}}function Z(a,d){return{"engine:listen":function(c){c.listen(new sa(a,d))}}}function $(a){function d(a){return h[a]||(h[a]=new Y(a))}function c(a){return b.addToGroup(a,b.newEngine())}var b=this,h={undefined:new Y(void 0)},e=[];h.undefined.neverQueue();b.addGlobalListener=function(a){e.push(a);
r(h,function(b,c){c.applyListener(a)})};b.addToGroup=function(a,b){r(e,function(a){b.listen(a)});return d(a).push(b)};b.newEngine=function(){return new W(a)};b.group=function(a){return c(a)};b.listen=function(){return c().listen.apply(null,arguments)};b.iframe=function(){return c().iframe.apply(null,arguments)};b.image=function(){return c().image.apply(null,arguments)};b.script=function(){return c().script.apply(null,arguments)};b.wait=function(){return c().wait.apply(null,arguments)};b.run=function(a){d(a).run()};
b.alwaysQueue=function(a){d(a).alwaysQueue()};b.neverQueue=function(a){d(a).neverQueue()};b.setOptions=function(){return c()}}function R(a){function d(a){var b,c;a=a.split(/; ?/);h={};for(var f=0,d=a.length;f<d;f++){c=a[f];b=c.indexOf("=");var e=h,k=c.slice(0,b);b=c.slice(b+1);b=unescape(b);e[k]=b}}function c(b,c,m){if(b){m=m||{};b=[b+"="+U(c||"")];if((c=m.expires)||0===c)n.isNumber(c)&&(c=(new Date(c)).toGMTString()),b.push("expires="+c);(c=m.path)&&b.push("path="+c);(c=m.domain)&&b.push("domain="+
c);!0===m.secure&&b.push("Secure");!0===m.httponly&&b.push("HttpOnly");m=b.join(";");if(m.length<e)a.cookie=m;else throw{name:"CookieTooLongError",message:"Cookie reached 4096 byte limit"};d(a.cookie)}}function b(a,b){c(a,"",t(b||{},{expires:1}))}var h={},e=4096;d(a.cookie||"");return{get:function(a){return h[a]},set:c,remove:b,findEach:function(a,b){for(var c in h)h.hasOwnProperty(c)&&c.match(a)&&b(c,h[c])},clear:function(a){var c=t({},h),d;for(d in c)b(d,a)}}}function aa(a){a=R(a);var d=a.set,c=
a.remove;a.set=function(a,c,e){e=t(e||{},{path:"/"});0===e.expires&&(e.expires=+new Date("1/1/2038"));d(a,c,e)};a.remove=function(a,d){c(a,t(d||{},{path:"/"}))};a.purge=function(){};return a}function ba(a,d){function c(a){a=a.expires;return 0!==a&&a<=+new Date}function b(b,c){a.setItem(b,c)}function h(a,b,e){b={value:b,expires:e};c(b)||d.setItem(a,JSON.stringify(b))}function e(a){a=d.getItem(a);try{return a?JSON.parse(a):void 0}catch(b){}}function g(a){a=e(a);var b;return a&&(a.hasOwnProperty("value")&&
a.hasOwnProperty("expires"))&&!c(a)?(b=a.value,delete a.value,[b,a]):[]}function l(a,b,c,d){for(var e,l=0,g=a.length;l<g;l++)e=a.key(l),!c[e]&&(c[e]=e.match(b))&&d(e)}return{set:function(a,c,d){a&&null!=c&&(d=d||{},(null!=d.expires?h:b)(a,c,d.expires))},get:function(b){return a.getItem(b)||g(b)[0]},findEach:function(b,c){var e={};l(a,b,e,function(b){var d=a.getItem(b);null!=d&&c(b,d)});l(d,b,e,function(a){var b=g(a),d=b[0],b=b[1];null!=d&&c(a,d,b)})},remove:function(b){a.removeItem(b);d.removeItem(b)},
purge:function(){for(var a,b,l=d.length;l--;)a=d.key(l),(b=e(a))&&(b.hasOwnProperty("value")&&b.hasOwnProperty("expires"))&&c(b)&&d.removeItem(a)}}}function K(a,d){var c={};c.set=a.set;c.findEach=function(b,c){var e={};a.findEach(b,function(a,b,d){e[a]=!0;c(a,b,d)});d.findEach(b,function(b,d,m){e[b]||(a.set(b,d,m),c(b,d,m))})};c.get=function(b){var c=a.get(b);void 0===c&&(c=d.get(b),void 0!==c&&a.set(b,c));return c};c.remove=function(b){a.remove(b);d.remove(b)};c.purge=function(){a.purge();d.purge()};
return c}function L(a){function d(a){var b={};if(!n.isString(a))return a;r(a.split("&"),function(a){if(""!==a){var c=a.split("=");a=decodeURIComponent(c[0]);c=c[1]&&decodeURIComponent(c[1].replace(/\+/g," "));(null==b[a]?b[a]=[]:b[a]).push(c)}});return b}function c(a,b){var c=[];r(a,function(a){if(n.isObject(a))return!1;a=null==a||""===a?b:a;(n.isString(a)||n.isNumber(a)||n.isBoolean(a))&&c.push(a)});return c}function b(a){return!n.isArray(a)?[a]:a}function h(a,b){var c=encodeURIComponent(a),d=encodeURIComponent(b);
return c+"="+d}var e=this,g={};t(g,d(a));e.param=function(a){a=g[a]||[""];return 1<a.length?a:a[0]};e.params=function(){return g};e.appendParam=function(a,d){if(a){var e=c(b(d));0<e.length&&(g[a]=(null==g[a]?g[a]=[]:g[a]).concat(e))}return this};e.replaceParam=function(a,d){if(a){var e=c(b(d));0<e.length&&(g[a]=(g[a]=[]).concat(e))}return this};e.appendParams=function(a){r(a,e.appendParam);return this};e.alwaysAppendParam=function(a,d){if(a){var e=c(b(d),"");0<e.length&&(g[a]=(null==g[a]?g[a]=[]:
g[a]).concat(e))}return this};e.alwaysReplaceParam=function(a,d){if(a){var e=c(b(d),"");0<e.length&&(g[a]=(g[a]=[]).concat(e))}return this};e.alwaysAppendParams=function(a){r(a,e.alwaysAppendParam);return this};e.appendPartialQueryString=function(a){a&&e.alwaysAppendParams(d(a));return this};e.deleteParam=function(a){delete g[a]};e.toString=function(){var a=[];r(g,function(b,c){r(c,function(c){a.push(h(b,c))})});return a.join("&")}}function F(a){function d(){var a=k.toString();return g+l+(0<a.length?
"?"+a:"")}var c={},b,h,e,g,l,m,f,s,q,k,v=a.match(ta);a=v[1]||"";h=v[2]||"";e=(v[3]||"").substring(1);b=h+(e?":"+e:"");g=a+(b?"//"+b:"");l=v[4]||"";m=(f=l.match(/^(.+?)?\/([^\/]+)?$/))&&f[1]||"";f=f&&f[2]||"";s=(v[5]||"").substring(1);q=(v[6]||"").substring(1);k=new L(s);t(c,k);t(c,{origin:g,scheme:a,host:b,hostname:h,port:e,path:l,pathname:m,scriptname:f,queryString:k.toString,fragment:function(){return q},tooLong:function(){return 2082<d().length},asString:d});c.toString=d;return c}function ca(a,
d,c){function b(){var b=c.createEvent("Event");b.initEvent(d,!0,!1);try{b.currentTarget=b.target=a}catch(e){bt_log("warning: can not set target for ["+d+"] event: "+e)}return b}function h(){var a=c.createEventObject("Event");a.type=d;a.cancelable=!0;a.bubbleable=!1;return a}function e(c){setTimeout(function(){try{(c.handleEvent||c).call(a,g?b():h())}catch(e){bt_log("error: overriding ["+d+"] event: "+e)}},0)}var g=!!a.addEventListener,l=g?"addEventListener":"attachEvent",m=a[l];a[l]=function(b,c,
h){if(c&&("function"==typeof c||"function"==typeof c.handleEvent))if(b==d||b=="on"+d)e(c);else try{g?m.call(a,b,c,h):m(b,c)}catch(l){bt_log("error: proxying ["+b+"] event: "+l)}}}function da(a,d,c){function b(a){a.hasOwnProperty("enabled")&&(s=a.enabled);a.hasOwnProperty("timestamp")&&(E=a.timestamp,s=!0);a.hasOwnProperty("site")&&(m=a.site);a.hasOwnProperty("referrer")&&(f=a.referrer)}function h(c){c&&b(c);k=[];a.remove(d)}function e(){try{return JSON.stringify({site:m,referrer:f,errors:k})}catch(a){bt_log("problem serializing errors: "+
a.message)}return null}function g(a){var b=n.isObject(a)?t({},a):{};b.type=b.type||"unknown";b.message=b.message||a.toString();b.timestamp=E;return b}function l(){h();k.push(g({type:"runtime",message:"Too many errors"}));a.set(d,e())}if(!a)throw Error("ErrorManager requires a store");var m,f,s=!0,k=[],E=+new Date;c&&b(c);return{configure:b,reset:h,hasErrors:function(){return 0<k.length},tooManyErrors:l,processStoredErrors:function(){var b=a.get(d);if(b)try{var c=JSON.parse(b)||{};m=c.site;f=c.referrer;
n.isArray(c.errors)&&(k=k.concat(c.errors))}catch(e){bt_log("problem reading stored errors: "+e.message)}},push:function(b){bt_log("error: "+JSON.stringify(b));if(s&&b&&!(-1>b.tagId||-1>b.pageId))try{k.push(g(b)),a.set(d,e())}catch(c){if("CookieTooLongError"!=c.name)throw c;l()}},toJSON:e,toArray:function(){return k}}}function ea(a,d){return new function(a,b){function d(a){f.wait(a)}function e(a){function b(){m=k.jQuery;d(a)}l="var $ = BrightTag.$; ";k.jQuery?b():f.script(k.instance.baseUri()+"BrightTag.jquery-1.5.1.js").wait(b)}
var g={},l="",m,f=k.Blab.group(b);g.getJQuery=function(){return m};g.ensureJQuery=function(f){g.ensureJQuery=d;m=a.jQuery;(m?d:e)(f);k.Blab.run(b)};g.functionWithAccess=function(a,b){return new Function(a,l+b)};return g}(a,d)}function fa(a){function d(a,c){c&&c.findEach(a,function(a,c){b.appendParam(a,c)})}function c(a,b){return function(c){bt_log("invalid "+a+" expression: "+b+", exception = "+c)}}var b=this,h=a.window,e=a.parentReferrer,g=a.referrer,l=F(0===a.host.length?"":(/^[a-z0-9+.-]+:\/\/.+/.test(a.host)?
"":"//")+a.host+"/tag");t(b,l);b.toString=l.toString;b.appendParams({site:a.site,referrer:g,docReferrer:a.docReferrer,mode:a.mode,H:V(g||a.document.location.href)});g!==e&&b.appendParam("parentReferrer",e);d(/^btps\..+/,new R(a.document));d(/^btpdb\..+/,a.store);b.appendData=function(a){var c=bt_data(a),c=n.isArray(c)||n.isObject(c)?h.JSON.stringify(c):c;return b.alwaysReplaceParam("_cb_"+("bt_data('"+a+"')"),c)};b.appendJs=function(a){var d=c("client binding expression",a);return b.alwaysReplaceParam("_cb_"+
a,z(a,d))};b.cf=function(a){n.isArray(a)||(a=[a]);var c=b.param("cf");c&&(a=Array(c).concat(a));b.replaceParam("cf",a.join());return b};b.addCf=function(a,d){if(!z(d,c("conditional fire",d,"tags/"+a+"-cf.js")))return!1;var e=b.param("cf");b.replaceParam("cf",e?e+","+a:a);return!0};b.length=function(){return b.toString().length};b.isTooLarge=function(){return 2028<b.length()};var m=b.toString();b.hasConditions=function(){return m!=b.toString()}}function ga(a,d){function c(a,b){r(b,function(b,c){a[a.type+
"."+b]=c});d.push(a)}function b(a,b,c){var d=k.instance.serverURL();r(a,function(a){a.trigger(b,c,d)});d.hasConditions()&&(d.appendParam("mode","v1"),k.Blab.script(d.asString()))}function h(a,d,e){function g(b,d){r(h,function(g){var f,l=g.name;try{f=k[g.dbe];if(!f){var h=k,q=g.dbe,v,u=g.dbe,n=C("event-dbes/"+l+"-page-"+(B||"adhoc")+"-event-"+a);v=m.functionWithAccess(["eventObject","eventData"],"return "+u+";"+n);f=h[q]=v}e.data(l,f.call(b.target,b,d))}catch(r){c({type:"evdbe",message:r.toString(),
pageId:B||-1},{name:l,eventName:a})}})}var f={},h=[],k={},B=(d||{}).pageId;f.data=function(a,b){h.push({name:a,dbe:b});return f};f.applyDataBindings=g;f.handler=function(c){var d,e=l[a];e&&0<e.length&&(d=Array.prototype.slice.call(arguments,1),g(c,d),b(e,c,d))};return f}function e(a){function b(a){0<h.length&&(a.cf(h),r(k,function(b){a.appendData(b)}),r(y,function(b){a.appendJs(b)}))}function d(a,b){return function(c){bt_log("Invalid "+a+" expression: "+b+", exception = "+c)}}var e={},g={},f,l,h=
[],k=[],y=[];e.execute=function(b,d){t(g,d||{});if(n.isFunction(b))l=b;else if(n.isString(b))a:{try{var f=C("events/"+a+"-tag-"+(g.tagId||"adhoc"));l=m.functionWithAccess(["eventObject","eventData"],b+f);break a}catch(h){c({type:"evparse",message:h.toString(),tagId:g.tagId||-1},{eventName:a})}l=void 0}else bt_log("when.execute: unknown action: "+b);return e};e.evaluate=function(a){f=a;return e};e.fire=function(a){h.push(a);return e};e.appendData=function(a){k.push(a);return e};e.appendJs=function(a){y.push(a);
return e};e.trigger=function(e,h,m){var k=d("post-event conditional fire",f);if(!f||z(f,k)){try{l&&l.call(e.target,e,h)}catch(y){c({type:"evwait",message:y.toString(),tagId:g.tagId||-1},{eventName:a})}b(m)}};return e}var g={},l={},m=ea(a,"BrightTag.jQuery"),f=/^direct\//i;g.executeActions=b;g.Binder=h;g.bind=function(a,b,c,d){var e=h(a,d,k.instance);m.ensureJQuery(function(){var a=m.getJQuery(),d=a(b);if(n.isString(b)&&!f.test(c)&&(d.on||d.live))if(d.on)a(document).on(c,b,e.handler);else d.live(c,
e.handler);else d.bind(c.split(f).pop(),e.handler)});return e};g.EventAction=e;g.when=function(a){var b=e(a),c=l[a];c||(c=l[a]=[]);c.push(b);return b};return g}function ua(a,d,c,b){function h(b,d,e){var g=a.group(e).options(d||{});g.wait(function(){c.process(g,b)})}var e=!1,g={};g[b]=!0;return{tag:function(c,d){var f;f=d&&d.group;f=!e&&!f?b:f;h(c,d,f);f&&void 0===g[f]&&(g[f]=!0,e&&a.run(f))},run:function(){a.addGlobalListener(Z(d,c));e=!0;r(g,a.run)}}}function ha(a,d){function c(a){r(n.isArray(a)?
a:[a],function(a){n.isFunction(a)?a():q.write('<script type="text/javascript" src="'+a+'">\x3c/script>')})}function b(a){var b=v.group().options({tagId:-2});r(n.isArray(a)?a:[a],function(a){(n.isFunction(a)?b.wait:b.script)(a)})}function h(a){q.write(a)}function e(a,b){B.tag(a,b)}function g(a){f.writeScript=a?c:b;f.appendContent=a?h:e}function l(a){r(a,function(a){if(a.name){var b=t({},a);delete b.name;delete b.value;u.set(a.name,a.value,b)}})}function m(b){p.hasErrors()&&(b.appendParam("errors",
p.toJSON()),b.tooLong()&&(b.deleteParam("errors"),p.tooManyErrors(),b.appendParam("errors",p.toJSON())));p.reset({site:a.site,referrer:a.referrer||q.location.href})}var f=this,s=a.data||{},q=a.document||{},E=a.window||{},v=a.blab||k.Blab,p=a.errorManager,u=a.store,w=ia(q),B=a.asyncTagManager||ua(v,q,w,"domready"),D=ea(window,"jquery");f.referrer=a.referrer;f.parentReferrer=a.parentReferrer;f.docReferrer=a.docReferrer;f.site=a.site;f.host=a.host;f.loadOnly=!!a.loadOnly;p&&v.addGlobalListener(new ja(p));
v.run("serializer");f.load=function(){var a=Array.prototype.slice.call(arguments,0);r(a,function(a){n.isFunction(a)?v.addToGroup("serializer",v.newEngine().wait(function(){a(f)})):n.isObject(a)&&a.src?f.library(a.src,a.options):n.isString(a)&&f.library(a)})};f.library=function(a,b){v.addToGroup("serializer",v.newEngine().options(b||{}).script(a))};g(A(a.mode,"sync"));f.domReady=function(){A(a.mode,"sync")&&g(!1);B.run()};f.parameter=function(a){return window.bt_parameter(a,q)};f.meta=function(a){return window.bt_meta(a,
q)};f.cookie=function(a){return window.bt_cookie(a,q)};f.data=function(a,b){if(void 0!==b)return s[a]=b;b=s[a];return null==b?"":b};f.dbe=function(a,b,c){function d(b){p&&p.push({type:"dbe",message:b.toString(),"dbe.name":a,pageId:(c||{}).pageId||-1})}null==s[a]&&f.data(a,z(b,d,"page-dbes/"+a+"-page-"+(c&&c.pageId||"adhoc")))};f.errors=function(a){p.configure(a)};f.store=u?l:function(){};f.serverURL=function(){return new fa(a)};f.defaultBaseUri=function(){return("https:"==q.location.protocol?"https:":
"http:")+"//s.btstatic.com/"};f.baseUri=function(){var a=/\btag(\.[^.]+|-n)?\.js(#.*)?$/;return d&&d.src&&d.src.replace(a,"")||f.defaultBaseUri()};f.primary=function(){function a(){var b=f.serverURL();p&&(p.processStoredErrors(),m(b));return b.toString()}var b=[];E.JSON?b.push(a()):(b.push(f.baseUri()+"json2.js"),b.push(function(){f.writeScript(a())}));f.writeScript(b)};f.secondary=function(a){var b=f.serverURL(),c=b.toString();a(b);b.toString()!=c&&(b.appendParam("mode","v1"),p&&m(b),b.isTooLarge()?
f.post(b):f.writeScript(b.toString()))};f.post=function(a){D.ensureJQuery(function(){D.getJQuery().ajax({url:"//"+a.host+a.path,type:"POST",dataType:"text",success:bt_eval,data:a.queryString(),xhrFields:{withCredentials:!0}})})}}function G(){var a={},d={};return{on:function(c,b){var d=a[c];d||(d=a[c]=[]);d.push(b)},once:function(a,b){var h=d[a];h||(h=d[a]=[]);h.push(b)},emit:function(c){function b(a){a.apply(this,h)}var h=Array.prototype.slice.call(arguments,1);r(a[c],b);r(d[c],b);d[c]=[]}}}function va(a){function d(a){return null!=
h[a]}function c(a,b){void 0!==b&&(h[a]=b);var c=h[a];return null==c?"":c}var b,h=t({},a);return b=t({dbe:function(a,g,h){if(!d(a)&&(g=z(g,function(c){b.emit("error",c,a,h)}),null!=g))return c(a,g)},data:c,hasData:d},G())}function wa(a){var d,c={},b=["eventObject","eventData","$","bt_data"];return d=t({dbe:function(a,e){try{c[a]=new Function(b,"return "+e+";")}catch(g){g.type="evdbe",d.emit("error",g,a)}return d},trigger:function(b,e,g){var l=b.target,m=[b,e,g,a.data];r(c,function(b,c){try{a.data(b,
c.apply(l,m))}catch(e){e.type="evdbe",d.emit("error",e,b)}})}},G())}function xa(a){function d(a,c){c.type=a;b.emit("error",c)}function c(a){h.push(a);return b}var b,h=[],e=function(){return!0},g=["eventObject","eventData","$","bt_data"];return b=t({fire:function(a){return c(function(b){b.fire(a)})},appendData:function(a){return c(function(b){b.appendData(a)})},appendJs:function(a){return c(function(b){b.appendJs(a)})},execute:function(e){function h(b,c,e,g){try{q.call(c.target,c,e,g,a.data)}catch(f){d("evwait",
f)}}var f;if(n.isString(e))a:{try{f=new Function(g,e);break a}catch(k){d("evparse",k)}f=void 0}else f=e;var q=f;return q?c(h):b},evaluate:function(c){var d=new Function(g,"return "+c);e=function(b,c,e,g){return d.call(c.target,c,e,g,a.data)};return b},trigger:function(a,b,c,d){e(a,b,c,d)&&r(h,function(e){e(a,b,c,d)})}},G())}function ya(a){var d=/^direct\//i,c=!1;return{bind:function(a,c,e){function g(a){var b=Array.prototype.slice.call(arguments,1);e(a,b,k.jQuery||window.jQuery)}var l=k.jQuery||window.jQuery,
m=l(a),f=d.test(c);if(!f&&m.on)l(document).on(c,a,g);else!f&&m.live?m.live(c,g):m.bind(c.split(d).pop(),g)},newBinder:function(a){return wa(a)},newHandler:function(a){return xa(a)},ensureLibrary:function(b){k.jQuery||window.jQuery?b():(c||(c=!0,a.run()),a.wait(b))}}}function za(a,d){function c(b,c,d,k){var f=S(a);r(b,function(a){a.trigger(f,c,d,k)});h.emit("triggered",f)}var b={},h=G();return t(h,{bind:function(e,g,l,k){function f(a,d,g){s.trigger(a,d,g);c(b[e],a,d,g)}var s=d.newBinder(a,e);s.on("error",
function(a,b){h.emit("error",a,{name:b,eventName:e},k)});d.ensureLibrary(function(){d.bind(g,l,f)});return s},handle:function(c,g){var l=d.newHandler(a);l.on("error",function(a){h.emit("error",a,{eventName:c},g)});b[c]=b[c]||[];b[c].push(l);return l}})}function ia(a){function d(a,b){a.src?b.preemptScript(a.src,a.innerHTML):a.innerHTML&&b.preemptWait(a.innerHTML)}function c(a,b){for(var g=a.childNodes||[],l=0,k=g.length;l<k;l++){var f=g[l];"SCRIPT"==f.tagName?d(f,b):c(f,b)}}var b=a.createElement("div");
return{process:function(h,e){if(0!==e.length){b.innerHTML="<br/>"+e;for(var g=b.childNodes||[],l=1,k=g.length;l<k;l++){var f=g[l];if("SCRIPT"==f.tagName)d(f,h);else{try{a.body.appendChild(f.cloneNode(!0))}catch(s){bt_log("error appending content to body: "+s)}c(f,h)}}}}}}function Aa(a){function d(b){a.write(b);return c}var c={tag:d,script:function(a){return d('<script type="text/javascript" src="'+a+'">\x3c/script>')},wait:function(a){a();return c}};return c}function Ba(a,d){function c(c,d){var h=
c&&c.group;d(a.group(h).options(c||{}));h&&void 0===b[h]&&(b[h]=!0,a.run(h))}var b={},h={tag:function(a,b){c(b,function(b){b.wait(function(){d.process(b,a)})});return h},script:a.script,wait:a.wait};return h}function Ca(a,d){var c=d;return{tag:function(a,d){return c.tag(a,d)},script:function(a){return c.script(a)},wait:function(a){return c.wait(a)},sync:function(){c=a},async:function(){c=d}}}function ja(a){return{dbe:function(d,c,b){a.push({type:"dbe",message:d.toString(),"dbe.name":c,pageId:(b||
{}).pageId||-1})},events:function(d,c,b){var h=d.type,e="evdbe"===h?"pageId":"tagId",g={type:h,message:d.toString()};r(c,function(a,b){g[h+"."+a]=b});g[e]=(b||{})[e]||-1;a.push(g)},"block:error":function(d,c){var b,h,e;c&&(b=c.type,h=c.exception||c,e=d.option("tagId")||-1,a.push({type:b,message:h.toString(),tagId:e}))}}}function Da(a){function d(){var b=new F(a.src),c={},d=b.fragment();c.staticHost=b.host+b.pathname;d&&r((new L(d)).params(),function(a,b){c[a]=1<b.length?b:b[0]});return c}function c(){var b=
w(a.innerHTML);return 0===b.length?{}:z("(\n"+b+"\n)",function(a){bt_log("json configuration error: "+a)})}return{isTagjs:function(){return/\/tag(\.[^.]+|-n)?\.js(\?.*)?(#.*)?$/.test(a.src)},toJSON:function(){return t(d(),c())},script:a}}function Ea(a){return{isTagjs:function(){return!0},toJSON:function(){return a||{}},script:{src:void 0}}}function ka(){function a(){return d}var d;return d={fire:a,appendData:a,appendJs:a,execute:a,when:a}}function S(a){function d(a,b){for(var c in a)if(b(c,a[c]))return!0;
return!1}var c,b=[],h={};return c={toJSON:function(){var a=0<b.length?{cf:b.join()}:{};return t(a,h)},fire:function(a){n.isArray(a)||(a=[a]);a=T(a,function(a){return null!=a&&""!==a});b=b.concat(a);return c},appendData:function(b){h["_cb_bt_data('"+b+"')"]=a.data(b);return c},appendJs:function(a){h["_cb_"+a]=z(a);return c},execute:function(a){a();return c},when:function(b){var d;try{return d=new Function(["bt_data"],"return "+k.trim(b)),d(a.data)?c:ka()}catch(h){bt_log("conditional evaluation error: ["+
h.toString()+"] while evaluating ["+b+"]")}return ka()},hasConditions:function(){return 0<b.length||d(h,function(a,b){return null!=b})}}}function Fa(a,d,c,b,h,e){function g(){u=!0;d.async();n.mode=x.filter(n.mode,function(a){return"sync"!==a})}function l(a){if(null==a||a.hasConditions())b.reset({site:n.site,referrer:n.referrer||window.location.href})}function m(a){var c=F("//"+p+"/tag").appendParams({site:n.site,mode:n.mode,H:n.H,referrer:n.referrer,docReferrer:n.docReferrer}).appendParam("mode",
"v2").alwaysAppendParams(a);h.findEach(RegExp("^btp(s|db)\\."+n.site+"\\..+"),function(a,b){c.appendParam(a,b)});return c.appendParams({errors:b.hasErrors()?b.toJSON():null})}function f(a){if(null==a)return m();if(a.hasConditions())return m(a.toJSON())}function s(a){var b=f(a);b?(l(a),b.tooLong()?t.ensure("jQuery",function(){k.jQuery.ajax({url:b.origin+b.path,type:"POST",data:b.queryString(),xhrFields:{withCredentials:!0}})}):d.script(b.toString())):l(a)}var q,n=x.extend({},e),p=n.host||"",r=G(),
u=!1,t=new Ga(d,n);c.on("triggered",s);return q=x.extend({config:n,diagnostic:function(a){a&&(n.diagnostic=a,q.emit("diagnostic",a))},errors:function(a){b.configure({timestamp:a})},dbe:function(b,c,d){var e=a.dbe(b,c,d);null!=e&&q.emit("dbe",b,c,e,d)},data:a.data,dataref:function(a){return null==a?"":'BrightTag.site("'+n.site+'").data("'+a.replace(/"/g,"\\x22")+'")'},store:function(a){x.each(a,function(a){if(a.name){var b=x.extend({},a);delete b.name;delete b.value;h.set(a.name,a.value,b)}})},tag:function(a,
b){q.emit("tag",a,b);return d.tag(a,b)},script:d.script,wait:d.wait,events:{bind:function(a,b,d,e){q.emit("event-binding",a,b,d,e);return c.bind(a,b,d,e)},on:c.handle},when:function(b,c){S(a).when(b).execute(function(){c(q)});return q},domready:function(a){if(null==a)g();else r.once("domready",a);u&&r.emit("domready",q)},primary:function(){t.ensure("JSON",function(){b.processStoredErrors();s()})},secondary:function(b){var c=S(a);b(c);s(c)}},G())}function Ha(a){a=F(a.staticHost+"/BrightTag.jquery-1.5.1.js");
return ya((new W(document)).script(a))}function Ia(a,d,c){var b=Aa(document);a=Ba(a,d);b=Ca(b,a);x.contains(c.mode,"sync")&&b.sync();return b}function Ja(a){var d,c,b,h,e,g,l,m;if((l=a.site)&&!M[l])return d=va(a.data),c=new $(document),m=ia(document),b=Ia(c,m,a),e=za(d,Ha(a)),g=da(H?K(H,N):N,"__bterr_"+l,{site:l,referrer:a.referrer,enabled:!1}),h=ja(g),d.on("error",h.dbe),e.on("error",h.events),c.addGlobalListener(h),k.Events.onDOMReady(function(){c.addGlobalListener(Z(document,m))}),a=M[l]=Fa(d,
b,e,g,H?K(N,H):N,a)}function la(a,d,c){try{var b,h,e=a.toJSON();if(!(k.instance&&k.instance.site===e.site)){var g=t({host:"s.thebrighttag.com",staticHost:"s.btstatic.com",H:V(e.referrer||d.location.href),referrer:e.referrer||d.location.href,docReferrer:d.document.referrer},e);b=Ja(g);if(e.site&&!k.instance&&!ma&&!A(e.mode,"v2")&&!A(e.mode,"v2b")){var l=a.script,m=na();k.EventBinding=ga(m.window,m.errorManager);k.instance=new ha(t(m,e),l);h=k.instance;b.config.loadOnly=!0}else if(b){var f=b.config,
n;var q=b.config.mode;n=A(q,"v2")?q:!q?"v2":["v2"].concat(q);f.mode=n}c&&c(b,h);return b}}catch(p){bt_log("error configuring site ["+a.script.src+"]: "+p)}}function Ka(a){var d,c,b=[];if(n.isArray(a))b=a.slice(0);else{d=0;for(c=a.length;d<c;d++)b.push(a[d])}return b}function La(a){if(!ma&&!A(a.config.mode,"v2")&&!A(a.config.mode,"v2b"))k.Events.onDOMReady(function(d){a.domready()});else a.config.loadOnly||(k.Events.onDOMReady(function(d){a.domready()}),a.primary())}function na(){var a,d=aa(document),
c=d,b=d;try{window.localStorage&&window.sessionStorage&&(a=ba(sessionStorage,localStorage),a.purge(),c=K(d,a),b=K(a,d))}catch(h){bt_log("Unable to access DOM storage: "+h)}return{id:Math.random(),loadOnly:!1,window:window,document:document,host:"s.thebrighttag.com",parentReferrer:top!=self&&self.window?self.window.location.href:null,docReferrer:document.referrer,data:{},store:c,errorManager:da(b,"__bterr")}}if(k)return k;var ma=!1;k={};var n={isString:function(a){return p(a,"String")},isArray:function(a){return p(a,
"Array")},isNumber:function(a){return p(a,"Number")},isBoolean:function(a){return p(a,"Boolean")},isFunction:function(a){return p(a,"Function")},isObject:function(a){return null===a||void 0===a?!1:p(a,"Object")}},z=bt_eval,P=Array.prototype.forEach?Array.prototype.forEach:I,qa=Array.prototype.filter?Array.prototype.filter:pa,Ma=Array.prototype.map?Array.prototype.map:ra,x={contains:A,each:r,extend:t,filter:T,map:function(a,d,c){if(a)return Ma.call(O(a)?a:[a],d,c)},trim:w},sa=function(){function a(){}
function d(a,b,c){try{a[b]=c}catch(d){bt_log("warning: could not assign value to 'document."+b+"': "+d)}}var c,b=[],h=function(a){c.push(a)};return function(e,g){var k;this["block:start"]=function(){b.push([c,e.write,e.writeln,e.open,e.close]);c=[];d(e,"write",h);d(e,"writeln",h);d(e,"open",a);d(e,"close",a)};this["block:finish"]=function(){try{g.process(k,c.join(""))}finally{var a=b.pop();c=a[0];d(e,"write",a[1]);d(e,"writeln",a[2]);d(e,"open",a[3]);d(e,"close",a[4])}};this["engine:listen"]=function(a){k=
a}}}(),ta=/^(?:([^:\/]+:)?\/\/)?([^:\/?#]+)?(:[0-9]+)?([^?#]*)(\?[^#]*)?(#.*)?$/,Ga=function(){function a(a,b){this.tagMgrRouter=a;this.config=b}var d={JSON:{object:"JSON",path:"/json2.js"},jQuery:{object:"BrightTag.jQuery",path:"/BrightTag.jquery-1.5.1.js"}};a.prototype={ensure:function(a,b){var h=d[a];if(h){var e=h.object.split("."),g=window,k=e.length-1,m,f;for(f=0;f<k;f++){m=e[f];g=g[m];if(!g)throw"DependencyManager: Could not find key "+m;g=g[e[f]]}g?b():this.tagMgrRouter.script(F(this.config.staticHost+
h.path)).wait(b)}}};return a}(),M={},H,N=aa(document);try{window.localStorage&&window.sessionStorage&&(H=ba(sessionStorage,localStorage),H.purge())}catch(Na){bt_log("Unable to access DOM storage: "+Na)}k.Escaper={cookie:U,javascript:function(a){return!n.isString(a)?a:a.replace(/\\/g,"\\\\").replace(/'/g,"\\x27").replace(/"/g,"\\x22").replace(/\n/g,"\\n").replace(/\r/g,"\\r")}};k.Random={integer:function(a){return Math.floor(Math.random()*(a||1E8))}};k.pushIfDefined=function(a,d,c){a&&(a.constructor==
Array&&null!=d)&&a.push(c||d)};k.ServerURL=fa;k.Main=function(a){function d(b){(b=(new F(b.src)).fragment())&&r((new L(b)).params(),function(b,c){a[b]=c[0]})}function c(b){function c(a){bt_log("configuration error: "+a)}b=w(b.innerHTML);0!==b.length&&t(a,z("(\n"+b+"\n)",c,"site-config"))}var b,h=function(){var b,c,d=/\/tag(\.[^.]+|-n)?\.js(#.*)?$/,e=a.document.getElementsByTagName("script");for(b=e.length-1;-1<b;b--)if(c=e[b],d.test(c.src))return c}();h&&(d(h),c(h));if(null!=a.site){k.Events.enablePageReadyOverrides();
try{b=new ha(a,h),k.Events.onDOMReady(b.domReady),b.loadOnly||b.primary()}catch(e){bt_log("execution error: "+e)}return b}};k.CookieSync={pushImage:function(a){(new Image).src=a;throw"CookieSync.pushImage no longer supported ["+a+"]";},pushIframe:function(a){throw"CookieSync.pushIframe no longer supported ["+a+"]";}};k.EventBindingManager=ga;k.defaultConfig=na;k.eval=z;k.Types=n;k.trim=x.trim;k.Util=x;k.each=x.each;k.extend=x.extend;k.HTTP={Cookie:R,QueryString:L,URL:F};k.Blab=new $(document);k.Events=
new function(a,d){function c(){}function b(a,b,c){a[r](u+b,c,!1)}function h(a,b,c){a[t](u+b,c,!1)}function e(){var a=d.readyState;if("loading"==a)return!1;if("complete"==a)return!0;a:{try{w("left")}catch(b){a=!1;break a}a=!0}return a}function g(a,b,c){var d=this;setTimeout(function(){a()?b.call(d):g(a,b,c)},c)}function k(){k=c;n&&ca(d,q,d)}function m(){k();ca(a,p,d)}var f=this,n=!!a.addEventListener,q="DOMContentLoaded",p="load",r=n?"addEventListener":"attachEvent",t=n?"removeEventListener":"detachEvent",
u=n?"":"on",w=d.documentElement.doScroll||function(){throw"No doScroll";};f.listen=b;f.unlisten=h;f.onDOMReady=function(c){e()?c.call(this):d.addEventListener?(b(d,q,c),b(d,q,function(){h(a,p,c)}),b(a,p,c)):g(e,c,1)};f.enablePageReadyOverrides=function(){f.enablePageReadyOverrides=c;e()?m():(n&&b(d,q,k),b(a,p,m))}}(window,document);k.Events.enablePageReadyOverrides();k.Content=new function(a){a=a||k.Blab;return{iframe:a.iframe,image:a.image,link:a.link,script:a.script}}(k.Blab);k.site=function(a,
d){try{var c=M[a];c&&d&&d(c);return c}catch(b){bt_log("error while executing site configuration ["+a+"]: "+b)}};k.configureNewSites=function(a,d){r(Ka(a.document.getElementsByTagName("script")),function(c){c=Da(c);c.isTagjs()&&la(c,a,d)})};k.configureSite=function(a,d,c){return la(Ea(a),d,c)};k.configuredSites=function(){var a=[];x.each(M,function(d,c){a.push(c)});return a};k.initializeSite=function(a,d){d&&(k.Events.onDOMReady(d.domReady),d.loadOnly||d.primary());a&&La(a)};return k}(window.BrightTag);
(function(k){k.configureNewSites(window,k.initializeSite);null==k.instance&&setTimeout(function(){null==k.instance&&k.configureNewSites(window,k.initializeSite)},0)})(BrightTag);var _bt_url_prefix,_bt_referrer,_bt_site,_bt_mode;function btServe(k){var p=BrightTag,w={referrer:_bt_referrer,site:_bt_site,mode:_bt_mode};null!=_bt_url_prefix&&(w.host=_bt_url_prefix);p.configureSite(p.extend(w,k),window,p.initializeSite)};
