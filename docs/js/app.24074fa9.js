(function(t){function e(e){for(var s,c,o=e[0],r=e[1],l=e[2],p=0,f=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,o=1;o<i.length;o++){var r=i[o];0!==a[r]&&(s=!1)}s&&(n.splice(e--,1),t=c(c.s=i[0]))}return t}var s={},a={app:0},n=[];function c(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=t,c.c=s,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(i,s,function(e){return t[e]}.bind(null,s));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/Portfolio_vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=r;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0396":function(t,e,i){"use strict";i("ac83")},1094:function(t,e,i){t.exports=i.p+"img/img_css.5485a746.png"},1271:function(t,e,i){t.exports=i.p+"img/hotel_site.20d6570a.png"},"22e9":function(t,e,i){t.exports=i.p+"img/awards_2.aa1554be.jpg"},"307f":function(t,e,i){"use strict";i("ca6d")},"35bb":function(t,e,i){t.exports=i.p+"img/kt_aivle.e93961c3.png"},3902:function(t,e,i){"use strict";i("3eaa")},"3eaa":function(t,e,i){},"4ca3":function(t,e,i){t.exports=i.p+"img/EB_Library.34620b44.png"},"4ef3":function(t,e,i){"use strict";i("6fd4")},"56d7":function(t,e,i){"use strict";i.r(e);var s=i("2b0e"),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Home",{ref:"home",on:{move:t.move}}),e("PageAbout",{ref:"about"}),e("Skills",{ref:"skills"}),e("Project",{ref:"project"}),e("Contact",{ref:"contact"})],1)},n=[],c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home_container"},[e("div",{staticClass:"home_nav"},t._l(t.menuList,(function(i){return e("button",{key:i.id,on:{click:function(e){return t.move(i)}}},[t._v(t._s(i))])})),0),t._m(0),e("span",{staticClass:"author"},[t._v("Made by Son")])])},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"home_title"},[e("p",{staticClass:"text"}),e("p",{staticClass:"text_bold",attrs:{float:"left;"}},[t._v("Developer 손은비 입니다")]),e("p",{staticClass:"text_blinking",attrs:{float:"left;"}},[t._v(".")])])}],r={data(){return{menuList:["Home","About","Skills","Project","Contact"]}},methods:{move(t){this.$emit("move",t)}}},l=r,u=(i("307f"),i("0c7c")),p=i("b204"),f=i.n(p),_=Object(u["a"])(l,c,o,!1,null,"b2b666e8",null);"function"===typeof f.a&&f()(_);var d=_.exports,g=function(){var t=this;t._self._c;return t._m(0)},v=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"About"},[e("div",{staticClass:"page_container"},[e("p",{staticClass:"page_title"},[t._v("About Me")]),e("div",{staticClass:"page_purpose"},[e("p",[t._v("사용자를 위한 개발자")])]),e("div",{staticClass:"page_detail"},[e("p",[t._v("저는 아이디어를 구현하기 위해 개발을 시작했습니다."),e("br"),t._v(" 이후 여러 프로젝트에 참여하며 아이디어를 직접 개발하며 서비스의 흐름을 체득하려고 노력하였습니다."),e("br"),t._v(" 계속해서 사용자를 위한 서비스를 제공하기 위해 프로그램을 개발하는 개발자가 되겠습니다.")])])])])}],m={},b=m,h=(i("3902"),Object(u["a"])(b,g,v,!1,null,"6608c628",null)),C=h.exports,j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"skills"},[e("div",{staticClass:"skills_container"},[e("p",{staticClass:"skills_top"},[t._v("Skills")]),e("div",{staticClass:"skills_list"},t._l(t.skillsList,(function(i){return e("div",{key:i.id,staticClass:"skills_list_item"},[e("div",{staticClass:"skills_image"},[e("img",{staticClass:"image",attrs:{src:i.image,width:"100px"}})]),e("div",{staticClass:"skills_text"},[e("div",{staticClass:"skills_text_wrapper"},[t._v(" "+t._s(i.text)+" "),e("div",{staticClass:"indicator"})])])])})),0)]),t._m(0)])},x=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"certification"},[e("p",[t._v("Certification")]),e("p",{staticClass:"detail"},[t._v("정보처리기사  ||  SQLD  ||  ADsP  ||  컴퓨터 활용능력 1급  ||  OPIC IM3  ||  TOEIC 850")])])}],k={data(){return{skillsList:[{image:i("e443"),text:"HTML"},{image:i("1094"),text:"CSS"},{image:i("b047"),text:"Android"}]}}},S=k,y=(i("4ef3"),Object(u["a"])(S,j,x,!1,null,null,null)),O=y.exports,P=function(){var t=this,e=t._self._c;return e("div",{staticClass:"project"},[e("div",{staticClass:"project_container"},[e("p",{staticClass:"project_top"},[t._v("Project")]),e("div",{staticClass:"project_list"},t._l(t.projectList,(function(i){return e("div",{key:i.id,staticClass:"project_item"},[e("img",{attrs:{src:i.image}}),e("p",{staticClass:"project_title"},[t._v(t._s(i.title))]),e("p",{staticClass:"project_content"},[t._v(t._s(i.content))]),e("p",{staticClass:"project_language"},[t._v(t._s(i.language))]),e("p",{staticClass:"project_date"},[t._v(t._s(i.date))])])})),0)])])},H=[],$={data(){return{projectList:[{image:i("5a6c"),title:"차량 파손 검출 및 견적 비교 커뮤니티",content:"사용자가 차량 사진을 대량으로 업로드하면 파손 결과를 알려줍니다. 그리고 사용자가 수리비를 업로드하면, 다른 사용자들과 비교가 가능한 웹사이트입니다.",language:"사용 언어 : HTML, PHP, CSS, Python(FLASK), MySQL",date:"제작 기간 : 2022 . 04 ~ 2022 . 06"},{image:i("ffd5"),title:"서평 웹사이트",content:"사용자들이 서평을 자유롭게 업로드하고, 의견을 나눌 수 있는 반응형 웹사이트입니다.",language:"사용 언어 : HTML, PHP, CSS, MySQL",date:"제작 기간 : 2020 . 10 ~ 2020 . 12"},{image:i("1271"),title:"호텔 웹사이트",content:"호텔 예약 및 예약 확인이 가능한 사이트입니다.",language:"사용 언어 : VUE, Node.js, Javascript",date:"제작 기간 : 2020 . 09 ~ 2020 . 10"},{image:i("4ca3"),title:"도서관 웹사이트",content:"도서관 사이트이며, 도서 검색, 회원 관리, 커뮤니티 기능 등이 있습니다. 운영자, 사용자로 권한을 조정하여 기능을 이용할 수 있는 웹사이트입니다.",language:"사용 언어 : HTML, PHP, CSS, MySQL",date:"제작 기간 : 2020 . 04 ~ 2020 . 06"},{image:i("93a3"),title:"포트폴리오 사이트",content:"해당 포트폴리오 사이트입니다.",language:"사용 언어 : VUE, Node.js",date:"제작 기간 : 2020 . 03 ~ 2020 . 04"},{image:i("9537"),title:"(KYIC)대한민국 청소년 발명 아이디어 경진대회",content:"금상",date:"2017 . 04 ~ 2017 . 05"},{image:i("22e9"),title:"독립기념관 혁신 아이디어 공모전",content:"아이디어상",date:"2019 . 06 ~ 2019 . 07"},{image:i("35bb"),title:"KT AIVLE SCHOOL",content:"부트캠프를 참여하여 AI 및 데이터 분석 프로젝트를 수행하고 있습니다.",date:"2023 . 08 ~ 2024 . 01"}]}}},w=$,L=(i("8316"),Object(u["a"])(w,P,H,!1,null,"4132dbca",null)),M=L.exports,A=function(){var t=this;t._self._c;return t._m(0)},T=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact"},[e("div",{staticClass:"contact_container"},[e("p",{staticClass:"contact_top"},[t._v("Contact")]),e("div",{staticClass:"contact_gitImage"},[e("a",{attrs:{href:"https://github.com/SonEunBi"}},[e("img",{attrs:{src:i("95cb"),width:"90"}})])]),e("div",{staticClass:"contact_area"},[e("p",[t._v("SEOUL, SOUTH KOREA")])]),e("div",{staticClass:"contact_email"},[e("p",[t._v("beeee7147@gmail.com")])])])])}],E={},I=E,K=(i("c35c"),Object(u["a"])(I,A,T,!1,null,"16640514",null)),Q=K.exports,U={name:"App",components:{Home:d,PageAbout:C,Skills:O,Project:M,Contact:Q},method:{move(t){let e;switch(t){case"Home":e=0;break;case"About":e=this.$refs.home.$el.clientHeight;break;case"Skills":e=this.$refs.home.$el.clientHeight+this.$refs.about.$el.clientHeight;break;case"Project":e=this.$refs.home.$el.clientHeight+this.$refs.about.$el.clientHeight+this.$refs.project.$el.clientHeight;break;case"Contact":e=this.$refs.home.$el.clientHeight+this.$refs.about.$el.clientHeight+this.$refs.project.$el.clientHeight+this.$refs.contact.$el.clientHeight;break}window.scroll({top:e,left:0,behavior:"smooth"})}}},D=U,J=(i("0396"),Object(u["a"])(D,a,n,!1,null,null,null)),V=J.exports;s["a"].config.productionTip=!1,new s["a"]({render:t=>t(V)}).$mount("#app")},"5a6c":function(t,e,i){t.exports=i.p+"img/carFixer.8da3d2f8.png"},"6fd4":function(t,e,i){},8316:function(t,e,i){"use strict";i("a2b2")},"8c50":function(t,e,i){},"93a3":function(t,e,i){t.exports=i.p+"img/portfolio.3dfb3ece.png"},9537:function(t,e,i){t.exports=i.p+"img/awards_1.76aac28f.jpg"},"95cb":function(t,e,i){t.exports=i.p+"img/GIT.49eb3aaa.png"},a2b2:function(t,e,i){},ac83:function(t,e,i){},b047:function(t,e,i){t.exports=i.p+"img/img_as.ce64bad9.png"},b204:function(t,e){},c35c:function(t,e,i){"use strict";i("8c50")},ca6d:function(t,e,i){},e443:function(t,e,i){t.exports=i.p+"img/img_html.d4461581.png"},ffd5:function(t,e,i){t.exports=i.p+"img/book_review.9c44e8ca.png"}});
//# sourceMappingURL=app.24074fa9.js.map