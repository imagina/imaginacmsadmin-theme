"use strict";(globalThis["webpackChunkimagina_cms"]=globalThis["webpackChunkimagina_cms"]||[]).push([[2684],{72684:(e,t,r)=>{function s(e,t,r,s,i,a){return null}r.r(t),r.d(t,{default:()=>d});const i={data(){return{crudId:this.$uid()}},computed:{crudData(){return{crudId:this.crudId,apiRoute:"apiRoutes.qmedia.folders",permission:"media.folders",create:{title:this.$tr("media.cms.newFolder")},read:{},update:{title:this.$tr("media.cms.updateFolder")},delete:!0,formLeft:{id:{value:""},userId:{value:this.$store.state.quserAuth.userId},isFolder:{value:1},filename:{value:null,type:"input",props:{label:this.$tr("isite.cms.form.name")+"*",rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]}},parentId:{value:"0",type:"treeSelect",props:{label:this.$tr("isite.cms.form.parent"),clearable:!1,options:[{label:this.$tr("isite.cms.message.noValue"),value:"0",id:"0"}]},loadOptions:{apiRoute:"apiRoutes.qmedia.files",requestParams:{filter:{isFolder:!0}},select:{label:"filename",id:"id",parentId:"folderId"}}}},getDataForm(e,t){return new Promise((t=>{e.name=e.filename,t(e)}))}}},crudInfo(){return this.$store.state.qcrudComponent.component[this.crudId]||{}}}};var a=r(68716);const l=(0,a.c)(i,[["render",s]]),d=l}}]);