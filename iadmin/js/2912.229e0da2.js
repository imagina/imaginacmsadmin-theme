"use strict";(globalThis["webpackChunkimagina_cms"]=globalThis["webpackChunkimagina_cms"]||[]).push([[2912],{69364:(a,e,t)=>{t.r(e),t.d(e,{default:()=>c});var r=t(92444);function s(a,e,t,s,i,n){const o=(0,r.E1)("quick-card");return(0,r.Wz)(),(0,r.Az)(o,{params:n.quickCardParams},null,8,["params"])}var i=t(90940);const n={props:{},components:{quickCard:i.c},watch:{},mounted(){this.$nextTick((function(){}))},data(){return{loading:!1,posts:[]}},computed:{quickCardParams(){return{type:"list-v",title:this.$tr("iprofile.cms.quickCard.lastUsers"),icon:"fas fa-users",apiRoute:"apiRoutes.quser.users",requestParams:{include:"roles",filter:{order:{way:"desc"}}},information:{image:{field:"mediumImage"},text1:{field:"createdAt",format:a=>this.$trd(a,{type:"long"})},text2:{field:"fullName"},text3:{field:"roles",format:a=>a?a.map((a=>a.name)).join(", "):""}},actionTo:"quser.admin.users"}}},methods:{}};var o=t(68716);const u=(0,o.c)(n,[["render",s]]),c=u}}]);