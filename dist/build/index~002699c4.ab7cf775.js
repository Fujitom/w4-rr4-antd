!function(i){function e(e){for(var n,t,a=e[0],r=e[1],l=e[2],s=0,o=[];s<a.length;s++)t=a[s],u[t]&&o.push(u[t][0]),u[t]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(i[n]=r[n]);for(d&&d(e);o.length;)o.shift()();return b.push.apply(b,l||[]),c()}function c(){for(var e,n=0;n<b.length;n++){for(var t=b[n],a=!0,r=1;r<t.length;r++){var l=t[r];0!==u[l]&&(a=!1)}a&&(b.splice(n--,1),e=m(m.s=t[0]))}return e}var t={},u={12:0},b=[];function m(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return i[e].call(n.exports,n,n.exports,m),n.l=!0,n.exports}m.e=function(l){var e=[],t=u[l];if(0!==t)if(t)e.push(t[2]);else{var n=new Promise(function(e,n){t=u[l]=[e,n]});e.push(t[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,m.nc&&s.setAttribute("nonce",m.nc),s.src=function(e){return m.p+""+({}[e]||e)+".chunk."+{0:"e887a5bb",1:"61255089",2:"e000d54c",3:"5d7ca40c",4:"9ee37d70",13:"8c1c3742"}[e]+".js"}(l),a=function(e){s.onerror=s.onload=null,clearTimeout(o);var n=u[l];if(0!==n){if(n){var t=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,r=new Error("Loading chunk "+l+" failed.\n("+t+": "+a+")");r.type=t,r.request=a,n[1](r)}u[l]=void 0}};var o=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},m.m=i,m.c=t,m.d=function(e,n,t){m.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},m.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},m.t=function(n,e){if(1&e&&(n=m(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(m.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)m.d(t,a,function(e){return n[e]}.bind(null,a));return t},m.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return m.d(n,"a",n),n},m.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},m.p="./build/",m.oe=function(e){throw console.error(e),e};var n=window.webpackJsonp=window.webpackJsonp||[],a=n.push.bind(n);n.push=e,n=n.slice();for(var r=0;r<n.length;r++)e(n[r]);var d=a;b.push([378,8,5,11,9,10,6,7]),c()}({114:function(e,n,t){e.exports=t(44)(54)},18:function(e,n,t){e.exports=t(44)(45)},2:function(e,n,t){e.exports=t(44)(1)},225:function(e,n,t){e.exports=t(44)(59)},378:function(e,n,t){t(379),e.exports=t(685)},44:function(e,n){e.exports=_dll_vendor_06da7c4c01d28a0f5c0e},620:function(e,n,t){e.exports=t(44)(2)},636:function(e,n,t){var a={"./af":229,"./af.js":229,"./ar":230,"./ar-dz":231,"./ar-dz.js":231,"./ar-kw":232,"./ar-kw.js":232,"./ar-ly":233,"./ar-ly.js":233,"./ar-ma":234,"./ar-ma.js":234,"./ar-sa":235,"./ar-sa.js":235,"./ar-tn":236,"./ar-tn.js":236,"./ar.js":230,"./az":237,"./az.js":237,"./be":238,"./be.js":238,"./bg":239,"./bg.js":239,"./bm":240,"./bm.js":240,"./bn":241,"./bn.js":241,"./bo":242,"./bo.js":242,"./br":243,"./br.js":243,"./bs":244,"./bs.js":244,"./ca":245,"./ca.js":245,"./cs":246,"./cs.js":246,"./cv":247,"./cv.js":247,"./cy":248,"./cy.js":248,"./da":249,"./da.js":249,"./de":250,"./de-at":251,"./de-at.js":251,"./de-ch":252,"./de-ch.js":252,"./de.js":250,"./dv":253,"./dv.js":253,"./el":254,"./el.js":254,"./en-SG":255,"./en-SG.js":255,"./en-au":256,"./en-au.js":256,"./en-ca":257,"./en-ca.js":257,"./en-gb":258,"./en-gb.js":258,"./en-ie":259,"./en-ie.js":259,"./en-il":260,"./en-il.js":260,"./en-nz":261,"./en-nz.js":261,"./eo":262,"./eo.js":262,"./es":263,"./es-do":264,"./es-do.js":264,"./es-us":265,"./es-us.js":265,"./es.js":263,"./et":266,"./et.js":266,"./eu":267,"./eu.js":267,"./fa":268,"./fa.js":268,"./fi":269,"./fi.js":269,"./fo":270,"./fo.js":270,"./fr":271,"./fr-ca":272,"./fr-ca.js":272,"./fr-ch":273,"./fr-ch.js":273,"./fr.js":271,"./fy":274,"./fy.js":274,"./ga":275,"./ga.js":275,"./gd":276,"./gd.js":276,"./gl":277,"./gl.js":277,"./gom-latn":278,"./gom-latn.js":278,"./gu":279,"./gu.js":279,"./he":280,"./he.js":280,"./hi":281,"./hi.js":281,"./hr":282,"./hr.js":282,"./hu":283,"./hu.js":283,"./hy-am":284,"./hy-am.js":284,"./id":285,"./id.js":285,"./is":286,"./is.js":286,"./it":287,"./it-ch":288,"./it-ch.js":288,"./it.js":287,"./ja":289,"./ja.js":289,"./jv":290,"./jv.js":290,"./ka":291,"./ka.js":291,"./kk":292,"./kk.js":292,"./km":293,"./km.js":293,"./kn":294,"./kn.js":294,"./ko":295,"./ko.js":295,"./ku":296,"./ku.js":296,"./ky":297,"./ky.js":297,"./lb":298,"./lb.js":298,"./lo":299,"./lo.js":299,"./lt":300,"./lt.js":300,"./lv":301,"./lv.js":301,"./me":302,"./me.js":302,"./mi":303,"./mi.js":303,"./mk":304,"./mk.js":304,"./ml":305,"./ml.js":305,"./mn":306,"./mn.js":306,"./mr":307,"./mr.js":307,"./ms":308,"./ms-my":309,"./ms-my.js":309,"./ms.js":308,"./mt":310,"./mt.js":310,"./my":311,"./my.js":311,"./nb":312,"./nb.js":312,"./ne":313,"./ne.js":313,"./nl":314,"./nl-be":315,"./nl-be.js":315,"./nl.js":314,"./nn":316,"./nn.js":316,"./pa-in":317,"./pa-in.js":317,"./pl":318,"./pl.js":318,"./pt":319,"./pt-br":320,"./pt-br.js":320,"./pt.js":319,"./ro":321,"./ro.js":321,"./ru":322,"./ru.js":322,"./sd":323,"./sd.js":323,"./se":324,"./se.js":324,"./si":325,"./si.js":325,"./sk":326,"./sk.js":326,"./sl":327,"./sl.js":327,"./sq":328,"./sq.js":328,"./sr":329,"./sr-cyrl":330,"./sr-cyrl.js":330,"./sr.js":329,"./ss":331,"./ss.js":331,"./sv":332,"./sv.js":332,"./sw":333,"./sw.js":333,"./ta":334,"./ta.js":334,"./te":335,"./te.js":335,"./tet":336,"./tet.js":336,"./tg":337,"./tg.js":337,"./th":338,"./th.js":338,"./tl-ph":339,"./tl-ph.js":339,"./tlh":340,"./tlh.js":340,"./tr":341,"./tr.js":341,"./tzl":342,"./tzl.js":342,"./tzm":343,"./tzm-latn":344,"./tzm-latn.js":344,"./tzm.js":343,"./ug-cn":345,"./ug-cn.js":345,"./uk":346,"./uk.js":346,"./ur":347,"./ur.js":347,"./uz":348,"./uz-latn":349,"./uz-latn.js":349,"./uz.js":348,"./vi":350,"./vi.js":350,"./x-pseudo":351,"./x-pseudo.js":351,"./yo":352,"./yo.js":352,"./zh-cn":353,"./zh-cn.js":353,"./zh-hk":354,"./zh-hk.js":354,"./zh-tw":355,"./zh-tw.js":355};function r(e){var n=l(e);return t(n)}function l(e){if(t.o(a,e))return a[e];var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}r.keys=function(){return Object.keys(a)},r.resolve=l,(e.exports=r).id=636},640:function(e,n,t){e.exports=t(44)(23)},660:function(e,n,t){e.exports=t(44)(55)},661:function(e,n,t){var a=t(662);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(40)(a,r);a.locals&&(e.exports=a.locals)},662:function(e,n,t){(e.exports=t(35)(!1)).push([e.i,"#global-header {\n  height: 80px;\n  line-height: 80px;\n  padding: 0 45px;\n  background: #203A71;\n}\n",""])},680:function(e,n,t){var a=t(681);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(40)(a,r);a.locals&&(e.exports=a.locals)},681:function(e,n,t){(e.exports=t(35)(!1)).push([e.i,"#global-sidebar {\n  float: left;\n  width: 200px;\n  height: 100vh;\n  background: #203A71;\n}\n#global-sidebar button {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  margin: 0 auto;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #fff;\n}\n#global-sidebar li {\n  list-style: none;\n  height: 38px;\n  line-height: 38px;\n  text-align: left;\n  color: #fff;\n  font-size: 16px;\n  padding: 0 10px;\n}\n#global-sidebar .hide {\n  display: none;\n}\n#global-sidebar .sidebar-logo-wrapper {\n  position: absolute;\n  left: 0;\n  bottom: 20px;\n  width: 100%;\n  height: 50px;\n  background: #203a71;\n}\n#global-sidebar .sidebar-logo-wrapper .sidebar-logo {\n  display: block;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 32px;\n  text-align: center;\n  line-height: 32px;\n  color: #B4D9FF;\n  font-size: 32px;\n  text-indent: 15px;\n}\n#global-sidebar .ant-menu-item-selected {\n  background: #27437b;\n}\n#global-sidebar .ant-menu-item-selected .global-sidebar-subtitle {\n  color: #fff;\n}\n#global-sidebar .ant-menu-sub {\n  box-shadow: none;\n}\n#global-sidebar .ant-menu-submenu-arrow:after,\n#global-sidebar .ant-menu-submenu-arrow:before {\n  background: #B4D9FF;\n}\n#global-sidebar .global-sidebar-ul,\n#global-sidebar .ant-menu-sub {\n  background: #203A71;\n}\n#global-sidebar .ant-menu-submenu-title .global-sidebar-title {\n  height: 20px;\n  vertical-align: top;\n  padding: 10px 0;\n  color: #B4D9FF;\n}\n#global-sidebar .ant-menu-submenu-title .global-sidebar-title i {\n  display: inline-block;\n  font-size: 19px;\n  vertical-align: top;\n}\n#global-sidebar .ant-menu-submenu-title .global-sidebar-title span {\n  display: inline-block;\n  padding: 0 0 0 8px;\n  font-size: 15px;\n  line-height: 38px;\n  vertical-align: top;\n}\n#global-sidebar .global-sidebar-subtitle {\n  display: inline-block;\n  height: 100%;\n  overflow: hidden;\n  color: #B4D9FF;\n}\n#global-sidebar .global-sidebar-subtitle i {\n  display: inline-block;\n  padding: 1px 8px 0 0;\n  font-size: 19px;\n  vertical-align: top;\n}\n#global-sidebar .global-sidebar-subtitle span {\n  display: inline-block;\n  font-size: 14px;\n  vertical-align: top;\n}\n/* 引入 icon class 文件 */\n/* 关于这个引用路径，有一个坑，ant.design 我用的dva，默认资源路径为 /public 所以这个引用的实际目录是  /public/fonts/iconfont/iconfont.css */\n/* 设置使用字体的优先级 anticon-user 高 */\n",""])},685:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t.n(a),l=t(18),s=t.n(l),o=(t(206),t(688)),i=(t(687),t(684)),c=t(652),u=t.n(c),b=(t(145),t(79)),m=t(80),d=t(83),j=t(81),p=t(163),f=t(84),g=t(371),h=t(114),k=(r.a.Component,function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(d.a)(this,Object(j.a)(t).call(this,e))).main=r.a.createRef(),n.state={error:null,errorInfo:null},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e,errorInfo:n})}},{key:"render",value:function(){return this.state.errorInfo?r.a.createElement("section",null,"抱歉，代码错误",r.a.createElement("h2",null,String(this.state.error)),r.a.createElement("div",null,this.state.errorInfo.componentStack)):this.props.children}}]),t}(r.a.Component));t(660),t(661),t.e(13).then(t.t.bind(null,698,7));var y=function(e){var n=e.headerInfo,t=n.projectName,a=n.projectLogo;return r.a.createElement("header",{className:"global-header",id:"global-header"},r.a.createElement("a",null,r.a.createElement("img",{src:a,onError:function(e){return e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAoCAYAAAAMjY9+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMTFBMUY2OTYzMkYxMUU1OTFDMkIyODc4QjJEMTlFMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMTFBMUY2QTYzMkYxMUU1OTFDMkIyODc4QjJEMTlFMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUxMUExRjY3NjMyRjExRTU5MUMyQjI4NzhCMkQxOUUxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUxMUExRjY4NjMyRjExRTU5MUMyQjI4NzhCMkQxOUUxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KPDKkAAADTRJREFUeNrsW3l0FeUV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"}}),t))},v=(t(177),t(690),t(686));t(680),v.a.SubMenu;function S(e){return r.a.createElement("button",{className:"global-folder",id:"global-folder"},"展开")}function x(e){return e.routes.map(function(e,n){return r.a.createElement("li",{key:e.url},r.a.createElement(h.Link,{to:"/".concat(e.url)},e.name||""))})}var E=function(e){return r.a.createElement("aside",{className:"global-sidebar",id:"global-sidebar"},r.a.createElement(S,null),r.a.createElement(x,{routes:e.routes}))},A=(window.history,Object(a.lazy)(function(){return t.e(2).then(t.bind(null,693))})),w=Object(a.lazy)(function(){return t.e(3).then(t.bind(null,694))}),O=Object(a.lazy)(function(){return t.e(0).then(t.bind(null,695))}),z=Object(a.lazy)(function(){return t.e(4).then(t.bind(null,696))}),M=r.a.lazy(function(){return t.e(1).then(t.bind(null,697))});function R(){return r.a.createElement("div",null,r.a.createElement("span",null,"So...so..lazy.."),r.a.createElement(M,null))}var Y=function(e){function t(e){var n;return Object(b.a)(this,t),n=Object(d.a)(this,Object(j.a)(t).call(this,e)),Object(g.a)(Object(p.a)(n),"onChange",function(e,n){console.log(e,n,"打印时间选择")}),n.main=r.a.createRef(),n.state={showArticle:!1,projectName:"书与月光",projectLogo:"",routes:[{name:"one",url:"one"},{name:"two",url:"two"},{name:"user",url:"user"},{name:"article",url:"article"}]},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,n=u.a.mark(l);setTimeout(function(){e.setState({showArticle:!0})},3e3),console.log(this.main.current,"mainRef ref object");var t,a,r=(t=[3,2,1],a=0,{next:function(){var e=a>=t.length,n=e?void 0:t[a++];return{value:n,done:e}}});function l(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,1;case 2:return e.next=4,2;case 4:return e.next=6,3;case 6:case"end":return e.stop()}},n)}window.iterator=r,console.log(r.next(),"迭代器");var s=l();console.log(s.next().value),console.log(s.next().value),console.log(s.next().value)}},{key:"render",value:function(){var e=this.state,n={projectName:e.projectName,projectLogo:e.projectLogo};return r.a.createElement(h.HashRouter,{basename:"manage"},r.a.createElement("main",{className:"main",ref:this.main},r.a.createElement(y,{headerInfo:n}),r.a.createElement(E,{routes:this.state.routes}),r.a.createElement(i.a,{onChange:this.onChange}),r.a.createElement(o.a,null,"Antd Button"),r.a.createElement("aside",{ref:"ajaxData"}),r.a.createElement(k,null,r.a.createElement(a.Suspense,{fallback:!1},r.a.createElement(h.Route,{path:"/article",component:A}),r.a.createElement(h.Route,{path:"/user",component:z}),r.a.createElement(h.Route,{path:"/one",component:w}),r.a.createElement(h.Route,{path:"/two",component:O}))),r.a.createElement(a.Suspense,{fallback:!1},r.a.createElement("div",null,r.a.createElement(a.Suspense,{fallback:"Sorry for our lazinessSorry"},r.a.createElement("span",null,"Cast"),r.a.createElement(R,null)))),r.a.createElement("section",{className:"marquee-wrapper"},r.a.createElement("aside",{className:"marquee-area"},r.a.createElement("a",{className:"marquee-item"},"111111"),r.a.createElement("a",{className:"marquee-item"},"22222"),r.a.createElement("a",{className:"marquee-item"},"3333"),r.a.createElement("a",{className:"marquee-item"},"4444"),r.a.createElement("a",{className:"marquee-item"},"5555")))))}}]),t}(r.a.Component);Object(g.a)(Y,"state",{screenWidth:null,showArticle:!1}),Object(g.a)(Y,"defaultProps",{onLoading:!0});var G=Y;s.a.render(r.a.createElement(G,null),document.getElementById("root"))},93:function(e,n,t){e.exports=t(44)(49)}});