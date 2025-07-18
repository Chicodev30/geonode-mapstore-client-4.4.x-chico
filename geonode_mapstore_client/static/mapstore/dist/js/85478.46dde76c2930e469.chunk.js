"use strict";(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[85478],{389912:(e,t,n)=>{n.d(t,{Z:()=>c});var r,o=n(124852),i=n(699022);const c=function(e){var t=e.map,n=e.onBoxEnd,c=e.status;return(0,o.useEffect)(function(){"start"===c?(r=new i.Z({condition:function(e){return e.originalEvent.altKey}}),t.addInteraction(r)):"end"===c&&t.removeInteraction(r)},[c]),(0,o.useEffect)(function(){r&&r.on("boxend",function(e){n({boxExtent:r.getGeometry().getExtent(),modifiers:{ctrl:e.mapBrowserEvent.originalEvent.ctrlKey,metaKey:e.mapBrowserEvent.originalEvent.metaKey}})})},[c]),null}},126105:(e,t,n)=>{n.d(t,{Z:()=>P});var r=n(124852),o=n.n(r),i=n(180307),c=n.n(i),a=n(45697),u=n.n(a),p=n(843223),s=n(747037),l=n.n(s),f=n(925064),y=n(176343);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,O(r.key),r)}}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(m=function(){return!!e})()}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function w(e,t,n){return(t=O(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){var t=function(e){if("object"!=d(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==d(t)?t:t+""}var P=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return w(e=function(e,t,n){return t=h(t),function(e,t){if(t&&("object"==d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,m()?Reflect.construct(t,n||[],h(e).constructor):t.apply(e,n))}(this,t,[].concat(r)),"onPopupClose",function(t){e.props.onPopupClose(t)}),w(e,"renderPopups",function(){return e.preparePopups().map(function(t){var n,r=t.popup,i=t.id,a=t.component,u=t.content,p=t.props,s=t.containerStyle,d=r.getElement(),b=l()(a)&&y.default[a]||a;return b?n=o().isValidElement(b)&&b||o().createElement(b,p):u&&(n=f.FP(u)?o().createElement("div",{dangerouslySetInnerHTML:{__html:u}}):u),d&&c().createPortal(o().createElement("div",{className:"map-popup-ol",key:i,onMouseUp:e.convertToClick},o().createElement("div",{className:"ol-popup-content-wrapper"},o().createElement("div",{className:"ol-popup-content",style:s},n)),o().createElement("div",{className:"ol-popup-closer",onClick:function(){return e.onPopupClose(i)}},"x")),d)})}),w(e,"update",function(){(e._popups||[]).map(function(e){var t=e.popup;t.setElement(t.getElement())})}),w(e,"convertToClick",function(e){var t=new MouseEvent("click",{bubbles:!0});t.stopPropagation=function(){},e.target.dispatchEvent(t)}),w(e,"preparePopups",function(){var t=e.props,n=t.popups,r=void 0===n?[]:n,o=t.map,i=o.getSize();return(e._popups||[]).forEach(function(e){var t=e.popup,n=e.observer;n&&n.disconnect(),t&&o.removeOverlay(t)}),e._popups=r.map(function(e){var t=Math.round(.9*i[0])-40,n=Math.round(.9*i[1])-40,r=e.id,c=e.position.coordinates,a=e.className,u=e.maxWidth,s=void 0===u?t:u,l=e.maxHeight,y=void 0===l?n:l,d=e.autoPan,v=void 0!==d&&d,m=e.autoPanMargin,h=void 0===m?20:m,g=e.offset,O=void 0===g?[0,0]:g,P=e.autoPanAnimation,j=void 0===P?{duration:200}:P,S=s>t?t:s,E=y>n?n:y,_=f.fH(r,a),I=new p.Z({id:r,element:_,autoPan:v,offset:O,autoPanMargin:h,autoPanAnimation:j,positioning:"bottom-center",className:"ol-overlay-container ol-unselectable",position:c});o.addOverlay(I);var k=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=new MutationObserver(function(){e.getMap().getSize()&&(e.setPosition(void 0),e.setPosition(n.coordinates))});return r.observe(t,{attributes:!0,childList:!0,subtree:!0}),r}(I,_,{coordinates:c});return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach(function(t){w(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({popup:I,observer:k,containerStyle:{maxWidth:S,maxHeight:E}},e)}),e._popups}),w(e,"stopPropagationOnPointerMove",function(e){e.stopPropagation()}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(t,e),n=t,(r=[{key:"UNSAFE_componentWillMount",value:function(){this.props.map&&this.props.map.getOverlayContainerStopEvent().addEventListener("pointermove",this.stopPropagationOnPointerMove)}},{key:"shouldComponentUpdate",value:function(e){return e.popups!==this.props.popups}},{key:"componentWillUnmount",value:function(){this.props.map&&this.props.map.getOverlayContainerStopEvent().removeEventListener("pointermove",this.stopPropagationOnPointerMove)}},{key:"render",value:function(){return o().createElement("div",null,this.renderPopups())}}])&&v(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(o().Component);w(P,"propTypes",{map:u().object,popups:u().arrayOf(u().object),onPopupClose:u().func}),w(P,"defaultProps",{popups:[],onPopupClose:function(){}})},176343:(e,t,n)=>{n.r(t),n.d(t,{IDENTIFY_POPUP:()=>j,default:()=>S});var r=n(124852),o=n.n(r),i=n(173014),c=n(11196),a=n(867076),u=n(171703),p=n(22222),s=n(307877),l=n(921914),f=n(299864),y=n(701469),d=n.n(y),b=n(352353),v=n.n(b),m=n(979870),h=n(800827),g=n(568990),w=(0,a.compose)((0,u.connect)((0,p.P1)(s.Qf,function(e){return{index:e}}),{setIndex:l.oO}),(0,a.defaultProps)({index:0,responses:[]})),O=(0,p.P1)([s.q7,s.o9,s.OK,s.us,s.x0,h.hp,s.vR,g.V],function(e,t,n,r,o,i,c,a){return{responses:e,validResponses:t,requests:n,format:r,showEmptyMessageGFI:o,missingResponses:(n||[]).length-(e||[]).length,renderValidOnly:i,loaded:c,hidePopupIfNoResults:a}});const P=(0,a.compose)((0,u.connect)(O),(0,a.defaultProps)({responses:[],container:function(e){var t=e.index,n=e.children;return o().createElement(o().Fragment,null,d()(n)&&n[t]||n)},header:m.Z}),w,c.Yy,c.mI,(0,i.Z)(function(e){var t=e.loaded;return v()(t)}))(f.Z);var j="identify";const S={identify:P}},385478:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var r=n(900263),o=n(145697),i=n(130072),c=n(722404),a=n(809056),u=n(706909),p=n(45697),s=n.n(p),l=n(124852),f=n.n(l),y=n(907517),d=n(198683),b=n(258958),v=n(351345),m=n(447539),h=n(130283);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach(function(t){_(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,I(r.key),r)}}function j(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(j=function(){return!!e})()}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function _(e,t,n){return(t=I(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e){var t=function(e){if("object"!=g(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==g(t)?t:t+""}var k=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return _(e=function(e,t,n){return t=S(t),function(e,t){if(t&&("object"==g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,j()?Reflect.construct(t,n||[],S(e).constructor):t.apply(e,n))}(this,t,[].concat(r)),"getLayer",function(){var t;return e.props.map.getLayers().forEach(function(n){e.layersFilter(n)&&(t=n)},e),t}),_(e,"setSelectInteraction",function(){e._selectInteraction.getActive()||e._selectInteraction.setActive(!0)}),_(e,"createSelectInteraction",function(){e.createStyle(),e._selectInteraction=new y.Z({layers:e.layersFilter,style:e._style,toggleCondition:d.QC}),e._selectInteraction.on("select",e.selectionChange,e),e.props.map.addInteraction(e._selectInteraction)}),_(e,"selectionChange",function(){var t=[];e._selectInteraction.getFeatures().forEach(function(e){t.push(e.getId())}),e.props.updateHighlighted(t,"")}),_(e,"cleanSupport",function(){e._selectInteraction&&e._selectInteraction.getActive()&&(e._selectInteraction.getFeatures().clear(),e.props.updateHighlighted([],""),e._selectInteraction.setActive(!1))}),_(e,"layersFilter",function(t){return e.props.layer&&t.get("msId")===e.props.layer}),_(e,"createStyle",function(){var t=e.props.selectedStyle,n={stroke:new b.Z(t.stroke?t.stroke:{color:"blue",width:1}),fill:new v.Z(t.fill?t.fill:{color:"blue"})};"Point"===t.type&&(n={image:new h.Z(O(O({},n),{},{radius:t.radius||5}))}),e._style=new m.ZP(n)}),_(e,"highlightFeatures",function(t){var n=e.getLayer(),r=e._selectInteraction.getFeatures();r.clear(),n&&n.getSource().getFeatures().map(function(e){-1!==t.indexOf(e.getId())&&r.push(e)},e)}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.createSelectInteraction(),"enabled"===this.props.status?this._selectInteraction.setActive(!0):this._selectInteraction.setActive(!1),this.props.features&&this.highlightFeatures(this.props.features)}},{key:"shouldComponentUpdate",value:function(e){var t=this.props;return e.status!==t.status||e.layer!==t.layer||"update"===e.status&&e.features.toString()!==t.features.toString()}},{key:"UNSAFE_componentWillUpdate",value:function(e){switch(e.status){case"enabled":this.setSelectInteraction(e);break;case"disabled":this.cleanSupport();break;case"update":this.highlightFeatures(e.features);break;default:return}}},{key:"componentWillUnmount",value:function(){this._selectInteraction&&(this.cleanSupport(),this._selectInteraction.un("select",this.selectionChange,this),this.props.map.removeInteraction(this._selectInteraction),this._selectInteraction=null,this._style=null)}},{key:"render",value:function(){return null}}])&&P(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(f().Component);_(k,"propTypes",{map:s().object,layer:s().string.isRequired,status:s().oneOf(["disabled","enabled","update"]),updateHighlighted:s().func,selectedStyle:s().object,features:s().array}),_(k,"contextTypes",{messages:s().object}),_(k,"defaultProps",{status:"disabled",updateHighlighted:function(){},selectedStyle:{type:"Point",radius:12,stroke:{width:4,color:"yellow"},fill:{color:"red"}}});var Z=n(922556),T=n(191736),C=n(435010),F=n(113522);function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,N(r.key),r)}}function A(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(A=function(){return!!e})()}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}function M(e,t){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},M(e,t)}function R(e,t,n){return(t=N(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e){var t=function(e){if("object"!=D(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==D(t)?t:t+""}var B=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return R(e=function(e,t,n){return t=L(t),function(e,t){if(t&&("object"==D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,A()?Reflect.construct(t,n||[],L(e).constructor):t.apply(e,n))}(this,t,[].concat(r)),"addDrawInteraction",function(t){e.drawInteraction&&e.removeDrawInteraction();var n=new Z.Z,r=new T.Z({source:n,zIndex:1e6,style:new m.ZP({fill:new v.Z({color:"rgba(255, 255, 255, 0.2)"}),stroke:new b.Z({color:"#ffcc33",width:2}),image:new h.Z({radius:7,fill:new v.Z({color:"#ffcc33"})})})});e.props.map.addLayer(r);var o=new C.ZP({source:n,type:t.selection.geomType,style:new m.ZP({fill:new v.Z({color:"rgba(255, 255, 255, 0.2)"}),stroke:new b.Z({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new h.Z({radius:5,stroke:new b.Z({color:"rgba(0, 0, 0, 0.7)"}),fill:new v.Z({color:"rgba(255, 255, 255, 0.2)"})})})});o.on("drawstart",function(t){e.sketchFeature=t.feature,n.clear()}),o.on("drawend",function(){e.updateSelectionState()}),e.props.map.addInteraction(o),e.drawInteraction=o,e.selectionLayer=r,e.setDoubleClickZoomEnabled(!1)}),R(e,"removeDrawInteraction",function(){null!==e.drawInteraction&&(e.props.map.removeInteraction(e.drawInteraction),e.drawInteraction=null,e.props.map.removeLayer(e.selectionLayer),e.sketchFeature=null,setTimeout(function(){return e.setDoubleClickZoomEnabled(!0)},251))}),R(e,"updateSelectionState",function(){if(e.sketchFeature){var t=e.sketchFeature.getGeometry().getCoordinates(),n={geomType:e.props.selection.geomType,point:"Point"===e.props.selection.geomType?[t[0],t[1]]:null,line:"LineString"===e.props.selection.geomType?t.map(function(e){return[e[0],e[1]]}):null,polygon:"Polygon"===e.props.selection.geomType?e.sketchFeature.getGeometry().getLinearRing(0).getCoordinates().map(function(e){return[e[0],e[1]]}):null};e.props.changeSelectionState(n)}}),R(e,"setDoubleClickZoomEnabled",function(t){for(var n=e.props.map.getInteractions(),r=0;r<n.getLength();r++){var o=n.item(r);if(o instanceof F.Z){o.setActive(t);break}}}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&M(e,t)}(t,e),n=t,(r=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.selection.geomType&&e.selection.geomType!==this.props.selection.geomType&&this.addDrawInteraction(e),e.selection.geomType||this.removeDrawInteraction()}},{key:"render",value:function(){return null}}])&&x(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(f().Component);R(B,"propTypes",{map:s().object,projection:s().string,selection:s().object,changeSelectionState:s().func}),R(B,"defaultProps",{selection:{}});var H=n(126105),U=n(389912);const W={LMap:r.Z,Layer:o.Z,Feature:i.Z,Overview:c.Z,ScaleBar:a.Z,DrawSupport:u.Z,HighlightFeatureSupport:k,SelectionSupport:B,PopupSupport:H.Z,BoxSelectionSupport:U.Z}},925064:(e,t,n)=>{n.d(t,{fH:()=>i,FP:()=>c,R3:()=>a});var r=n(455877),o=n.n(r),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o()(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ms-map-popup",n=document.createElement("div");return n.setAttribute("id",e+"-map-popup"),n.setAttribute("class",t),n},c=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").startsWith("<")},a=function(e,t){if(!t)return e;if(t instanceof Node){var n=document.createDocumentFragment();n.appendChild(t),e.appendChild(n)}else c(t)?e.innerHTML=t:e.append(document.createTextNode(String(t)));return e}}}]);