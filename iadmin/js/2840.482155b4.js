"use strict";(globalThis["webpackChunkimagina_cms"]=globalThis["webpackChunkimagina_cms"]||[]).push([[2840],{82840:(e,l,t)=>{t.r(l),t.d(l,{default:()=>B});var a=t(92444),s=t(74044);const o={id:"pageId",class:"q-layout-page layout-padding"},i={class:"relative-position q-mb-lg backend-page"},r={class:"box"},d={key:0,class:"row"},m={class:"col-12 q-mb-md"},c={key:0,class:"col-12 col-md-8"},n={class:"row q-col-gutter-sm"},u={class:"col-12"},p={class:"text-caption"},f={class:"col-4"},h={class:"col-8"},g={class:"row q-col-gutter-sm"},$={class:"col-12"},b={class:"text-caption"},v={class:"col-4"},y={class:"col-8"},T={key:0,class:"options-for-select"},V={key:1,class:"col-12 col-md-4"},x={class:"col-12 text-right"};function q(e,l,t,q,Q,D){const R=(0,a.E1)("locales"),K=(0,a.E1)("q-input"),k=(0,a.E1)("q-select"),I=(0,a.E1)("optionsForSelect"),w=(0,a.E1)("q-checkbox"),E=(0,a.E1)("q-btn"),F=(0,a.E1)("q-form"),U=(0,a.E1)("inner-loading");return(0,a.Wz)(),(0,a.An)("div",o,[(0,a.QD)("div",i,[(0,a.QD)("div",r,[Q.success?((0,a.Wz)(),(0,a.An)("div",d,[(0,a.QD)("div",m,[(0,a.K2)(R,{modelValue:Q.locale,"onUpdate:modelValue":l[0]||(l[0]=e=>Q.locale=e),ref:"localeComponent",form:e.$refs.formContent},null,8,["modelValue","form"])]),Q.locale.success?((0,a.Wz)(),(0,a.Az)(F,{key:0,autocorrect:"off",autocomplete:"off",ref:"formContent",class:"q-col-gutter-x-md full-width row",onSubmit:l[13]||(l[13]=e=>Q.fieldId?D.update():D.create()),onValidationError:l[14]||(l[14]=l=>e.$alert.error(e.$tr("isite.cms.message.formInvalid")))},{default:(0,a.Ql)((()=>[Q.locale.success?((0,a.Wz)(),(0,a.An)("div",c,[(0,a.K2)(K,{"data-testid":"name",outlined:"",dense:"",modelValue:Q.locale.formTemplate.name,"onUpdate:modelValue":l[1]||(l[1]=e=>Q.locale.formTemplate.name=e),label:`${e.$tr("isite.cms.form.name")}*`,rules:[l=>!!l||e.$tr("isite.cms.message.fieldRequired")]},null,8,["modelValue","label","rules"]),(0,a.K2)(K,{"data-testid":"label",outlined:"",dense:"",modelValue:Q.locale.formTemplate.label,"onUpdate:modelValue":l[2]||(l[2]=e=>Q.locale.formTemplate.label=e),rules:[l=>!!l||e.$tr("isite.cms.message.fieldRequired")],label:`${e.$tr("iforms.cms.form.label")} (${Q.locale.language})*`},null,8,["modelValue","rules","label"]),(0,a.K2)(K,{"data-testid":"placeholder",outlined:"",dense:"",modelValue:Q.locale.formTemplate.placeholder,"onUpdate:modelValue":l[3]||(l[3]=e=>Q.locale.formTemplate.placeholder=e),rules:[l=>!!l||e.$tr("isite.cms.message.fieldRequired")],label:`${e.$tr("iforms.cms.form.placeholder")} (${Q.locale.language})*`},null,8,["modelValue","rules","label"]),(0,a.K2)(K,{"data-testid":"description",outlined:"",dense:"",modelValue:Q.locale.formTemplate.description,"onUpdate:modelValue":l[4]||(l[4]=e=>Q.locale.formTemplate.description=e),rules:[l=>!!l||e.$tr("isite.cms.message.fieldRequired")],label:`${e.$tr("isite.cms.form.description")} (${Q.locale.language})*`},null,8,["modelValue","rules","label"]),(0,a.QD)("div",n,[(0,a.QD)("div",u,[(0,a.QD)("span",p,(0,s.WA)(`${e.$tr("isite.cms.form.prefix")}`),1)]),(0,a.QD)("div",f,[(0,a.K2)(k,{"data-testid":"prefixType",modelValue:Q.locale.formTemplate.prefix.type,"onUpdate:modelValue":l[5]||(l[5]=e=>Q.locale.formTemplate.prefix.type=e),options:Q.prefixTypes,outlined:"",dense:"","emit-value":"","map-options":"",label:`${e.$tr("isite.cms.form.type")}`},null,8,["modelValue","options","label"])]),(0,a.QD)("div",h,[(0,a.K2)(K,{"data-testid":"prefixValue",outlined:"",dense:"",label:`${e.$tr("iforms.cms.form.value")}`,modelValue:Q.locale.formTemplate.prefix.value,"onUpdate:modelValue":l[6]||(l[6]=e=>Q.locale.formTemplate.prefix.value=e)},null,8,["label","modelValue"])])]),(0,a.QD)("div",g,[(0,a.QD)("div",$,[(0,a.QD)("span",b,(0,s.WA)(`${e.$tr("iforms.cms.form.suffix")}`),1)]),(0,a.QD)("div",v,[(0,a.K2)(k,{"data-testid":"prefixType",modelValue:Q.locale.formTemplate.suffix.type,"onUpdate:modelValue":l[7]||(l[7]=e=>Q.locale.formTemplate.suffix.type=e),options:Q.prefixTypes,outlined:"",dense:"","emit-value":"","map-options":"",label:`${e.$tr("isite.cms.form.type")}`},null,8,["modelValue","options","label"])]),(0,a.QD)("div",y,[(0,a.K2)(K,{"data-testid":"suffix",outlined:"",dense:"",label:`${e.$tr("iforms.cms.form.value")}`,modelValue:Q.locale.formTemplate.suffix.value,"onUpdate:modelValue":l[8]||(l[8]=e=>Q.locale.formTemplate.suffix.value=e)},null,8,["label","modelValue"])])]),(0,a.K2)(k,{"data-testid":"type",modelValue:Q.locale.formTemplate.width,"onUpdate:modelValue":l[9]||(l[9]=e=>Q.locale.formTemplate.width=e),options:Q.columnWidths,rules:[l=>!!l||e.$tr("isite.cms.message.fieldRequired")],outlined:"",dense:"","emit-value":"","map-options":"",label:`${e.$tr("isite.cms.form.width")}*`},null,8,["modelValue","options","rules","label"]),(0,a.K2)(k,{"data-testid":"type",modelValue:Q.locale.formTemplate.type,"onUpdate:modelValue":l[10]||(l[10]=e=>Q.locale.formTemplate.type=e),options:Q.types,rules:[l=>!!l||e.$tr("isite.cms.message.fieldRequired")],outlined:"",dense:"","emit-value":"","map-options":"",label:`${e.$tr("isite.cms.form.type")}*`},null,8,["modelValue","options","rules","label"]),[5,6,8].indexOf(Q.locale.formTemplate.type)>=0?((0,a.Wz)(),(0,a.An)("div",T,[(0,a.K2)(I,{model:Q.locale.formTemplate},null,8,["model"])])):(0,a.g1)("",!0)])):(0,a.g1)("",!0),Q.locale.success?((0,a.Wz)(),(0,a.An)("div",V,[(0,a.K2)(K,{"data-testid":"order",outlined:"",dense:"",modelValue:Q.locale.formTemplate.order,"onUpdate:modelValue":l[11]||(l[11]=e=>Q.locale.formTemplate.order=e),label:`${e.$tr("iforms.cms.form.order")}`},null,8,["modelValue","label"]),(0,a.K2)(w,{"data-testid":"required",label:e.$tr("isite.cms.form.required"),modelValue:Q.locale.formTemplate.required,"onUpdate:modelValue":l[12]||(l[12]=e=>Q.locale.formTemplate.required=e)},null,8,["label","modelValue"])])):(0,a.g1)("",!0),(0,a.QD)("div",x,[Q.fieldId?((0,a.Wz)(),(0,a.Az)(E,{key:0,color:"positive",loading:Q.loading,icon:"fas fa-edit",label:e.$tr("isite.cms.label.update"),rounded:"",type:"submit"},null,8,["loading","label"])):((0,a.Wz)(),(0,a.Az)(E,{key:1,color:"positive",loading:Q.loading,icon:"fas fa-edit",label:e.$tr("isite.cms.label.create"),rounded:"",type:"submit"},null,8,["loading","label"]))])])),_:1},512)):(0,a.g1)("",!0)])):(0,a.g1)("",!0)])]),(0,a.K2)(U,{visible:Q.loading},null,8,["visible"])])}t(23816);function Q(e,l,t,s,o,i){const r=(0,a.E1)("q-btn"),d=(0,a.E1)("q-item-section"),m=(0,a.E1)("q-input"),c=(0,a.E1)("q-item"),n=(0,a.E1)("q-list");return(0,a.Wz)(),(0,a.Az)(n,{class:"q-mt-md"},{default:(0,a.Ql)((()=>[(0,a.K2)(d,null,{default:(0,a.Ql)((()=>[(0,a.mY)(" Options "),(0,a.K2)(r,{onClick:l[0]||(l[0]=e=>i.add()),icon:"fa-light fa-plus",dense:"",flat:"",color:"primary"})])),_:1}),((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(t.model.selectable,((e,l)=>((0,a.Wz)(),(0,a.Az)(c,{key:l,id:"optionSelect"+l},{default:(0,a.Ql)((()=>[(0,a.K2)(d,{main:""},{default:(0,a.Ql)((()=>[(0,a.K2)(m,{outlined:"",dense:"",modelValue:e.name,"onUpdate:modelValue":l=>e.name=l,placeholder:"Name Option"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,a.K2)(d,{right:""},{default:(0,a.Ql)((()=>[(0,a.K2)(r,{onClick:l=>i.remove(e),icon:"fa fa-close",dense:"",flat:"",color:"primary"},null,8,["onClick"])])),_:2},1024)])),_:2},1032,["id"])))),128))])),_:1})}const D={props:{model:{type:Object,default:()=>({selectable:[]})}},data(){return{}},methods:{add(){let e={name:""};this.model.selectable.push(e)},remove(e){let l=this.model.selectable.findIndex((l=>l===e));this.model.selectable.splice(l,1)}}};var R=t(68716),K=t(99588),k=t(11032),I=t(99140),w=t(84884),E=t(20540),F=t(95252),U=t.n(F);const z=(0,R.c)(D,[["render",Q]]),C=z;U()(D,"components",{QList:K.c,QItemSection:k.c,QBtn:I.c,QItem:w.c,QInput:E.c});var W=t(8880);const{getScrollTarget:A,setScrollPosition:S}=W["default"],O={components:{optionsForSelect:C},watch:{$route(e,l){this.initForm()}},mounted(){this.$nextTick((function(){this.initForm()}))},validations(){return this.getObjectValidation()},data(){return{locale:{},vTab:"data",loading:!1,loadingCategory:!1,success:!1,fieldId:!1,optionsTemplate:{categories:[],products:[],relatedProducts:[]},buttonActions:{label:"",value:1},modalShow:{category:!1},types:[],forms:[],fields:[],prefixTypes:[{value:"icon",label:this.$tr("isite.cms.form.icon")},{value:"text",label:this.$tr("isite.cms.label.text")}],columnWidths:[{value:12,label:this.$tr("iforms.cms.form.columns.full")},{value:9,label:this.$tr("iforms.cms.form.columns.nine")},{value:8,label:this.$tr("iforms.cms.form.columns.eight")},{value:6,label:this.$tr("iforms.cms.form.columns.six")},{value:4,label:this.$tr("iforms.cms.form.columns.four")},{value:3,label:this.$tr("iforms.cms.form.columns.three")}]}},computed:{dataLocale(){return{fields:{type:null,name:"",required:!1,formId:this.$route.params.formId,selectable:[],order:0,width:"12",prefix:{type:"icon",value:""},suffix:{type:"icon",value:""}},fieldsTranslatable:{label:"",placeholder:"",description:""}}},updateOptions(){this.$route.params.editOptions&&setTimeout((()=>{this.vTab="options";let e=A(this.$refs.productFormPage),l=this.$refs.productFormPage.scrollHeight;S(e,l,1e3)}),500)},options(){return{}},canManageRecordMaster(){return!0}},methods:{async initForm(){this.loading=!0,this.success=!1,this.vTab="data",this.locale=this.$clone(this.dataLocale),this.fieldId=this.$route.params.id,this.locale.success&&this.$refs.localeComponent.vReset(),await this.getData(),this.getTypes(),this.getForms(),this.getFields(),this.success=!0,this.updateOptions,this.loading=!1},getData(){return new Promise(((e,l)=>{const t=this.$clone(this.fieldId);if(t){let a="apiRoutes.qform.fields",s={refresh:!0,params:{filter:{allTranslations:!0}}};this.$crud.show(a,t,s).then((l=>{this.orderDataItemToLocale(l.data),e(!0)})).catch((e=>{this.$apiResponse.handleError(e,(()=>{console.error(e),this.$alert.error({message:this.$tr("isite.cms.message.errorRequest"),pos:"bottom"}),this.loading=!1,l(!1)}))}))}else e(!0)}))},orderDataItemToLocale(e){let l=this.$clone(e);l.selectable=JSON.parse(e.selectable),this.locale.form=this.$clone(l)},async create(){if(await this.$refs.localeComponent.validateForm()){this.loading=!0;let e="apiRoutes.qform.fields";this.$crud.create(e,this.getDataForm()).then((e=>{this.$alert.success({message:`${this.$tr("isite.cms.message.recordCreated")} ID: ${e.data.id}`}),this.$router.push({name:"qform.admin.fields.index",params:{id:this.$route.params.formId}})})).catch((e=>{this.loading=!1,this.$alert.error({message:this.$tr("isite.cms.message.recordNoCreated"),pos:"bottom"})}))}},async update(){if(await this.$refs.localeComponent.validateForm()){this.loading=!0;let e="apiRoutes.qform.fields";this.$crud.update(e,this.fieldId,this.getDataForm()).then((e=>{this.$alert.success({message:`${this.$tr("isite.cms.message.recordUpdated")}`}),this.initForm()})).catch((e=>{this.loading=!1,this.$alert.error({message:this.$tr("isite.cms.message.recordNoUpdated"),pos:"bottom"})}))}},getDataForm(){let e=this.locale.form;for(var l in e){let t=e[l];null!=t&&void 0!=t||delete e[l]}return e.selectable=JSON.stringify(e.selectable),e.prefix=e.prefix||{type:"",value:""},e.suffix=e.suffix||{type:"",value:""},e},getTypes(){this.loading=!0;let e={params:{}};this.$crud.index("apiRoutes.qform.types",e).then((e=>{this.types=e.data.map((e=>({value:e.id,label:e.name}))),this.loading=!1})).catch((e=>{this.$apiResponse.handleError(e,(()=>{this.$alert.error({message:this.$tr("isite.cms.message.errorRequest"),pos:"bottom"}),this.loading=!1}))}))},getForms(){this.loading=!0;let e={params:{}};this.$crud.index("apiRoutes.qform.forms",e).then((e=>{this.forms=e.data.map((e=>({value:e.id,label:e.title}))),this.loading=!1})).catch((e=>{this.$apiResponse.handleError(e,(()=>{console.error(e),this.$alert.error({message:this.$tr("isite.cms.message.errorRequest"),pos:"bottom"}),this.loading=!1}))}))},getFields(){this.loading=!0;let e={params:{}};this.$crud.index("apiRoutes.qform.fields",e).then((e=>{this.fields=e.data.map((e=>({value:e.id,label:e.label}))),this.loading=!1})).catch((e=>{this.$apiResponse.handleError(e,(()=>{this.$alert.error({message:this.$tr("isite.cms.message.errorRequest"),pos:"bottom"}),this.loading=!1}))}))}}};var _=t(41628),L=t(14288),N=t(36008),P=t(78488);const j=(0,R.c)(O,[["render",q]]),B=j;U()(O,"components",{QLayout:_.c,QForm:L.c,QInput:E.c,QSelect:N.c,QCheckbox:P.c,QBtn:I.c})}}]);