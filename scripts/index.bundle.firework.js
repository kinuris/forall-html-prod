(()=>{"use strict";var t={679:(t,i,e)=>{e.d(i,{Z:()=>r});var n=e(645),o=e.n(n)()((function(t){return t[1]}));o.push([t.id,"*{padding:0;margin:0}body{height:100vh;width:100vw;overflow:hidden}body h1{position:absolute;width:100vw;text-align:center;margin-top:1em;font-family:Arial,Helvetica,sans-serif;font-size:3em;top:0;color:rgba(180,255,255,.2);user-select:none}@media screen and (min-width: 1200px){body h1{font-size:5em}}",""]);const r=o},645:t=>{t.exports=function(t){var i=[];return i.toString=function(){return this.map((function(i){var e=t(i);return i[2]?"@media ".concat(i[2]," {").concat(e,"}"):e})).join("")},i.i=function(t,e,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<t.length;a++){var h=[].concat(t[a]);n&&o[h[0]]||(e&&(h[2]?h[2]="".concat(e," and ").concat(h[2]):h[2]=e),i.push(h))}},i}},379:t=>{var i=[];function e(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function n(t,n){for(var r={},s=[],a=0;a<t.length;a++){var h=t[a],l=n.base?h[0]+n.base:h[0],c=r[l]||0,u="".concat(l," ").concat(c);r[l]=c+1;var d=e(u),p={css:h[1],media:h[2],sourceMap:h[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:u,updater:o(p,n),references:1}),s.push(u)}return s}function o(t,i){var e=i.domAPI(i);return e.update(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e.update(t=i)}else e.remove()}}t.exports=function(t,o){var r=n(t=t||[],o=o||{});return function(t){t=t||[];for(var s=0;s<r.length;s++){var a=e(r[s]);i[a].references--}for(var h=n(t,o),l=0;l<r.length;l++){var c=e(r[l]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}r=h}}},569:t=>{var i={};t.exports=function(t,e){var n=function(t){if(void 0===i[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}i[t]=e}return i[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}},216:t=>{t.exports=function(t){var i=document.createElement("style");return t.setAttributes(i,t.attributes),t.insert(i),i}},565:(t,i,e)=>{t.exports=function(t){var i=e.nc;i&&t.setAttribute("nonce",i)}},795:t=>{t.exports=function(t){var i=t.insertStyleElement(t);return{update:function(e){!function(t,i,e){var n=e.css,o=e.media,r=e.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),i.styleTagTransform(n,t)}(i,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)}}}},589:t=>{t.exports=function(t,i){if(i.styleSheet)i.styleSheet.cssText=t;else{for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(document.createTextNode(t))}}}},i={};function e(n){var o=i[n];if(void 0!==o)return o.exports;var r=i[n]={id:n,exports:{}};return t[n](r,r.exports,e),r.exports}e.n=t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},e.d=(t,i)=>{for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},e.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),(()=>{var t=e(379),i=e.n(t),n=e(795),o=e.n(n),r=e(569),s=e.n(r),a=e(565),h=e.n(a),l=e(216),c=e.n(l),u=e(589),d=e.n(u),p=e(679),f={};f.styleTagTransform=d(),f.setAttributes=h(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=c(),i()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;var y,w,v,m,g=function(){function t(t,i){this.x=t,this.y=i}return t.prototype.flip=function(){var t;t=[this.y,this.x],this.x=t[0],this.y=t[1]},t.prototype.distance=function(t){var i=this.x-t.x,e=this.y-t.y;return Math.hypot(i,e)},t.prototype.component=function(i){var e=this.distance(i);return new t((this.x-i.x)/e,(this.y-i.y)/e)},t}(),x=(y=function(t,i){return(y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e])})(t,i)},function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function e(){this.constructor=t}y(t,i),t.prototype=null===i?Object.create(i):(e.prototype=i.prototype,new e)}),M=function(t){function i(i,e,n){var o=t.call(this,i.x,i.y)||this;return o.dimensions=new g(e,n),o}return x(i,t),i.prototype.setDimensions=function(t,i){this.dimensions.x=t,this.dimensions.y=i},i.prototype.getRandomPointWithin=function(){var t=this.x+Math.random()*this.dimensions.x,i=this.y+Math.random()*this.dimensions.y;return new g(t,i)},i}(g),b=function(){function t(t,i,e,n){this.r=t,this.g=i,this.b=e,this.a=n}return t.genRandColor=function(i){var e=255*Math.random(),n=255*Math.random(),o=255*Math.random();return i&&(e=(e+i.r)/2,o=(o+i.b)/2,n=(n+i.g)/2),new t(e,n,o,1)},t.prototype.mix=function(t){return this.r=(this.r+t.r)/2,this.b=(this.b+t.b)/2,this.g=(this.g+t.g)/2,this},t.prototype.toString=function(){return"rgba("+this.r+", "+this.g+", "+this.b+", "+this.a+")"},t}(),C=function(){var t=function(i,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e])})(i,e)};return function(i,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=i}t(i,e),i.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),T=function(t){function i(i,e,n,o,r,s){void 0===n&&(n=new g(0,0)),void 0===o&&(o=new g(0,0)),void 0===r&&(r=0),void 0===s&&(s=new b(255,255,255,1));var a=t.call(this,e.x,e.y)||this;return a.steps=3,a.tick=0,a.lifetime=0,a.radiusThreshold=0,a.separatedCollisionLogic=!1,a.changedY=!1,a.changedX=!1,a.hasTrail=!1,a.radiusOriginal=a.radius=i,a.color=s,a.acceleration=n,a.velocity=o,a.bounce=r,a}return C(i,t),i.prototype.update=function(t){this.radius<=this.radiusThreshold||(this.lifetime>0&&this.applyLifetime(),this.incrementTick(),this.applyTrails(),this.separatedCollisionLogic||(t&&this.checkCollisionsPrivate(t),this.applyCollisionsPrivate()),this.applyVelocityAcceleration())},i.prototype.incrementTick=function(){this.tick++},i.prototype.applyLifetime=function(){this.radius=this.radius*((this.lifetime-this.tick)/this.lifetime)},i.prototype.applyTrails=function(){if(this.hasTrail&&!this.smoothTrails){this.trail.length>this.trailMaxLength&&this.trail.shift();var t=new i(this.radius,new g(this.x,this.y));t.setLifetime(this.trailLifetime),t.setColor(this.color),this.trail.push(t);for(var e=0;e<this.trail.length;e++)this.trail[e].update()}},i.prototype.applyVelocityAcceleration=function(){this.velocity.x+=this.acceleration.x,this.velocity.y+=this.acceleration.y,this.x+=this.velocity.x,this.y+=this.velocity.y},i.prototype.applyCollisionsPrivate=function(){this.collidedY?this.collidedY&&!this.changedY&&(this.velocity.y=-this.velocity.y*(this.bounce<=0?1:this.bounce),this.changedY=!0,this.applySteps()):this.changedY=!1,this.collidedX?this.collidedX&&!this.changedX&&(this.velocity.x=-this.velocity.x,this.changedX=!0,this.applySteps()):this.changedX=!1},i.prototype.checkCollisionsPrivate=function(t){this.radius<=this.radiusThreshold||(this.y+this.radius>t.dimensions.y?this.collidedY=!0:this.collidedY=!1,this.x+this.radius>t.dimensions.x||this.x-this.radius<t.x?this.collidedX=!0:this.collidedX=!1)},i.prototype.checkCollisions=function(t){if(!this.separatedCollisionLogic)throw new Error("Only call checkCollisions manually if enableSeparateCollisionLogic was called first");this.checkCollisionsPrivate(t)},i.prototype.applyCollisions=function(){if(!this.separatedCollisionLogic)throw new Error("Only call applyCollisions manually if enableSeparateCollisionLogic was called first");this.applyCollisionsPrivate()},i.prototype.draw=function(t){if(!(this.radius<=this.radiusThreshold)&&(t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),t.fillStyle=this.color.toString(),t.fill(),this.hasTrail)){for(var e=0;e<this.trail.length;e++)console.log("drew "),this.trail[e].draw(t);if(this.smoothTrails){this.trail.length>this.trailMaxLength&&this.trail.shift();var n=new i(this.radius,new g(this.x,this.y));for(n.setLifetime(this.trailLifetime),n.setColor(this.color),this.trail.push(n),e=0;e<this.trail.length;e++)this.trail[e].update()}}},i.prototype.getRandomPointWithin=function(){var t=2*Math.random()*Math.PI,i=Math.cos(t)*this.radius*Math.random()+this.x,e=Math.sin(t)*this.radius*Math.random()+this.y;return new g(i,e)},i.prototype.applySteps=function(){this.steps<1||(this.radius-=this.radiusOriginal/this.steps)},i.prototype.enableTrails=function(t,i,e){return void 0===e&&(e=!1),this.trail=[],this.hasTrail=!0,this.trailLifetime=t,this.trailMaxLength=i,this.smoothTrails=e,this},i.prototype.enableSeparateCollisionLogic=function(){return this.separatedCollisionLogic=!0,this},i.prototype.disableTrails=function(){return this.trail=null,this.hasTrail=!1,this.trailLifetime=null,this.trailMaxLength=null,this.smoothTrails=null,this},i.prototype.setRadiusThreshold=function(t){return this.radiusThreshold=t,this},i.prototype.setSteps=function(t){if(t>127)throw new Error("STEP COUNT TOO HIGH!");return this.steps=Math.ceil(t),this},i.prototype.setLifetime=function(t){return this.lifetime=40*t,this},i.prototype.setColor=function(t){return this.color=t,this},i.prototype.getSteps=function(){return this.steps},i.prototype.setAcceleration=function(t){return this.acceleration=t,this},i.prototype.setXAccel=function(t){return this.acceleration.x=t,this},i.prototype.setYAccel=function(t){return this.acceleration.y=t,this},i.prototype.getXAccel=function(){return this.acceleration.x},i.prototype.getYAccel=function(){return this.acceleration.y},i.prototype.setVelocity=function(t){return this.velocity=t,this},i.prototype.setXVel=function(t){return this.velocity.x=t,this},i.prototype.setYVel=function(t){return this.velocity.y=t,this},i.prototype.getXVel=function(){return this.velocity.x},i.prototype.getYVel=function(){return this.velocity.y},i.prototype.getRadius=function(){return this.radius},i.prototype.getRadiusThreshold=function(){return this.radiusThreshold},i.prototype.getCollidedX=function(){return this.collidedX},i.prototype.getCollidedY=function(){return this.collidedY},i.prototype.setBounce=function(t){return this.bounce=t,this},i.prototype.getBounce=function(){return this.bounce},i}(g),S=function(){function t(){}return t.genFireworkAt=function(t){for(var i=[],e=1;e<8;e++)for(var n=20*Math.random()+20,o=b.genRandColor(new b(255,255,255,1)),r=1800*Math.random(),s=8*Math.random()+8,a=0;a<n;a++){var h=Math.random()*Math.PI*2,l=Math.cos(h)*r+t.x,c=Math.sin(h)*r+t.y,u=new g(l,c),d=10*Math.random()+2,p=u.distance(t),f=t.component(u),y=f.x,w=f.y,v=new g(y*(p/250),w*(p/250));i.push(new T(d,t).setSteps(1).setLifetime(s).setRadiusThreshold(.2).setVelocity(v).setColor(o))}return i},t.genFirework2At=function(t){for(var i=[],e=1;e<Math.ceil(5*Math.random())+5;e++)for(var n=b.genRandColor(new b(255,255,255,1)),o=1800*Math.random(),r=8*Math.random()+8,s=Math.round(32*Math.random())+8,a=10*Math.random()+3,h=1;h<=s;h++){var l=1/s*h*Math.PI*2,c=Math.cos(l)*o+t.x,u=Math.sin(l)*o+t.y,d=new g(c,u),p=d.distance(t),f=t.component(d),y=f.x,w=f.y,v=new g(y*(p/250),w*(p/250));i.push(new T(a,t).setSteps(1).setLifetime(r).setRadiusThreshold(.2).setVelocity(v).setColor(n))}return i},t.genFireworkWithin=function(t){return this.genFireworkAt(t.getRandomPointWithin())},t.genFirework2Within=function(t){return this.genFirework2At(t.getRandomPointWithin())},t}(),L=function(){function t(){}return t.genStars=function(t,i){if(i<1)throw new Error("INVALID COUNT");for(var e=[],n=0;n<i;n++){var o=Math.random(),r=new T(o,t.getRandomPointWithin());e.push(r)}return e},t.genShootingStar=function(t){for(var i=[],e=50*Math.random()+100,n=50*Math.random()+100,o=new M(new g(Math.random()*(t.dimensions.x-e),Math.random()*(t.dimensions.y-n)),e,n),r=0;r<Math.ceil(3*Math.random())+1;r++){var s=1+Math.random();i.push(new T(3,o.getRandomPointWithin()).enableTrails(1,10,!0).setSteps(1).setLifetime(5).setYAccel(.1).setVelocity(new g(13*s,5*s)))}return i},t.twinklingStars=function(t){return new T(3,t.getRandomPointWithin()).setLifetime(20)},t}(),P=document.getElementById("cnv"),A=P.getContext("2d"),W=document.getElementById("header"),k=!0,I=[],O=[];function E(){A.canvas.width=window.innerWidth,A.canvas.height=window.innerHeight}function R(t){O.push.apply(O,L.genStars(new M(new g(.01*window.innerWidth,20),.99*window.innerWidth,window.innerHeight),t))}function _(){w=setInterval((function(){I.push.apply(I,L.genShootingStar(new M(new g(.01*window.innerWidth,20),.9*window.innerWidth,window.innerHeight/4)))}),5e3),v=setInterval((function(){I.push.apply(I,S.genFirework2Within(new M(new g(.01*window.innerWidth+150,200),.9*window.innerWidth-300,window.innerHeight/3)))}),1e3),m=setInterval((function(){I.push(L.twinklingStars(new M(new g(.01*window.innerWidth,20),.9*window.innerWidth,window.innerHeight/2)))}),2e3)}function Y(){clearInterval(w),clearInterval(v),clearInterval(m)}window.addEventListener("load",(function(){R(500),_()})),window.addEventListener("load",(function(){E()})),window.addEventListener("resize",(function(){E(),Y(),O=[],R(500),_()})),window.addEventListener("visibilitychange",(function(){document.hidden?Y():_()})),window.addEventListener("close",(function(){Y()})),P.addEventListener("click",(function(t){var i,e,n;k&&(i=W,e=1,n=setInterval((function(){e<=.1&&(clearInterval(n),i.style.display="none"),i.style.opacity=""+e,i.style.filter="alpha(opacity="+100*e+")",e-=.3*e}),50),k=!k),I.push.apply(I,S.genFirework2At(new g(t.x,t.y)))}));var X=new M(new g(0,0),window.innerWidth,window.innerHeight),H=Date.now(),F=function(t){var i=t.createLinearGradient(window.innerWidth/2,0,window.innerWidth/2,1.4*window.innerHeight);return i.addColorStop(0,new b(0,0,0,1).toString()),i.addColorStop(.66,new b(9,15,45,1).toString()),i.addColorStop(1,new b(180,50,40,1).toString()),i}(A);requestAnimationFrame((function t(){var i=Date.now();if(A.fillStyle=F,A.fillRect(0,0,window.innerWidth,window.innerHeight),i-H>25){H=i;for(var e=0;e<I.length;e++)I[e].getRadius()>I[e].getRadiusThreshold()&&I[e].update(X)}for(e=0;e<I.length;e++)I[e].getRadius()>0&&I[e].draw(A);for(e=0;e<O.length;e++)O[e].draw(A);requestAnimationFrame(t)}))})()})();