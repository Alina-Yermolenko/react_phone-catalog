(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(31).concat([function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(25),a=c.n(s),n=c(9),r=c(6),i=c(4),o=c(5),l=c.n(o),u=(c(31),c(3)),d=c(1),j=c.n(d),b=c(7),h=c(0),m=j.a.createContext(null),O=function(e){var t=e.children,c=Object(d.useState)(!1),s=Object(i.a)(c,2),a=s[0],n=s[1],r=Object(d.useState)(!1),o=Object(i.a)(r,2),l=o[0],u=o[1],j=JSON.parse(localStorage.getItem("favProducts")),b=JSON.parse(localStorage.getItem("cartProducts")),O=Object(d.useState)(b||[]),p=Object(i.a)(O,2),f=p[0],x=p[1],v=Object(d.useState)(j||[]),g=Object(i.a)(v,2),_=g[0],N=g[1],y=Object(d.useState)(_),k=Object(i.a)(y,2),w=k[0],C=k[1];return Object(h.jsx)(m.Provider,{value:{cartProducts:f,setCartProducts:x,favProducts:_,setFavProducts:N,visibleFavProducts:w,setVisibleFavProducts:C,isAddedToCart:a,setIsAddedToCart:n,isAddedToFav:l,setIsAddedToFav:u},children:t})},p=j.a.createContext(null),f=function(e){var t=e.children,c=Object(d.useState)(),s=Object(i.a)(c,2),a=s[0],n=s[1];return Object(h.jsx)(p.Provider,{value:{detailedProduct:a,setDetailedProduct:n},children:t})},x=(c(33),function(e){var t=e.num,c=e.image,s=e.alt,a=e.className,n=e.onClick,i=e.imageClass,o=e.product,u=e.products,j=Object(d.useContext)(m),O=j.favProducts,f=j.setFavProducts,x=j.visibleFavProducts,v=j.setVisibleFavProducts,g=Object(d.useContext)(p).detailedProduct,_=o,N=function(){var e=Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u&&(_=u.find((function(e){return e.phoneId===g.id}))),!(t=O.find((function(e){if(e.id===_.id)return e.id===_.id})))){e.next=7;break}return f(O.filter((function(e){return e.id!==t.id}))),v(x.filter((function(e){return e.id!==t.id}))),1===O.length&&localStorage.setItem("favProducts",JSON.stringify([])),e.abrupt("return");case 7:v([].concat(Object(b.a)(x),[_])),f([].concat(Object(b.a)(O),[_]));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){localStorage.setItem("favProducts",JSON.stringify(O))}),[O]),Object(h.jsx)("button",{onClick:!t&&c&&c.includes("Favourite")?N:n,className:"button-link ".concat(a),type:"button",children:t?Object(h.jsx)("div",{children:t}):Object(h.jsx)("img",{className:"button-image ".concat(i),src:c,alt:s})})}),v=(c(34),function(){return Object(h.jsx)("a",{className:"logo__link",href:"./",children:Object(h.jsx)("img",{src:"img/LOGO.svg",alt:"logo"})})}),g=(c(35),function(){return Object(h.jsxs)("div",{className:"footer",children:[Object(h.jsx)(v,{}),Object(h.jsx)("ul",{className:"footer__navigation-list",id:"footer__navigation-list",children:["github","contacts","rights"].map((function(e){return Object(h.jsx)("li",{className:"footer__navigation-item",children:"github"!==e?Object(h.jsx)(n.c,{className:"footer__navigation-link",to:e,children:e}):Object(h.jsx)("a",{href:"https://github.com/Alina-Yermolenko",children:"github"})},e)}))}),Object(h.jsx)("div",{className:"footer__top",children:Object(h.jsxs)("div",{onClick:function(){window.scroll({top:0,left:0,behavior:"smooth"})},className:"footer__button-up","aria-hidden":!0,children:[Object(h.jsx)("p",{className:"footer__button-text body12",children:"Back to top"}),Object(h.jsx)(x,{className:"arrow up small",image:"icons/Chevron (Arrow Up).svg",alt:"^"})]})})]})}),_=(c(36),function(e){var t=e.navLinksList;return Object(h.jsx)("ul",{className:"header__navigation-list",id:"hidden",children:t.map((function(e){return Object(h.jsx)("li",{className:"header__navigation-item",id:"header__navigation-item",children:Object(h.jsx)(n.c,{to:e,className:function(e){return e.isActive?"active":"header__navigation-link"},children:e})},e)}))})}),N=j.a.createContext(null),y=function(e){var t=e.children,c=Object(d.useState)(16),s=Object(i.a)(c,2),a=s[0],n=s[1],r=Object(d.useState)(1),o=Object(i.a)(r,2),l=o[0],u=o[1],j=Object(d.useState)("newest"),b=Object(i.a)(j,2),m=b[0],O=b[1];return Object(h.jsx)(N.Provider,{value:{itemsOnPage:a,setItemsOnPage:n,currentPage:l,setCurrentPage:u,sortingByValue:m,setSortingByValue:O},children:t})},k=function(e){var t=e.setVisibleIPhones,c=e.IPhones,s=e.setSearchInput,a=e.searchInput,r=Object(u.l)().pathname,o=Object(d.useContext)(m),l=o.cartProducts,j=o.favProducts,b=o.setVisibleFavProducts,O=Object(d.useContext)(N),p=O.itemsOnPage,f=O.currentPage,x=O.setCurrentPage,g=O.sortingByValue,y=["home","phones","tablets","accessories"],k=Object(d.useState)(!1),w=Object(i.a)(k,2),C=w[0],P=w[1],S=f*p-p,A=f*p,I=function(e,t){e(t.filter((function(e,c){return S>t.length?(x(Math.ceil(t.length/p)),c>t.length-p):c>S&&c<=A})))};return Object(d.useEffect)((function(){s(""),"/favourites"===r&&b(j.map((function(e){return e}))),"/phones"===r&&I(t,c)}),[r,p,g]),Object(h.jsx)("header",{className:"header",children:Object(h.jsxs)("div",{className:"header__block",children:[Object(h.jsxs)("div",{className:"header__navigation",children:[Object(h.jsx)(v,{}),Object(h.jsx)(_,{navLinksList:y}),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"header__burger header-button",onClick:function(){P(!C)},"aria-hidden":!0,children:[Object(h.jsx)("img",{className:"header-button__image burger__image ",src:"icons/menu-burger.svg",alt:"burger"}),Object(h.jsx)("ul",{className:"header__burger-list",style:{opacity:C?"1":"0",visibility:C?"visible":"hidden",transition:"opacity .3s"},children:y.map((function(e){return Object(h.jsx)("li",{className:"header__burger-item",children:Object(h.jsx)(n.c,{to:e,className:function(e){return e.isActive?"active__burger-link":"header__burger-link"},children:e})},e)}))})]})})]}),Object(h.jsxs)("div",{className:"header__buttons",children:[("/favourites"===r||"/phones"===r||"/tablets"===r||"/accessories"===r)&&Object(h.jsxs)("label",{className:"products-search",id:"hidden",children:[Object(h.jsx)("input",{type:"text",placeholder:"Search in ".concat(r.slice(1),"..."),className:"search-input",value:a,onChange:function(e){s(e.target.value),function(e){switch(r){case"/phones":t(c.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())})));break;case"/favourites":b(j.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())})))}0===e.target.value.length&&"/phones"===r&&I(t,c)}(e)}}),Object(h.jsx)("img",{src:"icons/Search.svg",alt:"Search",className:"small no-border"})]}),Object(h.jsx)(n.c,{to:"/favourites",children:Object(h.jsxs)("div",{className:"header-button",children:[Object(h.jsx)("img",{className:"header-button__image",src:"icons/Favourites.svg",alt:"favourites"}),j.length>0&&Object(h.jsx)("span",{className:"favourite-amount",children:j.length})]})}),Object(h.jsx)(n.c,{to:"/cart",children:Object(h.jsxs)("div",{className:"header-button",children:[Object(h.jsx)("img",{className:"header-button__image",src:"icons/Cart.svg",alt:"cart"}),l.length>0&&Object(h.jsx)("span",{className:"cart-amount",children:l.length})]})})]})]})})},w=(c(37),c(15)),C=(c(38),function(e){var t=e.text,c=e.onClick,s=e.className,a=e.product,n=e.products,i=a,o=Object(d.useRef)(null),u=Object(d.useContext)(p).detailedProduct,j=Object(d.useContext)(m),O=j.cartProducts,f=j.setCartProducts,x=function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&(i=n.find((function(e){return e.phoneId===u.id}))),t.preventDefault(),!O.find((function(e){if(e.id===i.id)return e.id===i.id}))){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,f([].concat(Object(b.a)(O),[Object(w.a)(Object(w.a)({},i),{},{count:1})]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){localStorage.setItem("cartProducts",JSON.stringify(O))}),[O]),Object(h.jsx)("a",{className:"long-button__link body14 ".concat(s),href:"/",ref:o,onClick:t.includes("cart")?x:c,children:t})}),P=(c(39),function(e){var t=e.product,c=e.link,s=e.products,a=Object(d.useState)(!1),o=Object(i.a)(a,2),u=o[0],j=o[1],b=Object(d.useState)(!1),O=Object(i.a)(b,2),f=O[0],v=O[1],g=Object(d.useContext)(p).setDetailedProduct,_=t.name,N=t.price,y=t.fullPrice,k=t.screen,w=t.capacity,P=t.ram,S=t.image,A=Object(d.useContext)(m),I=A.cartProducts,F=A.favProducts,E=function(){var e=Object(r.a)(l.a.mark((function e(){var c,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=2;break}return e.abrupt("return");case 2:if(!(c=s.find((function(e){return e.id===t.id})))){e.next=13;break}return e.next=6,fetch("new/products/".concat(c.itemId,".json"),{method:"GET"});case 6:if(200!==(a=e.sent).status){e.next=13;break}return e.next=10,a.json();case 10:n=e.sent,window.scroll({top:0,left:0,behavior:"smooth"}),g(n);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){I.map((function(e){e.id===t.id&&j(!0)}))}),[I]),Object(d.useEffect)((function(){v(!1),F.map((function(e){e.id===t.id&&v(!0)}))}),[F]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"product",children:[Object(h.jsxs)(n.b,{to:c||"/".concat(t.category,"/").concat(t.id),onClick:E,className:"product__link",children:[Object(h.jsx)("img",{className:"product__image",src:"new/".concat(S),alt:_}),Object(h.jsx)("h3",{className:"product__title body14",children:_})]}),Object(h.jsxs)("div",{className:"product__prices",children:[Object(h.jsxs)("h2",{className:"product__price",children:["$",N]}),Object(h.jsxs)("h2",{className:"product__old-price",children:["$",y]})]}),Object(h.jsxs)("div",{className:"product__info",children:[Object(h.jsxs)("div",{className:"product__keys body12",children:[Object(h.jsx)("p",{className:"product__key",children:"Screen"}),Object(h.jsx)("p",{className:"product__key",children:"Capacity"}),Object(h.jsx)("p",{className:"product__key",children:"Ram"})]}),Object(h.jsxs)("div",{className:"product__values body12",children:[Object(h.jsx)("p",{className:"product__value",children:k}),Object(h.jsx)("p",{className:"product__value",children:w}),Object(h.jsx)("p",{className:"product__value",children:P})]})]}),Object(h.jsxs)("div",{className:"product__buttons",children:[Object(h.jsx)(C,{text:u?"Added to cart":"Add to cart",className:u?"selected":"",product:t}),Object(h.jsx)(x,{image:f?"icons/Favourites Filled (Heart Like).svg":"icons/Favourites.svg",product:t})]})]})})}),S=function(e){var t=e.products,c=e.title,s=Object(u.l)().pathname,a=Object(d.useState)(0),n=Object(i.a)(a,2),r=n[0],o=n[1],l=Object(d.useState)(0),j=Object(i.a)(l,2),b=j[0],m=j[1],O=Object(d.useState)(0),p=Object(i.a)(O,2),f=p[0],v=p[1],g=Object(d.useState)(!1),_=Object(i.a)(g,2),N=_[0],y=_[1],k=Object(d.useRef)(null),w=Object(d.useRef)(null);return Object(d.useEffect)((function(){w.current&&m(w.current.offsetWidth)}),[r]),Object(h.jsxs)("div",{className:"products-list-with-slider__block",ref:w,children:[Object(h.jsxs)("div",{className:"products-list-with-slider__header",children:[Object(h.jsx)("h1",{className:"block__title",children:c}),Object(h.jsxs)("div",{className:"slider-buttons",children:[Object(h.jsx)(x,{className:"arrow left small",onClick:function(){k.current&&k&&r>0&&o(r-k.current.offsetWidth)},image:"icons/Chevron (Arrow Left).svg",alt:"arrow-left"}),Object(h.jsx)(x,{className:"arrow right small",onClick:function(){y(!N),r>f||k.current&&(o(r+k.current.offsetWidth),v(k.current.offsetWidth*(t.length-1-Math.ceil(b/k.current.offsetWidth))))},image:"icons/Chevron (Arrow Right).svg",alt:"arrow-right"})]})]}),Object(h.jsx)("ul",{className:"product-list",style:{marginLeft:"".concat(-r,"px"),transition:"margin-left .5s"},children:t.map((function(e){return Object(h.jsx)("li",{ref:k,className:"product-list__slider-item","aria-hidden":!0,children:Object(h.jsx)("div",{className:"product-list__slider-card",children:Object(h.jsx)(P,{product:e,products:t,link:"/home"!==s?"../".concat(e.id):"../".concat(e.category,"/").concat(e.id)})})},e.id)}))})]})},A=(c(40),function(){var e=["new/img/banner-phones.png","new/img/banner-accessories.png","new/img/banner-tablets.png"],t=Object(d.useState)(0),c=Object(i.a)(t,2),s=c[0],a=c[1];s>=e.length&&a(0),s<=-1&&a(e.length-1);return Object(d.useEffect)((function(){var e=setInterval((function(){a((function(e){return e+1}))}),5e3);return function(){clearInterval(e)}}),[]),Object(h.jsxs)("div",{id:"slider-main",children:[Object(h.jsxs)("div",{className:"slider",children:[Object(h.jsx)(x,{className:"arrow left long",onClick:function(){a(s-1)},image:"icons/Chevron (Arrow Left).svg",alt:"arrow-left"}),Object(h.jsx)("ul",{style:{display:"flex",overflow:"hidden"},children:Object(b.a)(Array(e.length)).map((function(t,c){var a=c;return Object(h.jsx)("li",{children:Object(h.jsx)("div",{className:"slider__images",style:{backgroundImage:"url('".concat(e[c],"')"),transform:"translateX(".concat(100*-s,"%)"),transition:"transform .3s"}})},a)}))}),Object(h.jsx)(x,{className:"arrow right long",onClick:function(){a(s+1)},image:"icons/Chevron (Arrow Right).svg",alt:"arrow-right"})]}),Object(h.jsx)("div",{className:"slider__subbuttons",children:Object(b.a)(Array(e.length)).map((function(e,t){return Object(h.jsx)("li",{className:"slider__subbutton ".concat(s===t&&"active__subbutton"),onClick:function(){a(t)},"aria-hidden":!0},"".concat(t,"slider"))}))})]})}),I=(c(41),function(e){var t=[{title:"Mobile phones",image:"new/img/category-phones.png",amount:e.phones.length,background:"#fcdbc1",category:"phones"},{title:"Tablets",image:"new/img/category-tablets.png",amount:0,background:"#8d8d92",category:"tablets"},{title:"Accessories",image:"new/img/category-accessories.png",amount:0,background:"#D53C51",category:"accessories"}];return Object(h.jsxs)("div",{className:"category",children:[Object(h.jsx)("h1",{className:"category__title",children:"Shop by category"}),Object(h.jsx)("div",{className:"category__block",children:Object(h.jsx)("ul",{className:"category__list",children:t.map((function(e){var t=e.title,c=e.amount,s=e.image,a=e.background,r=e.category;return Object(h.jsx)("li",{className:"category__item",children:Object(h.jsxs)(n.b,{to:"../".concat(r),children:[Object(h.jsx)("div",{className:"category__image-block",children:Object(h.jsx)("img",{className:"category__image",src:s,alt:String(c),style:{background:a}})}),Object(h.jsxs)("div",{className:"category__info",children:[Object(h.jsx)("h3",{className:"category__title",children:t}),Object(h.jsx)("div",{className:"category__models-number body14",children:"".concat(c," models")})]})]})},t)}))})})]})}),F=(c(42),c(43),function(e){var t=e.product,c=Object(d.useState)(t.count||0),s=Object(i.a)(c,2),a=s[0],n=s[1],o=Object(d.useContext)(m),u=o.cartProducts,j=o.setCartProducts,b=function(){var e=Object(r.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(u.filter((function(e){return e.id!==t.id})));case 2:1===u.length&&localStorage.setItem("cartProducts",JSON.stringify([]));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){localStorage.setItem("cartProducts",JSON.stringify(u))}),[u]),Object(d.useEffect)((function(){a<=0?b():j(u.map((function(e){return e.id===t.id?Object(w.a)(Object(w.a)({},e),{},{count:a}):e})))}),[a]),Object(h.jsxs)("div",{className:"cart-item",children:[Object(h.jsxs)("div",{className:"cart-item__sub-block",children:[Object(h.jsx)(x,{className:"no-border cart-item__close",image:"icons/Close.svg",alt:"x",onClick:b}),Object(h.jsx)("div",{className:"cart-item__picture",children:Object(h.jsx)("img",{src:"new/".concat(t.image),alt:t.itemId,className:"cart-item__image"})}),Object(h.jsx)("p",{className:"cart-item__title body14",children:t.name})]}),Object(h.jsxs)("div",{className:"cart-item__sub-block",children:[Object(h.jsxs)("div",{className:"cart-item__count",children:[Object(h.jsx)(x,{className:"minus",onClick:function(){n((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return e-1}))},image:"icons/Minus.svg",alt:"-"}),Object(h.jsx)("div",{className:"count",children:t.count}),Object(h.jsx)(x,{className:"plus",onClick:function(){n((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return e+1}))},image:"icons/Plus.svg",alt:"+"})]}),Object(h.jsxs)("h2",{className:"cart-item__price",children:["$",t.count&&t.price*t.count]})]})]})}),E=function(){return Object(h.jsx)("h3",{children:"No products found"})},L=function(){var e=Object(u.n)(),t=Object(d.useContext)(m).cartProducts,c=t.reduce((function(e,t){if(t.count)return e+t.price*t.count}),0),s=t.reduce((function(e,t){if(t.count)return e+t.count}),0);return Object(h.jsxs)("div",{className:"cart-page",children:[Object(h.jsxs)("div",{className:"back-button body12",children:[Object(h.jsx)(x,{className:"no-border",image:"icons/Chevron (Arrow Left).svg",alt:"arrow-left",onClick:function(){e(-1)}}),Object(h.jsx)("div",{className:"back-button__text",children:"Back"})]}),Object(h.jsx)("h1",{className:"cart-page__title",children:"Cart"}),Object(h.jsx)("div",{className:"cart-page__blocks",children:t.length?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"cart-page__products",children:Object(h.jsx)("ul",{className:"cart-page__list",children:t.map((function(e){return Object(h.jsx)("li",{className:"cart-page__item",children:Object(h.jsx)(F,{product:e})},e.id)}))})}),Object(h.jsxs)("div",{className:"cart-page__price",children:[Object(h.jsxs)("h1",{className:"cart-page__price-total",children:["$",c]}),Object(h.jsx)("div",{className:"cart-page__total-items",children:"Total for ".concat(s," items")}),Object(h.jsx)("div",{className:"horizontal-line"}),Object(h.jsx)(C,{text:"Checkout"})]})]}):Object(h.jsx)(E,{})})]})},T=(c(44),function(e){var t=e.id,c=void 0===t?"0":t,s=e.title,a=Object(d.useContext)(p).detailedProduct,r=Object(u.l)().pathname;return Object(h.jsxs)("div",{className:"navigation-buttons",children:[Object(h.jsx)(n.c,{to:"/",children:Object(h.jsx)(x,{image:"icons/Home.svg",alt:"home",className:"no-border"})}),Object(h.jsxs)("div",{className:"sub-buttons body12",children:[Object(h.jsx)("img",{className:"button-image",src:"icons/Chevron (Arrow Right).svg",alt:"arrow-right"}),Object(h.jsx)("a",{href:"#/".concat(s),className:"sub-link",children:s})]}),a&&r.includes(c)&&Object(h.jsxs)("div",{className:"sub-buttons body12",children:[Object(h.jsx)("img",{className:"button-image",src:"icons/Chevron (Arrow Right).svg",alt:"arrow-right"}),Object(h.jsx)(n.b,{to:"/phones/".concat(c),className:"sub-link",children:a.name})]})]})}),R=(c(45),function(){var e=Object(d.useContext)(m).visibleFavProducts;return Object(h.jsxs)("div",{className:"favourites",children:[Object(h.jsx)(T,{title:"favourites"}),Object(h.jsx)("h1",{className:"favourites__title",children:"Favourites"}),Object(h.jsx)("ul",{className:"favourites__list",children:e.length?e.map((function(e){return Object(h.jsx)("li",{className:"favourites__item",children:Object(h.jsx)(P,{product:e})},e.id)})):Object(h.jsx)(E,{})})]})}),V=(c(46),function(e){var t=e.setCurrentPage,c=e.currentPage,s=e.totalPages,a=Object(d.useRef)(null),n=Object(d.useState)(0),r=Object(i.a)(n,2),o=r[0],l=r[1],u=Object(d.useState)(0),j=Object(i.a)(u,2),m=j[0],O=j[1],p=Object(d.useState)(0),f=Object(i.a)(p,2),v=f[0],g=f[1];Object(d.useEffect)((function(){l(a.current.offsetWidth),O(5*a.current.offsetWidth)}),[]);return Object(d.useEffect)((function(){s<=c&&g((s-5)*o)}),[s]),Object(h.jsxs)("div",{className:"product-page__block",children:[Object(h.jsx)(x,{className:"arrow left small",image:"icons/Chevron (Arrow Left).svg",alt:"arrow-left",onClick:function(){if(1!==c)return 2===c||3===c||4===c||5===c?(g(0),void t(c-1)):void(c>1&&(g(v-o),t(c-1)));g(0)}}),Object(h.jsx)("div",{className:"product-page__buttons",style:{minWidth:"".concat(m,"px"),maxWidth:"".concat(m,"px")},children:Object(h.jsx)("ul",{style:{marginLeft:"".concat(-v,"px")},className:"product-page__buttons-list",children:Object(b.a)(Array(s)).map((function(e,s){var n,r=s;return Object(h.jsx)("li",{ref:a,className:"product-page__buttons-item",children:Object(h.jsx)(x,{className:"arrow small ".concat((n=s+1,c===n&&"active-button")),onClick:function(){t(s+1)},num:s+1,alt:String(s+1)})},r)}))})}),Object(h.jsx)(x,{className:"arrow right small pagination-right",image:"icons/Chevron (Arrow Right).svg",onClick:function(){if(v<s*o){if(s<5)return g(0),void t(c+1);if(s===c)return void g((s-5)*o);if(s===c+1||s===c+2||s===c+3||s===c+4)return g((s-5)*o),void t(c+1);s>5&&(g(v+o),t(c+1))}},alt:"arrow-right"})]})}),B=(c(47),function(e){var t=e.products,c=e.title,s=e.setVisibleProducts,a=e.visibleProducts,n=e.setProducts,o=e.searchInput,u=Object(d.useContext)(N),j=u.itemsOnPage,b=u.setItemsOnPage,m=u.currentPage,O=u.setCurrentPage,p=u.sortingByValue,f=u.setSortingByValue,x=Object(d.useState)(!1),v=Object(i.a)(x,2),g=v[0],_=v[1],y=!o&&t?t.length:1,k=Math.ceil(y/j),w=m*j-j,C=m*j,S=function(){var e=Object(r.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&n){e.next=2;break}return e.abrupt("return");case 2:e.t0=c,e.next="newest"===e.t0?5:"alphabetically"===e.t0?8:"cheapest"===e.t0?11:14;break;case 5:return n(t.sort((function(e,t){return t.year-e.year}))),f(c),e.abrupt("return");case 8:return n(t.sort((function(e,t){return e.name.localeCompare(t.name,"en",{numeric:!0})}))),f(c),e.abrupt("return");case 11:return n(t.sort((function(e,t){return e.price-t.price}))),f(c),e.abrupt("return");case 14:n(t);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){t&&t.length&&s&&s(t.filter((function(e,c){return w>t.length?(O(Math.ceil(t.length/j)),c>t.length-j):c>w&&c<=C})))}),[j,m,p,g]),Object(d.useEffect)((function(){a&&a.length>0&&(_(!0),S(p))}),[a]),Object(h.jsxs)("div",{className:"product-page",children:[Object(h.jsx)(T,{title:c.toLowerCase()}),Object(h.jsxs)("div",{className:"product-page__main",children:[Object(h.jsxs)("div",{className:"product-page__main-info",children:[Object(h.jsx)("h1",{className:"product-page__title",children:c}),Object(h.jsx)("p",{className:"product-page__subtitle body14",children:"".concat(t?t.length:0," models")})]}),t&&t.length?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"product-page__search",children:[Object(h.jsx)("div",{className:"product-page__sort",children:Object(h.jsxs)("label",{htmlFor:"sortBy",children:[Object(h.jsx)("div",{className:"product-page__sort-title body12",children:"Sort by"}),Object(h.jsxs)("select",{className:"product-page__select sort",id:"sortBy",style:{backgroundImage:'url("icons/Chevron (Arrow Down).svg")'},value:p,onChange:function(e){S(e.target.value)},children:[Object(h.jsx)("option",{defaultValue:p,value:"newest",children:"Newest"}),Object(h.jsx)("option",{value:"alphabetically",children:"Alphabetically"}),Object(h.jsx)("option",{value:"cheapest",children:"Cheapest"})]})]})}),Object(h.jsx)("div",{className:"product-page__sort",children:Object(h.jsxs)("label",{children:[Object(h.jsx)("div",{className:"product-page__sort-title body12",children:"Items on page"}),Object(h.jsxs)("select",{className:"product-page__select pages",value:j,onChange:function(e){b(+e.target.value)},style:{backgroundImage:'url("icons/Chevron (Arrow Down).svg")'},children:[Object(h.jsx)("option",{defaultValue:j,value:"4",children:"4"}),Object(h.jsx)("option",{value:"8",children:"8"}),Object(h.jsx)("option",{value:"16",children:"16"}),Object(h.jsx)("option",{value:t.length,children:"All"})]})]})})]}),Object(h.jsx)("ul",{className:"product-page__list",children:a&&a.length?a.map((function(e){return Object(h.jsx)("li",{className:"product-page__item",children:"phones"===e.category&&Object(h.jsx)(P,{product:e})},e.id)})):Object(h.jsx)(E,{})}),a&&k>1&&Object(h.jsx)(V,{currentPage:m,setCurrentPage:O,totalPages:k})]}):Object(h.jsx)("h2",{children:"No products found"})]})]})}),D=(c(48),c(49),c(50),c(51),{black:"#000000",white:"#ffffff",rosegold:"#f5cec7",purple:"#d5d2dd",red:"#ca243d",yellow:"#fed45b",gold:"#fcdbc1",silver:"#f3f1ec",green:"#607170",midnightgreen:"#555e57",spacegray:"#61605e",coral:"#fe6a56"}),M=function(e){var t=e.products,c=Object(d.useContext)(p),s=c.detailedProduct,a=c.setDetailedProduct,n=function(){var e=Object(r.a)(l.a.mark((function e(c){var n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.find((function(e){return e.phoneId===s.id.replace(s.color,c)})),e.next=3,fetch("new/products/".concat(n.itemId,".json"),{method:"GET"});case 3:if(200!==(r=e.sent).status){e.next=10;break}return e.next=7,r.json();case 7:return i=e.sent,window.location.replace("#/".concat(n.category,"/").concat(n.id)),e.abrupt("return",a(i));case 10:window.history.replaceState(null,"","#/".concat(n.category,"/").concat(n.id));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"avaliable-colors body12",children:[Object(h.jsx)("p",{children:"Avaliable colors"}),Object(h.jsx)("ul",{className:"avaliable-colors__list",children:s&&s.colorsAvailable.map((function(e){return Object(h.jsx)("li",{className:"avaliable-colors__item ".concat((t=e,t===s.color&&"active-color")),style:{backgroundColor:D[e]},onClick:function(){n(e)},"aria-hidden":"true"},e);var t}))}),Object(h.jsx)("div",{className:"horizontal-line"})]})},J=(c(52),function(e){var t=e.products,c=Object(d.useContext)(p),s=c.detailedProduct,a=c.setDetailedProduct,n=function(){var e=Object(r.a)(l.a.mark((function e(c){var n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.find((function(e){return e.phoneId===s.id.replace(s.capacity.toLowerCase(),c.toLowerCase())})))){e.next=10;break}return e.next=4,fetch("new/products/".concat(n.itemId,".json"),{method:"GET"});case 4:if(200!==(r=e.sent).status){e.next=10;break}return e.next=8,r.json();case 8:return i=e.sent,e.abrupt("return",a(i));case 10:a(n);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"capacity",children:[Object(h.jsx)("div",{className:"capacity__text body 12",children:"Select capacity"}),Object(h.jsx)("ul",{className:"capacity__list",children:s.capacityAvailable.map((function(e){return Object(h.jsx)("li",{className:"capacity__item ".concat((t=e,t===s.capacity&&"active-button")),onClick:function(){n(e)},"aria-hidden":"true",children:e},e);var t}))})]})}),W=function(e){var t=e.products,c=e.singleProduct,s=Object(d.useContext)(m),a=s.cartProducts,n=s.favProducts,r=s.setIsAddedToCart,i=s.isAddedToCart,o=s.setIsAddedToFav,l=s.isAddedToFav,u=Object(d.useContext)(p).detailedProduct,j=u.ram,b=u.processor,O=u.id,f=u.screen,v=u.resolution,g=u.priceDiscount,_=u.priceRegular,N=u.capacity,y=u.colorsAvailable;return Object(d.useEffect)((function(){r(!1),a.map((function(e){if(e.phoneId===u.id)return r(!0)}))}),[u,a]),Object(d.useEffect)((function(){o(!1),n.map((function(e){e.phoneId===u.id&&o(!0)}))}),[u,n]),u&&Object(h.jsxs)("div",{className:"buying-info",children:[Object(h.jsxs)("div",{className:"buying-info__details",children:[y&&Object(h.jsx)(M,{products:t}),N&&Object(h.jsx)(J,{products:t}),g&&Object(h.jsxs)("div",{className:"buying-info__price",children:[Object(h.jsxs)("h1",{className:"product__price",children:["$",g]}),Object(h.jsxs)("h2",{className:"product__old-price",children:["$",_]})]}),Object(h.jsxs)("div",{className:"buying-info__buttons",children:[Object(h.jsx)(C,{text:i?"Added to cart":"Add to cart",className:i&&"selected",product:c,products:t}),Object(h.jsx)(x,{image:l?"icons/Favourites Filled (Heart Like).svg":"icons/Favourites.svg",products:t})]}),Object(h.jsxs)("div",{className:"buying-info__tech-details body12",children:[Object(h.jsxs)("div",{className:"buying-info__keys",children:[Object(h.jsx)("p",{className:"buying-info__key",children:"Screen"}),Object(h.jsx)("p",{className:"buying-info__key",children:"Resolution"}),Object(h.jsx)("p",{className:"buying-info__key",children:"Processor"}),Object(h.jsx)("p",{className:"buying-info__key",children:"RAM"})]}),Object(h.jsxs)("div",{className:"buying-info__values",children:[Object(h.jsx)("p",{className:"buying-info__value",children:f}),Object(h.jsx)("p",{className:"buying-info__value",children:v}),Object(h.jsx)("p",{className:"buying-info__value",children:b}),Object(h.jsx)("p",{className:"buying-info__value",children:j})]})]})]}),Object(h.jsx)("p",{className:"product-id body12",children:O})]})},G=(c(53),function(){var e=Object(d.useState)(0),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(d.useContext)(p).detailedProduct;return Object(h.jsxs)("div",{className:"pictures-block",children:[Object(h.jsx)("ul",{className:"pictures-block__list",children:a.images.map((function(e,t){return Object(h.jsx)("li",{className:"pictures-block__item ".concat((a=t,a===c&&"selected-picture")),onClick:function(){return s(t)},"aria-hidden":"true",children:Object(h.jsx)("img",{src:"new/".concat(e),alt:"phone",className:"pictures-block__image"})},e);var a}))}),Object(h.jsx)("img",{src:"new/".concat(a.images[c]),alt:"main",className:"pictures-block__main"})]})}),$=(c(54),function(){var e=Object(d.useContext)(p).detailedProduct;return Object(h.jsxs)("div",{className:"product-desc__text",children:[Object(h.jsx)("h2",{className:"product-desc__title",children:"About"}),Object(h.jsx)("div",{className:"horizontal-line"}),Object(h.jsx)("ul",{className:"product-desc__list",children:e.description.map((function(e){return Object(h.jsxs)("li",{className:"product-desc__item",children:[Object(h.jsx)("h3",{className:"product-desc__item-title",children:e.title}),e.text.map((function(e){return Object(h.jsx)("p",{className:"product-desc__item-text body14",children:e})}))]},e.title)}))})]})}),z=function(e){var t=e.products,c=e.singleProduct,s=Object(d.useContext)(p).detailedProduct;return Object(h.jsxs)("div",{className:"product-desc",children:[Object(h.jsx)("h1",{className:"product-desc__title",children:s.name}),Object(h.jsxs)("div",{className:"product-desc__block",children:[Object(h.jsxs)("div",{className:"product-desc__info",children:[Object(h.jsx)(G,{}),Object(h.jsx)(W,{products:t,singleProduct:c})]}),Object(h.jsxs)("div",{className:"product-desc__info",children:[Object(h.jsx)($,{}),Object(h.jsx)("div",{className:"product-desc__text",children:Object(h.jsxs)("div",{className:"product-desc__tech-details",children:[Object(h.jsx)("h2",{className:"product-desc__title",children:"Tech specs"}),Object(h.jsx)("div",{className:"horizontal-line"}),Object(h.jsxs)("div",{className:"product-desc__tech-details-block",children:[Object(h.jsxs)("div",{className:"product-desc__keys body14",children:[Object(h.jsx)("p",{className:"product-desc__key",children:"Screen"}),Object(h.jsx)("p",{className:"product-desc__key",children:"Resolution"}),Object(h.jsx)("p",{className:"product-desc__key",children:"Processor"}),Object(h.jsx)("p",{className:"product-desc__key",children:"RAM"}),Object(h.jsx)("p",{className:"product-desc__key",children:"Built in memory"}),Object(h.jsx)("p",{className:"product-desc__key",children:"Camera"}),Object(h.jsx)("p",{className:"product-desc__key",children:"Zoom"}),Object(h.jsx)("p",{className:"product-desc__key",children:"Cell"})]}),Object(h.jsxs)("div",{className:"product-desc__values body14",children:[Object(h.jsx)("p",{className:"product-desc__value",children:s.screen}),Object(h.jsx)("p",{className:"product-desc__value",children:s.resolution}),Object(h.jsx)("p",{className:"product-desc__value",children:s.processor}),Object(h.jsx)("p",{className:"product-desc__value",children:s.ram}),Object(h.jsx)("p",{className:"product-desc__value",children:s.capacity}),Object(h.jsx)("p",{className:"product-desc__value",children:s.camera}),Object(h.jsx)("p",{className:"product-desc__value",children:s.zoom}),Object(h.jsx)("p",{className:"product-desc__value",children:s.cell})]})]})]})})]})]})]})},q=function(e){var t=e.products,c=Object(u.p)().id,s=Object(u.n)(),a=Object(d.useContext)(p),n=a.detailedProduct,o=a.setDetailedProduct,j=Object(d.useState)(),b=Object(i.a)(j,2),m=b[0],O=b[1],f=Object(d.useState)(""),v=Object(i.a)(f,2),g=v[0],_=v[1],N=function(){var e=Object(r.a)(l.a.mark((function e(){var s,a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.find((function(e){return e.id===c}))){e.next=3;break}return e.abrupt("return");case 3:return a="../new/products/".concat(s.itemId,".json"),e.next=6,fetch(a,{method:"GET"});case 6:if(200!==(n=e.sent).status){e.next=13;break}return e.next=10,n.json();case 10:r=e.sent,_(s.category),o(r);case 13:O(s);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){t&&N()}),[t]),Object(h.jsxs)("div",{className:"details__page",children:[Object(h.jsx)(T,{id:c,title:g}),Object(h.jsxs)("div",{className:"back-button body12",children:[Object(h.jsx)(x,{className:"no-border",image:"icons/Chevron (Arrow Left).svg",alt:"arrow-left",onClick:function(){s(-1)}}),Object(h.jsx)("div",{className:"back-button__text",onClick:function(){s(-1)},"aria-hidden":!0,children:"Back"})]}),c&&c<=t.length?n&&Object(h.jsx)(z,{products:t,singleProduct:m}):Object(h.jsx)("h1",{children:"No product found"})]})},H=function(){return Object(h.jsx)("h1",{className:"not-found",children:"Page not found :("})},Y=function(){var e=Object(d.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(d.useState)([]),n=Object(i.a)(a,2),o=n[0],j=n[1],b=Object(d.useState)(c),m=Object(i.a)(b,2),O=m[0],p=m[1],f=Object(d.useState)([]),x=Object(i.a)(f,2),v=x[0],_=x[1],N=Object(d.useState)([]),y=Object(i.a)(N,2),w=y[0],C=y[1],P=Object(d.useState)(""),F=Object(i.a)(P,2),E=F[0],T=F[1];Object(d.useEffect)((function(){C(c.filter((function(e){return e.price<e.fullPrice})).sort((function(e,t){return t.price-e.price}))),_(c.filter((function(e){return e.price<e.fullPrice})).sort((function(e,t){return e.price-t.price}))),j(c.sort((function(){return.5-Math.random()})))}),[c]);var V=function(){var e=Object(r.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("new/products.json",{method:"GET"});case 3:if(200!==(t=e.sent).status){e.next=10;break}return e.next=7,t.json();case 7:c=e.sent,s(c),p(c);case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(0),new Error("Error");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){V()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(k,{setVisibleIPhones:p,IPhones:c,searchInput:E,setSearchInput:T}),Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.b,{path:"/",element:Object(h.jsx)(u.a,{to:"/home"})}),Object(h.jsx)(u.b,{path:"/home",element:Object(h.jsxs)("main",{children:[Object(h.jsx)(A,{}),Object(h.jsx)(S,{products:v,title:"Hot prices"}),Object(h.jsx)(I,{phones:c}),Object(h.jsx)(S,{products:w,title:"Brand new models"})]})}),Object(h.jsxs)(u.b,{path:"/phones",children:[Object(h.jsx)(u.b,{index:!0,element:Object(h.jsx)("main",{children:Object(h.jsx)(B,{products:c,setProducts:s,setVisibleProducts:p,visibleProducts:O,title:"Phones",searchInput:E})})}),Object(h.jsx)(u.b,{path:":id",element:Object(h.jsxs)("main",{children:[Object(h.jsx)(q,{products:c}),Object(h.jsx)(S,{products:o,title:"You may also like"})]})})]}),Object(h.jsx)(u.b,{path:"/tablets",children:Object(h.jsx)(u.b,{index:!0,element:Object(h.jsx)("main",{children:Object(h.jsx)(B,{products:[],visibleProducts:[],title:"Tablets",searchInput:E})})})}),Object(h.jsx)(u.b,{path:"/accessories",children:Object(h.jsx)(u.b,{index:!0,element:Object(h.jsx)("main",{children:Object(h.jsx)(B,{products:[],visibleProducts:[],title:"Accessories",searchInput:E})})})}),Object(h.jsx)(u.b,{path:"/cart",element:Object(h.jsx)("main",{children:Object(h.jsx)(L,{})})}),Object(h.jsx)(u.b,{path:"/favourites",element:Object(h.jsx)("main",{children:Object(h.jsx)(R,{})})}),Object(h.jsx)(u.b,{path:"/rights",element:Object(h.jsx)("main",{children:Object(h.jsx)("div",{className:"body12",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint."})})}),Object(h.jsx)(u.b,{path:"/contacts",element:Object(h.jsx)("main",{children:Object(h.jsxs)("h3",{className:"body12",children:["Modile: 12345678",Object(h.jsx)("br",{}),"Facebook: iphone777"]})})}),Object(h.jsx)(u.b,{path:"*",element:Object(h.jsx)(H,{})})]}),Object(h.jsx)("footer",{children:Object(h.jsx)(g,{})})]})};a.a.render(Object(h.jsx)(n.a,{children:Object(h.jsx)(O,{children:Object(h.jsx)(f,{children:Object(h.jsx)(y,{children:Object(h.jsx)(Y,{})})})})}),document.getElementById("root"))}]),[[55,1,2]]]);
//# sourceMappingURL=main.3c420ec3.chunk.js.map