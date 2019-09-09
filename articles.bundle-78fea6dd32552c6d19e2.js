(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{27:function(e,t,a){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===i)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},28:function(e,t,a){"use strict";a.d(t,"f",(function(){return o})),a.d(t,"h",(function(){return c})),a.d(t,"i",(function(){return l})),a.d(t,"g",(function(){return u})),a.d(t,"e",(function(){return m})),a.d(t,"c",(function(){return d})),a.d(t,"k",(function(){return f})),a.d(t,"m",(function(){return p})),a.d(t,"l",(function(){return h})),a.d(t,"d",(function(){return v})),a.d(t,"a",(function(){return b})),a.d(t,"j",(function(){return g})),a.d(t,"b",(function(){return C}));var n=a(3),r=a(4);const i=e=>{e.createdAt=new Date(e.createdAt),e.updatedAt=new Date(e.updatedAt)},s=e=>(e.articles.forEach(i),e),o=({offset:e,limit:t})=>Object(n.b)("articles",{offset:e,limit:t}).then(r.b).then(s),c=({offset:e,limit:t})=>Object(n.b)("articles/feed",{offset:e,limit:t}).then(r.b).then(s),l=({tag:e,offset:t,limit:a})=>Object(n.b)("articles",{tag:e,offset:t,limit:a}).then(r.b).then(s),u=({author:e,limit:t,offset:a})=>Object(n.b)("articles",{author:e,offset:a,limit:t}).then(r.b).then(s),m=({favorited:e,limit:t,offset:a})=>Object(n.b)("articles",{favorited:e,offset:a,limit:t}).then(r.b).then(s),d=({slug:e})=>Object(n.b)(`articles/${encodeURIComponent(e)}`).then(r.b).then(({article:e})=>(i(e),{article:e})),f=({title:e,description:t,body:a,tagList:i})=>Object(n.c)("articles",{article:{title:e,description:t,body:a,tagList:i}}).then(r.b,r.a),p=({slug:e,title:t,description:a,body:i,tagList:s})=>Object(n.d)(`articles/${encodeURIComponent(e)}`,{article:{title:t,description:a,body:i,tagList:s}}).then(r.b,r.a),h=({slug:e,isFavorite:t})=>{return(t?n.c:n.a)(`articles/${e}/favorite`).then(r.b)},v=({slug:e})=>Object(n.b)(`articles/${encodeURIComponent(e)}/comments`).then(r.b).then(({comments:e})=>(e.forEach(i),{comments:e})),b=({slug:e})=>Object(n.a)(`articles/${encodeURIComponent(e)}`),g=({slug:e,comment:t})=>Object(n.c)(`articles/${encodeURIComponent(e)}/comments`,{comment:{body:t}}).then(r.b).then(({comment:e})=>(i(e),{comment:e})),C=({slug:e,commentId:t})=>Object(n.a)(`articles/${encodeURIComponent(e)}/comments/${t}`)},29:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(1);function r(e){const t={title:e.title,author:new n.a(e.author),description:e.description,body:e.body,slug:e.slug,createdAt:e.createdAt,updatedAt:e.updatedAt,favorited:e.favorited,favoritesCount:e.favoritesCount,tagList:e.tagList,comments:null,setFavorite:({favorited:e,favoritesCount:a})=>{t.favorited=e,t.favoritesCount=a},setComments:e=>{t.comments=e},addComment:e=>{t.comments.unshift(e)},deleteComment:e=>{const a=t.comments.findIndex(t=>t.id===e);-1!==a&&t.comments.splice(a,1)}};return t}},30:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const n=new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"}),r=e=>n.format(e)},31:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(8),s=a.n(i),o=a(2),c=a(30);const l=({article:e})=>r.a.createElement("span",null,r.a.createElement(o.Link,{to:`/@${encodeURIComponent(e.author.username)}`},r.a.createElement("img",{src:e.author.image})," "),r.a.createElement("div",{className:"info"},r.a.createElement(o.Link,{to:`/@${encodeURIComponent(e.author.username)}`,className:"author"},e.author.username),r.a.createElement("span",{className:"date"},Object(c.a)(e.createdAt))));l.propTypes={article:s.a.object.isRequired},t.a=l},32:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(8);const s=({article:e})=>!!e.tagList.length&&r.a.createElement("ul",{className:"tag-list"},e.tagList.map((e,t)=>r.a.createElement("li",{key:t,className:"tag-default tag-pill tag-outline"},e)));s.propTypes={article:a.n(i).a.object.isRequired},t.a=s},33:function(e,t,a){"use strict";var n=a(5),r=a.n(n),i=a(1),s=a(28),o=a(9);t.a=r.a.controller({setFavorite:e=>i.b.isAuthenticated?s.l({slug:e.slug,isFavorite:!e.favorited}).then(t=>{e.setFavorite(t.article)}):(o.a.transitionTo("/register"),Promise.reject(new Error("The user is not authenticated")))})},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n),i=a(8),s=a.n(i),o=a(2),c=a(27),l=a.n(c),u=a(31),m=a(32);class d extends n.Component{constructor(){super(),this.state={isFavoritePending:!1},this.setFavorite=()=>{this.setState({isFavoritePending:!0}),this.props.articleController.setFavorite(this.props.article).then(()=>{this.setState({isFavoritePending:!1})})}}render(){const{article:e}=this.props;return r.a.createElement("div",{className:"article-preview"},r.a.createElement("div",{className:"article-meta"},r.a.createElement(u.a,{article:e}),r.a.createElement("button",{className:l()("btn btn-sm pull-xs-right",{"btn-primary":e.favorited,"btn-outline-primary":!e.favorited}),onClick:this.setFavorite,disabled:this.state.isFavoritePending},r.a.createElement("i",{className:"ion-heart"})," ",e.favoritesCount)),r.a.createElement(o.Link,{to:`/article/${e.slug}`,className:"preview-link"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement("span",null,"Read more..."),r.a.createElement(m.a,{article:e})))}}d.propTypes={article:s.a.object.isRequired,articleController:s.a.object.isRequired}},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n),i=a(8),s=a.n(i),o=a(27),c=a.n(o);class l extends n.Component{onPageClick(e,t){t.preventDefault(),this.props.onChange({offset:e*this.props.itemsPerPage})}render(){const{totalItemsCount:e,offset:t,itemsPerPage:a}=this.props,n=Math.ceil(e/a);if(n<=1)return!1;const i=Math.trunc(t/a);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},Array.from({length:n},(e,t)=>r.a.createElement("li",{key:t,className:c()("page-item",{active:t===i})},r.a.createElement("a",{href:"",className:"page-link",onClick:this.onPageClick.bind(this,t)},t+1)))))}}l.propTypes={totalItemsCount:s.a.number.isRequired,offset:s.a.number.isRequired,itemsPerPage:s.a.number.isRequired,onChange:s.a.func.isRequired}},66:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(0),r=a.n(n),i=a(8),s=a.n(i),o=a(2),c=a(27),l=a.n(c),u=a(36),m=a(37);class d extends n.Component{constructor(){super(),this.setFollowing=()=>{this.props.controller.setFollowing()}}render(){const{username:e,selectedTab:t,tabs:a,articles:n,pending:i,articleController:s,articlesOffset:c,articlesLimit:d,totalArticlesCount:f,getPageArticles:p}=this.props.controller;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-md-10 offset-md-1"},r.a.createElement("div",{className:"articles-toggle"},r.a.createElement("ul",{className:"nav nav-pills outline-active"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.Link,{className:l()("nav-link",{active:t===a.own}),to:`/@${encodeURIComponent(e)}`},"My Articles")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.Link,{className:l()("nav-link",{active:t===a.favorite}),to:`/@${encodeURIComponent(e)}/favorites`},"Favorited Articles")))),n&&(n.length?n.map((e,t)=>r.a.createElement(u.a,{key:t,article:e,articleController:s})):r.a.createElement("div",{className:"article-preview"},"No articles are here... yet.")),i.has("getArticles")&&r.a.createElement("div",{className:"article-preview"},"Loading articles..."),r.a.createElement(m.a,{totalItemsCount:f,offset:c,itemsPerPage:d,onChange:p}))))}}d.propTypes={controller:s.a.object.isRequired}},67:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),i=a(28),s=a(29),o=a(33);const c={own:Symbol(),favorite:Symbol()};t.default=r.a.controller((function(){const e={username:null,articlesOffset:0,articlesLimit:5,totalArticlesCount:0,tabs:c,selectedTab:c.own,articles:null,articleController:o.a,onEnter:({routeFragment:t})=>{e.username=t.parent.controllerObject.username,e.selectedTab="favorites"===t.abstractPath?c.favorite:c.own,e.getArticles()},getArticles:()=>{return(e.selectedTab===c.own?t:a)().then(({articles:t,articlesCount:a})=>{e.articles=t.map(e=>new s.a(e)),e.totalArticlesCount=a})}},t=()=>i.g({author:e.username,offset:e.articlesOffset,limit:e.articlesLimit}),a=()=>i.e({favorited:e.username,offset:e.articlesOffset,limit:e.articlesLimit});return e.getPageArticles=({offset:t})=>{e.articlesOffset=t,e.getArticles()},e}))}}]);
//# sourceMappingURL=articles.bundle-78fea6dd32552c6d19e2.js.map