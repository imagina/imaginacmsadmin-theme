"use strict";(globalThis["webpackChunkimagina_cms"]=globalThis["webpackChunkimagina_cms"]||[]).push([[4051],{83440:(e,a,t)=>{t.r(a),t.d(a,{default:()=>v});t(23816);var i=t(92444);const s={id:"reservationsPage"},r={key:0,class:"relative-position"},n={key:1,class:"box row items-center justify-center"};function l(e,a,l,o,c,d){const u=(0,i.E1)("page-actions"),m=(0,i.E1)("calendar"),v=(0,i.E1)("not-result"),h=(0,i.E1)("inner-loading"),p=(0,i.E1)("crud");return(0,i.Wz)(),(0,i.An)("div",s,["calendar"==c.view?((0,i.Wz)(),(0,i.An)("div",r,[(0,i.K2)(u,{title:e.$tr(e.$route.meta.title),"extra-actions":d.extraPageActions,onRefresh:a[0]||(a[0]=e=>d.getData(!0)),onNew:a[1]||(a[1]=a=>e.$router.push({name:"qbooking.panel.reservations.create"})),class:"q-mb-md"},null,8,["title","extra-actions"]),c.reservationsCalendar.length?((0,i.Wz)(),(0,i.Az)(m,{key:0,"events-data":c.reservationsCalendar},null,8,["events-data"])):((0,i.Wz)(),(0,i.An)("div",n,[(0,i.K2)(v)])),(0,i.K2)(h,{visible:c.loading},null,8,["visible"])])):((0,i.Wz)(),(0,i.Az)(p,{key:1,"crud-data":t.e(956).then(t.bind(t,48576)),title:e.$tr(e.$route.meta.title)},null,8,["crud-data","title"]))])}var o=t(83996),c=t(18528)["c"];const d={props:{},components:{calendar:o.c},watch:{},mounted(){this.$nextTick((function(){this.init()}))},data(){return{loading:!1,view:"ipanel"==c("app.mode")?"calendar":"crud",reservationsCalendar:[]}},computed:{extraPageActions(){return["search","new",{label:this.$tr("isite.cms.label.view"),vIf:!1,props:{icon:"calendar"==this.view?"fas fa-list-ul":"fas fa-calendar-alt"},action:()=>{this.view="calendar"==this.view?"crud":"calendar"}}]}},methods:{init(){this.getData()},getData(e=!1){return new Promise(((a,t)=>{this.loading=!0;let i={refresh:e,params:{include:"reservation.customer,meetings",filter:"iadmin"==c("app.mode")?{}:{userId:this.$store.state.quserAuth.userId}}};this.$crud.index("apiRoutes.qbooking.reservationItems",i).then((e=>{this.mapReservations(e.data),this.loading=!1})).catch((e=>{this.$apiResponse.handleError(e,(()=>{this.loading=!1}))}))}))},mapReservations(e){this.reservationsCalendar=e.reverse().map((e=>({icon:"fas fa-calendar",color:"primary",date:e.startDate,title:e.serviceTitle,mainDetails:[{value:`${this.$tr("isite.cms.form.status")}: ${e.statusName}`},{icon:"fas fa-play-circle",value:`${e.reservation.customer?.firstName||""} ${e.reservation.customer?.lastName||""}`},{icon:"fas fa-play-circle",value:e.categoryTitle},{icon:"fas fa-play-circle",value:e.resourceTitle}],card:{title:this.$tr("isite.cms.label.meet"),component:t.e(6116).then(t.bind(t,26116)),row:e}})))}}};var u=t(68716);const m=(0,u.c)(d,[["render",l]]),v=m}}]);