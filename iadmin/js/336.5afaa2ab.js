"use strict";(globalThis["webpackChunkimagina_cms"]=globalThis["webpackChunkimagina_cms"]||[]).push([[336],{20336:(e,t,i)=>{function s(e,t,i,s,r,a){return null}i.r(t),i.d(t,{default:()=>m});const r={data(){return{crudId:this.$uid()}},computed:{crudData(){return{crudId:this.crudId,apiRoute:"apiRoutes.qtelemetry.sensors",create:{title:this.$tr("itelemetry.cms.newSensor")},read:{columns:[{name:"id",label:this.$tr("isite.cms.form.id"),field:"id",style:"width: 50px"},{name:"title",label:this.$tr("isite.cms.form.title"),field:"title",align:"rigth"},{name:"systemName",label:this.$tr("isite.cms.form.systemName"),field:"systemName",align:"rigth"},{name:"created_at",label:this.$tr("isite.cms.form.createdAt"),field:"createdAt",align:"left",format:e=>e?this.$trd(e):"-"},{name:"updated_at",label:this.$tr("isite.cms.form.updatedAt"),field:"updatedAt",align:"left",format:e=>e?this.$trd(e):"-"},{name:"actions",label:this.$tr("isite.cms.form.actions"),align:"left"}],filters:{}},update:{title:this.$tr("itelemetry.cms.updateSensor")},delete:!0,formLeft:{title:{value:"",type:"input",isTranslatable:!0,props:{label:`${this.$tr("isite.cms.form.title")}*`,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]}},systemName:{value:"",type:"input",props:{label:`${this.$tr("isite.cms.form.systemName")}*`,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]}},rules:{value:{},type:"json",props:{label:this.$tr("itelemetry.cms.form.rules")}}},formRight:{prefix:{value:"",type:"input",isFakeField:!0,props:{label:this.$tr("isite.cms.form.prefix")}},suffix:{value:"",type:"input",isFakeField:!0,props:{label:this.$tr("isite.cms.form.suffix")}}}}},crudInfo(){return this.$store.state.qcrudComponent.component[this.crudId]||{}}}};var a=i(68716);const l=(0,a.c)(r,[["render",s]]),m=l}}]);