"use strict";(globalThis["webpackChunkimagina_cms"]=globalThis["webpackChunkimagina_cms"]||[]).push([[604],{20604:(e,t,i)=>{function s(e,t,i,s,r,o){return null}i.r(t),i.d(t,{default:()=>m});var r=i(18528)["c"];const o={data(){return{crudId:this.$uid()}},computed:{crudData(){return{crudId:this.crudId,entityName:r("main.qcommerce.entityNames.productOptionValue"),apiRoute:"apiRoutes.qcommerce.optionValues",permission:"icommerce.optionvalues",extraFormFields:"Icommerce.crud-fields.productOptionsValues",create:{title:this.$tr("icommerce.cms.newOptionValue")},read:{columns:[{name:"id",label:this.$tr("isite.cms.form.id"),field:"id",style:"width: 50px"},{name:"description",label:this.$tr("isite.cms.form.description"),field:"description",align:"rigth"},{name:"option",label:this.$tr("isite.cms.form.option"),field:"option",format:e=>e&&e.description||"-",align:"left"},{name:"created_at",label:this.$tr("isite.cms.form.createdAt"),field:"createdAt",align:"left",format:e=>e?this.$trd(e):"-"},{name:"actions",label:this.$tr("isite.cms.form.actions"),align:"left"}],requestParams:{include:"option"},filters:{optionId:{value:"0",type:"select",props:{label:`${this.$tr("isite.cms.form.option")}:`,options:[{label:this.$tr("isite.cms.label.all"),value:"0"}]},loadOptions:{apiRoute:"apiRoutes.qcommerce.options",select:{label:"description",id:"id"}}}}},update:{title:this.$tr("icommerce.cms.updateOptionValue"),requestParams:{include:""}},delete:!0,formLeft:{id:{value:""},userId:{value:this.$store.state.quserAuth.userId},description:{value:"",type:"input",isTranslatable:!0,props:{label:`${this.$tr("isite.cms.form.description")}*`,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]}},sortOrder:{value:0,type:"input",isTranslatable:!1,props:{type:"number",label:this.$tr("isite.cms.form.sort")}},type:{value:1,type:"select",required:!0,fakeFieldName:"options",props:{label:this.$tr("isite.cms.form.type"),options:[{label:this.$tr("isite.cms.label.text"),value:1},{label:this.$tr("isite.cms.label.image"),value:2},{label:this.$tr("icommerce.cms.form.color"),value:3}]}},mediasSingle:{name:"mediasSingle",value:{},type:"media",fakeFieldName:"options",props:{label:this.$tr("isite.cms.form.firstImage"),zone:"mainimage",entity:"ModulesIcommerceEntitiesOptionValue",enitityId:null,vIf:2==this.crudInfo?.options?.type}},color:{type:"inputColor",fakeFieldName:"options",props:{label:this.$tr("icommerce.cms.form.color"),vIf:3==this.crudInfo?.options?.type}}}}},crudInfo(){return this.$store.state.qcrudComponent.component[this.crudId]||{}}}};var a=i(68716);const l=(0,a.c)(o,[["render",s]]),m=l}}]);