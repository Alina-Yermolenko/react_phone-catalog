(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(31).concat([function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(25),a=c.n(s),n=c(9),r=c(6),i=c(5),o=c(4),l=c.n(o),u=(c(31),c(3)),d=c(1),j=c.n(d),b=c(7),h=c(0),m=j.a.createContext(null),O=function(e){var t=e.children,c=Object(d.useState)(!1),s=Object(i.a)(c,2),a=s[0],n=s[1],r=Object(d.useState)(!1),o=Object(i.a)(r,2),l=o[0],u=o[1],j=JSON.parse(localStorage.getItem("favProducts")),b=JSON.parse(localStorage.getItem("cartProducts")),O=Object(d.useState)(b||[]),p=Object(i.a)(O,2),x=p[0],f=p[1],_=Object(d.useState)(j||[]),v=Object(i.a)(_,2),g=v[0],N=v[1],y=Object(d.useState)(g),k=Object(i.a)(y,2),w=k[0],C=k[1];return Object(h.jsx)(m.Provider,{value:{cartProducts:x,setCartProducts:f,favProducts:g,setFavProducts:N,visibleFavProducts:w,setVisibleFavProducts:C,isAddedToCart:a,setIsAddedToCart:n,isAddedToFav:l,setIsAddedToFav:u},children:t})},p=j.a.createContext(null),x=function(e){var t=e.children,c=Object(d.useState)(),s=Object(i.a)(c,2),a=s[0],n=s[1];return Object(h.jsx)(p.Provider,{value:{detailedProduct:a,setDetailedProduct:n},children:t})},f=(c(33),function(e){var t=e.num,c=e.image,s=e.alt,a=e.className,n=e.onClick,i=e.imageClass,o=e.product,u=e.products,j=Object(d.useContext)(m),O=j.favProducts,x=j.setFavProducts,f=j.visibleFavProducts,_=j.setVisibleFavProducts,v=Object(d.useContext)(p).detailedProduct,g=o,N=function(){var e=Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u&&(g=u.find((function(e){return e.phoneId===v.id}))),!(t=O.find((function(e){if(e.id===g.id)return e.id===g.id})))){e.next=7;break}return x(O.filter((function(e){return e.id!==t.id}))),_(f.filter((function(e){return e.id!==t.id}))),1===O.length&&localStorage.setItem("favProducts",JSON.stringify([])),e.abrupt("return");case 7:_([].concat(Object(b.a)(f),[g])),x([].concat(Object(b.a)(O),[g]));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){localStorage.setItem("favProducts",JSON.stringify(O))}),[O]),Object(h.jsx)("button",{onClick:!t&&c.includes("Favourite")?N:n,className:"button-link ".concat(a),type:"button",children:t?Object(h.jsx)("div",{children:t}):Object(h.jsx)("img",{className:"button-image ".concat(i),src:c,alt:s})})}),_=(c(34),function(){return Object(h.jsx)("a",{className:"logo__link",href:"/",children:Object(h.jsx)("img",{src:"/img/LOGO.svg",alt:"logo"})})}),v=(c(35),function(){return Object(h.jsxs)("div",{className:"footer",children:[Object(h.jsx)(_,{}),Object(h.jsx)("ul",{className:"footer__navigation-list",children:["github","contacts","rights"].map((function(e){return Object(h.jsx)("li",{className:"footer__navigation-item",children:"github"!==e?Object(h.jsx)(n.c,{className:"footer__navigation-link",to:e,children:e}):Object(h.jsx)("a",{href:"https://github.com/Alina-Yermolenko",children:"github"})},e)}))}),Object(h.jsx)("div",{className:"footer__top",children:Object(h.jsxs)("div",{onClick:function(){window.scroll({top:0,left:0,behavior:"smooth"})},className:"footer__button-up","aria-hidden":!0,children:[Object(h.jsx)("p",{className:"footer__button-text body12",children:"Back to top"}),Object(h.jsx)(f,{className:"arrow up small",image:"/icons/Chevron (Arrow Up).svg",alt:"^"})]})})]})}),g=(c(36),function(e){var t=e.setVisibleIPhones,c=e.IPhones,s=e.setSearchInput,a=e.searchInput,r=Object(u.l)().pathname,i=Object(d.useContext)(m),o=i.cartProducts,l=i.favProducts,j=i.setVisibleFavProducts;return Object(h.jsx)("header",{className:"header",children:Object(h.jsxs)("div",{className:"header__block",children:[Object(h.jsxs)("div",{className:"header__navigation",children:[Object(h.jsx)(_,{}),Object(h.jsx)("ul",{className:"header__navigation-list",children:["home","phones","tablets","accessories"].map((function(e){return Object(h.jsx)("li",{className:"header__navigation-item",children:Object(h.jsx)(n.c,{to:e,className:function(e){return e.isActive?"active":"header__navigation-link"},children:e})},e)}))})]}),Object(h.jsxs)("div",{className:"header__buttons",children:[("/favourites"===r||"/phones"===r||"/tablets"===r||"/accessories"===r)&&Object(h.jsxs)("label",{className:"products-search",children:[Object(h.jsx)("input",{type:"text",placeholder:"Search in ".concat(r.slice(1),"..."),className:"search-input",value:a,onChange:function(e){s(e.target.value),function(e){switch(r){case"/phones":t(c.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())})));break;case"/favourites":j(l.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())})))}}(e)}}),Object(h.jsx)("img",{src:"/icons/Search.svg",alt:"Search",className:"small no-border"})]}),Object(h.jsx)(n.c,{to:"/favourites",children:Object(h.jsxs)("div",{className:"header-button",children:[Object(h.jsx)("img",{className:"header-button__image",src:"/icons/Favourites.svg",alt:"favourites"}),l.length>0&&Object(h.jsx)("span",{className:"favourite-amount",children:l.length})]})}),Object(h.jsx)(n.c,{to:"/cart",children:Object(h.jsxs)("div",{className:"header-button",children:[Object(h.jsx)("img",{className:"header-button__image",src:"/icons/Cart.svg",alt:"cart"}),o.length>0&&Object(h.jsx)("span",{className:"cart-amount",children:o.length})]})})]})]})})}),N=(c(37),c(15)),y=(c(38),function(e){var t=e.text,c=e.onClick,s=e.className,a=e.product,n=e.products,i=a,o=Object(d.useRef)(null),u=Object(d.useContext)(p).detailedProduct,j=Object(d.useContext)(m),O=j.cartProducts,x=j.setCartProducts,f=function(){var e=Object(r.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&(i=n.find((function(e){return e.phoneId===u.id}))),t.preventDefault(),!O.find((function(e){if(e.id===i.id)return e.id===i.id}))){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,x([].concat(Object(b.a)(O),[Object(N.a)(Object(N.a)({},i),{},{count:1})]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){localStorage.setItem("cartProducts",JSON.stringify(O))}),[O]),Object(h.jsx)("a",{className:"long-button__link body14 ".concat(s),href:"/",ref:o,onClick:t.includes("cart")?f:c,children:t})}),k=(c(39),function(e){var t=e.product,c=e.link,s=e.products,a=Object(d.useState)(!1),o=Object(i.a)(a,2),u=o[0],j=o[1],b=Object(d.useState)(!1),O=Object(i.a)(b,2),x=O[0],_=O[1],v=Object(d.useContext)(p).setDetailedProduct,g=t.name,N=t.price,k=t.fullPrice,w=t.screen,C=t.capacity,P=t.ram,S=t.image,A=Object(d.useContext)(m),I=A.cartProducts,F=A.favProducts;return Object(d.useEffect)((function(){I.map((function(e){e.id===t.id&&j(!0)}))}),[I]),Object(d.useEffect)((function(){_(!1),F.map((function(e){e.id===t.id&&_(!0)}))}),[F]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"product",children:[Object(h.jsxs)(n.b,{to:c||"../".concat(t.category,"/").concat(t.id),onClick:Object(r.a)(l.a.mark((function e(){var c,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=2;break}return e.abrupt("return");case 2:if(!(c=s.find((function(e){return e.id===t.id})))){e.next=14;break}return e.next=6,fetch("/_new/products/".concat(c.itemId,".json"),{method:"GET"});case 6:if(200!==(a=e.sent).status){e.next=14;break}return e.next=10,a.json();case 10:n=e.sent,window.history.replaceState(null,"","/phones/".concat(c.id)),window.scroll({top:0,left:0,behavior:"smooth"}),v(n);case 14:case"end":return e.stop()}}),e)}))),children:[Object(h.jsx)("img",{className:"product__image",src:"/_new/".concat(S),alt:g}),Object(h.jsx)("h3",{className:"product__title body14",children:g})]}),Object(h.jsxs)("div",{className:"product__prices",children:[Object(h.jsxs)("h2",{className:"product__price",children:["$",N]}),Object(h.jsxs)("h2",{className:"product__old-price",children:["$",k]})]}),Object(h.jsxs)("div",{className:"product__info",children:[Object(h.jsxs)("div",{className:"product__keys body12",children:[Object(h.jsx)("p",{className:"product__key",children:"Screen"}),Object(h.jsx)("p",{className:"product__key",children:"Capacity"}),Object(h.jsx)("p",{className:"product__key",children:"Ram"})]}),Object(h.jsxs)("div",{className:"product__values body12",children:[Object(h.jsx)("p",{className:"product__value",children:w}),Object(h.jsx)("p",{className:"product__value",children:C}),Object(h.jsx)("p",{className:"product__value",children:P})]})]}),Object(h.jsxs)("div",{className:"product__buttons",children:[Object(h.jsx)(y,{text:u?"Added to cart":"Add to cart",className:u&&"selected",product:t}),Object(h.jsx)(f,{image:x?"/icons/Favourites Filled (Heart Like).svg":"/icons/Favourites.svg",title:"favourites",product:t})]})]})})}),w=function(e){var t=e.products,c=e.title,s=Object(u.l)().pathname,a=Object(d.useState)(0),n=Object(i.a)(a,2),r=n[0],o=n[1],l=Object(d.useState)(0),j=Object(i.a)(l,2),b=j[0],m=j[1],O=Object(d.useRef)(null),p=b*(t.length-5);return Object(h.jsxs)("div",{className:"products-list-with-slider__block",children:[Object(h.jsxs)("div",{className:"products-list-with-slider__header",children:[Object(h.jsx)("h1",{className:"block__title",children:c}),Object(h.jsxs)("div",{className:"slider-buttons",children:[Object(h.jsx)(f,{className:"arrow left small",onClick:function(){O.current&&O&&r>0&&o(r-O.current.offsetWidth)},image:"/icons/Chevron (Arrow Left).svg",alt:"<"}),Object(h.jsx)(f,{className:"arrow right small",onClick:function(){O.current&&O&&(m(O.current.offsetWidth),r<=p&&o(r+O.current.offsetWidth))},image:"/icons/Chevron (Arrow Right).svg",alt:">"})]})]}),Object(h.jsx)("ul",{className:"product-list",style:{marginLeft:"".concat(-r,"px"),transition:"margin-left .3s"},children:t.map((function(e){return Object(h.jsx)("li",{ref:O,className:"product-list__slider-item","aria-hidden":!0,children:Object(h.jsx)(k,{product:e,products:t,link:"/home"!==s?"../".concat(e.id):"../".concat(e.category,"/").concat(e.id)})},e.id)}))})]})},C=(c(40),function(){var e=["/_new/img/banner-phones.png","/_new/img/banner-accessories.png","/_new/img/banner-tablets.png"],t=Object(d.useState)(0),c=Object(i.a)(t,2),s=c[0],a=c[1];s>=e.length&&a(0),s<=-1&&a(e.length-1);return Object(d.useEffect)((function(){setInterval((function(){a((function(e){return e+1}))}),5e3)}),[]),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"slider",children:[Object(h.jsx)(f,{className:"arrow left long",onClick:function(){a(s-1)},image:"/icons/Chevron (Arrow Left).svg",alt:"<"}),Object(h.jsx)("ul",{style:{display:"flex",overflow:"hidden"},children:Object(b.a)(Array(e.length)).map((function(t,c){return Object(h.jsx)("li",{children:Object(h.jsx)("div",{className:"slider__images",style:{backgroundImage:"url('".concat(e[c],"')"),transform:"translateX(".concat(100*-s,"%)"),transition:"transform .3s"}})})}))}),Object(h.jsx)(f,{className:"arrow right long",onClick:function(){a(s+1)},image:"/icons/Chevron (Arrow Right).svg",alt:">"})]}),Object(h.jsx)("div",{className:"slider__subbuttons",children:Object(b.a)(Array(e.length)).map((function(e,t){return Object(h.jsx)("div",{className:"slider__subbutton ".concat(s===t&&"active__subbutton"),onClick:function(){a(t)},"aria-hidden":!0},"".concat(t,"slider"))}))})]})}),P=(c(41),function(e){var t=[{title:"Mobile phones",image:"/_new/img/category-phones.png",amount:e.phones.length,background:"#fcdbc1",category:"phones"},{title:"Tablets",image:"/_new/img/category-tablets.png",amount:24,background:"#8d8d92",category:"tablets"},{title:"Accessories",image:"/_new/img/category-accessories.png",amount:100,background:"#D53C51",category:"accessories"}];return Object(h.jsxs)("div",{className:"category",children:[Object(h.jsx)("h1",{className:"category__title",children:"Shop by category"}),Object(h.jsx)("div",{className:"category__block",children:Object(h.jsx)("ul",{className:"category__list",children:t.map((function(e){var t=e.title,c=e.amount,s=e.image,a=e.background,r=e.category;return Object(h.jsx)(n.b,{to:"../".concat(r),children:Object(h.jsxs)("li",{className:"category__item",children:[Object(h.jsx)("div",{className:"category__image-block",children:Object(h.jsx)("img",{className:"category__image",src:s,alt:String(c),style:{background:a}})}),Object(h.jsxs)("div",{className:"category__info",children:[Object(h.jsx)("h3",{className:"category__title",children:t}),Object(h.jsx)("div",{className:"category__models-number body14",children:"".concat(c," models")})]})]})},t)}))})})]})}),S=(c(42),c(43),function(e){var t=e.product,c=Object(d.useState)(t.count),s=Object(i.a)(c,2),a=s[0],n=s[1],o=Object(d.useContext)(m),u=o.cartProducts,j=o.setCartProducts,b=function(){var e=Object(r.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(u.filter((function(e){return e.id!==t.id})));case 2:1===u.length&&localStorage.setItem("cartProducts",JSON.stringify([]));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){localStorage.setItem("cartProducts",JSON.stringify(u))}),[u]),Object(d.useEffect)((function(){if(a){if(a<=0)return void b();j(u.map((function(e){return e.id===t.id?Object(N.a)(Object(N.a)({},e),{},{count:a}):e})))}}),[a]),Object(h.jsxs)("div",{className:"cart-item",children:[Object(h.jsxs)("div",{className:"cart-item__sub-block",children:[Object(h.jsx)(f,{className:"no-border cart-item__close",image:"/icons/Close.svg",alt:"x",onClick:b}),Object(h.jsx)("div",{className:"cart-item__picture",children:Object(h.jsx)("img",{src:"_new/".concat(t.image),alt:t.itemId,className:"cart-item__image"})}),Object(h.jsx)("p",{className:"cart-item__title body14",children:t.name})]}),Object(h.jsxs)("div",{className:"cart-item__sub-block",children:[Object(h.jsxs)("div",{className:"cart-item__count",children:[Object(h.jsx)(f,{className:"minus",onClick:function(){n((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return e-1}))},image:"/icons/Minus.svg",alt:"-"}),Object(h.jsx)("div",{className:"count",children:t.count}),Object(h.jsx)(f,{className:"plus",onClick:function(){n((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return e+1}))},image:"/icons/Plus.svg",alt:"+"})]}),Object(h.jsxs)("h2",{className:"cart-item__price",children:["$",t.count&&t.price*t.count]})]})]})}),A=(c(44),function(){return Object(h.jsx)("h3",{children:"No products found"})}),I=function(){var e=Object(u.n)(),t=Object(d.useContext)(m).cartProducts,c=t.reduce((function(e,t){if(t.count)return e+t.price*t.count}),0),s=t.reduce((function(e,t){if(t.count)return e+t.count}),0);return Object(h.jsxs)("div",{className:"cart-page",children:[Object(h.jsxs)("div",{className:"back-button body12",children:[Object(h.jsx)(f,{className:"no-border",image:"/icons/Chevron (Arrow Left).svg",alt:"<",onClick:function(){e(-1)}}),Object(h.jsx)("div",{className:"back-button__text",children:"Back"})]}),Object(h.jsx)("h1",{className:"cart-page__title",children:"Cart"}),Object(h.jsxs)("div",{className:"cart-page__blocks",children:[Object(h.jsx)("div",{className:"cart-page__products",children:t.length?Object(h.jsx)("ul",{className:"cart-page__list",children:t.map((function(e){return Object(h.jsx)("li",{className:"cart-page__item",children:Object(h.jsx)(S,{product:e})},e.id)}))}):Object(h.jsx)(A,{})}),Object(h.jsxs)("div",{className:"cart-page__price",children:[Object(h.jsxs)("h1",{className:"cart-page__price-total",children:["$",c]}),Object(h.jsx)("div",{className:"cart-page__total-items",children:"Total for ".concat(s," items")}),Object(h.jsx)("div",{className:"horizontal-line"}),Object(h.jsx)(y,{text:"Checkout"})]})]})]})},F=(c(45),function(e){var t=e.id,c=void 0===t?"0":t,s=e.title,a=Object(d.useContext)(p).detailedProduct,r=Object(u.l)().pathname;return Object(h.jsxs)("div",{className:"navigation-buttons",children:[Object(h.jsx)(n.c,{to:"/",children:Object(h.jsx)(f,{image:"/icons/Home.svg",alt:"home",link:"/home",className:"no-border"})}),Object(h.jsxs)("div",{className:"sub-buttons body12",children:[Object(h.jsx)("img",{className:"button-image",src:"/icons/Chevron (Arrow Right).svg",alt:">"}),Object(h.jsx)("a",{href:"/".concat(s),className:"sub-link",children:s})]}),a&&r.includes(c)&&Object(h.jsxs)("div",{className:"sub-buttons body12",children:[Object(h.jsx)("img",{className:"button-image",src:"/icons/Chevron (Arrow Right).svg",alt:">"}),Object(h.jsx)(n.b,{to:"/".concat(s,"/").concat(c),className:"sub-link",children:a.name})]})]})}),E=(c(46),function(){var e=Object(d.useContext)(m).visibleFavProducts;return Object(h.jsxs)("div",{className:"favourites",children:[Object(h.jsx)(F,{}),Object(h.jsx)("h1",{className:"favourites__title",children:"Favourites"}),Object(h.jsx)("ul",{className:"favourites__list",children:e.length?e.map((function(e){return Object(h.jsx)("li",{className:"favourites__item",children:Object(h.jsx)(k,{product:e})},e.id)})):Object(h.jsx)(A,{})})]})}),T=(c(47),function(e){var t=e.setCurrentPage,c=e.currentPage,s=e.buttonsNumber,a=Object(d.useState)(0),n=Object(i.a)(a,2),r=n[0],o=n[1],l=Object(d.useRef)(null),u=Object(d.useState)(0),j=Object(i.a)(u,2),m=j[0],O=j[1],p=Object(d.useState)(0),x=Object(i.a)(p,2),_=x[0],v=x[1],g=r*(s-6),N=function(e){return c===e};return Object(d.useEffect)((function(){v(5*l.current.offsetWidth),o(l.current.offsetWidth)}),[]),Object(h.jsxs)("div",{className:"product-page__block",children:[Object(h.jsx)(f,{className:"arrow left small",image:"/icons/Chevron (Arrow Left).svg",alt:"<",onClick:function(){c<=1||(t((function(e){return e-1})),m>0&&O(m-l.current.offsetWidth))}}),Object(h.jsx)("div",{className:"product-page__buttons",style:{maxWidth:"".concat(_,"px")},children:Object(h.jsx)("ul",{style:{marginLeft:"".concat(-m,"px")},className:"product-page__buttons-list",children:Object(b.a)(Array(s)).map((function(e,c){return Object(h.jsx)("li",{ref:l,className:"product-page__buttons-item",children:Object(h.jsx)(f,{className:"arrow small ".concat(N(c+1)&&"active-button"),onClick:function(){t(c+1)},num:c+1,alt:c+1})},e)}))})}),Object(h.jsx)(f,{className:"arrow right small",image:"/icons/Chevron (Arrow Right).svg",onClick:function(){c>=s||(t((function(e){return e+1})),m<=g&&O(c*l.current.offsetWidth))},alt:">"})]})}),L=(c(48),function(e){var t=e.products,c=e.title,s=e.setVisibleProducts,a=e.visibleProducts,n=e.setProducts,o=e.searchInput,u=Object(d.useState)(16),j=Object(i.a)(u,2),b=j[0],m=j[1],O=Object(d.useState)(!1),p=Object(i.a)(O,2),x=p[0],f=p[1],_=Object(d.useState)(1),v=Object(i.a)(_,2),g=v[0],N=v[1],y=Object(d.useState)("newest"),w=Object(i.a)(y,2),C=w[0],P=w[1],S=o?1:t.length,I=Math.ceil(S/b),E=g*b-b,L=g*b,R=function(){var e=Object(r.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=c,e.next="newest"===e.t0?3:"alphabetically"===e.t0?6:"cheapest"===e.t0?9:12;break;case 3:return n(t.sort((function(e,t){return t.year-e.year}))),P(c),e.abrupt("return");case 6:return n(t.sort((function(e,t){return e.name.localeCompare(t.name,"en",{numeric:!0})}))),P(c),e.abrupt("return");case 9:return n(t.sort((function(e,t){return e.price-t.price}))),P(c),e.abrupt("return");case 12:n(t);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){t.length&&s(t.filter((function(e,c){return E>t.length?(N(Math.ceil(t.length/b)),c>t.length-b):c>E&&c<=L})))}),[b,g,C,x]),Object(d.useEffect)((function(){a.length>0&&(f(!0),R(C))}),[a]),Object(h.jsxs)("div",{className:"product-page",children:[Object(h.jsx)(F,{title:c.toLowerCase()}),Object(h.jsxs)("div",{className:"product-page__main",children:[Object(h.jsxs)("div",{className:"product-page__main-info",children:[Object(h.jsx)("h1",{className:"product-page__title",children:c}),Object(h.jsx)("p",{className:"product-page__subtitle body14",children:"".concat(t.length," models")})]}),t.length?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"product-page__search",children:[Object(h.jsx)("div",{className:"product-page__sort",children:Object(h.jsxs)("label",{htmlFor:"sortBy",children:[Object(h.jsx)("div",{className:"product-page__sort-title body12",children:"Sort by"}),Object(h.jsxs)("select",{className:"product-page__select sort",id:"sortBy",style:{backgroundImage:'url("/icons/Chevron (Arrow Down).svg")'},value:C,onChange:function(e){R(e.target.value)},children:[Object(h.jsx)("option",{defaultValue:C,value:"newest",children:"Newest"}),Object(h.jsx)("option",{value:"alphabetically",children:"Alphabetically"}),Object(h.jsx)("option",{value:"cheapest",children:"Cheapest"})]})]})}),Object(h.jsx)("div",{className:"product-page__sort",children:Object(h.jsxs)("label",{children:[Object(h.jsx)("div",{className:"product-page__sort-title body12",children:"Items on page"}),Object(h.jsxs)("select",{className:"product-page__select pages",value:b,onChange:function(e){m(+e.target.value)},style:{backgroundImage:'url("/icons/Chevron (Arrow Down).svg")'},children:[Object(h.jsx)("option",{defaultValue:b,value:"4",children:"4"}),Object(h.jsx)("option",{value:"8",children:"8"}),Object(h.jsx)("option",{value:"16",children:"16"}),Object(h.jsx)("option",{value:t.length,children:"All"})]})]})})]}),Object(h.jsx)("ul",{className:"product-page__list",children:a.length?a.map((function(e){return Object(h.jsx)("li",{className:"product-page__item",children:Object(h.jsx)(k,{product:e})},e.id)})):Object(h.jsx)(A,{})}),!!a.length&&Object(h.jsx)(T,{currentPage:g,setCurrentPage:N,buttonsNumber:I})]}):Object(h.jsx)("h2",{children:"No products found"})]})]})}),R=(c(49),c(50),c(51),c(52),{black:"#000000",white:"#ffffff",rosegold:"#f5cec7",purple:"#d5d2dd",red:"#ca243d",yellow:"#fed45b",gold:"#fcdbc1",silver:"#f3f1ec",green:"#607170",midnightgreen:"#555e57",spacegray:"#61605e",coral:"#fe6a56"}),D=function(e){var t=e.products,c=Object(d.useContext)(p),s=c.detailedProduct,a=c.setDetailedProduct,n=function(){var e=Object(r.a)(l.a.mark((function e(c){var n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.find((function(e){return e.phoneId===s.id.replace(s.color,c)})),e.next=3,fetch("/_new/products/".concat(n.itemId,".json"),{method:"GET"});case 3:if(200!==(r=e.sent).status){e.next=10;break}return e.next=7,r.json();case 7:return i=e.sent,window.history.replaceState(null,"","/phones/".concat(n.id)),e.abrupt("return",a(i));case 10:window.history.replaceState(null,"","/product/".concat(n.id));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"avaliable-colors body12",children:[Object(h.jsx)("p",{children:"Avaliable colors"}),Object(h.jsx)("ul",{className:"avaliable-colors__list",children:s.colorsAvailable.map((function(e){return Object(h.jsx)("li",{className:"avaliable-colors__item ".concat((t=e,t===s.color&&"active-color")),style:{backgroundColor:R[e]},onClick:function(){n(e)},"aria-hidden":"true"},e);var t}))}),Object(h.jsx)("div",{className:"horizontal-line"})]})},J=(c(53),function(e){var t=e.products,c=Object(d.useContext)(p),s=c.detailedProduct,a=c.setDetailedProduct,n=function(){var e=Object(r.a)(l.a.mark((function e(c){var n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.find((function(e){return e.phoneId===s.id.replace(s.capacity.toLowerCase(),c.toLowerCase())})))){e.next=11;break}return e.next=4,fetch("/_new/products/".concat(n.itemId,".json"),{method:"GET"});case 4:if(200!==(r=e.sent).status){e.next=11;break}return e.next=8,r.json();case 8:return i=e.sent,window.history.replaceState(null,"","/phones/".concat(n.id)),e.abrupt("return",a(i));case 11:a(n);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"capacity",children:[Object(h.jsx)("div",{className:"capacity__text body 12",children:"Select capacity"}),Object(h.jsx)("ul",{className:"capacity__list",children:s.capacityAvailable.map((function(e){return Object(h.jsx)("li",{className:"capacity__item ".concat((t=e,t===s.capacity&&"active-button")),onClick:function(){n(e)},"aria-hidden":"true",children:e},e);var t}))})]})}),M=function(e){var t=e.products,c=e.singleProduct,s=Object(d.useContext)(m),a=s.cartProducts,n=s.favProducts,r=s.setIsAddedToCart,i=s.isAddedToCart,o=s.setIsAddedToFav,l=s.isAddedToFav,u=Object(d.useContext)(p).detailedProduct;return Object(d.useEffect)((function(){r(!1),a.map((function(e){if(e.phoneId===u.id)return r(!0)}))}),[u,a]),Object(d.useEffect)((function(){o(!1),n.map((function(e){e.phoneId===u.id&&o(!0)}))}),[u,n]),Object(h.jsxs)("div",{className:"buying-info",children:[Object(h.jsxs)("div",{className:"buying-info__details",children:[Object(h.jsx)(D,{products:t}),Object(h.jsx)(J,{products:t}),Object(h.jsxs)("div",{className:"buying-info__price",children:[Object(h.jsxs)("h1",{className:"product__price",children:["$",u.priceDiscount]}),Object(h.jsxs)("h2",{className:"product__old-price",children:["$",u.priceRegular]})]}),Object(h.jsxs)("div",{className:"buying-info__buttons",children:[Object(h.jsx)(y,{text:i?"Added to cart":"Add to cart",className:i&&"selected",product:c,products:t}),Object(h.jsx)(f,{image:l?"/icons/Favourites Filled (Heart Like).svg":"/icons/Favourites.svg",title:"favourites",products:t})]}),Object(h.jsxs)("div",{className:"buying-info__tech-details body12",children:[Object(h.jsxs)("div",{className:"buying-info__keys",children:[Object(h.jsx)("p",{className:"buying-info__key",children:"Screen"}),Object(h.jsx)("p",{className:"buying-info__key",children:"Resolution"}),Object(h.jsx)("p",{className:"buying-info__key",children:"Processor"}),Object(h.jsx)("p",{className:"buying-info__key",children:"RAM"})]}),Object(h.jsxs)("div",{className:"buying-info__values",children:[Object(h.jsx)("p",{className:"buying-info__value",children:u.screen}),Object(h.jsx)("p",{className:"buying-info__value",children:u.resolution}),Object(h.jsx)("p",{className:"buying-info__value",children:u.processor}),Object(h.jsx)("p",{className:"buying-info__value",children:u.ram})]})]})]}),Object(h.jsx)("p",{className:"product-id body12",children:u.id})]})},V=(c(54),function(){var e=Object(d.useState)(0),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(d.useContext)(p).detailedProduct;return Object(h.jsxs)("div",{className:"pictures-block",children:[Object(h.jsx)("ul",{className:"pictures-block__list",children:a.images.map((function(e,t){return Object(h.jsx)("li",{className:"pictures-block__item ".concat((a=t,a===c&&"selected-picture")),onClick:function(){return s(t)},"aria-hidden":"true",children:Object(h.jsx)("img",{src:"/_new/".concat(e),alt:"phone",className:"pictures-block__image"})},e);var a}))}),Object(h.jsx)("img",{src:"/_new/".concat(a.images[c]),alt:"main",className:"pictures-block__main"})]})}),B=(c(55),function(){var e=Object(d.useContext)(p).detailedProduct;return Object(h.jsxs)("div",{className:"product-desc__text",children:[Object(h.jsx)("h2",{className:"product-desc__title",children:"About"}),Object(h.jsx)("div",{className:"horizontal-line"}),Object(h.jsx)("ul",{className:"product-desc__list",children:e.description.map((function(e){return Object(h.jsxs)("li",{className:"product-desc__item",children:[Object(h.jsx)("h3",{className:"product-desc__item-title",children:e.title}),e.text.map((function(e){return Object(h.jsx)("p",{className:"product-desc__item-text body14",children:e})}))]},e.title)}))})]})}),W=function(e){var t=e.products,c=e.singleProduct,s=Object(d.useContext)(p).detailedProduct;return Object(h.jsxs)("div",{className:"product-desc",children:[Object(h.jsx)("h1",{className:"product-desc__title",children:s.name}),Object(h.jsxs)("div",{className:"product-desc__block",children:[Object(h.jsxs)("div",{className:"product-desc__info",children:[Object(h.jsx)(V,{}),Object(h.jsx)(M,{products:t,singleProduct:c})]}),Object(h.jsxs)("div",{className:"product-desc__info",children:[Object(h.jsx)(B,{}),Object(h.jsx)("div",{className:"product-desc__text",children:Object(h.jsxs)("div",{className:"product-desc__tech-details",children:[Object(h.jsx)("h2",{className:"product-desc__title",children:"Tech specs"}),Object(h.jsx)("div",{className:"horizontal-line"}),Object(h.jsxs)("div",{className:"product-desc__tech-details-block",children:[Object(h.jsxs)("div",{className:"product-desc__keys body14",children:[Object(h.jsx)("p",{className:"product-desc__key",children:"Screen"}),Object(h.jsx)("p",{className:"product-desc__key",children:"Resolution"}),Object(h.jsx)("p",{className:"product-desc__key",children:"Processor"}),Object(h.jsx)("p",{className:"product-desc__key",children:"RAM"}),Object(h.jsx)("p",{className:"product-desc__key",children:"Built in memory"}),Object(h.jsx)("p",{className:"product-desc__key",children:"Camera"}),Object(h.jsx)("p",{className:"product-desc__key",children:"Zoom"}),Object(h.jsx)("p",{className:"product-desc__key",children:"Cell"})]}),Object(h.jsxs)("div",{className:"product-desc__values body14",children:[Object(h.jsx)("p",{className:"product-desc__value",children:s.screen}),Object(h.jsx)("p",{className:"product-desc__value",children:s.resolution}),Object(h.jsx)("p",{className:"product-desc__value",children:s.processor}),Object(h.jsx)("p",{className:"product-desc__value",children:s.ram}),Object(h.jsx)("p",{className:"product-desc__value",children:s.capacity}),Object(h.jsx)("p",{className:"product-desc__value",children:s.camera}),Object(h.jsx)("p",{className:"product-desc__value",children:s.zoom}),Object(h.jsx)("p",{className:"product-desc__value",children:s.cell})]})]})]})})]})]})]})},G=function(e){var t=e.products,c=Object(u.p)().id,s=Object(u.n)(),a=Object(d.useContext)(p),n=a.detailedProduct,o=a.setDetailedProduct,j=Object(d.useState)(),b=Object(i.a)(j,2),m=b[0],O=b[1],x="",_=function(){var e=Object(r.a)(l.a.mark((function e(){var s,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.find((function(e){return e.id===c})),e.next=3,fetch("/_new/products/".concat(s.itemId,".json"),{method:"GET"});case 3:if(200!==(a=e.sent).status){e.next=9;break}return e.next=7,a.json();case 7:return n=e.sent,e.abrupt("return",o(n));case 9:return x=s.category,e.abrupt("return",O(s));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){t&&_()}),[t]),Object(h.jsxs)("div",{className:"details__page",children:[Object(h.jsx)(F,{id:c,title:x}),Object(h.jsxs)("div",{className:"back-button body12",children:[Object(h.jsx)(f,{className:"no-border",image:"/icons/Chevron (Arrow Left).svg",alt:"<",onClick:function(){s(-1)}}),Object(h.jsx)("div",{className:"back-button__text",children:"Back"})]}),c&&c<=t.length?n&&Object(h.jsx)(W,{products:t,singleProduct:m}):Object(h.jsx)("h1",{children:"No product found"})]})},$=function(){return Object(h.jsx)("h1",{className:"not-found",children:"Page not found :("})},z=function(){var e=Object(d.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(d.useState)([]),n=Object(i.a)(a,2),o=n[0],j=n[1],b=Object(d.useState)([]),m=Object(i.a)(b,2),O=m[0],p=m[1],x=Object(d.useState)(o),f=Object(i.a)(x,2),_=f[0],N=f[1],y=Object(d.useState)(c),k=Object(i.a)(y,2),S=k[0],A=k[1],F=Object(d.useState)(c),T=Object(i.a)(F,2),R=T[0],D=T[1],J=Object(d.useState)(""),M=Object(i.a)(J,2),V=M[0],B=M[1];Object(d.useEffect)((function(){D(o.filter((function(e){return e.price<e.fullPrice})).sort((function(e,t){return t.price-e.price}))),A(o.filter((function(e){return e.price<e.fullPrice})).sort((function(e,t){return e.price-t.price}))),p(o.sort((function(){return.5-Math.random()})))}),[o]);var W=function(){var e=Object(r.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("../api/products.json",{method:"GET"});case 3:if(200!==(t=e.sent).status){e.next=9;break}return e.next=7,t.json();case 7:c=e.sent,s(c);case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(r.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("../_new/products.json",{method:"GET"});case 3:if(200!==(t=e.sent).status){e.next=10;break}return e.next=7,t.json();case 7:c=e.sent,j(c),N(c);case 10:e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){W(),z()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g,{setVisibleIPhones:N,IPhones:o,searchInput:V,setSearchInput:B}),Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.b,{path:"/",element:Object(h.jsx)(u.a,{to:"/home"})}),Object(h.jsx)(u.b,{path:"/home",element:Object(h.jsxs)("main",{children:[Object(h.jsx)(C,{}),Object(h.jsx)(w,{products:S,title:"Hot prices"}),Object(h.jsx)(P,{phones:o}),Object(h.jsx)(w,{products:R,title:"Brand new models"})]})}),Object(h.jsxs)(u.b,{path:"/phones",children:[Object(h.jsx)(u.b,{index:!0,element:Object(h.jsx)("main",{children:Object(h.jsx)(L,{products:o,setProducts:j,setVisibleProducts:N,visibleProducts:_,title:"Mobile phones",searchInput:V})})}),Object(h.jsx)(u.b,{path:":id",element:Object(h.jsxs)("main",{children:[Object(h.jsx)(G,{products:o,setProducts:j}),Object(h.jsx)(w,{products:O,title:"You may also like"})]})})]}),Object(h.jsx)(u.b,{path:"/tablets",children:Object(h.jsx)(u.b,{index:!0,element:Object(h.jsx)("main",{children:Object(h.jsx)(L,{products:[],visibleProducts:[],title:"Tablets",searchInput:V})})})}),Object(h.jsx)(u.b,{path:"/accessories",children:Object(h.jsx)(u.b,{index:!0,element:Object(h.jsx)("main",{children:Object(h.jsx)(L,{products:[],visibleProducts:[],title:"Accessories",searchInput:V})})})}),Object(h.jsx)(u.b,{path:"/cart",element:Object(h.jsx)("main",{children:Object(h.jsx)(I,{})})}),Object(h.jsx)(u.b,{path:"/favourites",element:Object(h.jsx)("main",{children:Object(h.jsx)(E,{})})}),Object(h.jsx)(u.b,{path:"/rights",element:Object(h.jsx)("main",{children:Object(h.jsx)("div",{className:"body12",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint."})})}),Object(h.jsx)(u.b,{path:"/contacts",element:Object(h.jsx)("main",{children:Object(h.jsxs)("h3",{className:"body12",children:["Modile: 12345678",Object(h.jsx)("br",{}),"Facebook: iphone777"]})})}),Object(h.jsx)(u.b,{path:"*",element:Object(h.jsx)($,{})})]}),Object(h.jsx)("footer",{children:Object(h.jsx)(v,{})})]})};a.a.render(Object(h.jsx)(n.a,{children:Object(h.jsx)(O,{children:Object(h.jsx)(x,{children:Object(h.jsx)(z,{})})})}),document.getElementById("root"))}]),[[56,1,2]]]);
//# sourceMappingURL=main.a5ae7931.chunk.js.map