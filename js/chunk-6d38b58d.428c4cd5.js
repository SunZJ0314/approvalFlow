(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d38b58d"],{"0907":function(e,t,o){},"205d":function(e,t,o){"use strict";var r=o("0907"),_=o.n(r);_.a},"87e6":function(e,t,o){"use strict";o.r(t);var r,_,a=o("dc07"),n=a["a"],l=(o("205d"),o("2877")),s=Object(l["a"])(n,r,_,!1,null,"707003ae",null);t["default"]=s.exports},bb2f:function(e,t,o){var r=o("d039");e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},cb34:function(e,t,o){"use strict";o("4160"),o("b64b"),o("ac1f"),o("1276"),o("159b");var r=function(e,t){var o=e.split(","),r=Object.create(null);return o.forEach((function(e){return r[e]=!0})),t?function(e){return r[e.toLowerCase()]}:function(e){return r[e]}},_=r("accept,accept-charset,accesskey,action,align,alt,async,autocomplete,autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,name,contenteditable,contextmenu,controls,coords,data,datetime,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,form,formaction,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,type,usemap,value,width,wrap");function a(e,t,o){t.props.value=o,t.on.input=function(t){console.log("input"),e.$emit("input",t)},t.on.change=function(t){console.log("change"),e.$emit("input",t)}}var n={"el-input":{prepend:function(e,t,o){return e("template",{slot:"prepend"},[t[o]])},append:function(e,t,o){return e("template",{slot:"append"},[t[o]])}},"el-select":{options:function(e,t,o){var r=[];return t.options.forEach((function(t){r.push(e("el-option",{attrs:{label:t.label,value:t.value,disabled:t.disabled}}))})),r}},"el-radio-group":{options:function(e,t,o){var r=[];return t.options.forEach((function(o){"button"===t.optionType?r.push(e("el-radio-button",{attrs:{label:o.value}},[o.label])):r.push(e("el-radio",{attrs:{label:o.value,border:t.border}},[o.label]))})),r}},"el-checkbox-group":{options:function(e,t,o){var r=[];return t.options.forEach((function(o){"button"===t.optionType?r.push(e("el-checkbox-button",{attrs:{label:o.value}},[o.label])):r.push(e("el-checkbox",{attrs:{label:o.value,border:t.border}},[o.label]))})),r}},"el-upload":{"list-type":function(e,t,o){var r=[];return"picture-card"===t["list-type"]?r.push(e("i",{class:"el-icon-plus"})):r.push(e("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-upload"}},[t.buttonText])),t.showTip&&r.push(e("div",{slot:"tip",class:"el-upload__tip"},["只能上传不超过 ",t.fileSize,t.sizeUnit," 的",t.accept,"文件"])),r}}};t["a"]={render:function(e){var t=this,o={attrs:{},props:{},on:{},style:{}},r=JSON.parse(JSON.stringify(this.conf)),l=[],s=n[r.tag];return s&&Object.keys(s).forEach((function(t){var o=s[t];r[t]&&l.push(o(e,r,t))})),Object.keys(r).forEach((function(e){var n=r[e];"vModel"===e?a(t,o,t.value||r["defaultValue"]):o[e]?o[e]=n:_(e)?o.attrs[e]=n:o.props[e]=n})),e(this.conf.tag,o,l)},props:["conf","value"]}},dc07:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("4160"),core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("d81d"),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("dca8"),core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("b64b"),core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("159b"),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__),_home_runner_work_approvalFlow_approvalFlow_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("ade3"),_home_runner_work_approvalFlow_approvalFlow_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("5530"),_assets_utils_render_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("cb34"),_admin_mockData_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("0cd2"),_components_DynamicForm_components_generator_config_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("d0f3"),setFcOrgSelectRule=function(e,t){return{validator:function(o,r,_){var a=0,n=t[t.confGlobal.formModel][o.field];e.tabList.forEach((function(e){n&&Array.isArray(n[e])&&(a+=n[e].length)})),_(a?void 0:new Error("".concat(e.title,"不能为空")))},trigger:_components_DynamicForm_components_generator_config_js__WEBPACK_IMPORTED_MODULE_9__["g"][e.tag],type:"object"}};function buildRules(conf,ctx){if(void 0!==conf.vModel&&_components_DynamicForm_components_generator_config_js__WEBPACK_IMPORTED_MODULE_9__["g"][conf.tag]){var rules=[];if(conf.required){var type=Array.isArray(conf.defaultValue)?"array":void 0,message=Array.isArray(conf.defaultValue)?"请至少选择一个":conf.placeholder;void 0===message&&(message="".concat(conf.label,"不能为空")),"fc-org-select"===conf.tag?rules.push(setFcOrgSelectRule(conf,ctx)):rules.push({required:!0,type:type,message:message,trigger:_components_DynamicForm_components_generator_config_js__WEBPACK_IMPORTED_MODULE_9__["g"][conf.tag]})}conf.regList&&Array.isArray(conf.regList)&&conf.regList.forEach((function(item){item.pattern&&rules.push({pattern:eval(item.pattern),message:item.message,trigger:_components_DynamicForm_components_generator_config_js__WEBPACK_IMPORTED_MODULE_9__["g"][conf.tag]})})),ctx.rules[conf.vModel]=rules}}var setData=function(e,t,o){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];o&&(r?e.$set(e[e.confGlobal.formModel],o,t):e[e.confGlobal.formModel][o]=t)},_isMounted=!1,buildData=function(e,t,o){return setData(e,t,o,!0)},layouts={colFormItem:function(e,t,o){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];buildRules(e,o),!_isMounted&&buildData(o,e.defaultValue,e.vModel);var _="";e.labelWidth&&(_="".concat(e.labelWidth,"px")),r&&(_="0px");var a=!_components_DynamicForm_components_generator_config_js__WEBPACK_IMPORTED_MODULE_9__["g"][e.tag]&&e.required||"fc-org-select"===e.tag,n=t("el-col",{attrs:{span:e.span}},[t("el-form-item",{attrs:{"label-width":_,label:r?"":e.label,prop:e.vModel,required:a}},[t(_assets_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["a"],{on:{input:function(t){return setData(o,t,e.vModel)}},attrs:{value:o[o.confGlobal.formModel][e.vModel],conf:e},ref:"table"===e.rowType?e.vModel:void 0})])]);if(r){var l=t("el-col",{attrs:{span:24},style:"font-size: 14px;padding:6px 0px;margin-bottom: 4px;border-bottom: 1px solid #e5e5e5;"},[e.label]);return[l,n]}return n},rowFormItem:function(e,t,o){if("table"===e.rowType){o.tableRefs[e.vModel]=e;var r=Object(_home_runner_work_approvalFlow_approvalFlow_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["a"])({},e,{config:e,formSize:o.confGlobal.size,labelWidth:"".concat(e.labelWidth||o.confGlobal.labelWidth,"px")});return this.colFormItem(r,t,o,"list"===e.type)}buildRules(e,o);var _,a,n={type:"default"===e.type?void 0:e.type,justify:"default"===e.type?void 0:e.justify,align:"default"===e.type?void 0:e.align,gutter:"number"===typeof e.gutter?e.gutter:void 0},l=t("el-col",{attrs:{span:e.span||24}},[t("el-row",{props:Object(_home_runner_work_approvalFlow_approvalFlow_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_6__["a"])({},n)},[Array.isArray(e.children)&&e.children.map((function(e){return layouts[e.layout](e,t,o)}))])]);return e.showDivider?("custom"===e.cmpType&&e.explain&&(a=t("el-tooltip",{attrs:{effect:"dark",content:"组件说明",placement:"top"}},[t("i",{class:"el-icon-info",on:{click:o.showExplain.bind(this,e.explain,e.label)},style:"margin-right: 8px; color: #E6A23C;cursor: pointer;"})])),_=t("el-col",{attrs:{span:24}},[t("el-divider",{attrs:{"content-position":"left"}},[a," ",e.label])]),[_,l]):l}};__webpack_exports__["a"]={data:function(){var e,t=this.$route.params.formData||_admin_mockData_js__WEBPACK_IMPORTED_MODULE_8__["a"].formData;return Object.freeze(t),e={tableRefs:{},drawerTitle:"",drawerText:"",drawerVisible:!1,containerWidth:66,confGlobal:t},Object(_home_runner_work_approvalFlow_approvalFlow_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["a"])(e,t.formModel,{}),Object(_home_runner_work_approvalFlow_approvalFlow_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["a"])(e,t.formRules,{}),e},mounted:function(){_isMounted=!0},methods:{submitForm:function(){var e=this,t=this.checkTableData();this.$refs[this.confGlobal.formRef].validate((function(o){o&&t&&(e.$notify({title:"表单数据",message:"请在控制台中查看数据输出",position:"bottom-right"}),console.log("表单数据",e[e.confGlobal.formModel]))}))},resetForm:function(){this.$refs[this.confGlobal.formRef].resetFields(),this.resetTableData()},resetTableData:function(){var e=this;Object.keys(this.tableRefs).forEach((function(t){e.$refs[t].reset()}))},checkTableData:function(){var e=this,t=!0;return Object.keys(this.tableRefs).forEach((function(o){var r=e.$refs[o].$children[0].submit();r?e[e.confGlobal.formModel][o]=r:t=!1})),t},showExplain:function(e,t){e&&(this.drawerTitle=t,this.drawerText=e,this.drawerVisible=!0)},buildDrawer:function(e){var t=this,o=e("pre",{style:"padding-left: 1rem;"},[this.drawerText]);return e("el-drawer",{props:{title:this.drawerTitle+"说明",visible:this.drawerVisible},on:{"update:visible":function(e){return t.drawerVisible=e}}},[o])},buildForm:function(e){var t=this,o=(this.confGlobal.labelPosition,this.confGlobal.fields.map((function(o){return layouts[o.layout](o,e,t)}))),r={props:{model:this[this.confGlobal.formModel],rules:this[this.confGlobal.formRules],size:this.confGlobal.size,labelWidth:this.confGlobal.labelWidth+"px",labelPosition:this.confGlobal.labelPosition||void 0},ref:this.confGlobal.formRef},_=e("el-col",{attrs:{span:24}},[e("el-form-item",{style:"text-align:right;"},[e("el-button",{attrs:{type:"primary"},on:{click:this.submitForm}},["提交"]),e("el-button",{on:{click:this.resetForm}},["重置"])])]);return e("el-form",r,[o,_])}},render:function(e){var t=this;return e("div",{class:"preview-container",style:"width:"+this.containerWidth+"%;"},[e("el-row",{attrs:{gutter:this.confGlobal.gutter},style:"padding: 2rem 2rem 0;"},[this.buildForm(e)]),e("div",{class:"width-slider"},[e("el-slider",{attrs:{min:30,max:96},model:{value:t.containerWidth,callback:function(e){t.containerWidth=e}}})]),this.buildDrawer(e)])}}},dca8:function(e,t,o){var r=o("23e7"),_=o("bb2f"),a=o("d039"),n=o("861d"),l=o("f183").onFreeze,s=Object.freeze,i=a((function(){s(1)}));r({target:"Object",stat:!0,forced:i,sham:!_},{freeze:function(e){return s&&n(e)?s(l(e)):e}})},f183:function(e,t,o){var r=o("d012"),_=o("861d"),a=o("5135"),n=o("9bf2").f,l=o("90e3"),s=o("bb2f"),i=l("meta"),c=0,u=Object.isExtensible||function(){return!0},p=function(e){n(e,i,{value:{objectID:"O"+ ++c,weakData:{}}})},d=function(e,t){if(!_(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,i)){if(!u(e))return"F";if(!t)return"E";p(e)}return e[i].objectID},f=function(e,t){if(!a(e,i)){if(!u(e))return!0;if(!t)return!1;p(e)}return e[i].weakData},b=function(e){return s&&m.REQUIRED&&u(e)&&!a(e,i)&&p(e),e},m=e.exports={REQUIRED:!1,fastKey:d,getWeakData:f,onFreeze:b};r[i]=!0}}]);
//# sourceMappingURL=chunk-6d38b58d.428c4cd5.js.map