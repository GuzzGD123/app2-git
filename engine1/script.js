// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeOutBackCubic:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*(-1.5*h*f*h+2*h*h+4*h*f+-9*h+5.5*f)},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a}});function ws_lines(d,l,m){var e=jQuery;var f=e(this);var i=d.noCanvas||!document.createElement("canvas").getContext;var k=d.width,r=d.height;var g=e("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_lines").appendTo(m);if(!i){var b=e("<canvas>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%"}).appendTo(g);var o=b.get(0).getContext("2d")}var s=[["rgb(187,187,187)",0.1,0.3],["rgb(179,179,179)",0.9,0.8],["rgb(182,182,182)",0.68,0.4],["rgb(185,185,185)",0.25,0.4],["rgb(204,204,204)",0.11,0.7],["rgb(195,195,195)",0.18,0.1],["rgb(198,198,198)",0.4,0.2],["rgb(201,201,201)",0.55,-0.04],["rgb(211,211,211)",0,0.95],["rgb(214,214,214)",0.5,0.8],["rgb(217,217,217)",0.9,0.1]];var a=[[0.5,0.4,0.3,0.2,0.1,0,0.1,0.2,0.3,0.4,0.5],[0,0.1,0.2,0.3,0.4,0.5,0.4,0.3,0.2,0.1,0],[0,0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5],[0.5,0.45,0.4,0.35,0.3,0.25,0.2,0.15,0.1,0.05,0],[0.7,0.3,0,0.1,0.5,0.3,0.4,0.1,0.6,0.2,0],];var q=["from-top","from-bottom","width-from-center","height-from-center","fill-half-fill-full"];var j=["easeOutExpo","easeOutCubic","easeOutBackCubic","easeOutBack"];var p=[45,-45,0,180,90,-90];function n(h){h.save();h.setTransform(1,0,0,1,0,0);h.clearRect(0,0,k,r);h.restore()}function c(G,D,I,w,C,y,z){var u=k;var E=r;if(z==45||z==-45){u=E=Math.sqrt(k*k+r*r)}if(z==90||z==-90){u=r;E=k}var B=(u-k)/2;var v=(E-r)/2;n(G);for(var x=0,A=I.length;x<A;x++){var F=I[x]*(1-D);var h=Math.max(0,Math.min(1,D-F));G.beginPath();G.fillStyle=s[x][0];if(w){G.fillStyle=s[x][0].replace(/rgb/g,"rgba").replace(/\)/g,","+Math.min(D+0.1,1)+")")}var H={x:0,y:0,w:0,h:0};switch(C){case"from-top":if(y&&e.easing[y]){h=e.easing[y](1,h,0,1,1,1)}H.w=Math.ceil(0.5+u/A);H.h=E;H.x=(A-x-1)*u/A-B;H.y=-1.5*E*(1-h)-v;break;case"from-bottom":if(y&&e.easing[y]){h=e.easing[y](1,h,0,1,1,1)}H.w=Math.ceil(0.5+u/A);H.h=E;H.x=(A-x-1)*u/A-B;H.y=1.5*E*(1-h)-v;break;case"width-from-center":if(y&&e.easing[y]){h=e.easing[y](1,h,0,1,1,1)}H.w=Math.ceil(0.5+u/A)*h;H.h=E;H.x=(A-x-1)*u/A+(1-h)*u/A/2-B;H.y=-v;break;case"height-from-center":if(y&&e.easing[y]){h=e.easing[y](1,h,0,1,1,1)}H.w=Math.ceil(0.5+u/A);H.h=E*h;H.x=(A-x-1)*u/A-B;H.y=(1-h)*E/2-v;break;case"fill-half-fill-full":if(h<0.5){if(y&&e.easing[y]){h=e.easing[y](0.5,h,0,0.5,0.5,0.5)}}H.w=Math.ceil(0.5+u/A);H.h=E*h;H.x=(A-x-1)*u/A-B;H.y=(1-h)*E/2-v;break}G.fillRect(H.x,H.y,H.w,H.h)}}this.go=function(C,x){if(i){m.find(".ws_list").css("transform","translate3d(0,0,0)").stop(true).animate({left:(C?-C+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},d.duration,"easeInOutExpo",function(){f.trigger("effectEnd")})}else{k=m.width();r=m.height();var w=a[Math.floor(Math.random()*(a.length))];var E=a[Math.floor(Math.random()*(a.length))];b.attr({width:k,height:r});var A=l.get(x);for(var y=0,B=s.length;y<B;y++){var v=Math.abs(s[y][1]),h=Math.abs(s[y][2]);s[y][0]=t(A,{x:v*k,y:h*r,w:2,h:2})||s[y][0]}var D=q[Math.floor(Math.random()*(q.length))];var z=j[Math.floor(Math.random()*(j.length))];var u=p[Math.floor(Math.random()*(p.length))];o.translate(k/2,r/2);o.rotate(u*Math.PI/180);o.translate(-k/2,-r/2);wowAnimate(function(F){c(o,F,w,true,D,z,u)},0,1,d.duration/2,function(){m.find(".ws_list").css({left:(C?-C+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))});D=q[Math.floor(Math.random()*(q.length))];z=j[Math.floor(Math.random()*(j.length))];wowAnimate(function(F){c(o,1-F,E,false,D,z,u)},0,1,d.duration/2,d.duration*0.15,function(){n(o);f.trigger("effectEnd")})})}};function t(D,u){u=u||{};var F=1,x=u.exclude||[],C;var z=document.createElement("canvas"),w=z.getContext("2d"),v=z.width=D.naturalWidth,J=z.height=D.naturalHeight;w.drawImage(D,0,0,D.naturalWidth,D.naturalHeight);try{C=w.getImageData(u.x?u.x:0,u.y?u.y:0,u.w?u.w:D.width,u.h?u.h:D.height)["data"]}catch(E){return false}var y=(u.w?u.w:D.width*u.h?u.h:D.height)||C.length,A={},H="",G=[],h={dominant:{name:"",count:0}};var B=0;while(B<y){G[0]=C[B];G[1]=C[B+1];G[2]=C[B+2];H=G.join(",");if(H in A){A[H]=A[H]+1}else{A[H]=1}if(x.indexOf(["rgb(",H,")"].join(""))===-1){var I=A[H];if(I>h.dominant.count){h.dominant.name=H;h.dominant.count=I}}B+=F*4}return["rgb(",h.dominant.name,")"].join("")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_book(p,n,b){var f=jQuery;var m=f(this);var i=f(".ws_list",b);var k=f("<div>").addClass("ws_effect ws_book").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"}).appendTo(b),e=p.duration,d=p.perspective||0.4,g=p.shadow||0.35,a=p.noCanvas||false,l=p.no3d||false;var o={domPrefixes:" Webkit Moz ms O Khtml".split(" "),testDom:function(r){var q=this.domPrefixes.length;while(q--){if(typeof document.body.style[this.domPrefixes[q]+r]!=="undefined"){return true}}return false},cssTransitions:function(){return this.testDom("Transition")},cssTransforms3d:function(){var r=(typeof document.body.style.perspectiveProperty!=="undefined")||this.testDom("Perspective");if(r&&/AppleWebKit/.test(navigator.userAgent)){var t=document.createElement("div"),q=document.createElement("style"),s="Test3d"+Math.round(Math.random()*99999);q.textContent="@media (-webkit-transform-3d){#"+s+"{height:3px}}";document.getElementsByTagName("head")[0].appendChild(q);t.id=s;document.body.appendChild(t);r=t.offsetHeight===3;q.parentNode.removeChild(q);t.parentNode.removeChild(t)}return r},canvas:function(){if(typeof document.createElement("canvas").getContext!=="undefined"){return true}}};if(!l){l=o.cssTransitions()&&o.cssTransforms3d()}if(!a){a=o.canvas()}var j;this.go=function(r,q,E){if(j){return -1}var v=n.get(r),G=n.get(q);if(E==undefined){E=(q==0&&r!=q+1)||(r==q-1)}else{E=!E}var s=f("<div>").appendTo(k);var t=f(v);t={width:t.width(),height:t.height(),marginLeft:parseFloat(t.css("marginLeft")),marginTop:parseFloat(t.css("marginTop"))};if(l){var y={background:"#000",position:"absolute",left:0,top:0,width:"100%",height:"100%",transformStyle:"preserve-3d",zIndex:3,outline:"1px solid transparent"};perspect=b.width()*(3-d*2);s.css(y).css({perspective:perspect,transform:"translate3d(0,0,0)"});var z=90;var D=f("<div>").css(y).css({position:"relative","float":"left",width:"50%",overflow:"hidden"}).append(f("<img>").attr("src",(E?v:G).src).css(t)).appendTo(s);var C=f("<div>").css(y).css({position:"relative","float":"left",width:"50%",overflow:"hidden"}).append(f("<img>").attr("src",(E?G:v).src).css(t).css({marginLeft:-t.width/2})).appendTo(s);var I=f("<div>").css(y).css({display:E?"block":"none",width:"50%",transform:"rotateY("+(E?0.1:z)+"deg)",transition:(E?"ease-in ":"ease-out ")+e/2000+"s",transformOrigin:"right",overflow:"hidden"}).append(f("<img>").attr("src",(E?G:v).src).css(t)).appendTo(s);var F=f("<div>").css(y).css({display:E?"none":"block",left:"50%",width:"50%",transform:"rotateY(-"+(E?z:0.1)+"deg)",transition:(E?"ease-out ":"ease-in ")+e/2000+"s",transformOrigin:"left",overflow:"hidden"}).append(f("<img>").attr("src",(E?v:G).src).css(t).css({marginLeft:-t.width/2})).appendTo(s)}else{if(a){var x=f("<div>").css({position:"absolute",top:0,left:E?0:"50%",width:"50%",height:"100%",overflow:"hidden",zIndex:6}).append(f(n.get(r)).clone().css({position:"absolute",height:"100%",right:E?"auto":0,left:E?0:"auto"})).appendTo(s).hide();var B=f("<div>").css({position:"absolute",width:"100%",height:"100%",left:0,top:0,zIndex:8}).appendTo(s).hide();var H=f("<canvas>").css({position:"absolute",zIndex:2,left:0,top:-B.height()*d/2}).attr({width:B.width(),height:B.height()*(d+1)}).appendTo(B);var A=H.clone().css({top:0,zIndex:1}).attr({width:B.width(),height:B.height()}).appendTo(B);var w=H.get(0).getContext("2d");var u=A.get(0).getContext("2d")}else{i.stop(true).animate({left:(r?-r+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},e,"easeInOutExpo")}}if(!l&&a){var D=w;var C=u;var I=G;var F=v}j=new h(E,z,D,C,I,F,B,H,A,x,t,function(){m.trigger("effectEnd");s.remove();j=0})};function c(G,s,A,v,u,E,D,C,B,t,r){numSlices=u/2,widthScale=u/B,heightScale=(1-E)/numSlices;G.clearRect(0,0,r.width(),r.height());for(var q=0;q<numSlices+widthScale;q++){var z=(D?q*p.width/u+p.width/2:(numSlices-q)*p.width/u);var H=A+(D?2:-2)*q,F=v+t*heightScale*q/2;if(z<0){z=0}if(H<0){H=0}if(F<0){F=0}G.drawImage(s,z,0,2.5,p.height,H,F,2,t*(1-(heightScale*q)))}G.save();G.beginPath();G.moveTo(A,v);G.lineTo(A+(D?2:-2)*(numSlices+widthScale),v+t*heightScale*(numSlices+widthScale)/2);G.lineTo(A+(D?2:-2)*(numSlices+widthScale),t*(1-heightScale*(numSlices+widthScale))+v+t*heightScale*(numSlices+widthScale)/2);G.lineTo(A,v+t);G.closePath();G.clip();G.fillStyle="rgba(0,0,0,"+Math.round(C*100)/100+")";G.fillRect(0,0,r.width(),r.height());G.restore()}function h(A,r,C,B,y,x,v,w,u,z,t,E){if(l){if(!A){r*=-1;var D=B;B=C;C=D;D=x;x=y;y=D}setTimeout(function(){C.children("img").css("opacity",g).animate({opacity:1},e/2);y.css("transform","rotateY("+r+"deg)").children("img").css("opacity",1).animate({opacity:g},e/2,function(){y.hide();x.show().css("transform","rotateX(0deg) rotateY(0deg)").children("img").css("opacity",g).animate({opacity:1},e/2);B.children("img").css("opacity",1).animate({opacity:g},e/2)})},0);setTimeout(E,e)}else{if(a){v.show();var q=new Date;var s=true;wowAnimate(function(F){var I=jQuery.easing.easeInOutQuint(1,F,0,1,1),H=jQuery.easing.easeInOutCubic(1,F,0,1,1),L=!A;if(F<0.5){I*=2;H*=2;var G=y}else{L=A;I=(1-I)*2;H=(1-H)*2;var G=x}var J=v.height()*d/2,N=(1-I)*v.width()/2,M=1+H*d,K=v.width()/2;c(C,G,K,J,N,M,L,H*g,K,v.height(),w);if(s){z.show();s=false}B.clearRect(0,0,u.width(),u.height());B.fillStyle="rgba(0,0,0,"+(g-H*g)+")";B.fillRect(L?K:0,0,u.width()/2,u.height())},0,1,e,E)}}}}jQuery.extend(jQuery.easing,{easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a}});// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_fly(c,a,b){var e=jQuery;var f=e(this);var h={position:"absolute",left:0,top:0,width:"100%",height:"100%",transform:"translate3d(0,0,0)"};var d=b.find(".ws_list");var g=e("<div>").addClass("ws_effect ws_fly").css(h).css({overflow:"visible"}).appendTo(b);this.go=function(p,m,l){if(l==undefined){l=!!c.revers}else{l=!l}var k=-(c.distance||g.width()/4),n=Math.min(-k,Math.max(0,e(window).width()-g.offset().left-g.width())),i=(l?n:k),q=(l?k:n);var j=e(a.get(m));j={width:j.width(),height:j.height()};var r=e("<div>").css(h).css({"z-index":1,overflow:"hidden"}).html(e(a.get(m)).clone().css(j)).appendTo(g);var o=e("<div>").css(h).css({"z-index":3,overflow:"hidden"}).html(e(a.get(p)).clone().css(j)).appendTo(g).show();wowAnimate(o,{opacity:0},{opacity:1},c.duration);wowAnimate(o,{left:i},{left:0},2*c.duration/3);d.hide();wowAnimate(r,{left:0,opacity:1},{left:q,opacity:0},2*c.duration/3,c.duration/3,function(){r.remove();f.trigger("effectEnd");o.remove()})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"lines,book,fly",prev:"",next:"",duration:20*100,delay:20*100,width:640,height:360,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,controlsThumb:false,responsive:1,fullScreen:false,gestures:2,onBeforeStep:0,images:0});