"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{8771:function(e,t,n){var a=n(7294),r=n(1597);t.Z=function(){var e,t=null===(e=(0,r.useStaticQuery)("3257411868").site.siteMetadata)||void 0===e?void 0:e.author;return a.createElement("div",{className:"bio"},(null==t?void 0:t.name)&&a.createElement("p",null,"Written and maintained by ",a.createElement("strong",null,t.name)," ",(null==t?void 0:t.summary)||null))}},7103:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(1597),l=n.p+"static/logo-52067bca885c06b3f69bb34a8f1679ac.png",i=function(e){var t=e.children;return a.createElement(r.StaticQuery,{query:"1126892257",render:function(e){return a.createElement("div",null,a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},a.createElement("header",null,a.createElement(r.Link,{to:"/"},a.createElement("img",{style:{margin:"0 10px 0 0",verticalAlign:"-40%"},width:40,src:l,alt:"Logo"})),a.createElement("h2",{class:"nav",style:{display:"inline"}},a.createElement(r.Link,{to:"/life/",style:{color:"#ff2268"},activeStyle:{textDecoration:"underline overline"}},"Life,"),a.createElement(r.Link,{to:"/design/",style:{color:"#e86013"},activeStyle:{textDecoration:"underline overline"}},"Design,"),a.createElement(r.Link,{to:"/games/",style:{color:"#8213e8"},activeStyle:{textDecoration:"underline overline"}},"Games,"),a.createElement(r.Link,{to:"/code/",style:{color:"#2269ff"},activeStyle:{textDecoration:"underline overline"}},"Code")))),a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))}})}},9357:function(e,t,n){var a=n(7294),r=n(1597),l=function(e){var t,n,l,i=e.description,o=(e.lang,e.title),c=e.children,m=(0,r.useStaticQuery)("2841359383").site,d=i||m.siteMetadata.description,s=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,s?o+" | "+s:o),a.createElement("meta",{name:"description",content:d}),a.createElement("meta",{property:"og:title",content:o}),a.createElement("meta",{property:"og:description",content:d}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n||null===(l=n.social)||void 0===l?void 0:l.twitter)||""}),a.createElement("meta",{name:"twitter:title",content:o}),a.createElement("meta",{name:"twitter:description",content:d}),c)};l.defaultProps={description:""},t.Z=l},4982:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c}});var a=n(7294),r=n(1597),l=n(8771),i=n(7103),o=n(9357),c=function(e){var t=e.data.markdownRemark;return a.createElement(o.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};t.default=function(e){var t,n=e.data,o=n.previous,c=n.next,m=n.site,d=n.markdownRemark,s=e.location,u=(null===(t=m.siteMetadata)||void 0===t?void 0:t.title)||"Title";return a.createElement(i.Z,{location:s,title:u},a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h1",{itemProp:"headline"},d.frontmatter.title),a.createElement("p",null,d.frontmatter.date)),a.createElement("section",{dangerouslySetInnerHTML:{__html:d.html},itemProp:"articleBody"}),a.createElement("hr",null),a.createElement("footer",null,a.createElement(l.Z,null))),a.createElement("nav",{className:"blog-post-nav"},a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.createElement("li",null,o&&a.createElement(r.Link,{to:o.fields.slug,rel:"prev"},"← ",o.frontmatter.title)),a.createElement("li",null,c&&a.createElement(r.Link,{to:c.fields.slug,rel:"next"},c.frontmatter.title," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-dcdaf387888a0f3c36fd.js.map