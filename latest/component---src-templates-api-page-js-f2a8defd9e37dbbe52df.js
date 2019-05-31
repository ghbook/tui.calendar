(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t);a(74),a(82);var n=a(7),r=a.n(n),l=a(0),s=a.n(l),i=a(4),c=a.n(i),o=a(147),p=(a(145),a(36),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.filename,a=e.lineNum,n=e.linkUrl;return s.a.createElement("span",{className:"code-info"},s.a.createElement("span",{className:"code"},s.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},t)),s.a.createElement("span",{className:"code"},s.a.createElement("a",{href:n+"#L"+a,target:"_blank",rel:"noopener noreferrer"},"line ",a)))},t}(s.a.Component));p.propTypes={data:c.a.object};var m=p,u=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getFunctionNameComponent=function(e){return e.replace(/\((.*?)\)/g,function(e,t){return"("+t.split(",").map(function(e){return'<span class="param">'+e+"</span>"})+")"})},a.render=function(){var e=this.props,t=e.deprecated,a=e.override,n=e.name,r=e.codeInfo;return s.a.createElement("h4",{className:"title"},t?s.a.createElement("span",{className:"signiture deprecated"},"deprecated"):null,a?s.a.createElement("span",{className:"signiture override"},"override"):null,s.a.createElement("span",{className:"name",dangerouslySetInnerHTML:{__html:this.getFunctionNameComponent(n)}}),s.a.createElement(m,{data:r}))},t}(s.a.Component);u.propTypes={deprecated:c.a.bool,override:c.a.bool,name:c.a.string,codeInfo:c.a.object};var d=u,E=["number","boolean","string","array","object","function","date","htmlelement","jquery","jqueryevent","any"],f=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.makeType=function(e,t){var a=function(e){var t=e.toLowerCase();return E.indexOf(t)>-1?t:"etc"}(e);return s.a.createElement("span",{key:"type-"+t,className:"type "+a},e)},a.makeTypeApplicationName=function(e,t){var a,n=this,r=e.split("."),l=r.length>2,i=r[0],c=r[1];l&&(a=r[1],c=r[2]);var o=c.split("|").map(function(e,t){return n.makeType(e,t)});return l?s.a.createElement("span",{className:"type",key:"type-"+t},i,".<",a,".<",o,">>"):s.a.createElement("span",{className:"type",key:"type-"+t},i,".<",o,">")},a.makeOptionalType=function(e){var t=this.props,a=t.defaultVal,n=t.data,r=n.prefix,l=n.isOptional,i=a?" = "+this.props.defaultVal:"";return l?s.a.createElement("span",{className:"types-wrapper"},"[ ",r,e," ]",i):s.a.createElement("span",{className:"types-wrapper"},r,e,i)},a.render=function(){var e=this,t=this.props.data.names;if(t){var a=t.map(function(t,a){return t.indexOf(".")>-1?e.makeTypeApplicationName(t):e.makeType(t,a)});return s.a.createElement("p",{className:"types"},this.makeOptionalType(a))}return null},t}(s.a.Component);f.propTypes={data:c.a.object.isRequired,defaultVal:c.a.oneOfType([c.a.bool,c.a.string])};var h=f,y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.deprecated,a=(e.override,e.name),n=e.types,r=e.codeInfo;return s.a.createElement("h4",{className:"title"},t?s.a.createElement("span",{className:"signiture deprecated"},"deprecated"):null,s.a.createElement("span",{className:"name"},a,": ")," ",s.a.createElement(h,{data:n}),s.a.createElement(m,{data:r}))},t}(s.a.Component);y.propTypes={deprecated:c.a.bool,name:c.a.string,types:c.a.object,codeInfo:c.a.object};var v=y,N=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getTableRows=function(e){return e.map(function(e,a){var n,r=e.name,l=e.types,i=e.defaultVal,c=e.description,o=e.properties;return o&&(n=o.slice()).pop(),s.a.createElement("tr",{key:"tr-"+a,className:"comment"},s.a.createElement("td",null,s.a.createElement("p",{className:"name"},r)),s.a.createElement("td",null,s.a.createElement(h,{data:l,defaultVal:i})),s.a.createElement("td",null,s.a.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:c}}),n&&s.a.createElement(t,{properties:n,isProperties:!0})))})},a.render=function(){var e=this.props,t=e.properties,a=e.isProperties,n=e.isPropertyTitle;return t.length?s.a.createElement("div",{className:a?"properties":"params-wrapper"},s.a.createElement("h5",{className:"title"},a||n?"PROPERTIES":"PARAMETERS"),s.a.createElement("table",{className:a?"":"params"},s.a.createElement("colgroup",null,s.a.createElement("col",{className:"first-column"}),s.a.createElement("col",{className:"second-column"}),s.a.createElement("col",null)),s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"Type"),s.a.createElement("th",null,"Description"))),s.a.createElement("tbody",null,this.getTableRows(t)))):null},t}(s.a.Component);N.propTypes={properties:c.a.array,isProperties:c.a.bool,isPropertyTitle:c.a.bool};var g=N,T=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.items.slice(0);return e.pop(),e.length?s.a.createElement("div",null,s.a.createElement("h5",{className:"title"},"EXAMPLES"),e.map(function(e,t){var a=e.description,n=e.code;return s.a.createElement("div",{key:"tutorial-"+t},a?s.a.createElement("p",{className:"description"},a):null,s.a.createElement("pre",{className:"codeblock tui-language-javascript"},s.a.createElement("code",{dangerouslySetInnerHTML:{__html:n}})))})):null},t}(s.a.Component);T.propTypes={items:c.a.array};var b=T,k=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("div",null,s.a.createElement("h5",{className:"title"},this.props.title),s.a.createElement("ul",{className:"items"},this.props.items.map(function(e,t){return s.a.createElement("li",{key:"list-"+t,className:"item",dangerouslySetInnerHTML:{__html:e}})})))},t}(s.a.Component);k.propTypes={title:c.a.string,items:c.a.array};var P=k,I=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getTitleComponent=function(e){var t=this.props.data,a=t.deprecated,n=t.name,r=t.types,l=t.codeInfo;return e?s.a.createElement(v,{deprecated:a,name:n,types:r,codeInfo:l}):s.a.createElement(d,{deprecated:a,name:n,codeInfo:l})},a.render=function(){var e=this.props,t=e.parentPid,a=e.data,n=e.hasProperties,r=(a.deprecated,a.name,a.description),l=(a.codeInfo,a.examples),i=a.sees,c=a.todos,o=a.augments,p=a.params,m=[i.slice(),c.slice(),o.slice(),p.slice()];return m.forEach(function(e){e.length&&e.pop()}),s.a.createElement("div",{className:"overview"},s.a.createElement("div",{className:"subsection"},s.a.createElement("dl",null,s.a.createElement("dt",{className:"subsection-term"},this.getTitleComponent("typedef"===t)),s.a.createElement("dd",{className:"subsection-description"},s.a.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:r}}),m[0].length?s.a.createElement(P,{title:"SEES",items:m[0]}):null,m[1].length?s.a.createElement(P,{title:"TODOS",items:m[1]}):null,m[2].length?s.a.createElement(P,{title:"EXTENDS",items:m[2]}):null,s.a.createElement(g,{properties:m[3],isPropertyTitle:n}),l.length?s.a.createElement(b,{items:l}):null))))},t}(s.a.Component);I.propTypes={parentPid:c.a.string,data:c.a.object,hasProperties:c.a.bool};var S=I,C=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.children;return s.a.createElement("div",{className:"subsection main-category"},s.a.createElement("h3",{className:"title"},t),a)},t}(s.a.Component);C.propTypes={title:c.a.string,children:c.a.array};var j=C,w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.pid,a=e.override,n=e.deprecated,r=e.name,l=e.types,i=e.description,c=e.codeInfo,o=e.examples;return s.a.createElement("div",{id:t,className:"definition-list"},s.a.createElement("dl",null,s.a.createElement("dt",{className:"subsection-term"},s.a.createElement("h4",{className:"title"},n?s.a.createElement("span",{className:"signiture deprecated"},"deprecated"):null,a?s.a.createElement("span",{className:"signiture override"},"override"):null,s.a.createElement("span",{className:"name"},r,": ")," ",s.a.createElement(h,{data:l}),s.a.createElement(m,{data:c}))),s.a.createElement("dd",{className:"subsection-description"},s.a.createElement("p",{className:"description"},i),s.a.createElement(b,{items:o}))))},t}(s.a.Component);w.propTypes={data:c.a.object};var _=w,O=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data;if(e){var t=e.types,a=e.description,n=a?" - "+a:"";return s.a.createElement("div",{className:"returns"},s.a.createElement("h5",{className:"title"},"RETURNS:"),s.a.createElement("span",{className:"description"},"{"," ",s.a.createElement(h,{data:t})," ","}",n))}return null},t}(s.a.Component);O.propTypes={data:c.a.object};var M=O,R=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.type,a=e.pid,n=e.override,r=e.deprecated,l=e.name,i=e.description,c=e.codeInfo,o=e.examples,p=e.sees,m=e.todos,u=e.params,E=e.returns,f=[p.slice(),m.slice(),u.slice(),E.slice()];return f.forEach(function(e){e.length&&e.pop()}),s.a.createElement("div",{id:a,className:"definition-list"},s.a.createElement("dl",null,s.a.createElement("dt",{className:"subsection-term"},s.a.createElement(d,{deprecated:r,override:n,name:l,codeInfo:c})),s.a.createElement("dd",{className:"subsection-description"},s.a.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:i}}),f[0].length?s.a.createElement(P,{title:"SEES",items:f[0]}):null,f[1].length?s.a.createElement(P,{title:"TODOS",items:f[1]}):null,s.a.createElement(g,{properties:f[2],isPropertyTitle:"event"===t}),f[3].length?s.a.createElement(M,{data:f[3][0]}):null,o.length?s.a.createElement(b,{items:o}):null)))},t}(s.a.Component);R.propTypes={data:c.a.object};var L=R;a(146);a.d(t,"query",function(){return H});var x=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.hasProperties=function(e,t){var a=!1;return"typedef"===e&&(a=!!t.types.names.find(function(e){return"object"===e})),a},a.render=function(){var e=this.props.location,t=e.pathname,a=e.hash,n=this.props.data.apiPageJson,r=n.parentPid,l=n.title,i=n.items,c=""+t.split("/").pop()+a,p=i.filter(function(e){return"overview"===e.type}),m=i.filter(function(e){return"static-property"===e.type}),u=i.filter(function(e){return"static-function"===e.type}),d=i.filter(function(e){return"instance-function"===e.type}),E=i.filter(function(e){return"event"===e.type}),f=i.filter(function(e){return"typedef"===e.type}),h=this.hasProperties(r,p[0]);return s.a.createElement(o.a,{tabIndex:0,selectedNavItemId:c},s.a.createElement("header",null,s.a.createElement("h2",{className:"title"},l)),s.a.createElement("article",null,p.length?s.a.createElement(S,{parentPid:r,data:p[0],hasProperties:h}):null,m.length?s.a.createElement(j,{title:"Static Properties"},m.map(function(e,t){return s.a.createElement(_,{key:"static-method-"+t,data:e})})):null,u.length?s.a.createElement(j,{title:"Static Methods"},u.map(function(e,t){return s.a.createElement(L,{key:"static-method-"+t,data:e})})):null,d.length?s.a.createElement(j,{title:"Instance Methods"},d.map(function(e,t){return s.a.createElement(L,{key:"instance-method-"+t,data:e})})):null,E.length?s.a.createElement(j,{title:"Events"},E.map(function(e,t){return s.a.createElement(L,{key:"event-"+t,data:e})})):null,f.length?s.a.createElement(j,{title:"Typedef"},f.map(function(e,t){return s.a.createElement(L,{key:""+t,data:e})})):null))},t}(s.a.Component);x.propTypes={data:c.a.shape({apiPageJson:c.a.object.isRequired}),location:c.a.shape({pathname:c.a.string,hash:c.a.string})};t.default=x;var H="2393403431"}}]);
//# sourceMappingURL=component---src-templates-api-page-js-f2a8defd9e37dbbe52df.js.map