(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4369)}])},8953:function(n,e,t){"use strict";t.d(e,{Z:function(){return b}});var r=t(5893),i=(t(7294),t(1496)),o=t(1796),a=t(2293),c=t(7357),s=t(155),u=t(1664),l=t(5861),f=t(5623),d=t(2712),h=t(2761);function p(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var m=(0,i.ZP)("div")((function(n){var e=n.theme;return p({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:(0,o.Fq)(e.palette.common.white,.15),"&:hover":{backgroundColor:(0,o.Fq)(e.palette.common.white,.25)},marginLeft:0,width:"80%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"})})),x=(0,i.ZP)("div")((function(n){return{padding:n.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),g=(0,i.ZP)(f.ZP)((function(n){var e=n.theme;return{color:"inherit","& .MuiInputBase-input":p({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),")"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function b(){return(0,r.jsx)(c.Z,{sx:{flexGrow:1},children:(0,r.jsx)(a.Z,{position:"static",sx:{backgroundColor:"#FF0000"},children:(0,r.jsxs)(s.Z,{sx:{justifyContent:"space-between"},children:[(0,r.jsx)(u.default,{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsxs)(c.Z,{component:"div",marginRight:2,noWrap:!0,sx:{flexGrow:1,display:"flex",alignItems:"center"},children:[(0,r.jsx)(d.Z,{}),(0,r.jsx)(l.Z,{variant:"h6",marginLeft:1,children:"Pok\xe9dex"})]})})}),(0,r.jsxs)(m,{sx:{display:{sm:"block"},backgroundColor:"#CC0000"},children:[(0,r.jsx)(x,{children:(0,r.jsx)(h.Z,{})}),(0,r.jsx)(g,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]})]})})})}},4369:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return k}});var r=t(4051),i=t.n(r),o=t(5893),a=t(9008),c=t(1664),s=t(7160),u=t.n(s),l=t(8953),f=t(5113),d=t(6886),h=t(5861),p=t(7948),m=t(7357),x=t(1496),g=t(7294);function b(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function j(n,e,t,r,i,o,a){try{var c=n[o](a),s=c.value}catch(u){return void t(u)}c.done?e(s):Promise.resolve(s).then(r,i)}function v(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var o=n.apply(e,t);function a(n){j(o,r,i,a,c,"next",n)}function c(n){j(o,r,i,a,c,"throw",n)}a(void 0)}))}}function y(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function w(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],a=!0,c=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return b(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(){var n=w(g.useState([]),2),e=n[0],t=n[1];g.useEffect((function(){function n(){return(n=v(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");case 2:return e=n.sent,n.t0=t,n.next=6,e.json();case 6:n.t1=n.sent,(0,n.t0)(n.t1);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]);var r=(0,x.ZP)(f.Z)((function(n){var e=n.theme;return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){y(n,e,t[e])}))}return n}({backgroundColor:"dark"===e.palette.mode?"#1A2027":"#fff"},e.typography.body2,{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary})})),s=e.map((function(n){return(0,o.jsx)(d.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,o.jsx)(c.default,{href:"/pokemon/".concat(n.id),underline:"none",textDecoration:"none",children:(0,o.jsx)("a",{children:(0,o.jsxs)(r,{children:[(0,o.jsx)(h.Z,{variant:"h5",marginBottom:1,children:n.name}),(0,o.jsx)("img",{src:"https://jherr-pokemon.s3.us-west-1.amazonaws.com/".concat(n.image),alt:"",width:200,height:200})]})})})},n.name)}));return(0,o.jsxs)("div",{className:u().container,children:[(0,o.jsx)(a.default,{children:(0,o.jsx)("title",{children:"Pokemon V2"})}),(0,o.jsx)(l.Z,{}),(0,o.jsx)(p.Z,{maxWidth:"lg",children:(0,o.jsx)(m.Z,{sx:{flexGrow:1,marginTop:3},children:(0,o.jsx)(d.ZP,{container:!0,spacing:2,children:s})})})]})}},7160:function(){}},function(n){n.O(0,[766,774,888,179],(function(){return e=8581,n(n.s=e);var e}));var e=n.O();_N_E=e}]);