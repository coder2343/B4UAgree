define(["comp/graphicComp","core/utils/objectUtils","core/logger"],function(t,e,n){function o(e){t.call(this,e)}return o.prototype=new t,o.prototype.internalDraw=function(){t.prototype.internalDraw.call(this),"html"in this.item&&(this.div.innerHTML=this.item.html)},o.prototype.getDefaultProperty=function(){return o.defaultProperty},o.prototype.getInputSchema=function(){return o.inputSchema},o.inputSchema=e.copyObject(t.inputSchema),o.inputSchema.html=null,o.defaultProperty="html",n.log("html component loaded"),o});