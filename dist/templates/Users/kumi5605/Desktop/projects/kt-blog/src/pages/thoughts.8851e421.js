(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{151:function(e,a,t){"use strict";a.a=function(e){var a=[];return e.forEach(function(e){a.includes(e)||a.unshift(e)}),a}},69:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(16),l=t(15),o=t(153),r=t(151),i=t(155),u=t(154);a.default=Object(s.withRouteData)(function(e){var a=e.posts;return c.a.createElement("div",null,c.a.createElement(u.a,null),c.a.createElement("h1",{className:"post-header"},"Thoughts"),c.a.createElement("div",{className:"blog-container"},Object(r.a)(a).map(function(e){return c.a.createElement(l.Link,{key:e.id,to:"/post/".concat(e.id),className:"card",onClick:o.goToTop,style:{backgroundImage:'url("https://media.graphcms.com/'.concat(e.image[0].handle,'")')}},c.a.createElement("div",{className:"overlay"}),c.a.createElement("h1",{className:"post-title"},e.title),c.a.createElement("h2",{className:"sub-header"},"View Post"))})),c.a.createElement(i.a,null))})}}]);