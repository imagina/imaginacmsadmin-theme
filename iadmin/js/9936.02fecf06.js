"use strict";(globalThis["webpackChunkimagina_cms"]=globalThis["webpackChunkimagina_cms"]||[]).push([[9936],{29936:(t,e,a)=>{function i(t,e,a,i,l,s){return null}a.r(e),a.d(e,{default:()=>m});var l=a(18528)["c"];const s={data(){return{crudId:this.$uid()}},computed:{crudData(){return{crudId:this.crudId,entityName:l("main.qad.entityNames.ad"),apiRoute:"apiRoutes.qad.adUps",permission:"iad.ups",extraFormFields:"iad.crud-fields.ad",create:!1,read:{columns:[{name:"id",label:"id",field:"id",align:"left"},{name:"ad",label:this.$tr("iad.cms.form.ad"),field:"ad",align:"left",classes:"ellipsis",style:"max-width : 250px",format:t=>t?`(${t.id}) ${t.title}`:"-"},{name:"daysLimit",label:this.$tr("iad.cms.form.daysLimit"),field:"daysLimit",align:"left"},{name:"daysCounter",label:this.$tr("iad.cms.form.daysCounter"),field:"daysCounter",align:"left"},{name:"upsDaily",label:this.$tr("iad.cms.form.upsDaily"),field:"upsDaily",align:"left"},{name:"upsCounter",label:this.$tr("iad.cms.form.upsCounter"),field:"upsCounter",align:"left"},{name:"statusField",label:this.$tr("isite.cms.form.status"),field:"status",align:"left",format:t=>t?this.$tr("isite.cms.label.enabled"):this.$tr("isite.cms.label.disabled")},{name:"rangeMinutes",label:this.$tr("iad.cms.form.rangeMinutes"),field:"rangeMinutes",align:"left"},{name:"nextUpload",label:this.$tr("iad.cms.form.nextUpAt"),field:"nextUpload",align:"left",format:t=>t?this.$trd(t,{type:"long"}):"-"},{name:"fromDate",label:this.$tr("iad.cms.form.fromDate"),field:"fromDate",align:"left",format:t=>t?this.$trd(t):"-"},{name:"toDate",label:this.$tr("iad.cms.form.toDate"),field:"toDate",align:"left",format:t=>t?this.$trd(t):"-"},{name:"fromHour",label:this.$tr("iad.cms.form.fromHour"),field:"fromHour",align:"left",format:t=>t?this.$trd(`2021-01-01 ${t}`,{type:"time"}):"-"},{name:"toHour",label:this.$tr("iad.cms.form.toHour"),field:"toHour",align:"left",format:t=>t?this.$trd(`2021-01-01 ${t}`,{type:"time"}):"-"},{name:"created_at",label:this.$tr("isite.cms.form.createdAt"),field:"createdAt",align:"right",format:t=>t?this.$trd(t):"-"},{name:"updated_at",label:this.$tr("isite.cms.form.updatedAt"),field:"updatedAt",align:"right",format:t=>t?this.$trd(t):"-"},{name:"actions",label:this.$tr("isite.cms.form.actions"),align:"left"}],requestParams:{include:"ad",filter:{allTranslations:!0}},filters:{status:{value:null,type:"select",props:{label:`${this.$tr("isite.cms.form.status")}:`,options:[{label:this.$tr("isite.cms.label.enabled"),value:"1"},{label:this.$tr("isite.cms.label.disabled"),value:"0"}],clearable:!0}}},actions:[]},update:!1,delete:!0,formLeft:{}}},crudInfo(){return this.$store.state.qcrudComponent.component[this.crudId]||{}}}};var r=a(68716);const d=(0,r.c)(s,[["render",i]]),m=d}}]);