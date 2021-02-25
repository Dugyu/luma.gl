(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2xM4":function(e,n,r){"use strict";r.d(n,"b",(function(){return t})),r.d(n,"a",(function(){return i}));var t="vs",i="fs"},"63Iv":function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"c",(function(){return d})),r.d(n,"b",(function(){return l}));var t,i=r("2xM4"),a=r("ayeP"),o=((t={})[i.b]="#ifdef MODULE_LOGDEPTH\n  logdepth_adjustPosition(gl_Position);\n#endif\n",t[i.a]="#ifdef MODULE_MATERIAL\n  gl_FragColor = material_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_LIGHTING\n  gl_FragColor = lighting_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_FOG\n  gl_FragColor = fog_filterColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_PICKING\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n#endif\n\n#ifdef MODULE_LOGDEPTH\n  logdepth_setFragDepth();\n#endif\n",t),u="__LUMA_INJECT_DECLARATIONS__",f=/void\s+main\s*\([^)]*\)\s*\{\n?/,s=/}\n?[^{}]*$/,c=[];function d(e,n,r,t){void 0===t&&(t=!1);var a=n===i.b,d=function(n){var t=r[n];t.sort((function(e,n){return e.order-n.order})),c.length=t.length;for(var i=0,o=t.length;i<o;++i)c[i]=t[i].injection;var d=c.join("\n")+"\n";switch(n){case"vs:#decl":a&&(e=e.replace(u,d));break;case"vs:#main-start":a&&(e=e.replace(f,(function(e){return e+d})));break;case"vs:#main-end":a&&(e=e.replace(s,(function(e){return d+e})));break;case"fs:#decl":a||(e=e.replace(u,d));break;case"fs:#main-start":a||(e=e.replace(f,(function(e){return e+d})));break;case"fs:#main-end":a||(e=e.replace(s,(function(e){return d+e})));break;default:e=e.replace(n,(function(e){return e+d}))}};for(var l in r)d(l);return e=e.replace(u,""),t&&(e=e.replace(/\}\s*$/,(function(e){return e+o[n]}))),e}function l(e){var n={};return Object(a.a)(Array.isArray(e)&&e.length>1),e.forEach((function(e){for(var r in e)n[r]=n[r]?n[r]+"\n"+e[r]:e[r]})),n}},ayeP:function(e,n,r){"use strict";function t(e,n){if(!e)throw new Error(n||"shadertools: assertion failed.")}r.d(n,"a",(function(){return t}))},xmzN:function(e,n,r){"use strict";r.d(n,"a",(function(){return x}));var t=r("2xM4"),i=r("ayeP"),a={number:{validate:function(e,n){return Number.isFinite(e)&&(!("max"in n)||e<=n.max)&&(!("min"in n)||e>=n.min)}},array:{validate:function(e,n){return Array.isArray(e)||ArrayBuffer.isView(e)}}};function o(e){var n=u(e);return"object"===n?e?"type"in e?Object.assign({},e,a[e.type]):"value"in e?(n=u(e.value),Object.assign({type:n},e,a[n])):{type:"object",value:e}:{type:"object",value:null}:Object.assign({type:n,value:e},a[n])}function u(e){return Array.isArray(e)||ArrayBuffer.isView(e)?"array":typeof e}var f=function(){function e(e){var n=e.name,r=e.vs,t=e.fs,a=e.dependencies,u=void 0===a?[]:a,f=e.uniforms,s=e.getUniforms,c=e.deprecations,d=void 0===c?[]:c,l=e.defines,v=void 0===l?{}:l,_=e.inject,g=void 0===_?{}:_,p=e.vertexShader,E=e.fragmentShader;Object(i.a)("string"==typeof n),this.name=n,this.vs=r||p,this.fs=t||E,this.getModuleUniforms=s,this.dependencies=u,this.deprecations=this._parseDeprecationDefinitions(d),this.defines=v,this.injections=function(e){var n={vs:{},fs:{}};for(var r in e){var t=e[r],i=r.slice(0,2);"string"==typeof t&&(t={order:0,injection:t}),n[i][r]=t}return n}(g),f&&(this.uniforms=function(e){var n={};for(var r in e){var t=o(e[r]);n[r]=t}return n}(f))}var n=e.prototype;return n.getModuleSource=function(e){var n;switch(e){case"vs":n=this.vs||"";break;case"fs":n=this.fs||"";break;default:Object(i.a)(!1)}return"#define MODULE_"+this.name.toUpperCase().replace(/[^0-9a-z]/gi,"_")+"\n"+n+"// END MODULE_"+this.name+"\n\n"},n.getUniforms=function(e,n){return this.getModuleUniforms?this.getModuleUniforms(e,n):this.uniforms?this._defaultGetUniforms(e):{}},n.getDefines=function(){return this.defines},n.checkDeprecations=function(e,n){this.deprecations.forEach((function(r){r.regex.test(e)&&(r.deprecated?n.deprecated(r.old,r.new)():n.removed(r.old,r.new)())}))},n._parseDeprecationDefinitions=function(e){return e.forEach((function(e){switch(e.type){case"function":e.regex=new RegExp("\\b"+e.old+"\\(");break;default:e.regex=new RegExp(e.type+" "+e.old+";")}})),e},n._defaultGetUniforms=function(e){void 0===e&&(e={});var n={},r=this.uniforms;for(var t in r){var a=r[t];t in e&&!a.private?(a.validate&&Object(i.a)(a.validate(e[t],a),this.name+": invalid "+t),n[t]=e[t]):n[t]=a.value}return n},e}();function s(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return c(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var t=0;return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function d(e){return l(function e(n,r){return n.map((function(n){return n instanceof f||(Object(i.a)("string"!=typeof n,"Shader module use by name is deprecated. Import shader module '"+n+"' and use it directly."),Object(i.a)(n.name,"shader module has no name"),(n=new f(n)).dependencies=e(n.dependencies)),n}))}(e))}function l(e){var n={},r={};return v({modules:e,level:0,moduleMap:n,moduleDepth:r}),Object.keys(r).sort((function(e,n){return r[n]-r[e]})).map((function(e){return n[e]}))}function v(e){var n=e.modules,r=e.level,t=e.moduleMap,i=e.moduleDepth;if(r>=5)throw new Error("Possible loop in shader dependency graph");for(var a,o=s(n);!(a=o()).done;){var u=a.value;t[u.name]=u,(void 0===i[u.name]||i[u.name]<r)&&(i[u.name]=r)}for(var f,c=s(n);!(f=c()).done;){var d=f.value;d.dependencies&&v({modules:d.dependencies,level:r+1,moduleMap:t,moduleDepth:i})}}var _={GLSL_FRAG_DATA:["WEBGL_draw_buffers",!0],GLSL_FRAG_DEPTH:["EXT_frag_depth",!0],GLSL_DERIVATIVES:["OES_standard_derivatives",!0],GLSL_TEXTURE_LOD:["EXT_shader_texture_lod",!0]},g={};Object.keys(_).forEach((function(e){g[e]=e}));var p={};function E(e,n,r){void 0===r&&(r={});var t=_[n];if(Object(i.a)(t,n),!function(e){void 0===e&&(e={});var n="undefined"!=typeof window&&window.navigator||{},r=e.userAgent||n.userAgent||"",t=-1!==r.indexOf("MSIE "),i=-1!==r.indexOf("Trident/");return t||i}(r))return!0;if(n in p)return p[n];var a="#extension GL_"+t[0]+" : "+(r.behavior||"enable")+"\nvoid main(void) {}",o=e.createShader(e.VERTEX_SHADER);e.shaderSource(o,a),e.compileShader(o);var u=e.getShaderParameter(o,e.COMPILE_STATUS);return e.deleteShader(o),p[n]=u,u}function m(e,n){var r=_[n];Object(i.a)(r,n);var t=function(e){return"undefined"!=typeof WebGL2RenderingContext&&e instanceof WebGL2RenderingContext||Boolean(e&&2===e._version)}(e)&&r[1]||r[0],a="string"==typeof t?Boolean(e.getExtension(t)):t;return Object(i.a)(!1===a||!0===a),a}function h(e,n){return(n=Array.isArray(n)?n:[n]).every((function(n){return m(e,n)}))}var b=r("63Iv");function A(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return L(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var t=0;return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function L(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var y,D=[[/^(#version[ \t]+(100|300[ \t]+es))?[ \t]*\n/,"#version 300 es\n"],[/\btexture(2D|2DProj|Cube)Lod(EXT)?\(/g,"textureLod("],[/\btexture(2D|2DProj|Cube)(EXT)?\(/g,"texture("]],O=[].concat(D,[[/^[ \t]*attribute[ \t]+(.+;)/gm,"in $1"],[/^[ \t]*varying[ \t]+(.+;)/gm,"out $1"]]),T=[].concat(D,[[/^[ \t]*varying[ \t]+(.+;)/gm,"in $1"]]),S=[[/^#version[ \t]+300[ \t]+es/,"#version 100"],[/\btexture(2D|2DProj|Cube)Lod\(/g,"texture$1LodEXT("],[/\btexture\(/g,"texture2D("],[/\btextureLod\(/g,"texture2DLodEXT("]],R=[].concat(S,[[/^[ \t]*in[ \t]+(.+;)/gm,"attribute $1"],[/^[ \t]*out[ \t]+(.+;)/gm,"varying $1"]]),I=[].concat(S,[[/^[ \t]*in[ \t]+/gm,"varying "]]),U=/^[ \t]*out[ \t]+vec4[ \t]+(\w+)[ \t]*;\s+/m;function G(e,n,r){switch(n){case 300:return F(e,r?O:T);case 100:return r?F(e,R):function(e){var n=(e=F(e,I)).match(U);if(n){var r=n[1];e=e.replace(U,"").replace(new RegExp("\\b"+r+"\\b","g"),"gl_FragColor")}return e}(e);default:throw new Error("unknown GLSL version "+n)}}function F(e,n){for(var r,t=A(n);!(r=t()).done;){var i=r.value,a=i[0],o=i[1];e=e.replace(a,o)}return e}function w(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return j(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var t=0;return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var N="\n\n"+b.a+"\n\n",P=((y={})[t.b]="vertex",y[t.a]="fragment",y);function x(e,n){var r=n.vs,i=n.fs,a=d(n.modules||[]);return{gl:e,vs:M(e,Object.assign({},n,{source:r,type:t.b,modules:a})),fs:M(e,Object.assign({},n,{source:i,type:t.a,modules:a})),getUniforms:C(a)}}function M(e,n){var r=n.id,a=n.source,o=n.type,u=n.modules,f=n.defines,s=void 0===f?{}:f,c=n.hookFunctions,d=void 0===c?[]:c,l=n.inject,v=void 0===l?{}:l,_=n.transpileToGLSL100,p=void 0!==_&&_,m=n.prologue,A=void 0===m||m,L=n.log;Object(i.a)("string"==typeof a,"shader source must be a string");var y=o===t.b,D=a.split("\n"),O=100,T="",S=a;0===D[0].indexOf("#version ")?(O=300,T=D[0],S=D.slice(1).join("\n")):T="#version "+O;var R={};u.forEach((function(e){Object.assign(R,e.getDefines())})),Object.assign(R,s);var I=A?T+"\n"+function(e){var n=e.id,r=e.source,t=e.type;return n&&"string"==typeof n&&-1===r.indexOf("SHADER_NAME")?"\n#define SHADER_NAME "+n+"_"+P[t]+"\n\n":""}({id:r,source:a,type:o})+"\n"+function(e){var n=e.type;return"\n#define SHADER_TYPE_"+P[n].toUpperCase()+"\n"}({type:o})+"\n"+function(e){switch(function(e){var n=e.getExtension("WEBGL_debug_renderer_info"),r=e.getParameter(n&&n.UNMASKED_VENDOR_WEBGL||7936),t=e.getParameter(n&&n.UNMASKED_RENDERER_WEBGL||7937);return{gpuVendor:function(e,n){if(e.match(/NVIDIA/i)||n.match(/NVIDIA/i))return"NVIDIA";if(e.match(/INTEL/i)||n.match(/INTEL/i))return"INTEL";if(e.match(/AMD/i)||n.match(/AMD/i)||e.match(/ATI/i)||n.match(/ATI/i))return"AMD";return"UNKNOWN GPU"}(r,t),vendor:r,renderer:t,version:e.getParameter(7938),shadingLanguageVersion:e.getParameter(35724)}}(e).gpuVendor.toLowerCase()){case"nvidia":return"#define NVIDIA_GPU\n// Nvidia optimizes away the calculation necessary for emulated fp64\n#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1\n";case"intel":return"#define INTEL_GPU\n// Intel optimizes away the calculation necessary for emulated fp64\n#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1\n// Intel's built-in 'tan' function doesn't have acceptable precision\n#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1\n// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow\n#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1\n";case"amd":return"#define AMD_GPU\n";default:return"#define DEFAULT_GPU\n// Prevent driver from optimizing away the calculation necessary for emulated fp64\n#define LUMA_FP64_CODE_ELIMINATION_WORKAROUND 1\n// Intel's built-in 'tan' function doesn't have acceptable precision\n#define LUMA_FP32_TAN_PRECISION_WORKAROUND 1\n// Intel GPU doesn't have full 32 bits precision in same cases, causes overflow\n#define LUMA_FP64_HIGH_BITS_OVERFLOW_WORKAROUND 1\n"}}(e)+"\n"+function(e,n,r){var t="#if (__VERSION__ > 120)\n\n# define FEATURE_GLSL_DERIVATIVES\n# define FEATURE_GLSL_DRAW_BUFFERS\n# define FEATURE_GLSL_FRAG_DEPTH\n# define FEATURE_GLSL_TEXTURE_LOD\n\n// DEPRECATED FLAGS, remove in v9\n# define FRAG_DEPTH\n# define DERIVATIVES\n# define DRAW_BUFFERS\n# define TEXTURE_LOD\n\n#endif // __VERSION\n";return h(e,g.GLSL_FRAG_DEPTH)&&(t+="\n// FRAG_DEPTH => gl_FragDepth is available\n#ifdef GL_EXT_frag_depth\n#extension GL_EXT_frag_depth : enable\n# define FEATURE_GLSL_FRAG_DEPTH\n# define FRAG_DEPTH\n# define gl_FragDepth gl_FragDepthEXT\n#endif\n"),h(e,g.GLSL_DERIVATIVES)&&E(e,g.GLSL_DERIVATIVES)&&(t+="\n// DERIVATIVES => dxdF, dxdY and fwidth are available\n#ifdef GL_OES_standard_derivatives\n#extension GL_OES_standard_derivatives : enable\n# define FEATURE_GLSL_DERIVATIVES\n# define DERIVATIVES\n#endif\n"),h(e,g.GLSL_FRAG_DATA)&&E(e,g.GLSL_FRAG_DATA,{behavior:"require"})&&(t+="\n// DRAW_BUFFERS => gl_FragData[] is available\n#ifdef GL_EXT_draw_buffers\n#extension GL_EXT_draw_buffers : require\n#define FEATURE_GLSL_DRAW_BUFFERS\n#define DRAW_BUFFERS\n#endif\n"),h(e,g.GLSL_TEXTURE_LOD)&&(t+="// TEXTURE_LOD => texture2DLod etc are available\n#ifdef GL_EXT_shader_texture_lod\n#extension GL_EXT_shader_texture_lod : enable\n\n# define FEATURE_GLSL_TEXTURE_LOD\n# define TEXTURE_LOD\n\n#endif\n"),t}(e)+"\n"+function(e){void 0===e&&(e={});var n=0,r="";for(var t in e){0===n&&(r+="\n// APPLICATION DEFINES\n"),n++;var i=e[t];(i||Number.isFinite(i))&&(r+="#define "+t.toUpperCase()+" "+e[t]+"\n")}0===n&&(r+="\n");return r}(R)+"\n"+(y?"":"precision highp float;\n\n")+"\n":T+"\n",U=function(e){var n={vs:{},fs:{}};return e.forEach((function(e){var r;"string"!=typeof e?e=(r=e).hook:r={};var t=(e=e.trim()).split(":"),i=t[0],a=t[1],o=e.replace(/\(.+/,"");n[i][o]=Object.assign(r,{signature:a})})),n}(d),F={},j={},x={};for(var M in v){var C="string"==typeof v[M]?{injection:v[M],order:0}:v[M],V=M.match(/^(v|f)s:(#)?([\w-]+)$/);if(V){var k=V[2],W=V[3];k?"decl"===W?j[M]=[C]:x[M]=[C]:F[M]=[C]}else x[M]=[C]}for(var X,H=w(u);!(X=H()).done;){var B=X.value;L&&B.checkDeprecations(S,L),I+=B.getModuleSource(o,O);var $=B.injections[o];for(var K in $){var z=K.match(/^(v|f)s:#([\w-]+)$/);if(z){var J="decl"===z[2]?j:x;J[K]=J[K]||[],J[K].push($[K])}else F[K]=F[K]||[],F[K].push($[K])}}return I+=N,I=Object(b.c)(I,o,j),I+=function(e,n){var r="";for(var t in e){var i=e[t];if(r+="void "+i.signature+" {\n",i.header&&(r+="  "+i.header),n[t]){var a=n[t];a.sort((function(e,n){return e.order-n.order}));for(var o,u=w(a);!(o=u()).done;){var f=o.value;r+="  "+f.injection+"\n"}}i.footer&&(r+="  "+i.footer),r+="}\n"}return r}(U[o],F),I+=S,I=G(I=Object(b.c)(I,o,x),p?100:O,y)}function C(e){return function(n){for(var r,t={},i=w(e);!(r=i()).done;){var a=r.value.getUniforms(n,t);Object.assign(t,a)}return t}}}}]);