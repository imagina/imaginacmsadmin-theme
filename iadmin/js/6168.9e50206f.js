"use strict";(globalThis["webpackChunkimagina_cms"]=globalThis["webpackChunkimagina_cms"]||[]).push([[6168],{6168:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var a=s(92444),o=s(74044);const r={id:"componentCrudIndex"},l={class:"backend-page"},i={class:"relative-position col-12"},n={slot:"top"},d={class:"table-top-left col-12 col-md-4 col-xl-3"},m={class:"q-title text-primary ellipsis"},c={class:"table-top-right col-12 col-md-8 col-xl-9 text-right"};function h(e,t,s,h,p,u){const g=(0,a.E1)("q-btn"),f=(0,a.E1)("q-table"),b=(0,a.E1)("inner-loading");return(0,a.Wz)(),(0,a.An)("div",r,[(0,a.QD)("div",l,[(0,a.QD)("div",i,[(0,a.K2)(f,{class:"box-table",title:p.form.title,rows:p.table.data,columns:p.table.columns,"row-key":"name"},{default:(0,a.Ql)((()=>[(0,a.QD)("template",n,[(0,a.QD)("div",d,[(0,a.QD)("div",m,[(0,a.QD)("span",null,(0,o.WA)(p.form.title),1)])]),(0,a.QD)("div",c,[(0,a.g1)("",!0),(0,a.K2)(g,{onClick:t[1]||(t[1]=e=>u.getLeads(!0)),icon:"fas fa-sync-alt",color:"info",class:"q-ml-xs"})])])])),_:1},8,["title","rows","columns"]),(0,a.K2)(b,{visible:p.loading},null,8,["visible"])])])])}var p=s(18528)["c"];const u={data(){return{loading:!1,form:{title:""},leads:[],table:{columns:[],data:[]}}},created(){this.getLeads(),this.getFields(),this.getForm()},methods:{getForm(){this.loading=!0;let e={refresh:!0,params:{}};this.$crud.show("apiRoutes.qform.forms",this.$route.params.id,e).then((e=>{this.form=e.data,this.loading=!1})).catch((e=>{this.$apiResponse.handleError(e,(()=>{this.loading=!1,this.$alert.error({message:this.$tr("isite.cms.message.errorRequest"),pos:"bottom"})}))}))},getFields(){this.loading=!0;let e={refresh:!0,params:{filter:{formId:this.$route.params.id}}};this.$crud.index("apiRoutes.qform.fields",e).then((e=>{this.loading=!1,this.table.columns=this.orderColumnsForTable(e.data)})).catch((e=>{this.$apiResponse.handleError(e,(()=>{this.loading=!1,this.$alert.error({message:this.$tr("isite.cms.message.errorRequest"),pos:"bottom"})}))}))},orderColumnsForTable(e){return e.map((e=>({name:e.name,field:e.name,label:e.label,align:"center"})))},getLeads(e=!1){let t={refresh:!0,params:{filter:{formId:this.$route.params.id}}};this.loading=!0,this.$crud.index("apiRoutes.qform.leads",t).then((e=>{this.leads=e.data,this.table.data=this.orderDataForTable(e.data),this.loading=!1})).catch((e=>{this.$apiResponse.handleError(e,(()=>{this.loading=!1,console.error(e),this.$alert.error({message:this.$tr("isite.cms.message.errorRequest"),pos:"bottom"})}))}))},orderDataForTable(e){let t=e.map((e=>"object"==typeof e.values?e.values:JSON.parse(e.values))),s=[...t];for(let a in t)for(let e in t[a])s[a][t[a][e].name]=t[a][e].model;return s},forceDownload(){let e=`${p("apiRoutes.qform.leads")}?filter={"formId":${this.$route.params.id},"export":"true"}`;window.open(e,"_blank")}}};var g=s(68716),f=s(40792),b=s(99140),$=s(95252),v=s.n($);const q=(0,g.c)(u,[["render",h]]),x=q;v()(u,"components",{QTable:f.c,QBtn:b.c})}}]);