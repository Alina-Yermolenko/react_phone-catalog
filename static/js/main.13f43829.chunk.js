(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(31).concat([function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(25),a=c.n(s),n=c(9),r=c(6),i=c(3),o=c(5),l=c.n(o),u=(c(31),c(1)),d=c.n(u),j=c(7),b=c(0),h=d.a.createContext(null),O=function(e){var t=e.children,c=Object(u.useState)(!1),s=Object(i.a)(c,2),a=s[0],n=s[1],r=Object(u.useState)(!1),o=Object(i.a)(r,2),l=o[0],d=o[1],j=JSON.parse(localStorage.getItem("favProducts")),O=JSON.parse(localStorage.getItem("cartProducts")),m=Object(u.useState)(O||[]),p=Object(i.a)(m,2),f=p[0],x=p[1],v=Object(u.useState)(j||[]),g=Object(i.a)(v,2),_=g[0],N=g[1],y=Object(u.useState)(_),k=Object(i.a)(y,2),w=k[0],C=k[1];return Object(b.jsx)(h.Provider,{value:{cartProducts:f,setCartProducts:x,favProducts:_,setFavProducts:N,visibleFavProducts:w,setVisibleFavProducts:C,isAddedToCart:a,setIsAddedToCart:n,isAddedToFav:l,setIsAddedToFav:d},children:t})},m=d.a.createContext(null),p=function(e){var t=e.children,c=Object(u.useState)(),s=Object(i.a)(c,2),a=s[0],n=s[1];return Object(b.jsx)(m.Provider,{value:{detailedProduct:a,setDetailedProduct:n},children:t})},f=(c(33),function(e){var t=e.num,c=e.image,s=e.alt,a=e.className,n=e.onClick,i=e.imageClass,o=e.product,d=e.products,O=Object(u.useContext)(h),p=O.favProducts,f=O.setFavProducts,x=O.visibleFavProducts,v=O.setVisibleFavProducts,g=Object(u.useContext)(m).detailedProduct,_=o,N=function(){var e=Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d&&(_=d.find((function(e){return e.phoneId===g.id}))),!(t=p.find((function(e){if(e.id===_.id)return e.id===_.id})))){e.next=7;break}return f(p.filter((function(e){return e.id!==t.id}))),v(x.filter((function(e){return e.id!==t.id}))),1===p.length&&localStorage.setItem("favProducts",JSON.stringify([])),e.abrupt("return");case 7:v([].concat(Object(j.a)(x),[_])),f([].concat(Object(j.a)(p),[_]));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){localStorage.setItem("favProducts",JSON.stringify(p))}),[p]),Object(b.jsx)("button",{onClick:!t&&c&&c.includes("Favourite")?N:n,className:"button-link ".concat(a),type:"button",style:{border:i&&"1px solid rgba(180, 189, 195, 1)"},children:t?Object(b.jsx)("div",{children:t}):Object(b.jsx)("img",{className:"button-image ".concat(i),src:c,alt:s})})}),x=(c(34),function(){return Object(b.jsx)("a",{className:"logo__link",href:"#/",children:Object(b.jsx)("img",{src:"img/LOGO.svg",alt:"logo"})})}),v=(c(35),function(){return Object(b.jsxs)("div",{className:"footer",children:[Object(b.jsx)(x,{}),Object(b.jsx)("ul",{className:"footer__navigation-list",id:"footer__navigation-list",children:["github","contacts","rights"].map((function(e){return Object(b.jsx)("li",{className:"footer__navigation-item",children:"github"!==e?Object(b.jsx)(n.c,{className:"footer__navigation-link",to:e,children:e}):Object(b.jsx)("a",{href:"https://github.com/Alina-Yermolenko",children:"github"})},e)}))}),Object(b.jsx)("div",{className:"footer__top",children:Object(b.jsxs)("div",{onClick:function(){window.scroll({top:0,left:0,behavior:"smooth"})},className:"footer__button-up","aria-hidden":!0,children:[Object(b.jsx)("p",{className:"footer__button-text body12",children:"Back to top"}),Object(b.jsx)(f,{className:"arrow up small",image:"icons/Chevron (Arrow Up).svg",alt:"arrow-top",imageClass:"arrow-top__active"})]})})]})}),g=(c(36),c(4)),_=function(e){var t=e.navLinksList;return Object(b.jsx)("ul",{className:"header__navigation-list",id:"hidden",children:t.map((function(e){return Object(b.jsx)("li",{className:"header__navigation-item",id:"header__navigation-item",children:Object(b.jsx)(n.c,{to:e,className:function(e){return e.isActive?"active":"header__navigation-link"},children:e})},e)}))})},N=d.a.createContext(null),y=function(e){var t=e.children,c=Object(u.useState)(16),s=Object(i.a)(c,2),a=s[0],n=s[1],r=Object(u.useState)(1),o=Object(i.a)(r,2),l=o[0],d=o[1],j=Object(u.useState)("newest"),h=Object(i.a)(j,2),O=h[0],m=h[1];return Object(b.jsx)(N.Provider,{value:{itemsOnPage:a,setItemsOnPage:n,currentPage:l,setCurrentPage:d,sortingByValue:O,setSortingByValue:m},children:t})},k=["home","phones","tablets","accessories"],w=function(e){var t=e.setVisibleIPhones,c=e.IPhones,s=e.setSearchInput,a=e.searchInput,r=Object(g.l)().pathname,o=Object(u.useContext)(h),l=o.cartProducts,d=o.favProducts,j=o.setVisibleFavProducts,O=Object(u.useContext)(N),m=O.itemsOnPage,p=O.currentPage,f=O.setCurrentPage,v=O.sortingByValue,y=Object(u.useState)(!1),w=Object(i.a)(y,2),C=w[0],P=w[1],S=p*m-m,I=p*m,A="/favourites"===r||"/phones"===r||"/tablets"===r||"/accessories"===r,E=function(e,t){e(t.filter((function(e,c){return S>t.length?(f(Math.ceil(t.length/m)),c>t.length-m):c>S&&c<=I})))};return Object(u.useEffect)((function(){s(""),"/favourites"===r&&j(d.map((function(e){return e}))),"/phones"===r&&E(t,c)}),[r,m,v]),Object(b.jsx)("header",{className:"header",children:Object(b.jsxs)("div",{className:"header__block",children:[Object(b.jsxs)("div",{className:"header__navigation",children:[Object(b.jsx)(x,{}),Object(b.jsx)(_,{navLinksList:k}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"header__burger header-button",onClick:function(){P(!C)},"aria-hidden":!0,children:[Object(b.jsx)("img",{className:"header-button__image burger__image ",src:"icons/menu-burger.svg",alt:"burger"}),Object(b.jsx)("ul",{className:"header__burger-list",style:{opacity:C?"1":"0",visibility:C?"visible":"hidden",transition:"opacity .3s"},children:k.map((function(e){return Object(b.jsx)("li",{className:"header__burger-item",children:Object(b.jsx)(n.c,{to:e,className:function(e){return e.isActive?"active__burger-link":"header__burger-link"},children:e})},e)}))})]})})]}),Object(b.jsxs)("div",{className:"header__buttons",children:[A&&Object(b.jsxs)("label",{className:"products-search",id:"hidden",children:[Object(b.jsx)("input",{type:"text",placeholder:"Search in ".concat(r.slice(1),"..."),className:"search-input",value:a,onChange:function(e){s(e.target.value)}}),Object(b.jsx)("div",{className:"search-button",children:Object(b.jsx)("img",{src:"icons/Search.svg",alt:"Search",className:"small no-border",onClick:function(){!function(e){switch(r){case"/phones":t(c.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})));break;case"/favourites":j(d.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})))}0===e.length&&"/phones"===r&&E(t,c)}(a)},"aria-hidden":!0})})]}),Object(b.jsx)(n.c,{to:"/favourites",children:Object(b.jsxs)("div",{className:"header-button",children:[Object(b.jsx)("img",{className:"header-button__image",src:"icons/Favourites.svg",alt:"favourites"}),!!d.length&&Object(b.jsx)("span",{className:"favourite-amount",children:d.length})]})}),Object(b.jsx)(n.c,{to:"/cart",children:Object(b.jsxs)("div",{className:"header-button",children:[Object(b.jsx)("img",{className:"header-button__image",src:"icons/Cart.svg",alt:"cart"}),l.length>0&&Object(b.jsx)("span",{className:"cart-amount",children:l.length})]})})]})]})})},C=(c(37),function(){var e=["new/img/banner-phones.png","new/img/banner-accessories.png","new/img/banner-tablets.png"],t=Object(u.useState)(0),c=Object(i.a)(t,2),s=c[0],a=c[1];s>=e.length&&a(0),s<=-1&&a(e.length-1);return Object(u.useEffect)((function(){var e=setInterval((function(){a((function(e){return e+1}))}),5e3);return function(){clearInterval(e)}}),[]),Object(b.jsxs)("div",{id:"slider-main",children:[Object(b.jsxs)("div",{className:"slider",children:[Object(b.jsx)(f,{className:"arrow left long",onClick:function(){a(s-1)},image:"icons/Chevron (Arrow Left).svg",alt:"arrow-left",imageClass:"arrow-left__active"}),Object(b.jsx)("ul",{style:{display:"flex",overflow:"hidden"},children:Object(j.a)(Array(e.length)).map((function(t,c){var a=c;return Object(b.jsx)("li",{children:Object(b.jsx)("div",{className:"slider__images",style:{backgroundImage:"url('".concat(e[c],"')"),transform:"translateX(".concat(100*-s,"%)"),transition:"transform .3s"}})},a)}))}),Object(b.jsx)(f,{className:"arrow right long",onClick:function(){a(s+1)},image:"icons/Chevron (Arrow Right).svg",alt:"arrow-right",imageClass:"arrow-right__active"})]}),Object(b.jsx)("div",{className:"slider__subbuttons",children:Object(j.a)(Array(e.length)).map((function(e,t){return Object(b.jsx)("li",{className:"slider__subbutton ".concat(s===t&&"active__subbutton"),onClick:function(){a(t)},"aria-hidden":!0},"".concat(t,"slider"))}))})]})}),P=(c(38),function(e){var t=[{title:"Mobile phones",image:"new/img/category-phones.png",amount:e.phones.length,background:"#fcdbc1",category:"phones"},{title:"Tablets",image:"new/img/category-tablets.png",amount:0,background:"#8d8d92",category:"tablets"},{title:"Accessories",image:"new/img/category-accessories.png",amount:0,background:"#D53C51",category:"accessories"}];return Object(b.jsxs)("div",{className:"category",children:[Object(b.jsx)("h1",{className:"category__title",children:"Shop by category"}),Object(b.jsx)("div",{className:"category__block",children:Object(b.jsx)("ul",{className:"category__list",children:t.map((function(e){var t=e.title,c=e.amount,s=e.image,a=e.background,r=e.category;return Object(b.jsx)("li",{className:"category__item",children:Object(b.jsxs)(n.b,{to:"../".concat(r),children:[Object(b.jsx)("div",{className:"category__image-block",children:Object(b.jsx)("img",{className:"category__image",src:s,alt:String(c),style:{background:a}})}),Object(b.jsxs)("div",{className:"category__info",children:[Object(b.jsx)("h3",{className:"category__title",children:t}),Object(b.jsx)("div",{className:"category__models-number body14",children:"".concat(c," models")})]})]})},t)}))})})]})}),S=(c(39),c(15)),I=(c(40),function(e){var t=e.product,c=Object(u.useState)(t.count||0),s=Object(i.a)(c,2),a=s[0],n=s[1],o=Object(u.useContext)(h),d=o.cartProducts,j=o.setCartProducts,O=function(){var e=Object(r.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(d.filter((function(e){return e.id!==t.id})));case 2:1===d.length&&localStorage.setItem("cartProducts",JSON.stringify([]));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){localStorage.setItem("cartProducts",JSON.stringify(d))}),[d]),Object(u.useEffect)((function(){a<=0?O():j(d.map((function(e){return e.id===t.id?Object(S.a)(Object(S.a)({},e),{},{count:a}):e})))}),[a]),Object(b.jsxs)("div",{className:"cart-item",children:[Object(b.jsxs)("div",{className:"cart-item__sub-block",children:[Object(b.jsx)(f,{className:"no-border cart-item__close",image:"icons/Close.svg",alt:"x",onClick:O}),Object(b.jsx)("div",{className:"cart-item__picture",children:Object(b.jsx)("img",{src:"new/".concat(t.image),alt:t.itemId,className:"cart-item__image"})}),Object(b.jsx)("p",{className:"cart-item__title body14",children:t.name})]}),Object(b.jsxs)("div",{className:"cart-item__sub-block",children:[Object(b.jsxs)("div",{className:"cart-item__count",children:[Object(b.jsx)(f,{className:"minus",onClick:function(){n((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return e-1}))},image:"icons/Minus.svg",alt:"-"}),Object(b.jsx)("div",{className:"count",children:t.count}),Object(b.jsx)(f,{className:"plus",onClick:function(){n((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return e+1}))},image:"icons/Plus.svg",alt:"+"})]}),Object(b.jsxs)("h2",{className:"cart-item__price",children:["$",t.count&&t.price*t.count]})]})]})}),A=(c(41),function(e){var t=e.text,c=e.onClick,s=e.className,a=e.product,n=e.products,i=a,o=Object(u.useRef)(null),d=Object(u.useContext)(m).detailedProduct,O=Object(u.useContext)(h),p=O.cartProducts,f=O.setCartProducts,x=function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&(i=n.find((function(e){return e.phoneId===d.id}))),t.preventDefault(),!p.find((function(e){if(e.id===i.id)return e.id===i.id}))){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,f([].concat(Object(j.a)(p),[Object(S.a)(Object(S.a)({},i),{},{count:1})]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){localStorage.setItem("cartProducts",JSON.stringify(p))}),[p]),Object(b.jsx)("a",{className:"long-button__link body14 ".concat(s),href:"/",ref:o,onClick:t.includes("cart")?x:c,children:t})}),E=function(){return Object(b.jsx)("h3",{children:"No products found"})},F=function(){var e=Object(g.n)(),t=Object(u.useContext)(h).cartProducts,c=t.reduce((function(e,t){if(t.count)return e+t.price*t.count}),0),s=t.reduce((function(e,t){if(t.count)return e+t.count}),0);return Object(b.jsxs)("div",{className:"cart-page",children:[Object(b.jsxs)("div",{className:"back-button body12",children:[Object(b.jsx)(f,{className:"no-border",image:"icons/Chevron (Arrow Left).svg",alt:"arrow-left",onClick:function(){e(-1)}}),Object(b.jsx)("div",{className:"back-button__text",children:"Back"})]}),Object(b.jsx)("h1",{className:"cart-page__title",children:"Cart"}),Object(b.jsx)("div",{className:"cart-page__blocks",children:t.length?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"cart-page__products",children:Object(b.jsx)("ul",{className:"cart-page__list",children:t.map((function(e){return Object(b.jsx)("li",{className:"cart-page__item",children:Object(b.jsx)(I,{product:e})},e.id)}))})}),Object(b.jsxs)("div",{className:"cart-page__price",children:[Object(b.jsxs)("h1",{className:"cart-page__price-total",children:["$",c]}),Object(b.jsx)("div",{className:"cart-page__total-items",children:"Total for ".concat(s," items")}),Object(b.jsx)("div",{className:"horizontal-line"}),Object(b.jsx)(A,{text:"Checkout"})]})]}):Object(b.jsx)(E,{})})]})},L=(c(42),function(e){var t=e.id,c=void 0===t?"0":t,s=e.title,a=Object(u.useContext)(m).detailedProduct,r=Object(g.l)().pathname;return Object(b.jsxs)("div",{className:"navigation-buttons",children:[Object(b.jsx)(n.c,{to:"/",children:Object(b.jsx)(f,{image:"icons/Home.svg",alt:"home",className:"no-border"})}),Object(b.jsxs)("div",{className:"sub-buttons body12",children:[Object(b.jsx)("img",{className:"button-image",src:"icons/Chevron (Arrow Right).svg",alt:"arrow-right"}),Object(b.jsx)("a",{href:"#/".concat(s),className:"sub-link",children:s})]}),a&&r.includes(c)&&Object(b.jsxs)("div",{className:"sub-buttons body12",children:[Object(b.jsx)("img",{className:"button-image",src:"icons/Chevron (Arrow Right).svg",alt:"arrow-right"}),Object(b.jsx)(n.b,{to:"/phones/".concat(c),className:"sub-link",children:a.name})]})]})}),T=(c(43),function(e){var t=e.product,c=e.link,s=e.products,a=Object(u.useState)(!1),o=Object(i.a)(a,2),d=o[0],j=o[1],O=Object(u.useState)(!1),p=Object(i.a)(O,2),x=p[0],v=p[1],g=Object(u.useContext)(m).setDetailedProduct,_=t.name,N=t.price,y=t.fullPrice,k=t.screen,w=t.capacity,C=t.ram,P=t.image,S=Object(u.useContext)(h),I=S.cartProducts,E=S.favProducts,F=function(){var e=Object(r.a)(l.a.mark((function e(){var c,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=2;break}return e.abrupt("return");case 2:if(!(c=s.find((function(e){return e.id===t.id})))){e.next=19;break}return e.prev=4,e.next=7,fetch("new/products/".concat(c.itemId,".json"),{method:"GET"});case 7:if(200!==(a=e.sent).status){e.next=14;break}return e.next=11,a.json();case 11:n=e.sent,window.scroll({top:0,left:0,behavior:"smooth"}),g(n);case 14:e.next=19;break;case 16:throw e.prev=16,e.t0=e.catch(4),new Error(String(e.t0));case 19:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){I.map((function(e){e.id===t.id&&j(!0)}))}),[I]),Object(u.useEffect)((function(){v(!1),E.map((function(e){e.id===t.id&&v(!0)}))}),[E]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"product",children:[Object(b.jsxs)(n.b,{to:c||"/".concat(t.category,"/").concat(t.id),onClick:F,className:"product__link",children:[Object(b.jsx)("img",{className:"product__image",src:"new/".concat(P),alt:_}),Object(b.jsx)("h3",{className:"product__title body14",children:_})]}),Object(b.jsxs)("div",{className:"product__prices",children:[Object(b.jsxs)("h2",{className:"product__price",children:["$",N]}),Object(b.jsxs)("h2",{className:"product__old-price",children:["$",y]})]}),Object(b.jsxs)("div",{className:"product__info",children:[Object(b.jsxs)("div",{className:"product__keys body12",children:[Object(b.jsx)("p",{className:"product__key",children:"Screen"}),Object(b.jsx)("p",{className:"product__key",children:"Capacity"}),Object(b.jsx)("p",{className:"product__key",children:"Ram"})]}),Object(b.jsxs)("div",{className:"product__values body12",children:[Object(b.jsx)("p",{className:"product__value",children:k}),Object(b.jsx)("p",{className:"product__value",children:w}),Object(b.jsx)("p",{className:"product__value",children:C})]})]}),Object(b.jsxs)("div",{className:"product__buttons",children:[Object(b.jsx)(A,{text:d?"Added to cart":"Add to cart",className:d?"selected":"",product:t}),Object(b.jsx)(f,{image:x?"icons/Favourites Filled (Heart Like).svg":"icons/Favourites.svg",product:t})]})]})})}),V=(c(44),function(){var e=Object(u.useContext)(h).visibleFavProducts;return Object(b.jsxs)("div",{className:"favourites",children:[Object(b.jsx)(L,{title:"favourites"}),Object(b.jsx)("h1",{className:"favourites__title",children:"Favourites"}),Object(b.jsx)("ul",{className:"favourites__list",children:e.length?e.map((function(e){return Object(b.jsx)("li",{className:"favourites__item",children:Object(b.jsx)(T,{product:e})},e.id)})):Object(b.jsx)(E,{})})]})}),R=(c(45),function(e){var t=e.setCurrentPage,c=e.currentPage,s=e.totalPages,a=Object(u.useRef)(null),n=Object(u.useState)(0),r=Object(i.a)(n,2),o=r[0],l=r[1],d=Object(u.useState)(0),h=Object(i.a)(d,2),O=h[0],m=h[1],p=Object(u.useState)(0),x=Object(i.a)(p,2),v=x[0],g=x[1],_=Object(u.useState)(""),N=Object(i.a)(_,2),y=N[0],k=N[1],w=Object(u.useState)(""),C=Object(i.a)(w,2),P=C[0],S=C[1];Object(u.useEffect)((function(){l(a.current.offsetWidth),m(5*a.current.offsetWidth)}),[]);return Object(u.useEffect)((function(){S("button-right__active"),k("button-right__active"),s<=c&&g((s-5)*o),s===c&&S(""),c<=1&&k("")}),[s,c]),Object(b.jsxs)("div",{className:"product-page__block",children:[Object(b.jsx)(f,{className:"arrow left small",image:"icons/Chevron (Arrow Left).svg",alt:"arrow-left",onClick:function(){if(1!==c)return[2,3,4,5].includes(c)?(g(0),void t(c-1)):void(c>1&&(g(v-o),t(c-1)));g(0)},imageClass:y}),Object(b.jsx)("div",{className:"product-page__buttons",style:{minWidth:"".concat(O,"px"),maxWidth:"".concat(O,"px")},children:Object(b.jsx)("ul",{style:{marginLeft:"".concat(-v,"px")},className:"product-page__buttons-list",children:Object(j.a)(Array(s)).map((function(e,s){var n,r=s;return Object(b.jsx)("li",{ref:a,className:"product-page__buttons-item",children:Object(b.jsx)(f,{className:"arrow small ".concat((n=s+1,c===n&&"active-button")),onClick:function(){t(s+1)},num:s+1,alt:String(s+1)})},r)}))})}),Object(b.jsx)(f,{className:"arrow right small pagination-right",image:"icons/Chevron (Arrow Right).svg",onClick:function(){if(v<s*o){if(s<5)return g(0),void t(c+1);if(s===c)return void g((s-5)*o);if(s===c+1||s===c+2||s===c+3||s===c+4)return g((s-5)*o),void t(c+1);s>5&&(g(v+o),t(c+1))}},alt:"arrow-right",imageClass:P})]})}),B=(c(46),function(e){var t=e.products,c=e.title,s=e.setVisibleProducts,a=e.visibleProducts,n=e.setProducts,o=e.searchInput,d=Object(u.useContext)(N),j=d.itemsOnPage,h=d.setItemsOnPage,O=d.currentPage,m=d.setCurrentPage,p=d.sortingByValue,f=d.setSortingByValue,x=Object(u.useState)(!1),v=Object(i.a)(x,2),g=v[0],_=v[1],y=!o&&t?t.length:1,k=Math.ceil(y/j),w=O*j-j,C=O*j,P=function(){var e=Object(r.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&n){e.next=2;break}return e.abrupt("return");case 2:e.t0=c,e.next="newest"===e.t0?5:"alphabetically"===e.t0?8:"cheapest"===e.t0?11:14;break;case 5:return n(t.sort((function(e,t){return t.year-e.year}))),f(c),e.abrupt("return");case 8:return n(t.sort((function(e,t){return e.name.localeCompare(t.name,"en",{numeric:!0})}))),f(c),e.abrupt("return");case 11:return n(t.sort((function(e,t){return e.price-t.price}))),f(c),e.abrupt("return");case 14:n(t);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){t&&t.length&&s&&s(t.filter((function(e,c){return w>t.length?(m(Math.ceil(t.length/j)),c>t.length-j):c>w&&c<=C})))}),[j,O,p,g]),Object(u.useEffect)((function(){a&&a.length>0&&(_(!0),P(p))}),[a]),Object(b.jsxs)("div",{className:"product-page",children:[Object(b.jsx)(L,{title:c.toLowerCase()}),Object(b.jsxs)("div",{className:"product-page__main",children:[Object(b.jsxs)("div",{className:"product-page__main-info",children:[Object(b.jsx)("h1",{className:"product-page__title",children:c}),Object(b.jsx)("p",{className:"product-page__subtitle body14",children:"".concat(t?t.length:0," models")})]}),t&&t.length?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"product-page__search",children:[Object(b.jsx)("div",{className:"product-page__sort",children:Object(b.jsxs)("label",{htmlFor:"sortBy",children:[Object(b.jsx)("div",{className:"product-page__sort-title body12",children:"Sort by"}),Object(b.jsxs)("select",{className:"product-page__select sort",id:"sortBy",style:{backgroundImage:'url("icons/Chevron (Arrow Down).svg")'},value:p,onChange:function(e){P(e.target.value)},children:[Object(b.jsx)("option",{defaultValue:p,value:"newest",children:"Newest"}),Object(b.jsx)("option",{value:"alphabetically",children:"Alphabetically"}),Object(b.jsx)("option",{value:"cheapest",children:"Cheapest"})]})]})}),Object(b.jsx)("div",{className:"product-page__sort",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("div",{className:"product-page__sort-title body12",children:"Items on page"}),Object(b.jsxs)("select",{className:"product-page__select pages",value:j,onChange:function(e){h(+e.target.value)},style:{backgroundImage:'url("icons/Chevron (Arrow Down).svg")'},children:[Object(b.jsx)("option",{defaultValue:j,value:"4",children:"4"}),Object(b.jsx)("option",{value:"8",children:"8"}),Object(b.jsx)("option",{value:"16",children:"16"}),Object(b.jsx)("option",{value:t.length,children:"All"})]})]})})]}),Object(b.jsx)("ul",{className:"product-page__list",children:a&&a.length?a.map((function(e){return Object(b.jsx)("li",{className:"product-page__item",children:"phones"===e.category&&Object(b.jsx)(T,{product:e})},e.id)})):Object(b.jsx)(E,{})}),a&&k>1&&Object(b.jsx)(R,{currentPage:O,setCurrentPage:m,totalPages:k})]}):Object(b.jsx)("h2",{children:"No products found"})]})]})}),D=(c(47),c(48),c(49),c(50),{black:"#000000",white:"#ffffff",rosegold:"#f5cec7",purple:"#d5d2dd",red:"#ca243d",yellow:"#fed45b",gold:"#fcdbc1",silver:"#f3f1ec",green:"#607170",midnightgreen:"#555e57",spacegray:"#61605e",coral:"#fe6a56"}),M=function(e){var t=e.products,c=Object(u.useContext)(m),s=c.detailedProduct,a=c.setDetailedProduct,n=function(){var e=Object(r.a)(l.a.mark((function e(c){var n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.find((function(e){return e.phoneId===s.id.replace(s.color,c)})),e.next=3,fetch("new/products/".concat(n.itemId,".json"),{method:"GET"});case 3:if(200!==(r=e.sent).status){e.next=10;break}return e.next=7,r.json();case 7:return i=e.sent,window.location.replace("#/".concat(n.category,"/").concat(n.id)),e.abrupt("return",a(i));case 10:window.history.replaceState(null,"","#/".concat(n.category,"/").concat(n.id));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"avaliable-colors body12",children:[Object(b.jsx)("p",{children:"Avaliable colors"}),Object(b.jsx)("ul",{className:"avaliable-colors__list",children:s&&s.colorsAvailable.map((function(e){return Object(b.jsx)("li",{className:"avaliable-colors__item ".concat((t=e,t===s.color&&"active-color")),style:{backgroundColor:D[e]},onClick:function(){n(e)},"aria-hidden":"true"},e);var t}))}),Object(b.jsx)("div",{className:"horizontal-line"})]})},J=(c(51),function(e){var t=e.products,c=Object(u.useContext)(m),s=c.detailedProduct,a=c.setDetailedProduct,n=function(){var e=Object(r.a)(l.a.mark((function e(c){var n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.find((function(e){return e.phoneId===s.id.replace(s.capacity.toLowerCase(),c.toLowerCase())})))){e.next=11;break}return e.next=4,fetch("new/products/".concat(n.itemId,".json"),{method:"GET"});case 4:if(200!==(r=e.sent).status){e.next=11;break}return e.next=8,r.json();case 8:return i=e.sent,window.location.replace("#/".concat(n.category,"/").concat(n.id)),e.abrupt("return",a(i));case 11:a(n);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"capacity",children:[Object(b.jsx)("div",{className:"capacity__text body 12",children:"Select capacity"}),Object(b.jsx)("ul",{className:"capacity__list",children:s.capacityAvailable.map((function(e){return Object(b.jsx)("li",{className:"capacity__item ".concat((t=e,t===s.capacity&&"active-button")),onClick:function(){n(e)},"aria-hidden":"true",children:e},e);var t}))})]})}),W=function(e){var t=e.products,c=e.singleProduct,s=Object(u.useContext)(h),a=s.cartProducts,n=s.favProducts,r=s.setIsAddedToCart,i=s.isAddedToCart,o=s.setIsAddedToFav,l=s.isAddedToFav,d=Object(u.useContext)(m).detailedProduct,j=d.ram,O=d.processor,p=d.id,x=d.screen,v=d.resolution,g=d.priceDiscount,_=d.priceRegular,N=d.capacity,y=d.colorsAvailable;return Object(u.useEffect)((function(){r(!1),a.map((function(e){if(e.phoneId===d.id)return r(!0)}))}),[d,a]),Object(u.useEffect)((function(){o(!1),n.map((function(e){e.phoneId===d.id&&o(!0)}))}),[d,n]),d&&Object(b.jsxs)("div",{className:"buying-info",children:[Object(b.jsxs)("div",{className:"buying-info__details",children:[y&&Object(b.jsx)(M,{products:t}),N&&Object(b.jsx)(J,{products:t}),g&&Object(b.jsxs)("div",{className:"buying-info__price",children:[Object(b.jsxs)("h1",{className:"product__price",children:["$",g]}),Object(b.jsxs)("h2",{className:"product__old-price",children:["$",_]})]}),Object(b.jsxs)("div",{className:"buying-info__buttons",children:[Object(b.jsx)(A,{text:i?"Added to cart":"Add to cart",className:i&&"selected",product:c,products:t}),Object(b.jsx)(f,{image:l?"icons/Favourites Filled (Heart Like).svg":"icons/Favourites.svg",products:t})]}),Object(b.jsxs)("div",{className:"buying-info__tech-details body12",children:[Object(b.jsxs)("div",{className:"buying-info__keys",children:[Object(b.jsx)("p",{className:"buying-info__key",children:"Screen"}),Object(b.jsx)("p",{className:"buying-info__key",children:"Resolution"}),Object(b.jsx)("p",{className:"buying-info__key",children:"Processor"}),Object(b.jsx)("p",{className:"buying-info__key",children:"RAM"})]}),Object(b.jsxs)("div",{className:"buying-info__values",children:[Object(b.jsx)("p",{className:"buying-info__value",children:x}),Object(b.jsx)("p",{className:"buying-info__value",children:v}),Object(b.jsx)("p",{className:"buying-info__value",children:O}),Object(b.jsx)("p",{className:"buying-info__value",children:j})]})]})]}),Object(b.jsx)("p",{className:"product-id body12",children:p})]})},$=(c(52),function(){var e=Object(u.useState)(0),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(u.useContext)(m).detailedProduct;return Object(b.jsxs)("div",{className:"pictures-block",children:[Object(b.jsx)("ul",{className:"pictures-block__list",children:a.images.map((function(e,t){return Object(b.jsx)("li",{className:"pictures-block__item ".concat((a=t,a===c&&"selected-picture")),onClick:function(){return s(t)},"aria-hidden":"true",children:Object(b.jsx)("img",{src:"new/".concat(e),alt:"phone",className:"pictures-block__image"})},e);var a}))}),Object(b.jsx)("img",{src:"new/".concat(a.images[c]),alt:"main",className:"pictures-block__main"})]})}),z=(c(53),function(){var e=Object(u.useContext)(m).detailedProduct;return Object(b.jsxs)("div",{className:"product-desc__text",children:[Object(b.jsx)("h2",{className:"product-desc__title",children:"About"}),Object(b.jsx)("div",{className:"horizontal-line"}),Object(b.jsx)("ul",{className:"product-desc__list",children:e.description.map((function(e){return Object(b.jsxs)("li",{className:"product-desc__item",children:[Object(b.jsx)("h3",{className:"product-desc__item-title",children:e.title}),e.text.map((function(e){return Object(b.jsx)("p",{className:"product-desc__item-text body14",children:e})}))]},e.title)}))})]})}),G=function(e){var t=e.products,c=e.singleProduct,s=Object(u.useContext)(m).detailedProduct;return Object(b.jsxs)("div",{className:"product-desc",children:[Object(b.jsx)("h1",{className:"product-desc__title",children:s.name}),Object(b.jsxs)("div",{className:"product-desc__block",children:[Object(b.jsxs)("div",{className:"product-desc__info",children:[Object(b.jsx)($,{}),Object(b.jsx)(W,{products:t,singleProduct:c})]}),Object(b.jsxs)("div",{className:"product-desc__info",children:[Object(b.jsx)(z,{}),Object(b.jsx)("div",{className:"product-desc__text",children:Object(b.jsxs)("div",{className:"product-desc__tech-details",children:[Object(b.jsx)("h2",{className:"product-desc__title",children:"Tech specs"}),Object(b.jsx)("div",{className:"horizontal-line"}),Object(b.jsxs)("div",{className:"product-desc__tech-details-block",children:[Object(b.jsxs)("div",{className:"product-desc__keys body14",children:[Object(b.jsx)("p",{className:"product-desc__key",children:"Screen"}),Object(b.jsx)("p",{className:"product-desc__key",children:"Resolution"}),Object(b.jsx)("p",{className:"product-desc__key",children:"Processor"}),Object(b.jsx)("p",{className:"product-desc__key",children:"RAM"}),Object(b.jsx)("p",{className:"product-desc__key",children:"Built in memory"}),Object(b.jsx)("p",{className:"product-desc__key",children:"Camera"}),Object(b.jsx)("p",{className:"product-desc__key",children:"Zoom"}),Object(b.jsx)("p",{className:"product-desc__key",children:"Cell"})]}),Object(b.jsxs)("div",{className:"product-desc__values body14",children:[Object(b.jsx)("p",{className:"product-desc__value",children:s.screen}),Object(b.jsx)("p",{className:"product-desc__value",children:s.resolution}),Object(b.jsx)("p",{className:"product-desc__value",children:s.processor}),Object(b.jsx)("p",{className:"product-desc__value",children:s.ram}),Object(b.jsx)("p",{className:"product-desc__value",children:s.capacity}),Object(b.jsx)("p",{className:"product-desc__value",children:s.camera}),Object(b.jsx)("p",{className:"product-desc__value",children:s.zoom}),Object(b.jsx)("p",{className:"product-desc__value",children:s.cell})]})]})]})})]})]})]})},q=function(e){var t=e.products,c=Object(g.p)().id,s=Object(g.n)(),a=Object(u.useContext)(m),n=a.detailedProduct,o=a.setDetailedProduct,d=Object(u.useState)(),j=Object(i.a)(d,2),h=j[0],O=j[1],p=Object(u.useState)(""),x=Object(i.a)(p,2),v=x[0],_=x[1],N=function(){var e=Object(r.a)(l.a.mark((function e(){var s,a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.find((function(e){return e.id===c}))){e.next=3;break}return e.abrupt("return");case 3:return a="new/products/".concat(s.itemId,".json"),e.next=6,fetch(a,{method:"GET"});case 6:if(200!==(n=e.sent).status){e.next=13;break}return e.next=10,n.json();case 10:r=e.sent,_(s.category),o(r);case 13:_(s.category),O(s);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){t&&N()}),[t,c,v,h]),Object(b.jsxs)("div",{className:"details__page",children:[Object(b.jsx)(L,{id:c,title:v}),Object(b.jsxs)("div",{className:"back-button body12",children:[Object(b.jsx)(f,{className:"no-border",image:"icons/Chevron (Arrow Left).svg",alt:"arrow-left",onClick:function(){s(-1)}}),Object(b.jsx)("div",{className:"back-button__text",onClick:function(){s(-1)},"aria-hidden":!0,children:"Back"})]}),c&&c<=t.length?n&&Object(b.jsx)(G,{products:t,singleProduct:h}):Object(b.jsx)("h1",{children:"No product found"})]})},H=function(){return Object(b.jsx)("h1",{className:"not-found",children:"Page not found :("})},Y=(c(54),function(e){var t=e.products,c=e.title,s=Object(g.l)().pathname,a=Object(u.useState)(0),n=Object(i.a)(a,2),r=n[0],o=n[1],l=Object(u.useState)(0),d=Object(i.a)(l,2),j=d[0],h=d[1],O=Object(u.useState)(0),m=Object(i.a)(O,2),p=m[0],x=m[1],v=Object(u.useState)(!1),_=Object(i.a)(v,2),N=_[0],y=_[1],k=Object(u.useState)(""),w=Object(i.a)(k,2),C=w[0],P=w[1],S=Object(u.useState)(""),I=Object(i.a)(S,2),A=I[0],E=I[1],F=Object(u.useRef)(null),L=Object(u.useRef)(null);return Object(u.useEffect)((function(){if(L.current&&h(L.current.offsetWidth),r>0)return P("button-left__active"),r<=p?void E("button-right__active"):void 0;E("button-right__active")}),[r]),Object(b.jsxs)("div",{className:"products-list-with-slider__block",ref:L,children:[Object(b.jsxs)("div",{className:"products-list-with-slider__header",children:[Object(b.jsx)("h1",{className:"block__title",children:c}),Object(b.jsxs)("div",{className:"slider-buttons",children:[Object(b.jsx)(f,{className:"arrow left small",onClick:function(){P(""),F.current&&F&&r>0&&o(r-F.current.offsetWidth)},imageClass:C,image:"icons/Chevron (Arrow Left).svg",alt:"arrow-left"}),Object(b.jsx)(f,{className:"arrow right small",onClick:function(){y(!N),E(""),r>p||F.current&&(o(r+F.current.offsetWidth),x(F.current.offsetWidth*(t.length-1-Math.ceil(j/F.current.offsetWidth))))},imageClass:A,image:"icons/Chevron (Arrow Right).svg",alt:"arrow-right"})]})]}),Object(b.jsx)("ul",{className:"product-list",style:{marginLeft:"".concat(-r,"px"),transition:"margin-left .5s"},children:t.map((function(e){return Object(b.jsx)("li",{ref:F,className:"product-list__slider-item","aria-hidden":!0,children:Object(b.jsx)("div",{className:"product-list__slider-card",children:Object(b.jsx)(T,{product:e,products:t,link:"/home"!==s?"../".concat(e.id):"../".concat(e.category,"/").concat(e.id)})})},e.id)}))})]})}),U=function(e){var t=e.IPhones,c=e.visibleIPhones,s=e.setVisibleIPhones,a=e.isError,n=e.searchInput,r=e.setIPhones,o=Object(u.useState)([]),l=Object(i.a)(o,2),d=l[0],j=l[1],h=Object(u.useState)([]),O=Object(i.a)(h,2),m=O[0],p=O[1],f=Object(u.useState)([]),x=Object(i.a)(f,2),v=x[0],_=x[1];return Object(u.useEffect)((function(){_(t.filter((function(e){return e.price<e.fullPrice})).sort((function(e,t){return t.price-e.price}))),p(t.filter((function(e){return e.price<e.fullPrice})).sort((function(e,t){return e.price-t.price}))),j(t.sort((function(){return.5-Math.random()})))}),[t]),Object(b.jsxs)(g.d,{children:[Object(b.jsx)(g.b,{path:"/",element:Object(b.jsx)(g.a,{to:"/home"})}),Object(b.jsx)(g.b,{path:"/home",element:Object(b.jsxs)("main",{children:[Object(b.jsx)(C,{}),a?Object(b.jsx)("h2",{children:"No products found"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Y,{products:m,title:"Hot prices"}),Object(b.jsx)(P,{phones:t}),Object(b.jsx)(Y,{products:v,title:"Brand new models"})]})]})}),Object(b.jsxs)(g.b,{path:"/phones",children:[Object(b.jsx)(g.b,{index:!0,element:Object(b.jsx)("main",{children:Object(b.jsx)(B,{products:t,setProducts:r,setVisibleProducts:s,visibleProducts:c,title:"Phones",searchInput:n})})}),Object(b.jsx)(g.b,{path:":id",element:Object(b.jsxs)("main",{children:[Object(b.jsx)(q,{products:t}),Object(b.jsx)(Y,{products:d,title:"You may also like"})]})})]}),Object(b.jsx)(g.b,{path:"/tablets",children:Object(b.jsx)(g.b,{index:!0,element:Object(b.jsx)("main",{children:Object(b.jsx)(B,{products:[],visibleProducts:[],title:"Tablets",searchInput:n})})})}),Object(b.jsx)(g.b,{path:"/accessories",children:Object(b.jsx)(g.b,{index:!0,element:Object(b.jsx)("main",{children:Object(b.jsx)(B,{products:[],visibleProducts:[],title:"Accessories",searchInput:n})})})}),Object(b.jsx)(g.b,{path:"/cart",element:Object(b.jsx)("main",{children:Object(b.jsx)(F,{})})}),Object(b.jsx)(g.b,{path:"/favourites",element:Object(b.jsx)("main",{children:Object(b.jsx)(V,{})})}),Object(b.jsx)(g.b,{path:"/rights",element:Object(b.jsx)("main",{children:Object(b.jsx)("div",{className:"body12",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint."})})}),Object(b.jsx)(g.b,{path:"/contacts",element:Object(b.jsx)("main",{children:Object(b.jsxs)("h3",{className:"body12",children:["Modile: 12345678",Object(b.jsx)("br",{}),"Facebook: iphone777"]})})}),Object(b.jsx)(g.b,{path:"*",element:Object(b.jsx)(H,{})})]})},X=function(){var e=Object(u.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(u.useState)(c),n=Object(i.a)(a,2),o=n[0],d=n[1],j=Object(u.useState)(""),h=Object(i.a)(j,2),O=h[0],m=h[1],p=Object(u.useState)(!1),f=Object(i.a)(p,2),x=f[0],g=f[1],_=function(){var e=Object(r.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("new/products.json");case 3:if(200!==(t=e.sent).status){e.next=11;break}return e.next=7,t.json();case 7:c=e.sent,s(c),d(c),g(!1);case 11:e.next=17;break;case 13:throw e.prev=13,e.t0=e.catch(0),g(!0),new Error("Error");case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){_()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(w,{setVisibleIPhones:d,IPhones:c,searchInput:O,setSearchInput:m}),Object(b.jsx)(U,{IPhones:c,visibleIPhones:o,isError:x,setIPhones:s,setVisibleIPhones:d,searchInput:O}),Object(b.jsx)("footer",{children:Object(b.jsx)(v,{})})]})};a.a.render(Object(b.jsx)(n.a,{children:Object(b.jsx)(O,{children:Object(b.jsx)(p,{children:Object(b.jsx)(y,{children:Object(b.jsx)(X,{})})})})}),document.getElementById("root"))}]),[[55,1,2]]]);
//# sourceMappingURL=main.13f43829.chunk.js.map