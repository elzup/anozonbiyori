(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RLWu:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n("Wbzz"),o=n("N1om"),i=n.n(o),l=n("soUV"),c=n("hizP"),s=n("rB5o"),u=n("rksZ");t.default=function(e){var t=e.data,n=e.pageContext,o=e.location,p=t.pages,d=t.site.siteMetadata.title,m=n.tag,f=a.createElement(u.a,{prefix:"/tags/"+i()(m),current:n.currentPage||1,last:n.numPages||1});return a.createElement(l.a,{location:o,title:d},a.createElement(c.a,{title:m+" - "+d,description:m+"の記事一覧"}),a.createElement("h1",null,m),n.currentPage>1&&f,p.edges.map((function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return a.createElement("div",{key:t.fields.slug},a.createElement("h3",{style:{marginBottom:Object(s.a)(1/4)}},a.createElement(r.Link,{style:{boxShadow:"none"},to:"/"+t.fields.slug},n)),a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))})),f)}},rksZ:function(e,t,n){"use strict";var a=n("q1tI"),r=n("vOnD"),o=n("Wbzz"),i=n("ytc1"),l=Object(r.b)(o.Link).withConfig({displayName:"Pagination__Button",componentId:"sc-1k2prwj-0"})([""," border-radius:4px;padding:0 16px;margin:0 2px;"],i.a),c=function(e){return 1===e?"/":"/page/"+e};var s=r.b.div.withConfig({displayName:"Pagination__Style",componentId:"sc-1k2prwj-1"})(["display:flex;margin-top:8px;justify-content:flex-end;> span{"," border-radius:4px;margin:0 2px;color:#937caf;border-color:#937caf;&:hover{color:#937caf;border-color:#937caf;}}"],i.a);t.a=function(e){var t=e.current,n=e.last,r=e.prefix,o=void 0===r?"":r,i=1!==t&&t-1,u=t!==n&&t+1;return 1===n?null:a.createElement(s,null,i&&a.createElement(l,{to:o+c(i)},"<<"),a.createElement("span",null,t),u&&a.createElement(l,{to:o+c(u)},">>"))}}}]);
//# sourceMappingURL=component---src-templates-tag-page-tsx-8b5942049ead5685c16a.js.map