(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{aI42:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return i}));var o=function(){function t(){}t.getInfo=function(){return""};var n=t.prototype;return n.start=function(){},n.stop=function(){},n.delete=function(){},n.onFinalize=function(){},n.waitForRender=function(){return Promise.resolve()},n._setDisplay=function(){},n._getCanvas=function(t){var n;if(void 0===t&&(t={}),t.canvas){n=document.getElementById(t.canvas);var e=window.devicePixelRatio||1;n.height=n.clientHeight*e,n.width=n.clientWidth*e}else(n=document.createElement("canvas")).width=800,n.height=600,document.body.appendChild(n);return n},n._getContainer=function(t){if(void 0===t&&(t={}),this.container)return this.container;var n,e;if(this.container=document.createElement("div"),t.canvas){var o=document.getElementById(t.canvas);this.parent=o.parentElement,n=o.clientWidth,e=o.clientHeight,this.container.style.position="relative",this.container.style.top="-"+e+"px"}else this.parent=document.body,n=800,e=800;return this.container.style.width=n+"px",this.container.style.height=e+"px",this.parent.appendChild(this.container),this.container},n._removeContainer=function(t){void 0===t&&(t={}),this.parent.removeChild(this.container)},t}();function i(){var t=1,n=1;return function(){return t=Math.sin(17.23*n),n=Math.cos(27.92*t),(e=1432.71*Math.abs(t*n))-Math.floor(e);var e}}},"s0S/":function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return v}));var o=e("dI71"),i=e("q1tI"),r=e.n(i),a=e("z0FI"),c=e("UD/Y"),s=e("3LCa"),u=e("IObG"),l=e("lHlH"),d=e("aI42"),f=function(t){function n(){return t.apply(this,arguments)||this}Object(o.a)(n,t),n.getInfo=function(){return"\nUsing an externally created context with luma.gl\n"};var e=n.prototype;return e.start=function(t){var n=this._getCanvas(t),e=Object(l.f)(n.getContext("webgl")||n.getContext("experimental-webgl"));e.clearColor(0,0,0,1);var o=new s.a(e,new Float32Array([-.5,-.5,.5,-.5,0,.5])),i=new s.a(e,new Float32Array([1,0,0,0,1,0,0,0,1])),r=new c.a(e,{vs:"\n      attribute vec2 position;\n      attribute vec3 color;\n\n      varying vec3 vColor;\n\n      void main() {\n        vColor = color;\n        gl_Position = vec4(position, 0.0, 1.0);\n      }\n    ",fs:"\n      varying vec3 vColor;\n\n      void main() {\n        gl_FragColor = vec4(vColor, 1.0);\n      }\n    ",attributes:{position:o,color:i},vertexCount:3}),a={positionBuffer:o,colorBuffer:i,model:r};a.rafHandle=requestAnimationFrame((function t(){a.rafHandle=requestAnimationFrame(t),Object(u.a)(e,{color:[0,0,0,1]}),r.draw()})),this.resources=a},e.stop=function(){cancelAnimationFrame(this.resources.rafHandle)},e.delete=function(){var t=this.resources,n=t.positionBuffer,e=t.colorBuffer,o=t.model;n.delete(),e.delete(),o.delete()},n}(d.a);"undefined"==typeof window||window.website||(new f).start();var v=function(t){function n(){return t.apply(this,arguments)||this}return Object(o.a)(n,t),n.prototype.render=function(){var t=this.props.pageContext,n=t&&t.exampleConfig||{};return r.a.createElement(a.a,{AnimationLoop:f,exampleConfig:n})},n}(r.a.Component)}}]);