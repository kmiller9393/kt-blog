(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{71:function(e,a,t){"use strict";t.r(a);var n=t(28),r=t.n(n),c=t(29),s=t.n(c),o=t(58),i=t.n(o),l=t(59),m=t.n(l),u=t(62),p=t.n(u),h=t(60),g=t.n(h),d=t(61),E=t.n(d),N=t(0),b=t.n(N),f=t(16),k=(t(147),function(e){return b.a.createElement("div",{className:"post-card",style:{backgroundImage:'url("https://media.graphcms.com/'.concat(e.image[0].handle,'")'),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"100%"}},b.a.createElement("h5",{className:"recent-text"},e.title))}),v=t(15),w=t(153),y=(t(148),function(e){return b.a.createElement("section",{className:"recent-posts"},b.a.createElement("h2",{className:"recent-header"},"Recent Blog Posts"),b.a.createElement("div",{className:"recent-card-container"},e.posts.map(function(e){return b.a.createElement(v.Link,{to:"/post/".concat(e.id),onClick:w.goToTop,key:e.id,className:"recent-link"},b.a.createElement(k,e))})))}),P=t(155),R=t(154),x=function(e){function a(){var e,t;r()(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return t=i()(this,(e=m()(a)).call.apply(e,[this].concat(c))),E()(p()(t),"getPosts",function(){for(var e=t.props.posts,a=[],n=1;n<=3;n++)e[e.length-n]&&a.push(e[e.length-n]);return a}),t}return g()(a,e),s()(a,[{key:"render",value:function(){var e=this.props.authors[0].avatar.handle,a=this.props.authors[0].bibliography,t=this.getPosts();return b.a.createElement("div",{className:"home-container"},b.a.createElement(R.a,null),b.a.createElement("article",{className:"image-container banner-image"},b.a.createElement("aside",{className:"author-image-container"},b.a.createElement("img",{className:"author-image",src:"https://media.graphcms.com/".concat(e),alt:"Kimaleen"})),b.a.createElement("aside",{className:"bio-text"},b.a.createElement("p",null,a),b.a.createElement("img",{src:"https://media.graphcms.com/".concat(this.props.signatures[0].image.handle),className:"signature",alt:"signature"}))),b.a.createElement(y,{posts:t}),b.a.createElement(P.a,null))}}]),a}(N.Component);a.default=Object(f.withRouteData)(x)}}]);