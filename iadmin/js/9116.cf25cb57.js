"use strict";(globalThis["webpackChunkimagina_cms"]=globalThis["webpackChunkimagina_cms"]||[]).push([[9116],{49116:(t,e,l)=>{function a(t,e,l,a,i,s){return null}l.r(e),l.d(e,{default:()=>r});const i={data(){return{crudId:this.$uid()}},computed:{crudData(){return{crudId:this.crudId,apiRoute:"apiRoutes.qwallet.transactions",permission:"iwallet.transactions",extraFormFields:"Iwallet.crud-fields.transactions",create:{title:this.$tr("iwallet.cms.newTransaction")},read:{title:this.$trp("iwallet.cms.transaction"),columns:[{name:"id",field:"id",label:"ID"},{name:"type",label:"(pt) Type",field:"type",align:"left",format:t=>`<i class="${t.icon}" style="color: ${t.color}" /> <span>${t.label}</span>`},{name:"amount",label:this.$tr("isite.cms.label.amount"),field:"amount",align:"left",format:t=>"$"+this.$trn(t)},{name:"origin",label:this.$tr("iwallet.cms.origin"),field:"fromPocket",align:"left",format:t=>t?.title??"-"},{name:"destination",label:this.$tr("iwallet.cms.destination"),field:"toPocket",align:"left",format:t=>t?.title??"-"},{name:"comment",label:this.$tr("isite.cms.label.comment"),field:"comment",align:"left",style:"max-width : 250px",format:t=>t??"..."},{name:"createdAt",label:this.$tr("isite.cms.form.createdAt"),field:"createdAt",align:"left",format:t=>this.$trd(t)}],search:!1,allowToggleView:!1,excludeActions:["sync","export","tour"],requestParams:{include:"fromPocket,toPocket"},filters:{date:{value:null,type:"dateRange",quickFilter:!0,props:{label:this.$tr("isite.cms.label.date"),clearable:!0}},fromPocketId:{value:null,type:"select",quickFilter:!0,props:{label:this.$tr("iwallet.cms.origin"),clearable:!0},loadOptions:{apiRoute:"apiRoutes.qwallet.pockets"}},toPocketId:{value:null,type:"select",quickFilter:!0,props:{label:this.$tr("iwallet.cms.destination"),clearable:!0},loadOptions:{apiRoute:"apiRoutes.qwallet.pockets"}}}},update:{title:this.$tr("iwallet.cms.updateTransaction"),requestParams:{include:"fromPocket,toPocket"}},delete:!1,formLeft:{id:{value:""},userId:{value:this.$store.state.quserAuth.userId},fromPocketId:{value:null,type:"select",props:{label:this.$tr("iwallet.cms.origin"),clearable:!0},loadOptions:{apiRoute:"apiRoutes.qwallet.pockets",select:{id:"id",label:t=>`${t.title} ($${this.$trn(t.total)})`}}},toPocketId:{value:null,type:"select",props:{label:this.$tr("iwallet.cms.destination"),clearable:!0},loadOptions:{apiRoute:"apiRoutes.qwallet.pockets",select:{id:"id",label:t=>`${t.title} ($${this.$trn(t.total)})`}}},amount:{value:null,type:"input",required:!0,props:{label:this.$tr("isite.cms.label.amount")+"*",type:"number"}},comment:{value:null,type:"input",props:{label:this.$tr("isite.cms.label.comment"),type:"textarea",rows:"3"}}}}},crudInfo(){return this.$store.state.qcrudComponent.component[this.crudId]||{}}}};var s=l(68716);const o=(0,s.c)(i,[["render",a]]),r=o}}]);