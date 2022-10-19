var h=document.getElementById("labyrinth-canvas"),l=h.getContext("2d");h.width=window.innerWidth;h.height=window.innerHeight;const q=document.querySelector("#labyrinth-canvas"),u=q.getContext("2d");l=u;const A=document.querySelector("#labyrinth");h=A;h.width=window.innerWidth;h.height=window.innerHeight;var E=100,W=1,w=[],c,$=50,p=0,b=0;c=C($);for(var P=0;P<W;P++)c.add(Y(h));function g(){var r;return c.parr.length<E&&(w.length>0?(r=w.pop(),r.res_(p,b),c.add(r)):(r=Y(h,p,b),c.add(r))),r}var S=.03;function H(){u.fillStyle="rgba(255, 255, 255, 0.4)",localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?u.fillStyle="rgba( 0, 0, 0, 0.4)":u.fillStyle="rgba(255, 255, 255, 0.4)",l.fillRect(0,0,h.width,h.height),c.ref(),c.pos;for(var r=c.parr.length,e,i;r--;){var t=c.parr[r],n=c.next(t);if(n)for(var o=n.length;o--;){var a=n[o];a!==t&&(X(t,a),e=(t.x-a.x)/m(a,t),i=(t.y-a.y)/m(a,t),t.velX-=e*S,t.velY-=i*S)}}R()}function X(r,e){var i=s(0,1);i==0?l.strokeStyle="blue":l.strokeStyle="purple";var t=m(r,e);l.globalAlpha=1-t/100,l.beginPath(),l.moveTo(r.x,r.y),l.lineTo(e.x,e.y),l.stroke()}function m(r,e){var i=0,t=0;return i=e.x-r.x,i=i*i,t=e.y-r.y,t=t*t,Math.sqrt(i+t)}function R(){for(var r=0;r<c.parr.length;r++)c.parr[r].upos()}function T(r){var e=c.rem(r);w.push(e[0])}var M=.9;function Y(r,e,i){var t={};return t.res_=function(n,o){t.mass=s(1,10),t.gx=s(-5,5),t.gy=s(-5,5),t.x=n||s(10,r.width-10),t.y=o||s(10,r.height-10),t.gx2=s(-2,2)*.5,t.gy2=s(-2,2)*.5;var a=25;t.velX=s(-a,a),t.velY=s(-a,a)},t.upos=function(){if(Math.abs(t.velX)<1&&Math.abs(t.velY)<1&&T(t),s(0,100)>98){var n=g();n&&(n.res_(t.x,t.y),n.velX+=s(-5,5),n.velY+=s(-5,5))}t.velX*=M,t.velY*=M,(t.x+t.velX>r.width||t.x+t.velX<0)&&(t.velX*=-1),(t.y+t.velY>r.height||t.y+t.velY<0)&&(t.velY*=-1),X(t,{x:t.x+t.velX,y:t.y+t.velY}),t.x+=t.velX,t.y+=t.velY},t.res_(e,i),t}function C(r){var e={};return e.gsz=r,e.parr=[],e.pos=[],e.next=function(i){var t=Math.ceil(i.x/r),n=Math.ceil(i.y/r),o=e.pos,a=o[t][n];try{o[t-1][n-1]&&(a=a.concat(o[t-1][n-1]))}catch{}try{o[t][n-1]&&(a=a.concat(o[t][n-1]))}catch{}try{o[t+1][n-1]&&(a=a.concat(o[t+1][n-1]))}catch{}try{o[t-1][n]&&(a=a.concat(o[t-1][n]))}catch{}try{o[t+1][n]&&(a=a.concat(o[t+1][n]))}catch{}try{o[t-1][n+1]&&(a=a.concat(o[t-1][n+1]))}catch{}try{o[t][n+1]&&(a=a.concat(o[t][n+1]))}catch{}try{o[t+1][n+1]&&(a=a.concat(o[t+1][n+1]))}catch{}return a},e.ref=function(){e.pos=[];for(var i=e.parr.length;i--;){var t=e.parr[i],n=Math.ceil(t.x/r),o=Math.ceil(t.y/r);e.pos[n]||(e.pos[n]=[]),e.pos[n][o]||(e.pos[n][o]=[t])}},e.add=function(i){e.parr.push(i)},e.rem=function(i){for(var t=e.parr.length;t--;)if(e.parr[t]===i)return e.parr.splice(t,1)},e}function s(r,e){return Math.floor(Math.random()*(e-r+1))+r}window.addEventListener("mousemove",function(r){var e=g();e&&e.res_(r.clientX,r.clientY)},!1);window.addEventListener("touchmove",function(r){r.preventDefault();var e=g();e&&e.res_(r.touches[0].clientX,r.touches[0].clientY)},!1);function _(){window.requestAnimationFrame(_),H()}_();window.addEventListener("resize",function(){h.width=window.innerWidth,h.height=window.innerHeight},!1);const F=400,D=.1;class L{x;y;z;xPrev;yPrev;constructor(e=0,i=0,t=0){this.x=e,this.y=i,this.z=t,this.xPrev=e,this.yPrev=i}update(e,i,t){this.xPrev=this.x,this.yPrev=this.y,this.z+=t*.0675,this.x+=this.x*(t*.0225)*this.z,this.y+=this.y*(t*.0225)*this.z,(this.x>e/2||this.x<-e/2||this.y>i/2||this.y<-i/2)&&(this.x=Math.random()*e-e/2,this.y=Math.random()*i-i/2,this.xPrev=this.x,this.yPrev=this.y,this.z=0)}draw(e){e.lineWidth=this.z,e.beginPath(),e.moveTo(this.x,this.y),e.lineTo(this.xPrev,this.yPrev),e.stroke()}}const z=Array.from({length:F},()=>new L(0,0,0));let y=0;const d=document.querySelector("#starfield-canvas"),f=d.getContext("2d"),x=document.querySelector("#starfield"),O=new ResizeObserver(I);O.observe(x);function I(){y>0&&cancelAnimationFrame(y);const{clientWidth:r,clientHeight:e}=x,i=window.devicePixelRatio||1;d.width=r*i,d.height=e*i,d.style.width=`${r}px`,d.style.height=`${e}px`,f.scale(i,i);for(const t of z)t.x=Math.random()*r-r/2,t.y=Math.random()*e-e/2,t.z=0;f.translate(r/2,e/2),f.fillStyle="rgba(255, 255, 255, 0.4)",f.strokeStyle="black",y=requestAnimationFrame(k)}function k(){const{clientWidth:r,clientHeight:e}=x;for(const i of z)i.update(r,e,D),i.draw(f);f.fillRect(-r/2,-e/2,r,e),y=requestAnimationFrame(k)}
