(this.webpackJsonpfood_ordering_app=this.webpackJsonpfood_ordering_app||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3ELqj",total:"Cart_total__3wBfx",actions:"Cart_actions__33UBo","button--alt":"Cart_button--alt__18Shk",button:"Cart_button__1Cqw9"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2XHJB",summary:"CartItem_summary__tE3VP",price:"CartItem_price__3iYFF",amount:"CartItem_amount__y8Afy",actions:"CartItem_actions__1YT1P"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3GjpB",icon:"HeaderCartButton_icon__22enj",badge:"HeaderCartButton_badge__18HBC",bump:"HeaderCartButton_bump__rWtLO"}},,function(e,t,n){e.exports={meal:"MealItem_meal__2WyJB",description:"MealItem_description__1t7i8",price:"MealItem_price__QZs2x"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1qzSL",modal:"Modal_modal__20VhJ","slide-down":"Modal_slide-down__1yazl"}},,function(e,t,n){e.exports={header:"Header_header__Ka-s6","main-image":"Header_main-image__3gS2l"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__2y6S9"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1DPiA","meals-appear":"AvailableMeals_meals-appear__3IQvJ"}},function(e,t,n){e.exports={card:"Card_card__2kRf3"}},function(e,t,n){e.exports={form:"MealItemForm_form__6ppPe"}},function(e,t,n){e.exports={input:"Input_input__m5IXk"}},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(6),o=n.n(c),r=(n(24),n(3)),s=n.p+"static/media/meals.2971f633.jpg",d=n(13),l=n.n(d),u=n(0),m=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},j=n(8),b=n.n(j),h=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),p=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),i=n[0],c=n[1],o=Object(a.useContext)(h),s=o.items,d=s.reduce((function(e,t){return e+t.amount}),0),l="".concat(b.a.button," ").concat(i?b.a.bump:"");return Object(a.useEffect)((function(){if(0!==o.items.length){var e=c(!0);return setTimeout((function(){c(!1)}),300),function(){clearTimeout(e)}}}),[s]),Object(u.jsxs)("button",{className:l,onClick:e.Clicks,children:[Object(u.jsx)("span",{className:b.a.icon,children:Object(u.jsx)(m,{})}),Object(u.jsx)("span",{children:"Your Cart"}),Object(u.jsx)("span",{className:b.a.badge,children:d})]})},f=function(e){return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsxs)("header",{className:l.a.header,children:[Object(u.jsx)("h1",{children:"React Meals"}),Object(u.jsx)(p,{Clicks:e.onShowCart})]}),Object(u.jsx)("div",{className:l.a["main-image"],children:Object(u.jsx)("img",{src:s,alt:"a table"})})]})},x=(n(26),n(15)),O=n.n(x),_=function(){return Object(u.jsxs)("section",{className:O.a.summary,children:[Object(u.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(u.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(u.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},C=n(16),v=n.n(C),g=n(17),y=n.n(g),k=function(e){return Object(u.jsx)("div",{className:y.a.card,children:e.children})},A=n(10),N=n.n(A),I=n(18),w=n.n(I),P=n(2),F=n(19),M=n.n(F),S=i.a.forwardRef((function(e,t){return Object(u.jsxs)("div",{className:M.a.input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object(P.a)(Object(P.a)({},e.input),{},{ref:t}))]})})),B=function(e){var t=Object(a.useState)(!0),n=Object(r.a)(t,2),i=n[0],c=n[1],o=Object(a.useRef)();return Object(u.jsxs)("form",{className:w.a.form,onSubmit:function(t){t.preventDefault();var n=o.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(u.jsx)(S,{ref:o,label:"Amount",input:{id:"amount"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(u.jsx)("button",{children:"+ Add"}),!i&&Object(u.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},R=function(e){var t=Object(a.useContext)(h),n="Rs.".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:N.a.meal,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("div",{className:N.a.description,children:e.desc}),Object(u.jsx)("div",{className:N.a.price,children:n})]}),Object(u.jsx)("div",{children:Object(u.jsx)(B,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},T=[{id:"m1",name:"Goan Fish Curry (Xitti Kodi)",description:"The Goan fish curry or the Xitti Kodi is the staple diet of every Goan making it a famous food of Goa",price:180},{id:"m2",name:"Shark Ambot Tik",description:"Ambot Tik is a Portuguese influenced Goan food!",price:350},{id:"m3",name:"Feijoada - Red Beans With Pork",description:"This dish is a stew of red beans and pork.",price:200},{id:"m4",name:"Chicken Xacuti",description:"Chicken Xacuti consists of poppy seeds and Kashmiri red chillies. This is yet another Portuguese influenced famous Goan food",price:230},{id:"m5",name:"Goan Pork Vindaloo",description:'"Vin" comes from the word vinegar and "ahlo" means garlic in Portuguese.',price:300},{id:"m6",name:"Chicken Cafreal",description:"Cafreal chicken is a spicy green coloured dish that will leave your mouth watering.",price:280},{id:"m7",name:"Samarachi Kodi",description:"Samarachi Kodi is a dish prepared during the monsoons. It is a dry prawn curry!.",price:180},{id:"m8",name:"Prawns Xeque Xeque",description:"Prawns Xeque Xeque is an exotic dish of prawns, coconut milk, tomatoes, green chillies and onions.",price:220},{id:"m9",name:"Crab Xacuti",description:"Crab Xacuti is a famous dish of Goan Food. Preparation of this dish is similar to that of Chicken Xacuti.",price:400},{id:"m10",name:"Fish Recheado",description:'"Recheado" means "stuffed" in Portuguese. Another Portuguese influenced dish that consists of a stuffed pomfret or any other fish with tangy masala and onions.',price:400}],H=function(){var e=T.map((function(e){return Object(u.jsx)(R,{id:e.id,name:e.name,desc:e.description,price:e.price},e.id)}));return Object(u.jsx)("section",{className:v.a.meals,children:Object(u.jsx)(k,{children:Object(u.jsx)("ul",{children:e})})})},X=function(){return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(_,{}),Object(u.jsx)(H,{})]})},D=n(4),E=n.n(D),G=n(11),q=n.n(G),V=function(e){return Object(u.jsx)("div",{className:q.a.backdrop,onClick:e.onClose})},J=function(e){return Object(u.jsx)("div",{className:q.a.modal,children:Object(u.jsx)("div",{className:q.a.content,children:e.children})})},K=document.getElementById("overlays"),z=function(e){return Object(u.jsxs)(a.Fragment,{children:[o.a.createPortal(Object(u.jsx)(V,{onClose:e.onClose}),K),o.a.createPortal(Object(u.jsx)(J,{children:e.children}),K)]})},L=n(5),Y=n.n(L),W=function(e){var t="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:Y.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("div",{className:Y.a.summary,children:[Object(u.jsx)("span",{className:Y.a.price,children:t}),Object(u.jsxs)("span",{className:Y.a.amount,children:["x ",e.amount]})]})]}),Object(u.jsxs)("div",{className:Y.a.actions,children:[Object(u.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(u.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Q=function(e){var t=Object(a.useContext)(h),n="Rs.".concat(t.totalAmount.toFixed(2)),i=t.items.length>0,c=function(e){t.removeItem(e)},o=function(e){t.addItem(Object(P.a)(Object(P.a)({},e),{},{amount:1}))},r=Object(u.jsx)("ul",{className:E.a["cart-items"],children:t.items.map((function(e){return Object(u.jsx)(W,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:o.bind(null,e)},e.id)}))});return Object(u.jsxs)(z,{onClose:e.onClose,children:[r,Object(u.jsxs)("div",{className:E.a.total,children:[Object(u.jsx)("span",{children:"Total Amount"}),Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("div",{className:E.a.actions,children:[Object(u.jsx)("button",{className:E.a["button--alt"],onClick:e.onClose,children:"Close"}),i&&Object(u.jsx)("button",{className:E.a.button,children:"Order"})]})]})},U=n(14),Z={items:[],totalAmount:0},$=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,i=e.items.findIndex((function(e){return e.id===t.item.id})),c=e.items[i];if(c){var o=Object(P.a)(Object(P.a)({},c),{},{amount:c.amount+t.item.amount});(n=Object(U.a)(e.items))[i]=o}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var r,s=e.items.findIndex((function(e){return e.id===t.id})),d=e.items[s],l=e.totalAmount-d.price;if(1===d.amount)r=e.items.filter((function(e){return e.id!==t.id}));else{var u=Object(P.a)(Object(P.a)({},d),{},{amount:d.amount-1});(r=Object(U.a)(e.items))[s]=u}return{items:r,totalAmount:l}}},ee=function(e){var t=Object(a.useReducer)($,Z),n=Object(r.a)(t,2),i=n[0],c=n[1],o={items:i.items,totalAmount:i.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(u.jsx)(h.Provider,{value:o,children:e.children})};var te=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(u.jsxs)(ee,{children:[n&&Object(u.jsx)(Q,{onClose:function(){i(!1)}}),Object(u.jsx)(f,{onShowCart:function(){i(!0)}}),Object(u.jsx)("main",{children:Object(u.jsx)(X,{})})]})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),c(e),o(e)}))};o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(te,{})}),document.getElementById("root")),ne()}],[[27,1,2]]]);
//# sourceMappingURL=main.357e1d18.chunk.js.map