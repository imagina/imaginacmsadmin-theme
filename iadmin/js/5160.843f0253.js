"use strict";(globalThis["webpackChunkimagina_cms"]=globalThis["webpackChunkimagina_cms"]||[]).push([[5160],{25160:(t,e,i)=>{function a(t,e,i,a,n,o){return null}i.r(e),i.d(e,{default:()=>c});var n=i(18528)["c"];const o={data(){return{crudId:this.$uid()}},computed:{crudData(){return{crudId:this.crudId,entityName:n("main.qlocations.entityNames.geozone"),apiRoute:"apiRoutes.qlocations.geozones",create:{title:this.$tr("ilocations.cms.newGeozone"),to:{name:"qlocations.admin.geozones.create"}},read:{columns:[{name:"id",label:this.$tr("isite.cms.form.id"),field:"id",style:"width: 50px"},{name:"name",label:this.$tr("isite.cms.form.name"),field:"name",align:"left"},{name:"created_at",label:this.$tr("isite.cms.form.createdAt"),field:"createdAt",align:"left",format:t=>t?this.$trd(t):"-"},{name:"actions",label:this.$tr("isite.cms.form.actions"),align:"left"}],filters:{}},update:{title:this.$tr("ilocations.cms.updateGeozone"),to:"qlocations.admin.geozones.edit"},delete:!0}},crudInfo(){return this.$store.state.qcrudComponent.component[this.crudId]||{}}}};var s=i(68716);const r=(0,s.c)(o,[["render",a]]),c=r}}]);