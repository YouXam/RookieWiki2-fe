(function(t){function e(e){for(var i,a,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(i=!1)}i&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},r={app:0},o=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0370a8a4":"6bb6bf99","chunk-07380e98":"9fc05bd7","chunk-16512fc4":"578b4b6b","chunk-2d0ab43a":"39cabfac","chunk-2d0e2324":"04177f00","chunk-2d210457":"64289fa8","chunk-2d21a3d2":"a0c86890","chunk-2d22d746":"c3fb8977","chunk-66dc46c7":"9d30dd47","chunk-9a541232":"5cce1e50"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0370a8a4":1,"chunk-16512fc4":1,"chunk-66dc46c7":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var i="css/"+({}[t]||t)+"."+{"chunk-0370a8a4":"b5cb2115","chunk-07380e98":"31d6cfe0","chunk-16512fc4":"c67a11e1","chunk-2d0ab43a":"31d6cfe0","chunk-2d0e2324":"31d6cfe0","chunk-2d210457":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-66dc46c7":"1d4c77fd","chunk-9a541232":"31d6cfe0"}[t]+".css",r=c.p+i,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===i||u===r)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var i=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete a[t],h.parentNode.removeChild(h),n(o)},h.href=r;var v=document.getElementsByTagName("head")[0];v.appendChild(h)})).then((function(){a[t]=0})));var i=r[t];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise((function(e,n){i=r[t]=[e,n]}));e.push(i[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=r[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",d.name="ChunkLoadError",d.type=i,d.request=a,n[1](d)}r[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var h=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"06fb":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tabs",{staticClass:"elevation-2",attrs:{color:"black",right:!0},model:{value:t.active_tab,callback:function(e){t.active_tab=e},expression:"active_tab"}},[t._l(t.tabs,(function(e,i){return n("v-tab",{key:i,on:{click:function(n){return n.stopPropagation(),t.goto(e.to)}}},[t._v(" "+t._s(e.name)+" ")])})),n("v-tab-item",{staticStyle:{padding:"20px"}},[n("h1",[t._v(t._s(t.title))]),t.title?n("v-divider"):t._e(),n("Markdown",{attrs:{content:t.content,article:!0}})],1),n("v-tab-item"),n("v-tab-item")],2)},a=[],r=(n("ac1f"),n("5319"),n("96cf"),n("1da1")),o=n("e6e0"),s={name:"Viewer",props:{id:String,pageTitle:String},components:{Markdown:o["a"]},data:function(){return{permission:1,title:"",content:"",active_tab:0,tabs:[{name:"阅读",to:"."},{name:"编辑",to:"./edit"},{name:"历史记录",to:"./history"}]}},methods:{update:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.article_id){t.next=2;break}return t.abrupt("return");case 2:return this.tabs[1].to="/article/".concat(this.article_id,"/edit"),this.tabs[2].to="/article/".concat(this.article_id,"/history"),t.next=6,this.get("article/"+this.article_id);case 6:e=t.sent,200===e.code?(this.title=e.article.title,document.title=this.pageTitle||"RookieWiki - "+this.title,this.content=e.article.content):404===e.code?this.$router.replace("/404"):(this.title=e.code+" "+e.msg,this.content="");case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),goto:function(t){"."!==t&&t!==this.$router.currentRoute.path&&this.$router.push(t)}},created:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.update();case 1:case"end":return e.stop()}}),e)})))()},computed:{article_id:function(){return this.id}},watch:{article_id:function(){this.update()}}},c=s,l=n("2877"),u=Object(l["a"])(c,i,a,!1,null,null,null);e["a"]=u.exports},"2b22":function(t,e,n){},"2b5b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("d3b7"),n("96cf");var i=n("1da1"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("a026")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-fab-transition",[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.showTop,expression:"showTop"}],staticClass:"md-5 mr-3 elevation-21",attrs:{dark:"",fab:"",button:"",right:"",color:"blue darken-3",fixed:"",bottom:""},on:{click:t.scrollToTop}},[n("v-icon",[t._v("mdi-arrow-up-thick")])],1)],1),n("v-dialog",{attrs:{"max-width":"600px",persistent:""},model:{value:t.login_data.show,callback:function(e){t.$set(t.login_data,"show",e)},expression:"login_data.show"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("登录")])]),n("v-card-text",[n("v-container",[n("v-form",[n("v-text-field",{attrs:{label:"用户名/邮箱",clearable:""},model:{value:t.login_data.username,callback:function(e){t.$set(t.login_data,"username",e)},expression:"login_data.username"}}),n("v-text-field",{attrs:{label:"密码",type:"password",clearable:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)}},model:{value:t.login_data.password,callback:function(e){t.$set(t.login_data,"password",e)},expression:"login_data.password"}})],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.login_data.show=!1,t.register_data.show=!0}}},[t._v("前去注册")]),n("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.login_data.loading},on:{click:t.login}},[t._v("登录")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.login_data.show=!1}}},[t._v("取消")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"600px",persistent:""},model:{value:t.register_data.show,callback:function(e){t.$set(t.register_data,"show",e)},expression:"register_data.show"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("注册")])]),n("v-card-text",[n("v-container",[n("v-form",[n("v-text-field",{attrs:{label:"用户名",rules:t.nameRules,clearable:""},model:{value:t.register_data.username,callback:function(e){t.$set(t.register_data,"username",e)},expression:"register_data.username"}}),n("v-text-field",{attrs:{label:"邮箱",rules:t.emailRules,clearable:""},model:{value:t.register_data.email,callback:function(e){t.$set(t.register_data,"email",e)},expression:"register_data.email"}}),n("v-text-field",{attrs:{label:"密码",rules:t.passwordRules,type:"password",clearable:""},model:{value:t.register_data.password,callback:function(e){t.$set(t.register_data,"password",e)},expression:"register_data.password"}}),n("v-text-field",{attrs:{label:"确认密码",rules:t.confirmRules,type:"password",clearable:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)}},model:{value:t.register_data.confirm,callback:function(e){t.$set(t.register_data,"confirm",e)},expression:"register_data.confirm"}})],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.register_data.show=!1,t.login_data.show=!0}}},[t._v("前去登录")]),n("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.register_data.loading},on:{click:t.register}},[t._v("注册")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.register_data.show=!1}}},[t._v("取消")])],1)],1)],1),n("v-snackbar",{attrs:{color:t.notification.color,timeout:"1500",top:""},scopedSlots:t._u([{key:"action",fn:function(e){var i=e.attrs;return[n("v-btn",t._b({attrs:{dark:"",text:""},on:{click:function(e){t.notification.show=!1}}},"v-btn",i,!1),[t._v(" 关闭 ")])]}}]),model:{value:t.notification.show,callback:function(e){t.$set(t.notification,"show",e)},expression:"notification.show"}},[t._v(" "+t._s(t.notification.text)+" ")]),n("v-app-bar",{staticClass:"elevation-3",attrs:{app:"",color:"white","elevate-on-scroll":""}},[t.$vuetify.breakpoint.smAndDown?n("v-app-bar-nav-icon",{staticStyle:{"z-index":"9999",position:"absolute"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}):t._e(),n("v-tabs",{class:{"left-box":!t.$vuetify.breakpoint.smAndDown},staticStyle:{"padding-right":"16px"},attrs:{color:"grey darken-1",width:"100%",centered:""}},[n("v-tab",{attrs:{to:"/"}},[n("h2",[t._v("RookieWiki")])]),t._l(t.$vuetify.breakpoint.smAndDown?[]:t.links,(function(e){return n("v-tab",{key:e.to,attrs:{to:e.to}},[t._v(" "+t._s(e.text)+" ")])})),t.$vuetify.breakpoint.smAndDown?t._e():n("v-tab",{attrs:{to:"/articles"}},[t._v(" 文章列表 ")])],2),t.$vuetify.breakpoint.smAndDown?t._e():n("v-responsive",{staticStyle:{"margin-left":"40%","max-width":"20%"}},[n("v-text-field",{attrs:{label:"搜索",placeholder:"回车以搜索",filled:"","single-line":"","hide-details":"",dense:"",clearable:""},on:{"click:clear":function(e){return t.search(t.search_text="")},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.search_text,callback:function(e){t.search_text=e},expression:"search_text"}})],1),t.$vuetify.breakpoint.smAndDown?t._e():n("div",{staticClass:"login-box"},[t.islogin?n("v-menu",{attrs:{bottom:"","offset-y":!0},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-avatar",t._g(t._b({staticClass:"hidden-sm-and-down",attrs:{color:"grey darken-1 shrink",size:"45"}},"v-avatar",a,!1),i),[n("img",{attrs:{src:t.avatar},on:{error:function(e){return t.default_avatar()}}})])]}}],null,!1,1616808168)},[n("v-list",t._l(t.menu,(function(e,i){return n("v-list-item",{key:i,on:{click:e.action}},[n("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1):t._e(),t.islogin||t.$vuetify.breakpoint.smAndDown?t._e():n("div",[n("v-btn",{staticClass:"ma-2",attrs:{tile:"",color:"white"},on:{click:function(e){e.stopPropagation(),t.login_data.show=!0}}},[t._v("登录")]),n("v-btn",{staticClass:"ma-2",attrs:{tile:"",color:"black",dark:""},on:{click:function(e){e.stopPropagation(),t.register_data.show=!0}}},[t._v("注册")])],1)],1)],1),n("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[t.islogin?n("v-avatar",{staticClass:"mobile-avatar",attrs:{color:"grey darken-1 shrink",size:"120"}},[n("img",{attrs:{src:t.avatar},on:{error:function(e){return t.default_avatar()}}})]):t._e(),n("div",{staticStyle:{"text-align":"center",margin:"20px 0px"}},[n("h2",[t._v(t._s(t.username))])]),t.islogin?n("v-divider"):t._e(),n("v-list",[n("v-list-item",{on:{click:function(e){return t.goto("/")}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("首页")])],1),t._l(t.links,(function(e){return n("v-list-item",{key:e.to,on:{click:function(n){return t.goto(e.to)}}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon)+" ")])],1),n("v-list-item-title",[t._v(t._s(e.text))])],1)})),n("v-list-item",{on:{click:function(e){return t.goto("/articles")}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-playlist-star")])],1),n("v-list-item-title",[t._v("文章列表")])],1)],2),n("v-divider"),t.islogin?n("v-list",t._l(t.menu,(function(e,i){return n("v-list-item",{key:i,on:{click:e.action}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-title",[t._v(t._s(e.title))])],1)})),1):t._e(),t.islogin?t._e():n("v-list",[n("v-list-item",{on:{click:function(e){t.login_data.show=!0,t.drawer=!1}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-login")])],1),n("v-list-item-title",[t._v("登录")])],1),n("v-list-item",{on:{click:function(e){t.register_data.show=!0,t.drawer=!1}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-registered-trademark")])],1),n("v-list-item-title",[t._v("注册")])],1)],1),n("v-divider"),n("v-text-field",{staticStyle:{margin:"10px 10px"},attrs:{label:"搜索",placeholder:"回车以搜索",filled:"","single-line":"","hide-details":"",dense:"",clearable:""},on:{"click:clear":function(e){return t.search(t.search_text="")},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.search_text,callback:function(e){t.search_text=e},expression:"search_text"}})],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1),n("v-footer",{staticClass:"elevation-2",attrs:{padless:!0}},[n("v-card",{staticClass:"lighten-1 text-center",attrs:{tile:"",width:"100%"}},[n("v-card-text",[n("a",{staticClass:"link",attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[t._v(" 鄂ICP备20003020号")]),t._v(" ©"+t._s((new Date).getFullYear())+" "),n("strong",[t._v("RookieWiki ")])])],1)],1)],1)},o=[],s=n("6821"),c=n.n(s),l={data:function(){return{search_text:"",verified:!1,showTop:!1,avatar:"",links:[],islogin:!1,drawer:!1,username:"",email:"",login_data:{avatar:"",username:"",password:"",loading:!1,show:!1},register_data:{username:"",email:"",password:"",confirm:"",loading:!1,show:!1},nameRules:[function(t){return!!t||"用户名不可为空"},function(t){return/^[^+ /?$#&=]{1,30}$/.test(t)||"用户名必须在30个字符以内, 且不能包含+, /, ?, $, #, &, =和空格"}],emailRules:[function(t){return!!t||"邮箱不可为空"},function(t){return/^.+@.+\..+$/.test(t)||"邮箱格式不正确"}],passwordRules:[function(t){return!!t||"密码不可为空"},function(t){return/.{6,200}/.test(t)||"密码长度需要在 6-200 之间"}],notification:{show:!1,text:"",color:""},permission:1,desktop_menu:!1}},computed:{confirmRules:function(){var t=this;return[function(t){return!!t||"请再输入一次密码"},function(){return t.register_data.password===t.register_data.confirm||"密码不匹配"}]},menu:function(){var t=this;return[{title:"新增文章",icon:"mdi-plus",action:function(){t.goto("/add")}},{title:this.username,icon:"mdi-link",action:function(){t.goto("/user/"+t.username)}},{title:"退出登录",action:function(){localStorage.clear(),t.islogin=!1,t.notice("退出登录成功")},icon:"mdi-logout"}]}},methods:{search:function(){try{this.$router.push({path:"/articles",query:{search:this.search_text,id:Math.random()}})}catch(t){}},scrollToTop:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},goto:function(t){"."!==t&&t!==this.$router.currentRoute.path&&this.$router.push(t)},default_avatar:function(){this.username&&(this.avatar="https://api.multiavatar.com/".concat(this.username,".svg"))},update_info:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.islogin=!0,t.next=3,this.get("user");case 3:e=t.sent,this.username=e.data.username,this.email=e.data.email,this.permission=e.data.permission,this.verified=e.data.verified,this.avatar="https://sdn.geekzu.org/avatar/".concat(c()(this.email),"?d=404&s=500");case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),notice:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.notification.text=t,this.notification.color=e?"success":"error",this.notification.show=!0},login:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.login_data.loading=!0,t.next=3,this.post("login",{username:this.login_data.username,password:c()(this.login_data.password+"rookiewiki")});case 3:e=t.sent,this.login_data.loading=!1,this.notice(e.msg,200===e.code),200===e.code&&(localStorage.setItem("token",e.token),this.update_info(),this.login_data.show=!1,"/401"===this.$route.path&&this.$router.go(-1));case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),register:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(/^[^+ /?$#&=]{1,30}$/.test(this.register_data.username)&&/^.+@.+\..+$/.test(this.register_data.email)&&/.{6,200}/.test(this.register_data.password)&&this.register_data.confirm===this.register_data.password){t.next=2;break}return t.abrupt("return");case 2:return this.register_data.loading=!0,t.next=5,this.post("register",{username:this.register_data.username,password:c()(this.register_data.password+"rookiewiki"),email:this.register_data.email});case 5:e=t.sent,this.register_data.loading=!1,this.notice(e.msg,200===e.code),200===e.code&&(localStorage.setItem("token",e.token),this.update_info(this.register_data.username,this.register_data.email),this.register_data.show=!1),"/401"===this.$route.path&&this.$router.go(-1);case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return document.getElementById("preloader").classList.add("hidden"),e.next=3,t.get("navigation");case 3:t.links=e.sent.data,localStorage.getItem("token")&&t.update_info(),window.addEventListener("scroll",(function(){t.showTop=window.scrollY>100}));case 6:case"end":return e.stop()}}),e)})))()}},u=l,d=(n("034f"),n("2877")),h=Object(d["a"])(u,r,o,!1,null,null,null),v=h.exports,m=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Viewer",{attrs:{id:t.$route.params.id}})},f=[],g=n("06fb"),b={name:"Read",components:{Viewer:g["a"]}},_=b,k=Object(d["a"])(_,p,f,!1,null,null,null),w=k.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{attrs:{"max-width":"600px",persistent:""},model:{value:t.confirm_submit,callback:function(e){t.confirm_submit=e},expression:"confirm_submit"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("确认提交?")])]),n("v-container",[n("v-text-field",{attrs:{label:"编辑记录: 简要描述你的编辑内容"},model:{value:t.log,callback:function(e){t.log=e},expression:"log"}})],1),n("v-card-text",[t._v(" 如果您未编辑完成, 可以点击工具栏上的保存按钮或按ctrl+s保存到本地。"),n("br"),t._v(" 请确认编辑完成后提交。 ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.submit}},[t._v("确认")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.confirm_submit=!1}}},[t._v("取消")])],1)],1)],1),n("v-tabs",{staticClass:"elevation-2",attrs:{color:"black",right:!0},model:{value:t.active_tab,callback:function(e){t.active_tab=e},expression:"active_tab"}},[t._l(t.tabs,(function(e,i){return n("v-tab",{key:i,on:{click:function(n){return n.stopPropagation(),t.goto(e.to)}}},[t._v(" "+t._s(e.name)+" ")])})),n("v-tab-item"),n("v-tab-item",{staticStyle:{padding:"20px"}},[t.error?n("h1",[t._v(t._s(t.msg))]):n("div",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-text-field",{attrs:{label:"标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-select",{attrs:{items:t.items,label:"可见性"},model:{value:t.visibility,callback:function(e){t.visibility=e},expression:"visibility"}})],1),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-btn",{staticClass:"ma-2",attrs:{tile:"",color:"black",dark:""},on:{click:function(e){t.confirm_submit=!0}}},[t._v("提交")]),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.isload,expression:"isload"}],staticClass:"ma-2",attrs:{tile:"",color:"black",dark:""},on:{click:t.load}},[t._v("加载本地记录")])],1)],1),n("h6",{directives:[{name:"show",rawName:"v-show",value:!!t.msg,expression:"!!msg"}],staticStyle:{color:"grey","z-index":"2"}},[t._v(" "+t._s(t.msg)+" "),n("a",{on:{click:function(e){t.msg=""}}},[t._v("隐藏")])])],1),n("mavon-editor",{staticStyle:{"min-height":"60vh","z-index":"1"},attrs:{tabSize:4,subfield:!t.$vuetify.breakpoint.smAndDown},on:{imgAdd:t.imgAdd,save:t.save},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)]),n("v-tab-item")],2)],1)},x=[],$=(n("c975"),n("ac1f"),n("5319"),{name:"Edit",data:function(){return{error:!1,article_id:"",msg:"",log:"",confirm_submit:!1,isload:!1,title:"",content:"",active_tab:1,visibility:"正常",permission:1,tabs:[{name:"阅读",to:".."},{name:"编辑",to:"."},{name:"历史记录",to:"../history"}],raw:{}}},methods:{submit:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.save(),this.confirm_submit=!1,e={log:this.log},this.title!==this.raw.title&&(e.title=this.title),this.content!==this.raw.content&&(e.content=this.content),this.visibility!==this.raw.visibility&&-1!==this.items.indexOf(this.visibility)&&(e.visibility=this.permissionEnum(this.visibility)),t.next=8,this.post("article/"+this.article_id,e);case 8:if(n=t.sent,this.app.notice(n.msg,200===n.code),401===n.code&&(this.app.login_data.show=!0),423!==n.code){t.next=13;break}return t.abrupt("return",this.$router.push("/user/"+this.app.username));case 13:if(200===n.code){t.next=15;break}return t.abrupt("return");case 15:localStorage.setItem(this.article_id,""),this.goto("/article/"+this.article_id);case 17:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),goto:function(t){"."!==t&&t!==this.$router.currentRoute.path&&this.$router.push(t)},imgAdd:function(){this.app.notice("暂不支持上传图片, 此图片将无法显示, 请使用图床",!1)},send:function(t){this.msg=t},save:function(){this.title===this.raw.title&&this.content===this.raw.content&&this.visibility===this.raw.visibility||(localStorage.setItem(this.article_id,JSON.stringify({title:this.title,content:this.content,visibility:this.visibility})),this.send("本地已保存于"+new Intl.DateTimeFormat("zh-CN",{hour:"numeric",minute:"2-digit",second:"2-digit"}).format(new Date)))},load:function(){var t=JSON.parse(localStorage.getItem(this.article_id));this.title=t.title,this.content=t.content,this.visibility=t.visibility,this.isload=!1}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.article_id=t.$route.params.id,t.tabs[0].to="/article/".concat(t.article_id),t.tabs[2].to="/article/".concat(t.article_id,"/history"),e.next=5,t.get("article/"+t.article_id);case 5:return n=e.sent,200===n.code?(t.title=n.article.title,document.title="RookieWiki - 编辑 - "+t.title,t.content=n.article.content,t.visibility=t.permissionEnum(n.article.visibility),t.raw=n.article,t.raw.visibility=t.visibility):404===n.code?t.$router.replace("/404"):(t.error=!0,t.msg=n.code+" "+n.msg),setInterval(t.save,6e4),localStorage.getItem(t.article_id)&&(t.isload=!0),e.next=11,t.get("user");case 11:i=e.sent,t.permission=i.data&&i.data.permission||1;case 13:case"end":return e.stop()}}),e)})))()},computed:{items:function(){var t=["正常"];return this.permission>1&&t.push("隐藏"),this.permission>2&&t.push("删除"),t},app:function(){return this.$parent.$parent.$parent.$parent}},watch:{title:function(){document.title="RookieWiki - 编辑 - "+this.title}}}),R=$,S=Object(d["a"])(R,y,x,!1,null,null,null),O=S.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tabs",{staticClass:"elevation-2",attrs:{color:"black",right:!0},model:{value:t.active_tab,callback:function(e){t.active_tab=e},expression:"active_tab"}},[t._l(t.tabs,(function(e,i){return n("v-tab",{key:i,on:{click:function(n){return n.stopPropagation(),t.goto(e.to)}}},[t._v(" "+t._s(e.name)+" ")])})),n("v-tab-item"),n("v-tab-item"),n("v-tab-item",{staticStyle:{padding:"20px"}},[t.error?n("h1",[t._v(t._s(t.msg))]):n("div",[n("v-pagination",{attrs:{length:t.length,"total-visible":"10"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}),n("v-timeline",{attrs:{dense:!0}},t._l(t.histories,(function(e,i){return n("v-timeline-item",{key:i,attrs:{small:!0}},[n("v-card",{staticClass:"elevation-2",on:{click:function(n){return t.goto("/article/"+t.article_id+"/history/"+e._id)}}},[e.log?n("v-card-title",{staticClass:"headline"},[t._v(" "+t._s(e.log)+" ")]):t._e(),n("v-card-title",[n("v-checkbox",{staticClass:"checkbox",attrs:{label:"标题","hide-details":"",disabled:""},model:{value:e.state.title,callback:function(n){t.$set(e.state,"title",n)},expression:"item.state.title"}}),n("v-checkbox",{staticClass:"checkbox",attrs:{label:"内容","hide-details":"",disabled:""},model:{value:e.state.content,callback:function(n){t.$set(e.state,"content",n)},expression:"item.state.content"}}),n("v-checkbox",{staticClass:"checkbox",attrs:{label:"可见性","hide-details":"",disabled:""},model:{value:e.state.visibility,callback:function(n){t.$set(e.state,"visibility",n)},expression:"item.state.visibility"}})],1),n("v-card-text",[t._v(" #"+t._s(e.num)+" - "+t._s(e.user)+" 修改于 "+t._s(new Intl.DateTimeFormat("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"2-digit",second:"2-digit"}).format(new Date(e.date)))+" "+t._s(["","隐藏","删除"][e.history_visibility-1])+" ")])],1)],1)})),1),n("v-pagination",{attrs:{length:t.length,"total-visible":"10"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)])],2)],1)},C=[],E={name:"Histories",data:function(){return{error:!1,msg:"",page:1,length:1,article_id:"",active_tab:2,histories:[],tabs:[{name:"阅读",to:".."},{name:"编辑",to:"../edit"},{name:"历史记录",to:"."}]}},methods:{goto:function(t){"."!==t&&t!==this.$router.currentRoute.path&&this.$router.push(t)},update:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.get("article/"+this.article_id);case 2:return e=t.sent,t.next=5,this.get("article/"+this.article_id+"/history?page="+this.page);case 5:n=t.sent,200===n.code?(this.histories=n.histories,document.title="RookieWiki - 历史记录 - "+e.article.title,this.length=parseInt((n.total-1)/(n.size||100))+1):404===n.code?this.$router.replace("/404"):(this.error=!0,this.msg=n.code+" "+n.msg);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.page=parseInt(t.$route.query.page)||1,t.$watch("page",(function(t){this.$router.push({query:{page:t}}),this.update()})),t.article_id=t.$route.params.id,t.tabs[0].to="/article/".concat(t.article_id),t.tabs[1].to="/article/".concat(t.article_id,"/edit"),t.update();case 6:case"end":return e.stop()}}),e)})))()}},A=E,T=(n("fc34"),Object(d["a"])(A,j,C,!1,null,"c797aeec",null)),I=T.exports;a["default"].use(m["a"]);var P=[{path:"/",name:"Home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/add",name:"Add",component:function(){return n.e("chunk-2d0e2324").then(n.bind(null,"7e55"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/articles",name:"ArticleList",component:function(){return n.e("chunk-66dc46c7").then(n.bind(null,"7f05"))}},{path:"/verify",name:"Verify",component:function(){return n.e("chunk-2d210457").then(n.bind(null,"b6d1"))}},{path:"/article/:article_id/history/:history_id",name:"History",component:function(){return n.e("chunk-9a541232").then(n.bind(null,"e4bb"))}},{path:"/article/:article_id/diff",name:"Diff",component:function(){return n.e("chunk-07380e98").then(n.bind(null,"d4f9"))}},{path:"/user/:username",name:"User",component:function(){return n.e("chunk-2d0ab43a").then(n.bind(null,"1511"))}},{path:"/article/:id",name:"Article",component:function(){return n.e("chunk-16512fc4").then(n.bind(null,"3ad6"))},children:[{path:"",name:"Read",component:w},{path:"edit",name:"Edit",component:O},{path:"history",name:"Histories",component:I}]},{path:"*",name:"P404",component:function(){return n.e("chunk-0370a8a4").then(n.bind(null,"4bbe"))}}],D=new m["a"]({mode:"history",base:"/",routes:P}),N=D,z=n("ce5b"),L=n.n(z),M=n("323e"),B=n.n(M),W=n("a60c"),q=n.n(W),H="/api/";B.a.configure({easing:"ease",speed:500,showSpinner:!1,trickleSpeed:200,minimum:.1}),N.beforeEach((function(t,e,n){B.a.start(),n()})),N.afterEach((function(){B.a.done()})),a["default"].config.productionTip=!1,a["default"].use(L.a),a["default"].use(q.a),a["default"].prototype.get=function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={cache:"no-cache",headers:{},method:"GET"},localStorage.getItem("token")&&(n.headers.Authorization="Bearer "+localStorage.getItem("token")),t.next=4,fetch(H+e,n);case 4:return i=t.sent,t.next=7,i.json();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a["default"].prototype.post=function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,n){var i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i={body:JSON.stringify(n),cache:"no-cache",headers:{"content-type":"application/json"},method:"POST"},localStorage.getItem("token")&&(i.headers.Authorization="Bearer "+localStorage.getItem("token")),t.next=4,fetch(H+e,i);case 4:return a=t.sent,t.next=7,a.json();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),a["default"].prototype.permissionEnum=function(t){return{"正常":1,"隐藏":2,"删除":3,1:"正常",2:"隐藏",3:"删除"}[t]},new a["default"]({router:N,vuetify:new L.a,render:function(t){return t(v)}}).$mount("#app")},"843f":function(t,e,n){"use strict";n("2b22")},"85ec":function(t,e,n){},e6e0:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.article?"min-height: 65vh":""},[n(t.html,{tag:"components",staticClass:"markdown-body"})],1)},a=[],r=(n("ac1f"),n("5319"),n("d4cd")),o=n.n(r),s=n("b792"),c=n.n(s),l=n("a68e"),u=n.n(l),d=n("54f6"),h=n.n(d),v=n("7ba6"),m=n.n(v),p=n("746a"),f=n.n(p),g=n("ff97"),b=n.n(g),_=n("5121"),k=n.n(_),w=n("cf2b"),y=n.n(w),x=n("4bb9"),$=n.n(x),R=n("be03"),S=n.n(R),O=n("e6f9"),j=n.n(O),C=n("2d46"),E=n.n(C),A={name:"Markdown",props:{content:String,article:Boolean},data:function(){return{md:null}},computed:{html:function(){var t=this.md.render(this.content);return t=t.replace(/<a href="(?!http:\/\/|https:\/\/)([^#]*?)">(.*?)<\/a>/g,'<router-link to="$1">$2</router-link>'),t=t.replace(/<a href="(?!#)(.*?)">(.*?)<\/a>/g,'<a href="$1" target="_blank">$2</a>'),{template:"<div>"+t+"</div>"}}},created:function(){this.md=new o.a,this.md.use(c.a).use(u.a).use(h.a).use(m.a).use(b.a).use(k.a).use(y.a).use($.a).use(S.a).use(j.a).use(E.a).use(f.a,"hljs-center",{render:function(t,e){return 1===t[e].nesting?'<div class="hljs-center">':"</div>\n"}}).use(f.a,"hljs-left",{render:function(t,e){return 1===t[e].nesting?'<div class="hljs-left">':"</div>\n"}}).use(f.a,"hljs-right",{render:function(t,e){return 1===t[e].nesting?'<div class="hljs-right">':"</div>\n"}})}},T=A,I=(n("843f"),n("2877")),P=Object(I["a"])(T,i,a,!1,null,"41bcfe90",null);e["a"]=P.exports},fc34:function(t,e,n){"use strict";n("2b5b")}});