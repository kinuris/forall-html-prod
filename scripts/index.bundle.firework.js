(()=>{"use strict";var t={679:(t,n,e)=>{e.d(n,{Z:()=>o});var i=e(645),r=e.n(i)()((function(t){return t[1]}));r.push([t.id,"*{padding:0;margin:0}body{height:100vh;width:100vw;overflow:hidden}body h1{position:absolute;width:100vw;text-align:center;margin-top:1em;font-family:Arial,Helvetica,sans-serif;font-size:3em;top:0;color:#fff;user-select:none}@media screen and (min-width: 1200px){body h1{font-size:5em}}",""]);const o=r},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,i){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(r[s]=!0)}for(var a=0;a<t.length;a++){var h=[].concat(t[a]);i&&r[h[0]]||(e&&(h[2]?h[2]="".concat(e," and ").concat(h[2]):h[2]=e),n.push(h))}},n}},379:t=>{var n=[];function e(t){for(var e=-1,i=0;i<n.length;i++)if(n[i].identifier===t){e=i;break}return e}function i(t,i){for(var o={},s=[],a=0;a<t.length;a++){var h=t[a],c=i.base?h[0]+i.base:h[0],d=o[c]||0,l="".concat(c," ").concat(d);o[c]=d+1;var u=e(l),f={css:h[1],media:h[2],sourceMap:h[3]};-1!==u?(n[u].references++,n[u].updater(f)):n.push({identifier:l,updater:r(f,i),references:1}),s.push(l)}return s}function r(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e.update(t=n)}else e.remove()}}t.exports=function(t,r){var o=i(t=t||[],r=r||{});return function(t){t=t||[];for(var s=0;s<o.length;s++){var a=e(o[s]);n[a].references--}for(var h=i(t,r),c=0;c<o.length;c++){var d=e(o[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=h}}},569:t=>{var n={};t.exports=function(t,e){var i=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var i=e.css,r=e.media,o=e.sourceMap;r?t.setAttribute("media",r):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(i,t)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(i){var r=n[i];if(void 0!==r)return r.exports;var o=n[i]={id:i,exports:{}};return t[i](o,o.exports,e),o.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t=e(379),n=e.n(t),i=e(795),r=e.n(i),o=e(569),s=e.n(o),a=e(565),h=e.n(a),c=e(216),d=e.n(c),l=e(589),u=e.n(l),f=e(679),p={};p.styleTagTransform=u(),p.setAttributes=h(),p.insert=s().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=d(),n()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals;var w,y=function(){function t(t,n){this.x=t,this.y=n}return t.prototype.flip=function(){var t;t=[this.y,this.x],this.x=t[0],this.y=t[1]},t.prototype.distance=function(t){var n=this.x-t.x,e=this.y-t.y;return Math.hypot(n,e)},t.prototype.component=function(n){var e=this.distance(n);return new t((this.x-n.x)/e,(this.y-n.y)/e)},t}(),v=(w=function(t,n){return(w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}w(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),m=function(t){function n(n,e,i){var r=t.call(this,n.x,n.y)||this;return r.dimensions=new y(e,i),r}return v(n,t),n.prototype.setDimensions=function(t,n){this.dimensions.x=t,this.dimensions.y=n},n}(y),g=function(){function t(t,n,e,i){this.r=t,this.g=n,this.b=e,this.a=i}return t.genRandColor=function(n){var e=255*Math.random(),i=255*Math.random(),r=255*Math.random();return n&&(e=(e+n.r)/2,r=(r+n.b)/2,i=(i+n.g)/2),new t(e,i,r,1)},t.prototype.mix=function(t){return this.r=(this.r+t.r)/2,this.b=(this.b+t.b)/2,this.g=(this.g+t.g)/2,this},t.prototype.toString=function(){return"rgba("+this.r+", "+this.g+", "+this.b+", "+this.a+")"},t}(),x=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),b=function(t){function n(n,e,i,r,o,s){void 0===i&&(i=new y(0,0)),void 0===r&&(r=new y(0,0)),void 0===o&&(o=0),void 0===s&&(s=new g(255,255,255,1));var a=t.call(this,e.x,e.y)||this;return a.steps=3,a.tick=0,a.lifetime=0,a.radiusThreshold=0,a.changedY=!1,a.changedX=!1,a.hasTrail=!1,a.radiusOriginal=a.radius=n,a.color=s,a.acceleration=i,a.velocity=r,a.bounce=o,a}return x(n,t),n.prototype.update=function(t){if(!(this.radius<=this.radiusThreshold)){if(this.lifetime>0&&(this.tick++,this.radius=this.radius*((this.lifetime-this.tick)/this.lifetime)),t&&this.checkCollisions(t),this.hasTrail&&!this.smoothTrails){this.trail.length>this.trailMaxLength&&this.trail.shift();var e=new n(this.radius,new y(this.x,this.y));e.setLifetime(this.trailLifetime),e.setColor(this.color),this.trail.push(e);for(var i=0;i<this.trail.length;i++)this.trail[i].update()}this.collidedY?this.collidedY&&!this.changedY&&(this.velocity.y=-this.velocity.y*(this.bounce<=0?1:this.bounce),this.applySteps(),this.changedY=!0):this.changedY=!1,this.collidedX?this.collidedX&&!this.changedX&&(this.velocity.x=-this.velocity.x,this.applySteps(),this.changedX=!0):this.changedX=!1,this.velocity.x+=this.acceleration.x,this.velocity.y+=this.acceleration.y,this.x+=this.velocity.x,this.y+=this.velocity.y}},n.prototype.draw=function(t){if(!(this.radius<=this.radiusThreshold)&&(t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),t.fillStyle=this.color.toString(),t.fill(),this.hasTrail)){for(var e=0;e<this.trail.length;e++)console.log("drew "),this.trail[e].draw(t);if(this.smoothTrails){this.trail.length>this.trailMaxLength&&this.trail.shift();var i=new n(this.radius,new y(this.x,this.y));for(i.setLifetime(this.trailLifetime),i.setColor(this.color),this.trail.push(i),e=0;e<this.trail.length;e++)this.trail[e].update()}}},n.prototype.checkCollisions=function(t){this.radius<=this.radiusThreshold||(this.y+this.radius>t.dimensions.y?this.collidedY=!0:this.collidedY=!1,this.x+this.radius>t.dimensions.x||this.x-this.radius<t.x?this.collidedX=!0:this.collidedX=!1)},n.prototype.applySteps=function(){this.steps<1||(this.radius-=this.radiusOriginal/this.steps)},n.prototype.enableTrails=function(t,n,e){return void 0===e&&(e=!1),this.trail=[],this.hasTrail=!0,this.trailLifetime=t,this.trailMaxLength=n,this.smoothTrails=e,this},n.prototype.setRadiusThreshold=function(t){return this.radiusThreshold=t,this},n.prototype.setSteps=function(t){if(t>127)throw new Error("STEP COUNT TOO HIGH!");return this.steps=Math.ceil(t),this},n.prototype.setLifetime=function(t){return this.lifetime=40*t,this},n.prototype.setColor=function(t){this.color=t},n.prototype.getSteps=function(){return this.steps},n.prototype.getXAccel=function(){return this.acceleration.x},n.prototype.getYAccel=function(){return this.acceleration.y},n.prototype.getXVel=function(){return this.velocity.x},n.prototype.getYVel=function(){return this.velocity.y},n}(y),M=function(){function t(){}return t.genFireworkAt=function(t){for(var n=[],e=1;e<8;e++)for(var i=20*Math.random()+20,r=g.genRandColor(new g(255,255,255,1)),o=1800*Math.random(),s=0;s<i;s++){var a=Math.random()*Math.PI*2,h=Math.cos(a)*o+t.x,c=Math.sin(a)*o+t.y,d=new y(h,c),l=t.component(d),u=l.x,f=l.y,p=d.distance(t),w=10*Math.random()+2,v=new y(0,0),m=new y(u*(p/250),f*(p/250));n.push(new b(w,t,v,m,.7,r).setSteps(1).setLifetime(10).setRadiusThreshold(.2))}return n},t.genFireworkWithin=function(t){var n=t.x+Math.random()*t.dimensions.x,e=t.y+Math.random()*t.dimensions.y;return this.genFireworkAt(new y(n,e))},t}(),S=function(){function t(){}return t.genStars=function(t,n){if(n<1)throw new Error("INVALID COUNT");for(var e=[],i=0;i<n;i++){var r=Math.random(),o=t.x+Math.random()*t.dimensions.x,s=t.y+Math.random()*t.dimensions.y,a=new b(r,new y(o,s));e.push(a)}return e},t.genShootingStar=function(t){for(var n=[],e=50*Math.random()+100,i=50*Math.random()+100,r=new m(new y(Math.random()*(t.dimensions.x-e),Math.random()*(t.dimensions.y-i)),e,i),o=0;o<Math.ceil(3*Math.random())+1;o++){var s=r.x+Math.random()*r.dimensions.x,a=r.y+Math.random()*r.dimensions.y,h=1+Math.random();n.push(new b(3,new y(s,a),new y(0,0),new y(13*h,5*h)).enableTrails(1,10,!0).setSteps(1).setLifetime(5))}return n},t}(),T=document.getElementById("cnv"),C=T.getContext("2d");window.addEventListener("load",(function(){C.canvas.width=window.innerWidth,C.canvas.height=window.innerHeight})),window.addEventListener("resize",(function(){C.canvas.width=window.innerWidth,C.canvas.height=window.innerHeight}));var I,L,O=document.getElementById("header"),E=!0,W=[];window.addEventListener("load",(function(t){W.push.apply(W,S.genStars(new m(new y(.01*window.innerWidth,20),.99*window.innerWidth,window.innerHeight),500)),I=setInterval((function(){W.push.apply(W,S.genShootingStar(new m(new y(.01*window.innerWidth,20),.9*window.innerWidth,window.innerHeight/4)))}),5e3),L=setInterval((function(){W.push.apply(W,M.genFireworkWithin(new m(new y(.01*window.innerWidth,200),.9*window.innerWidth,window.innerHeight/3)))}),755)})),document.addEventListener("visibilitychange",(function(){document.hidden?(clearInterval(I),clearInterval(L)):(I=setInterval((function(){W.push.apply(W,S.genShootingStar(new m(new y(.01*window.innerWidth,20),.9*window.innerWidth,window.innerHeight/4)))}),5e3),L=setInterval((function(){W.push.apply(W,M.genFireworkWithin(new m(new y(.01*window.innerWidth+150,200),.9*window.innerWidth-300,window.innerHeight/3)))}),800))})),window.addEventListener("close",(function(){clearInterval(I),clearInterval(L)})),T.addEventListener("click",(function(t){var n,e,i;E&&(n=O,e=1,i=setInterval((function(){e<=.1&&(clearInterval(i),n.style.display="none"),n.style.opacity=""+e,n.style.filter="alpha(opacity="+100*e+")",e-=.3*e}),50),E=!E),W.push.apply(W,M.genFireworkAt(new y(t.x,t.y)))}));var A=new m(new y(0,0),window.innerWidth,window.innerHeight),_=Date.now();requestAnimationFrame((function t(){var n=Date.now(),e=C.createLinearGradient(window.innerWidth/2,0,window.innerWidth/2,1.4*window.innerHeight);if(e.addColorStop(0,new g(0,0,0,1).toString()),e.addColorStop(.66,new g(9,15,45,1).toString()),e.addColorStop(1,new g(180,50,40,1).toString()),C.fillStyle=e,C.fillRect(0,0,window.innerWidth,window.innerHeight),n-_>25){_=n;for(var i=0;i<W.length;i++)W[i].update(A)}for(i=0;i<W.length;i++)W[i].draw(C);requestAnimationFrame(t)}))})()})();