webpackJsonp([29],{JHBI:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("mvHQ"),s=r.n(o),a=(r("mw3O"),r("X2Oc")),i={data:function(){return{add_url:"/api/authmode/add",form:{mode:"LDAP"},form_errors:[],buttton_name:"创建"}},created:function(){this.viewuser=this.$route.params,"{}"==s()(this.$route.params)&&(this.form={mode:"LDAP"}),this.viewuser.id&&(this.form=this.viewuser.config,this.form.id=this.viewuser.id,this.buttton_name="编辑")},methods:{doCreate:function(e){var t=this;this.viewuser.id?(delete this.form.config,this.form.config=s()(this.form)):this.form.config=s()(this.form),this.$axios.post(this.add_url,Object(a.h)(this.form)).then(function(e){1==e.data.status?(t.$message.success("操作成功"),t.$router.push({path:"/setting?id=auth_setting"})):t.$message.error("操作失败, 错误码:"+e.data.status+e.data.msg),t.createVisible=!1,t.editVisible=!1})},checkForm:function(){if(this.form.name&&this.form.host&&this.form.port&&this.form.basedn&&this.form.loginname_property)return!0;this.form_errors=[],this.form.name||this.form_errors.push("请输入用户组名"),this.form.host||this.form_errors.push("请输入主机名"),this.form.port||this.form_errors.push("请输入端口"),this.form.basedn||this.form_errors.push("请输入Base DN"),this.form.loginname_property||this.form_errors.push("请输入登录名属性")}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("i",{staticClass:"el-icon-tickets"}),e._v(" LDAP配置\n      ")])],1)],1),e._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"block"},[r("div",{staticClass:"handle-box"},[r("el-button",{attrs:{size:"mini",icon:"search"},on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回")])],1),e._v(" "),r("div",{staticStyle:{width:"30%"}},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"名称 *"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"主机 *"}},[r("el-input",{model:{value:e.form.host,callback:function(t){e.$set(e.form,"host",t)},expression:"form.host"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"端口 *"}},[r("el-input",{model:{value:e.form.port,callback:function(t){e.$set(e.form,"port",t)},expression:"form.port"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"帐号"}},[r("el-input",{model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Base DN *"}},[r("el-input",{model:{value:e.form.basedn,callback:function(t){e.$set(e.form,"basedn",t)},expression:"form.basedn"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"登录名属性 *"}},[r("el-input",{model:{value:e.form.loginname_property,callback:function(t){e.$set(e.form,"loginname_property",t)},expression:"form.loginname_property"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"名字属性"}},[r("el-input",{model:{value:e.form.name_property,callback:function(t){e.$set(e.form,"name_property",t)},expression:"form.name_property"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"姓氏属性"}},[r("el-input",{model:{value:e.form.sn_property,callback:function(t){e.$set(e.form,"sn_property",t)},expression:"form.sn_property"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"邮件属性"}},[r("el-input",{model:{value:e.form.email_property,callback:function(t){e.$set(e.form,"email_property",t)},expression:"form.email_property"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"启用状态"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.enable,callback:function(t){e.$set(e.form,"enable",t)},expression:"form.enable"}},[r("el-option",{key:"1",attrs:{label:"启用",value:"1"}},[e._v("启用")]),e._v(" "),r("el-option",{key:"0",attrs:{label:"禁用",value:"0"}},[e._v("禁用")])],1)],1),e._v(" "),e.form_errors.length?r("el-form-item",{staticStyle:{color:"#f78989"}},[r("b",[e._v("出现以下问题 :")]),e._v(" "),r("ul",e._l(e.form_errors,function(t){return r("li",{key:t},[e._v(e._s(t))])}),0)]):e._e(),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.checkForm()&&e.doCreate()}}},[e._v(e._s(e.buttton_name))])],1)],1)])])])},staticRenderFns:[]};var m=r("VU/8")(i,l,!1,function(e){r("NKhA")},"data-v-2c34ba08",null);t.default=m.exports},NKhA:function(e,t){}});