/*
CSS Browser Selector v0.3.5 (Feb 05, 2010) remixed by Nobleskine with no-js/js handling
Rafael Lima (http://rafael.adm.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/
Contributors: http://rafael.adm.br/css_browser_selector#contributors
*/
function css_browser_selector(u){var ua = u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1;},g='gecko',w='webkit',s='safari',o='opera',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?'mobile':is('iphone')?'iphone':is('ipod')?'ipod':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win':is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'']; c = b.join(' '); h.className=h.className.replace(/\bno-js\b/,'')+'js '+c; return c;}; css_browser_selector(navigator.userAgent);

/* Modernizr custom build of 1.7: rgba | touch */
window.Modernizr=function(a,b,c){function G(){}function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return!!E(d,b)}function E(a,b){for(var d in a)if(k[a[d]]!==c&&(!b||b(a[d],j)))return!0}function D(a,b){return(""+a).indexOf(b)!==-1}function C(a,b){return typeof a===b}function B(a,b){return A(o.join(a+";")+(b||""))}function A(a){k.cssText=a}var d="1.7",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v,w=function(a){var c=b.createElement("style"),d=b.createElement("div"),e;c.textContent=a+"{#modernizr{height:3px}}",h.appendChild(c),d.id="modernizr",g.appendChild(d),e=d.offsetHeight===3,c.parentNode.removeChild(c),d.parentNode.removeChild(d);return!!e},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div");var f=(d="on"+d)in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y=({}).hasOwnProperty,z;C(y,c)||C(y.call,c)?z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)}:z=function(a,b){return y.call(a,b)},r.touch=function(){return"ontouchstart"in a||w("@media ("+o.join("touch-enabled),(")+"modernizr)")},r.rgba=function(){A("background-color:rgba(150,255,150,.5)");return D(k.backgroundColor,"rgba")};for(var H in r)z(r,H)&&(v=H.toLowerCase(),e[v]=r[H](),u.push((e[v]?"":"no-")+v));e.input||G(),e.crosswindowmessaging=e.postmessage,e.historymanagement=e.history,e.addTest=function(a,b){a=a.toLowerCase();if(!e[a]){b=!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b;return e}},A(""),j=l=null,e._enableHTML5=f,e._version=d,g.className=g.className.replace(/\bno-js\b/,"")+" js "+u.join(" ");return e}(this,this.document)

/*! $script.js v1.2
 https://github.com/polvero/script.js
 Copyright: @ded & @fat - Dustin Diaz, Jacob Thornton 2011
 License: CC Attribution: http://creativecommons.org/licenses/by/3.0/
*/
!function(a,b,c){function u(a){h.test(b[n])?c(function(){u(a)},50):a()}var d=b.getElementsByTagName("script")[0],e={},f={},g={},h=/in/,i={},j="string",k=!1,l="push",m="DOMContentLoaded",n="readyState",o="addEventListener",p="onreadystatechange",q=function(){return Array.every||function(a,b){for(var c=0,d=a.length;c<d;++c)if(!b(a[c],c,a))return 0;return 1}}(),r=function(a,b){q(a,function(c,d){return!b(c,d,a)})};!b[n]&&b[o]&&(b[o](m,function s(){b.removeEventListener(m,s,k),b[n]="complete"},k),b[n]="loading");var t=function(a,j,k){a=a[l]?a:[a];var m=j.call,o=m?j:k,s=m?a.join(""):j,u=a.length,v=function(a){return a.call?a():e[a]},w=function(){if(!--u){e[s]=1,o&&o();for(var a in g)q(a.split("|"),v)&&!r(g[a],v)&&(g[a]=[])}};if(!f[s]){c(function(){r(a,function(a){if(!i[a]){i[a]=f[s]=1;var c=b.createElement("script"),e=0;c.onload=c[p]=function(){c[n]&&!!h.test(c[n])||e||(c.onload=c[p]=null,e=1,w())},c.async=1,c.src=a,d.parentNode.insertBefore(c,d)}})},0);return t}};t.ready=function(a,b,c){a=a[l]?a:[a];var d=[];!r(a,function(a){e[a]||d[l](a)})&&q(a,function(a){return e[a]})?b():!function(a){g[a]=g[a]||[],g[a][l](b),c&&c(d)}(a.join("|"));return t},a.$script=t}(this,document,setTimeout)



