"use strict";(globalThis["webpackChunkimagina_cms"]=globalThis["webpackChunkimagina_cms"]||[]).push([[628],{92824:(t,e,i)=>{i.r(e),i.d(e,{default:()=>pt});var s=i(92444),a=i(74044);const o={id:"showOrderPage"},l={class:"box box-auto-height q-mb-md"},r={key:0,id:"dynamicBlocksContent",class:"row q-col-gutter-md"},n={class:"box-title"},c={id:"orderItemsContent",class:"box box-auto-height q-mb-md"},m={style:{"max-width":"250px","white-space":"normal"}},d={class:"box box-auto-height q-mb-md"},u={class:"text-blue-grey q-mr-sm"},p={class:"row q-col-gutter-md q-mb-md"},h={class:"col-12 col-md-6"},g={id:"trackingOrderStatusContent",class:"box box-auto-height"},f={class:"box-title"},b={key:0,class:"box q-mt-md"},$={class:"box-title"},y={key:0,class:"col-12 col-md-6"},v={class:"box"},q={class:"box-title"};function Q(t,e,i,Q,R,w){const A=(0,s.E1)("page-actions"),k=(0,s.E1)("q-icon"),x=(0,s.E1)("q-separator"),E=(0,s.E1)("q-item-label"),I=(0,s.E1)("q-item-section"),D=(0,s.E1)("q-item"),W=(0,s.E1)("q-list"),z=(0,s.E1)("q-td"),K=(0,s.E1)("btn-menu"),C=(0,s.E1)("q-table"),S=(0,s.E1)("dynamic-form"),P=(0,s.E1)("master-modal"),T=(0,s.E1)("q-timeline-entry"),_=(0,s.E1)("q-timeline"),O=(0,s.E1)("advance-chat"),V=(0,s.E1)("inner-loading");return(0,s.Wz)(),(0,s.An)("div",o,[(0,s.QD)("div",l,[(0,s.K2)(A,{onRefresh:w.init,"exclude-actions":["export"],"extra-actions":w.extraPageActions,title:`${t.$tr(t.$route.meta.title)} #${w.orderId.toString().padStart(5,"0")}`},null,8,["onRefresh","extra-actions","title"])]),R.order.id?((0,s.Wz)(),(0,s.An)("div",r,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(w.informationBlocks,((t,e)=>((0,s.Wz)(),(0,s.An)("div",{key:e,class:"col-12 col-md-6"},[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(t,((t,e)=>((0,s.Wz)(),(0,s.An)("div",{key:e,class:"box box-auto-height q-mb-md"},[(0,s.QD)("div",n,[t.icon?((0,s.Wz)(),(0,s.Az)(k,{key:0,name:t.icon},null,8,["name"])):(0,s.g1)("",!0),(0,s.mY)(" "+(0,a.WA)(t.title),1)]),(0,s.K2)(x,{class:"q-my-sm"}),(0,s.K2)(W,null,{default:(0,s.Ql)((()=>[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(t.values,((t,e)=>((0,s.Wz)(),(0,s.Az)(D,{key:e,class:"q-px-none"},{default:(0,s.Ql)((()=>[(0,s.K2)(I,null,{default:(0,s.Ql)((()=>[(0,s.K2)(E,null,{default:(0,s.Ql)((()=>[(0,s.mY)((0,a.WA)(t.label),1)])),_:2},1024),(0,s.K2)(E,{caption:"",innerHTML:t.value},null,8,["innerHTML"])])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])))),128))])))),128))])):(0,s.g1)("",!0),(0,s.QD)("div",c,[(0,s.K2)(C,(0,a.Gk)((0,s.o9)(w.tableConfig.props)),{"body-cell-productOptionsLabel":(0,s.Ql)((t=>[(0,s.K2)(z,{props:t},{default:(0,s.Ql)((()=>[(0,s.QD)("div",m,(0,a.WA)(t.value),1)])),_:2},1032,["props"])])),"body-cell":(0,s.Ql)((t=>["actions"==t.col.name?((0,s.Wz)(),(0,s.Az)(z,{key:0,props:t},{default:(0,s.Ql)((()=>[(0,s.K2)(K,{actions:w.tableConfig.actions,"action-data":t.row},null,8,["actions","action-data"])])),_:2},1032,["props"])):((0,s.Wz)(),(0,s.Az)(z,{key:1,props:t,title:t.value},{default:(0,s.Ql)((()=>[(0,s.mY)((0,a.WA)(t.value),1)])),_:2},1032,["props","title"]))])),_:1},16),(0,s.K2)(P,{modelValue:R.modalRating.show,"onUpdate:modelValue":e[1]||(e[1]=t=>R.modalRating.show=t),title:t.$tr("isite.cms.label.rating"),loading:R.modalRating.loading},{default:(0,s.Ql)((()=>[(0,s.QD)("div",d,[(0,s.QD)("b",u,(0,a.WA)(t.$tr("isite.cms.label.product"))+":",1),(0,s.mY)(" "+(0,a.WA)(R.modalRating.item.title),1)]),R.modalRating.loading?(0,s.g1)("",!0):((0,s.Wz)(),(0,s.Az)(S,(0,s.Gu)({key:0},w.form.rating,{onSent:e[0]||(e[0]=t=>{R.modalRating.show=!1,w.init()})}),null,16))])),_:1},8,["modelValue","title","loading"])]),(0,s.QD)("div",p,[(0,s.QD)("div",h,[(0,s.QD)("div",g,[(0,s.QD)("div",f,(0,a.WA)(t.$tr("icommerce.cms.orderHistory")),1),(0,s.K2)(x,{class:"q-mt-sm q-mb-md"}),(0,s.K2)(_,{color:"info",class:"q-mb-none"},{default:(0,s.Ql)((()=>[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(w.timeLine,((t,e)=>((0,s.Wz)(),(0,s.Az)(T,{key:e,title:t.title,subtitle:t.subtitle,body:t.body},null,8,["title","subtitle","body"])))),128))])),_:1})]),w.canEditOrder?((0,s.Wz)(),(0,s.An)("div",b,[(0,s.QD)("div",$,(0,a.WA)(t.$tr("icommerce.cms.newStatus")),1),(0,s.K2)(x,{class:"q-mt-sm q-mb-md"}),((0,s.Wz)(),(0,s.Az)(S,(0,s.Gu)(w.form.status,{onSent:e[2]||(e[2]=t=>w.init()),key:R.statusFormKey}),null,16))])):(0,s.g1)("",!0)]),R.conversation?((0,s.Wz)(),(0,s.An)("div",y,[(0,s.QD)("div",v,[(0,s.QD)("div",q,(0,a.WA)(t.$trp("isite.cms.label.message")),1),(0,s.K2)(x,{class:"q-mt-sm q-mb-md"}),(0,s.K2)(O,{"room-id":R.conversation.id},null,8,["room-id"])])])):(0,s.g1)("",!0)]),(0,s.K2)(V,{visible:R.loading},null,8,["visible"])])}i(23816);const R={id:"orderStatusHistoryComponent"};function w(t,e,i,a,o,l){const r=(0,s.E1)("q-table");return(0,s.Wz)(),(0,s.An)("div",R,[(0,s.K2)(r,{rows:i.items,columns:o.columns,pagination:{rowsPerPage:0},"hide-bottom":"",class:"no-shadow"},null,8,["rows","columns"])])}const A={props:{items:{default:()=>[]}},components:{},watch:{},mounted(){this.$nextTick((function(){}))},data(){return{columns:[{name:"title",label:this.$tr("isite.cms.form.status"),field:t=>t.status.title,align:"left"},{name:"comment",label:this.$tr("isite.cms.form.comment"),field:t=>t.comment||"-",align:"left"},{name:"created_at",label:this.$trp("isite.cms.form.createdAt"),field:"created_at",format:t=>t?this.$d(this.$moment(t,"YYYY-MM-DD HH:mm").toDate(),"long"):"-",align:"left"}]}},methods:{}};var k=i(68716),x=i(40792),E=i(95252),I=i.n(E);const D=(0,k.c)(A,[["render",w]]),W=D;I()(A,"components",{QTable:x.c});const z={id:"orderItemsComponent"},K={key:0},C={class:"option-title"},S={class:"value-title"};function P(t,e,i,o,l,r){const n=(0,s.E1)("q-icon"),c=(0,s.E1)("q-td"),m=(0,s.E1)("q-table");return(0,s.Wz)(),(0,s.An)("div",z,[(0,s.K2)(m,{rows:i.items,columns:l.columns,pagination:{rowsPerPage:0},"hide-bottom":"",class:"no-shadow secondary-font"},{default:(0,s.Ql)((()=>[(0,s.K2)(c,{slot:"body-cell-description","slot-scope":"props",props:t.props},{default:(0,s.Ql)((()=>[(0,s.QD)("div",null,[(0,s.QD)("div",null,(0,a.WA)(t.props.row.title),1),t.props.row.options&&t.props.row.options.length?((0,s.Wz)(),(0,s.An)("div",K,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(t.props.row.options,((t,e)=>((0,s.Wz)(),(0,s.An)("div",{class:"inline-block option-content text-left",key:e},[(0,s.QD)("div",C,(0,a.WA)(t.optionDescription),1),(0,s.QD)("div",S,[(0,s.K2)(n,{name:"fas fa-caret-right"}),(0,s.mY)(" "+(0,a.WA)(t.optionValueDescription),1)])])))),128))])):(0,s.g1)("",!0)])])),_:1},8,["props"])])),_:1},8,["rows","columns"])])}const T={props:{items:{default:[]}},components:{},watch:{},mounted(){this.$nextTick((function(){}))},data(){return{columns:[{name:"cantidad",label:"Cantidad",field:"quantity",align:"left"},{name:"productId",label:"ID",field:"productId",align:"left"},{name:"sku",label:"SKU",field:"reference",align:"left"},{name:"description",label:"Description",align:"left"},{name:"valor",label:"Valor",field:"total",format:t=>t?"$ "+this.$n(t):"0",align:"center"}]}},methods:{}};var _=i(50213),O=i(58120);const V=(0,k.c)(T,[["render",P]]),H=V;I()(T,"components",{QTable:x.c,QTd:_.c,QIcon:O.c});const B={class:"q-mt-lg"},F={class:"q-py-xs"},L={class:"q-py-xs"},M={class:"q-py-xs"},U=(0,s.QD)("span",null,"Notificar al Cliente",-1),Y={class:"q-mt-md"};function N(t,e,i,o,l,r){const n=(0,s.E1)("tree-select"),c=(0,s.E1)("q-input"),m=(0,s.E1)("q-toggle"),d=(0,s.E1)("q-btn");return(0,s.Wz)(),(0,s.An)("div",B,[(0,s.QD)("p",null,[(0,s.QD)("b",null,(0,a.WA)(t.$tr("icommerce.cms.newStatus")),1)]),(0,s.QD)("div",F,[(0,s.K2)(n,{modelValue:l.form.status,"onUpdate:modelValue":e[0]||(e[0]=t=>l.form.status=t),options:l.statuses,placeholder:t.$tr("isite.cms.form.status")},null,8,["modelValue","options","placeholder"])]),(0,s.QD)("div",L,[(0,s.K2)(c,{label:t.$tr("isite.cms.form.comment"),outlined:"","error-message":"We need a comment",rows:"3",type:"textarea",modelValue:l.form.comment,"onUpdate:modelValue":e[1]||(e[1]=t=>l.form.comment=t)},null,8,["label","modelValue"])]),(0,s.QD)("div",M,[U,(0,s.K2)(m,{modelValue:l.form.notify,"onUpdate:modelValue":e[2]||(e[2]=t=>l.form.notify=t),"checked-icon":"check",color:"green","false-value":!1,"true-value":!0,"unchecked-icon":"clear"},null,8,["modelValue"])]),(0,s.QD)("div",Y,[(0,s.K2)(d,{unelevated:"",rounded:"",label:"save",color:"primary",icon:"fa-light fa-save",onClick:e[3]||(e[3]=t=>r.saveOrderHistoryStatus())})])])}const G={emits:["orderHistoryCreated"],data(){return{loading:!1,statuses:[],form:{orderId:this.$route.params.id,status:null,notify:!1,comment:""}}},created(){this.getStatus()},methods:{getStatus(){let t={params:{refresh:!0}};this.$crud.index("apiRoutes.qcommerce.orderStatus",t).then((t=>{this.statuses=t.data.map((t=>({id:t.id,label:t.title})))})).catch((t=>{this.$apiResponse.handleError(t,(()=>{}))}))},saveOrderHistoryStatus(){if(this.$v.form.$touch(),this.loading=!0,this.$v.form.$error)return this.$alert.error({message:this.$tr("isite.cms.message.formInvalid")}),void(this.loading=!1);this.$crud.create("apiRoutes.qcommerce.orderStatusHistory",this.form).then((t=>{this.$emit("orderHistoryCreated"),this.$alert.success({message:this.$tr("isite.cms.message.recordUpdated")}),this.clearForm(),this.loading=!1})).catch((t=>{this.$alert.error({message:this.$tr("isite.cms.message.recordNoUpdated")}),this.loading=!1}))},clearForm(){this.form.comment="",this.form.status=null}}};var j=i(20540),J=i(64640),X=i(99140);const Z=(0,k.c)(G,[["render",N]]),tt=Z;I()(G,"components",{QInput:j.c,QToggle:J.c,QBtn:X.c});var et=i(19058),it=i(18528)["c"];const st={components:{orderItems:H,orderStatusHistory:W,addStatusOrder:tt,advanceChat:et.c},mounted(){this.init()},data(){return{loading:!1,order:{customer:{fullName:""},items:[]},modalRating:{loading:!1,show:!1,item:!1,itemRating:!1},conversation:!1,statusFormKey:this.$uid()}},computed:{extraPageActions(){return[{label:this.$tr("isite.cms.label.print"),props:{icon:"fa-light fa-print"},action:this.printScreen}]},settings(){return{showReviewsProduct:"iadmin"!=it("app.mode")&&parseInt(this.$getSetting("icommerce::showReviewsProduct")||0),chatByOrderEnable:parseInt(this.$getSetting("icommerce::chatByOrderEnable")||0)}},orderId(){return this.$clone(this.$route.params.id)},informationBlocks(){let t=2,e=Array(t).fill(0).map(((t,e)=>[])),i=[...this.$clone(this.order.informationBlocks||[]),{title:"Total",values:[{label:this.$tr("icommerce.cms.subtotal"),value:`$${this.$n(this.order.total-this.order.shippingAmount)}`},{label:this.$tr("icommerce.cms.shipping"),value:`$${this.$n(parseFloat(this.order.shippingAmount))}`},{label:this.$tr("icommerce.cms.form.total"),value:`$${this.$n(this.order.total)}`}]}],s=0;return i.forEach((i=>{e[s].push(i),s=s>=t-1?0:s+1})),e},tableConfig(){let t={props:{rows:this.order.items,pagination:{rowsPerPage:0},class:"no-shadow",hideBottom:!0,columns:[{name:"id",label:"ID",field:"productId",align:"left"},{name:"title",label:this.$tr("isite.cms.form.product"),field:"title",align:"left"},{name:"productOptionsLabel",label:this.$trp("isite.cms.label.option"),field:"productOptionsLabel",align:"left"},{name:"sku",label:"SKU",field:"reference",align:"left"},{name:"quantity",label:this.$tr("isite.cms.label.quantity"),field:"quantity",align:"left"},{name:"price",label:this.$tr("isite.cms.label.price"),field:"price",align:"center",format:t=>`$${this.$n(t||0)}`},{name:"total",label:"Total",field:"total",align:"center",format:t=>`$${this.$n(t||0)}`}]},actions:[]};return this.settings.showReviewsProduct&&t.actions.push({label:this.$tr("isite.cms.label.rate"),icon:"fas fa-check",action:t=>{this.getProductRating(t)}}),t.actions.length&&t.props.columns.push({name:"actions",label:this.$tr("isite.cms.form.actions"),align:"right"}),t},canEditOrder(){return!("iadmin"!=it("app.mode")||!this.$hasAccess("icommerce.orders.edit"))},form(){let t=this.modalRating.itemRating?.comments||[];return{status:{formType:"grid",sendTo:{apiRoute:"apiRoutes.qcommerce.orderStatusHistory",extraData:{orderId:this.orderId}},blocks:[{fields:{status:{value:null,type:"select",required:!0,props:{label:`${this.$tr("isite.cms.form.status")}*`},loadOptions:{apiRoute:"apiRoutes.qcommerce.orderStatus"}},notify:{value:"0",type:"select",required:!0,props:{label:"Notificar al Cliente*",options:[{label:this.$tr("isite.cms.label.yes"),value:1},{label:this.$tr("isite.cms.label.no"),value:0}]}},comment:{value:null,type:"input",colClass:"col-12",props:{label:this.$tr("isite.cms.form.comment"),type:"textarea",rows:"3"}}}}]},rating:{formType:"grid",noActions:!!this.modalRating.itemRating,sendTo:{apiRoute:"apiRoutes.qcommerce.ratings",extraData:{userId:this.$store.state.quserAuth.userId,rateableId:this.modalRating.item?.productId||null,rateableType:"Modules\\Icommerce\\Entities\\Product"}},blocks:[{fields:{rating:{value:this.modalRating.itemRating?.rating||3,type:"rating",required:!0,colClass:"col-12",props:{label:`${this.$tr("isite.cms.label.rating")}*`,readonly:!!this.modalRating.itemRating},loadOptions:{apiRoute:"apiRoutes.qcommerce.orderStatus"}},comment:{value:t[0]?.comment||null,type:"input",colClass:"col-12",fakeFieldName:"comment",props:{label:this.$tr("isite.cms.form.comment"),type:"textarea",rows:"3",readonly:!!this.modalRating.itemRating}},mediasMulti:{value:{},type:"media",colClass:"col-12",fakeFieldName:"comment",fieldItemId:t[0]?.id||null,props:{label:this.$trp("isite.cms.form.image"),zone:"gallery",entity:"Modules\\Icomments\\Entities\\Comment",entityId:t[0]?.id||null,accept:"images",directUpload:!0,maxFiles:6,readonly:!!this.modalRating.itemRating,disk:"rateable"}}}}]}}},timeLine(){return this.order.histories?this.order.histories.reverse().map((t=>({title:t.status.title,subtitle:this.$trd(t.created_at||t.createdAt,{type:"long"}),body:t.comment||null}))):[]}},methods:{init(){this.getData(!0),this.statusFormKey=this.$uid()},getData(t){return new Promise((async(e,i)=>{this.loading=!0,await Promise.all([this.getOrder(t),this.getChatConversation(t)]),this.loading=!1}))},getOrder(t){return new Promise(((e,i)=>{let s={refresh:t,params:{include:"shippingDepartment,shippingCountry,customer.addresses,customer.fields"}};this.$crud.show("apiRoutes.qcommerce.orders",this.orderId,s).then((t=>{this.order=t.data,e(t.data)})).catch((t=>{this.$apiResponse.handleError(t,(()=>{e(t)}))}))}))},getChatConversation(t){return new Promise(((e,i)=>{if(!this.settings.chatByOrderEnable)return e(!0);let s={refresh:t,params:{filter:{field:"entity_id",entity_type:"Modules\\Icommerce\\Entities\\Order"}}};this.$crud.show("apiRoutes.qchat.conversations",this.orderId,s).then((t=>{this.conversation=this.$clone(t.data),e(t.data)})).catch((t=>{this.$apiResponse.handleError(t,(()=>{e(t)}))}))}))},getProductRating(t){return new Promise(((e,i)=>{this.modalRating.loading=!0,this.modalRating.item=t,this.modalRating.show=!0;let s={refresh:!0,params:{include:"comments",filter:{field:"rateable_id",userId:this.$store.state.quserAuth.userId,rateableType:"Modules\\Icommerce\\Entities\\Product"}}};this.$crud.show("apiRoutes.qcommerce.ratings",t.productId,s).then((t=>{this.modalRating.itemRating=this.$clone(t.data),this.modalRating.loading=!1})).catch((t=>{this.$apiResponse.handleError(t,(()=>{this.modalRating.loading=!1}))}))}))},printScreen(){print()}}};var at=i(70880),ot=i(99588),lt=i(84884),rt=i(11032),nt=i(2992),ct=i(84492),mt=i(97112),dt=i(93440);const ut=(0,k.c)(st,[["render",Q]]),pt=ut;I()(st,"components",{QIcon:O.c,QSeparator:at.c,QList:ot.c,QItem:lt.c,QItemSection:rt.c,QItemLabel:nt.c,QTable:x.c,QTd:_.c,QTimeline:ct.c,QTimelineEntry:mt.c,QPageContainer:dt.c})}}]);