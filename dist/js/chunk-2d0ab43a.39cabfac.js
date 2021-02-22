(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab43a"],{1511:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-main",{staticClass:"grey lighten-3"},[a("v-dialog",{attrs:{"max-width":"600px",persistent:""},model:{value:e.email_dialog,callback:function(t){e.email_dialog=t},expression:"email_dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("修改邮箱")])]),a("v-container",[a("v-text-field",{attrs:{label:"邮箱",rules:e.emailRules},model:{value:e.edited_main,callback:function(t){e.edited_main=t},expression:"edited_main"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.update_email}},[e._v("确认")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.email_dialog=!1}}},[e._v("取消")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600px",persistent:""},model:{value:e.password_dialog,callback:function(t){e.password_dialog=t},expression:"password_dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("修改密码")])]),a("v-container",[a("v-text-field",{attrs:{label:"旧密码",type:"password"},model:{value:e.old_password,callback:function(t){e.old_password=t},expression:"old_password"}}),a("v-text-field",{attrs:{label:"新密码",type:"password",rules:e.passwordRules},model:{value:e.new_password,callback:function(t){e.new_password=t},expression:"new_password"}}),a("v-text-field",{attrs:{label:"确认密码",type:"password",rules:e.confirmRules},model:{value:e.confirm_password,callback:function(t){e.confirm_password=t},expression:"confirm_password"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.update_password}},[e._v("确认")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.password_dialog=!1}}},[e._v("取消")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600px",persistent:""},model:{value:e.permission_dialog,callback:function(t){e.permission_dialog=t},expression:"permission_dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("修改权限")])]),a("v-container",[a("v-select",{attrs:{items:e.items,label:"权限"},model:{value:e.permission,callback:function(t){e.permission=t},expression:"permission"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.update_permission}},[e._v("确认")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.permission_dialog=!1}}},[e._v("取消")])],1)],1)],1),a("v-container",[a("v-sheet",{staticClass:"white elevation-2 d-flex flex-wrap",staticStyle:{padding:"10px"}},[a("UserAvatar",{attrs:{username:e.username,email:e.user.email,maxWidth:e.$vuetify.breakpoint.smAndDown?"100%":"25%"}}),a("v-sheet",{staticStyle:{padding:"30px"}},[a("h1",[e._v(e._s(e.username))]),e.user.email?a("div",{staticStyle:{color:"grey","padding-top":"10px"}},[e._v(" "+e._s(e.table[e.user.permission])+" ")]):e._e(),e.user.email?a("div",{staticStyle:{color:"grey","padding-top":"10px"}},[e._v(" "+e._s(e.user.email)+" ")]):e._e(),e.username==e.app.username?a("v-btn",{staticClass:"action",attrs:{plain:""},on:{click:function(t){e.password_dialog=!0}}},[e._v("修改密码")]):e._e(),e.username==e.app.username?a("v-btn",{staticClass:"action",attrs:{plain:""},on:{click:function(t){e.email_dialog=!0}}},[e._v("修改邮箱")]):e._e(),e.app.verified||e.username!=e.app.username?e._e():a("v-btn",{staticClass:"action",attrs:{plain:"",loading:e.active_load,disabled:e.disable_active},on:{click:e.active}},[e._v("激活邮件"),a("span",{directives:[{name:"show",rawName:"v-show",value:e.disable_active,expression:"disable_active"}]},[e._v("("+e._s(e.last_time)+"秒)")])]),e.app.permission>=2?a("v-btn",{staticClass:"action",attrs:{plain:""},on:{click:function(t){e.permission_dialog=!0}}},[e._v("修改权限")]):e._e()],1)],1)],1)],1)},i=[],n=(a("ac1f"),a("5319"),a("96cf"),a("1da1")),r=a("6821"),o=a.n(r),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-img",{attrs:{src:e.avatar,"max-width":e.maxWidth},on:{error:function(t){return e.default_avatar()}}})},u=[],l={name:"UserAvatar",props:{maxWidth:String,username:String,email:String},data:function(){return{avatar:""}},methods:{default_avatar:function(){this.username_c&&(this.avatar="https://api.multiavatar.com/".concat(this.username_c,".svg"))},update:function(){this.email_c?this.avatar="https://sdn.geekzu.org/avatar/".concat(o()(this.email_c),"?d=404&s=500"):this.default_avatar()}},computed:{maxWidth_c:function(){return this.maxWidth},username_c:function(){return this.username},email_c:function(){return this.email}},watch:{username_c:function(){this.update()},email_c:function(){this.update()}}},p=l,d=a("2877"),m=Object(d["a"])(p,c,u,!1,null,null,null),v=m.exports,_={name:"User",components:{UserAvatar:v},data:function(){return{user:{},disable_active:!1,active_load:!1,password_dialog:!1,email_dialog:!1,permission_dialog:!1,last_time:0,permission:"普通用户",old_password:"",new_password:"",confirm_password:"",edited_main:"",timmer:0,emailRules:[function(e){return!!e||"邮箱不可为空"},function(e){return/^.+@.+\..+$/.test(e)||"邮箱格式不正确"}],passwordRules:[function(e){return!!e||"密码不可为空"},function(e){return/.{6,200}/.test(e)||"密码长度需要在 6-200 之间"}],table:{"普通用户":1,"管理员":2,"超级管理员":3,"封禁用户":0,0:"封禁用户",1:"普通用户",2:"管理员",3:"超级管理员"}}},methods:{active:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.active_load=!0,e.next=3,this.post("active");case 3:t=e.sent,this.app.notice(t.msg,200===t.code),this.time=new Date(t.time),this.last_time=300-parseInt((new Date-this.time)/1e3),this.disable_active=!0,this.timmer=setInterval((function(){a.last_time=300-parseInt((new Date-a.time)/1e3),a.last_time<=0&&(a.disable_active=!1,clearInterval(a.timmer))}),1e3),this.active_load=!1;case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),update_email:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(/^.+@.+\..+$/.test(this.edited_main)){e.next=2;break}return e.abrupt("return",this.app.notice("邮箱格式错误",!1));case 2:return this.email_dialog=!1,e.next=5,this.post("update_email",{email:this.edited_main});case 5:if(t=e.sent,this.app.notice(t.msg,200===t.code),200===t.code){e.next=9;break}return e.abrupt("return");case 9:this.app.update_info(),this.username===this.app.username&&location.reload();case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),update_password:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(/.{6,200}/.test(this.new_password)&&this.new_password===this.confirm_password){e.next=2;break}return e.abrupt("return",this.app.notice("密码格式不正确",!1));case 2:return e.next=4,this.post("update_password",{oldpassword:o()(this.old_password+"rookiewiki"),newpassword:o()(this.new_password+"rookiewiki")});case 4:t=e.sent,this.app.notice(t.msg,200===t.code),this.password_dialog=!1;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),update_permission:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.permission_dialog=!1,e.next=3,this.post("update_permission",{uid:this.username,permission:this.table[this.permission]});case 3:t=e.sent,this.app.notice(t.msg,200===t.code),this.update(),this.username===this.app.username&&this.app.update_info();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),update:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.get("user/"+this.username);case 2:if(t=e.sent,404!==t.code){e.next=5;break}return e.abrupt("return",this.$router.replace("/404"));case 5:if(200===t.code){e.next=7;break}return e.abrupt("return",this.app.notice(t.msg,!1));case 7:this.permission=this.table[t.data.permission],this.user=t.data;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},computed:{app:function(){return this.$parent.$parent},confirmRules:function(){var e=this;return[function(e){return!!e||"请再输入一次密码"},function(){return e.new_password===e.confirm_password||"密码不匹配"}]},username:function(){return this.$route.params.username},items:function(){return this.app.permission>=3?["封禁用户","普通用户","管理员"]:["封禁用户","普通用户"]}},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.update();case 1:case"end":return t.stop()}}),t)})))()},watch:{username:function(){this.update()}}},h=_,f=Object(d["a"])(h,s,i,!1,null,null,null);t["default"]=f.exports}}]);