"use strict";(globalThis["webpackChunkimagina_cms"]=globalThis["webpackChunkimagina_cms"]||[]).push([[3456],{83456:(n,e,t)=>{t.r(e),t.d(e,{default:()=>g});var r=t(92444);function i(n,e,i,o,l,u){var a=(0,r.E1)("crud"),s=(0,r.E1)("inner-loading");return(0,r.Wz)(),(0,r.An)("div",null,[n.columns?((0,r.Wz)(),(0,r.Az)(a,{key:0,"crud-data":t.e(7144).then(t.bind(t,7144)),"custom-data":{read:{columns:n.columns}}},null,8,["crud-data","custom-data"])):(0,r.g1)("",!0),(0,r.K2)(s,{visible:!n.columns},null,8,["visible"])])}var o=t(75836),l=t(20584);const u={getSensors:function(){return new Promise((function(n,e){l.c.index("apiRoutes.qtelemetry.sensors",{refresh:!0}).then((function(e){n(e.data)})).catch((function(n){return e(n)}))}))}};var a=t(8932),s=function(){return s=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t],e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},s.apply(this,arguments)},c=function(n,e,t){if(t||2===arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return n.concat(r||Array.prototype.slice.call(e))};function f(n,e){(0,r._S)().appContext.config.globalProperties;var t={},i=(0,o.cB)({defaultCols:[{name:"id",label:a._s.tr("isite.cms.form.id"),field:"id",style:"width: 50px"},{name:"device",label:a._s.tr("itelemetry.cms.device"),field:"device",align:"rigth",format:function(n){return n&&(null===n||void 0===n?void 0:n.title)?n.title:"-"}},{name:"created_at",label:a._s.tr("isite.cms.form.createdAt"),field:"createdAt",align:"left",format:function(n){return n?a._s.trd(n):"-"}}],columns:null,sensors:null}),l={},f={init:function(){f.getSensors().then((function(n){i.columns=f.getColumns()}))},getSensors:function(){return new Promise((function(n,e){u.getSensors().then((function(e){i.sensors=e,n(e)}))}))},getColumns:function(){var n=i.sensors.map((function(n){return{name:"sensor_".concat(n.id),field:"logs",label:n.title,align:"center",format:function(e){if(e){var t=e.find((function(e){return e.sensorId==n.id}));if(t&&null!=(null===t||void 0===t?void 0:t.value))return Number.isInteger(t.value)?t.value:t.value.toFixed(2)}return"-"}}}));return c(c([],i.defaultCols,!0),n,!0)}};return(0,r.u2)((function(){f.init()})),s(s(s(s({},t),(0,o.kx)(i)),l),f)}const d=(0,r._M)({setup:function(n,e){var t=e.emit;return f(n,t)}});var m=t(68716);const v=(0,m.c)(d,[["render",i]]),g=v}}]);