(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"Tj/T":function(o,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return g}));var r=n("dI71"),t=n("q1tI"),i=n.n(t),a=n("z0FI"),l=n("bjw9"),c=n("3LCa"),f=n("WFpA"),u=n("WrWi"),s=n("IObG"),v=n("xmzN"),p={name:"color",vs:"\n    varying vec3 color_vColor;\n\n    void color_setColor(vec3 color) {\n      color_vColor = color;\n    }\n  ",fs:"\n    varying vec3 color_vColor;\n\n    vec3 color_getColor() {\n      return color_vColor;\n    }\n  "},d=function(o){function e(){return o.call(this,{debug:!0})||this}Object(r.a)(e,o),e.getInfo=function(){return"\nInstanced triangles using luma.gl's mid-level API\n"};var n=e.prototype;return n.onInitialize=function(o){var e=o.gl,n=new c.a(e,new Float32Array([-.2,-.2,.2,-.2,0,.2])),r=new c.a(e,new Float32Array([1,0,0,0,1,0,0,0,1,1,1,0])),t=new c.a(e,new Float32Array([.5,.5,-.5,.5,.5,-.5,-.5,-.5])),i=Object(v.a)(e,{vs:"\n      attribute vec2 position;\n      attribute vec3 color;\n      attribute vec2 offset;\n\n      void main() {\n        color_setColor(color);\n        gl_Position = vec4(position + offset, 0.0, 1.0);\n      }\n    ",fs:"\n      void main() {\n        gl_FragColor = vec4(color_getColor(), 1.0);\n      }\n    ",modules:[p]}),a=new f.a(e,i);return{program:a,vertexArray:new u.a(e,{program:a,attributes:{position:n,color:[r,{divisor:1}],offset:[t,{divisor:1}]}}),positionBuffer:n,colorBuffer:r,offsetBuffer:t}},n.onRender=function(o){var e=o.gl,n=o.program,r=o.vertexArray;o.positionBuffer,o.colorBuffer,o.offsetBuffer;Object(s.a)(e,{color:[0,0,0,1]}),n.draw({vertexArray:r,vertexCount:3,instanceCount:4})},n.onFinalize=function(o){o.gl;var e=o.program,n=o.vertexArray,r=o.positionBuffer,t=o.colorBuffer,i=o.offsetBuffer;e.delete(),n.delete(),r.delete(),t.delete(),i.delete()},e}(l.a);"undefined"==typeof window||window.website||(new d).start();var g=function(o){function e(){return o.apply(this,arguments)||this}return Object(r.a)(e,o),e.prototype.render=function(){var o=this.props.pageContext,e=o&&o.exampleConfig||{};return i.a.createElement(a.a,{AnimationLoop:d,exampleConfig:e})},e}(i.a.Component)}}]);