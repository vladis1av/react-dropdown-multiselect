(this["webpackJsonpreact-dropdown-multiselect"]=this["webpackJsonpreact-dropdown-multiselect"]||[]).push([[0],[,,function(e,t,n){e.exports={dropdown:"Dropdown_dropdown__30Ixc",dropdownTitle:"Dropdown_dropdownTitle__2EYJd",selectionList:"Dropdown_selectionList__2Bp8n",selectionListTitle:"Dropdown_selectionListTitle__1D2qa",dropdownList:"Dropdown_dropdownList__3uf24",dropdownListInputWrapper:"Dropdown_dropdownListInputWrapper__wV3wh",dropdownListInput:"Dropdown_dropdownListInput__3ATpk",dropdownListInputIconSearch:"Dropdown_dropdownListInputIconSearch__2CVLz",dropdownListInputIconArrow:"Dropdown_dropdownListInputIconArrow__1WLhj",dropdownListInputIconArrowRotate:"Dropdown_dropdownListInputIconArrowRotate__KdQoj"}},,function(e,t,n){e.exports={item:"DropdownItem_item__28qnZ",label:"DropdownItem_label__XvcHk",iconLang:"DropdownItem_iconLang__ZAW1l",checkbox:"DropdownItem_checkbox__3aC5-",checkboxCustom:"DropdownItem_checkboxCustom__19pxo"}},,,,,function(e,t,n){e.exports={select:"SelectedItem_select__2wlz6",selectIcon:"SelectedItem_selectIcon__rZ1X8"}},function(e,t,n){e.exports={wrapper:"Layout_wrapper__26edy",content:"Layout_content__1t0I4"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(11),s=n.n(i),r=(n(16),n(3)),a=n(7),d=n.p+"static/media/svg-sprite.1a0544cc.svg",l=n(0),p=function(e){var t=e.name,n=e.color,c=e.width,o=e.height,i=e.className;return Object(l.jsx)("svg",{className:"".concat(i),fill:n,stroke:n,width:c,height:o,children:Object(l.jsx)("use",{xlinkHref:"".concat(d,"#").concat(t)})})},u=n(4),j=n.n(u),w=function(e){var t=e.item,n=e.toggleSelect,c=e.isSelected,o=e.showIcon;return Object(l.jsx)("div",{className:j.a.item,children:Object(l.jsxs)("label",{className:j.a.label,onMouseUp:function(){return n(t)},children:[o&&Object(l.jsx)("div",{className:j.a.iconLang,children:Object(l.jsx)(p,{name:t.icon,width:"22",height:"22"})}),Object(l.jsx)("span",{children:t.lang}),Object(l.jsx)("input",{checked:c(t),className:j.a.checkbox,type:"checkbox"}),Object(l.jsx)("span",{className:j.a.checkboxCustom})]})})},h=n(9),b=n.n(h),m=function(e){var t=e.title,n=e.itemId,c=e.removeSelection;return Object(l.jsxs)("div",{className:b.a.select,children:[Object(l.jsx)("span",{children:t}),Object(l.jsx)("div",{className:b.a.selectIcon,onClick:function(){return c(n)},children:Object(l.jsx)(p,{name:"cancel",width:"7.5",height:"7.5"})})]})},_=n(2),x=n.n(_),O=function(e){var t=e.items,n=e.multiSelect,o=void 0!==n&&n,i=e.showIcon,s=void 0===i||i,d=Object(c.useState)(!1),u=Object(r.a)(d,2),j=u[0],h=u[1],b=Object(c.useState)([]),_=Object(r.a)(b,2),O=_[0],I=_[1],f=Object(c.useState)(""),v=Object(r.a)(f,2),L=v[0],g=v[1];console.log(L);var N=function(){return h(!j)},S=function(e){var t=Object(a.a)(O).filter((function(t){return t.id!==e}));I(Object(a.a)(t))};function k(e){O.some((function(t){return t.id===e.id}))?S(e.id):o?o&&I((function(t){return[].concat(Object(a.a)(t),[e])})):I([e])}var D=function(e){return console.log(O.some((function(t){return t.id===e.id}))),O.some((function(t){return t.id===e.id}))};return Object(l.jsxs)("div",{className:x.a.dropdownWrapper,children:[Object(l.jsx)("span",{className:x.a.dropdownTitle,children:"\u042f\u0437\u044b\u043a"}),Object(l.jsxs)("div",{className:x.a.dropdown,onClick:function(){return!O.length&&N()},children:[Object(l.jsx)("div",{className:x.a.selectionList,children:O.length?O.map((function(e){return Object(l.jsx)(m,{title:e.lang,itemId:e.id,removeSelection:S},e.id)})):Object(l.jsx)("span",{className:x.a.selectionListTitle,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u044f\u0437\u044b\u043a \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430"})}),Object(l.jsx)("div",{className:x.a.dropdownListInputIconArrow,onClick:N,children:Object(l.jsx)(p,{className:j?"":x.a.dropdownListInputIconArrowRotate,name:"arrow",width:"11",height:"6"})})]}),j&&Object(l.jsxs)("div",{className:x.a.dropdownList,children:[Object(l.jsxs)("div",{className:x.a.dropdownListInputWrapper,children:[Object(l.jsx)(p,{className:x.a.dropdownListInputIconSearch,name:"search",width:"18",height:"18"}),Object(l.jsx)("input",{type:"text",className:x.a.dropdownListInput,placeholder:"\u041f\u043e\u0438\u0441\u043a",value:L,onChange:function(e){return function(e){g(e.target.value)}(e)}})]}),t.filter((function(e){return L.trim()?e.lang.toLocaleLowerCase().includes(L.toLocaleLowerCase())?e:void 0:e})).map((function(e){return Object(l.jsx)(w,{item:e,toggleSelect:k,isSelected:D,showIcon:s},e.id)}))]})]})},I=n(10),f=n.n(I),v=function(e){var t=e.children;return Object(l.jsxs)("div",{className:f.a.wrapper,children:[Object(l.jsx)("div",{className:f.a.content,children:t}),";"]})},L=[{lang:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",icon:"ru",id:1},{lang:"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439",icon:"en",id:2},{lang:"\u0418\u0441\u043f\u0430\u043d\u0441\u043a\u0438\u0439",icon:"es",id:3},{lang:"\u041d\u0435\u043c\u0435\u0446\u043a\u0438\u0439",icon:"de",id:4},{lang:"\u0418\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u0439",icon:"it",id:5},{lang:"\u041f\u043e\u043b\u044c\u0441\u043a\u0438\u0439",icon:"pl",id:6}];var g=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(!0),s=Object(r.a)(i,2),a=s[0],d=s[1];return Object(l.jsx)("div",{className:"app",children:Object(l.jsxs)(v,{children:[Object(l.jsxs)("div",{className:"demo-block",children:[Object(l.jsx)("button",{className:"btn mr20",onClick:function(){return o(!n)},children:n?"\u0412\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u044c Multi-Select":"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c Multi-Select"}),Object(l.jsx)("button",{className:"btn",onClick:function(){return d(!a)},children:a?"\u0421\u043a\u0440\u044b\u0442\u044c \u0438\u043a\u043e\u043d\u043a\u0438":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u043a\u043e\u043d\u043a\u0438"})]}),Object(l.jsx)(O,{items:L,multiSelect:n,showIcon:a})]})})};s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.296e2585.chunk.js.map