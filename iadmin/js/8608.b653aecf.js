"use strict";(globalThis["webpackChunkimagina_cms"]=globalThis["webpackChunkimagina_cms"]||[]).push([[8608],{88608:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ie});var s=a(92444),l=a(264),i=a(74044);const r={id:"contentAdFormPage",class:"relative-position"},o={class:"row q-col-gutter-md"},d={class:"box box-auto-height q-mb-md"},n={class:"q-mb-md"},c={class:"box q-mb-md"},m={class:"text-blue-grey text-weight-bold text-subtitle1 row items-center"},u={key:0,class:"q-ml-sm"},p={key:0},h={key:0,class:"box q-mb-md"},f={key:1,rounded:"",dense:"",class:"box box-auto-height q-mb-md"},g={class:"text-blue-grey text-weight-bold text-subtitle1 row items-center"},b={class:"text-blue-grey"},$={key:0,class:"text-right q-mt-md"},y={key:0,class:"q-pa-md"},v={class:"category-content"},q={class:"category-title row items-center"},k=["onClick"],I={class:"q-pa-md"},A={class:"q-pa-md"},x={class:"q-pa-md"},F={class:"q-pa-md row q-col-gutter-x-sm"},W={class:"row items-center text-grey-7 q-mb-md full-width"},Q={class:"col-12 text-right"},C={class:"q-pa-md row q-col-gutter-x-sm"},w={key:0,class:"col-12"},V={class:"text-blue-grey text-weight-bold text-center"},z={class:"text-caption text-blue-grey"},D={class:"text-caption text-blue-grey"},E={class:"text-caption text-blue-grey"},R={class:"text-caption text-blue-grey"},U={class:"text-caption text-blue-grey"},K={class:"text-caption text-blue-grey"},S={class:"col-12 text-right"};function P(e,t,a,P,M,_){const T=(0,s.E1)("page-actions"),N=(0,s.E1)("locales"),O=(0,s.E1)("q-icon"),Y=(0,s.E1)("q-separator"),j=(0,s.E1)("dynamic-field"),B=(0,s.E1)("q-btn"),L=(0,s.E1)("q-expansion-item"),H=(0,s.E1)("q-checkbox"),G=(0,s.E1)("q-scroll-area"),J=(0,s.E1)("q-item-label"),X=(0,s.E1)("q-item-section"),Z=(0,s.E1)("q-item"),ee=(0,s.E1)("q-list"),te=(0,s.E1)("q-form"),ae=(0,s.E1)("q-page-sticky"),se=(0,s.E1)("inner-loading");return(0,s.Wz)(),(0,s.An)("div",{id:"AdFormPage",key:M.pageId},[(0,s.QD)("div",r,[(0,s.QD)("div",o,[(0,s.K2)(te,{autocorrect:"off",autocomplete:"off",ref:"formAd",class:"col-12 col-lg-8 offset-lg-2",onSubmit:t[4]||(t[4]=e=>M.adId?_.updateItem():_.createItem()),onValidationError:t[5]||(t[5]=t=>e.$alert.error(e.$tr("isite.cms.message.formInvalid")))},{default:(0,s.Ql)((()=>[(0,s.QD)("div",d,[(0,s.K2)(T,{title:e.$tr(e.$route.meta.title)},null,8,["title"])]),(0,s.wt)((0,s.QD)("div",n,[(0,s.K2)(N,{modelValue:M.locale,"onUpdate:modelValue":t[0]||(t[0]=e=>M.locale=e),ref:"localeComponent",form:e.$refs.formContent},null,8,["modelValue","form"])],512),[[l.Ub,M.locale.fieldsTranslatable&&Object.keys(M.locale.fieldsTranslatable).length]]),(0,s.QD)("div",c,[(0,s.QD)("div",m,[(0,s.K2)(O,{name:"fas fa-bullhorn",class:"q-mr-sm"}),(0,s.mY)(" "+(0,i.WA)(e.$trp("iad.cms.form.newAd"))+" ",1),_.showIdInForm?((0,s.Wz)(),(0,s.An)("label",u,"#"+(0,i.WA)(M.adId),1)):(0,s.g1)("",!0)]),(0,s.K2)(Y,{class:"q-mt-sm q-mb-md"}),M.locale.success?((0,s.Wz)(),(0,s.An)("div",p,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(_.formFields.main,((e,t)=>((0,s.Wz)(),(0,s.Az)(j,{key:t,field:e,modelValue:M.locale.formTemplate[e.name||t],"onUpdate:modelValue":[a=>M.locale.formTemplate[e.name||t]=a,a=>_.handlerInputChange(e.name||t)],language:M.locale.language},null,8,["field","modelValue","onUpdate:modelValue","language"])))),128))])):(0,s.g1)("",!0)]),M.extraFields?((0,s.Wz)(),(0,s.An)("div",h,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(M.extraFields,((e,t)=>((0,s.Wz)(),(0,s.Az)(j,{key:t,field:e,modelValue:M.form[e.fakeFieldName||"options"][e.name||t],"onUpdate:modelValue":a=>M.form[e.fakeFieldName||"options"][e.name||t]=a},null,8,["field","modelValue","onUpdate:modelValue"])))),128))])):(0,s.g1)("",!0),_.checkStatusBanner?((0,s.Wz)(),(0,s.An)("div",f,[(0,s.QD)("div",g,[(0,s.K2)(O,{name:"fas fa-check-double",class:"q-mr-sm"}),(0,s.mY)(" "+(0,i.WA)(e.$tr("isite.cms.label.checked")),1)]),(0,s.K2)(Y,{class:"q-mt-sm q-mb-md"}),(0,s.K2)(O,{name:_.checkStatusBanner.icon,color:_.checkStatusBanner.color,size:"20px",class:"q-mr-sm"},null,8,["name","color"]),(0,s.QD)("label",b,(0,i.WA)(_.checkStatusBanner.message),1),_.checkStatusBanner.action?((0,s.Wz)(),(0,s.An)("div",$,[(0,s.K2)(B,{unelevated:"",rounded:"",color:_.checkStatusBanner.action.color,label:_.checkStatusBanner.action.label,onClick:_.checkStatusBanner.action.action},null,8,["color","label","onClick"])])):(0,s.g1)("",!0)])):(0,s.g1)("",!0),(0,s.K2)(L,{icon:"fas fa-map-marker-alt",label:e.$trp("iad.cms.form.whereLocation"),class:"box-collapse q-mb-md","default-opened":"","header-class":"header-container",group:"fromAdExpansion"},{default:(0,s.Ql)((()=>[M.locale.success?((0,s.Wz)(),(0,s.An)("div",y,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(_.formFields.location,((e,t)=>((0,s.Wz)(),(0,s.Az)(j,{key:t,field:e,modelValue:M.locale.formTemplate[e.name||t],"onUpdate:modelValue":a=>M.locale.formTemplate[e.name||t]=a},null,8,["field","modelValue","onUpdate:modelValue"])))),128))])):(0,s.g1)("",!0)])),_:1},8,["label"]),(0,s.K2)(L,{icon:"fas fa-layer-group",label:e.$trp("iad.cms.form.aboutAd"),class:"box-collapse q-mb-md","header-class":"header-container",group:"fromAdExpansion"},{default:(0,s.Ql)((()=>[(0,s.K2)(G,{style:{height:"400px",width:"100%"}},{default:(0,s.Ql)((()=>[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(M.categories,((e,t)=>((0,s.Wz)(),(0,s.An)("div",v,[(0,s.QD)("div",q,[(0,s.K2)(H,{modelValue:M.tmpMainCategories[e.id],"onUpdate:modelValue":[t=>M.tmpMainCategories[e.id]=t,t=>_.toggleSelectCategory(e)],value:e.id,dense:""},{default:(0,s.Ql)((()=>[(0,s.mY)((0,i.WA)(e.title),1)])),_:2},1032,["modelValue","onUpdate:modelValue","value"])]),((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(e.children,((e,t)=>((0,s.Wz)(),(0,s.An)("div",{key:t,class:(0,i.WN)("category-children "+(M.form.categories.includes(e.id)?"active":"")),onClick:t=>_.toggleSelectCategory(e)},(0,i.WA)(e.title),11,k)))),128))])))),256))])),_:1})])),_:1},8,["label"]),(0,s.K2)(L,{icon:"fas fa-clock",label:e.$trp("iad.cms.form.availableSchedule"),class:"box-collapse q-mb-md","header-class":"header-container","expand-separator":"",group:"fromAdExpansion"},{default:(0,s.Ql)((()=>[(0,s.QD)("div",I,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(_.formFields.schedule,((e,a)=>((0,s.Wz)(),(0,s.Az)(j,{key:a,field:e,modelValue:M.form.options[e.name||a],"onUpdate:modelValue":t=>M.form.options[e.name||a]=t,onConverted:t[1]||(t[1]=e=>M.form.schedule=e)},null,8,["field","modelValue","onUpdate:modelValue"])))),128))])])),_:1},8,["label"]),(0,s.K2)(L,{icon:"fas fa-address-book",label:e.$trp("iad.cms.form.howContact"),class:"box-collapse q-mb-md","header-class":"header-container","expand-separator":"",group:"fromAdExpansion"},{default:(0,s.Ql)((()=>[(0,s.QD)("div",A,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(_.formFields.contact,((e,t)=>((0,s.Wz)(),(0,s.Az)(j,{key:t,field:e,modelValue:M.form.options[e.name||t],"onUpdate:modelValue":a=>M.form.options[e.name||t]=a},null,8,["field","modelValue","onUpdate:modelValue"])))),128))])])),_:1},8,["label"]),(0,s.K2)(L,{icon:"fas fa-photo-video",class:"box-collapse q-mb-md",group:"fromAdExpansion","header-class":"header-container","expand-separator":"",label:e.$trp("iad.cms.form.photosAndVideo")},{default:(0,s.Ql)((()=>[(0,s.QD)("div",x,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(_.formFields.media,((e,t)=>((0,s.Wz)(),(0,s.Az)(j,{key:t,field:e,modelValue:M.form[e.name||t],"onUpdate:modelValue":a=>M.form[e.name||t]=a,"item-id":M.adId},null,8,["field","modelValue","onUpdate:modelValue","item-id"])))),128))])])),_:1},8,["label"]),(0,s.K2)(L,{icon:"fas fa-hand-holding-usd",label:e.$trp("iad.cms.form.rates"),class:"box-collapse q-mb-md","header-class":"header-container","expand-separator":"",group:"fromAdExpansion"},{default:(0,s.Ql)((()=>[(0,s.QD)("div",F,[(0,s.QD)("div",W,[(0,s.K2)(O,{class:"q-mr-sm",name:"fas fa-magic"}),(0,s.mY)(" "+(0,i.WA)(e.$tr("iad.cms.message.chooseDefaultPrice")),1)]),((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(M.pricesFields,((e,t)=>((0,s.Wz)(),(0,s.Az)(j,{key:t,class:"col-4",field:e,modelValue:M.form.prices[e.name],"onUpdate:modelValue":[t=>M.form.prices[e.name]=t,t=>_.changeDefaultPrice(e.name,t)]},null,8,["field","modelValue","onUpdate:modelValue"])))),128)),(0,s.QD)("div",Q,[(0,s.K2)(B,{onClick:t[2]||(t[2]=e=>_.setPricesFields()),label:e.$tr("isite.cms.label.add"),color:"green",rounded:"",unelevated:"",size:"10px"},null,8,["label"])])])])),_:1},8,["label"]),M.adInfo?((0,s.Wz)(),(0,s.Az)(L,{key:2,icon:"fas fa-rocket",label:e.$trp("iad.cms.form.adUps"),class:"box-collapse q-mb-md","header-class":"header-container","expand-separator":"",group:"fromAdExpansion"},{default:(0,s.Ql)((()=>[(0,s.QD)("div",C,[_.adUps&&_.adUps.length?((0,s.Wz)(),(0,s.An)("div",w,[(0,s.QD)("div",V,(0,i.WA)(e.$tr("iad.cms.message.automaticUploads")),1),(0,s.K2)(ee,{separator:"",class:"q-py-sm q-mb-md"},{default:(0,s.Ql)((()=>[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(_.adUps,((t,a)=>((0,s.Wz)(),(0,s.Az)(Z,{key:a},{default:(0,s.Ql)((()=>[(0,s.K2)(X,null,{default:(0,s.Ql)((()=>[(0,s.K2)(J,null,{default:(0,s.Ql)((()=>[(0,s.K2)(O,{name:"fas fa-arrow-alt-circle-up",class:"q-mr-sm",color:"blue-grey"}),(0,s.QD)("label",z,(0,i.WA)(e.$tr("iad.cms.form.upsDaily")),1),(0,s.mY)(" "+(0,i.WA)(t.upsCounter)+"/"+(0,i.WA)(t.upsDaily)+", ",1),(0,s.QD)("label",D,(0,i.WA)(e.$tr("iad.cms.form.daysLimit")),1),(0,s.mY)(" "+(0,i.WA)(t.daysCounter)+"/"+(0,i.WA)(t.daysLimit),1)])),_:2},1024),(0,s.K2)(J,null,{default:(0,s.Ql)((()=>[(0,s.K2)(O,{name:"fas fa-clock",class:"q-mr-sm",color:"blue-grey"}),(0,s.QD)("label",E,(0,i.WA)(e.$tr("isite.cms.label.since")),1),(0,s.mY)(" "+(0,i.WA)(e.$trd(`${t.fromDate} ${t.fromHour}`,{type:"time"}))+" ",1),(0,s.QD)("label",R,(0,i.WA)(e.$tr("isite.cms.label.until")),1),(0,s.mY)(" "+(0,i.WA)(e.$trd(`${t.toDate} ${t.toHour}`,{type:"time"})),1)])),_:2},1024),(0,s.K2)(J,null,{default:(0,s.Ql)((()=>[(0,s.K2)(O,{name:"fas fa-calendar",class:"q-mr-sm",color:"blue-grey"}),(0,s.QD)("label",U,(0,i.WA)(e.$tr("isite.cms.label.since")),1),(0,s.mY)(" "+(0,i.WA)(e.$trd(t.fromDate))+" ",1),(0,s.QD)("label",K,(0,i.WA)(e.$tr("isite.cms.label.until")),1),(0,s.mY)(" "+(0,i.WA)(e.$trd(t.toDate)),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])):(0,s.g1)("",!0),(0,s.QD)("div",S,[(0,s.K2)(B,{label:e.$tr("isite.cms.label.pay"),color:"green",rounded:"",unelevated:"",size:"10px",icon:"fas fa-rocket",onClick:t[3]||(t[3]=t=>e.$helper.openExternalURL(`${e.$store.state.qsiteApp.baseUrl}/pins/${M.adInfo.slug}/buy-up`,!0))},null,8,["label"])])])])),_:1},8,["label"])):(0,s.g1)("",!0)])),_:1},512),(0,s.K2)(ae,{position:"bottom-right",offset:[18,18]},{default:(0,s.Ql)((()=>[(0,s.K2)(B,{label:e.$tr("isite.cms.label.save"),color:"green",unelevated:"",rounded:"",onClick:t[6]||(t[6]=t=>e.$refs.formAd.submit())},null,8,["label"])])),_:1})]),(0,s.K2)(se,{visible:M.loading},null,8,["visible"])])])}a(23816);var M=a(8932),_=a(18528)["c"];const T={beforeUnmount(){M.kN.off("page.data.refresh")},props:{},components:{},watch:{},mounted(){this.$nextTick((function(){this.init()}))},data(){return{pageId:this.$uid(),adId:this.$route.params.id,adInfo:!1,loading:!1,renderMap:!1,categories:[],extraFields:!1,pricesFields:[],form:{categories:[],options:{},prices:{},mediasMulti:{},mediasSingle:{}},locale:{form:{},fields:{userId:this.$store.state.quserAuth.userId,countryId:null,provinceId:null,cityId:null,neighborhoodId:null,status:"2",sortOrder:null,checked:null,featured:null,lat:null,lng:null,map:null,terms:0,createdFromIp:this.$store.state.qsiteApp.ipAddress},fieldsTranslatable:{title:null,slug:null,description:null}},requestable:{data:null,config:{type:"requestCheckAd",requestable_type:"Modules\\Iad\\Entities\\Ad"}},tmpMainCategories:{}}},computed:{showIdInForm(){return"iadmin"==_("app.mode")&&this.adId},formFields(){return{main:{title:{value:"",type:"input",isTranslatable:!0,props:{label:`${this.$tr("isite.cms.form.title")}*`,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]}},slug:{value:"",type:"input",isTranslatable:!0,props:{label:`${this.$tr("isite.cms.form.slug")}*`,vIf:"iadmin"==_("app.mode"),rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]}},description:{value:"",type:"input",isTranslatable:!0,props:{label:`${this.$tr("isite.cms.form.description")}*`,type:"textarea",rows:"5",rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]}},userId:{value:null,type:"select",props:{label:`${this.$tr("isite.cms.label.user")}*`,readonly:!0,vIf:"iadmin"==_("app.mode"),rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]},loadOptions:{apiRoute:"apiRoutes.quser.users",select:{label:"fullName",id:"id"}}},status:{value:"2",type:"select",props:{label:`${this.$tr("isite.cms.form.status")}*`,vIf:"iadmin"==_("app.mode"),rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]},loadOptions:{apiRoute:"apiRoutes.qad.adStatus",select:{label:"name",id:"id"}}},sortOrder:{value:null,type:"input",props:{label:this.$tr("isite.cms.label.order"),vIf:"iadmin"==_("app.mode"),type:"number"}},createdFromIp:{type:"input",isFakeField:!0,value:this.$store.state.qsiteApp.ipAddress,props:{vIf:"iadmin"==_("app.mode"),readonly:!0,label:`${this.$tr("isite.cms.form.createdFromIp")}`}},featured:{value:0,type:"checkbox",props:{label:`${this.$tr("isite.cms.label.featured")}`,vIf:"iadmin"==_("app.mode"),trueValue:1,falseValue:0}},checked:{value:"0",type:"checkbox",props:{label:`${this.$tr("iad.cms.sidebar.checked")}`,vIf:"iadmin"==_("app.mode"),trueValue:"1",falseValue:"0"}},...this.termsAndConditions?{terms:this.termsAndConditions}:{}},location:{countryId:{value:null,type:"select",props:{label:this.$tr("isite.cms.label.country")+"*",rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]},loadOptions:{apiRoute:"apiRoutes.qlocations.countries",select:{label:"name",id:"id"}}},provinceId:{value:null,type:"select",props:{label:this.$tr("isite.cms.label.department")+"*",readonly:!this.locale.form.countryId,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]},loadOptions:{apiRoute:!!this.locale.form.countryId&&"apiRoutes.qlocations.provinces",select:{label:"name",id:"id"},requestParams:{filter:{country:this.locale.form.countryId}}}},cityId:{value:null,type:"select",props:{label:this.$tr("isite.cms.form.city")+"*",readonly:!this.locale.form.provinceId,rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")]},loadOptions:{apiRoute:!!this.locale.form.provinceId&&"apiRoutes.qlocations.cities",select:{label:"name",id:"id"},requestParams:{filter:{province_id:this.locale.form.provinceId}}}},neighborhoodId:{value:null,type:"select",props:{label:this.$tr("isite.cms.label.neighborhood"),readonly:!this.locale.form.cityId},loadOptions:{apiRoute:!!this.locale.form.provinceId&&"apiRoutes.qlocations.neighborhoods",select:{label:"name",id:"id"},requestParams:{filter:{cityId:this.locale.form.cityId}}}},map:{value:null,type:"positionMarkerMap",props:{label:`${this.$tr("isite.cms.label.search")}...`}}},schedule:{statusSchedule:{value:"1",type:"select",props:{label:this.$tr("isite.cms.form.status"),options:[{label:this.$tr("isite.cms.label.enabled"),value:"1"},{label:this.$tr("isite.cms.label.disabled"),value:"0"}]}},schedule:{value:null,type:"schedule"}},contact:{phone:{value:null,type:"input",props:{vIf:this.settings.contactFields.includes("phone"),label:this.$tr("isite.cms.label.phone"),mask:"phone",clearable:!0,unmaskedValue:!0}},whatsapp:{value:null,type:"input",props:{vIf:this.settings.contactFields.includes("whatsapp"),label:"Whatsapp",mask:"phone",clearable:!0,unmaskedValue:!0}},facebook:{value:null,type:"input",props:{vIf:this.settings.contactFields.includes("facebook"),label:"Facebook",clearable:!0}},instagram:{value:null,type:"input",props:{vIf:this.settings.contactFields.includes("instagram"),label:"Instagram",clearable:!0}},twitter:{value:null,type:"input",props:{vIf:this.settings.contactFields.includes("twitter"),label:"Twitter",clearable:!0}},youtube:{value:null,type:"input",props:{vIf:this.settings.contactFields.includes("youtube"),label:"YouTube",clearable:!0}}},media:{mediasSingle:{value:{},type:"media",props:{label:this.$tr("isite.cms.label.mainImage"),zone:"mainimage",entity:"Modules\\Iad\\Entities\\Ad",entityId:null,accept:"images",directUpload:!this.settings.selectFromMedia}},gallery:{name:"mediasMulti",value:{},type:"media",props:{label:`${this.$tr("isite.cms.form.gallery")} (${this.$trp("isite.cms.label.image")})`,zone:"gallery",entity:"Modules\\Iad\\Entities\\Ad",entityId:null,multiple:!0,accept:"images",directUpload:!this.settings.selectFromMedia}},videos:{name:"mediasMulti",value:{},type:"media",props:{label:"Videos",zone:"videos",entity:"Modules\\Iad\\Entities\\Ad",entityId:null,multiple:!0,maxFiles:3,accept:"videos",directUpload:!this.settings.selectFromMedia}}},map:{value:null,type:"positionMarkerMap",props:{label:`${this.$tr("isite.cms.label.search")}...`}}}},adUps(){let e=[];return this.adInfo.adUps.forEach((t=>{t.status&&e.push(t)})),e},settings(){return{politics:this.$getSetting("iad::adWithPoliticsOfPrivacy"),terms:this.$getSetting("iad::adWithTermsAndConditions"),contactFields:this.$getSetting("iad::contactFields")||[],selectFromMedia:parseInt(this.$getSetting("iad::selectFromMedia")||"0"),allowRequestForChecked:parseInt(this.$getSetting("iad::allowRequestForChecked")||0)}},termsAndConditions(){if("ipanel"!=_("app.mode"))return!1;let e=this.settings;if(!e.politics&&!e.terms)return!1;let t="";e.politics&&(t+=`<a href="${e.politics}" target="_blank" class="text-green"><b>${this.$tr("iprofile.cms.message.privacyPolicy")}</b></a>,`),e.terms&&(t+=`<a href="${e.terms}" target="_blank" class="text-green"><b>${this.$tr("iprofile.cms.message.termsAndConditions")}</b></a>,`);let a={name:"terms",value:0,type:"checkbox",props:{rules:[e=>!!e||this.$tr("isite.cms.message.fieldRequired")],label:this.$tr("iprofile.cms.message.privacyData",{concatData:t,siteName:this.$getSetting("core::site-name")})}};return a},checkStatusBanner(){if(!this.adInfo||!this.settings.allowRequestForChecked)return!1;let e={checked:{color:"green",icon:"fas fa-check-circle",message:this.$tr("iad.cms.adCheck.checked")},noRequested:{color:"amber",icon:"fas fa-exclamation-triangle",message:this.$tr("iad.cms.adCheck.noRequested"),action:{label:this.$tr("isite.cms.label.create"),color:"green",action:this.createRequestable}},requested:{color:"info",icon:"far fa-clock",message:`${this.$tr("iad.cms.adCheck.requested")}...`},rejected:{color:"red",icon:"far fa-times-circle",message:`${this.$tr("iad.cms.adCheck.rejected")}...`}},t=parseInt(this.adInfo.checked||0),a=this.requestable.data?this.requestable.data.status.value:null;return a=a?4==a?"rejected":"requested":"noRequested",e[t?"checked":a]}},methods:{async init(){await Promise.all([this.getData(),this.$hook.dispatchEvent(this.adId?"isUpdating":"isCreating",{entityName:_("main.qad.entityNames.ad")})]);let e=Object.keys(this.form.prices).length;this.setPricesFields(e?e/2:1),M.kN.on("page.data.refresh",(()=>{this.pageId=this.$uid(),this.getData(!0)})),this.categories.forEach((e=>{this.tmpMainCategories[e.id]=this.form.categories.includes(e.id)}))},async getData(e=!1){this.loading=!0,await Promise.all([this.getCategories(e),this.getExtraFields(e)]),await this.getAdData(e),this.loading=!1},getCategories(e=!1){return new Promise(((t,a)=>{let s={refresh:e};this.$crud.index("apiRoutes.qad.categories",s).then((e=>{this.categories=this.$array.builTree(e.data),t(e.data)})).catch((e=>{this.$apiResponse.handleError(e,(()=>{t(!1)}))}))}))},getExtraFields(e=!1){return new Promise(((t,a)=>{let s={refresh:e,params:{filter:{configName:"Iad.crud-fields.ads"}}};this.$crud.index("apiRoutes.qsite.configs",s).then((e=>{e.data&&(this.extraFields=e.data),Object.values(e.data).forEach((e=>{e.fakeFieldName&&(this.form[e.fakeFieldName]={})})),t(e.data)})).catch((e=>{this.$apiResponse.handleError(e,(()=>{t(!1)}))}))}))},getAdData(){return new Promise((e=>{if(!this.adId)return e(!0);let t={refresh:!0,params:{include:"fields,categories,adUps,requestable.status",filter:{allTranslations:!0}}};this.$crud.show("apiRoutes.qad.ads",this.adId,t).then((t=>{this.locale.form={...t.data,terms:1,createdFromIp:t.data.options?.createdFromIp||this.$store.state.qsiteApp.ipAddress},this.adInfo=t.data,t.data.fields&&t.data.fields.map(((e,t)=>this.form.fields[e.name]=e.value)),t.data.options&&(this.form.options=t.data.options),t.data.categories&&(this.form.categories=t.data.categories.map((e=>e.id))),t.data.options.prices&&t.data.options.prices.map(((e,t)=>{this.form.prices[`description${t}`]=e.description,this.form.prices[`price${t}`]=e.value,this.form.prices[`default${t}`]=e.default})),t.data.options.map&&(this.locale.form.map=this.form.options.map,this.locale.form.lat=this.form.options.map.lat,this.locale.form.lng=this.form.options.map.lng),t.data.requestable&&(this.requestable.data=t.data.requestable),e(t.data)})).catch((t=>{e(!1)}))}))},setPricesFields(e=1){let t=this.pricesFields.length?this.pricesFields.length/2:0;for(var a=0;a<e;a++)this.pricesFields=[...this.pricesFields,{value:null,type:"input",name:"description"+(t+a),props:{label:this.$tr("isite.cms.label.description")}},{value:null,name:"price"+(t+a),type:"input",props:{label:this.$tr("isite.cms.label.price"),type:"number",rules:[e=>!e||e>=10||this.$tr("isite.cms.message.fieldMinValue",{num:10})]}},{value:"0",type:"select",name:"default"+(t+a),props:{label:this.$tr("iad.cms.form.featuredRate"),useInput:!1,options:[{label:this.$tr("isite.cms.label.yes"),value:"1"},{label:this.$tr("isite.cms.label.no"),value:"0"}]}}]},toggleSelectCategory(e){let t=this.form.categories.findIndex((t=>t==e.id));-1==t?this.form.categories.push(e.id):this.form.categories.splice(t,1)},handlerInputChange(e){switch(e){case"title":this.adId||(this.locale.formTemplate.slug=this.$helper.getSlug(this.locale.formTemplate.title));break}},getFormData(){let e=this.$clone(this.locale.form),t=this.$clone(this.form),a=[],s=0,l=0;if(Object.keys(t.prices||{}).length)for(var i=0;i<Object.keys(t.prices).length/2;i++){let e=parseInt(t.prices[`price${i}`]);t.prices[`description${i}`]&&t.prices[`price${i}`]&&(a.push({description:t.prices[`description${i}`],value:e,default:t.prices[`default${i}`]}),(0==s||e<s)&&(s=e),e>l&&(l=e))}let r=[];if(Object.keys(t.fields||{}).length)for(var o in t.fields)r.push({name:o,value:t.fields[o]});const{createdFromIp:d,...n}=e,c={lat:e.map?e.map?.lat??"":"",lng:e.map?e.map?.lng??"":""};return{...n,categories:t.categories,lat:c.lat,lng:c.lng,options:{...t.options,prices:a,map:c,createdFromIp:d},minPrice:s,maxPrice:l,fields:r,mediasSingle:t.mediasSingle,mediasMulti:t.mediasMulti,schedule:t.schedule}},createItem(){return new Promise((e=>{this.loading=!0,this.$crud.create("apiRoutes.qad.ads",this.getFormData()).then((e=>{this.$alert.info({message:`${this.$tr("isite.cms.message.recordCreated")}`}),this.$hook.dispatchEvent("wasCreated",{entityName:_("main.qad.entityNames.ad")}),this.loading=!1,this.$router.push({name:"qad.ads.index"})})).catch((e=>{this.$alert.error({message:`${this.$tr("isite.cms.message.recordNoCreated")}`}),this.loading=!1}))}))},updateItem(){return new Promise((e=>{this.loading=!0;let t={...this.getFormData(),id:this.adId};this.$crud.update("apiRoutes.qad.ads",this.adId,t).then((e=>{this.$alert.info({message:`${this.$tr("isite.cms.message.recordUpdated")}`}),this.$hook.dispatchEvent("wasUpdated",{entityName:_("main.qad.entityNames.ad")}),this.loading=!1,this.$router.push({name:"qad.ads.index"})})).catch((e=>{this.$alert.error({message:`${this.$tr("isite.cms.message.recordNoUpdated")}`}),this.loading=!1}))}))},changeDefaultPrice(e,t){e.includes("default")&&parseInt(t)&&Object.keys(this.form.prices).forEach((t=>{t.includes("default")&&t!=e&&(this.form.prices[t]="0")}))},createRequestable(){return new Promise((e=>{this.loading=!0;let t={...this.requestable.config,requestableId:this.adId};this.$crud.create("apiRoutes.qrequestable.requestables",t).then((async e=>{this.$alert.success({message:`${this.$tr("isite.cms.message.recordCreated")}`}),await this.getAdData(),this.loading=!1})).catch((e=>{this.$alert.error({message:`${this.$tr("isite.cms.message.recordNoCreated")}`}),this.loading=!1}))}))}}};var N=a(68716),O=a(14288),Y=a(58120),j=a(70880),B=a(99140),L=a(61656),H=a(94380),G=a(78488),J=a(99588),X=a(84884),Z=a(11032),ee=a(2992),te=a(60352),ae=a(95252),se=a.n(ae);const le=(0,N.c)(T,[["render",P]]),ie=le;se()(T,"components",{QForm:O.c,QIcon:Y.c,QSeparator:j.c,QBtn:B.c,QExpansionItem:L.c,QScrollArea:H.c,QCheckbox:G.c,QList:J.c,QItem:X.c,QItemSection:Z.c,QItemLabel:ee.c,QPageSticky:te.c})}}]);